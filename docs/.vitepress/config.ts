import { defineConfig } from 'vitepress';

export default defineConfig({
  title:       'LintUse',
  description: 'Collection of Lint Utilities',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'TypeDoc', link: '/typedoc/index.html', target: '_blank' },
    ],

    sidebar: [
      {
        text:  'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
