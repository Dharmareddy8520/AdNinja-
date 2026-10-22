"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Features", "/features"],
  ["How it works", "/how-it-works"],
  ["Privacy", "/privacy"],
  ["FAQ", "/faq"],
  ["Support", "/support"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="AdNinja home">
          <span className="brand-mark" aria-hidden="true">A</span> AdNinja
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          {open ? "Close menu" : "Menu"}
        </button>
        <nav id="primary-nav" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="button button-small" href="/#get-adninja" onClick={() => setOpen(false)}>Get AdNinja</Link>
        </nav>
      </div>
    </header>
  );
}
