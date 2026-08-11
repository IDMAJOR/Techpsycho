import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vident — Identify Movies & Series",
  description:
    "Vident by Techpsycho helps you identify movies and series from a description, screenshot or short clip.",
  alternates: { canonical: "https://techpsycho.com.ng/vident" },
  openGraph: {
    title: "Vident — Find the movie. Keep the moment.",
    description: "Identify movies and series from a description, screenshot or short clip.",
    url: "https://techpsycho.com.ng/vident",
    images: [{ url: "/vident-social-card.png", width: 1536, height: 1024, alt: "Vident by Techpsycho" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vident — Find the movie. Keep the moment.",
    description: "Identify movies and series from a description, screenshot or short clip.",
    images: ["/vident-social-card.png"],
  },
};

const features = [
  ["01", "Recognize from a clue", "Describe the scene, quote, actor or story detail you remember and let Vident narrow the search."],
  ["02", "Use a screenshot or clip", "Submit visual context when words are not enough. Vident analyses the media to help identify the title."],
  ["03", "Explore the result", "Review title information, confidence, trailers and available where-to-watch information in one place."],
];

export default function VidentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Vident",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Android",
    creator: { "@type": "Organization", name: "Techpsycho", url: "https://techpsycho.com.ng" },
    description: "Identify movies and series from a description, screenshot or short clip.",
    url: "https://techpsycho.com.ng/vident",
  };

  return (
    <main id="main" className="vident-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="product-hero vident-hero">
        <div className="container product-hero-grid">
          <div>
            <p className="eyebrow">A Techpsycho Android app</p>
            <div className="product-title-line vident-title">
              <span className="product-icon product-icon-small vident-icon" aria-hidden="true">V</span>
              <span>Vident</span>
            </div>
            <h1>Find the movie. Keep the moment.</h1>
            <p className="lead">
              Identify a movie or series from the details you remember, a screenshot or a short
              clip, then move from recognition to discovery without losing the moment.
            </p>
            <div className="actions">
              <span className="button button-disabled" aria-label="Vident is coming to Google Play">Coming to Google Play</span>
              <Link className="text-link" href="/vident/privacy">Read the privacy policy <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <figure className="vident-artwork">
            <Image src="/vident-social-card.png" alt="Vident movie recognition artwork" width="1536" height="1024" priority sizes="(max-width: 900px) calc(100vw - 40px), 46vw" />
          </figure>
        </div>
      </section>

      <section className="product-proof">
        <div className="container product-proof-grid">
          <span>Three daily free recognitions</span>
          <span>User-initiated reward option</span>
          <span>Ad-free for Premium members</span>
          <span>Built for Android</span>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <div><p className="eyebrow">Recognition that meets you halfway</p><h2>Start with whatever you remember.</h2></div>
          <p>Vident combines a focused mobile experience with intelligent recognition and useful entertainment metadata.</p>
        </div>
        <div className="vident-feature-grid">
          {features.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container vident-flow">
          <div><p className="eyebrow">A respectful free experience</p><h2>Useful first. Monetized carefully.</h2><p className="lead-sm">Free members receive three daily recognitions. Ads are designed around natural pauses, rewarded ads remain optional, and Vident Premium removes advertising interruptions.</p></div>
          <ol>
            <li><span>Free</span><p>Use the daily recognition allowance and access core discovery features.</p></li>
            <li><span>Reward</span><p>When the allowance is used, choose whether to watch a rewarded ad for one additional recognition.</p></li>
            <li><span>Premium</span><p>Upgrade through Google Play for an ad-free experience and increased recognition access.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container legal-promo">
          <div><p className="eyebrow">Privacy and transparency</p><h2>Clear information about how Vident works.</h2><p>Review how recognition media, account information, advertising consent and subscriptions are handled.</p></div>
          <div className="legal-link-list"><Link href="/vident/privacy">Vident Privacy Policy <span aria-hidden="true">→</span></Link><Link href="/vident/terms">Vident Terms of Service <span aria-hidden="true">→</span></Link><a href="mailto:techpsycho94@gmail.com?subject=Vident%20support">Vident support <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box vident-cta"><div><p className="eyebrow">Vident by Techpsycho</p><h2>Never let “what was that movie?” end the moment.</h2></div><Link className="button button-light" href="/software">Explore all products</Link></div>
      </section>
    </main>
  );
}
