# Get Started

There are two ways to get going: scaffold a brand-new project with **Castor Starter**, or add a
single bundle to an existing Symfony application. Both take a few minutes.

## Option A — Scaffold a new project

[Castor Starter](/ecosystem/castor-starter) is a [Castor](https://github.com/jolicode/castor) task
runner that automates the whole setup: Symfony, Docker infrastructure, `aropixel/admin-bundle`, and
any companion bundle you need.

**Prerequisites:** [Castor](https://github.com/jolicode/castor), Docker + Docker Compose, PHP + Composer,
and the [GitHub CLI](https://cli.github.com/) (`gh`) if you plan to contribute back to a bundle.

```bash
# 1. Clone the project
git clone git@github.com:aropixel/castor-starter.git
cd castor-starter

# 2. Install dependencies
composer install

# 3. Make it available anywhere on your machine
echo "alias castor-starter='\"$(pwd)/vendor/bin/castor\" --castor-file=\"$(pwd)/castor.php\"'" >> ~/.$(basename $SHELL)rc
source ~/.$(basename $SHELL)rc
```

Scaffold a complete admin project, with every companion bundle:

```bash
castor-starter aropixel:new:admin my-project --all
```

That single command gives you a ready-to-use administration with a default admin account, a Docker
stack (PHP 8.2+, Nginx, MySQL, Varnish, Mailpit, phpMyAdmin) based on
[`jolicode/docker-starter`](https://github.com/jolicode/docker-starter), Clever Cloud deployment
config, image management via `LiipImagineBundle`, and a randomized admin route slug for security.

→ Full details on the [Castor Starter](/ecosystem/castor-starter) page.

## Option B — Add a bundle to an existing project

Require the core bundle, create your first admin user, and you're in:

```bash
composer require aropixel/admin-bundle
php bin/console aropixel:admin:create-user
```

Then layer in whichever companion bundle your project needs:

```bash
composer require aropixel/page-bundle   # visual page builder
composer require aropixel/blog-bundle   # posts & categories
composer require aropixel/menu-bundle   # navigation menus
```

Each bundle ships its own installation guide with entity extension, Doctrine mapping, and routing —
see the [ecosystem overview](/ecosystem/admin-bundle) for links.

## Requirements

| | |
|---|---|
| PHP | 8.2 or above |
| Symfony | 6.4 or 7.x |
| License | MIT, on every repository |
| Languages | French, English, German, Spanish, Italian, Czech |

## Explore the design system

Before you install anything, you can browse every component the admin UI ships with — rendered on the
real bundle CSS, not a mockup.

[**▶ Open the live component catalogue**](https://aropixel.github.io/admin-bundle/)
