---
layout: home

hero:
  name: "Aropixel Admin"
  text: "The open-source Symfony admin ecosystem"
  tagline: A developer-friendly back-office toolbox — CRUD generator, pages, blog and menus — built on your own FormTypes, not a black box.
  image:
    src: /logo-aro.png
    alt: Aropixel
  actions:
    - theme: brand
      text: Get Started
      link: /get-started
    - theme: alt
      text: Browse the ecosystem
      link: /ecosystem/admin-bundle
    - theme: alt
      text: GitHub
      link: https://github.com/aropixel

features:
  - icon: 🛠️
    title: AdminBundle
    details: The core — make:crud generates a full CRUD from your own FormType, plus DataTable, Select2 and image/gallery widgets.
    link: /ecosystem/admin-bundle
    linkText: Discover AdminBundle
  - icon: 📄
    title: PageBundle
    details: A visual, block-based page builder with pre-rendered HTML, fixed pages, and full SEO fields — a lightweight CMS alternative.
    link: /ecosystem/page-bundle
    linkText: Discover PageBundle
  - icon: ✍️
    title: BlogBundle
    details: Posts and categories with scheduling, SEO fields and image crops — the editorial layer for your Symfony site.
    link: /ecosystem/blog-bundle
    linkText: Discover BlogBundle
  - icon: 🧭
    title: MenuBundle
    details: Drag-and-drop navigation menus across multiple locations — header, footer, and beyond.
    link: /ecosystem/menu-bundle
    linkText: Discover MenuBundle
  - icon: 🦫
    title: Castor Starter
    details: A Castor task runner that scaffolds a full Docker-ready admin project, or a contribution sandbox, in one command.
    link: /ecosystem/castor-starter
    linkText: Discover Castor Starter
  - icon: 🎨
    title: A real design system
    details: Every colour, radius and spacing is an --aro-* CSS token on top of Bootstrap 5. Browse it live, rendered on the real bundle CSS.
    link: https://aropixel.github.io/admin-bundle/
    linkText: Open the component catalogue
---

<div class="aro-section">

## See it before you install it

The core value of the ecosystem is the **Symfony toolbox**: the `make:crud` generator that builds a CRUD
from *your own* `FormType`, reusable form-type layouts, the `DataTable` component, and image/gallery widgets.
The admin UI is the part you *don't* have to build — a token-based design system on Bootstrap 5, so you
re-theme it from a handful of custom properties.

[**▶ Open the live component catalogue**](https://aropixel.github.io/admin-bundle/)

<a href="https://aropixel.github.io/admin-bundle/">
  <img src="/catalog-preview.png" alt="AropixelAdminBundle component catalogue — buttons, badges, colours and typography rendered on the real bundle CSS" class="aro-shadow-img" />
</a>

</div>

<div class="aro-section">

## Install the core bundle in under a minute

```bash
composer require aropixel/admin-bundle
php bin/console aropixel:admin:create-user
```

Then add whichever companion bundles your project needs:

```bash
composer require aropixel/page-bundle   # visual page builder
composer require aropixel/blog-bundle   # posts & categories
composer require aropixel/menu-bundle   # navigation menus
```

Prefer scaffolding a brand-new project with Docker, Clever Cloud config and every bundle pre-wired?
[**Use Castor Starter →**](/get-started)

</div>

<div class="aro-section">

## Built for Symfony, all the way

- **PHP 8.2+ / Symfony 6.4 & 7.x** across the whole ecosystem
- **MIT licensed** — every repository, no exceptions
- **i18n out of the box** — French, English, German, Spanish, Italian and Czech
- **Modular by design** — install only the bundles you need, extend entities and forms freely
- **Actively maintained** by [Aropixel](https://www.aropixel.com), a French Symfony agency

</div>
