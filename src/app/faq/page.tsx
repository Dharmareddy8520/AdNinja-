import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "FAQ", description: "Answers to common questions about AdNinja and its release status." };
const questions = [
  ["Can I install AdNinja now?", "Official store availability has not been verified for this website. Installation links will be enabled only after verification."],
  ["Which browsers are supported?", "The brief lists Chrome, Edge, and Firefox builds. Current compatibility and store status still need confirmation."],
  ["Does it block every ad?", "No ad blocker can promise that. AdNinja is described as filtering supported ads, with results varying by site and browser."],
  ["Does it block YouTube ads?", "YouTube homepage, pre-roll, and mid-roll ads are not reliably blocked; some video ads may remain visible."],
  ["What are Light, Balanced, and Strict?", "They are protection profiles described in the brief. Exact differences will be documented after implementation review."],
  ["Can I change protection for one website?", "The brief describes website-specific controls. Exact steps and behavior need verification."],
  ["Does AdNinja need an account or backend?", "The planned core experience does not require an account or the optional M08 backend. Verify this against a release build before publication."],
  ["How do I report a problem?", "A verified support address or issue tracker has not yet been provided. This page will be updated before launch."],
];
export default function FAQ(){return <><PageIntro eyebrow="QUESTIONS" title="Good to know." description="Straight answers, including what still needs to be confirmed before release."/><section className="section"><div className="container prose">{questions.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section></>}
