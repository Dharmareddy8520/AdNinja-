# Manual search indexing setup

The supplied Google HTML verification token is configured in the root Next.js metadata. Ownership verification, sitemap submission, and indexing requests have not been completed from this repository. Use the final production HTTPS host only after the SEO checklist passes.

## Google Search Console

1. Sign in at [Google Search Console](https://search.google.com/search-console/).
2. Select the exact canonical HTTPS **URL-prefix property** that supplied the HTML tag. An HTML tag cannot verify a Domain property, which requires DNS verification. Follow the [property and ownership guide](https://support.google.com/webmasters/answer/34592). Do not change DNS from this project without authorization.
3. Deploy the build containing the supplied tag. Open the live homepage's page source and confirm `google-site-verification` appears inside `<head>` with the supplied token. Then return to Search Console and click **Verify**. Keep the tag on the live site so ownership checks continue to pass. [Google's HTML-tag instructions](https://support.google.com/webmasters/answer/9008080)
4. Confirm the live `https://<your-confirmed-host>/robots.txt` allows crawling and `/sitemap.xml` lists only the five approved indexable routes.
5. In **Sitemaps**, submit `sitemap.xml` for the verified property and inspect any parse or fetch errors. [Google's Sitemaps report](https://support.google.com/webmasters/answer/7451001) shows submission status; a sitemap is a discovery hint, not an indexing guarantee.
6. Use [URL Inspection](https://support.google.com/webmasters/answer/9012289/) on the homepage, features, how-it-works, FAQ, and support pages. Test the live URL, inspect chosen canonical and indexability, then request indexing for important pages when appropriate.
7. Review Page indexing, Core Web Vitals, and Search results performance after crawl data appears. Track impressions, clicks, queries, indexing exclusions, and crawl errors over time. Fix real issues before requesting recrawl again.

## Bing Webmaster Tools

1. Sign in at [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Add the canonical site and verify ownership, or import a verified Google Search Console property with the account owner's approval. Follow [Bing's add-and-verify guide](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b).
3. Use **Sitemaps → Submit sitemaps** to submit the live canonical `/sitemap.xml`. Review processing and discovered URL counts in [Bing's Sitemaps tool](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed).
4. Use [Bing URL Inspection](https://www.bing.com/webmasters/help/URL-Inspection-55a30305) for the homepage and key pages. Check live fetch, index status, SEO issues, and JSON-LD/Open Graph markup; request indexing where the tool offers it.
5. Review Index Coverage, search performance, URL errors, and the sitemap over time. Record the submission date and any corrections in the release notes.

Neither service guarantees indexing or a specific ranking. The supplied Google ownership tag is included in built pages; no analytics or tracking code is installed.
