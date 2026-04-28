export default function Header({ isScrolled, onHamburgerClick }) {
  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="header-title-row">
        <h1>Chairwala</h1>
        <button className="hamburger" onClick={onHamburgerClick} aria-label="Open filters">
          <span /><span /><span />
        </button>
      </div>
      <p className="header-right">A catalogue of chairs that changed the way we think about sitting.</p>
    </header>
  );
}
