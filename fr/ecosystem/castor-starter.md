# Castor Starter 🦫

Un task runner [Castor](https://github.com/jolicode/castor) qui automatise deux workflows pour les
projets Symfony d'Aropixel — nommé, et pensé, d'après l'outil [Castor](https://castor.jolicode.com/)
sur lequel il repose.

[GitHub — aropixel/castor-starter](https://github.com/aropixel/castor-starter)

## Deux workflows

1. **Générer un nouveau projet admin Symfony** — clone
   [jolicode/docker-starter](https://github.com/jolicode/docker-starter), installe Symfony, et met en
   place [aropixel/admin-bundle](/fr/ecosystem/admin-bundle) avec l'infrastructure Docker.
2. **Amorcer un environnement de contribution** pour n'importe quel bundle Aropixel — fork le dépôt sur
   GitHub, clone le fork, et crée un sandbox Symfony avec le bundle installé comme dépôt path
   (symlink) pour du développement en direct.

## Prérequis

- [Castor](https://github.com/jolicode/castor) installé globalement
- Docker + Docker Compose
- PHP + Composer
- [CLI GitHub](https://cli.github.com/) (`gh`, authentifiée) — requise pour les tâches
  `aropixel:contrib:*`

## Installation

```bash
git clone git@github.com:aropixel/castor-starter.git
cd castor-starter
composer install

# le rendre disponible partout sur votre machine
echo "alias castor-starter='\"$(pwd)/vendor/bin/castor\" --castor-file=\"$(pwd)/castor.php\"'" >> ~/.$(basename $SHELL)rc
source ~/.$(basename $SHELL)rc
```

## Générer un nouveau projet admin

```bash
castor-starter aropixel:new:admin <nom-du-projet> [--with-page] [--with-blog] [--with-menu] [--all]
```

Inclus :

- Une administration prête à l'emploi via `aropixel/admin-bundle`, avec un compte administrateur par
  défaut
- Une infrastructure Docker optimisée (PHP 8.2+, Nginx, MySQL, Varnish, Mailpit, phpMyAdmin) basée sur
  `jolicode/docker-starter`
- La config de déploiement Clever Cloud (Varnish, scripts post-build)
- La gestion d'images via `LiipImagineBundle`, les extensions Doctrine via
  `StofDoctrineExtensionsBundle`
- Sécurité et routing préconfigurés avec un slug d'admin randomisé
- Des skills Claude Code pour le développement assisté par IA, copiées dans `.claude/skills/`

## Amorcer un environnement de contribution

Met en place un environnement local pour contribuer à un bundle Aropixel. Le fork est installé comme
dépôt path (symlink), donc les changements sont visibles immédiatement — pas de `composer update`
nécessaire.

```bash
# Environnement de base — toujours requis en premier
castor-starter aropixel:contrib:admin <dir>

# Ajouter un bundle à un environnement de contribution existant
castor-starter aropixel:contrib:blog <dir>
castor-starter aropixel:contrib:page <dir>
castor-starter aropixel:contrib:menu <dir>

# Ou tout installer d'un coup
castor-starter aropixel:contrib:all <dir>
```

```
<dir>/
  admin-bundle/     ← clone du fork (symlink via dépôt path Composer)
  application/      ← application Symfony
  infrastructure/
```

## Lister toutes les tâches disponibles

```bash
castor-starter
```
