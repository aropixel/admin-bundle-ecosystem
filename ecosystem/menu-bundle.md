# AropixelMenuBundle

**A navigation management system** complementary to [AropixelAdminBundle](/ecosystem/admin-bundle) —
build the website's menus (main navigation, footer…) with drag-and-drop, no redeploy required.

[GitHub — aropixel/menu-bundle](https://github.com/aropixel/menu-bundle)

## Key features

- **Multi-level navigation** — nested menu structures for headers, footers and other locations
- **Drag-and-drop editing** — reorder links visually, from the admin
- **Centralized management** — every menu location edited from one place
- **Multilingual** — French, English, German, Spanish, Italian, Czech

## Requirements

- A Symfony project with `aropixel/admin-bundle` installed

## Install

```bash
composer require aropixel/menu-bundle
```

```yaml
# config/routes.yaml
aropixel_menu:
    resource: '@AropixelMenuBundle/Resources/config/routing.xml'
```

Then apply the migrations for the bundle's entities.

## License

MIT, like every repository in the ecosystem.
