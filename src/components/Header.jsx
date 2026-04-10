import { Link, useLocation, useNavigate } from 'react-router-dom'

const SECTIONS = [
  { hash: 'listings', label: 'Showcases' },
  { hash: 'game', label: 'The game' },
  { hash: 'how', label: 'Reach out' },
  { hash: 'contact', label: 'Contact', cta: true },
]

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  function goSection(hash) {
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash })
      return
    }
    if (location.hash === `#${hash}`) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    navigate({ pathname: '/', hash }, { replace: false })
  }

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
          {SECTIONS.map(({ hash, label, cta }) => (
            <button
              key={hash}
              type="button"
              className={cta ? 'nav-link nav-cta' : 'nav-link'}
              onClick={() => goSection(hash)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
