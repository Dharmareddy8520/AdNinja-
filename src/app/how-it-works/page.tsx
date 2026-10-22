import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "How It Works", description: "A simple guide to AdNinja's planned installation and website controls." };
const steps = [
  ["Install", "Use a verified official browser-store listing when one becomes available."],
  ["Enable protection", "Open the extension controls and confirm protection is enabled."],
  ["Choose a profile", "Select Light, Balanced, or Strict based on your preference."],
  ["Customize a page", "Use the element picker to hide an unwanted element."],
  ["Manage exceptions", "Adjust controls for individual websites when necessary."],
  ["Repair a site", "If a page breaks, test a less restrictive setting and restore your previous choice if needed."],
  ["Review privacy controls", "Open the privacy dashboard to inspect available local options."],
];
export default function HowItWorks(){return <><PageIntro eyebrow="GET STARTED" title="Make the web feel more yours." description="A preview of the intended workflow. Screenshots and exact instructions will be added after the extension is available for review."/><section className="section"><div className="container prose"><ol>{steps.map(([title,body])=><li key={title}><h2>{title}</h2><p>{body}</p></li>)}</ol></div></section></>}
