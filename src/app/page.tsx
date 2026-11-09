import Link from "next/link";
import type { Metadata } from "next";
import { FeatureExplorer } from "@/components/feature-explorer";
import { ProductStructuredData } from "@/components/product-structured-data";
import { product, type Browser } from "@/config/product";
import { pageMetadata } from "@/config/seo";

const browsers: Browser[] = product.browsers;

export const metadata: Metadata = pageMetadata({
  title: "AdNinja — Free Ad Blocker for Cleaner Browsing",
  description:
    "AdNinja helps filter supported ads and trackers, hide unwanted webpage elements, and customize browser protection. Free, local-first, and available for Edge and Firefox.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <ProductStructuredData />
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-kicker">
              <span /> A MORE INTENTIONAL WEB
            </p>
            <h1>
              Less noise.
              <br />
              <em>More of the web.</em>
            </h1>
            <p className="home-lead">
              AdNinja is a free, local-first browser extension that filters
              supported ads and trackers, clears on-page clutter, and puts
              website controls within reach. No account is required.
            </p>
            <div className="home-hero-actions">
              <Link className="button" href="#get-adninja">
                Check availability <span aria-hidden="true">↗</span>
              </Link>
              <Link className="home-secondary-link" href="#explore">
                Explore the toolkit <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <p className="home-hero-note">
              Available for Edge and Firefox. Chrome availability is still being
              verified.
            </p>
          </div>
          <div className="home-hero-scene">
            <div className="home-scene-glow" />
            <div className="home-browser" aria-hidden="true">
              <div className="home-browser-top">
                <span className="home-browser-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="home-address">your-web.page</span>
                <span>↗</span>
              </div>
              <div className="home-browser-body">
                <div className="home-page-kicker" />
                <div className="home-page-title" />
                <div className="home-page-title short" />
                <div className="home-page-text" />
                <div className="home-page-text short" />
                <div className="home-page-image">
                  <span>THE CONTENT YOU CAME FOR</span>
                  <strong>Room to focus.</strong>
                </div>
              </div>
            </div>
            <div className="home-floating-card" aria-hidden="true">
              <span className="home-floating-icon">✳</span>
              <span>
                <strong>AdNinja</strong>
                <small>Your browsing, your call</small>
              </span>
              <span className="home-floating-check">✓</span>
            </div>
            <p className="home-scene-caption">
              Illustrative concept, not an extension screenshot
            </p>
          </div>
        </div>
      </section>

      <div className="home-principles" aria-label="Product approach">
        <div className="container home-principles-inner">
          <span>
            <b>01</b> Filter supported requests
          </span>
          <span>
            <b>02</b> Clear page clutter
          </span>
          <span>
            <b>03</b> Adjust site by site
          </span>
        </div>
      </div>

      <section className="home-explore" id="explore">
        <div className="container">
          <div className="home-section-top">
            <p className="eyebrow">THE TOOLKIT</p>
            <span>DESIGNED AROUND YOUR CHOICES</span>
          </div>
          <div className="home-section-heading">
            <h2>
              Make space for
              <br />
              <em>what matters.</em>
            </h2>
            <p>
              Explore ways to filter supported ads, clear page clutter, and
              customize websites. Coverage varies by browser and site.
            </p>
          </div>
          <FeatureExplorer />
          <div className="home-explore-footer">
            <span>
              Coverage varies by site and browser; some ads may remain.
            </span>
            <Link href="/features">
              See all features <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-how">
        <div className="container home-how-grid">
          <div className="home-how-copy">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>
              Start simple.
              <br />
              <em>Stay in control.</em>
            </h2>
            <p>
              Start with a protection profile, then adjust individual websites
              when you need to. Settings work locally without an account.
            </p>
            <Link className="home-inline-link" href="/how-it-works">
              See the full guide <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <ol className="home-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Install from an official listing</h3>
                <p>
                  Get AdNinja from its Edge or Firefox store listing. Chrome
                  availability is still being verified.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Choose your profile</h3>
                <p>
                  Pick Light, Balanced, or Strict protection to suit your needs.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Fine-tune the page</h3>
                <p>
                  Use page cleanup and website controls to suit your browsing.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="home-availability" id="get-adninja">
        <div className="container">
          <div className="home-section-top">
            <p className="eyebrow">AVAILABILITY</p>
            <span>RELEASE STATUS</span>
          </div>
          <div className="home-section-heading">
            <h2>Find your browser.</h2>
            <p>
              AdNinja has store links for Microsoft Edge and Firefox. Chrome
              availability is still being verified.
            </p>
          </div>
          <div className="home-browser-grid">
            {browsers.map((browser, index) => (
              <article className="home-browser-card" key={browser.name}>
                <span className="home-browser-index">0{index + 1} / 03</span>
                <div className="home-browser-name">
                  <span className="home-browser-symbol" aria-hidden="true">
                    ◎
                  </span>
                  <h3>{browser.name}</h3>
                </div>
                {browser.status === "available" && browser.url ? (
                  <a
                    className="home-browser-status home-browser-store-link"
                    href={browser.url}
                  >
                    {browser.name === "Mozilla Firefox"
                      ? "Get for Firefox"
                      : browser.name === "Microsoft Edge"
                        ? "Get for Edge"
                        : "Visit official listing"}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="home-browser-status">
                    <i />{" "}
                    {browser.status === "in-review"
                      ? "Release in review"
                      : "Availability unverified"}
                  </span>
                )}
              </article>
            ))}
          </div>
          <p className="home-availability-note">
            Only verified official listings are linked here.
          </p>
        </div>
      </section>

      <section className="home-final">
        <div className="container home-final-inner">
          <div>
            <p className="eyebrow">A CALMER WAY TO BROWSE</p>
            <h2>Curious about AdNinja?</h2>
            <p>
              Read the details, including what is still being reviewed before
              release.
            </p>
          </div>
          <div className="home-final-links">
            <Link className="button button-light" href="/features">
              Explore features <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/faq">
              Read the FAQ <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
