---
layout: home

hero:
  name: "Aropixel Admin"
  text: "The open-source Symfony admin ecosystem"
  tagline: A developer-friendly back-office toolbox — CRUD generator, pages, blog and menus — built on your own FormTypes, not a black box.
  image:
    src: /aropixel-mark.svg
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
---

<div class="aro-section aro-section-wide">

## See it in action

<div class="aro-shot-grid">
  <figure>
    <img src="/screenshots/admin-crud.png" alt="AropixelAdminBundle: a generated CRUD list with sorting, filtering and pagination" class="aro-shadow-img" />
    <figcaption>AdminBundle — a full CRUD, generated from your own FormType</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/page-builder.png" alt="AropixelPageBundle: dragging a block into place in the visual page builder" class="aro-shadow-img" />
    <figcaption>PageBundle — the visual, drag-and-drop page builder</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/blog.png" alt="AropixelBlogBundle: editing a blog post with SEO and scheduling fields" class="aro-shadow-img" />
    <figcaption>BlogBundle — posts, categories and scheduling</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/menu.png" alt="AropixelMenuBundle: reordering navigation links by drag-and-drop" class="aro-shadow-img" />
    <figcaption>MenuBundle — drag-and-drop navigation menus</figcaption>
  </figure>
</div>

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
