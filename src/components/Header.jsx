export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#top">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">
            Nexus<span className="logo-accent">Vault</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#listings">Accounts</a>
          <a href="#game">The game</a>
          <a href="#how">How buying works</a>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
