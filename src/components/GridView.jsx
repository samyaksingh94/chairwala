export default function GridView({ chairs, onSelectChair }) {
  return chairs.map((chair) => (
    <button key={chair.id} className="card" onClick={() => onSelectChair(chair)}>
      <div className="card-art" dangerouslySetInnerHTML={{ __html: chair.svg }} />
      <h2 className="card-name">{chair.name}</h2>
      <div className="card-meta">
        <span>{chair.designer}</span>
        <span>{chair.year}</span>
      </div>
    </button>
  ));
}
