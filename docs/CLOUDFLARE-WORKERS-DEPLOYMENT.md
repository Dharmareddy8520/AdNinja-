# Cloudflare Workers deployment

The site is a Next.js static export. `wrangler.jsonc` uploads the generated `out/` directory as Workers static assets. Next.js creates `sitemap.xml`, `robots.txt`, and page metadata **during the build**; Wrangler does not regenerate them when uploading assets. The Workers runtime environment cannot change an already exported sitemap.

The single configured production origin is in `src/config/production-origin.json`. Update it if the canonical host changes, then rebuild and redeploy. `npm run build:workers` supplies that origin and enables indexing for the build, runs `next build`, and validates the exported SEO artifacts. It stops before upload if validation fails. `npm run build` remains the preview build; use it only with `SITE_URL` and `SEO_INDEXING_ENABLED` unset or set `SEO_INDEXING_ENABLED=false`.

## Local release steps

From the website repository root:

```sh
npm ci
npm run format:check
npm run lint
npm run typecheck
npm run build:workers
npm test
```

Inspect `out/sitemap.xml` and `out/robots.txt`. The production build must contain five sitemap URLs and a sitemap reference in `robots.txt`. The build command runs `scripts/validate-seo.mjs` with the same origin and indexing settings used by Next.js. The checked-in `wrangler.jsonc` names the existing `adninja` Worker and points `assets.directory` to `./out`.

After review, publish with:

```sh
npx wrangler deploy
```

Do not run `npm run build` between `npm run build:workers` and `npx wrangler deploy`, because the preview build would replace `out/` with an empty sitemap. If Cloudflare Workers Builds deploys from Git, set its **deploy command** to `npm run build:workers && npx wrangler deploy` rather than deploying a prebuilt preview `out/` directory. Verify the build log shows `SEO validation passed ... (production mode)` before release. [Cloudflare's static-assets configuration](https://developers.cloudflare.com/workers/static-assets/binding/) and [Wrangler deployment guide](https://developers.cloudflare.com/workers/static-assets/get-started/) describe this asset flow.

## After deployment

Check the live homepage, `/features`, `/how-it-works`, `/faq`, and `/support` return 200, have self-referencing canonical URLs, and do not contain `noindex`. Check `/sitemap.xml` lists those five URLs, `/robots.txt` allows crawling and points to the sitemap, and the homepage emits the same origin in Open Graph and JSON-LD. The draft `/privacy`, `/licenses`, and `/changelog` pages remain noindex and absent from the sitemap. The deployed site will not change until the corrected build is published. Google Search Console ownership is already verified; resubmit the sitemap after the new deployment and inspect its processing status.

For a preview deployment, run `npm run build` with `SEO_INDEXING_ENABLED=false` and upload that separate export to a preview Worker. Do not overwrite the production Worker's `out/` assets with a preview export. Do not use a Wrangler runtime variable as a substitute for the production build command; the sitemap is a static file.
