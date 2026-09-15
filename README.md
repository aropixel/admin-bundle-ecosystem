# Aropixel Admin — site

Bilingual (EN/FR) [VitePress](https://vitepress.dev) landing site for the Aropixel Admin open-source
ecosystem (`admin-bundle`, `page-bundle`, `blog-bundle`, `menu-bundle`, `castor-starter`).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Static output is generated in `.vitepress/dist`.

## Deploy

Pushes to `main` are built and deployed automatically to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Live at **https://aropixel.github.io/admin-bundle-ecosystem/**.

> The `base` path in `.vitepress/config.mts` is set to `/admin-bundle-ecosystem/` to match this
> project's GitHub Pages URL. Update it if the site ever moves to a custom domain (and switch it back
> to `/`).

## Content

- `index.md` / `fr/index.md` — home page
- `get-started.md` / `fr/get-started.md` — installation guide
- `ecosystem/*.md` / `fr/ecosystem/*.md` — one page per bundle
- Brand tokens (`--aro-*` colours, Poppins font) live in `.vitepress/theme/custom.css`, mirrored from
  the real design tokens shipped by `aropixel/admin-bundle`.
