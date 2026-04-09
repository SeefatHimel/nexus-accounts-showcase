import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ACCOUNTS } from '../data/accounts'
import { DISCORD_URL, DISCORD_USERNAME } from '../data/contact'

const PRICE_SLIDER_MAX = 2000

export function AccountListings() {
  const servers = useMemo(() => {
    const s = [...new Set(ACCOUNTS.map((a) => a.server))].sort()
    return s
  }, [])
  const [server, setServer] = useState('all')
  const [maxPrice, setMaxPrice] = useState(PRICE_SLIDER_MAX)

  const filtered = useMemo(() => {
    return ACCOUNTS.filter((a) => {
      if (server !== 'all' && a.server !== server) return false
      if (
        maxPrice < PRICE_SLIDER_MAX &&
        a.priceUsd != null &&
        a.priceUsd > maxPrice
      ) {
        return false
      }
      return true
    })
  }, [server, maxPrice])

  return (
    <section className="section listings" id="listings" aria-labelledby="listings-title">
      <div className="section-head">
        <h2 id="listings-title">Accounts for sale</h2>
        <p>
          Each account has its own page with screenshots and stats. Add more rows in{' '}
          <code>src/data/accounts.js</code>.
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
            max={PRICE_SLIDER_MAX}
            step="50"
            value={Math.min(maxPrice, PRICE_SLIDER_MAX)}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <span className="filter-value">
            {maxPrice >= PRICE_SLIDER_MAX ? 'Any' : `Up to $${maxPrice}`}
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
                  <dd className="price">
                    {acc.priceUsd != null ? `$${acc.priceUsd}` : 'Ask'}
                    {acc.priceNote ? (
                      <span className="price-sub">{acc.priceNote}</span>
                    ) : null}
                  </dd>
                </div>
              </dl>
              <ul className="card-highlights">
                {acc.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link className="btn btn-primary btn-block" to={`/account/${acc.id}`}>
                Open listing
              </Link>
              <a
                className="btn btn-ghost btn-block card-secondary"
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
              >
                Inquire on Discord · @{DISCORD_USERNAME}
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
