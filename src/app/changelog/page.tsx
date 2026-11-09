import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "AdNinja Changelog Draft",
  description:
    "AdNinja release notes will appear after their details are verified.",
  path: "/changelog",
  indexable: false,
});
export default function Changelog() {
  return (
    <>
      <PageIntro
        eyebrow="RELEASE NOTES"
        title="What’s new with AdNinja."
        description="Versioned website release notes will appear here after they are checked against the Edge and Firefox store histories."
      />
      <section className="section">
        <div className="container prose">
          <div className="notice">
            Edge and Firefox store listings are available, but versioned release
            notes have not yet been approved for this website.
          </div>
          <h2>Future entries</h2>
          <p>
            Each entry will include version, release date, features, fixes,
            known limitations, and browser availability.
          </p>
        </div>
      </section>
    </>
  );
}
