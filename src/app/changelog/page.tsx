import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Changelog", description: "AdNinja release history status." };
export default function Changelog(){return <><PageIntro eyebrow="RELEASE NOTES" title="What’s new with AdNinja." description="Versioned release notes will appear here after the extension changelog is available and verified."/><section className="section"><div className="container prose"><div className="notice">No release versions or dates have been verified. Do not present the website scaffold as an extension release.</div><h2>Future entries</h2><p>Each entry will include version, release date, features, fixes, known limitations, and browser availability.</p></div></section></>}
