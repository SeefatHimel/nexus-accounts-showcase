import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ACCOUNTS } from '../data/accounts'
import { DISCORD_URL, DISCORD_USERNAME } from '../data/contact'

export function AccountListings() {
  const servers = useMemo(() => {
    const s = [...new Set(ACCOUNTS.map((a) => a.server))].sort()
    return s
  }, [])
  const [server, setServer] = useState('all')

  const filtered = useMemo(() => {
    return ACCOUNTS.filter((a) => {
      if (server !== 'all' && a.server !== server) return false
      return true
    })
  }, [server])

  return (
    <section className="section listings" id="listings" aria-labelledby="listings-title">
      <div className="section-head">
        <h2 id="listings-title">Account showcases</h2>
        <p>
          Every card opens a full page of stats and in-game screenshots. NexusVault is a fan-run showcase—
          not affiliated with the publisher, and not an official game listing.
        </p>
      </div>

      <div className="filters" role="group" aria-label="Filter showcases">
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
              </dl>
              <ul className="card-highlights">
                {acc.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link className="btn btn-primary btn-block" to={`/account/${acc.id}`}>
                Open showcase
              </Link>
              <a
                className="btn btn-ghost btn-block card-secondary"
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
              >
                Say hi on Discord · @{DISCORD_USERNAME}
              </a>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No showcases match that server—try “All servers”.</p>
      ) : null}
    </section>
  )
}
