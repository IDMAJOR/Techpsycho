import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Web Design, Software Development & Automation", description: "Explore Techpsyco services: SEO-ready website design, custom software development, product design, business automation and ongoing optimization.", alternates: { canonical: "/services" } };

const items = [
  ["Website design & development", "Fast marketing sites and digital experiences with clean architecture, responsive design, technical SEO and conversion-focused content.", ["UX and content structure", "Responsive development", "Core Web Vitals", "Technical SEO"]],
  ["Custom software development", "Web applications, customer portals, internal dashboards and purpose-built tools that fit your operations instead of forcing new friction.", ["Product discovery", "Interface design", "Full-stack development", "Testing and launch"]],
  ["Product design", "Clear product strategy and usable interfaces for new software, complex workflows and digital services.", ["User journeys", "Wireframes and prototypes", "Design systems", "Developer handoff"]],
  ["Automation & integrations", "Connected processes that move information reliably, reduce manual work and give teams better visibility.", ["Workflow mapping", "API integrations", "Operational dashboards", "AI-assisted workflows"]],
  ["SEO & performance optimization", "Technical improvements that help search engines understand your site and help visitors reach answers faster.", ["Keyword architecture", "Metadata and schema", "Speed optimization", "Search monitoring setup"]],
  ["Ongoing product support", "Practical care after launch, from iteration and maintenance to new features and conversion improvements.", ["Performance reviews", "Feature releases", "Reliability fixes", "Continuous improvement"]],
];

export default function ServicesPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Organization", name: "Techpsyco" }, serviceType: "Website design, software development and business automation" };
  return <main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><PageHero eyebrow="Services" title="Strategy, design and engineering in one focused team." text="Choose a complete product partner or bring us in for the part that needs sharper thinking and stronger execution." /><section className="section section-compact"><div className="container cards-grid">{items.map(([title, text, bullets], i) => <article className="detail-card" key={title as string}><span className="card-number">0{i + 1}</span><h2>{title as string}</h2><p>{text as string}</p><ul>{(bullets as string[]).map(x => <li key={x}>{x}</li>)}</ul></article>)}</div></section><section className="cta-section"><div className="container cta-box"><div><p className="eyebrow">Not sure where to start?</p><h2>Tell us the business problem. We’ll help shape the right build.</h2></div><Link className="button button-light" href="/contact">Discuss your project</Link></div></section></main>;
}
