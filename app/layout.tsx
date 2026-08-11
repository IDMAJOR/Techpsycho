import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "www.techpsycho.com.ng";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: { default: "Techpsycho | Software Products & Digital Systems", template: "%s | Techpsycho" },
    description: "Techpsycho is a software company creating useful digital products, intelligent platforms and dependable systems for everyday life and business.",
    keywords: ["software company", "software products", "Android apps", "movie recognition app", "fintech software", "digital platforms", "business software", "Vident", "Paycore", "Techpsycho"],
    authors: [{ name: "Techpsycho" }],
    creator: "Techpsycho",
    publisher: "Techpsycho",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Techpsycho",
      title: "Techpsycho — Software Products & Digital Systems",
      description: "Software that makes important work and everyday life simpler.",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1792, height: 928, alt: "Techpsycho software products and digital systems" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Techpsycho — Software Products & Digital Systems",
      description: "Software that makes important work and everyday life simpler.",
      images: [`${origin}/og.png`],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
