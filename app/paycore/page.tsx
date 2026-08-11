import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paycore — Digital Finance Software",
  description:
    "Meet Paycore, a Techpsycho digital finance product designed to make everyday money operations clearer and easier to manage.",
  alternates: { canonical: "/paycore" },
};

export default function PaycorePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Paycore",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    creator: { "@type": "Organization", name: "Techpsycho" },
    description:
      "A digital finance product designed to simplify everyday money operations.",
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="product-hero paycore-hero">
        <div className="container product-hero-grid">
          <div>
            <p className="eyebrow">A Techpsycho product</p>
            <div className="product-title-line">
              <span className="product-icon product-icon-small" aria-hidden="true">P</span>
              <span>Paycore</span>
            </div>
            <h1>Everyday finance, made clearer.</h1>
            <p className="lead">
              Paycore is a focused digital finance product designed to simplify important money
              operations through a clear, responsive experience.
            </p>
            <div className="actions">
              <a className="button" href="mailto:techpsycho94@gmail.com?subject=Paycore%20access">Request product access</a>
              <Link className="text-link" href="/software">All products <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="paycore-panel" aria-label="Paycore product principles">
            <span>Clarity</span><span>Control</span><span>Confidence</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container section-heading">
          <div><p className="eyebrow">Product direction</p><h2>A dependable foundation for modern money operations.</h2></div>
          <p>Paycore is being shaped around understandable workflows, responsive access and useful financial visibility.</p>
        </div>
        <div className="solution-grid">
          <article><span>01</span><h3>Understandable</h3><p>Information and actions presented with a clear hierarchy and less operational friction.</p></article>
          <article><span>02</span><h3>Responsive</h3><p>A product experience designed to remain useful across modern devices and contexts.</p></article>
          <article><span>03</span><h3>Purposeful</h3><p>Focused capabilities built around real financial tasks, not unnecessary complexity.</p></article>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-box"><div><p className="eyebrow">Paycore enquiries</p><h2>Ask about availability, access or partnership.</h2></div><a className="button button-light" href="mailto:techpsycho94@gmail.com?subject=Paycore%20enquiry">Email Techpsycho</a></div>
      </section>
    </main>
  );
}
