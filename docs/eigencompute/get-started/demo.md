---
title: See Quickstart in Action
sidebar_position: 1
---

import InteractiveDemo from '@site/src/components/InteractiveDemo';

To build on EigenCompute:

1. Place your application in a Docker container.
2. Upload it to EigenCompute using the EigenX CLI.

It's that simple to ship a verifiable application.

### See for yourself

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
ctaButton={{ text: 'Deploy Your Own →', href: '/products/eigencompute/get-started/quickstart' }}
/>

## Next

For detailed instructions, try the [quickstart](quickstart.md) or see detailed docs on how to [create an EigenCompute app from a template](../howto/build/create-app-from-template.md).