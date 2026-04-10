import { Link, Navigate, useParams } from 'react-router-dom'
import { getAccountById } from '../data/accounts'
import { AccountShowcase } from '../components/AccountShowcase'
import { DISCORD_URL, DISCORD_USERNAME } from '../data/contact'

export function AccountDetailPage() {
  const { accountId } = useParams()
  const account = accountId ? getAccountById(accountId) : null

  if (!account) {
    return <Navigate to="/" replace />
  }

  const hasShowcase = Array.isArray(account.showcase) && account.showcase.length > 0

  return (
    <main className="account-detail-page">
      <div className="section account-detail-head">
        <Link className="back-link" to="/#listings">
          ← All showcases
        </Link>
        <div className="account-detail-summary">
          <div className="account-detail-media">
            <img src={account.image} alt="" loading="eager" width={900} height={600} />
            {account.badge ? <span className="card-badge">{account.badge}</span> : null}
          </div>
          <div className="account-detail-body">
            <h1 className="account-detail-title">{account.title}</h1>
            <dl className="card-meta account-detail-meta">
              <div>
                <dt>Server</dt>
                <dd>{account.server}</dd>
              </div>
              <div>
                <dt>Power</dt>
                <dd>{account.power}</dd>
              </div>
            </dl>
            <ul className="card-highlights">
              {account.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="account-detail-actions account-detail-actions--split">
              <a
                className="btn btn-primary"
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
              >
                Discord · @{DISCORD_USERNAME}
              </a>
              <Link className="btn btn-ghost" to="/#contact">
                Contact &amp; notes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {hasShowcase ? (
        <div className="section account-detail-showcase-wrap">
          <AccountShowcase
            accountTitle={account.title}
            anchorId={`showcase-${account.id}`}
            sections={account.showcase}
          />
        </div>
      ) : (
        <div className="section">
          <p className="showcase-lede">Screenshots for this showcase are not published yet.</p>
        </div>
      )}
    </main>
  )
}
