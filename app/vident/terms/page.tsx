import type { Metadata } from "next";
import { VidentSubnav } from "../VidentSubnav";

export const metadata: Metadata = {
  title: "Vident Terms of Service",
  description: "Terms governing your use of the Vident Android application and related services.",
  alternates: { canonical: "https://techpsycho.com.ng/vident/terms" },
  openGraph: {
    title: "Vident Terms of Service",
    description: "Terms governing use of Vident by Techpsycho.",
    url: "https://techpsycho.com.ng/vident/terms",
    images: [{ url: "/vident-social-card.png", width: 1536, height: 1024, alt: "Vident by Techpsycho" }],
  },
  robots: { index: true, follow: true },
};

export default function VidentTermsPage() {
  return (
    <main id="main">
      <VidentSubnav />
      <header className="legal-hero">
        <div className="container narrow">
          <p className="eyebrow">Vident legal</p>
          <h1>Terms of Service</h1>
          <p className="lead">These terms set out the rules for using Vident, including free access, rewarded recognition credits and Vident Premium.</p>
          <div className="legal-meta"><span>Effective August 11, 2026</span><span>Last updated August 11, 2026</span></div>
        </div>
      </header>

      <section className="section legal-section">
        <div className="container legal-layout">
          <aside className="legal-toc" aria-label="Terms sections">
            <strong>On this page</strong>
            <a href="#agreement">1. Agreement</a><a href="#accounts">2. Accounts</a><a href="#service">3. The service</a><a href="#access">4. Free access, ads and Premium</a><a href="#content">5. Your content</a><a href="#conduct">6. Acceptable use</a><a href="#third-party">7. Third-party services</a><a href="#ownership">8. Ownership</a><a href="#availability">9. Availability and termination</a><a href="#disclaimers">10. Disclaimers and liability</a><a href="#law">11. Governing law</a><a href="#contact">12. Changes and contact</a>
          </aside>

          <article className="legal-prose">
            <div className="legal-summary"><strong>Important</strong><p>By creating an account or using Vident, you agree to these Terms and the Vident Privacy Policy. If you do not agree, do not use the service.</p></div>

            <section id="agreement"><h2>1. Agreement and eligibility</h2><p>These Terms of Service are an agreement between you and Techpsycho for the Vident Android application and related services. You must be at least 13 years old, or the higher minimum age required in your country. If you are not old enough to contract on your own, a parent or legal guardian must review and accept these Terms for you.</p><p>You must follow applicable law and any Google Play terms that apply to your download, device or purchase.</p></section>

            <section id="accounts"><h2>2. Accounts and security</h2><p>You must provide accurate account information and keep it current. You are responsible for safeguarding your password, device and sign-in methods, and for activity under your account. Notify us promptly at <a href="mailto:techpsycho94@gmail.com?subject=Vident%20account%20security">techpsycho94@gmail.com</a> if you suspect unauthorized access.</p><p>You may not sell, transfer, share for abuse, or create accounts through automated or deceptive means. We may require verification and may limit duplicate, fraudulent or unsafe accounts.</p></section>

            <section id="service"><h2>3. The Vident service</h2><p>Vident helps identify movies and series from information you submit and may provide metadata, trailers, community content and where-to-watch information. Recognition and generative systems are probabilistic: a result may be incomplete, outdated or wrong. You should independently confirm information before relying on it.</p><p>Streaming availability, pricing and catalogue information can change without notice and may vary by location. Vident does not sell viewing rights or guarantee that a title is available through a listed provider.</p></section>

            <section id="access"><h2>4. Free access, advertising and Vident Premium</h2><h3>Free recognition allowance</h3><p>Eligible free accounts receive the recognition allowance displayed in the app, initially three daily recognitions. We may adjust allowances, reset times, eligibility or promotional features to protect the service or improve the product. We will not retroactively charge you for free use.</p><h3>Rewarded ads</h3><p>When offered, you may voluntarily complete a rewarded advertising experience to request one additional recognition credit. Credits are granted only after the advertising provider confirms completion and our systems accept the claim. Ads may be unavailable, claims may be rate-limited, and duplicate or abusive claims may be rejected. Credits have no cash value and are not awarded for clicking an advertiser’s content.</p><h3>Interstitial and banner ads</h3><p>Eligible free users may see clearly identified banner or interstitial advertising at appropriate placements or natural transitions. Premium members do not receive these ads while a verified Premium entitlement is active.</p><h3>Premium subscriptions</h3><p>Vident Premium is purchased and managed through Google Play. Price, billing period, trial terms and benefits are shown before purchase. Unless Google Play states otherwise, a subscription renews automatically until cancelled through Google Play. Cancellation normally takes effect at the end of the current paid period. Refunds and payment disputes are handled under Google Play’s policies and applicable law.</p><p>Deleting Vident or deleting your account does not automatically cancel a Google Play subscription. Premium benefits depend on successful backend verification and may temporarily pause if a purchase expires, is refunded, reversed or cannot be verified.</p></section>

            <section id="content"><h2>5. Recognition inputs, comments and other content</h2><p>You retain the rights you have in descriptions, images, clips, comments and other material you submit (“User Content”). You grant Techpsycho a limited, worldwide, non-exclusive licence to host, copy, process, transmit and display User Content only as needed to operate, secure and improve Vident, provide your requested features, and meet legal obligations.</p><p>You confirm that you have the necessary rights or permission to submit User Content. Do not upload unlawful, private, sexually exploitative, malicious or rights-infringing material. Public comments may be seen by other users and should not contain personal or confidential information.</p></section>

            <section id="conduct"><h2>6. Acceptable use</h2><p>You may not:</p><ul><li>break the law, infringe another person’s rights, harass others or distribute harmful content;</li><li>attempt to bypass quotas, forge reward confirmations, manipulate subscriptions or create fraudulent claims;</li><li>access the service through unauthorized automation, scrape it at scale, overload it or interfere with security;</li><li>reverse engineer or copy protected portions of Vident except where law expressly permits it;</li><li>introduce malware, probe systems without permission or help another person misuse the service; or</li><li>misrepresent an ad, encourage invalid ad interactions or use Vident to generate invalid advertising traffic.</li></ul></section>

            <section id="third-party"><h2>7. Third-party services and content</h2><p>Vident relies on or links to services provided by others, including Google Play, Google authentication, advertising, AI and consent services, entertainment metadata sources, trailer platforms, streaming providers and hosting infrastructure. Those services have their own terms and privacy practices. Techpsycho does not control their catalogues, content, offers or continued availability.</p><p>Movie and series names, artwork, trailers and related marks belong to their respective owners. Their appearance in a recognition result does not imply endorsement by or affiliation with Techpsycho.</p></section>

            <section id="ownership"><h2>8. Techpsycho ownership and licence</h2><p>Techpsycho and its licensors own Vident’s software, design, branding, documentation and other protected materials, excluding User Content and third-party content. Subject to these Terms, we give you a personal, limited, revocable, non-exclusive, non-transferable licence to use Vident for lawful, non-commercial purposes on supported devices.</p><p>“Techpsycho” and “Vident,” including their product presentation and related brand assets, may not be used in a way that suggests endorsement or ownership without permission.</p></section>

            <section id="availability"><h2>9. Availability, changes and termination</h2><p>Ads and recognition are optional parts of the broader product experience and may fail because of network conditions, provider outages or lack of inventory. We aim to keep Vident available, but do not promise uninterrupted or error-free operation. We may maintain, change, suspend or discontinue features, subject to applicable law and any paid commitments.</p><p>You may stop using Vident or request account deletion at any time. We may restrict or terminate access for serious or repeated violations, fraud, security risk, legal requirement or conduct that harms Vident or others. Provisions that by their nature should survive termination will remain effective.</p></section>

            <section id="disclaimers"><h2>10. Disclaimers and limitation of liability</h2><p>To the extent permitted by law, Vident is provided “as is” and “as available.” We disclaim implied warranties of merchantability, fitness for a particular purpose and non-infringement. Nothing in these Terms excludes a warranty or consumer right that cannot legally be excluded.</p><p>To the extent permitted by law, Techpsycho will not be liable for indirect, incidental, special, consequential or punitive loss, or for lost profits, data, goodwill or opportunities arising from your use of Vident. Our total liability relating to the service will not exceed the greater of the amount you paid for Vident during the six months before the event giving rise to the claim or the minimum amount required by applicable law.</p><p>These limits do not apply where liability cannot legally be limited, including liability for fraud, wilful misconduct or other protected consumer rights.</p></section>

            <section id="law"><h2>11. Governing law and disputes</h2><p>These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles, except where mandatory consumer law in your place of residence provides otherwise. Before starting formal proceedings, please contact us and give both sides a reasonable opportunity to resolve the issue informally. Courts with lawful jurisdiction in Nigeria may hear unresolved disputes, subject to any mandatory local rights you have.</p></section>

            <section id="contact"><h2>12. Changes and contact</h2><p>We may update these Terms when Vident, our business or legal requirements change. We will post the revised version here and update the date above. If a material change requires notice or consent, we will provide it as required by law. Continued use after an effective update means you accept the revised Terms where permitted.</p><p>Questions about these Terms or Vident support can be sent to <a href="mailto:techpsycho94@gmail.com?subject=Vident%20terms">techpsycho94@gmail.com</a>.</p><address>Techpsycho<br />Vident Support<br />Nigeria</address></section>
          </article>
        </div>
      </section>
    </main>
  );
}
