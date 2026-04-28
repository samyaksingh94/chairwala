export default function ChairModal({ chair, onClose, onFilterDesigner, onFilterMovement }) {
  const isOpen = !!chair;

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleDesigner() {
    onFilterDesigner(chair.designer);
    onClose();
  }

  function handleMovement() {
    onFilterMovement(chair.movement);
    onClose();
  }

  return (
    <div className={`overlay${isOpen ? ' open' : ''}`} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="modal-wrap">
        <div className="modal">
          {chair && (
            <>
              <button className="modal-close" onClick={onClose} aria-label="Close">&#x2715;</button>
              <div className="modal-art" dangerouslySetInnerHTML={{ __html: chair.svg }} />
              <div className="modal-body">
                <h2 className="modal-name">{chair.name}</h2>
                <button className="modal-designer" onClick={handleDesigner}>{chair.designer}</button>
                <p className="modal-desc">{chair.description}</p>
                <div className="modal-details">
                  <div className="detail-row">
                    <span className="detail-label">Year</span>
                    <span className="detail-value">{chair.year}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Origin</span>
                    <span className="detail-value">{chair.origin}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Manufacturer</span>
                    <span className="detail-value">{chair.manufacturer}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Movement</span>
                    <span className="detail-value">
                      <button className="modal-designer" style={{ marginBottom: 0 }} onClick={handleMovement}>
                        {chair.movement}
                      </button>
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Material</span>
                    <span className="detail-value">{chair.material}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
