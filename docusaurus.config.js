// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import fs from "node:fs";
import path from "node:path";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EigenCloud",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.eigencloud.xyz/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

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
    async function pluginLlmsTxt(context) {
      return {
        name: "llms-txt-plugin",
        loadContent: async () => {
          const { siteDir } = context;
          const contentDir = path.join(siteDir, "docs/products/eigenlayer");
          const developersDir = path.join(siteDir, "docs/products/eigenlayer/developers")
          const operatorsDir = path.join(siteDir, "docs/products/eigenlayer/operators")
          const allMd = [];
          const developersMd = []
          const operatorsMd = []

          // recursive function to get all mdx files
          const getMdxFiles = async (baseDir, writeDir) => {
            const entries = await fs.promises.readdir(baseDir, { withFileTypes: true });
            for (const entry of entries) {
              const fullPath = path.join(baseDir, entry.name);
              if (entry.isDirectory()) {
                await getMdxFiles(fullPath, writeDir);
              } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
                const content = await fs.promises.readFile(fullPath, "utf8");
                writeDir.push(content);
              }
            }
          };

          await getMdxFiles(developersDir, developersMd)
          await getMdxFiles(contentDir, allMd);
          await getMdxFiles(operatorsDir, operatorsMd);
          return { allMd , developersMd, operatorsMd};
        },
        postBuild: async ({ content, routes, outDir }) => {
          const { allMd, developersMd, operatorsMd } = content;

          // Write concatenated Markdown content to build directory
          await fs.promises.writeFile(path.join(outDir, "llms-full.md"), allMd.join("\n\n---\n\n"));
          await fs.promises.writeFile(path.join(outDir, "avs-developer-docs.md"), developersMd.join("\n\n---\n\n"));
          await fs.promises.writeFile(path.join(outDir, "operators-developer-docs.md"), operatorsMd.join("\n\n---\n\n"));

          // we need to dig down several layers:
          // find PluginRouteConfig marked by plugin.name === "docusaurus-plugin-content-docs"
          const docsPluginRouteConfig = routes.filter(
            (route) => route.plugin.name === "docusaurus-plugin-content-docs"
          )[0];

          // docsPluginRouteConfig has a routes property has a record with the path "/" that contains all docs routes.
          const allDocsRouteConfig = docsPluginRouteConfig.routes?.filter(
            (route) => route.path === "/"
          )[0];

          // A little type checking first
          if (!allDocsRouteConfig?.props?.version) {
            return;
          }

          // this route config has a `props` property that contains the current documentation.
          const currentVersionDocsRoutes = (
            allDocsRouteConfig.props.version
          ).docs;

          // for every single docs route we now parse a path (which is the key) and a title
          const docsRecords = Object.entries(currentVersionDocsRoutes).map(([path, record]) => {
            return `- [${record.title}](${path}): ${record.description}`;
          });

          // Build up llms.txt file
          const llmsTxt = `# ${context.siteConfig.title}\n\n## Docs\n\n${docsRecords.join("\n")}`;

          // Write llms.txt file to build directory
          try {
            fs.writeFileSync(path.join(outDir, "llms.md"), llmsTxt);
          } catch (err) {
            throw err;
          }
        },
      };
    },
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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
        title: "Home",
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
            to: "products/eigenlayer/concepts/eigenlayer-overview",
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