import type { Metadata } from "next";
import Link from "next/link";
import { product } from "@/config/product";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "AdNinja Support — Help, Contact and Troubleshooting",
  description:
    "Get AdNinja help with installation, filtering, website controls, privacy, and bug reports. Find the official support contact and license information.",
  path: "/support",
});

const topics = [
  {
    number: "01",
    title: "Getting started",
    description:
      "Check installation status, browser availability, and the planned setup flow.",
    href: "/how-it-works",
    link: "View the guide",
  },
  {
    number: "02",
    title: "Filtering & protection",
    description:
      "Learn about the planned filtering controls and protection profiles.",
    href: "/features",
    link: "Explore features",
  },
  {
    number: "03",
    title: "Website controls",
    description:
      "Find answers about page cleanup, the element picker, and site compatibility.",
    href: "/faq",
    link: "Read common questions",
  },
  {
    number: "04",
    title: "Privacy & permissions",
    description:
      "Review the current privacy draft and its open verification items.",
    href: "/privacy",
    link: "Read the privacy draft",
  },
] as const;

export default function Support() {
  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="container support-hero-inner">
          <div>
            <p className="eyebrow">ADNINJA SUPPORT</p>
            <h1>Here when you need a hand.</h1>
            <p className="support-lead">
              Start with a topic below, or check the latest answers in the FAQ.
              AdNinja has Edge and Firefox store listings; Chrome availability
              is still being verified.
            </p>
            <Link className="button" href="/faq">
              Browse the FAQ <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="support-hero-art" aria-hidden="true">
            <div className="support-orbit support-orbit-one" />
            <div className="support-orbit support-orbit-two" />
            <div className="support-symbol">?</div>
            <div className="support-spark support-spark-one">✳</div>
            <div className="support-spark support-spark-two">✦</div>
          </div>
        </div>
      </section>

      <section className="support-content">
        <div className="container">
          <div className="support-heading">
            <div>
              <p className="eyebrow">FIND YOUR WAY</p>
              <h2>What can we help with?</h2>
            </div>
            <p>
              Practical starting points for using AdNinja and understanding what
              is still being verified.
            </p>
          </div>
          <div className="support-topic-grid">
            {topics.map((topic) => (
              <Link
                className="support-topic"
                href={topic.href}
                key={topic.number}
              >
                <span className="support-topic-number">
                  {topic.number} / 04
                </span>
                <span className="support-topic-icon" aria-hidden="true">
                  {topic.number === "01"
                    ? "↗"
                    : topic.number === "02"
                      ? "✳"
                      : topic.number === "03"
                        ? "◫"
                        : "◎"}
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="support-topic-link">
                  {topic.link} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="support-details">
            <div className="support-contact">
              <p className="eyebrow">NEED MORE HELP?</p>
              <h2>Contact & bug reports</h2>
              {product.supportEmail ? (
                <p>
                  For support or to report a problem, email{" "}
                  <a href={`mailto:${product.supportEmail}`}>
                    {product.supportEmail}
                  </a>
                  .
                </p>
              ) : (
                <p>
                  A verified support address or issue tracker has not been
                  supplied yet. The official reporting method will be added
                  before launch.
                </p>
              )}
            </div>
            <div className="support-project">
              <p className="eyebrow">ABOUT THE PROJECT</p>
              <div className="support-project-row" id="developer">
                <div>
                  <h3>Developer details</h3>
                  <p>
                    AdNinja developer{" "}
                    <a
                      href={product.developer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.developer.name} on LinkedIn
                    </a>
                    . The Firefox store displays AdNinja as its developer name,
                    and the extension source credits ClearBrowse contributors.
                  </p>
                </div>
                <span className="support-status">Developer profile</span>
              </div>
              <div className="support-project-row">
                <div>
                  <h3>License & credits</h3>
                  <p>
                    The Firefox listing labels the add-on GPLv3-only. The source
                    repository declares GPL-3.0-or-later; bundled material and
                    redistribution terms still require review.
                  </p>
                </div>
                <Link className="support-project-link" href="/licenses">
                  View license details <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
