import Link from "next/link";

const services = [
  ["01", "High-performance websites", "Fast, responsive websites shaped around search visibility, trust and conversion."],
  ["02", "Custom software", "Focused web apps, portals and internal tools designed around the way your team works."],
  ["03", "Automation & systems", "Connected workflows that reduce repetitive work and turn scattered processes into dependable systems."],
];

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Techpsyco", url: "https://techpsyco.com", email: "hello@techpsyco.com", description: "A digital product studio building websites, software and intelligent systems." };
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent digital product studio</p>
            <h1>Digital systems that <span>move business forward.</span></h1>
            <p className="lead">Techpsyco builds fast websites, useful software and intelligent workflows for teams ready to grow with less friction.</p>
            <div className="actions"><Link className="button" href="/contact">Build with us <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/work">See how we work <span aria-hidden="true">→</span></Link></div>
          </div>
          <div className="system-card" aria-label="Techpsyco capabilities">
            <div className="system-top"><span>System online</span><span className="live-dot">Live</span></div>
            <div className="system-core"><span>Strategy</span><strong>TECH<br/>PSYCO</strong><span>Scale</span></div>
            <div className="system-row"><span>Design</span><span>Development</span><span>Automation</span></div>
          </div>
        </div>
        <div className="container trust-row"><span>Built for momentum</span><span>Fast by default</span><span>Clear by design</span><span>Ready to scale</span></div>
      </section>

      <section className="section">
        <div className="container section-heading"><div><p className="eyebrow">What we build</p><h2>One studio. Three ways to make your business smarter.</h2></div><p>Strategy, design and development stay connected from the first decision to the final release.</p></div>
        <div className="container service-list">{services.map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><Link href="/services" aria-label={`Learn about ${title}`}>↗</Link></article>)}</div>
      </section>

      <section className="section section-tint">
        <div className="container split-feature">
          <div><p className="eyebrow">Software by Techpsyco</p><h2>Products made to solve real operational problems.</h2><p className="lead-sm">Explore apps and software created by our studio, from financial tools to tailored business platforms.</p><Link className="button" href="/software">Explore software</Link></div>
          <div className="product-preview"><span className="product-icon">P</span><div><p className="eyebrow">Featured product</p><h3>Paycore</h3><p>A focused digital finance product designed to make everyday money operations clearer and easier to manage.</p><Link href="/software#paycore">View product <span aria-hidden="true">→</span></Link></div></div>
        </div>
      </section>

      <section className="section"><div className="container process-grid"><div><p className="eyebrow">A clearer process</p><h2>From a hard problem to a useful product.</h2></div><ol><li><span>01</span><div><h3>Understand</h3><p>We clarify the goal, audience, constraints and commercial opportunity.</p></div></li><li><span>02</span><div><h3>Shape</h3><p>We turn strategy into a focused experience and a practical delivery plan.</p></div></li><li><span>03</span><div><h3>Build</h3><p>We develop, test and optimize every critical path for real-world use.</p></div></li><li><span>04</span><div><h3>Improve</h3><p>We learn from performance and strengthen the system after launch.</p></div></li></ol></div></section>

      <section className="cta-section"><div className="container cta-box"><div><p className="eyebrow">Have a serious idea?</p><h2>Let’s build the system behind your next stage of growth.</h2></div><Link className="button button-light" href="/contact">Start a conversation</Link></div></section>
    </main>
  );
}
