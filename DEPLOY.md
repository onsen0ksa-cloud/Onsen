Deploying Onsen (GitHub Pages)

This repository includes a GitHub Actions workflow that packages the repo and deploys it to GitHub Pages.

Workflow path: .github/workflows/pages.yml

How to deploy

- Push to the "main" branch or to the branch "onsen0ksa-cloud-onsen-static-site" — the workflow triggers on those pushes.
- Or run the workflow manually: GitHub -> Actions -> Deploy to GitHub Pages -> Run workflow (workflow_dispatch).
- Wait for Actions to complete. After the first successful run, the Pages site URL appears in the repository Settings -> Pages.

Google reviews

The homepage loads current reviews with the Google Maps JavaScript API Places library. To enable them:

1. In Google Cloud, enable the Maps JavaScript API and Places API (New), attach a billing account, and create a browser API key.
2. Restrict the key to the website referrer `https://onsen0ksa-cloud.github.io/*` and only the APIs this site uses. Set appropriate quotas and billing alerts.
3. Find the business Place ID with Google's [Place ID finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder).
4. In the repository, open Settings -> Secrets and variables -> Actions -> Variables and add `GOOGLE_MAPS_API_KEY` and `GOOGLE_PLACE_ID`.
5. Run the Deploy to GitHub Pages workflow, or push a change to a deployment branch.

The browser key is included in the published HTML by design, so it must be restricted in Google Cloud; do not commit an unrestricted key to the repository. Without both variables, the page displays a setup status instead of silently leaving an empty reviews area. Before enabling Places content, publish Terms of Use and a Privacy Policy that meet Google's Places API policy requirements.

Prepare assets before deploying

- Add your logo at: logo-placeholder.png (replace in repo root).
- The homepage rainfall recording is stored at: assets/onsen-rainfall.mp3. It is "Rain Fall Through Trees" by acollier123, dedicated to the public domain under CC0 1.0 (https://freesound.org/people/acollier123/sounds/242956).
- Replace Unsplash gallery images in index.html with your own photos.

Custom domain

- To use a custom domain, create a CNAME file in the repository root with your domain name, or set it in Settings -> Pages.

Notes

- The workflow assembles a clean site artifact before deployment and also supports a manual trigger.
