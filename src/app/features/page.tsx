import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "AdNinja Features — Ad Filtering and Website Controls",
  description:
    "Explore AdNinja's supported ad and tracker filtering, protection profiles, automatic cleanup, element picker, and website controls.",
  path: "/features",
});

const features = [
  {
    number: "01",
    label: "FILTER THE NOISE",
    title: "Network filtering",
    description:
      "Locally packaged rules filter supported ad and tracker requests. Coverage varies by website and browser.",
    visual: "network",
  },
  {
    number: "02",
    label: "SET YOUR PACE",
    title: "Protection profiles",
    description:
      "Choose Light, Balanced, or Strict to adjust filtering strength. Exact behavior can vary between browser releases.",
    visual: "profiles",
  },
  {
    number: "03",
    label: "CLEAR THE VIEW",
    title: "Automatic page cleanup",
    description:
      "Automatic cleanup hides supported advertising containers and other on-page clutter.",
    visual: "cleanup",
  },
  {
    number: "04",
    label: "MAKE IT YOURS",
    title: "Element picker",
    description:
      "Select an unwanted page element and create a local hiding rule.",
    visual: "picker",
  },
  {
    number: "05",
    label: "KEEP SITES WORKING",
    title: "Website compatibility",
    description:
      "Use website exceptions and repair controls when filtering interferes with a page.",
    visual: "website",
  },
  {
    number: "06",
    label: "STAY IN CONTROL",
    title: "Privacy dashboard",
    description:
      "Manage local preferences, website exceptions, and saved element removals in one place.",
    visual: "dashboard",
  },
] as const;

function FeatureVisual({
  kind,
}: {
  kind: (typeof features)[number]["visual"];
}) {
  return (
    <div className={`feature-visual feature-visual-${kind}`} aria-hidden="true">
      {kind === "network" && (
        <div className="mini-browser">
          <div className="mini-browser-bar">
            <span />
            <span />
            <span />
            <i>example.page</i>
          </div>
          <div className="network-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="network-block">
            <b>×</b>
            <span>Request filtered</span>
          </div>
        </div>
      )}
      {kind === "profiles" && (
        <div className="profile-stack">
          <span>
            Light
            <i />
          </span>
          <span className="selected">
            Balanced<i>✓</i>
          </span>
          <span>
            Strict
            <i />
          </span>
        </div>
      )}
      {kind === "cleanup" && (
        <div className="cleanup-page">
          <div className="cleanup-top" />
          <div className="cleanup-content">
            <span />
            <span />
            <span />
          </div>
          <div className="cleanup-spark">✳</div>
        </div>
      )}
      {kind === "picker" && (
        <div className="picker-page">
          <span />
          <div className="picker-target">
            <span />
            <span />
          </div>
          <span />
          <div className="picker-cursor">↖</div>
        </div>
      )}
      {kind === "website" && (
        <div className="website-control">
          <div className="website-globe">◎</div>
          <div>
            <strong>this website</strong>
            <span>Site controls</span>
          </div>
          <i />
        </div>
      )}
      {kind === "dashboard" && (
        <div className="dashboard-panel">
          <div className="dashboard-head">
            <span>Overview</span>
            <i>● ● ●</i>
          </div>
          <div className="dashboard-bars">
            <span />
            <span />
            <span />
          </div>
          <div className="dashboard-tile">
            <span />
            Local controls
          </div>
        </div>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <div className="features-page">
      <section className="features-intro">
        <div className="container features-intro-inner">
          <div>
            <p className="eyebrow">THE AD NINJA TOOLKIT</p>
            <h1>
              Make the web feel <em>yours again.</em>
            </h1>
          </div>
          <p>
            Explore ways to filter supported ads and trackers, clean up pages,
            and adjust individual websites. Results can vary by site and
            browser.
          </p>
        </div>
      </section>
      <section className="features-section" aria-label="AdNinja features">
        <div className="container">
          <div className="features-section-heading">
            <span>EXPLORE THE CAPABILITIES</span>
            <span>01 — 06</span>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-detail" key={feature.number}>
                <div className="feature-detail-top">
                  <span>{feature.number} / 06</span>
                  <span className="feature-detail-dot" />
                </div>
                <FeatureVisual kind={feature.visual} />
                <div className="feature-detail-copy">
                  <p className="feature-detail-label">{feature.label}</p>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="features-note">
            Illustrations explain features; they are not extension screenshots.
          </p>
        </div>
      </section>
    </div>
  );
}
