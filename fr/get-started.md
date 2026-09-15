# Démarrer

Deux façons de démarrer : générer un nouveau projet avec **Castor Starter**, ou ajouter un bundle à
une application Symfony existante. Les deux prennent quelques minutes.

## Option A — Générer un nouveau projet

[Castor Starter](/fr/ecosystem/castor-starter) est un task runner
[Castor](https://github.com/jolicode/castor) qui automatise toute la mise en place : Symfony,
infrastructure Docker, `aropixel/admin-bundle`, et tout bundle complémentaire dont vous avez besoin.

**Prérequis :** [Castor](https://github.com/jolicode/castor), Docker + Docker Compose, PHP + Composer,
et la [CLI GitHub](https://cli.github.com/) (`gh`) si vous comptez contribuer à un bundle.

```bash
# 1. Cloner le projet
git clone git@github.com:aropixel/castor-starter.git
cd castor-starter

# 2. Installer les dépendances
composer install

# 3. Le rendre disponible partout sur votre machine
echo "alias castor-starter='\"$(pwd)/vendor/bin/castor\" --castor-file=\"$(pwd)/castor.php\"'" >> ~/.$(basename $SHELL)rc
source ~/.$(basename $SHELL)rc
```

Générez un projet admin complet, avec tous les bundles complémentaires :

```bash
castor-starter aropixel:new:admin mon-projet --all
```

Cette seule commande vous donne une administration prête à l'emploi avec un compte admin par défaut,
une stack Docker (PHP 8.2+, Nginx, MySQL, Varnish, Mailpit, phpMyAdmin) basée sur
[`jolicode/docker-starter`](https://github.com/jolicode/docker-starter), la config de déploiement
Clever Cloud, la gestion d'images via `LiipImagineBundle`, et un slug d'admin randomisé pour la
sécurité.

→ Tous les détails sur la page [Castor Starter](/fr/ecosystem/castor-starter).

## Option B — Ajouter un bundle à un projet existant

Installez le bundle principal, créez votre premier utilisateur admin, et c'est parti :

```bash
composer require aropixel/admin-bundle
php bin/console aropixel:admin:create-user
```

Puis ajoutez le ou les bundles complémentaires dont votre projet a besoin :

```bash
composer require aropixel/page-bundle   # page builder visuel
composer require aropixel/blog-bundle   # articles & catégories
composer require aropixel/menu-bundle   # menus de navigation
```

Chaque bundle a son propre guide d'installation, avec extension d'entités, mapping Doctrine et
routing — voir l'[aperçu de l'écosystème](/fr/ecosystem/admin-bundle) pour les liens.

## Prérequis

| | |
|---|---|
| PHP | 8.2 ou supérieur |
| Symfony | 6.4 ou 7.x |
| Licence | MIT, sur chaque dépôt |
| Langues | Français, anglais, allemand, espagnol, italien, tchèque |

## Explorer le design system

Avant d'installer quoi que ce soit, vous pouvez parcourir tous les composants de l'interface d'admin —
rendus sur le vrai CSS du bundle, pas une maquette.

[**▶ Ouvrir le catalogue de composants en direct**](https://aropixel.github.io/admin-bundle/)
