import Link from "next/link";

export default function NotFound(){return <section className="section"><div className="container prose"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>We lost that page.</h1><p>The address may have changed. Head back to the homepage and explore from there.</p><Link className="button" href="/">Return home</Link></div></section>}
