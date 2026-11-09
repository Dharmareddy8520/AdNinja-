# Manual search indexing setup

No domain ownership, verification, sitemap submission, or indexing request has been completed from this repository. Use the final production HTTPS host only after the SEO checklist passes.

## Google Search Console

1. Sign in at [Google Search Console](https://search.google.com/search-console/).
2. Add a **Domain property** for the owned domain if DNS verification is available; it covers subdomains and protocols. Otherwise add the exact canonical HTTPS **URL-prefix property**. Follow the [property and ownership guide](https://support.google.com/webmasters/answer/34592). Do not change DNS from this project without authorization.
3. Complete the ownership method shown by Google. Do not add an invented verification tag or file.
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

Neither service guarantees indexing or a specific ranking. No analytics or verification code is installed by default.
