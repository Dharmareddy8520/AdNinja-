import { product } from "@/config/product";
import { absoluteUrl, indexingEnabled } from "@/config/seo";

export function ProductStructuredData() {
  if (!indexingEnabled) return null;

  const homepage = absoluteUrl("/")!;
  const downloads = product.browsers
    .filter((browser) => browser.status === "available" && browser.url)
    .map((browser) => browser.url!);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${homepage}#website`,
        name: "AdNinja",
        url: homepage,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${homepage}#software`,
        name: "AdNinja",
        description:
          "A free, local-first browser extension that filters supported ads and trackers and offers website controls.",
        author: {
          "@type": "Person",
          name: product.developer.name,
          url: product.developer.url,
        },
        applicationCategory: "BrowserApplication",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0" },
        downloadUrl: downloads,
        url: homepage,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
