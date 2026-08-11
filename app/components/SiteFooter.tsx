import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <Image className="brand-logo" src="/brand-logo.png" alt="" width="40" height="40" />
            <span>TECHPSYCHO</span>
          </Link>
          <p>Software products built with clarity, speed and purpose.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/software">All software</Link>
          <Link href="/vident">Vident</Link>
          <Link href="/paycore">Paycore</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="footer-links">
          <strong>Connect</strong>
          <a href="mailto:hello@techpsycho.com">hello@techpsycho.com</a>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Site privacy</Link>
          <Link href="/vident/privacy">Vident privacy</Link>
          <Link href="/vident/terms">Vident terms</Link>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Techpsycho. All rights reserved.</div>
    </footer>
  );
}
