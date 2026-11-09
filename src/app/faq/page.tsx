import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { product } from "@/config/product";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "AdNinja FAQ — Browsers, Filtering, Privacy and Support",
  description:
    "Find answers about installing AdNinja, Edge and Firefox availability, ad filtering limits, protection profiles, website controls, and privacy.",
  path: "/faq",
});
const questions = [
  [
    "What is AdNinja?",
    "AdNinja is a browser extension that filters supported ads and trackers, hides unwanted page elements, and gives you website-specific controls.",
  ],
  [
    "Is AdNinja free?",
    "The core ad blocking and customization features are free. An account is not required.",
  ],
  [
    "Can I install AdNinja now?",
    "Yes. Edge and Firefox store links are in the browser availability section of the homepage. Chrome store availability remains unverified.",
  ],
  [
    "Which browsers are supported?",
    "AdNinja has Edge and Firefox store listings. Chrome and Opera store listings are not verified on this website.",
  ],
  [
    "How do I enable or disable protection?",
    "Open the extension controls to adjust protection. Available switches and labels can vary by browser release.",
  ],
  [
    "What are Light, Balanced, and Strict?",
    "They are three protection profiles with different filtering strengths. Choose the level that suits a website and adjust it if the page stops working.",
  ],
  [
    "What is Automatic Cleanup?",
    "Automatic Cleanup hides supported advertising elements on a page after it loads. Some elements may remain visible.",
  ],
  [
    "How do I hide an unwanted page element?",
    "Use the element picker to select the element and save a local hiding rule. Review saved removals if you need to undo a change.",
  ],
  [
    "What if a website stops working?",
    "Try a less restrictive profile or a site-specific exception, then restore protection when the page works again.",
  ],
  [
    "Does it block every ad?",
    "No. AdNinja filters supported ads and trackers, but results vary by site and browser.",
  ],
  [
    "Does it block YouTube ads?",
    "YouTube homepage, pre-roll, and mid-roll ads are not reliably blocked; some video ads may remain visible.",
  ],
  [
    "Does AdNinja require an account?",
    "No. The core filtering experience and local settings do not require an account.",
  ],
  [
    "How does AdNinja handle my privacy?",
    "Core filtering and settings are local-first. The privacy policy draft lists the data and permission details that still need final review before publication.",
  ],
  [
    "How do I report a problem?",
    `Use the support address shown on the Firefox listing: ${product.supportEmail}.`,
  ],
];
export default function FAQ() {
  return (
    <>
      <PageIntro
        eyebrow="QUESTIONS"
        title="Good to know."
        description="Straight answers, including what still needs to be confirmed before release."
      />
      <section className="section">
        <div className="container prose">
          {questions.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
