import { defineConfig } from 'vitepress'

const ecosystemLinksFr = [
  { text: 'AdminBundle', link: '/ecosystem/admin-bundle' },
  { text: 'PageBundle', link: '/ecosystem/page-bundle' },
  { text: 'BlogBundle', link: '/ecosystem/blog-bundle' },
  { text: 'MenuBundle', link: '/ecosystem/menu-bundle' },
  { text: 'Castor Starter', link: '/ecosystem/castor-starter' },
]

const ecosystemLinksEn = [
  { text: 'AdminBundle', link: '/en/ecosystem/admin-bundle' },
  { text: 'PageBundle', link: '/en/ecosystem/page-bundle' },
  { text: 'BlogBundle', link: '/en/ecosystem/blog-bundle' },
  { text: 'MenuBundle', link: '/en/ecosystem/menu-bundle' },
  { text: 'Castor Starter', link: '/en/ecosystem/castor-starter' },
]

const base = '/admin-bundle-ecosystem/'

export default defineConfig({
  title: 'Aropixel Admin',
  description: "L'écosystème open source pour l'admin Symfony — AdminBundle, PageBundle, BlogBundle, MenuBundle et Castor Starter.",
  base,
  cleanUrls: true,
  lastUpdated: true,
  appearance: { initialValue: 'light' },

  head: [
    // head tags aren't base-rewritten by VitePress, unlike themeConfig.logo /
    // hero images — the base prefix has to be applied by hand here.
    ['link', { rel: 'icon', href: `${base}favicon-light.svg`, media: '(prefers-color-scheme: light)', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: `${base}favicon-dark.svg`, media: '(prefers-color-scheme: dark)', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],

  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Démarrer', link: '/get-started' },
          { text: 'Écosystème', items: ecosystemLinksFr },
        ],
        sidebar: {
          '/ecosystem/': [
            {
              text: 'Écosystème',
              items: ecosystemLinksFr,
            },
          ],
          '/': [
            {
              text: 'Écosystème',
              items: ecosystemLinksFr,
            },
          ],
        },
        footer: {
          message: 'Distribué sous licence MIT.',
          copyright: 'Copyright © Aropixel',
        },
        editLink: undefined,
        outline: {
          label: 'Sur cette page',
        },
        returnToTopLabel: 'Retour en haut',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Apparence',
        lightModeSwitchTitle: 'Basculer vers le thème clair',
        darkModeSwitchTitle: 'Basculer vers le thème sombre',
        langMenuLabel: 'Changer de langue',
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Aropixel Admin',
      description: 'The open-source Symfony admin ecosystem — AdminBundle, PageBundle, BlogBundle, MenuBundle and Castor Starter.',
      themeConfig: {
        nav: [
          { text: 'Get Started', link: '/en/get-started' },
          { text: 'Ecosystem', items: ecosystemLinksEn },
        ],
        sidebar: {
          '/en/ecosystem/': [
            {
              text: 'Ecosystem',
              items: ecosystemLinksEn,
            },
          ],
          '/en/': [
            {
              text: 'Ecosystem',
              items: ecosystemLinksEn,
            },
          ],
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © Aropixel',
        },
      },
    },
  },

  themeConfig: {
    logo: '/aropixel-mark.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aropixel' },
    ],
    search: {
      provider: 'local',
    },
  },
})
