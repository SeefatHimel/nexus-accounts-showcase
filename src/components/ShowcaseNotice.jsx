import { Link } from 'react-router-dom'

export function ShowcaseNotice() {
  return (
    <div className="showcase-notice" role="note">
      <p>
        <strong>Showcase &amp; share.</strong> This site only displays progression stats and
        screenshots we choose to publish about our own gameplay in{' '}
        <em>Nexus War: Civilization</em>. We are <strong>not</strong> the publisher and we do{' '}
        <strong>not</strong> run in-game sales or checkout here. Use{' '}
        <Link className="showcase-notice-link" to={{ pathname: '/', hash: 'contact' }}>
          Contact
        </Link>{' '}
        / Discord if you want to reach us privately.
      </p>
    </div>
  )
}
