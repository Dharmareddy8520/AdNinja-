import Link from "next/link";
import { product } from "@/config/product";

const features = [
  ["01", "Network filtering", "Rules can reduce supported ad requests before they load."],
  ["02", "Protection profiles", "Choose a lighter or stronger filtering mode for your browsing."],
  ["03", "Page cleanup", "Hide supported on-page clutter after a page loads."],
  ["04", "Element picker", "Select unwanted page elements for more personal control."],
  ["05", "Website controls", "Adjust protection when a site needs special handling."],
  ["06", "Privacy dashboard", "Review available local controls in one place."],
];

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div><p className="eyebrow">BROWSER CONTROL, SIMPLIFIED</p><h1>Browse with fewer <em>distractions.</em></h1>
        <p className="lead">Meet AdNinja — a browser extension project designed to help filter supported ads, hide unwanted elements, and give you more control over websites.</p>
        <div className="actions"><Link className="button" href="#get-adninja">Get AdNinja <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/features">Explore features <span aria-hidden="true">→</span></Link></div>
        <p className="fine-print">Store availability has not yet been verified.</p>
      </div>
      <div className="visual" aria-label="Illustration of layered website controls">
        <div className="visual-top"><span>adninja / overview</span><span>● ● ●</span></div>
        <div className="visual-body"><div className="visual-badge">A</div><p>YOUR BROWSING, YOUR CALL</p><strong>Make room for what matters.</strong>
          <div className="visual-bars"><span></span><span></span><span></span></div>
          <div className="visual-card">A calmer page starts with a choice. <span>✦</span></div>
        </div>
        <p className="visual-caption">Illustrative graphic · not an extension screenshot</p>
      </div>
    </div></section>
    <section className="section" id="get-adninja"><div className="container">
      <div className="section-heading"><p className="eyebrow">AVAILABILITY</p><h2>Choose your browser.</h2><p>Official installation links will appear after release details are verified.</p></div>
      <div className="browser-grid">{product.browsers.map(browser => <article className="browser-card" key={browser.name}><span className="browser-glyph" aria-hidden="true">◎</span><h3>{browser.name}</h3><p>Availability unverified</p><span className="inactive-button" aria-disabled="true">Coming soon</span></article>)}</div>
    </div></section>
    <section className="section section-muted"><div className="container"><div className="section-heading"><p className="eyebrow">THE TOOLKIT</p><h2>Control that fits the page.</h2><p>Explore the capabilities described in the product brief. Details require extension review before launch.</p></div>
      <div className="feature-grid">{features.map(([number,title,description]) => <Link href="/features" className="feature-card" key={number}><span className="feature-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="card-arrow" aria-hidden="true">↗</span></Link>)}</div>
    </div></section>
    <section className="section"><div className="container split"><div><p className="eyebrow">HOW IT WORKS</p><h2>Start simple. Adjust as you go.</h2><p>AdNinja is designed to put useful controls close at hand without requiring an account.</p><Link className="text-link" href="/how-it-works">See the guide →</Link></div><ol className="steps"><li><span>01</span> Install when a verified store listing is available.</li><li><span>02</span> Select a protection profile.</li><li><span>03</span> Browse with supported filtering enabled.</li><li><span>04</span> Customize site behavior when needed.</li></ol></div></section>
    <section className="cta-section"><div className="container"><p className="eyebrow">MORE CONTROL, LESS NOISE</p><h2>Take control of your browsing experience.</h2><div className="actions"><Link className="button button-light" href="#get-adninja">Check availability</Link><Link className="text-link light-link" href="/faq">Read the FAQ →</Link></div></div></section>
  </>;
}
