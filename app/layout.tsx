import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "techpsyco.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: { default: "Techpsyco | Websites, Software & Digital Systems", template: "%s | Techpsyco" },
    description: "Techpsyco designs fast websites, useful software and intelligent digital systems for ambitious businesses.",
    keywords: ["web design agency", "software development company", "custom software", "business automation", "product design", "SEO website development", "Techpsyco"],
    authors: [{ name: "Techpsyco" }],
    creator: "Techpsyco",
    publisher: "Techpsyco",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Techpsyco",
      title: "Techpsyco — Websites, Software & Digital Systems",
      description: "Websites. Software. Systems that move business forward.",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1792, height: 928, alt: "Techpsyco — Websites, Software and Systems" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Techpsyco — Websites, Software & Digital Systems",
      description: "Websites. Software. Systems that move business forward.",
      images: [`${origin}/og.png`],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/brand-logo.png", shortcut: "/brand-logo.png", apple: "/brand-logo.png" },
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
