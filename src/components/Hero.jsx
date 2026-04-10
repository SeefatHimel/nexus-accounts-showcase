import { HERO_IMAGE } from '../data/accounts'

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
        <p className="eyebrow">Nexus War: Civilization · player showcases</p>
        <h1 id="hero-title">We share how our accounts look—not the publisher, just our screenshots</h1>
        <p className="hero-lede">
          Progression, power, research, titans, inventory—laid out for anyone curious about high-level{' '}
          <em>Nexus War: Civilization</em> accounts. If you want to talk, use the contact links; this
          page does not sell or transfer anything on behalf of the game.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#listings">
            Browse showcases
          </a>
          <a className="btn btn-ghost" href="#game">
            About this game
          </a>
        </div>
        <ul className="hero-stats" aria-label="Site snapshot">
          <li>
            <strong>1</strong>
            <span>showcase live</span>
          </li>
          <li>
            <strong>0</strong>
            <span>checkout on-site</span>
          </li>
          <li>
            <strong>100%</strong>
            <span>independent &amp; unofficial</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
