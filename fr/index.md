---
layout: home

hero:
  name: "Aropixel Admin"
  text: "L'écosystème open source pour l'admin Symfony"
  tagline: Une boîte à outils de back-office pensée pour les développeurs — générateur de CRUD, pages, blog et menus — construite sur vos propres FormTypes, pas une boîte noire.
  image:
    src: /aropixel-mark.svg
    alt: Aropixel
  actions:
    - theme: brand
      text: Démarrer
      link: /fr/get-started
    - theme: alt
      text: Parcourir l'écosystème
      link: /fr/ecosystem/admin-bundle
    - theme: alt
      text: GitHub
      link: https://github.com/aropixel

features:
  - icon: 🛠️
    title: AdminBundle
    details: Le cœur du système — make:crud génère un CRUD complet à partir de votre propre FormType, avec DataTable, Select2 et des widgets image/galerie.
    link: /fr/ecosystem/admin-bundle
    linkText: Découvrir AdminBundle
  - icon: 📄
    title: PageBundle
    details: Un page builder visuel par blocs, avec HTML pré-rendu, pages fixes et champs SEO complets — une alternative légère à un CMS.
    link: /fr/ecosystem/page-bundle
    linkText: Découvrir PageBundle
  - icon: ✍️
    title: BlogBundle
    details: Articles et catégories, avec planification de publication, champs SEO et recadrage d'images — la couche éditoriale de votre site Symfony.
    link: /fr/ecosystem/blog-bundle
    linkText: Découvrir BlogBundle
  - icon: 🧭
    title: MenuBundle
    details: Des menus de navigation en glisser-déposer, sur plusieurs emplacements — en-tête, pied de page, et plus encore.
    link: /fr/ecosystem/menu-bundle
    linkText: Découvrir MenuBundle
  - icon: 🦫
    title: Castor Starter
    details: Un task runner Castor qui génère un projet admin complet prêt pour Docker, ou un environnement de contribution, en une commande.
    link: /fr/ecosystem/castor-starter
    linkText: Découvrir Castor Starter
  - icon: 🎨
    title: Un vrai design system
    details: Chaque couleur, chaque rayon, chaque espacement est un token CSS --aro-* au-dessus de Bootstrap 5. À parcourir en direct, sur le vrai CSS du bundle.
    link: https://aropixel.github.io/admin-bundle/
    linkText: Ouvrir le catalogue de composants
---

<div class="aro-section">

## À voir avant d'installer

La valeur cœur de l'écosystème, c'est la **boîte à outils Symfony** : le générateur `make:crud` qui
construit un CRUD à partir de *votre propre* `FormType`, des layouts de FormType réutilisables, le
composant `DataTable`, et les widgets image/galerie. L'interface d'admin, c'est la partie que vous
**n'avez pas** à construire — un design system à base de tokens sur Bootstrap 5, donc vous la
re-thémez à partir d'une poignée de variables CSS.

[**▶ Ouvrir le catalogue de composants en direct**](https://aropixel.github.io/admin-bundle/)

<a href="https://aropixel.github.io/admin-bundle/">
  <img src="/catalog-preview.png" alt="Catalogue de composants AropixelAdminBundle — boutons, badges, couleurs et typographie rendus sur le vrai CSS du bundle" class="aro-shadow-img" />
</a>

</div>

<div class="aro-section">

## Installez le bundle principal en moins d'une minute

```bash
composer require aropixel/admin-bundle
php bin/console aropixel:admin:create-user
```

Puis ajoutez les bundles complémentaires dont votre projet a besoin :

```bash
composer require aropixel/page-bundle   # page builder visuel
composer require aropixel/blog-bundle   # articles & catégories
composer require aropixel/menu-bundle   # menus de navigation
```

Vous préférez générer un nouveau projet avec Docker, la config Clever Cloud et tous les bundles
déjà branchés ? [**Utilisez Castor Starter →**](/fr/get-started)

</div>

<div class="aro-section">

## Pensé pour Symfony, de bout en bout

- **PHP 8.2+ / Symfony 6.4 & 7.x** sur tout l'écosystème
- **Licence MIT** — sur chaque dépôt, sans exception
- **i18n natif** — français, anglais, allemand, espagnol, italien et tchèque
- **Modulaire par conception** — n'installez que les bundles dont vous avez besoin, étendez entités
  et formulaires librement
- **Maintenu activement** par [Aropixel](https://www.aropixel.com), agence Symfony française

</div>
