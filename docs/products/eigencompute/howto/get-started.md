---
title: Get Started with EigenCompute
sidebar_position: 1
---

import InteractiveDemo from '@site/src/components/InteractiveDemo';

<a href="https://onboarding.eigencloud.xyz/?utm_source=docs&utm_content=eigencompute_overview" className="onboardingButton" target="_blank" rel="noopener noreferrer">
  <span>Request Onboarding Access</span>
</a>

:::important Allow List
While in Alpha, an allowlisted account is required to create apps. To allowlist an address: 
1. Use an existing address with `eigenx auth login`, or generate a new address with `eigenx auth generate`.
2. Submit an onboarding request using the button above.
:::

To build on EigenCompute:

1. Place your application in a Docker container.
2. Upload it to EigenCompute using the EigenX CLI.

It's that simple to ship a verifiable application.

### Try It Out

<InteractiveDemo
steps={[
{
command: 'eigenx app create my-trading-bot typescript',
output: [
'🚀 Creating app from typescript template...',
'✅ Created my-trading-bot/',
'✅ Generated index.ts',
'✅ Added package.json',
'✅ Created Dockerfile for TEE deployment',
'',
'cd my-trading-bot'
]
},
{
command: 'cat index.ts',
output: [
'import { mnemonicToAccount } from "viem/accounts"',
'',
'// Access your app\'s wallet',
'const wallet = mnemonicToAccount(process.env.MNEMONIC)',
'',
'console.log("Address:", wallet.address)',
'',
'// Now your app can:',
'// - Hold funds autonomously',
'// - Sign transactions and messages',
'// - Interact with any blockchain'
]
},
{
command: 'eigenx app deploy',
output: [
'🏗️  Building Docker image...',
'   ✓ Built: my-trading-bot:latest',
'',
'📤 Pushing to registry...',
'   ✓ Pushed: docker.io/my-trading-bot:latest',
'',
'⛓️  Submitting to blockchain...',
'   ✓ Transaction confirmed',
'',
'🚀 Deploying to TEE...',
'   ✓ Instance provisioned',
'   ✓ Running in Intel TDX',
'',
'✅ Deployment complete!',
'   App Name: my-trading-bot',
'   Docker Digest: sha256:4f6c2b3a...',
'Wallet Addresses:',
'   Ethereum: 0xa4Cae7029dfe122866F479E3b6eFb88dA3b35aea',
'   Solana: 6Xu2q4nifx9pfdwLtvAHSfGnXhXUJhnjWqcDhfhT1vpY',
]
}
]}
completionMessage="🎉 That's it! Your app is deployed with its own wallet."
ctaButton={{ text: 'Deploy Your Own →', href: '/products/eigencompute/quickstart' }}
/>

## Next

For detailed instructions, try the [quickstart](../get-started/quickstart.md) or see the [EigenX CLI documentation](https://github.com/Layr-Labs/eigenx-cli).