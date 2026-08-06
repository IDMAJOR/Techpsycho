import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>TECHPSYCO</span></Link>
          <p>Digital products built with clarity, speed and purpose.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/services">Services</Link><Link href="/software">Software</Link><Link href="/work">Work</Link><Link href="/about">About</Link>
        </div>
        <div className="footer-links">
          <strong>Connect</strong>
          <a href="mailto:hello@techpsyco.com">hello@techpsyco.com</a><Link href="/contact">Start a project</Link><Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Techpsyco. All rights reserved.</div>
    </footer>
  );
}
