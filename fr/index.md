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
---

<div class="aro-section aro-section-wide">

## À voir en action

<div class="aro-shot-grid">
  <figure>
    <img src="/screenshots/admin-crud.png" alt="AropixelAdminBundle : une liste CRUD générée, avec tri, filtre et pagination" class="aro-shadow-img" />
    <figcaption>AdminBundle — un CRUD complet, généré à partir de votre FormType</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/page-builder.png" alt="AropixelPageBundle : déplacement d'un bloc dans le page builder visuel" class="aro-shadow-img" />
    <figcaption>PageBundle — le page builder visuel en glisser-déposer</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/blog.png" alt="AropixelBlogBundle : édition d'un article avec champs SEO et planification" class="aro-shadow-img" />
    <figcaption>BlogBundle — articles, catégories et planification</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/menu.png" alt="AropixelMenuBundle : réorganisation des liens de navigation en glisser-déposer" class="aro-shadow-img" />
    <figcaption>MenuBundle — menus de navigation en glisser-déposer</figcaption>
  </figure>
</div>

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
