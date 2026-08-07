import Link from "next/link";

const links = [
  ["Technology", "/services"],
  ["Software", "/software"],
  ["Approach", "/work"],
  ["About", "/about"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="Techpsyco home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>TECHPSYCO</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="button button-small" href="/software">Explore software</Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/software">Explore software</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
