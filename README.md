# PlyoDice

Randomized plyometrics backed by sports data. Pick a level, focus, and the
equipment you have, then roll a session: a primer plus two or three main
efforts, dosed by total ground contacts. Built on the stretch-shortening cycle
(fast vs slow SSC) and the shock-method literature.

Three tabs:
- **Build a session** — set level / focus / equipment, roll, swap, watch demos.
- **Exercises** — the full movement library, grouped by category, each with a demo link.
- **The science** — SSC, the shock method, the evidence, and sources.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy to GitHub Pages (automated)

A workflow is included at `.github/workflows/deploy.yml`. To use it:

1. Push to a GitHub repo with the default branch named `main`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and
   choose **GitHub Actions**.
3. Every push to `main` builds and publishes the site. The URL appears in the
   Actions run and under Settings → Pages.

`vite.config.js` sets `base: "./"` so relative asset paths work on a project
page (`https://<user>.github.io/<repo>/`).

## Structure

- `src/PlyoDice.jsx` — the entire app, self-contained. The logo and roll-die
  images are embedded as base64 data URIs, so there are no external image
  assets. Fonts load from Google Fonts.
- `src/main.jsx` — mounts the component.
- `index.html` — page shell, viewport, font preconnects.
- `.github/workflows/deploy.yml` — build + deploy to GitHub Pages.

## Notes

- Exercise demo links point to specific YouTube videos, kept in the `DEMOS` map
  at the top of `src/PlyoDice.jsx`. If one goes private, edit it there.
- The embedded logo wordmark still reads "sport-specific"; regenerate it to
  match the current "randomized / backed by sports data" positioning.
- Educational tool, not medical or training advice.
