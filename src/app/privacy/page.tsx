import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Privacy Policy Draft", description: "AdNinja privacy policy draft and outstanding verification items." };
export default function Privacy(){return <><PageIntro eyebrow="PRIVACY" title="Privacy policy draft." description="This page is incomplete and must be reviewed against the extension before publication."/><section className="section"><div className="container prose">
  <div className="notice"><strong>Launch blocker:</strong> The extension source, permissions documentation, and publisher contact are not present in this checkout. This is a review checklist, not a final privacy policy.</div>
  <h2>Information the extension processes</h2><p>Confirm which page URLs, page content, requests, settings, and user-created rules the release build handles. Describe each purpose and whether processing happens on the device.</p>
  <h2>Data sharing and optional reports</h2><p>Verify whether any browsing data, diagnostics, or reports leave the device; identify recipients, opt-in behavior, retention, and deletion. No claim of zero collection is made here.</p>
  <h2>Permissions and user control</h2><p>List the permissions requested by each browser build and explain why each is needed. Document how users change settings, clear saved rules, and uninstall the extension.</p>
  <h2>Contact and updates</h2><p>Publisher identity, support contact, effective date, and policy update process are pending verification.</p>
  </div></section></>}
