# fibodo website

Static HTML site. Serve the repo root with any static server (the shared navigation and footer are loaded with `fetch`, so `file://` will not work):

```
python3 -m http.server 8000
```

## One design system

- `fibodo-brand.css` is the single stylesheet for the brand. Link it **last** on every page.
- Accent colour is the only per-product variation. Set `data-product` on `<body>`:
  `core` (orange), `galaxy` (green), `pulsar` (purple), `enterprise` (blue). No attribute = corporate (ink).
- `navigation.html`, `footer.html` and `navigation.js` provide the shared header and footer. Mount with
  `<div data-root="../" id="core-navigation"></div>` (set `data-root` to the relative path to the repo root),
  a `<footer data-site-footer></footer>` and `<script src="../navigation.js"></script>`.

## Site map

| Section | Pages |
| --- | --- |
| Home | `/` |
| Products | `products.html`, `products/{core,galaxy,pulsar,enterprise}.html` |
| Pricing | `pricing.html`, `products/{core,galaxy,pulsar,enterprise}-pricing.html` |
| Features (CORE) | `features/index.html` and `features/*.html` |
| Sectors | `sectors.html`, `sectors/*.html` (CORE vertical pages) |
| Customers | `customers.html`, `case-study-*.html` |
| Resources | `blog.html` + posts, `support.html`, `faq.html`, `trust*.html`, `why-fibodo.html` |
| Company | `about-us.html`, `team.html`, `jobs.html`, `partners*.html`, `contact-us.html` |
| Other | `fibodo-free.html`, `apps.html`, legal pages |

Campaign and app pages (`offer/`, `landing_pages/`, `prizedraw/`, `login`, `register`, `switch`, `active-net`, `operators`, `suppliers`) are kept but excluded from `sitemap.xml` and `robots.txt`.

Retired URLs are redirected in `_redirects` (301). Regenerate `sitemap.xml` when pages are added or removed.
