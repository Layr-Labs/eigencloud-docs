# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus 3.8.1-based documentation site for EigenCloud, containing multiple product documentation sections including EigenCloud, AgentKit, EigenCompute, EigenLayer, and EigenDA. The site is statically generated and deployed on Vercel.

## Build & Development Commands

```bash
# Install dependencies (Yarn 1.22.22+ required)
yarn

# Start local development server (opens browser at http://localhost:3000)
yarn start

# Build for production
yarn build

# Test the production build locally
yarn serve

# Build without repomix (faster, skips external repo aggregation)
yarn build-docusaurus

# Clear Docusaurus cache and generated files
yarn clear

# Type check TypeScript files
yarn typecheck

# Check external links in documentation
yarn check-links

# Test redirects locally
make test-redirects
```

## Architecture

### Documentation Structure

The site uses auto-generated sidebars from the `docs/` folder structure:
- `docs/eigencloud/` - EigenCloud overview and legal documentation
- `docs/agentkit/` - AgentKit product documentation
- `docs/eigencompute/` - EigenCompute product documentation
- `docs/eigenlayer/` - Core EigenLayer protocol documentation (developers, operators, restakers)
- `docs/eigenda/` - EigenDA data availability documentation

Each top-level directory corresponds to a sidebar defined in `sidebars.js`.

### Key Configuration Files

- **`docusaurus.config.js`**: Main Docusaurus configuration including:
  - Site metadata and deployment settings
  - Plugin configuration (redirects, search, gtag analytics)
  - Navbar and footer structure
  - Theme configuration and styling
  - Custom `llms-txt-plugin` that generates concatenated markdown files for LLM consumption
  - Extensive redirect rules (400+ redirects) mapping old paths to new structure
  
- **`sidebars.js`**: Defines sidebar structure for each product section using auto-generated directories

- **`package.json`**: Dependencies and scripts. Note the `build` script runs `repomix` before building.

### Custom Plugins

The site includes a custom `pluginLlmsTxt` that:
- Recursively reads all `.md` and `.mdx` files from specific documentation directories
- Generates aggregated markdown files in the build output:
  - `llms-full.md` - All documentation
  - `avs-developer-docs.md` - EigenLayer developers docs only
  - `operators-developer-docs.md` - Operators docs only
  - `eigenda-docs.md` - EigenDA docs only
  - `llms.txt` - Document index with titles and descriptions

### Repomix Integration

The `run-repomix.js` script fetches and processes external repositories into markdown files stored in `static/`:
- `eigenlayer-contracts.md` from github.com/Layr-Labs/eigenlayer-contracts
- `eigenlayer-go-sdk.md` from github.com/Layr-Labs/eigensdk-go
- `eigenx.md` from github.com/Layr-Labs/eigenx-cli
- `devkit.md` from github.com/Layr-Labs/devkit-cli

This runs automatically during `yarn build` but can be skipped with `yarn build-docusaurus`.

### Custom Components

Custom React components in `src/components/`:
- **Card components**: `Card.js`, `CommunityCard.js`, `FigmaCard.js`, `InteractiveCard.js`
- **UI elements**: `Button.js`, `SectionHeader.js`
- **Utilities**: `CopyToClipboard.js`, `InteractiveDemo.js`
- **CopyMarkdownButton**: Component for copying markdown content
- **sections/**: Various section-specific components

### Redirects

The site has 400+ redirect rules in `docusaurus.config.js` to maintain URL stability during documentation restructuring. Major redirect patterns:
- `/products/<product>/` → `/<product>/` (flattening structure)
- `/developers/` → `/eigenlayer/developers/`
- `/operators/` → `/eigenlayer/operators/`
- `/restakers/` → `/eigenlayer/restakers/`
- Case normalization (e.g., `/developers/Concepts/` → `/eigenlayer/developers/concepts/`)

Additional client-side redirects are handled by JavaScript files in `static/js/`.

### Markdown Features

The site supports:
- **Mermaid diagrams**: Enabled via `@docusaurus/theme-mermaid`
- **Math equations**: Using `remark-math` and `rehype-katex` (KaTeX CSS loaded from CDN)
- **GitHub Flavored Markdown**: Via `remark-gfm`
- **MDX components**: React components can be imported and used in `.mdx` files

### Search

Local search is implemented using `@easyops-cn/docusaurus-search-local` plugin, indexing all docs with English language support.

### Analytics

- Google Analytics via `@docusaurus/plugin-google-gtag` (tracking ID: G-EQG5VRNYHQ)
- Plain.js analytics script
- Cookie3 analytics integration

## Documentation Conventions

- All documentation files use frontmatter with `title` and optional `sidebar_position`
- Routes are based on file paths within the `docs/` directory
- The docs route base path is `/` (not `/docs`)
- Broken links and broken markdown links throw errors during build (`onBrokenLinks: "throw"`)

## Common Workflows

### Adding New Documentation

1. Create `.md` or `.mdx` file in appropriate `docs/<product>/` directory
2. Add frontmatter with `title` and optional `sidebar_position`
3. Sidebar updates automatically based on file structure
4. Test locally with `yarn start`

### Adding Redirects

1. Add redirect rule to `redirects` array in `docusaurus.config.js`
2. Test with `make test-redirects` (uses `ci-scripts/test_redirects_local.sh`)
3. Verify during build that no redirect loops exist

### Updating External Repository Documentation

1. Modify repository URLs or output filenames in `run-repomix.js`
2. Run `yarn repomix` to regenerate files
3. Generated files appear in `static/` directory

## SDK Reference Documentation

### ECloud SDK Reference

The ecloud SDK reference documentation (`docs/eigencompute/reference/ecloud-sdk/`) uses a **hybrid approach**:
- Auto-generated structure from source repository analysis
- Manual curation of examples and best practices

**Source Repository:** https://github.com/Layr-Labs/ecloud

**When SDK Updates:**
1. Analyze the ecloud repository to identify API changes
2. Update reference docs with new methods/deprecations
3. Update version number in documentation frontmatter
4. Test and update code examples

**Documentation Structure:**
```
docs/eigencompute/reference/ecloud-sdk/
├── index.md           # Overview + getting started
├── client.md          # Client creation & config
├── compute/           # Compute module APIs
├── billing.md         # Billing & subscriptions
├── build.md           # Verifiable builds
├── attest.md          # TEE attestation
├── browser.md         # Browser APIs & React hooks
├── utilities.md       # SDK utilities
├── types.md           # TypeScript types
└── advanced.md        # Advanced topics (EIP-7702, batching)
```

**Maintenance Notes:**
- Mark auto-generated sections with: `<!-- AUTO-GENERATED from ecloud@v0.X.X -->`
- Link to source code for reference: `[View source](https://github.com/...)`
- Keep examples runnable and test with SDK updates

**IMPORTANT - Exclude Internal Features:**
- **`sepolia-dev` environment** - Internal development only, do NOT document
- Any methods/features marked as internal in source code
- When updating docs from source, always filter out internal-only items

**Environment Information:**
- **`sepolia`** - Public testnet for development and testing
  - Prerequisites: EigenCompute subscription + Sepolia ETH for gas
- **`mainnet-alpha`** - Production environment (Alpha phase)
  - Prerequisites: EigenCompute subscription + mainnet ETH for gas
  
**Both environments require:**
- EigenCompute subscription (see `docs/eigencompute/get-started/billing.md`)
- Complete prerequisites (see `docs/eigencompute/get-started/quickstart.md#prerequisites`)

## Documentation Patterns for New Features

When documenting new EigenLayer protocol features, follow the **minimal documentation pattern** used for Rewards v2.2 and Duration Vaults:

### Pattern: Minimal Feature Documentation

**Follow this approach for specialized features (not core protocol changes):**

1. **Update existing overview** (`docs/eigenlayer/concepts/eigenlayer-overview.md`)
   - Add bullet point to core components list with brief description
   - Link to dedicated concept page
   - Do NOT add large sections - keep overview proportional

2. **Create dedicated concept page** (`docs/eigenlayer/concepts/feature-name.md`)
   - Full explanation (~300-400 words)
   - Include ELIP references in `:::note` block
   - How it works, comparison tables, when to use
   - Supported configurations/tokens
   - Important warnings in `:::important` blocks

3. **Add brief mention to relevant audience overview** (if applicable)
   - For staker features: `docs/eigenlayer/restakers/concepts/overview.md`
   - For operator features: `docs/eigenlayer/operators/concepts/operator-introduction.md`
   - For developer features: `docs/eigenlayer/developers/concepts/avs-developer-guide.md`
   - Brief (~50 word) description with link to contract docs or concept page
   - Not all features need audience-specific mentions - only if directly relevant

4. **Create developer how-to guide** (if applicable)
   - Location: `docs/eigenlayer/developers/howto/build/feature-name.md`
   - When to use, lifecycle, supported options
   - Link to contract documentation for implementation details
   - **Do NOT include code examples** - link to contract docs instead

**Precedents:**
- **Rewards v2.2** - Added via 2 file updates (PR #257)
- **Duration Vaults** - Added via 2 file updates + 2 new concept/how-to files

**Key principles:**
- Specialized features get dedicated concept pages, not large sections in overview
- Link to contract documentation for technical implementation details
- Keep code examples in contract repos, not user-facing docs
- Use comparison tables to explain vs. existing approaches
- Always reference relevant ELIPs

**File structure for specialized features:**
```
docs/eigenlayer/
├── concepts/
│   ├── eigenlayer-overview.md (bullet point mention only)
│   └── feature-name.md (dedicated page)
├── restakers/concepts/
│   └── overview.md (brief mention if relevant)
└── developers/howto/build/
    └── feature-name.md (how-to guide, links to contract docs)
```

## Important Notes

- Yarn version must be >= 1.22.22 (specified in `package.json` engines)
- The build process requires Node.js with ES modules support (uses `import` syntax in config)
- Environment variables can be loaded via `.env` file (see `.env.example`)
- TypeScript is configured but primarily for editor experience; most code is JavaScript
- The site uses Prism for syntax highlighting with Bash and Solidity language support
