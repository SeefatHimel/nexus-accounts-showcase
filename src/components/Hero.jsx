import { HERO_IMAGE } from '../data/accounts'

const PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.nirvanagames.nexuswar'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div
        className="hero-bg"
        style={{ '--hero-img': `url(${HERO_IMAGE})` }}
        role="presentation"
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">Premium account sales · Nexus War: Civilization</p>
        <h1 id="hero-title">Origin Star accounts, verified and ready to transfer</h1>
        <p className="hero-lede">
          Listings for serious players: power, heroes, alliance standing, and
          progression you can actually use in{' '}
          <a href={PLAY_STORE} target="_blank" rel="noreferrer">
            Nexus War: Civilization
          </a>
          . Swap in your own screenshots anytime—placeholders are from Unsplash for now.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#listings">
            Browse accounts
          </a>
          <a className="btn btn-ghost" href={PLAY_STORE} target="_blank" rel="noreferrer">
            View on Google Play
          </a>
        </div>
        <ul className="hero-stats" aria-label="Listing snapshot">
          <li>
            <strong>4</strong>
            <span>demo listings</span>
          </li>
          <li>
            <strong>100%</strong>
            <span>you control pricing copy</span>
          </li>
          <li>
            <strong>0</strong>
            <span>middlemen on this page</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
