import type { Metadata } from "next";

const configuredUrl = process.env.SITE_URL?.trim();
const indexingRequested = process.env.SEO_INDEXING_ENABLED === "true";

function parseSiteUrl(value: string | undefined): URL | null {
  if (!value) return null;

  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    /^(localhost|.*\.localhost|example\.(com|org|net))$/i.test(url.hostname)
  ) {
    throw new Error(
      "SITE_URL must be the final HTTPS origin without a path, credentials, query, or fragment.",
    );
  }
  return url;
}

export const siteUrl = parseSiteUrl(configuredUrl);

if (indexingRequested && !siteUrl) {
  throw new Error("SEO_INDEXING_ENABLED=true requires a verified SITE_URL.");
}

export const indexingEnabled = indexingRequested && Boolean(siteUrl);

export const indexablePaths = [
  "/",
  "/features",
  "/how-it-works",
  "/faq",
  "/support",
] as const;

export function absoluteUrl(path: string): string | undefined {
  return siteUrl ? new URL(path, siteUrl).toString() : undefined;
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
  indexable?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  indexable = true,
}: PageSeo): Metadata {
  const canIndex = indexingEnabled && indexable;
  const canonical = canIndex ? absoluteUrl(path) : undefined;
  const image = canIndex ? absoluteUrl("/social-preview.png") : undefined;

  return {
    title: { absolute: title },
    description,
    robots: { index: canIndex, follow: canIndex },
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "AdNinja",
      ...(canonical ? { url: canonical } : {}),
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: "AdNinja ninja and shield logo with the message Browse with fewer distractions",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
