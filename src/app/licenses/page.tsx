import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "AdNinja Licenses and Credits",
  description:
    "Review AdNinja source license declarations and the status of third-party notices.",
  path: "/licenses",
  indexable: false,
});

export default function Licenses() {
  return (
    <>
      <PageIntro
        eyebrow="ATTRIBUTION"
        title="Licenses and credits."
        description="A clear view of the source declaration and the notices still under review."
      />
      <section className="section">
        <div className="container prose">
          <h2>Extension source</h2>
          <p>
            The AdNinja extension source repository, which retains the legacy
            ClearBrowse name in some files, declares{" "}
            <strong>GPL-3.0-or-later</strong>. Its license credits{" "}
            <strong>ClearBrowse contributors</strong> for 2026. The official
            Firefox listing labels the distributed add-on{" "}
            <strong>GPLv3-only</strong>
            and displays <strong>AdNinja</strong> as its developer.
          </p>
          <h2>Bundled material</h2>
          <p>
            The extension repository documents packaged community filter lists,
            including GPL-3.0-only uAssets material. Its release checklist
            requires review of the combined redistribution terms, notices, and
            corresponding-source plan before publication.
          </p>
          <div className="notice">
            <strong>Publication review pending:</strong> The website source
            license, final third-party attribution, artwork and icon rights, and
            license compatibility still need confirmation.
          </div>
        </div>
      </section>
    </>
  );
}
