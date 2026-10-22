# AdNinja website

This repository is the early implementation of a standalone product website for the AdNinja browser extension. The full brief is in [docs/MASTER-PROMPT.md](docs/MASTER-PROMPT.md). The extension source and release artifacts are not present here, so store availability, support contact, legal text, screenshots, and feature details remain unverified. The site intentionally blocks indexing until those items are resolved.

## Local development

Requires Node.js and npm. Once installed:

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. Run `npm run typecheck`, `npm run lint`, `npm run format:check`, and `npm run build` before release. The static export is written to `out/`.

## Structure

- `src/app/`: pages, layout, and site CSS.
- `src/components/`: shared navigation and page UI.
- `src/config/product.ts`: browser release status, official links, and contact details.
- `docs/MASTER-PROMPT.md`: product and website brief.

## Release blockers

1. Locate and review the extension source, build artifacts, current changelog, screenshots, and browser permissions.
2. Verify each product claim and each browser store URL. Update `src/config/product.ts`; keep unavailable buttons inactive.
3. Add a real support contact and publisher identity.
4. Complete legal review of the privacy policy and third-party licenses.
5. Add authentic screenshots, metadata assets, and canonical production URL.
6. Run automated checks, accessibility review, mobile/desktop browser review, and a production build.

No site has been deployed from this checkout.
