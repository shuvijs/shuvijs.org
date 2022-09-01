// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const isDev = process.env.NODE_ENV === 'development';

const baseURL = '/shuvijs.org/';
const allDocHomesPaths = ['/docs/'];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shuvi.js',
  organizationName: 'shuvijs', // Usually your GitHub org/user name.
  projectName: 'shuvi', // Usually your repo name.
  url: 'https://shuvijs.github.io/',
  baseUrl: baseURL,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  scripts: [`${baseURL}iconfont.js`],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/shuvijs/shuvijs.org/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/shuvijs/shuvijs.org/tree/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-og.png',
      algolia: {
        appId: 'shuvijs',
        apiKey: 'ddf5199f80099ebf2895567663218470',
        indexName: 'shuvijs',
      },
      // sidebarCollapsible: false,
      navbar: {
        title: 'Shuvi.js',
        logo: {
          alt: 'Shuvi.js',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'right',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'guides/index',
            position: 'right',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'reference/index',
            position: 'right',
            label: 'Reference',
          },

          /* { to: 'docs/introduction', label: 'Start', position: 'right' },
          { to: 'docs/guide', label: 'Docs', position: 'right' },
          { to: 'docs/api', label: 'API', position: 'right' }, */
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/shuvijs/shuvi',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: 'docs/tutorials',
              },
              {
                label: 'Guide',
                to: 'docs/guide',
              },
              {
                label: 'Reference',
                to: 'docs/reference',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/shuvijs/shuvi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} contributors of Shuvi`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        fromExtensions: ['html'],
        createRedirects(routePath) {
          // Redirect to /docs from /docs/introduction, as introduction has been
          // made the home doc
          if (allDocHomesPaths.includes(routePath)) {
            return [`${routePath}/introduction`];
          }
          return [];
        },
        redirects: [],
      }),
    ],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
  ],
};

module.exports = config;
