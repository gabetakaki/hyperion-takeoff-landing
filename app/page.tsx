import LoginCard from "@/components/LoginCard";

const CTA_PRIMARY = "Start free trial";

const features = [
  {
    glyph: "L·A·N",
    title: "Three ways to measure",
    body: "Linear, area, and count — switch tools and trace right on the sheet. Calibrate once and every line reports in real units.",
  },
  {
    glyph: "⊞",
    title: "Linked to your catalog",
    body: "Tie any takeoff to cost codes, item masters, and product options. Quantities resolve to the exact SKUs you actually buy.",
  },
  {
    glyph: "↗",
    title: "Exports anywhere",
    body: "One click to an Excel-ready file built for JD Edwards, Hyphen, MarkSystems, and Sage. Quantities land where purchasing lives — no re-keying.",
  },
  {
    glyph: "ƒ",
    title: "Formulas built in",
    body: "Spacing, waste factors, and unit conversions calculate automatically, so 16″ O.C. becomes an order count you can trust.",
  },
  {
    glyph: "◳",
    title: "Templates & checklists",
    body: "Standardize every project with reusable templates and per-sheet checklists, so nothing on the plan gets missed.",
  },
  {
    glyph: "◆",
    title: "Option Mode",
    body: "Toggle it on and every measure you add, edit, or remove carries its option code with it. Change the floor plan, swap a selection — quantities stay tied to the right option, ready to break out by SKU at export.",
  },
];

const integrationsBuiltIn = ["JD Edwards", "Hyphen"];
const integrationsImport = ["Excel"];

export default function Home() {
  return (
    <div className="page">
      {/* ambient background */}
      <div className="ambient-glow" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      {/* FIXED HEADER */}
      <header className="header">
        <nav className="nav">
          <div className="brand">
            <div className="brand__logo">
              <img src="/assets/logo.png" alt="Hyperion Takeoff" />
            </div>
            <div>
              <span className="brand__name">Hyperion Takeoff</span>
            </div>
          </div>
          <div className="nav__right">
            <div className="nav__links">
              <a href="#features">Features</a>
              <a href="#product">Product</a>
              <a href="#integrations">Integrations</a>
            </div>
            <div className="nav__actions">
              <a href="#signin" className="login-link">
                Log in
              </a>
              <a href="#signin" className="btn-accent btn-accent--nav">
                {CTA_PRIMARY}
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <section className="hero">
          <div className="hero__copy">
            <div className="badge">
              <span className="badge__dot" />
              PLAN SHEET → PRECISE QUANTITIES
            </div>

            <h1 className="hero__title">
              Takeoff that speaks ERP.
              <br />
              <span className="hero__title-accent">No re-keying.</span>
            </h1>

            <p className="hero__subhead">
              Turn plan sheets into precise quantity counts — linear, area, and
              count — linked to your catalog and exported straight into the
              construction software you already run.
            </p>

            <div className="hero__cta-row">
              <a href="#signin" className="btn-accent btn-accent--hero">
                {CTA_PRIMARY} <span className="arrow">→</span>
              </a>
            </div>

            <div className="stats">
              <div>
                <div className="stat__num">3×</div>
                <div className="stat__label stat__label--w140">
                  faster than manual takeoffs
                </div>
              </div>
              <div className="stats__divider" />
              <div>
                <div className="stat__num">0</div>
                <div className="stat__label stat__label--w160">
                  re-keying — exports drop into your ERP
                </div>
              </div>
              <div className="stats__divider" />
              <div>
                <div className="stat__num">Every</div>
                <div className="stat__label stat__label--w150">
                  option tracked to its code
                </div>
              </div>
            </div>
          </div>

          {/* LOGIN CARD */}
          <LoginCard />
        </section>
      </div>

      {/* PRODUCT MOCK */}
      <section id="product" className="section section--product">
        <div className="section-head">
          <div className="eyebrow">THE WORKSPACE</div>
          <h2 className="section-title">
            Measure on the plan. Quantities build themselves.
          </h2>
        </div>

        <div className="window">
          <div className="window__glow" aria-hidden="true" />
          <div className="window__bar">
            <div className="window__dots">
              <span />
              <span />
              <span />
            </div>
            <div className="window__url">
              <span className="window__url-dot" />
              app.hyperiontakeoff.com
            </div>
            <div className="window__spacer" />
          </div>
          <img
            src="/assets/workspace.png"
            alt="Hyperion Takeoff workspace — measuring takeoffs on a plan sheet"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section section--features">
        <div className="section-head section-head--features">
          <div className="eyebrow">WHAT IT DOES</div>
          <h2 className="section-title">
            Everything between the plan and the purchase order.
          </h2>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__glyph">{f.glyph}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS / EXPORT */}
      <section id="integrations" className="section section--integrations">
        <div className="integrations">
          <div className="integrations__glow" aria-hidden="true" />
          <div className="integrations__copy">
            <div className="eyebrow--playfair">NO RE-KEYING</div>
            <h2 className="integrations__title">
              Exports straight into the software you already run.
            </h2>
            <p className="integrations__text">
              Every takeoff drops into a clean, Excel-ready file — built to
              import into JD Edwards, Hyphen, and any construction platform that
              reads a spreadsheet. Quantities flow to purchasing without a single
              re-typed number.
            </p>
          </div>
          <div className="integrations__badges">
            <div>
              <div className="badge-group__label">COMPATIBLE</div>
              <div className="badge-row">
                {integrationsBuiltIn.map((i) => (
                  <div className="int-badge" key={i}>
                    <span className="int-badge__dot" />
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="badge-group__label">Spreadsheet import</div>
              <div className="badge-row">
                {integrationsImport.map((i) => (
                  <div className="int-badge int-badge--muted" key={i}>
                    <span className="int-badge__dot" />
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* final CTA */}
        <div className="final-cta">
          <h2 className="final-cta__title">Stop counting by hand.</h2>
          <p className="final-cta__text">
            Your next takeoff could be done before lunch.
          </p>
          <div className="final-cta__row">
            <a href="#signin" className="btn-accent btn-accent--final">
              {CTA_PRIMARY}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/assets/logo.png" alt="" />
            </div>
            <span className="footer__name">Hyperion Takeoff</span>
          </div>
          <div className="footer__links">
            <a href="#features">Features</a>
            <a href="#product">Product</a>
            <a href="#integrations">Integrations</a>
            <a href="#signin">Log in</a>
          </div>
          <div className="footer__copy">© 2026 HYPERION TAKEOFF</div>
        </div>
      </footer>
    </div>
  );
}
