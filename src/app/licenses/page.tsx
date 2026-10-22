import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Licenses", description: "AdNinja third-party license review status." };
export default function Licenses(){return <><PageIntro eyebrow="ATTRIBUTION" title="Licenses and credits." description="Third-party notices will be published after dependency and asset licenses are verified."/><section className="section"><div className="container prose"><div className="notice">Launch blocker: the extension license, bundled filter-list notices, and artwork licenses are unavailable in this checkout.</div><h2>Review required</h2><ul><li>Extension and website source licenses</li><li>Bundled filtering lists and uAssets-derived material</li><li>Fonts, artwork, icons, and third-party dependencies</li></ul><p>No license compatibility conclusion is implied by this draft.</p></div></section></>}
