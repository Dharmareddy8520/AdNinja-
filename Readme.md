# AdNinja website

This repository is the standalone product website for the AdNinja browser extension. The full brief is in [docs/MASTER-PROMPT.md](docs/MASTER-PROMPT.md). The [Edge listing](https://microsoftedge.microsoft.com/addons/detail/adninja/gcmgpggcaejfonkjkfjllpcbneolmaci), [Firefox listing](https://addons.mozilla.org/en-GB/firefox/addon/adninja/), and Firefox support email are recorded in `src/config/product.ts`. Chrome store availability, legal text, screenshots, and some feature details remain unverified. The site is deployed to Cloudflare Workers; draft routes stay noindex.

## Local development

Requires Node.js and npm. Once installed:

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. Run `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm test`, and `npm run seo:check` before release. Run tests after the build because they inspect the static export in `out/`. Run `npm audit --audit-level=high` when registry access is available.

The header theme control follows the system preference until a visitor selects Light or Dark. The choice is saved locally in the browser. The support page links to the developer's LinkedIn profile; this does not establish the registered publisher identity.

`npm run build` is for previews and stays noindex when SEO environment variables are unset. For the existing Cloudflare Worker, run `npm run build:workers`; it supplies the production origin from `src/config/production-origin.json`, exports the site, and checks the sitemap and metadata. Follow the [Workers deployment steps](docs/CLOUDFLARE-WORKERS-DEPLOYMENT.md) before uploading `out/`. The privacy policy, licensing, and redirects still need publisher review. See the [SEO implementation](docs/SEO-IMPLEMENTATION.md), [release checklist](docs/SEO-CHECKLIST.md), and [manual search setup](docs/SEARCH-CONSOLE-SETUP.md).

## Structure

- `src/app/`: pages, layout, and site CSS.
- `src/components/`: shared navigation and page UI.
- `src/config/product.ts`: browser release status, official links, and contact details.
- `src/config/seo.ts`: canonical host, route metadata, and indexing controls.
- `src/config/production-origin.json`: current production Workers origin.
- `scripts/build-workers.mjs`: production build and SEO validation.
- `scripts/validate-seo.mjs`: exported HTML, sitemap, robots, and social asset checks.
- `scripts/theme.test.mjs`: exported theme bootstrap and developer-link checks.
- `docs/MASTER-PROMPT.md`: product and website brief.

## Release blockers

1. Locate and review the extension source, build artifacts, current changelog, screenshots, and browser permissions.
2. Verify each product claim and the remaining browser store URLs. Update `src/config/product.ts`; keep unavailable buttons inactive.
3. Confirm the registered publisher identity. The Firefox listing displays AdNinja and supplies a support email.
4. Complete legal review of the privacy policy and third-party licenses.
5. Add authentic screenshots and review metadata assets.
6. Run automated checks, accessibility review, mobile/desktop browser review, and a production build.

The existing Worker needs a new deployment before local changes appear online.
