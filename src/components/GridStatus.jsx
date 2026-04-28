export default function GridStatus({ label, count, hasFilter, onClear }) {
  return (
    <div className="grid-status">
      <span>{label}</span>
      <span>
        {count} chairs
        {hasFilter && (
          <button className="clear-designer" onClick={onClear}>×</button>
        )}
      </span>
    </div>
  );
}
