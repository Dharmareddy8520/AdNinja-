import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const output = join(process.cwd(), "out");
const indexable = ["/", "/features", "/how-it-works", "/faq", "/support"];
const drafts = ["/privacy", "/licenses", "/changelog"];
const routes = [...indexable, ...drafts];
const production = process.env.SEO_INDEXING_ENABLED === "true";
const origin = process.env.SITE_URL?.replace(/\/$/, "");

if (production) {
  assert.ok(origin, "A production SEO check requires SITE_URL.");
}

function fileFor(path) {
  return join(output, path === "/" ? "index.html" : `${path.slice(1)}.html`);
}

function attribute(tag, name) {
  return tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1] ?? null;
}

function tagWith(head, tagName, key, value) {
  return [...head.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "g"))]
    .map(([tag]) => tag)
    .find((tag) => attribute(tag, key) === value);
}

const titles = new Set();
const descriptions = new Set();

for (const path of routes) {
  const file = fileFor(path);
  assert.ok(existsSync(file), `Missing exported page: ${file}`);
  const html = readFileSync(file, "utf8");
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  assert.ok(head, `Missing head: ${path}`);

  const title = head.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = attribute(
    tagWith(head, "meta", "name", "description") ?? "",
    "content",
  );
  assert.ok(title && description, `Missing title or description: ${path}`);
  assert.ok(!titles.has(title), `Duplicate title: ${title}`);
  assert.ok(
    !descriptions.has(description),
    `Duplicate description: ${description}`,
  );
  titles.add(title);
  descriptions.add(description);

  const h1Count = [...html.matchAll(/<h1(?:\s|>)/g)].length;
  assert.equal(h1Count, 1, `Expected one H1 on ${path}, found ${h1Count}`);

  const robots = attribute(
    tagWith(head, "meta", "name", "robots") ?? "",
    "content",
  );
  const shouldIndex = production && indexable.includes(path);
  const directives =
    robots?.split(",").map((directive) => directive.trim()) ?? [];
  assert.ok(
    directives.includes(shouldIndex ? "index" : "noindex"),
    `Incorrect robots meta on ${path}`,
  );

  const canonical = attribute(
    tagWith(head, "link", "rel", "canonical") ?? "",
    "href",
  );
  if (shouldIndex) {
    assert.ok(canonical, `Missing canonical on ${path}`);
    assert.equal(
      new URL(canonical).href,
      new URL(path, `${origin}/`).href,
      `Incorrect canonical on ${path}`,
    );
  } else {
    assert.equal(canonical, null, `Noindex page has a canonical on ${path}`);
  }

  const ogTitle = attribute(
    tagWith(head, "meta", "property", "og:title") ?? "",
    "content",
  );
  const ogDescription = attribute(
    tagWith(head, "meta", "property", "og:description") ?? "",
    "content",
  );
  const twitterCard = attribute(
    tagWith(head, "meta", "name", "twitter:card") ?? "",
    "content",
  );
  assert.ok(
    ogTitle && ogDescription && twitterCard === "summary_large_image",
    `Missing social metadata on ${path}`,
  );

  const ogImage = attribute(
    tagWith(head, "meta", "property", "og:image") ?? "",
    "content",
  );
  const twitterImage = attribute(
    tagWith(head, "meta", "name", "twitter:image") ?? "",
    "content",
  );
  assert.equal(
    ogImage,
    shouldIndex ? `${origin}/social-preview.png` : null,
    `Incorrect OG image on ${path}`,
  );
  assert.equal(
    twitterImage,
    shouldIndex ? `${origin}/social-preview.png` : null,
    `Incorrect Twitter image on ${path}`,
  );
  assert.ok(
    !/(localhost|example\.(com|org|net)|\.invalid)/i.test(head),
    `Placeholder URL in head on ${path}`,
  );

  for (const [tag] of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attribute(tag, "href");
    assert.ok(
      !/(localhost|\.pages\.dev|\.vercel\.app|\.netlify\.app|\.invalid)/i.test(
        href ?? "",
      ),
      `Staging link ${href} on ${path}`,
    );
    if (!href?.startsWith("/") || href.startsWith("//")) continue;
    const target = href.split(/[?#]/)[0] || "/";
    assert.ok(
      routes.includes(target) || target === "/",
      `Broken internal link ${href} on ${path}`,
    );
  }

  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    assert.notEqual(
      attribute(tag, "alt"),
      null,
      `Missing image alt on ${path}`,
    );
  }
}

const missingPage = readFileSync(join(output, "404.html"), "utf8");
assert.match(
  missingPage,
  /<meta name="robots" content="noindex/,
  "404 must be noindex.",
);

const robotsText = readFileSync(join(output, "robots.txt"), "utf8");
const sitemapXml = readFileSync(join(output, "sitemap.xml"), "utf8");
assert.match(sitemapXml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
assert.match(
  sitemapXml,
  /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/,
);
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);

if (production) {
  assert.match(robotsText, /Allow: \//);
  assert.ok(sitemapUrls.length > 0, "Production sitemap must not be empty.");
  for (const url of sitemapUrls) {
    assert.equal(
      new URL(url).origin,
      origin,
      `Sitemap URL uses the wrong origin: ${url}`,
    );
  }
  assert.ok(
    robotsText.includes(`Sitemap: ${origin}/sitemap.xml`),
    "Production robots.txt is missing its sitemap URL.",
  );
  assert.deepEqual(
    sitemapUrls,
    indexable.map((path) => `${origin}${path}`),
  );
  assert.ok(
    !sitemapXml.includes("<lastmod>"),
    "Unverified lastmod values must be omitted.",
  );

  const home = readFileSync(fileFor("/"), "utf8");
  const jsonLd = home.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )?.[1];
  assert.ok(jsonLd, "Homepage structured data is missing.");
  const graph = JSON.parse(jsonLd)["@graph"];
  assert.ok(
    graph.some(
      (item) => item["@type"] === "WebSite" && item.url === `${origin}/`,
    ),
  );
  assert.ok(
    graph.some(
      (item) =>
        item["@type"] === "SoftwareApplication" && item.offers?.price === "0",
    ),
  );
  assert.ok(
    !graph.some((item) => "aggregateRating" in item),
    "Unverified ratings must not be published.",
  );
} else {
  assert.match(robotsText, /Disallow: \//);
  assert.equal(sitemapUrls.length, 0, "Preview sitemap must be empty.");
}

const image = readFileSync(join(output, "social-preview.png"));
assert.equal(image.subarray(1, 4).toString(), "PNG");
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
assert.ok(
  existsSync(join(output, "adninja-icon.png")),
  "Brand icon is missing.",
);

console.log(
  `SEO validation passed for ${routes.length} routes (${production ? "production" : "preview"} mode).`,
);
