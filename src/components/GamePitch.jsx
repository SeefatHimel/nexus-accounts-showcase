const FB = 'https://www.facebook.com/Nexus-War-105668681957633'

export function GamePitch() {
  return (
    <section className="section game-pitch" id="game" aria-labelledby="game-title">
      <div className="section-head">
        <h2 id="game-title">Why players hunt strong accounts</h2>
        <p>
          <em>Nexus War: Civilization</em> (Phantix Games) is a sci-fi strategy MMO on
          Origin Star: four races, alliance warfare, city building, and the Infinity
          Throne endgame. A head start saves months of grind.
        </p>
      </div>
      <ul className="feature-grid">
        <li>
          <h3>Open world &amp; relics</h3>
          <p>Explore monster-infested lands, chase treasures, and unpick the world’s story.</p>
        </li>
        <li>
          <h3>Heroes &amp; army comp</h3>
          <p>Dozens of heroes across Humans, Izans, Aokus, and Theias—infantry, artillery, tanks.</p>
        </li>
        <li>
          <h3>City mega-structures</h3>
          <p>Titan Docks, Research Lab, Intelligence Building—progression that shows on the map.</p>
        </li>
        <li>
          <h3>Alliance throne wars</h3>
          <p>Coordinate for fortress control and the rarest rewards—account quality matters here.</p>
        </li>
      </ul>
      <p className="game-meta">
        Official community:{' '}
        <a href={FB} target="_blank" rel="noreferrer">
          Nexus War on Facebook
        </a>
        . This site is an independent seller showcase—not affiliated with the publisher.
      </p>
    </section>
  )
}
