// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki - Informatică',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki-tw.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          /* Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          /* Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
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
      navbar: {
        title: 'Wiki - Informatică',
        logo: {
          alt: 'Wiki - Informatică',
          src: 'img/Logo.png',
        },
        items: [
          {to: '/despre', label: 'Despre', position: 'left'},
          {to: '/meditatii', label: 'Meditații', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'ClasaIX',
            position: 'left',
            label: 'Clasa a IX-a',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ClasaX',
            position: 'left',
            label: 'Clasa a X-a',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ClasaXI',
            position: 'left',
            label: 'Clasa a XI-a',
          },
          /*
          {
            position: 'left',
            label: 'Tools',
            items: [
              {to: '/newpage', label: 'New Page'},
              {to: '/newpage', label: 'New Page'},
            ]
          },
          */
          {to: '/blog', label: 'Blog', position: 'right'},
          /*
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;