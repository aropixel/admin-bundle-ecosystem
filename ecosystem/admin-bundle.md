# AropixelAdminBundle

**Un framework d'administration Symfony pensé pour les développeurs.** Il fournit les outils et une
base solide pour construire une interface d'admin rapidement — sans gêner votre propre code, et sans
devenir une boîte noire.

[GitHub — aropixel/admin-bundle](https://github.com/aropixel/admin-bundle)

<img src="/screenshots/admin-crud-demo.gif" alt="AropixelAdminBundle : parcours d'un CRUD généré" class="aro-shadow-img" />

## Ce qui le différencie

La plupart des générateurs d'admin cachent vos entités derrière un DSL de configuration.
AropixelAdminBundle part de **votre propre `FormType`** — le générateur `make:crud` le lit et
construit un CRUD complet autour, vous gardez donc le contrôle total sur la validation, les
transformers et la logique métier.

## En pratique : plusieurs widgets en quelques lignes

Un exemple concret plutôt qu'une liste de features : un champ relation (catégorie), un booléen
(toggle) et une image avec upload, bibliothèque de médias partagée et recadrage — dans un seul
`FormType`.

Le FormType :

```php
use Aropixel\AdminBundle\Form\Type\Image\Single\ImageType;
use Aropixel\AdminBundle\Form\Type\ToggleSwitchType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

$builder
    ->add('title', TextType::class, [
        'label' => 'Titre',
    ])
    ->add('category', EntityType::class, [
        'label' => 'Catégorie',
        'class' => Category::class,
        'choice_label' => 'name',
        'required' => false,
    ])
    ->add('published', ToggleSwitchType::class, [
        'label' => 'Publié',
        'required' => false,
    ])
    ->add('cover', ImageType::class, [
        'label' => 'Image de couverture',
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

Le template :

```twig
{{ form_row(form.title) }}
{{ form_row(form.category) }}
{{ form_row(form.published) }}
{{ form_row(form.cover) }}
```

Le rendu dans l'admin :

<img src="/screenshots/form-image-widget.png" alt="Le formulaire rendu : Titre, Catégorie (select), Publié (toggle) et Image de couverture" class="aro-shadow-img" />

C'est tout — pas de configuration supplémentaire, pas de JavaScript à écrire. Le même principe
s'applique aux galeries d'images, aux fichiers et aux collections.

[Voir tous les widgets disponibles →](https://github.com/aropixel/admin-bundle/blob/main/doc/forms.md)

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

- [PageBundle](/ecosystem/page-bundle) — pages & page builder visuel
- [BlogBundle](/ecosystem/blog-bundle) — articles & catégories
- [MenuBundle](/ecosystem/menu-bundle) — menus de navigation

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
