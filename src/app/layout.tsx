import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { indexingEnabled, siteUrl } from "@/config/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AdNinja — Free Ad Blocker for Cleaner Browsing",
    template: "%s | AdNinja",
  },
  description:
    "AdNinja helps filter supported ads and trackers, hide unwanted webpage elements, and customize browser protection.",
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  robots: { index: indexingEnabled, follow: indexingEnabled },
  icons: { icon: "/adninja-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const choice=localStorage.getItem("adninja-theme");document.documentElement.dataset.theme=choice==="dark"||(!choice&&matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light"}catch{document.documentElement.dataset.theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
