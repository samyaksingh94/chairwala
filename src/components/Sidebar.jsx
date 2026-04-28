export default function Sidebar({ isOpen, view, sort, theme, onClose, onSetView, onSetSort, onSetTheme }) {
  return (
    <aside className={`sidebar${isOpen ? ' open' : ''}`}>
      <button className="sidebar-close" onClick={onClose}>&#x2715;</button>

      <div className="sidebar-section">
        <span className="sidebar-label">View</span>
        <div className="theme-options">
          <button className={`theme-btn${view === 'grid' ? ' active' : ''}`} onClick={() => onSetView('grid')}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="1" width="12" height="12"/>
              <line x1="7" y1="1" x2="7" y2="13"/>
              <line x1="1" y1="7" x2="13" y2="7"/>
            </svg>
            Grid
          </button>
          <button className={`theme-btn${view === 'timeline' ? ' active' : ''}`} onClick={() => onSetView('timeline')}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <circle cx="7" cy="7" r="5.5"/>
              <line x1="7" y1="4" x2="7" y2="7"/>
              <line x1="7" y1="7" x2="10" y2="8.5"/>
            </svg>
            Timeline
          </button>
          <button className={`theme-btn${view === 'list' ? ' active' : ''}`} onClick={() => onSetView('list')}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <line x1="1" y1="3.5" x2="13" y2="3.5"/>
              <line x1="1" y1="7" x2="13" y2="7"/>
              <line x1="1" y1="10.5" x2="13" y2="10.5"/>
            </svg>
            List
          </button>
        </div>
      </div>

      {view !== 'timeline' && (
        <div className="sidebar-section">
          <span className="sidebar-label">Sort by</span>
          <div className="sidebar-options">
            <button className={`ctrl-btn${sort === 'name' ? ' active' : ''}`} onClick={() => onSetSort('name')}>A–Z</button>
            <button className={`ctrl-btn${sort === 'year' ? ' active' : ''}`} onClick={() => onSetSort('year')}>Year</button>
          </div>
        </div>
      )}

      <div className="sidebar-section">
        <span className="sidebar-label">Appearance</span>
        <div className="theme-options">
          <button className={`theme-btn${theme === 'light' ? ' active' : ''}`} onClick={() => onSetTheme('light')}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="8" cy="8" r="3"/>
              <line x1="8" y1="1" x2="8" y2="3"/><line x1="8" y1="13" x2="8" y2="15"/>
              <line x1="1" y1="8" x2="3" y2="8"/><line x1="13" y1="8" x2="15" y2="8"/>
              <line x1="3.05" y1="3.05" x2="4.46" y2="4.46"/><line x1="11.54" y1="11.54" x2="12.95" y2="12.95"/>
              <line x1="12.95" y1="3.05" x2="11.54" y2="4.46"/><line x1="4.46" y1="11.54" x2="3.05" y2="12.95"/>
            </svg>
            Light
          </button>
          <button className={`theme-btn${theme === 'dark' ? ' active' : ''}`} onClick={() => onSetTheme('dark')}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 10.5A6 6 0 0 1 5.5 3a6 6 0 1 0 7.5 7.5z"/>
            </svg>
            Dark
          </button>
        </div>
      </div>
    </aside>
  );
}
