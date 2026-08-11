import Link from "next/link";

const services = [
  [
    "01",
    "Product engineering",
    "Reliable software products designed around clear needs, smooth experiences and long-term usefulness.",
  ],
  [
    "02",
    "Financial technology",
    "Accessible digital finance tools that make everyday money operations easier to understand and manage.",
  ],
  [
    "03",
    "Intelligent systems",
    "Connected platforms and automation that simplify complex processes and make information more useful.",
  ],
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Techpsycho",
    url: "https://www.techpsycho.com.ng",
    email: "hello@techpsycho.com",
    description:
      "A software company creating useful products and intelligent digital systems.",
  };
  // This is a log
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent software company</p>
            <h1>
              Digital systems that <span>move business forward.</span>
            </h1>
            <p className="lead">
              Techpsycho creates software products and intelligent digital
              systems that make everyday life and important work simpler.
            </p>
            <div className="actions">
              <Link className="button" href="/software">
                Explore our software <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/vident">
                Discover Vident <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="system-card" aria-label="Techpsycho capabilities">
            <div className="system-top">
              <span>System online</span>
              <span className="live-dot">Live</span>
            </div>
            <div className="system-core">
              <span>Strategy</span>
              <strong>
                TECH
                <br />
                PSYCO
              </strong>
              <span>Scale</span>
            </div>
            <div className="system-row">
              <span>Design</span>
              <span>Development</span>
              <span>Automation</span>
            </div>
          </div>
        </div>
        <div className="container trust-row">
          <span>Built for momentum</span>
          <span>Fast by default</span>
          <span>Clear by design</span>
          <span>Ready to scale</span>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <div>
            <p className="eyebrow">What we build</p>
            <h2>One company. Software designed to make life smarter.</h2>
          </div>
          <p>
            We research, design, engineer and improve every product as one
            connected company.
          </p>
        </div>
        <div className="container service-list">
          {services.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Link href="/services" aria-label={`Learn about ${title}`}>
                ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split-feature">
          <div>
            <p className="eyebrow">Software by Techpsycho</p>
            <h2>Products made to solve real operational problems.</h2>
            <p className="lead-sm">
              Explore products created and operated by Techpsycho across
              intelligent entertainment discovery and financial technology.
            </p>
            <Link className="button" href="/software">
              Explore software
            </Link>
          </div>
          <div className="featured-product-stack">
            <article className="product-preview product-preview-vident">
              <span className="product-icon vident-icon">V</span>
              <div>
                <p className="eyebrow">Android app</p>
                <h3>Vident</h3>
                <p>Identify movies and series from a description, screenshot or short clip.</p>
                <Link href="/vident">View Vident <span aria-hidden="true">→</span></Link>
              </div>
            </article>
            <article className="product-preview product-preview-compact">
              <span className="product-icon">P</span>
              <div>
                <p className="eyebrow">Finance software</p>
                <h3>Paycore</h3>
                <p>Everyday money operations, made clearer and easier to manage.</p>
                <Link href="/paycore">View Paycore <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div>
            <p className="eyebrow">How we build products</p>
            <h2>From a hard problem to a useful product.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Research</h3>
                <p>
                  We study real problems, user behaviour and the opportunity for
                  software to make a meaningful difference.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Design</h3>
                <p>
                  We turn insight into a focused product experience that feels
                  clear from the first interaction.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Engineer</h3>
                <p>
                  We develop, test and optimize dependable systems for
                  real-world performance and scale.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Evolve</h3>
                <p>
                  We learn from how products are used and keep strengthening
                  every release.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="eyebrow">Software by Techpsycho</p>
            <h2>
              See the products we are building for a smarter digital future.
            </h2>
          </div>
          <Link className="button button-light" href="/software">
            Explore our products
          </Link>
        </div>
      </section>
    </main>
  );
}
