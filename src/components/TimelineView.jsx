export default function TimelineView({ chairs, onSelectChair }) {
  const sorted = [...chairs].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  const decades = {};
  sorted.forEach(c => {
    const d = Math.floor(parseInt(c.year) / 10) * 10;
    (decades[d] = decades[d] || []).push(c);
  });

  return (
    <div className="tl-inner">
      {Object.entries(decades).map(([decade, items]) => (
        <div className="tl-decade" key={decade}>
          <span className="tl-decade-label">{decade}s</span>
          {items.map(c => (
            <button key={c.id} className="tl-card" onClick={() => onSelectChair(c)}>
              <div className="tl-art" dangerouslySetInnerHTML={{ __html: c.svg }} />
              <div>
                <div className="tl-card-name">{c.name}</div>
                <div className="tl-card-year">{c.year}</div>
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
