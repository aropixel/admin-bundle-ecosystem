# AropixelAdminBundle

**A developer-friendly, streamlined administration framework for Symfony.** It gives you the tools
and a solid foundation to build an admin interface quickly — without getting in the way of your own
code, and without becoming a black box.

[GitHub — aropixel/admin-bundle](https://github.com/aropixel/admin-bundle)

<img src="/screenshots/admin-crud-demo.gif" alt="AropixelAdminBundle: walking through a generated CRUD" class="aro-shadow-img" />

## Why it's different

Most admin generators hide your entities behind a configuration DSL. AropixelAdminBundle starts from
**your own `FormType`** — the `make:crud` generator reads it and builds a full CRUD around it, so you
keep full control over validation, data transformers and business logic.

## In practice: several widgets in a few lines

A concrete example rather than a feature list: a relation field (category), a boolean (toggle)
and an image with upload, a shared media library and cropping — all in a single `FormType`.

The FormType:

```php
use Aropixel\AdminBundle\Form\Type\Image\Single\ImageType;
use Aropixel\AdminBundle\Form\Type\ToggleSwitchType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

$builder
    ->add('title', TextType::class, [
        'label' => 'Title',
    ])
    ->add('category', EntityType::class, [
        'label' => 'Category',
        'class' => Category::class,
        'choice_label' => 'name',
        'required' => false,
    ])
    ->add('published', ToggleSwitchType::class, [
        'label' => 'Published',
        'required' => false,
    ])
    ->add('cover', ImageType::class, [
        'label' => 'Cover image',
        'property_path' => 'coverFilename',
        'data_value' => 'coverFilename',
        'crops_value' => 'coverCrops',
        'crops' => [
            'article_cover' => 'Cover (16/9)',
        ],
        'required' => false,
    ])
;
```

The template:

```twig
{{ form_row(form.title) }}
{{ form_row(form.category) }}
{{ form_row(form.published) }}
{{ form_row(form.cover) }}
```

The result in the admin:

<img src="/screenshots/form-image-widget.png" alt="The rendered form: Title, Category (select), Published (toggle) and Cover image" class="aro-shadow-img" />

That's it — no extra configuration, no JavaScript to write. The same principle applies to image
galleries, files and collections.

[See all available widgets →](https://github.com/aropixel/admin-bundle/blob/main/doc/forms.md)

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

- [PageBundle](/en/ecosystem/page-bundle) — pages & visual page builder
- [BlogBundle](/en/ecosystem/blog-bundle) — posts & categories
- [MenuBundle](/en/ecosystem/menu-bundle) — navigation menus

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
