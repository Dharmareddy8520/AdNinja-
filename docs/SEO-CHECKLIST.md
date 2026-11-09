# SEO release checklist

## Before a production build

- [ ] Confirm the final HTTPS `SITE_URL` and preferred www/non-www host; no placeholder host.
- [ ] Confirm the hosting platform serves `/features` and other clean paths from the static export.
- [ ] Configure HTTP → HTTPS, alternate-host → canonical-host, and trailing-slash redirects at the host.
- [ ] Review the current Edge and Firefox listings and support contact; keep unverified Chrome and Opera links inactive.
- [ ] Approve the privacy policy, publisher details, licensing, and screenshots. Keep drafts noindex until resolved.
- [ ] Set `SEO_INDEXING_ENABLED=true` only for the reviewed production build; keep it false for preview builds.

## Automated gates

- [ ] `npm run format:check`
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `npm run seo:check` against the build produced with the same environment values.
- [ ] `npm audit --audit-level=high` when registry access is available.
- [ ] Review `git diff --check` and `git status --short`.

## After deployment, before indexing requests

- [ ] Confirm production pages and the real 404 return appropriate HTTP status codes.
- [ ] Open `/robots.txt` and `/sitemap.xml`; confirm the canonical host and intended URLs.
- [ ] Inspect page source for self-canonical tags, unique titles/descriptions, indexable-page robots directives, and valid JSON-LD.
- [ ] Open `/social-preview.png`; test an actual share preview and crop.
- [ ] Check mobile and desktop layout, keyboard access, visible focus, and the feature explorer.
- [ ] Measure PageSpeed Insights and real-user Core Web Vitals when data becomes available.
- [ ] Verify that preview/staging deployments remain noindex and are access-restricted when needed.
- [ ] Complete Google and Bing setup in `SEARCH-CONSOLE-SETUP.md`; record actual submissions and indexing results.

## Rollback

Keep the preceding static deployment available. If production robots, canonicals, sitemap, or core pages are wrong, restore the prior deployment using the hosting provider's rollback/version feature. Rebuild from the corrected revision and rerun the automated and live checks before re-enabling indexing.
