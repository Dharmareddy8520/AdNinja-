import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePaths, indexingEnabled } from "@/config/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) return [];

  return indexablePaths.map((path) => ({
    url: absoluteUrl(path)!,
  }));
}
