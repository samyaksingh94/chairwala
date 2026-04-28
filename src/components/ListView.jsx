import { useState, useEffect, useRef } from 'react';

const ITEM_H = 35;
const COL_PAD_TOP = 28;

export default function ListView({ chairs, onSelectChair, isFullscreen }) {
  const containerRef = useRef(null);
  const [itemsPerCol, setItemsPerCol] = useState(20);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) return;
    function measure() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const h = window.innerHeight - rect.top;
      containerRef.current.style.height = h + 'px';
      setItemsPerCol(Math.max(1, Math.floor((h - COL_PAD_TOP) / ITEM_H)));
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [isMobile, isFullscreen]);

  if (isMobile) {
    return (
      <div className="list-inner">
        <div className="list-col">
          {chairs.map((c, i) => (
            <button key={c.id} className="list-item" onClick={() => onSelectChair(c)}>
              <span className="list-item-num">{String(i + 1).padStart(2, '0')}.</span>
              <span className="list-item-name">{c.name}</span>
              <span className="list-item-year">{c.year}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const cols = [];
  for (let i = 0; i < chairs.length; i += itemsPerCol) {
    cols.push(chairs.slice(i, i + itemsPerCol).map((c, j) => ({ chair: c, globalIdx: i + j })));
  }

  return (
    <div className="list-inner" ref={containerRef}>
      {cols.map((col, ci) => (
        <div className="list-col" key={ci}>
          {col.map(({ chair: c, globalIdx }) => (
            <button key={c.id} className="list-item" onClick={() => onSelectChair(c)}>
              <span className="list-item-num">{String(globalIdx + 1).padStart(2, '0')}.</span>
              <span className="list-item-name">{c.name}</span>
              <span className="list-item-year">{c.year}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
