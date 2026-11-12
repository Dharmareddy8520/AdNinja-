# AdNinja SEO implementation

## Audit and scope

This is a Next.js 15 App Router site with `output: "export"`. It has a homepage and seven content routes. Before this work, it had a global `noindex`, basic descriptions, no production domain, no canonical URLs, no sitemap or robots route, no structured data, and no social preview asset. The deployment host and its redirects are not configured in this checkout. The site has an existing green website design; the extension's red ninja-and-shield icon is used only for the favicon and social image.

The current verified store links are centralized in `src/config/product.ts`: Microsoft Edge and Firefox. Chrome and Opera have no verified store links. The site does not publish a dedicated download page because the homepage already gives both available links and the other browsers have no useful approved installation path. It does not create near-duplicate browser pages.

## Production configuration

`src/config/production-origin.json` records the current verified Cloudflare Workers origin. `npm run build:workers` passes it as `SITE_URL` and sets `SEO_INDEXING_ENABLED=true` for the static export, then validates the result. `npm run build` remains a preview build when SEO environment variables are unset. See [Cloudflare Workers deployment](CLOUDFLARE-WORKERS-DEPLOYMENT.md) for the exact release commands. These are build-time inputs; Wrangler runtime variables cannot repair an already exported sitemap.

With either setting missing, every page is noindex, `robots.txt` disallows crawling, `sitemap.xml` is valid but empty, and no canonical or absolute social image URLs are emitted. An invalid URL or an indexing-enabled build without a URL fails the build. This prevents a placeholder host from reaching canonical tags or the sitemap.

When both settings are supplied, these routes are indexable and self-canonical: `/`, `/features`, `/how-it-works`, `/faq`, `/support`. The draft `/privacy`, `/licenses`, and `/changelog` routes stay noindex and out of the sitemap. The 404 page is noindex. All route metadata is generated through `src/config/seo.ts`, and the sitemap uses its explicit indexable route list. No unverified `lastmod` dates are emitted. The public `robots.txt` allows crawling and points to the canonical sitemap.

The application uses slashless canonical paths except for the homepage. Configure the deployment host to serve those paths, redirect HTTP to HTTPS, redirect the alternate www/non-www host to `SITE_URL`, and normalize trailing slashes without chains. Static export cannot enforce these host-level redirects itself. Preview and staging deployments should also have access control if they contain sensitive material; robots rules alone do not provide privacy.

## Page metadata and search intent

| Route           | SEO title                                              | Main intent                                           | Index when enabled |
| --------------- | ------------------------------------------------------ | ----------------------------------------------------- | ------------------ |
| `/`             | AdNinja — Free Ad Blocker for Cleaner Browsing         | AdNinja, free browser ad blocker, local-first privacy | Yes                |
| `/features`     | AdNinja Features — Ad Filtering and Website Controls   | Tracker filtering, cleanup, element picker, profiles  | Yes                |
| `/how-it-works` | How AdNinja Works — Install and Customize Protection   | Installation, Edge and Firefox setup, site controls   | Yes                |
| `/faq`          | AdNinja FAQ — Browsers, Filtering, Privacy and Support | Real questions and limitations                        | Yes                |
| `/support`      | AdNinja Support — Help, Contact and Troubleshooting    | Support and troubleshooting                           | Yes                |
| `/privacy`      | AdNinja Privacy Policy Draft                           | Incomplete policy                                     | No                 |
| `/licenses`     | AdNinja Licenses and Credits                           | Attribution under legal review                        | No                 |
| `/changelog`    | AdNinja Changelog Draft                                | Unverified release notes                              | No                 |

No page targets an unsupported Opera or Chrome download query. Those themes can be revisited only when a listing and useful browser-specific instructions exist. Keyword themes are editorial guidance, not a claim about search volume or rank.

| Keyword theme                                                                                                                    | Primary page            | Why                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------- |
| AdNinja, free ad blocker, browser ad blocker, privacy browser extension                                                          | `/`                     | Product identity, free core, local-first approach, and install links |
| Tracker blocker, block unwanted ads, automatic webpage cleanup, element picker, website-specific controls, Light/Balanced/Strict | `/features`             | Substantive explanations of each capability                          |
| Install AdNinja for Edge or Firefox                                                                                              | `/how-it-works` and `/` | Instructions and verified store links                                |
| Ad blocking limits, YouTube ads, account requirements, website repair                                                            | `/faq`                  | Direct answers to real user questions                                |
| Contact, bug reports, troubleshooting                                                                                            | `/support`              | Support route and verified contact                                   |
| Chrome and Opera installation terms                                                                                              | No targeted page yet    | Store availability is unverified                                     |

## Structured data and social previews

The indexable homepage emits `WebSite` and `SoftwareApplication` JSON-LD. It uses the verified free core offer, actual Edge and Firefox download URLs, the developer's LinkedIn profile as a `Person` author, and no rating, version, screenshot, or publisher organization. The JSON is escaped before insertion. There is no `FAQPage` markup: Google's FAQ rich results are generally limited to authoritative government and health sites. Shallow routes do not need a separate breadcrumb schema at this stage. Structured data may help search engines interpret the page but does not guarantee a rich result. See [Google's software-app rules](https://developers.google.com/search/docs/appearance/structured-data/software-app) and [FAQ guidance](https://developers.google.com/search/blog/2023/08/howto-faq-changes).

`/social-preview.png` is generated at build time at 1200×630 from the extension's authentic icon, copied to `public/adninja-icon.png` from the local extension repository. Indexable pages receive absolute Open Graph and Twitter image URLs once `SITE_URL` is configured. No extension screenshots were invented.

## Performance and accessibility

Marketing routes remain statically rendered. The feature explorer and theme control are client interactions; SEO text and browser links render in HTML. A small inline theme bootstrap applies the visitor's locally saved choice or system preference before page content. The favicon is a small local image. The social image is not loaded into the page body. No analytics, remote scripts, web fonts, or cookies were added. The current build reports approximately 103 kB of shared first-load JavaScript and 107 kB for the homepage; this is a build estimate, not a field Core Web Vitals measurement. Measure LCP, INP, and CLS on the deployed host with PageSpeed Insights and Search Console. Google's good thresholds are [LCP ≤2.5 s, INP ≤200 ms, and CLS ≤0.1](https://developers.google.com/search/docs/appearance/core-web-vitals).

The output validator checks unique titles and descriptions, one H1 per content page, robots directives, canonicals, social tags, sitemap and robots contents, internal links, image alt attributes, JSON-LD syntax, forbidden staging links, and social image dimensions. It inspects exported HTML and does not use browser automation.

Validation previously passed for a no-domain preview export and an isolated production-mode build using a reserved `.test` host. On 2026-11-11, the live Worker was found serving an empty sitemap, `Disallow: /`, and `noindex` on all eight content routes. The local `npm run build:workers` export now passes the production validator with five sitemap URLs, matching canonical and social URLs, allowed robots rules, and parseable homepage JSON-LD. The live Worker remains unchanged until the corrected export is deployed.

On 2026-11-08, `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm run seo:check`, and `git diff --check` passed. The SEO validator also passed against the isolated production-mode build. `npm audit --audit-level=high` passed after the PostCSS patch while reporting six moderate transitive advisories. No unit-test runner or browser automation is configured; no desktop/mobile browser inspection, Lighthouse run, or live deployment test was performed.

The source now pins PostCSS 8.5.32 through an npm override because the installed Next.js 15 release pins an older vulnerable PostCSS 8. The high-severity audit gate passes after this patch. Six moderate advisories remain in the ESLint/TypeScript tooling dependency tree; npm's dry-run remediation attempted a toolchain downgrade and was not applied. Review these separately when the upstream toolchain offers a compatible fix.

## Remaining publisher actions

1. Keep `src/config/production-origin.json` aligned with the current canonical Workers host; update it if a custom domain replaces that host.
2. Configure the Cloudflare Workers build to run `npm run build:workers` before `wrangler deploy`. Keep preview builds noindex, and verify clean-route serving and 404 status after deployment.
3. Replace the privacy draft with an approved policy and complete the license review; only then make those pages indexable if appropriate.
4. Verify final store descriptions, extension screenshots, permissions, and publisher identity against the shipped builds.
5. Run a real mobile and desktop review plus PageSpeed Insights after deployment. No Lighthouse or field scores are claimed here.
6. Verify production `/robots.txt`, `/sitemap.xml`, canonical tags, and social cards, then follow `SEARCH-CONSOLE-SETUP.md`.

## Maintenance

Update `src/config/product.ts` when a store listing changes. Update `src/config/seo.ts` and the SEO validator when an indexable route is added or removed. Use real content modification dates if `lastmod` is ever added. Rebuild and rerun every quality gate before publishing. Keep preview builds noindex. Use the host's prior deployment/version for rollback if a release introduces incorrect canonicals, robots rules, or broken pages.
