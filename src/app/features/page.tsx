import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Features", description: "Learn about AdNinja's planned filtering and website customization controls." };
const items = [
  ["Network filtering", "The product brief describes locally packaged, declarative filtering rules for supported ad requests. Exact behavior must be verified against the extension."],
  ["Protection profiles", "Light, Balanced, and Strict are intended to offer different levels of protection. The precise rule differences require implementation review."],
  ["Automatic page cleanup", "Cosmetic filtering is intended to hide supported advertising elements on web pages."],
  ["Element picker", "Select an unwanted page element and create a local hiding rule."],
  ["Website compatibility", "Site-specific controls are intended to help when filtering interferes with a page. Verify exact exception and rollback behavior before release."],
  ["Privacy dashboard", "A local control area is described in the brief. Do not interpret it as a verified network-block counter."],
];
export default function Features() { return <><PageIntro eyebrow="CAPABILITIES" title="Tools for a calmer web." description="Explore the controls described for AdNinja. The extension implementation still needs review before these descriptions are published as release claims."/><section className="section"><div className="container content-grid">{items.map(([title,description])=><article className="content-card" key={title}><h2>{title}</h2><p>{description}</p></article>)}</div></section></>; }
