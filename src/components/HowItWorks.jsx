export function HowItWorks() {
  return (
    <section className="section how" id="how" aria-labelledby="how-title">
      <div className="section-head">
        <h2 id="how-title">How buying works</h2>
        <p>
          You define the real process. This block is a professional default you can
          align with how you actually transfer accounts (email bind, supercell-style
          flows, middleman discords, etc.).
        </p>
      </div>
      <ol className="steps">
        <li>
          <span className="step-num">1</span>
          <div>
            <h3>Pick a listing</h3>
            <p>Note server, power, and heroes. Ask for timestamped screenshots or screen share.</p>
          </div>
        </li>
        <li>
          <span className="step-num">2</span>
          <div>
            <h3>Secure payment</h3>
            <p>Use a method you trust: invoice, escrow, or platform with buyer protection.</p>
          </div>
        </li>
        <li>
          <span className="step-num">3</span>
          <div>
            <h3>Transfer &amp; verify</h3>
            <p>Complete credential or binding changes together. Confirm login before release.</p>
          </div>
        </li>
      </ol>
    </section>
  )
}
