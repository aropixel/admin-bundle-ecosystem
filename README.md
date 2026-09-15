# Aropixel Admin — site

Bilingual (EN/FR) [VitePress](https://vitepress.dev) landing site for the Aropixel Admin open-source
ecosystem (`admin-bundle`, `page-bundle`, `blog-bundle`, `menu-bundle`, `castor-starter`), in the
spirit of [castor.jolicode.com](https://castor.jolicode.com/).

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

Static output is generated in `.vitepress/dist` — deployable to GitHub Pages, Netlify, Clever Cloud
static hosting, etc.

## Content

- `index.md` / `fr/index.md` — home page
- `get-started.md` / `fr/get-started.md` — installation guide
- `ecosystem/*.md` / `fr/ecosystem/*.md` — one page per bundle
- Brand tokens (`--aro-*` colours, Poppins font) live in `.vitepress/theme/custom.css`, mirrored from
  the real design tokens shipped by `aropixel/admin-bundle`.
