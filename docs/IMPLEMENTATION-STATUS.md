# Implementation status

## Completed in this checkout

- Next.js App Router scaffold with a static export target.
- Responsive homepage, shared navigation and footer, and routes for features, how it works, privacy, support, FAQ, changelog, licenses, and 404.
- Centralized browser availability and contact placeholders in `src/config/product.ts`.
- Noindex metadata while release claims and legal text remain unverified.

## Verification pending

- Node.js and npm are unavailable in the current environment, so dependencies were not installed and the development server, type check, lint, and production build were not run.
- This checkout does not contain the extension implementation or release artifacts. Product capabilities, browser store listings, screenshots, publisher details, support contact, and legal notices require independent verification.
- Add component tests and manual desktop/mobile review after a runtime is available.
- Add a verified canonical URL, sitemap, social image, and final privacy and license text before publication.

## Design decision

The initial site uses dependency-free CSS to make the first source pass reviewable without package installation. The brief recommends Tailwind CSS; revisit that choice when Node.js is available and the design system is stabilized.
