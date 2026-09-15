import { defineConfig } from 'vitepress'

const ecosystemLinksEn = [
  { text: 'AdminBundle', link: '/ecosystem/admin-bundle' },
  { text: 'PageBundle', link: '/ecosystem/page-bundle' },
  { text: 'BlogBundle', link: '/ecosystem/blog-bundle' },
  { text: 'MenuBundle', link: '/ecosystem/menu-bundle' },
  { text: 'Castor Starter', link: '/ecosystem/castor-starter' },
]

const ecosystemLinksFr = [
  { text: 'AdminBundle', link: '/fr/ecosystem/admin-bundle' },
  { text: 'PageBundle', link: '/fr/ecosystem/page-bundle' },
  { text: 'BlogBundle', link: '/fr/ecosystem/blog-bundle' },
  { text: 'MenuBundle', link: '/fr/ecosystem/menu-bundle' },
  { text: 'Castor Starter', link: '/fr/ecosystem/castor-starter' },
]

const base = '/admin-bundle-ecosystem/'

export default defineConfig({
  title: 'Aropixel Admin',
  description: 'The open-source Symfony admin ecosystem — AdminBundle, PageBundle, BlogBundle, MenuBundle and Castor Starter.',
  base,
  cleanUrls: true,
  lastUpdated: true,

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
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Ecosystem', items: ecosystemLinksEn },
        ],
        sidebar: {
          '/ecosystem/': [
            {
              text: 'Ecosystem',
              items: ecosystemLinksEn,
            },
          ],
          '/': [
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
        editLink: undefined,
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Démarrer', link: '/fr/get-started' },
          { text: 'Écosystème', items: ecosystemLinksFr },
        ],
        sidebar: {
          '/fr/ecosystem/': [
            {
              text: 'Écosystème',
              items: ecosystemLinksFr,
            },
          ],
          '/fr/': [
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
