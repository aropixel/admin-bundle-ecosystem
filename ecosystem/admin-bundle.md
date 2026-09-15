# AropixelAdminBundle

**A developer-friendly, streamlined administration framework for Symfony.** It gives you the tools
and a solid foundation to build an admin interface quickly — without getting in the way of your own
code, and without becoming a black box.

[GitHub — aropixel/admin-bundle](https://github.com/aropixel/admin-bundle)

<img src="/screenshots/admin-crud.png" alt="AropixelAdminBundle: a generated CRUD list with sorting, filtering and pagination" class="aro-shadow-img" />

## Why it's different

Most admin generators hide your entities behind a configuration DSL. AropixelAdminBundle starts from
**your own `FormType`** — the `make:crud` generator reads it and builds a full CRUD around it, so you
keep full control over validation, data transformers and business logic.

## Key features

- **`make:crud` generator** — full create/read/update/delete scaffolding from an existing `FormType`
- **DataTable component** — sortable, filterable, paginated listings out of the box
- **Select2 integration** — searchable, ajax-ready select widgets
- **Image & gallery widgets** — uploads, crops and galleries wired into the admin forms
- **User & role management** — admin user CRUD with role-based access control
- **Token-based design system** — every colour, spacing and radius is an `--aro-*` CSS custom
  property on top of Bootstrap 5, so re-theming is a handful of variables, not a CSS override war
- **Multilingual interface** — French, English, German, Spanish, Italian, Czech

## Companion bundles

AropixelAdminBundle is the foundation the rest of the ecosystem builds on:

- [PageBundle](/ecosystem/page-bundle) — pages & visual page builder
- [BlogBundle](/ecosystem/blog-bundle) — posts & categories
- [MenuBundle](/ecosystem/menu-bundle) — navigation menus

## Requirements

- PHP 8.2+
- Symfony 6.4 or 7.x

## Install

```bash
composer require aropixel/admin-bundle
php bin/console aropixel:admin:create-user
```

## Documentation

- [Installation](https://github.com/aropixel/admin-bundle/blob/main/doc/installation.md)
- [Create Admin User](https://github.com/aropixel/admin-bundle/blob/main/doc/create_user.md)
- [Internationalisation](https://github.com/aropixel/admin-bundle/blob/main/doc/i18n.md)
- [CRUD Generator (`make:crud`)](https://github.com/aropixel/admin-bundle/blob/main/doc/make_crud.md)
- [DataTable Component](https://github.com/aropixel/admin-bundle/blob/main/doc/datatable.md)
- [Select2 Component](https://github.com/aropixel/admin-bundle/blob/main/doc/select2.md)
- [Custom Form Types](https://github.com/aropixel/admin-bundle/blob/main/doc/forms.md)
- [CSS Customization](https://github.com/aropixel/admin-bundle/blob/main/doc/css_customization.md)
- [Entity Customization](https://github.com/aropixel/admin-bundle/blob/main/doc/entities.md)
- [Admin Menu Customization](https://github.com/aropixel/admin-bundle/blob/main/doc/admin_menu.md)
