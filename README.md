# Minimal Agent Infrastructure Ph.D. Homepage

A complete, no-build, responsive academic homepage designed for GitHub Pages. Inspired by the broad structure of classic academic homepages, including https://zhhangbian.github.io/; this is an original implementation, not copied site code.

## Quick start

1. Create a **public** GitHub repository named `YOUR_GITHUB_USERNAME.github.io` (replace with your real username).
2. Upload **all files and folders in this package's root** to the repository root (`index.html`, `cv.html`, `.nojekyll`, `assets/`, `README.md`). Do not upload the enclosing `agent-infra-homepage` directory as a single subdirectory.
3. In **Settings → Pages**, under **Build and deployment**, choose **Deploy from a branch**; select `main` and `/ (root)`; click **Save**.
4. Visit `https://YOUR_GITHUB_USERNAME.github.io/` after the deployment finishes. Changes to the `main` branch trigger new deployments.

Alternatively, clone the repository and copy the package's contents into the cloned directory before committing and pushing.

## What to edit

All example content is intentionally fictional. Edit the following:

- `index.html`: your name, advisor, institution, city, email, biography, news, papers, projects, jobs, education, service, and all `example.com` / `example.edu` links.
- `cv.html`: sample printable CV; replace it with your CV, or upload a `cv.pdf` file and change CV links in `index.html` to `cv.pdf`.
- `assets/avatar.svg`: replace with a photo, e.g. `assets/profile.jpg`, then update the `src` in `index.html`.
- `assets/favicon.svg`: change initials `YN` and colors.
- `assets/style.css`: tweak spacing, font sizes, or the `--blue` link color.
- `assets/main.js`: automatic footer year and sidebar section highlighting; no dependencies.

**Important:** all papers, projects, positions, dates, and URLs are sample placeholders, not real research claims. Check and replace every item before public launch.

## Preview locally

Open `index.html` in a browser, or run from the package root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Design and accessibility

- Two-column desktop layout with sticky profile sidebar; stacked mobile layout.
- Research-first content: About, News, Interests, Publications, Systems & Open Source, Experience, Education, Service.
- Semantic landmarks and heading hierarchy, keyboard focus styles, skip link, reduced-motion support.
- Plain HTML, CSS, and optional JS; no build tools, frameworks, tracking, fonts, external assets, or package installation.

## Deployment troubleshooting

- If you receive a 404, check that the repository name matches your username and that `index.html` is at the repository root.
- Check **Settings → Pages** for the source branch and deployment status, and the **Actions** tab if a deployment fails.
- URLs are case-sensitive: `assets/style.css` must match the exact file path.
