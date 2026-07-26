// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
import math from 'remark-math';
import katex from 'rehype-katex';
import fs from "node:fs";
import path from "node:path";

const redirects = [
  {
    from: '/eigenlayer/overview',
    to: '/eigenlayer/concepts/eigenlayer-overview',
  },
  {
      from: '/products/eigencompute/get-started/get-started',
      to: 'eigencompute/get-started/quickstart',
  },
  {
      from: '/developers/Concepts/eigenlayer-contracts/core-contracts',
      to: '/eigenlayer/developers/concepts/eigenlayer-contracts/core-contracts',
  },
  {
      from: '/developers/Concepts/eigenlayer-contracts/middleware-contracts',
      to: '/eigenlayer/developers/concepts/eigenlayer-contracts/middleware-contracts',
  },
  {
      from: '/eigenlayer/deployed-contracts',
      to: '/eigenlayer/developers/concepts/eigenlayer-contracts/deployed-contracts',
  },
  {
      from: '/restakers/restaking-guides/restaking-developer-guide',
      to: '/eigenlayer/restakers/restaking-guides/restaking-developer-guide',
  },

  // EigenCompute

  {
      from: '/products/eigencompute',
      to: '/eigencompute/get-started/eigencompute-overview',
  },
  {
     from: '/eigencompute/concepts/eigencompute-overview',
     to: '/eigencompute/get-started/eigencompute-overview',
  },

  {
    from: '/products/eigencompute/get-started',
    to: '/eigencompute/get-started/quickstart'
  },

  {
      from: '/eigencompute/get-started/demo',
      to: '/eigencompute/get-started/quickstart'
    },

  // Get Started
  {
    from: '/get-started/eigencloud-overview',
    to: '/eigencloud/eigencloud-overview',
  },



  // Top-level files

  {
      from: '/get-started/eigencloud/eigencloud-overview',
      to: '/eigencloud/eigencloud-overview',
  },
  {
     from: '/get-started/developers/concepts/understanding-avs-on-eigenlayer',
     to: '/eigenlayer/concepts/understanding-avs-on-eigenlayer',
  },
  {
     from: '/get-started/developers/concepts/why-build-on-eigenlayer',
     to: '/eigenlayer/concepts/why-build-on-eigenlayer',
  },
  {
     from: '/products/eigenlayer/developers/howto/get-started/implement-minimum-onchain-components',
     to: '/eigenlayer/developers/howto/get-started/implement-minimum-onchain-components',
  },
  {
     from: '/products/eigenlayer/developers/howto/get-started/quickstart',
     to: '/eigenlayer/developers/howto/get-started/quickstart',
  },


  // DEVELOPERS SECTION
  
  // Developer Concepts (handle both capitalized and lowercase versions)
  {
      from: '/developers/Concepts/avs-contracts',
      to: '/eigenlayer/developers/concepts/avs-contracts',
  },
  {
      from: '/developers/Concepts/avs-developer-guide',
      to: '/eigenlayer/developers/concepts/avs-developer-guide',
  },
  {
      from: '/developers/Concepts/avs-keys',
      to: '/eigenlayer/developers/concepts/slashing/key-management-redistributable-slashing',
  },
  {
      from: '/developers/Concepts/avs-security-models',
      to: '/eigenlayer/developers/concepts/avs-security-models',
  },
  {
      from: '/developers/Concepts/slashing/slashing-concept-developers',
      to: '/eigenlayer/developers/concepts/slashing/slashing-concept-developers',
  },
  {
      from: '/developers/Concepts/task',
      to: '/eigenlayer/developers/concepts/task',
  },
  {
      from: '/developers/Concepts/uam-for-avs',
      to: '/eigenlayer/developers/concepts/uam-for-avs',
  },


  {
      from: '/products/eigencompute/howto/create-app-from-template',
      to: '/eigencompute/get-started/quickstart',
  },
  {
      from: '/products/eigencompute/howto/use-app-wallet',
      to: '/eigencompute/howto/build/use-app-wallet',
  },
  {
      from: '/products/eigencompute/howto/manage-auth-keys/create-auth-key',
      to: '/eigencompute/howto/setup/create-use-auth-keys',
  },

  // Developer HowTo (handle both capitalized and lowercase versions)
  {
      from: '/developers/HowTo/deployment-testnet-mainnet',
      to: '/eigenlayer/developers/howto/deploy/deployment-testnet-mainnet',
  },
  {
      from: '/developers/HowTo/get-started/implement-minimum-onchain-components',
      to: '/eigenlayer/developers/howto/get-started/implement-minimum-onchain-components',
  },
  {
      from: '/developers/HowTo/get-started/quickstart',
      to: '/eigenlayer/developers/howto/get-started/quickstart',
  },
  {
      from: '/developers/HowTo/get-started/support',
      to: '/eigenlayer/developers/howto/get-started/support',
  },
  {
      from: '/developers/HowTo/publish/onboard-avs-dashboard',
      to: '/eigenlayer/developers/howto/publish/onboard-avs-dashboard',
  },
  {
      from: '/developers/HowTo/test/obtain-testnet-eth',
      to: '/eigenlayer/developers/howto/test/obtain-testnet-eth',
  },
  {
      from: '/developers/HowTo/test/test-avs',
      to: '/eigenlayer/developers/howto/test/test-avs',
  },
  {
    from: '/products/eigencompute/quickstart',
    to: '/eigencompute/get-started/quickstart',
  },

  // Developer Reference (handle both capitalized and lowercase versions)
  {
      from: '/developers/Reference/ai-resources',
      to: '/eigencloud/ai-resources',
  },
  {
      from: '/developers/Reference/avs-developer-best-practices',
      to: '/eigenlayer/developers/reference/avs-developer-best-practices',
  },
  {
      from: '/developers/Reference/eigenlayer-sdks',
      to: '/eigenlayer/developers/reference/eigenlayer-sdks',
  },
  {
      from: '/developers/Reference/resources',
      to: '/eigenlayer/developers/reference/resources',
  },
  
  // OPERATORS SECTION
  
  // Operator Concepts
  {
      from: '/operators/concepts/operator-introduction',
      to: '/eigenlayer/operators/concepts/operator-introduction',
  },
  {
      from: '/operators/concepts/operator-keys',
      to: '/eigenlayer/operators/concepts/operator-keys',
  },
  {
      from: '/operators/concepts/uam-for-operators',
      to: '/eigenlayer/operators/concepts/uam-for-operators',
  },
  
  // Operator HowTo
  {
      from: '/operators/howto/avs-operator-risks-mitigations-bp',
      to: '/eigenlayer/operators/howto/avs-operator-risks-mitigations-bp',
  },
  {
      from: '/operators/howto/claimrewards/batch-claim-rewards',
      to: '/eigenlayer/operators/howto/claimrewards/batch-claim-rewards',
  },
  {
      from: '/operators/howto/claimrewards/claim-rewards-cli',
      to: '/eigenlayer/operators/howto/claimrewards/claim-rewards-cli',
  },
  {
      from: '/operators/howto/claimrewards/claim-rewards-smart-contract',
      to: '/eigenlayer/operators/howto/claimrewards/claim-rewards-smart-contract',
  },
  {
      from: '/operators/howto/operator-installation',
      to: '/eigenlayer/operators/howto/registeroperators/operator-installation',
  },
  
  // Fix typo: confirgurerewards -> configurerewards (handles both old typo and corrected version)
  {
      from: '/operators/howto/confirgurerewards/rewards-snapshot-data',
      to: '/eigenlayer/operators/howto/configurerewards/rewards-snapshot-data',
  },
  {
      from: '/operators/howto/configurerewards/rewards-snapshot-data',
      to: '/eigenlayer/operators/howto/configurerewards/rewards-snapshot-data',
  },
  {
      from: '/operators/howto/confirgurerewards/set-pi-split',
      to: '/eigenlayer/operators/howto/configurerewards/set-pi-split',
  },
  {
      from: '/operators/howto/configurerewards/set-pi-split',
      to: '/eigenlayer/operators/howto/configurerewards/set-pi-split',
  },
  {
      from: '/operators/howto/confirgurerewards/set-rewards-claimer',
      to: '/eigenlayer/operators/howto/configurerewards/set-rewards-claimer',
  },
  {
      from: '/operators/howto/configurerewards/set-rewards-claimer',
      to: '/eigenlayer/operators/howto/configurerewards/set-rewards-claimer',
  },
  {
      from: '/operators/howto/confirgurerewards/set-rewards-split',
      to: '/eigenlayer/operators/howto/configurerewards/set-rewards-split',
  },
  {
      from: '/operators/howto/configurerewards/set-rewards-split',
      to: '/eigenlayer/operators/howto/configurerewards/set-rewards-split',
  },
  
  {
      from: '/operators/howto/managekeys/institutional-operators',
      to: '/eigenlayer/operators/howto/managekeys/institutional-operators',
  },
  {
      from: '/operators/howto/managekeys/solo-operators',
      to: '/',
  },
  {
      from: '/operators/howto/operator-content-guidelines',
      to: '/eigenlayer/operators/howto/operator-content-guidelines',
  },
  {
      from: '/operators/howto/operator-sets',
      to: '/eigenlayer/operators/howto/operator-sets',
  },
  {
      from: '/operators/howto/troubleshooting',
      to: '/eigenlayer/operators/howto/troubleshooting',
  },
  {
      from: '/operators/howto/uam/op-add-remove-admins',
      to: '/eigenlayer/operators/howto/uam/op-add-remove-admins',
  },
  {
      from: '/operators/howto/uam/op-add-remove-appointees',
      to: '/eigenlayer/operators/howto/uam/op-add-remove-appointees',
  },
  
  // Operator Reference
  {
      from: '/operators/reference/operator-faq',
      to: '/eigenlayer/operators/reference/operator-faq',
  },
  
  // RESTAKERS SECTION
  
  // Restaker Concepts
  {
    from: '/operators/howto/managekeys/solo-stakers',
    to: '/eigenlayer/operators/howto/managekeys/solo-stakers',
  },
  {
      from: '/restakers/concepts/native-restaking-withdrawal-delays',
      to: '/eigenlayer/restakers/concepts/native-restaking-withdrawal-delays',
  },
  {
      from: '/restakers/concepts/overview',
      to: '/eigenlayer/restakers/concepts/overview',
  },
  
  // Restaking Guides (comprehensive coverage of the 0-restaking-user-guide structure)
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/liquid-restaking/restake-lsts',
      to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/liquid-restaking/restake-lsts',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/liquid-restaking/withdraw-from-eigenlayer',
      to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/liquid-restaking/withdraw-from-eigenlayer',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/native-restaking',
      to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/native-restaking/',
  },
  {
    from: '/restakers/restaking-guides/restaking-user-guide/native-restaking',
    to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/native-restaking/',
  },
  {
    from: '/restakers/restaking-guides/overview',
    to: '/eigenlayer/restakers/concepts/overview'
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/restaker-delegation/delegate-to-an-operator',
      to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/restaker-delegation/delegate-to-an-operator',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/restaker-delegation/redelegation-process',
      to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/restaker-delegation/redelegation-process',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/restaker-delegation/undelegate-from-an-operator-and-initiate-withdrawal',
      to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/restaker-delegation/undelegate-from-an-operator-and-initiate-withdrawal',
  },
  {
      from: '/restakers/restaking-guides/1-restaking-developer-guide',
      to: '/eigenlayer/restakers/restaking-guides/restaking-developer-guide',
  },
  {
      from: '/restakers/restaking-guides/claim-rewards-app',
      to: '/eigenlayer/restakers/restaking-guides/claim-rewards-app',
  },
  {
      from: '/restakers/restaking-guides/testnet/1-restaking-developer-guide',
      to: '/eigenlayer/restakers/restaking-guides/testnet/restaking-developer-guide',
  },
  {
      from: '/restakers/restaking-guides/testnet',
      to: '/eigenlayer/restakers/restaking-guides/testnet/',
  },
  {
      from: '/restakers/restaking-guides/testnet/obtaining-testnet-eth-and-liquid-staking-tokens-lsts',
      to: '/eigenlayer/restakers/restaking-guides/testnet/obtaining-testnet-eth-and-liquid-staking-tokens-lsts',
  },
  {
    from: '/restakers/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/repointing-a-validators-withdrawal-credentials',
    to: '/eigenlayer/restakers/restaking-guides/restaking-user-guide/native-restaking/'
  },
  {
    from: '/developers/avs-developer-guide',
    to: '/eigenlayer/developers/concepts/avs-developer-guide'
  },

  //External references
  {
    from: '/developers/slashing-background',
    to: '/eigenlayer/developers/concepts/slashing/slashing-concept-developers'
  },
  {
    from: '/products/ai-resources',
    to: '/eigencloud/ai-resources'
  },
  {
    from: '/products/eigencompute/concepts/eigencompute-applications',
    to: '/eigencompute/get-started/sample-apps'
  },
  {
    from: '/products/eigencompute/sample-apps',
    to: '/eigencompute/get-started/sample-apps'
  },
  {
    from: '/products/eigencompute/eigencompute-overview',
    to: '/eigencompute/get-started/eigencompute-overview'
  },
  {
    from: '/products/eigencompute/get-started/quickstart',
    to: '/eigencompute/get-started/quickstart'
  },
  {
    from: '/products/eigencompute/howto/verify/verify-tee-signature',
    to: '/eigencompute/howto/operate/verify-trust-guarantees'
  },
  {
    from: '/products/eigenlayer/developers/howto/get-started/support',
    to: '/eigenlayer/developers/howto/get-started/support'
  },

  //Legal
  {
    from: '/products/legal/privacy-policy',
    to: '/eigencloud/legal/privacy-policy'
  },
  {
    from: '/products/legal/terms-of-service',
    to: '/eigencloud/legal/terms-of-service'
  },
  {
     from: '/products/eigenlayer/legal/acceptable-use-policy',
     to: '/eigencloud/legal/acceptable-use-policy'
  },
  {
     from: '/products/eigenlayer/legal/disclosures',
     to: '/eigencloud/legal/disclosures'
  },
  {
     from: '/products/eigenlayer/legal/privacy-policy',
     to: '/eigencloud/legal/privacy-policy'
  },
  {
     from: '/products/eigenlayer/legal/terms-of-service',
     to: '/eigencloud/legal/terms-of-service'
  },
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EigenCloud",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.eigencloud.xyz/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "layr-labs", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Added this to help with redirects but not working
  //trailingSlash: false,

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
          const contentDir = path.join(siteDir, "docs");
          const developersDir = path.join(siteDir, "docs/eigenlayer/developers")
          const operatorsDir = path.join(siteDir, "docs/eigenlayer/operators")
          const eigenDADir = path.join(siteDir, "docs/eigenda")
          const allMd = [];
          const developersMd = []
          const operatorsMd = []
          const eigenDAMd = []

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
          await getMdxFiles(eigenDADir, eigenDAMd);
          return { allMd , developersMd, operatorsMd, eigenDAMd};
        },
        postBuild: async ({ content, routes, outDir }) => {
          const { allMd, developersMd, operatorsMd, eigenDAMd } = content;

          // Write concatenated Markdown content to build output directory (so they're accessible in production)
          await fs.promises.writeFile(path.join(outDir, "llms-full.md"), allMd.join("\n\n---\n\n"));
          await fs.promises.writeFile(path.join(outDir, "avs-developer-docs.md"), developersMd.join("\n\n---\n\n"));
          await fs.promises.writeFile(path.join(outDir, "operators-developer-docs.md"), operatorsMd.join("\n\n---\n\n"));
          await fs.promises.writeFile(path.join(outDir, "eigenda-docs.md"), eigenDAMd.join("\n\n---\n\n"));

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
            fs.writeFileSync(path.join(outDir, "llms.txt"), llmsTxt);
          } catch (err) {
            throw err;
          }
        },
      };
    },
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects,

        createRedirects(existingPath) {
              if (existingPath === '/eigencompute/get-started/quickstart') {
                return ['/products/eigencompute/quickstart'];
              }
              const folderMoves = [
                ['/products/eigencompute/', '/eigencompute/'],
                ['/products/eigencloud/', '/eigencloud/'],
                ['/products/eigenda/', '/eigenda/'],
                ['/products/eigenlayer/', '/eigenlayer/'],
              ];

              for (const [oldDir, newDir] of folderMoves) {
                // When Docusaurus generates the new path (e.g. /eigenai/foo)
                // create a redirect from the old one (/products/eigenai/foo)
                if (existingPath.startsWith(newDir)) {
                  return [existingPath.replace(newDir, oldDir)];
                }
              }

              return undefined;
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
      image: 'img/eigen-logo-horizontal.svg',
      navbar: {
      //  title: "Home",
        logo: {
          alt: "EigenLayer Logo",
          src: "img/eigen-logo-horizontal.svg",
          srcDark: "img/eigen-logo-horizontal.svg",
        },
        items: [
          {
             to: "eigencloud/eigencloud-overview",
             label: "EigenCloud",
             position: "left",
             activeBasePath: 'eigencloud',
          },
          {
            to: "agentkit/get-started/agentkit-overview",
            label: "AgentKit",
            position: "left",
            activeBasePath: 'agentkit',
          },
          {
            to: "eigencompute/get-started/eigencompute-overview",
            label: "EigenCompute",
            position: "left",
            activeBasePath: 'eigencompute',
          },
          {
            to: "eigenlayer/concepts/eigenlayer-overview",
            label: "EigenLayer",
            position: "left",
            activeBasePath: 'eigenlayer',
          },
          {
            to: "eigenda/core-concepts/overview",
            label: "EigenDA",
            position: "left",
            activeBasePath: 'eigenda',
          },
          {
            href: "https://github.com/Layr-Labs/eigencloud-docs",
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
            title: "EigenCloud",
            items: [
              {
                label: "About",
                href: "https://www.eigencloud.xyz/",
              },
              {
                label: "Privacy Policy",
                href: "https://docs.eigencloud.xyz/eigencloud/legal/privacy-policy",
              },
              {
                label: "Terms of Service",
                href: "https://docs.eigencloud.xyz/eigencloud/legal/terms-of-service",
              },
              {
                label: "Disclaimers",
                href: "https://docs.eigencloud.xyz/eigencloud/legal/disclaimers",
              },
              {
                label: "Acceptable Use Policy",
                href: "https://docs.eigencloud.xyz/eigencloud/legal/acceptable-use-policy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Support",
                href: "https://docs.eigencloud.xyz/products/eigenlayer/developers/howto/get-started/support",
              },
              {
                label: "Forum",
                href: "https://forum.eigenlayer.xyz/",
              },
              {
                label: "Telegram",
                href: "https://t.me/EigenCloudSupp",
              },
              {
                label: "X",
                href: "https://twitter.com/eigencloud",
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
          hideable: false,
          autoCollapseCategories: false,
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
      src: '/js/plain.js',
      async: true,
    },
    // Cookie3 Analytics
    {
      src: '/js/cookie3.js',
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