import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Technology & Product Capabilities", description: "Explore the product engineering, fintech, design, cloud, automation and security capabilities behind Techpsycho software.", alternates: { canonical: "/services" } };

const items = [
  ["Product engineering", "We turn carefully chosen problems into dependable software products designed for daily use and continuous growth.", ["Product discovery", "Full-stack engineering", "Quality assurance", "Continuous delivery"]],
  ["Financial technology", "We build secure, accessible financial experiences that make complex money operations easier to understand.", ["Payment experiences", "Financial workflows", "Transaction visibility", "Responsible design"]],
  ["Product design", "Every Techpsycho product is shaped around clarity, usability and a consistent experience across devices.", ["User research", "Interface systems", "Responsive experiences", "Accessibility"]],
  ["Cloud infrastructure", "Our products run on modern foundations designed for speed, resilience and responsible growth.", ["Scalable architecture", "Data services", "API systems", "Performance monitoring"]],
  ["Data & automation", "We connect information and intelligent workflows so our products can do more with less friction.", ["Data modelling", "Workflow automation", "Intelligent features", "Operational insights"]],
  ["Security & reliability", "Trust is built into the way we design, release and maintain software from the beginning.", ["Secure development", "Privacy by design", "Reliability testing", "Ongoing improvements"]],
];

export default function ServicesPage() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Techpsycho", description: "A software company creating useful digital products and intelligent systems." };
  return <main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><PageHero eyebrow="Technology" title="The capabilities behind every Techpsycho product." text="We combine product thinking, design and engineering to create software that stays useful, secure and ready to evolve." /><section className="section section-compact"><div className="container cards-grid">{items.map(([title, text, bullets], i) => <article className="detail-card" key={title as string}><span className="card-number">0{i + 1}</span><h2>{title as string}</h2><p>{text as string}</p><ul>{(bullets as string[]).map(x => <li key={x}>{x}</li>)}</ul></article>)}</div></section><section className="cta-section"><div className="container cta-box"><div><p className="eyebrow">Technology with purpose</p><h2>Every capability exists to make our products more useful.</h2></div><Link className="button button-light" href="/software">Explore our software</Link></div></section></main>;
}
