import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" to="/">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">
            Nexus<span className="logo-accent">Vault</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link to="/#listings">Accounts</Link>
          <Link to="/#game">The game</Link>
          <Link to="/#how">How buying works</Link>
          <Link className="nav-cta" to="/#contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
