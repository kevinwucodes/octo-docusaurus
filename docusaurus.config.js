// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project Documentation',
  tagline: 'Built with Docusaurus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kevinwucodes.github.io',
  baseUrl: '/octo-docusaurus/',

  // GitHub pages deployment config
  organizationName: 'kevinwucodes',
  projectName: 'octo-docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serves the docs at the site root (e.g. / instead of /docs/)
          // Configures the "Edit on GitHub" link on every page
          editUrl: 'https://github.com/kevinwucodes/octo-docusaurus/tree/main/',
        },
        blog: false, // Disables blog functionality for a pure docs setup
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Project Docs',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/kevinwucodes/octo-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Project Docs, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;