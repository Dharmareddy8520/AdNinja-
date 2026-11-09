# AdNinja website

This repository is the early implementation of a standalone product website for the AdNinja browser extension. The full brief is in [docs/MASTER-PROMPT.md](docs/MASTER-PROMPT.md). The [Edge listing](https://microsoftedge.microsoft.com/addons/detail/adninja/gcmgpggcaejfonkjkfjllpcbneolmaci), [Firefox listing](https://addons.mozilla.org/en-GB/firefox/addon/adninja/), and Firefox support email are recorded in `src/config/product.ts`. Chrome store availability, legal text, screenshots, and some feature details remain unverified. The site intentionally blocks indexing until the remaining release items are resolved.

## Local development

Requires Node.js and npm. Once installed:

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. Run `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm test`, and `npm run seo:check` before release. Run tests after the build because they inspect the static export in `out/`. Run `npm audit --audit-level=high` when registry access is available.

The header theme control follows the system preference until a visitor selects Light or Dark. The choice is saved locally in the browser. The support page links to the developer's LinkedIn profile; this does not establish the registered publisher identity.

SEO is disabled by default. Before a reviewed production build, set the final HTTPS `SITE_URL` and `SEO_INDEXING_ENABLED=true` as shown in [`.env.example`](.env.example). Without both, the exported site stays noindex and the sitemap is empty. The production host, privacy policy, licensing, and redirects still need publisher review. See the [SEO implementation](docs/SEO-IMPLEMENTATION.md), [release checklist](docs/SEO-CHECKLIST.md), and [manual search setup](docs/SEARCH-CONSOLE-SETUP.md).

## Structure

- `src/app/`: pages, layout, and site CSS.
- `src/components/`: shared navigation and page UI.
- `src/config/product.ts`: browser release status, official links, and contact details.
- `src/config/seo.ts`: canonical host, route metadata, and indexing controls.
- `scripts/validate-seo.mjs`: exported HTML, sitemap, robots, and social asset checks.
- `scripts/theme.test.mjs`: exported theme bootstrap and developer-link checks.
- `docs/MASTER-PROMPT.md`: product and website brief.

## Release blockers

1. Locate and review the extension source, build artifacts, current changelog, screenshots, and browser permissions.
2. Verify each product claim and the remaining browser store URLs. Update `src/config/product.ts`; keep unavailable buttons inactive.
3. Confirm the registered publisher identity. The Firefox listing displays AdNinja and supplies a support email.
4. Complete legal review of the privacy policy and third-party licenses.
5. Add authentic screenshots, metadata assets, and canonical production URL.
6. Run automated checks, accessibility review, mobile/desktop browser review, and a production build.

No site has been deployed from this checkout.
