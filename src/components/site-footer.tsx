import Link from "next/link";

export function SiteFooter() {
  return <footer className="footer">
    <div className="container footer-inner">
      <div><Link className="brand" href="/">AdNinja</Link><p>Less clutter. More control.</p></div>
      <nav aria-label="Footer navigation">
        <Link href="/features">Features</Link><Link href="/privacy">Privacy</Link>
        <Link href="/support">Support</Link><Link href="/faq">FAQ</Link>
        <Link href="/changelog">Changelog</Link><Link href="/licenses">Licenses</Link>
      </nav>
      <small>© {new Date().getFullYear()} AdNinja. Release details pending verification.</small>
    </div>
  </footer>;
}
