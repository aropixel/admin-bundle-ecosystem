# AropixelAdminBundle

**Un framework d'administration Symfony pensé pour les développeurs.** Il fournit les outils et une
base solide pour construire une interface d'admin rapidement — sans gêner votre propre code, et sans
devenir une boîte noire.

[GitHub — aropixel/admin-bundle](https://github.com/aropixel/admin-bundle)

<img src="/gifs/admin-crud.gif" alt="AropixelAdminBundle : une liste CRUD générée, avec tri, filtre et pagination" class="aro-shadow-img" />

## Ce qui le différencie

La plupart des générateurs d'admin cachent vos entités derrière un DSL de configuration.
AropixelAdminBundle part de **votre propre `FormType`** — le générateur `make:crud` le lit et
construit un CRUD complet autour, vous gardez donc le contrôle total sur la validation, les
transformers et la logique métier.

## Fonctionnalités clés

- **Générateur `make:crud`** — scaffolding complet create/read/update/delete à partir d'un `FormType`
  existant
- **Composant DataTable** — listes triables, filtrables et paginées, prêtes à l'emploi
- **Intégration Select2** — widgets de sélection avec recherche, compatibles ajax
- **Widgets image & galerie** — uploads, recadrage et galeries branchés dans les formulaires d'admin
- **Gestion des utilisateurs & rôles** — CRUD utilisateurs admin avec contrôle d'accès par rôle
- **Design system à base de tokens** — chaque couleur, espacement et rayon est une custom property CSS
  `--aro-*` au-dessus de Bootstrap 5, donc re-thémer se résume à une poignée de variables, pas une
  guerre de surcharges CSS
- **Interface multilingue** — français, anglais, allemand, espagnol, italien, tchèque

## Bundles complémentaires

AropixelAdminBundle est le socle sur lequel repose le reste de l'écosystème :

- [PageBundle](/fr/ecosystem/page-bundle) — pages & page builder visuel
- [BlogBundle](/fr/ecosystem/blog-bundle) — articles & catégories
- [MenuBundle](/fr/ecosystem/menu-bundle) — menus de navigation

## Prérequis

- PHP 8.2+
- Symfony 6.4 ou 7.x

## Installation

```bash
composer require aropixel/admin-bundle
php bin/console aropixel:admin:create-user
```

## Documentation

- [Installation](https://github.com/aropixel/admin-bundle/blob/main/doc/installation.md)
- [Créer un utilisateur admin](https://github.com/aropixel/admin-bundle/blob/main/doc/create_user.md)
- [Internationalisation](https://github.com/aropixel/admin-bundle/blob/main/doc/i18n.md)
- [Générateur CRUD (`make:crud`)](https://github.com/aropixel/admin-bundle/blob/main/doc/make_crud.md)
- [Composant DataTable](https://github.com/aropixel/admin-bundle/blob/main/doc/datatable.md)
- [Composant Select2](https://github.com/aropixel/admin-bundle/blob/main/doc/select2.md)
- [FormTypes personnalisés](https://github.com/aropixel/admin-bundle/blob/main/doc/forms.md)
- [Personnalisation CSS](https://github.com/aropixel/admin-bundle/blob/main/doc/css_customization.md)
- [Personnalisation des entités](https://github.com/aropixel/admin-bundle/blob/main/doc/entities.md)
- [Personnalisation du menu admin](https://github.com/aropixel/admin-bundle/blob/main/doc/admin_menu.md)
