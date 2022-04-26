// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shuvi',
  tagline: 'Meta Framework to create applications quickly',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/shuvijs.org/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Shuvi',
        logo: {
          alt: 'Shuvi',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/getting-started',
            position: 'right',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'guide/overview',
            position: 'right',
            label: 'Guide',
          },
          {
            type: 'doc',
            docId: 'api-reference/overview',
            position: 'right',
            label: 'API Reference',
          },
          {
            type: 'doc',
            docId: 'api/overview',
            position: 'right',
            label: 'API',
          },
          /* { to: 'docs/introduction', label: 'Start', position: 'right' },
          { to: 'docs/guide', label: 'Docs', position: 'right' },
          { to: 'docs/api', label: 'API', position: 'right' }, */
          {to: 'docs/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/shuvijs/shuvi',
            label: 'GitHub',
            position: 'right',
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
                label: 'Introduction',
                to: 'docs/introduction/getting-started',
              },
              {
                label: 'Guide',
                to: 'docs/guide/overview',
              },
              {
                label: 'API Reference',
                to: 'docs/api/overview',
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
};

module.exports = config;
