import { useReducer, useEffect, useCallback } from 'react';
import chairs from './data/chairs';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GridView from './components/GridView';
import TimelineView from './components/TimelineView';
import ListView from './components/ListView';
import ChairModal from './components/ChairModal';
import GridStatus from './components/GridStatus';
import usePWAIcons from './hooks/usePWAIcons';

const sorters = {
  name: (a, b) => a.name.localeCompare(b.name),
  year: (a, b) => parseInt(a.year) - parseInt(b.year),
};

function getFiltered(sort, designer, movement) {
  let list = [...chairs];
  if (designer) list = list.filter(c => c.designer === designer);
  if (movement) list = list.filter(c => c.movement === movement);
  list.sort(sorters[sort] || sorters.name);
  return list;
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  const hour = new Date().getHours();
  return hour < 7 || hour >= 19 ? 'dark' : 'light';
}

const initialState = {
  view: 'grid',
  sort: 'name',
  filterDesigner: null,
  filterMovement: null,
  theme: initTheme(),
  sidebarOpen: false,
  modal: null,
  isFullscreen: false,
  scrollY: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, view: action.view, sidebarOpen: false };
    case 'SET_SORT':
      return { ...state, sort: action.sort };
    case 'SET_FILTER_DESIGNER':
      return { ...state, filterDesigner: action.name, filterMovement: null, modal: null };
    case 'SET_FILTER_MOVEMENT':
      return { ...state, filterMovement: action.name, filterDesigner: null, modal: null };
    case 'CLEAR_FILTER':
      return { ...state, filterDesigner: null, filterMovement: null };
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'CLOSE_SIDEBAR':
      return { ...state, sidebarOpen: false };
    case 'OPEN_MODAL':
      return { ...state, modal: action.chair };
    case 'CLOSE_MODAL':
      return { ...state, modal: null };
    case 'TOGGLE_FULLSCREEN':
      return { ...state, isFullscreen: !state.isFullscreen };
    case 'SET_SCROLL_Y':
      return { ...state, scrollY: action.y };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { view, sort, filterDesigner, filterMovement, theme, sidebarOpen, modal, isFullscreen, scrollY } = state;

  usePWAIcons();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle('fs', isFullscreen);
  }, [isFullscreen]);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  useEffect(() => {
    const handler = () => dispatch({ type: 'SET_SCROLL_Y', y: window.scrollY });
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') dispatch({ type: 'CLOSE_MODAL' });
      if (e.key === 'f' && !e.metaKey && !e.ctrlKey && !modal && e.target.tagName !== 'INPUT') {
        dispatch({ type: 'TOGGLE_FULLSCREEN' });
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [modal]);

  const filteredChairs = getFiltered(sort, filterDesigner, filterMovement);

  const statusLabel = filterDesigner
    ? `Chairs by ${filterDesigner}`
    : filterMovement || (sort === 'name' ? 'A–Z' : 'Year');

  const hasFilter = !!(filterDesigner || filterMovement);

  const openModal = useCallback((chair) => dispatch({ type: 'OPEN_MODAL', chair }), []);
  const closeModal = useCallback(() => dispatch({ type: 'CLOSE_MODAL' }), []);

  const scrolledPastViewport = scrollY > window.innerHeight;

  return (
    <>
      <Header
        isScrolled={scrollY > 10}
        onHamburgerClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
      />

      <div
        className={`sidebar-backdrop${sidebarOpen ? ' open' : ''}`}
        onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })}
      />

      <Sidebar
        isOpen={sidebarOpen}
        view={view}
        sort={sort}
        theme={theme}
        onClose={() => dispatch({ type: 'CLOSE_SIDEBAR' })}
        onSetView={(v) => dispatch({ type: 'SET_VIEW', view: v })}
        onSetSort={(s) => dispatch({ type: 'SET_SORT', sort: s })}
        onSetTheme={(t) => dispatch({ type: 'SET_THEME', theme: t })}
      />

      {view !== 'designer' && (
        <GridStatus
          label={statusLabel}
          count={filteredChairs.length}
          hasFilter={hasFilter}
          onClear={() => dispatch({ type: 'CLEAR_FILTER' })}
        />
      )}

      {view === 'grid' && (
        <main className="grid">
          <GridView chairs={filteredChairs} onSelectChair={openModal} />
        </main>
      )}

      {view === 'timeline' && (
        <div className="timeline" style={{ display: 'block' }}>
          <TimelineView chairs={filteredChairs} onSelectChair={openModal} />
        </div>
      )}

      {view === 'list' && (
        <div className="list-view" style={{ display: 'flex' }}>
          <ListView chairs={filteredChairs} onSelectChair={openModal} isFullscreen={isFullscreen} />
        </div>
      )}

      <ChairModal
        chair={modal}
        onClose={closeModal}
        onFilterDesigner={(name) => dispatch({ type: 'SET_FILTER_DESIGNER', name })}
        onFilterMovement={(name) => dispatch({ type: 'SET_FILTER_MOVEMENT', name })}
      />

      <button
        className={`scroll-top${scrolledPastViewport ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="scroll-top-label">Back to top</span>
        <svg className="scroll-top-arrow" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="13" x2="8" y2="3"/><polyline points="4,7 8,3 12,7"/>
        </svg>
      </button>

      <button className="fs-hint" onClick={() => dispatch({ type: 'TOGGLE_FULLSCREEN' })}>
        Press F to exit
      </button>
    </>
  );
}
