# AropixelPageBundle

**A page management module for Symfony**, built as a companion to
[AropixelAdminBundle](/ecosystem/admin-bundle) — a lightweight alternative to a traditional CMS.

[GitHub — aropixel/page-bundle](https://github.com/aropixel/page-bundle)

<img src="/gifs/page-builder.gif" alt="AropixelPageBundle: dragging a block into place in the visual page builder" class="aro-shadow-img" />

## Three page types, one bundle

| Type | Storage | Use case |
|---|---|---|
| `TYPE_DEFAULT` | `htmlContent` | Simple pages edited via CKEditor |
| `TYPE_CUSTOM` | `jsonContent` + pre-rendered `htmlContent` | Visual page builder |
| Custom JSON | `jsonContent` | Structured forms with named fields (e.g. a contact page with phone/address) |

For the visual builder, the page builder JSON payload is rendered to HTML **at save time** — so
front-end display is a plain <code v-pre>{{ page.htmlContent|raw }}</code>, with zero rendering overhead per request.

## Key features

- **Visual page builder** — block-based drag-and-drop editor: sections, rows, columns, text, images,
  buttons, titles and more
- **Custom block types** — extend the builder with your own blocks via a simple JS + YAML registration
- **Fixed / protected pages** — declare non-deletable system pages (homepage, contact…) with a static
  code for reliable lookups
- **Multilingual** — full i18n via Gedmo Translatable, with per-locale slugs, content and pre-rendered
  HTML
- **SEO fields** — meta title, meta description and slug, per locale
- **Publication scheduling** — online/offline status with an optional date range
- **`PageSavedEvent`** — dispatched after every save, to invalidate Varnish, a CDN, Redis, or any cache
  layer

## Requirements

- PHP 8.2+
- Symfony 6.4 or 7.x
- `aropixel/admin-bundle` installed and configured

## Install

```bash
composer require aropixel/page-bundle
```

```yaml
# config/routes.yaml
aropixel_page:
    resource: "@AropixelPageBundle/src/Resources/config/routes.yaml"
    prefix: /admin/page
```

```bash
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

## Documentation

- [Installation](https://github.com/aropixel/page-bundle/blob/main/doc/installation.md) — entity
  extension, Doctrine mapping, bundle configuration
- [Usage and page types](https://github.com/aropixel/page-bundle/blob/main/doc/usage.md) — page
  builder config, fixed pages, front-end rendering, events
- [Custom block types](https://github.com/aropixel/page-bundle/blob/main/doc/custom-blocks.md)
- [Entity customization](https://github.com/aropixel/page-bundle/blob/main/doc/entities.md)
