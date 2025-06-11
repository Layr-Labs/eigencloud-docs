// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EigenLayer",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.eigenlayer.xyz/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "layr-labs", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  markdown: {
    mermaid: true
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [

        ],
        createRedirects(existingPath) {

          // eigenlayer redirects
          if (existingPath.includes('/eigenlayer')) {
            return [
              existingPath.replace('/eigenlayer', ''),
            ];
          }

          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: false
        },
        

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        gtag: {
          trackingID: 'G-EQG5VRNYHQ',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/eigencloud-logo-blue.png',
      navbar: {
        title: "EigenLayer",
        logo: {
          alt: "EigenLayer Logo",
          src: "img/eigencloud-logo-blue.png",
          srcDark: "img/eigencloud-logo.png",
        },
        items: [
          {
            to: "get-started/eigencloud-overview",
            label: "Get Started",
            position: "left",
            activeBasePath: 'get-started/',
          },
          {
            to: "products/eigenlayer/eigenlayer-overview",
            label: "Products",
            position: "left",
            activeBasePath: 'products/',
          },

          {
            href: "https://github.com/Layr-Labs",
            className: "header--github-link",
            "aria-label": "GitHub repository",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "EigenLayer",
            items: [
              {
                label: "About",
                href: "https://www.eigenlayer.xyz/",
              },
              {
                label: "Privacy Policy",
                href: "https://docs.eigenlayer.xyz/eigenlayer/legal/privacy-policy",
              },
              {
                label: "Terms of Service",
                href: "https://docs.eigenlayer.xyz/eigenlayer/legal/terms-of-service",
              },
              {
                label: "Disclaimers",
                href: "https://docs.eigenlayer.xyz/eigenlayer/legal/disclaimers",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Support",
                href: "https://docs.eigenlayer.xyz/eigenlayer/developers/HowTo/get-started/support",
              },
              {
                label: "Forum",
                href: "https://forum.eigenlayer.xyz/",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/eigenlayer",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/eigenlayer",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Layr-Labs",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@EigenLayer",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eigen Labs, Inc.`,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash","solidity"],
      },
    }),
  scripts: [
    // Object format.
    {
      src: '/js/intercom.js',
      async: true,
    },
    // {
    //   src: '/js/eigenda-redirects.js',
    //   async: false,
    // },
    {
      src: '/js/avs-guide-redirects.js',
      async: false,
    },
    {
      src: '/js/restakers-redirects.js',
      async: false,
    },
    {
      src: '/js/operators-redirects.js',
      async: false,
    },
    {
      src: '/js/eigen-token-redirect.js',
      async: false,
    },
    {
      src: '/js/userback.js',
      async: true,
    },
  ],
  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      // @ts-ignore
      ({
        // `hashed` is recommended as long-term-cache of index file is possible
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      }),
    ],
    '@docusaurus/theme-mermaid'
  ],
};

module.exports = config;