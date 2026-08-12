import type { Metadata } from "next";
import Link from "next/link";
import { VidentSubnav } from "../VidentSubnav";
import { DeletionForm } from "./DeletionForm";

export const metadata: Metadata = { title: "Delete Your Vident Account", description: "Permanently delete a Vident account and associated Vident data, or request secure ownership verification.", alternates: { canonical: "https://techpsycho.com.ng/vident/delete-account" }, robots: { index: true, follow: true } };

export default function DeleteVidentAccountPage() {
  return <main id="main"><VidentSubnav /><header className="legal-hero deletion-hero"><div className="container narrow"><p className="eyebrow">Vident account and data deletion</p><h1>Delete your Vident account</h1><p className="lead">Request permanent deletion of your account and associated Vident data. This action cannot be undone.</p></div></header>
    <section className="section legal-section"><div className="container deletion-layout"><div className="deletion-copy">
      <section><p className="eyebrow">What deletion removes</p><h2>Your account-linked Vident data</h2><ul className="deletion-list"><li>account profile and Vident authentication linkage;</li><li>active Vident sessions and local account access;</li><li>recognition usage records and reward claims;</li><li>saved titles, trailer saves, comments and linked history; and</li><li>stored Premium entitlement association.</li></ul><p>Recognition screenshots, clips and selected video frames are processed for the request and are not retained as a permanent account media library.</p></section>
      <section className="retention-card"><h2>Limited retention</h2><p>Techpsycho may retain only minimal records required for security, fraud prevention, financial reconciliation or legal obligations. A minimal deletion audit contains a random request identifier, completion time and method—never your deleted profile, recognition history, password or access token—and expires after one year.</p></section>
      <section className="subscription-card"><h2>Google Play subscriptions are separate</h2><p>Deleting your Vident account does not automatically cancel a subscription managed by Google Play. Cancel or manage it separately before deletion.</p></section>
      <p>For help, email <a href="mailto:techpsycho94@gmail.com?subject=Vident%20account%20deletion">techpsycho94@gmail.com</a>. You can also review the <Link href="/vident/privacy">Vident Privacy Policy</Link>.</p>
    </div><DeletionForm /></div></section></main>;
}
