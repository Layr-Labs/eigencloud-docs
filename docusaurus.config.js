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
      to: '/products/eigenlayer/concepts/eigenlayer-overview',
  },
  {
      from: '/eigenlayer/concepts/whitepaper',
      to: '/products/eigenlayer/concepts/whitepaper',
  },
  {
      from: '/developers/concepts/eigenlayer-contracts/core-contracts',
      to: '/products/eigenlayer/developers/concepts/eigenlayer-contracts/core-contracts',
  },
  {
      from: '/developers/concepts/eigenlayer-contracts/middleware-contracts',
      to: '/products/eigenlayer/developers/concepts/eigenlayer-contracts/middleware-contracts',
  },
  {
      from: '/eigenlayer/deployed-contracts',
      to: '/products/eigenlayer/developers/concepts/eigenlayer-contracts/deployed-contracts',
  },
  {
      from: '/restakers/restaking-guides/restaking-developer-guide',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-developer-guide',
  },
  {
      from: '/eigenlayer/concepts/keys-and-signatures',
      to: '/products/eigenlayer/concepts/keys-and-signatures',
  },
  {
      from: '/eigenlayer/concepts/key-terms',
      to: '/products/eigenlayer/concepts/key-terms',
  },
  {
      from: '/eigenlayer/concepts/operator-sets/allocation-deallocation',
      to: '/products/eigenlayer/concepts/operator-sets/allocation-deallocation',
  },
  {
      from: '/eigenlayer/concepts/operator-sets/operator-sets-concept',
      to: '/products/eigenlayer/concepts/operator-sets/operator-sets-concept',
  },
  {
      from: '/eigenlayer/concepts/operator-sets/strategies-and-magnitudes',
      to: '/products/eigenlayer/concepts/operator-sets/strategies-and-magnitudes',
  },
  
  // Rewards
  {
      from: '/eigenlayer/concepts/rewards/earners-claimers-recipients',
      to: '/products/eigenlayer/concepts/rewards/earners-claimers-recipients',
  },
  {
      from: '/eigenlayer/concepts/rewards/pi-split',
      to: '/products/eigenlayer/concepts/rewards/pi-split',
  },
  {
      from: '/eigenlayer/concepts/rewards/rewards-claiming-faq',
      to: '/products/eigenlayer/concepts/rewards/rewards-claiming-faq',
  },
  {
      from: '/eigenlayer/concepts/rewards/rewards-claiming',
      to: '/products/eigenlayer/concepts/rewards/rewards-claiming',
  },
  {
      from: '/eigenlayer/concepts/rewards/rewards-concept',
      to: '/products/eigenlayer/concepts/rewards/rewards-concept',
  },
  {
      from: '/eigenlayer/concepts/rewards/rewards-split',
      to: '/products/eigenlayer/concepts/rewards/rewards-split',
  },
  {
      from: '/eigenlayer/concepts/rewards/rewards-submission',
      to: '/products/eigenlayer/concepts/rewards/rewards-submission',
  },
  
  // Slashing
  {
      from: '/eigenlayer/concepts/slashing/magnitudes-when-slashed',
      to: '/products/eigenlayer/concepts/slashing/magnitudes-when-slashed',
  },
  {
      from: '/eigenlayer/concepts/slashing/redistribution',
      to: '/products/eigenlayer/concepts/slashing/redistribution',
  },
  {
      from: '/eigenlayer/concepts/slashing/safety-delays-concept',
      to: '/products/eigenlayer/concepts/slashing/safety-delays-concept',
  },
  {
      from: '/eigenlayer/concepts/slashing/slashable-stake-risks',
      to: '/products/eigenlayer/concepts/slashing/slashable-stake-risks',
  },
  {
      from: '/eigenlayer/concepts/slashing/slashing-concept',
      to: '/products/eigenlayer/concepts/slashing/slashing-concept',
  },
  {
      from: '/eigenlayer/concepts/slashing/unique-stake',
      to: '/products/eigenlayer/concepts/slashing/unique-stake',
  },
  
  // UAM (User Access Management)
  {
      from: '/eigenlayer/concepts/uam/uam-accounts',
      to: '/products/eigenlayer/concepts/uam/uam-accounts',
  },
  {
      from: '/eigenlayer/concepts/uam/uam-admins',
      to: '/products/eigenlayer/concepts/uam/uam-admins',
  },
  {
      from: '/eigenlayer/concepts/uam/uam-appointees',
      to: '/products/eigenlayer/concepts/uam/uam-appointees',
  },
  {
      from: '/eigenlayer/concepts/uam/user-access-management',
      to: '/products/eigenlayer/concepts/uam/user-access-management',
  },
  
  // Economy -> Reference
  {
      from: '/eigenlayer/economy/economy-calculation-and-formulas',
      to: 'products/eigenlayer/reference/economy/economy-calculation-and-formulas',
  },
  {
      from: '/eigenlayer/economy/sidecar',
      to: '/products/eigenlayer/reference/economy/sidecar',
  },
  
  // Legal
  {
      from: '/eigenlayer/legal/disclaimers',
      to: '/products/eigenlayer/legal/disclaimers',
  },
  {
      from: '/eigenlayer/legal/privacy-policy',
      to: '/products/eigenlayer/legal/privacy-policy',
  },
  {
      from: '/eigenlayer/legal/terms-of-service',
      to: '/products/eigenlayer/legal/terms-of-service',
  },
  
  // Overview -> Concepts (additional mappings)
  {
      from: '/eigenlayer/overview/key-terms',
      to: '/products/eigenlayer/concepts/key-terms',
  },
  {
      from: '/eigenlayer/overview/support',
      to: '/products/eigenlayer/support',
  },
  
  // Reference
  {
      from: '/eigenlayer/reference/allocation-manager-interface',
      to: '/products/eigenlayer/concepts/operator-sets/allocation-deallocation',
  },
  {
      from: '/eigenlayer/reference/safety-delays-reference',
      to: '/products/eigenlayer/reference/safety-delays-reference',
  },
  
  // Resources -> Reference
  {
      from: '/eigenlayer/resources/apis-and-dashboards',
      to: '/products/eigenlayer/reference/apis-and-dashboards',
  },
  {
      from: '/eigenlayer/resources/infinite-hackathon',
      to: '/',
  },
  {
      from: '/eigenlayer/resources/learning-resources',
      to: '/products/eigenlayer/reference/learning-resources',
  },
  
  // Top-level files
  {
      from: '/eigenlayer/releases',
      to: '/products/eigenlayer/releases',
  },
  {
      from: '/eigenlayer/roadmap',
      to: '/get-started/eigencloud-roadmap',
  },
  
  // Security
  {
      from: '/eigenlayer/security/audits',
      to: '/products/eigenlayer/security/audits',
  },
  {
      from: '/eigenlayer/security/bug-bounty',
      to: '/products/eigenlayer/security/bug-bounty',
  },
  {
      from: '/eigenlayer/security/guardrails',
      to: '/products/eigenlayer/security/guardrails',
  },
  {
      from: '/eigenlayer/security/multisig-governance',
      to: '/products/eigenlayer/security/multisig-governance',
  },
  {
      from: '/eigenlayer/security/slashing-delay',
      to: '/products/eigenlayer/security/slashing-delay',
  },
  {
      from: '/eigenlayer/security/withdrawal-delay',
      to: '/products/eigenlayer/security/withdrawal-delay',
  },
  
  // DEVELOPERS SECTION
  
  // Developer Concepts (handle both capitalized and lowercase versions)
  {
      from: '/developers/Concepts/avs-contracts',
      to: '/products/eigenlayer/developers/concepts/avs-contracts',
  },
  {
      from: '/developers/Concepts/avs-developer-guide',
      to: '/products/eigenlayer/developers/concepts/avs-developer-guide',
  },
  {
      from: '/developers/Concepts/avs-keys',
      to: '/products/eigenlayer/developers/concepts/avs-keys',
  },
  {
      from: '/developers/Concepts/avs-security-models',
      to: '/products/eigenlayer/developers/concepts/avs-security-models',
  },
  {
      from: '/developers/Concepts/slashing/slashing-concept-developers',
      to: '/products/eigenlayer/developers/concepts/slashing/slashing-concept-developers',
  },
  {
      from: '/developers/Concepts/task',
      to: '/products/eigenlayer/developers/concepts/task',
  },
  {
      from: '/developers/Concepts/uam-for-avs',
      to: '/products/eigenlayer/developers/concepts/uam-for-avs',
  },
  
  // Developer HowTo (handle both capitalized and lowercase versions)
  {
      from: '/developers/HowTo/deployment-testnet-mainnet',
      to: '/products/eigenlayer/developers/howto/deploy/deployment-testnet-mainnet',
  },
  {
      from: '/developers/HowTo/get-started/implement-minimum-onchain-components',
      to: '/products/eigenlayer/developers/howto/get-started/implement-minimum-onchain-components',
  },
  {
      from: '/developers/HowTo/get-started/quickstart',
      to: '/products/eigenlayer/developers/howto/get-started/quickstart',
  },
  {
      from: '/developers/HowTo/get-started/support',
      to: '/products/eigenlayer/developers/howto/get-started/support',
  },
  {
      from: '/developers/HowTo/publish/onboard-avs-dashboard',
      to: '/products/eigenlayer/developers/howto/publish/onboard-avs-dashboard',
  },
  {
      from: '/developers/HowTo/test/obtain-testnet-eth',
      to: '/products/eigenlayer/developers/howto/test/obtain-testnet-eth',
  },
  {
      from: '/developers/HowTo/test/test-avs',
      to: '/products/eigenlayer/developers/howto/test/test-avs',
  },
  
  // Developer Reference (handle both capitalized and lowercase versions)
  {
      from: '/developers/Reference/ai-resources',
      to: '/products/eigenlayer/developers/reference/ai-resources',
  },
  {
      from: '/developers/Reference/avs-developer-best-practices',
      to: '/products/eigenlayer/developers/reference/avs-developer-best-practices',
  },
  {
      from: '/developers/Reference/eigenlayer-sdks',
      to: '/products/eigenlayer/developers/reference/eigenlayer-sdks',
  },
  {
      from: '/developers/Reference/resources',
      to: '/products/eigenlayer/developers/reference/resources',
  },
  
  // OPERATORS SECTION
  
  // Operator Concepts
  {
      from: '/operators/concepts/operator-introduction',
      to: '/products/eigenlayer/operators/concepts/operator-introduction',
  },
  {
      from: '/operators/concepts/operator-keys',
      to: '/products/eigenlayer/operators/concepts/operator-keys',
  },
  {
      from: '/operators/concepts/uam-for-operators',
      to: '/products/eigenlayer/operators/concepts/uam-for-operators',
  },
  
  // Operator HowTo
  {
      from: '/operators/howto/avs-operator-risks-mitigations-bp',
      to: '/products/eigenlayer/operators/howto/avs-operator-risks-mitigations-bp',
  },
  {
      from: '/operators/howto/claimrewards/batch-claim-rewards',
      to: '/products/eigenlayer/operators/howto/claimrewards/batch-claim-rewards',
  },
  {
      from: '/operators/howto/claimrewards/claim-rewards-cli',
      to: '/products/eigenlayer/operators/howto/claimrewards/claim-rewards-cli',
  },
  {
      from: '/operators/howto/claimrewards/claim-rewards-smart-contract',
      to: '/products/eigenlayer/operators/howto/claimrewards/claim-rewards-smart-contract',
  },
  
  // Fix typo: confirgurerewards -> configurerewards (handles both old typo and corrected version)
  {
      from: '/operators/howto/confirgurerewards/rewards-snapshot-data',
      to: '/products/eigenlayer/operators/howto/configurerewards/rewards-snapshot-data',
  },
  {
      from: '/operators/howto/configurerewards/rewards-snapshot-data',
      to: '/products/eigenlayer/operators/howto/configurerewards/rewards-snapshot-data',
  },
  {
      from: '/operators/howto/confirgurerewards/set-pi-split',
      to: '/products/eigenlayer/operators/howto/configurerewards/set-pi-split',
  },
  {
      from: '/operators/howto/configurerewards/set-pi-split',
      to: '/products/eigenlayer/operators/howto/configurerewards/set-pi-split',
  },
  {
      from: '/operators/howto/confirgurerewards/set-rewards-claimer',
      to: '/products/eigenlayer/operators/howto/configurerewards/set-rewards-claimer',
  },
  {
      from: '/operators/howto/configurerewards/set-rewards-claimer',
      to: '/products/eigenlayer/operators/howto/configurerewards/set-rewards-claimer',
  },
  {
      from: '/operators/howto/confirgurerewards/set-rewards-split',
      to: '/products/eigenlayer/operators/howto/configurerewards/set-rewards-split',
  },
  {
      from: '/operators/howto/configurerewards/set-rewards-split',
      to: '/products/eigenlayer/operators/howto/configurerewards/set-rewards-split',
  },
  
  {
      from: '/operators/howto/managekeys/institutional-operators',
      to: '/products/eigenlayer/operators/howto/managekeys/institutional-operators',
  },
  {
      from: '/operators/howto/managekeys/solo-operators',
      to: '/',
  },
  {
      from: '/operators/howto/operator-content-guidelines',
      to: '/products/eigenlayer/operators/howto/operator-content-guidelines',
  },
  {
      from: '/operators/howto/operator-installation',
      to: '/products/eigenlayer/operators/howto/operator-installation',
  },
  {
      from: '/operators/howto/operator-sets',
      to: '/products/eigenlayer/operators/howto/operator-sets',
  },
  {
      from: '/operators/howto/troubleshooting',
      to: '/products/eigenlayer/operators/howto/troubleshooting',
  },
  {
      from: '/operators/howto/uam/op-add-remove-admins',
      to: '/products/eigenlayer/operators/howto/uam/op-add-remove-admins',
  },
  {
      from: '/operators/howto/uam/op-add-remove-appointees',
      to: '/products/eigenlayer/operators/howto/uam/op-add-remove-appointees',
  },
  
  // Operator Reference
  {
      from: '/operators/reference/operator-faq',
      to: '/products/eigenlayer/operators/reference/operator-faq',
  },
  
  // RESTAKERS SECTION
  
  // Restaker Concepts
  {
    from: '/operators/howto/managekeys/solo-stakers',
    to: '/products/eigenlayer/operators/howto/managekeys/solo-stakers',
  },
  {
      from: '/restakers/concepts/native-restaking-withdrawal-delays',
      to: '/products/eigenlayer/restakers/concepts/native-restaking-withdrawal-delays',
  },
  {
      from: '/restakers/concepts/overview',
      to: '/products/eigenlayer/restakers/concepts/overview',
  },
  
  // Restaking Guides (comprehensive coverage of the 0-restaking-user-guide structure)
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/liquid-restaking/restake-lsts',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-user-guide/liquid-restaking/restake-lsts',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/liquid-restaking/withdraw-from-eigenlayer',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-user-guide/liquid-restaking/withdraw-from-eigenlayer',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/native-restaking',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-user-guide/native-restaking/',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/restaker-delegation/delegate-to-an-operator',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-user-guide/restaker-delegation/delegate-to-an-operator',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/restaker-delegation/redelegation-process',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-user-guide/restaker-delegation/redelegation-process',
  },
  {
      from: '/restakers/restaking-guides/0-restaking-user-guide/restaker-delegation/undelegate-from-an-operator-and-initiate-withdrawal',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-user-guide/restaker-delegation/undelegate-from-an-operator-and-initiate-withdrawal',
  },
  {
      from: '/restakers/restaking-guides/1-restaking-developer-guide',
      to: '/products/eigenlayer/restakers/restaking-guides/restaking-developer-guide',
  },
  {
      from: '/restakers/restaking-guides/claim-rewards-app',
      to: '/products/eigenlayer/restakers/restaking-guides/claim-rewards-app',
  },
  {
      from: '/restakers/restaking-guides/testnet/1-restaking-developer-guide',
      to: '/products/eigenlayer/restakers/restaking-guides/testnet/restaking-developer-guide',
  },
  {
      from: '/restakers/restaking-guides/testnet',
      to: '/products/eigenlayer/restakers/restaking-guides/testnet/',
  },
  {
      from: '/restakers/restaking-guides/testnet/obtaining-testnet-eth-and-liquid-staking-tokens-lsts',
      to: '/products/eigenlayer/restakers/restaking-guides/testnet/obtaining-testnet-eth-and-liquid-staking-tokens-lsts',
  }
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
        redirects,
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