import { defineConfig } from 'vitepress';
import { join } from 'desm';

export default defineConfig({
  title:       'LintUse',
  description: 'Collection of Lint Utilities',
  head:        [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  markdown:    {
    lineNumbers:          true,
    defaultHighlightLang: 'JavaScript',
  },
  vite: {
    resolve: {
      alias: {
        '@': join(import.meta.url, '..'),
      },
    },
  },
  themeConfig: {
    logo: {
      light: '/images/logo/light.png',
      dark:  '/images/logo/dark.png',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/get-started' },
      {
        text: 'TypeDoc', link: '/typedoc/index.html', target: '_blank', noIcon: false,
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text:  'Guide',
          items: [
            { text: 'Get Started', link: '/guide/get-started' },
            { text: 'Integrations', link: '/guide/integrations' },
          ],
        },
        {
          text:  'ESLint',
          items: [
            { text: 'ESLint rules config', link: '/guide/eslint/eslint' },
            { text: 'Typescript ESLint config', link: '/guide/eslint/typescript-eslint' },
            { text: 'Stylistic ESLint config', link: '/guide/eslint/stylistic-eslint' },
            { text: 'JSON ESLint config', link: '/guide/eslint/json-eslint' },
          ],
        },
        {
          text:  'Stylelint',
          items: [
            { text: 'Stylelint config', link: '/guide/stylelint/stylelint' },
            { text: 'Stylelint order config', link: '/guide/stylelint/stylelint-order' },
            { text: 'Stylelint Prettier config', link: '/guide/stylelint/stylelint-prettier' },
          ],
        },
        {
          text:  'Prettier',
          items: [
            { text: 'Prettier config', link: '/guide/prettier/prettier' },
          ],
        },
        {
          text:  'Markdownlint',
          items: [
            { text: 'Markdownlint config', link: '/guide/markdownlint/markdownlint' },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon:      'github',
        link:      'https://github.com/ljtang2009/lint-use',
        ariaLabel: 'Github',
      },
      {
        icon: {
          svg: '<svg t="1712366483122" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1449" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="1450"></path></svg>',
        },
        link:      'https://gitee.com/tanglijin2009/lint-use',
        ariaLabel: 'Gitee',
      },
    ],

    footer: {
      message:   'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Logan Tang',
    },

    editLink: {
      pattern: 'https://github.com/ljtang2009/lint-use/edit/main/docs/:path',
    },

    externalLinkIcon: true,

    search: {
      provider: 'local',
    },
  },
});
