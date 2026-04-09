import { useMemo, useState } from 'react'
import { ACCOUNTS } from '../data/accounts'

export function AccountListings() {
  const servers = useMemo(() => {
    const s = [...new Set(ACCOUNTS.map((a) => a.server))].sort()
    return s
  }, [])
  const [server, setServer] = useState('all')
  const [maxPrice, setMaxPrice] = useState(500)

  const filtered = useMemo(() => {
    return ACCOUNTS.filter((a) => {
      if (server !== 'all' && a.server !== server) return false
      if (maxPrice < 500 && a.priceUsd > maxPrice) return false
      return true
    })
  }, [server, maxPrice])

  return (
    <section className="section listings" id="listings" aria-labelledby="listings-title">
      <div className="section-head">
        <h2 id="listings-title">Accounts for sale</h2>
        <p>
          Demo data wired for layout. Edit <code>src/data/accounts.js</code> with your
          real stats, prices, and screenshot URLs.
        </p>
      </div>

      <div className="filters" role="group" aria-label="Filter listings">
        <label className="filter">
          <span>Server</span>
          <select value={server} onChange={(e) => setServer(e.target.value)}>
            <option value="all">All servers</option>
            {servers.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="filter">
          <span>Max price (USD)</span>
          <input
            type="range"
            min="50"
            max="500"
            step="10"
            value={Math.min(maxPrice, 500)}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <span className="filter-value">
            {maxPrice >= 500 ? 'Any' : `Up to $${maxPrice}`}
          </span>
        </label>
      </div>

      <div className="card-grid">
        {filtered.map((acc) => (
          <article key={acc.id} className="account-card">
            <div className="card-media">
              <img src={acc.image} alt="" loading="lazy" width={900} height={600} />
              {acc.badge ? <span className="card-badge">{acc.badge}</span> : null}
            </div>
            <div className="card-body">
              <h3>{acc.title}</h3>
              <dl className="card-meta">
                <div>
                  <dt>Server</dt>
                  <dd>{acc.server}</dd>
                </div>
                <div>
                  <dt>Power</dt>
                  <dd>{acc.power}</dd>
                </div>
                <div>
                  <dt>Asking</dt>
                  <dd className="price">${acc.priceUsd}</dd>
                </div>
              </dl>
              <ul className="card-highlights">
                {acc.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <a className="btn btn-primary btn-block" href="#contact">
                Inquire · {acc.id}
              </a>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No accounts match those filters—widen price or server.</p>
      ) : null}
    </section>
  )
}
