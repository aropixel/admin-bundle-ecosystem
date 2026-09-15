# Castor Starter 🦫

A [Castor](https://github.com/jolicode/castor) task runner that automates two workflows for Aropixel
Symfony projects — named, and modeled, after the [Castor](https://castor.jolicode.com/) tool it's built on.

[GitHub — aropixel/castor-starter](https://github.com/aropixel/castor-starter)

## Two workflows

1. **Scaffold a new Symfony admin project** — clones
   [jolicode/docker-starter](https://github.com/jolicode/docker-starter), installs Symfony, and sets
   up [aropixel/admin-bundle](/ecosystem/admin-bundle) with Docker infrastructure.
2. **Bootstrap a contribution environment** for any Aropixel bundle — forks the repo on GitHub, clones
   the fork, and creates a Symfony sandbox with the bundle installed as a path repository (symlink)
   for live development.

## Prerequisites

- [Castor](https://github.com/jolicode/castor) installed globally
- Docker + Docker Compose
- PHP + Composer
- [GitHub CLI](https://cli.github.com/) (`gh`, authenticated) — required for `aropixel:contrib:*` tasks

## Install

```bash
git clone git@github.com:aropixel/castor-starter.git
cd castor-starter
composer install

# make it available anywhere on your machine
echo "alias castor-starter='\"$(pwd)/vendor/bin/castor\" --castor-file=\"$(pwd)/castor.php\"'" >> ~/.$(basename $SHELL)rc
source ~/.$(basename $SHELL)rc
```

## Scaffold a new admin project

```bash
castor-starter aropixel:new:admin <project-name> [--with-page] [--with-blog] [--with-menu] [--all]
```

Includes:

- Ready-to-use administration via `aropixel/admin-bundle`, with a default administrator account
- Optimized Docker infrastructure (PHP 8.2+, Nginx, MySQL, Varnish, Mailpit, phpMyAdmin) based on
  `jolicode/docker-starter`
- Clever Cloud deployment config (Varnish, post-build scripts)
- Image management via `LiipImagineBundle`, Doctrine extensions via `StofDoctrineExtensionsBundle`
- Security and routing pre-configured with a randomized admin slug
- Claude Code skills for AI-assisted development, copied into `.claude/skills/`

## Bootstrap a contribution environment

Sets up a local environment for contributing to an Aropixel bundle. The fork is installed as a path
repository (symlink), so changes are visible immediately — no `composer update` needed.

```bash
# Base environment — always required first
castor-starter aropixel:contrib:admin <dir>

# Add a bundle to an existing contrib environment
castor-starter aropixel:contrib:blog <dir>
castor-starter aropixel:contrib:page <dir>
castor-starter aropixel:contrib:menu <dir>

# Or bring in every bundle at once
castor-starter aropixel:contrib:all <dir>
```

```
<dir>/
  admin-bundle/     ← fork clone (symlinked via Composer path repository)
  application/      ← Symfony app
  infrastructure/
```

## List all available tasks

```bash
castor-starter
```
