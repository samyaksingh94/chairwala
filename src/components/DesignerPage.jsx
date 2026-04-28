import designers from '../data/designers';
import chairs from '../data/chairs';

export default function DesignerPage({ designerName, prevView, sort, onBack, onSelectChair }) {
  const info = designers[designerName] || {};
  const designerChairs = [...chairs]
    .filter(c => c.designer === designerName)
    .sort(sort === 'year'
      ? (a, b) => parseInt(a.year) - parseInt(b.year)
      : (a, b) => a.name.localeCompare(b.name));

  const metaParts = [info.nationality, info.dates].filter(Boolean);

  return (
    <>
      <button className="dpage-back" onClick={onBack}>
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="13" y1="8" x2="3" y2="8"/><polyline points="7,4 3,8 7,12"/>
        </svg>
        All chairs
      </button>
      <h2 className="dpage-name">{designerName}</h2>
      {metaParts.length > 0 && <p className="dpage-meta">{metaParts.join(' · ')}</p>}
      {info.bio && <p className="dpage-bio">{info.bio}</p>}

      <div className="grid-status" style={{ margin: '48px -52px 0' }}>
        <span>Chairs by {designerName}</span>
        <span>{designerChairs.length} chair{designerChairs.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="grid" style={{ margin: '0 -52px' }}>
        {designerChairs.map(chair => (
          <button key={chair.id} className="card" onClick={() => onSelectChair(chair)}>
            <div className="card-art" dangerouslySetInnerHTML={{ __html: chair.svg }} />
            <h2 className="card-name">{chair.name}</h2>
            <div className="card-meta"><span>{chair.year}</span></div>
          </button>
        ))}
      </div>
    </>
  );
}
