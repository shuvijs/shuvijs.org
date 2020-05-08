/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Shuvijs',
  tagline: 'Shuvijs',
  url: 'https://shuvijs.github.io/shuvijs.org/',
  baseUrl: '/shuvijs.org/',
  projectName: 'shuvijs-doc',
  organizationName: 'Shuvijs',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl: 'https://github.com/shuvijs/shuvijs.org',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-og.png',
    algolia: {
      apiKey: 'ddf5199f80099ebf2895567663218470',
      indexName: 'shuvijs',
    },
    navbar: {
      title: 'Shuvijs',
      logo: {
        alt: 'Shuvijs',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/getting-started', label: 'Docs', position: 'right' },
        {
          href: 'https://github.com/shuvijs/shuvi/issues',
          label: 'Help',
          position: 'right',
        },
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
              label: 'Get Started',
              to: 'docs/getting-started',
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
      copyright: `Copyright © ${new Date().getFullYear()} Shuvijs`,
    },
  },
}

module.exports = siteConfig
