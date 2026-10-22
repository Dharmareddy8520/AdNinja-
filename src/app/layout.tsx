import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AdNinja | Less clutter. More control.", template: "%s | AdNinja" },
  description: "Explore AdNinja, a browser extension project focused on supported ad filtering and website customization.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">{children}</main>
    <SiteFooter />
  </body></html>;
}
