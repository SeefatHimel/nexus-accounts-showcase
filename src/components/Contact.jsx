import { DISCORD_URL, DISCORD_USER_ID, DISCORD_USERNAME } from '../data/contact'

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <h2 id="contact-title">Contact</h2>
        <p>
          If something on this site interests you, you can message us on <strong>Discord</strong>.
          We only talk <strong>privately</strong> there—this website does not process payments or
          transfers. Use the username and user ID below to verify you found the right person.
        </p>
        <dl className="contact-discord">
          <div>
            <dt>Username</dt>
            <dd>
              <code>{DISCORD_USERNAME}</code>
            </dd>
          </div>
          <div>
            <dt>User ID</dt>
            <dd>
              <code>{DISCORD_USER_ID}</code>
            </dd>
          </div>
        </dl>
        <div className="contact-actions">
          <a
            className="btn btn-primary"
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open Discord profile
          </a>
          <a className="btn btn-ghost" href="#listings">
            Back to showcases
          </a>
        </div>
      </div>
    </section>
  )
}
