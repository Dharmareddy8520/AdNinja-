# Implementation status

## Completed in this checkout

- Next.js App Router scaffold with a static export target.
- Responsive homepage, shared navigation and footer, and routes for features, how it works, privacy, support, FAQ, changelog, licenses, and 404.
- Centralized browser availability and support contact in `src/config/product.ts`; the Edge and Firefox listings are linked there.
- Domain-gated route metadata, sitemap, robots route, JSON-LD, social preview, and static-output SEO validation. The build remains noindex until the production host and indexing flag are supplied.

## Verification pending

- This checkout does not contain the extension implementation or release artifacts. Product capabilities, the Chrome store listing, screenshots, registered publisher details, and legal notices still require independent verification.
- Add focused component tests if a test framework is adopted; the exported HTML has an automated SEO validator. Manual desktop/mobile review remains pending.
- Supply the final production domain and approved privacy and license text before enabling indexing.

## Design decision

The initial site uses dependency-free CSS to make the first source pass reviewable without package installation. The brief recommends Tailwind CSS; revisit that choice when Node.js is available and the design system is stabilized.
