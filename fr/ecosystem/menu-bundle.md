# AropixelMenuBundle

**Un système de gestion de navigation**, complémentaire à
[AropixelAdminBundle](/fr/ecosystem/admin-bundle) — construisez les menus du site (navigation
principale, pied de page…) en glisser-déposer, sans redéploiement.

[GitHub — aropixel/menu-bundle](https://github.com/aropixel/menu-bundle)

<img src="/gifs/menu.gif" alt="AropixelMenuBundle : réorganisation des liens de navigation en glisser-déposer" class="aro-shadow-img" />

## Fonctionnalités clés

- **Navigation multi-niveaux** — structures de menu imbriquées, pour l'en-tête, le pied de page et
  d'autres emplacements
- **Édition en glisser-déposer** — réordonnez les liens visuellement, depuis l'admin
- **Gestion centralisée** — tous les emplacements de menu édités au même endroit
- **Multilingue** — français, anglais, allemand, espagnol, italien, tchèque

## Prérequis

- Un projet Symfony avec `aropixel/admin-bundle` installé

## Installation

```bash
composer require aropixel/menu-bundle
```

```yaml
# config/routes.yaml
aropixel_menu:
    resource: '@AropixelMenuBundle/Resources/config/routing.xml'
```

Puis appliquez les migrations pour les entités du bundle.

## Licence

MIT, comme tous les dépôts de l'écosystème.
