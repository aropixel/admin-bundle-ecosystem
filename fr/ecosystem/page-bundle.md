# AropixelPageBundle

**Un module de gestion de pages pour Symfony**, construit comme compagnon d'
[AropixelAdminBundle](/fr/ecosystem/admin-bundle) — une alternative légère à un CMS traditionnel.

[GitHub — aropixel/page-bundle](https://github.com/aropixel/page-bundle)

## Trois types de pages, un seul bundle

| Type | Stockage | Cas d'usage |
|---|---|---|
| `TYPE_DEFAULT` | `htmlContent` | Pages simples éditées via CKEditor |
| `TYPE_CUSTOM` | `jsonContent` + `htmlContent` pré-rendu | Page builder visuel |
| JSON personnalisé | `jsonContent` | Formulaires structurés à champs nommés (ex. une page contact avec téléphone/adresse) |

Pour le page builder visuel, le JSON est rendu en HTML **au moment de l'enregistrement** — l'affichage
front est donc un simple <code v-pre>{{ page.htmlContent|raw }}</code>, sans coût de rendu par requête.

## Fonctionnalités clés

- **Page builder visuel** — éditeur par blocs en glisser-déposer : sections, lignes, colonnes, texte,
  images, boutons, titres, et plus
- **Types de blocs personnalisés** — étendez le builder avec vos propres blocs via un simple
  enregistrement JS + YAML
- **Pages fixes / protégées** — déclarez des pages système non supprimables (accueil, contact…) avec
  un code statique pour des recherches fiables
- **Multilingue** — i18n complet via Gedmo Translatable, avec slugs, contenu et HTML pré-rendu par
  locale
- **Champs SEO** — meta title, meta description et slug, par locale
- **Planification de publication** — statut en ligne/hors ligne avec plage de dates optionnelle
- **Événement `PageSavedEvent`** — déclenché après chaque enregistrement, pour invalider Varnish, un
  CDN, Redis, ou toute couche de cache

## Prérequis

- PHP 8.2+
- Symfony 6.4 ou 7.x
- `aropixel/admin-bundle` installé et configuré

## Installation

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

- [Installation](https://github.com/aropixel/page-bundle/blob/main/doc/installation.md) — extension
  d'entités, mapping Doctrine, configuration du bundle
- [Usage et types de pages](https://github.com/aropixel/page-bundle/blob/main/doc/usage.md) — config
  du page builder, pages fixes, rendu front, événements
- [Types de blocs personnalisés](https://github.com/aropixel/page-bundle/blob/main/doc/custom-blocks.md)
- [Personnalisation des entités](https://github.com/aropixel/page-bundle/blob/main/doc/entities.md)
