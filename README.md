# SkillShelf starter website

A responsive, static tech-resource website starter built with HTML, CSS and JavaScript. It includes a resource search, category filters, sample free downloads, demo paid product cards and a policy starter page.

## Files

- `index.html` — homepage and sections
- `styles.css` — responsive design
- `script.js` — resource data, search/filter behavior and store link placeholders
- `policies.html` — policy starter text to review before launch
- `assets/downloads/` — sample downloadable text resources
- `assets/favicon.svg` — favicon

## Run locally

Open `index.html` in a browser. For a more reliable local preview, use the VS Code Live Server extension or run a local static server.

## Before publishing

1. Replace the working brand name and tagline if desired.
2. Review all sample resources and make them your own.
3. Create actual products in a digital storefront such as Payhip.
4. In `script.js`, replace `storeLinks` values with the exact HTTPS checkout/product URLs from your storefront.
5. Connect a real email marketing service before collecting newsletter signups.
6. Review and adapt the policy page; add a monitored contact address.
7. Test every download, search/filter control, store link and mobile layout.

## Deploy using GitHub + Cloudflare Pages

1. Create a GitHub account and a new **public** repository (for example, `skillshelf-site`).
2. Upload the contents of this folder to the repository root. `index.html` should be at the root, not nested in another folder.
3. Create/sign in to a Cloudflare account and open **Workers & Pages**.
4. Choose **Create application** → **Pages** → **Connect to Git** (wording may vary).
5. Connect GitHub and select your repository.
6. For a plain static site, use no build command and set the output directory to `/` or the repository root as the dashboard requests. If the dashboard requires an output folder, create and use a folder containing the site files.
7. Deploy and open the generated `*.pages.dev` URL.
8. After future commits to the connected branch, Cloudflare Pages can rebuild/redeploy the site automatically.

## Important limits

- This starter has no database, user accounts, admin dashboard or private file storage.
- The newsletter form is a demo and does not save addresses.
- Paid product cards do not process payments. They open external checkout links only after you configure them.
- Files in `assets/downloads/` are publicly accessible. Never put confidential or paid-only files there.
- Static hosting is suitable for the initial resource hub; server-side features require a backend or managed service.
