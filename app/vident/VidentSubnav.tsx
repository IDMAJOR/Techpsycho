import Link from "next/link";

export function VidentSubnav() {
  return (
    <nav className="product-subnav" aria-label="Vident information">
      <div className="container product-subnav-inner">
        <Link className="product-subnav-brand" href="/vident"><span className="vident-mini-mark" aria-hidden="true">V</span> Vident</Link>
        <div>
          <Link href="/vident">Overview</Link>
          <Link href="/vident/privacy">Privacy</Link>
          <Link href="/vident/terms">Terms</Link>
          <Link href="/vident/delete-account">Delete account</Link>
        </div>
      </div>
    </nav>
  );
}
