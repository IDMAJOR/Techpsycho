import type { Metadata } from "next";
import { VidentSubnav } from "../VidentSubnav";

export const metadata: Metadata = {
  title: "Vident Privacy Policy",
  description:
    "Learn how Techpsycho collects, uses and protects information when you use the Vident Android application.",
  alternates: { canonical: "https://techpsycho.com.ng/vident/privacy" },
  openGraph: {
    title: "Vident Privacy Policy",
    description: "Privacy information for the Vident Android application by Techpsycho.",
    url: "https://techpsycho.com.ng/vident/privacy",
    images: [{ url: "/vident-social-card.png", width: 1536, height: 1024, alt: "Vident by Techpsycho" }],
  },
  robots: { index: true, follow: true },
};

const sections = [
  ["scope", "1. Scope and who we are"],
  ["information", "2. Information we collect"],
  ["use", "3. How we use information"],
  ["ads", "4. Advertising and consent"],
  ["billing", "5. Premium and Google Play Billing"],
  ["sharing", "6. Service providers and sharing"],
  ["retention", "7. Retention and security"],
  ["rights", "8. Your choices and rights"],
  ["deletion", "9. Account and data deletion"],
  ["children", "10. Children’s privacy"],
  ["changes", "11. Changes and contact"],
];

export default function VidentPrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vident Privacy Policy",
    url: "https://techpsycho.com.ng/vident/privacy",
    isPartOf: { "@type": "SoftwareApplication", name: "Vident" },
    publisher: { "@type": "Organization", name: "Techpsycho" },
    dateModified: "2026-08-12",
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <VidentSubnav />
      <header className="legal-hero">
        <div className="container narrow">
          <p className="eyebrow">Vident legal</p>
          <h1>Privacy Policy</h1>
          <p className="lead">This policy explains what information Vident handles, why it is needed, and the choices available to you.</p>
          <div className="legal-meta"><span>Effective August 11, 2026</span><span>Last updated August 12, 2026</span></div>
        </div>
      </header>

      <section className="section legal-section">
        <div className="container legal-layout">
          <aside className="legal-toc" aria-label="Privacy policy sections">
            <strong>On this page</strong>
            {sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </aside>

          <article className="legal-prose">
            <div className="legal-summary">
              <strong>In plain language</strong>
              <p>Techpsycho uses account, recognition, usage and device information to operate Vident. We do not sell your personal information. Premium members do not receive ads, and ad requests are held until the relevant consent state is resolved.</p>
            </div>

            <section id="scope">
              <h2>1. Scope and who we are</h2>
              <p>This Privacy Policy applies to the Vident Android application, its related services and Vident support. Vident is provided by Techpsycho (“Techpsycho”, “we”, “us” or “our”). It does not replace the privacy terms of third-party websites or services you choose to visit.</p>
              <p>For privacy questions or requests, contact <a href="mailto:techpsycho94@gmail.com?subject=Vident%20privacy">techpsycho94@gmail.com</a>.</p>
            </section>

            <section id="information">
              <h2>2. Information we collect</h2>
              <h3>Account and profile information</h3>
              <p>When you create or use an account, we may collect your email address, username, display name, authentication provider identifier and account settings. Passwords are stored only in protected, hashed form; we do not store your readable password. If you use Google sign-in, Google provides the identity information needed to authenticate your account.</p>
              <h3>Recognition inputs and results</h3>
              <p>Vident processes the description, screenshot, image or short video clip you submit, together with generated recognition results and title metadata. These inputs are used to answer your request. Recognition history and results may be associated with your account where history features are enabled. Source media is retained only for as long as operationally necessary, subject to technical, security and legal requirements.</p>
              <h3>Usage, community and support information</h3>
              <p>We may process recognition counts and quota status, rewarded-credit claims, timestamps, duplicate-prevention identifiers, saved titles, history, comments, feedback and support messages. Do not include sensitive personal information in a recognition description or public comment.</p>
              <h3>Device and diagnostic information</h3>
              <p>We and our service providers may receive app version, device type, operating system, language, network and approximate location derived from IP address, crash or error information, advertising identifiers, consent choices and interactions with ads. Exact data depends on your device settings, consent choices, region and the services available in your build.</p>
            </section>

            <section id="use">
              <h2>3. How we use information</h2>
              <p>We use information to:</p>
              <ul>
                <li>create and secure accounts, authenticate users and provide support;</li>
                <li>process recognition requests and return relevant movie or series information;</li>
                <li>maintain recognition quotas, grant valid rewarded credits and prevent duplicate or abusive claims;</li>
                <li>save history, preferences and community activity you choose to use;</li>
                <li>verify Premium entitlement and provide the benefits attached to it;</li>
                <li>provide ads to eligible free users according to consent and app rules;</li>
                <li>diagnose failures, maintain security, measure performance and improve Vident; and</li>
                <li>comply with law, enforce our terms and protect users, Techpsycho and others.</li>
              </ul>
              <p>Depending on the context and applicable law, processing may be based on performing our contract with you, your consent, our legitimate interests in operating and securing Vident, or a legal obligation. Where processing depends on consent, you may withdraw that consent through available app or device controls, although some features may then be unavailable.</p>
            </section>

            <section id="ads">
              <h2>4. Advertising and consent</h2>
              <p>Vident may use Google Mobile Ads to show rewarded, interstitial and banner ads to eligible free users. Depending on your location and choices, Google may provide personalized ads, non-personalized ads or limited ads. Advertising is unavailable while a required consent decision remains unresolved.</p>
              <p>Google and its partners may process device and advertising identifiers, IP address, app interactions and diagnostic information to deliver, limit, measure and protect ads. You can review Google’s privacy information and manage relevant Android advertising settings through your Google account or device.</p>
              <p>Rewarded ads are optional. A recognition credit is requested only after the advertising service confirms completion of the rewarded experience; it is not granted for clicking an advertiser’s content. Inventory is not guaranteed, failed ads do not consume a credit, and Premium members do not receive banner or interstitial ads and normally cannot request rewarded ads.</p>
            </section>

            <section id="billing">
              <h2>5. Premium and Google Play Billing</h2>
              <p>Vident Premium purchases are processed by Google Play. Google handles payment-card and payment-account details under its own terms. Vident receives information needed to verify and maintain your entitlement, such as product, purchase status, renewal or expiry information and a protected reference to the purchase token. We use backend verification rather than a locally editable Premium switch.</p>
            </section>

            <section id="sharing">
              <h2>6. Service providers and sharing</h2>
              <p>We disclose information only as reasonably necessary to operate Vident, complete a request, comply with law or protect rights. Categories of recipients may include:</p>
              <ul>
                <li>Google services used for sign-in, recognition technology, Google Play Billing, advertising and consent management;</li>
                <li>movie, series, trailer and watch-availability data providers used to enrich recognition results;</li>
                <li>cloud hosting, database, storage, security, logging and support providers; and</li>
                <li>professional advisers, authorities or a successor organization where legally required or as part of a legitimate business transaction.</li>
              </ul>
              <p>These providers may process information in countries other than yours. Where required, we use appropriate contractual or legal safeguards for international transfers. We do not sell your personal information.</p>
            </section>

            <section id="retention">
              <h2>7. Retention and security</h2>
              <p>We keep information only for as long as needed to provide Vident, maintain security and fraud-prevention records, resolve disputes and meet legal obligations. Retention varies by record type. For example, account records may remain while the account is active, while short-lived technical files may be removed sooner. Some records may remain in protected backups until the normal backup cycle completes.</p>
              <p>We use reasonable administrative and technical safeguards, including access controls, protected communications and secure credential handling. No online system can guarantee absolute security, so please use a unique password and protect your device and account.</p>
            </section>

            <section id="rights">
              <h2>8. Your choices and rights</h2>
              <p>Depending on your location, you may have the right to request access, correction, deletion, restriction, objection or portability, and to withdraw consent or complain to a regulator. We may need to verify your identity before acting on a request.</p>
              <p>You can request account deletion through the deletion option available in Vident or by emailing <a href="mailto:techpsycho94@gmail.com?subject=Delete%20my%20Vident%20account">techpsycho94@gmail.com</a> from the address associated with your account. Deletion removes or de-identifies account data unless a limited record must be retained for security, fraud prevention, billing, dispute resolution or law. Uninstalling the app does not by itself delete your account.</p>
              <p>You may also control notification and advertising settings through Vident, Google or Android where those controls are available. Cancelling Vident Premium must be completed through Google Play; deleting your Vident account does not automatically cancel an active Google Play subscription.</p>
            </section>

            <section id="deletion">
              <h2>9. Account and data deletion</h2>
              <p>You can permanently delete your Vident account from Profile → Delete account in the Android app. Email-and-password users can also verify and delete directly at <a href="/vident/delete-account">the public Vident deletion page</a>. If you cannot access the app or use Google sign-in, that page also provides a deletion-request path; Techpsycho verifies ownership before deleting anything.</p>
              <p>Deletion removes the Vident profile, authentication linkage, active sessions, recognition usage records, reward claims, linked trailer saves and comments, and the stored Premium entitlement association. Recognition media is not maintained as a permanent account media library.</p>
              <p>A minimal audit record containing a random request identifier, completion time and deletion method may be retained for up to one year for security and accountability. Limited records may also be retained where genuinely required for fraud prevention, financial reconciliation or law. General profile information and recognition history are not retained under this exception.</p>
              <p>Deleting a Vident account does not cancel a subscription managed by Google Play. Manage or cancel the subscription separately in Google Play before deleting the account.</p>
            </section>

            <section id="children">
              <h2>10. Children’s privacy</h2>
              <p>Vident is not directed to children under 13, or any higher minimum age required in their country, and we do not knowingly collect personal information from children below that age. If you believe a child has provided information, contact us so we can investigate and take appropriate action.</p>
            </section>

            <section id="changes">
              <h2>11. Changes and contact</h2>
              <p>We may update this policy as Vident, our providers or legal requirements change. We will publish the revised policy here and update the date above. Where required, we will provide additional notice or request consent.</p>
              <p>Questions, complaints and privacy requests can be sent to <a href="mailto:techpsycho94@gmail.com?subject=Vident%20privacy">techpsycho94@gmail.com</a>.</p>
              <address>Techpsycho<br />Vident Privacy Team<br />Nigeria</address>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
