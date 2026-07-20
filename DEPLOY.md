Deploying Onsen (GitHub Pages)

This repository includes a GitHub Actions workflow that packages the repo and deploys it to GitHub Pages.

Workflow path: .github/workflows/pages.yml

How to deploy

- Push to the "main" branch or to the branch "onsen0ksa-cloud-onsen-static-site" — the workflow triggers on those pushes.
- Or run the workflow manually: GitHub -> Actions -> Deploy to GitHub Pages -> Run workflow (workflow_dispatch).
- Wait for Actions to complete. After the first successful run, the Pages site URL appears in the repository Settings -> Pages.

Prepare assets before deploying

- Add your logo at: logo-placeholder.png (replace in repo root).
- Add ambient track at: assets/ambient.mp3
- Replace Unsplash gallery images in index.html with your own photos.

Custom domain

- To use a custom domain, create a CNAME file in the repository root with your domain name, or set it in Settings -> Pages.

Notes

- The workflow currently uploads the repository root (path: '.') as the artifact. If you'd rather publish only a "public/" folder, update the "path" in the workflow to point to that folder.
- The workflow includes a manual trigger so you can run it even if you don't push to main.
