import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Software & Apps",
  description:
    "Explore Vident, Paycore and the growing portfolio of software products created by Techpsycho.",
  alternates: { canonical: "/software" },
};

const products = [
  {
    name: "Vident",
    category: "Entertainment discovery",
    description:
      "Identify movies and series from a description, screenshot or short clip, then discover useful title details and where to watch.",
    href: "/vident",
    status: "Android app",
    icon: "V",
    className: "vident-product",
    tags: ["Android", "AI recognition", "Movie discovery"],
  },
  {
    name: "Paycore",
    category: "Finance software",
    description:
      "A focused digital finance product created to make everyday money operations easier to understand and manage.",
    href: "/paycore",
    status: "Product preview",
    icon: "P",
    className: "paycore-product",
    tags: ["Web app", "Finance", "Responsive"],
  },
];

export default function SoftwarePage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "SoftwareApplication",
      name: product.name,
      url: `https://techpsycho.com.ng${product.href}`,
      creator: { "@type": "Organization", name: "Techpsycho" },
      description: product.description,
    })),
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <PageHero
        eyebrow="Software by Techpsycho"
        title="Useful products, built to solve real problems."
        text="A growing portfolio of software created and operated by Techpsycho to make important work and everyday life clearer, faster and easier to manage."
      />
      <section className="section section-compact">
        <div className="container product-catalogue">
          <div className="product-index" aria-label="Techpsycho products">
            {products.map((product, index) => (
              <article className={`product-index-card ${product.className}`} key={product.name}>
                <div className="product-index-top">
                  <span className="product-index-number">0{index + 1}</span>
                  <span className="status status-inline">{product.status}</span>
                </div>
                <span className="product-icon" aria-hidden="true">{product.icon}</span>
                <p className="eyebrow">{product.category}</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="tag-row">
                  {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link className="text-link" href={product.href}>
                  Explore {product.name} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="catalogue-note">
            <div>
              <p className="eyebrow">Built and operated here</p>
              <h2>Products with a clear owner and a long-term purpose.</h2>
            </div>
            <p>
              Techpsycho designs, engineers and improves each product as part of one connected
              software company, with dedicated product information and support.
            </p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="eyebrow">Product support</p>
            <h2>Questions about a Techpsycho product?</h2>
          </div>
          <Link className="button button-light" href="/contact">Contact Techpsycho</Link>
        </div>
      </section>
    </main>
  );
}
