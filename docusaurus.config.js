// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki - Tehnologii Web',
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
        title: '<Wiki - Tehnologii Web/>',
        logo: {
          alt: '<Wiki - Tehnologii Web/>',
          src: 'img/Logo.png',
        },
        items: [
          {to: '/echipa', label: 'Echipă', position: 'left'},
          {to: '/zebrahack', label: 'ZebraHack', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'GIT',
            position: 'left',
            label: 'Git & GitHub',
          },
          {
            type: 'docSidebar',
            sidebarId: 'HTMLCSS',
            position: 'left',
            label: 'HTML & CSS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'JavaScript',
            position: 'left',
            label: 'JavaScript',
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
      /*
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | Website creat de echipa Tehnologii Web, Facultatea de Automatică și Calculatoare din București`,
      },
      */
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;