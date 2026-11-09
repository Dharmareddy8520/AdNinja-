import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "How AdNinja Works — Install and Customize Protection",
  description:
    "Learn how to install AdNinja for Edge or Firefox, choose a protection profile, hide unwanted elements, and adjust site-specific controls.",
  path: "/how-it-works",
});
const steps = [
  [
    "Install",
    "Get AdNinja from the Microsoft Edge Add-ons or Mozilla Add-ons listing. Chrome availability is still being verified.",
  ],
  [
    "Enable protection",
    "Open the extension controls and confirm protection is enabled.",
  ],
  [
    "Choose a profile",
    "Select Light, Balanced, or Strict based on your preference.",
  ],
  ["Customize a page", "Use the element picker to hide an unwanted element."],
  [
    "Manage exceptions",
    "Adjust controls for individual websites when necessary.",
  ],
  [
    "Repair a site",
    "If a page breaks, test a less restrictive setting and restore your previous choice if needed.",
  ],
  [
    "Review privacy controls",
    "Open the privacy dashboard to inspect available local options.",
  ],
];
export default function HowItWorks() {
  return (
    <>
      <PageIntro
        eyebrow="GET STARTED"
        title="Make the web feel more yours."
        description="A starting guide for Edge and Firefox. Screenshots and exact control labels can vary between releases."
      />
      <section className="section">
        <div className="container prose">
          <ol>
            {steps.map(([title, body]) => (
              <li key={title}>
                <h2>{title}</h2>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
