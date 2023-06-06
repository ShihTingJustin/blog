// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const siteUrl = 'https://www.sthdev.app';
const siteTitle = "Web Worker";
const siteDescription = 'Two cents from a web worker.';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteTitle,
  tagline: siteDescription,
  url: siteUrl,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ShihTingJustin', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
  },
  // https://wiki.7wate.com/docs/%E5%BB%BA%E7%AB%99%E7%BB%8F%E9%AA%8C/Docusaurus%20%E6%90%AD%E5%BB%BA/#%E6%8E%A8%E9%80%81%E6%95%B0%E6%8D%AE

  // https://weiyun0912.github.io/Wei-Docusaurus/docs/Docusaurus/Algolia/

  // https://docusaurus.io/docs/deployment#using-environment-variables

  // https://docusaurus.io/docs/search#using-algolia-docsearch
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ShihTingJustin/blog/tree/main/docs',
        },
        blog: {
          postsPerPage: 8,
          showReadingTime: true,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ShihTingJustin/blog/tree/main/blog',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,

        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_API_KEY,

        indexName: process.env.ALGOLIA_INDEX_NAME,

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      image: 'img/code_review_dark.png',
      metadata: [
        {
          name: 'author',
          content: 'ShihTing Huang',
        },
        {
          name: 'description',
          content: siteDescription,
        },
        {
          property: 'og:title',
          content: siteTitle,
        },
        {
          property: 'og:site_name',
          content: siteTitle,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: siteUrl,
        },
        {
          property: 'og:description',
          content: siteDescription,
        },
      ],
      navbar: {
        title: siteTitle,
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logoDark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            to: '/portfolio',
            label: 'Portfolio',
            position: 'left',
          },
          {
            to: 'https://jhdev.pro/',
            label: 'About',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ShihTingJustin',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ShihTingJustin',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/justinhuang777',
              },
            ],
          },
          {
            title: 'Stack',
            items: [
              {
                label: 'React.js',
                href: 'https://reactjs.org',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                html: `
        <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
         <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
         </a>
        `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ShihTing's Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  plugins: [
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
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;
