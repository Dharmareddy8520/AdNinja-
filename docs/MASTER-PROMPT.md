# MASTER IMPLEMENTATION PROMPT
# AdNinja — Official Product Website
## Agent: Codex Astra
## Project Type: Production-Ready SaaS-Quality Marketing Website
## Priority: HIGH

You are a senior full-stack engineer, product designer, UI/UX specialist, accessibility engineer, SEO specialist, and security-focused technical lead.

Your task is to design, develop, test, document, and prepare the complete official website for **AdNinja**, a privacy-focused browser extension.

This must be a professionally engineered, production-quality website—not a generic landing-page template or a mockup.

Implement the actual working website.

---

# 1. PRODUCT CONTEXT

## Product name

AdNinja

## Product category

Browser extension — Ad Blocking, Privacy, and Website Customization.

## Existing project

The browser extension already exists locally:

`C:\Users\dharmareddy.pandem\OneDrive - quantanashville.com\Desktop\extension`

Use the existing extension repository as the source of truth for functionality, branding assets, screenshots, privacy details, supported browsers, limitations, and release status.

Relevant documentation may include:

- README.md
- AGENTS.md
- docs/implementation-status.md
- docs/release/RELEASE-CHECKLIST.md
- docs/privacy/privacy-policy-draft.md
- docs/security/permissions.md
- docs/roadmap/V1-RELEASE-PLAN.md
- docs/reviews/M11-review.md
- docs/release/candidate-artifacts.json

Read available documentation before making claims about product functionality.

The extension's current capabilities include:

- Network advertisement filtering.
- Locally packaged filter lists.
- Light, Balanced, and Strict protection profiles.
- Automatic cosmetic filtering.
- Manual element selection and removal.
- Website-specific exceptions.
- Website compatibility and repair features.
- Privacy dashboard and local controls.
- Chrome, Microsoft Edge, and Firefox builds.

The current implementation has approximately 27,998 packaged network filtering rules. Confirm the actual current number before displaying it.

YouTube homepage advertising, pre-roll, and mid-roll blocking are not fully reliable. Do not claim comprehensive YouTube ad blocking.

The optional M08 backend remains deferred.

## Core positioning

"Less clutter. More control."

AdNinja is built to help users browse websites with fewer distractions, customizable protection, and practical privacy controls.

Its differentiating characteristics are:

1. Local-first architecture.
2. Simple protection controls.
3. Multiple filtering profiles.
4. Manual element removal.
5. Website repair and compatibility tools.
6. No mandatory accounts.
7. Free core functionality.

Avoid unsupported claims such as:
- Blocks every advertisement.
- Completely prevents tracking.
- Guarantees anonymity.
- Blocks all YouTube ads.
- Improves browsing speed by a specific percentage without measurements.
- Zero data collection unless accurately verified.

---

# 2. PROJECT SETUP AND ARCHITECTURE

Create a new standalone website repository, separate from the browser-extension source.

Suggested local path:

`C:\Users\dharmareddy.pandem\OneDrive - quantanashville.com\Desktop\extension`

If that path does not exist, create it when permissions allow.

Do not modify the extension repository unnecessarily.

## Recommended stack

Use:

- TypeScript.
- Next.js with App Router.
- React.
- Tailwind CSS.
- Reusable, accessible UI components.
- Lucide icons.
- MDX or version-controlled Markdown for documentation.
- Static generation wherever practical.

Use current compatible package versions and documented APIs.

Prefer a mostly static site.

Do not introduce:
- A database.
- User authentication.
- A paid subscription system.
- Mandatory analytics.
- A backend for the browser extension.
- Remote extension configuration.
- Unnecessary third-party tracking scripts.

Hosting should work on a static-friendly platform such as Cloudflare Pages or Vercel.

If the chosen framework requires dynamic hosting for a proposed feature, document the tradeoff and prefer a static alternative.

## Development quality

Configure:
- ESLint.
- Prettier.
- Strict TypeScript.
- Environment variable validation where needed.
- Unit/component testing.
- Production build verification.
- Broken-link checks.
- Security dependency auditing.
- Accessible semantic HTML.

Do not implement unnecessary architecture or dependencies.

---

# 3. WEBSITE DESIGN DIRECTION

Create a premium, modern product website inspired by high-quality cybersecurity and privacy software websites.

Do not copy any competitor's design, branding, imagery, or proprietary assets.

## Visual identity

Brand: AdNinja

Suggested aesthetic:

- Premium dark-first design.
- Emerald-green accents.
- Clean typography.
- Spacious layouts.
- Subtle gradients.
- Soft borders.
- Rounded cards.
- Clear visual hierarchy.
- Lightweight interactions.
- Professional illustrations and product screenshots.

Suggested colors:

Background: #0B1411

Surface: #15241D

Elevated surface: #1D3025

Primary accent: #30D88A

Primary text: #F4FAF6

Secondary text: #A8BDB0

Border: #304539

Provide an accessible light theme as well.

Ensure text and controls meet WCAG 2.2 AA contrast requirements where applicable.

Avoid excessive neon effects, glassmorphism, heavy animations, or distracting visual effects.

## Responsive breakpoints

Design mobile-first.

Support:
- Small phones.
- Standard smartphones.
- Tablets.
- Laptops.
- Desktop displays.
- Wide desktop screens.

All sections must respond gracefully without horizontal scrolling or overlapping controls.

## Interaction standards

Include:
- Responsive navigation.
- Accessible mobile menu.
- Theme toggle.
- Subtle hover states.
- Keyboard navigation.
- Focus indicators.
- Reduced-motion support.
- Skip-to-content link.
- Meaningful form validation where applicable.

Do not create decorative buttons without working destinations or behavior.

---

# 4. COMPLETE WEBSITE STRUCTURE

Implement the following routes.

## A. Homepage — /

The homepage should immediately explain what AdNinja does.

### Navigation

Logo: AdNinja

Navigation:
- Features
- How It Works
- Privacy
- FAQ
- Support

Primary CTA:
"Get AdNinja"

Include a responsive mobile navigation menu.

### Hero section

Headline:

"Browse with fewer distractions."

Supporting headline:

"Meet AdNinja — a lightweight browser extension that helps block supported ads, hide unwanted elements, and give you greater control over the websites you visit."

Primary CTA:
"Get AdNinja"

Secondary CTA:
"Explore Features"

Include attractive product imagery using authentic AdNinja screenshots and branding assets.

Do not fabricate blocked-ad counts or imply unsupported functionality.

### Browser download options

Display three browser options:

Google Chrome
Microsoft Edge
Mozilla Firefox

Each browser card should include:
- Browser icon.
- Browser name.
- Availability status.
- Official installation button when published.
- Relevant notes where needed.

Never invent store URLs.

If a store listing is not publicly available, display:
"Coming Soon" or "In Review", according to verified status.

Use a single centralized configuration file for browser store URLs and publishing status.

### Feature highlights

Create polished cards for:

1. Smart Network Filtering.
2. Multiple Protection Profiles.
3. Automatic Page Cleanup.
4. Element Picker.
5. Website Compatibility Controls.
6. Local Privacy Dashboard.

Every feature should link to an appropriate detailed explanation.

### How It Works

Three or four steps:

1. Install AdNinja.
2. Choose your protection profile.
3. Browse with supported filtering enabled.
4. Customize website behavior when needed.

Use illustrations or authentic screenshots.

### Local-first privacy section

Explain:
- Local filtering operation.
- No required account.
- Locally stored extension preferences.
- Optional features and their actual data handling.

Use precise descriptions grounded in the extension implementation.

### Product screenshots

Show real screenshots of:
- Main popup.
- Protection profiles.
- Element picker.
- Privacy dashboard.
- Website repair.

Build an accessible, responsive gallery.

Do not manipulate screenshots to show nonexistent functionality.

### Final call to action

Headline:

"Take control of your browsing experience."

Buttons:
"Get AdNinja"
"Learn More"

### Footer

Include:
- Features.
- Privacy Policy.
- Support.
- FAQ.
- Changelog.
- License information.
- Official browser store links.
- Copyright information.

Do not invent business registration details or legal entities.

---

## B. Features — /features

Create a comprehensive feature overview.

Include separate sections for:

### Network filtering
Explain declarative network rules and supported ad filtering.

### Protection profiles
Compare:
- Light.
- Balanced.
- Strict.

Explain the differences accurately using the existing implementation.

### Automatic cleanup
Show how supported advertising elements are hidden from webpages.

### Element picker
Explain how users can select and hide unwanted elements.

### Website repair
Describe temporary compatibility testing, site-scoped allowances, and rollback.

### Privacy dashboard
Describe the actual locally tracked actions and privacy controls.

Avoid presenting network-block counts when the production extension does not calculate them.

Include screenshots, FAQs, and related feature navigation.

---

## C. How It Works — /how-it-works

Create a step-by-step interactive product guide.

Sections:

1. Installation.
2. Enabling protection.
3. Selecting a profile.
4. Using the element picker.
5. Managing website exceptions.
6. Fixing broken websites.
7. Opening privacy settings.

Explain every step simply enough for nontechnical users.

Use real screenshots.

---

## D. Privacy Policy — /privacy

This is a critical compliance page.

Read the current extension privacy-policy draft and permission documentation.

Create an accurate final draft describing:

- What information the extension processes.
- Which information remains on the device.
- Local settings and saved rules.
- Site-specific filtering behavior.
- Optional report functionality.
- Whether any data is transmitted.
- Any third-party services used.
- Data retention and deletion.
- User control and consent.
- Browser permissions.
- Contact details.
- Policy update process.

Do not claim that all data remains local if optional reporting or network activity contradicts that claim.

Use an explicit placeholder for the publisher contact if it is not available.

Do not invent legal representations or compliance certifications.

Flag all unresolved policy questions clearly and block production publication of an incomplete legal page.

---

## E. Support — /support

Create a professional support center.

Include categories for:

- Installation.
- Ad blocking.
- Extension permissions.
- Website compatibility.
- Privacy and security.
- Element picker.
- Troubleshooting.
- Bug reporting.

Provide a working support contact method.

Prefer an email link or a verified issue tracker.

Do not implement a backend contact form without a real delivery mechanism.

Include links to the privacy policy, FAQs, and known limitations.

---

## F. FAQ — /faq

Include questions such as:

- Is AdNinja free?
- Which browsers are supported?
- Does AdNinja block every ad?
- Does AdNinja block YouTube ads?
- Does AdNinja collect my browsing history?
- Can I disable protection on a website?
- What do Light, Balanced, and Strict mean?
- How do I remove a page element?
- What if a website stops working?
- How do I uninstall AdNinja?
- Does AdNinja need an account?
- Does AdNinja run without a backend?

Answers must match the current release behavior.

For YouTube, explicitly acknowledge that some video ads may remain visible.

---

## G. Changelog — /changelog

Create a versioned product changelog.

Include:
- Version.
- Release date.
- Features.
- Fixes.
- Known limitations.
- Browser availability.

Derive historical entries from the existing extension changelog.

Do not fabricate release dates or claim that unpublished versions are publicly available.

Make it easy to add future versions.

---

## H. Legal / Licenses — /licenses

Provide a third-party attribution and licensing page.

Review:
- Extension license.
- Bundled EasyList/EasyPrivacy-derived rules.
- uAssets-related material.
- Other third-party dependencies.
- Artwork and icon licenses.

Do not assume GPL-3.0-only material may be redistributed under a different license without an appropriate review.

Present unresolved licensing questions explicitly before launch.

---

## I. 404 Page

Create a polished not-found experience with a return-to-home link.

---

# 5. DOWNLOAD AND STORE INTEGRATION

Use one centralized configuration file, for example:

`src/config/product.ts`

Include:
- Product name.
- Current public version.
- Chrome listing URL.
- Edge listing URL.
- Firefox listing URL.
- Release status per browser.
- Support email.
- Publisher information.
- Social links.
- Documentation links.

Store links must be verified before activation.

Never link users to arbitrary downloadable ZIP files from an untrusted source.

If AdNinja is still under review, show a truthful status and disable unavailable installation CTAs.

The public website must not require AdNinja's M08 backend.

---

# 6. SEO AND PRODUCT DISCOVERY

Implement professional technical SEO.

Requirements:

- Unique page titles.
- Meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Social sharing images.
- Sitemap.
- robots.txt.
- Favicons.
- Web app icons.
- Appropriate structured data.
- Descriptive URLs.
- Semantic headings.
- Image alt text.
- Correct internal linking.

Use relevant keywords naturally:
- Ad blocker.
- Browser privacy tools.
- Website ad filtering.
- Remove unwanted webpage elements.
- Ad blocker for Microsoft Edge.
- Ad blocker for Chrome.
- Firefox ad blocking extension.

Avoid keyword stuffing.

Do not target phrases such as "Guaranteed YouTube Ad Blocker" while that capability remains unverified.

If analytics are introduced later, they must be separately approved, privacy-respecting, disclosed, and optional where appropriate.

---

# 7. PERFORMANCE REQUIREMENTS

Target strong Lighthouse results:

- Performance: 95+.
- Accessibility: 95+.
- Best Practices: 95+.
- SEO: 95+.

These are targets, not assumed results.

Optimize:

- Image formats.
- Responsive image sizes.
- Fonts.
- JavaScript bundle size.
- Caching.
- Static page generation.
- Layout stability.
- Lazy loading.
- Critical rendering path.

Avoid unnecessary animation libraries and large UI dependencies.

Prefer system fonts or properly licensed, locally hosted fonts.

Do not fabricate performance measurements.

---

# 8. SECURITY AND PRIVACY

The website must follow secure frontend development practices.

Implement:
- Appropriate Content Security Policy.
- Safe outbound links.
- No exposed secrets.
- No hardcoded API credentials.
- Dependable dependency auditing.
- Secure external asset loading.
- Sensible security headers where hosting supports them.
- No unnecessary third-party scripts.

No user account or tracking system is required for V1.

Do not introduce a backend simply to handle static content.

---

# 9. ACCESSIBILITY

Target WCAG 2.2 AA where applicable.

Verify:
- Keyboard-only navigation.
- Screen reader labels.
- Accessible forms.
- Logical headings.
- Sufficient contrast.
- Visible focus.
- Dialog and menu accessibility.
- Reduced motion.
- Responsive zoom.
- Descriptive link text.

Do not use icons as the sole indication of state.

---

# 10. CONTENT QUALITY

Copy must sound like a trustworthy software product.

Tone:
- Clear.
- Modern.
- Professional.
- Accessible.
- Confident but not exaggerated.

Avoid:
- Generic startup buzzwords.
- Unsupported privacy claims.
- Artificial testimonials.
- Fake download counts.
- Fake ratings.
- Fake customer logos.
- Fake endorsements.
- Fake awards.
- Unverified security guarantees.

Every claim must be supported by the existing implementation.

---

# 11. ASSETS AND SCREENSHOTS

Reuse authentic assets from the existing extension repository wherever appropriate.

Use:
- Actual AdNinja icon.
- Existing screenshots.
- Verified browser icons or properly licensed assets.
- Simple original SVG illustrations.
- Consistent visual identity.

Do not copy third-party ad-blocker graphics.

If actual product screenshots are unsuitable for a particular layout, create clearly illustrative product mockups without presenting them as screenshots of real functionality.

Maintain an attribution record for third-party media.

---

# 12. TESTING STRATEGY

Implement automated tests for:

1. Navigation.
2. Download-button behavior.
3. Browser availability states.
4. Theme persistence.
5. Responsive component states.
6. FAQ functionality.
7. Internal routes.
8. Metadata generation.
9. Privacy-policy availability.
10. Support links.
11. Changelog rendering.
12. Missing configuration handling.
13. Accessibility checks where supported.

Run:
- Formatting.
- Lint.
- Strict TypeScript.
- Unit/component tests.
- Production build.
- Broken-link checks.
- Dependency audit.

Do not use Playwright or Playwright MCP.

Provide manual browser verification instructions for desktop and mobile.

Do not claim manual testing was completed without evidence.

---

# 13. DEPLOYMENT

Prepare production deployment for a static-friendly hosting provider.

Recommended first choice: Cloudflare Pages, provided the chosen Next.js output is compatible with the currently supported deployment method.

Otherwise propose Vercel or an equivalent documented alternative.

Do not assume every Next.js feature is available in static export mode.

The application should support:
- Free hosting where feasible.
- HTTPS.
- Custom domains.
- Build previews.
- Production releases.
- Rollback procedures.
- Environment-specific configuration.

Create:
- README deployment instructions.
- Hosting setup guide.
- Environment variable example.
- Release checklist.
- Basic maintenance instructions.

Do not purchase a domain or register external services automatically.

Do not connect the website to M08.

---

# 14. DOCUMENTATION

Create professional documentation:

`README.md`

`docs/ARCHITECTURE.md`

`docs/DESIGN-SYSTEM.md`

`docs/CONTENT-GUIDELINES.md`

`docs/SEO.md`

`docs/ACCESSIBILITY.md`

`docs/PRIVACY-REVIEW.md`

`docs/DEPLOYMENT.md`

`docs/RELEASE-CHECKLIST.md`

`docs/MAINTENANCE.md`

Include a clearly maintained list of unresolved publisher and legal details.

---

# 15. IMPLEMENTATION WORKFLOW

Work in the following order:

**Stage 1 — Discovery**
- Review the actual extension.
- Collect verified product claims.
- Identify usable assets.
- Identify legal and privacy gaps.

**Stage 2 — Design**
- Establish design tokens.
- Define page layouts and reusable components.
- Design desktop and mobile navigation.
- Prepare component hierarchy.

**Stage 3 — Implementation**
- Create project structure.
- Build reusable components.
- Implement all required pages.
- Add responsive and accessible interactions.
- Configure centralized product information.

**Stage 4 — Quality Assurance**
- Run automated checks.
- Fix build errors.
- Validate accessibility.
- Audit external links.
- Review security.
- Verify responsive layouts as far as tooling permits.

**Stage 5 — Deployment Preparation**
- Prepare production build.
- Document Cloudflare Pages or Vercel deployment.
- Validate configuration requirements.
- Produce launch instructions.

Proceed through these stages without repeatedly asking for approval for ordinary implementation decisions.

If essential legal, branding, publisher, or deployment information is unavailable, use explicit placeholders and flag the relevant launch blocker rather than inventing details.

---

# 16. FINAL DELIVERABLES

Provide:

1. Complete functional website source code.
2. Production build result.
3. Responsive homepage.
4. Features and How It Works pages.
5. Privacy Policy page.
6. Support page.
7. FAQ page.
8. Changelog.
9. Licenses and attribution page.
10. Working navigation and theme toggle.
11. Browser-download status integration.
12. SEO configuration.
13. Test results.
14. Accessibility assessment.
15. Security audit findings.
16. Deployment documentation.
17. Complete created/modified file list.
18. Outstanding issues and placeholders.
19. Exact local development commands.
20. Exact production deployment steps.

## Final stop condition

Complete the website implementation and local production verification.

Do not deploy it publicly, purchase a domain, connect external services, submit extension-store updates, or introduce monetization without my explicit approval.

Stop after producing the implementation report and wait for my review.

## Definition of success

The AdNinja website should look and function like a professional browser-extension product website, demonstrate real features, clearly communicate privacy and limitations, and provide an excellent foundation for product discovery, documentation, support and future growth.

It must remain lightweight, maintainable, accessible, search-engine friendly, and independent of the extension's filtering backend.
