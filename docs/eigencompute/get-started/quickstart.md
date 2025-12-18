---
title: Quickstart
sidebar_position: 1
---

import InteractiveDemo from '@site/src/components/InteractiveDemo';

To build on EigenCompute:

1. Place your application in a Docker container.
2. [Subscribe to EigenCompute](billing.md). All new customers receive a $100 credit.
3. Upload it to EigenCompute using the `ecloud` CLI.

It's that simple to ship a verifiable application.

### See for yourself

<InteractiveDemo
steps={[

{
command: 'ecloud compute app create --name my-trading-bot --language typescript',
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
command: 'cat src/index.ts',
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
command: 'ecloud compute app deploy',
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

Get started with `ecloud` CLI and deploy your first verifiable application to a Trusted Execution Environment (TEE) in minutes.

## Prerequisites

Before you begin, ensure you have:

- **Docker** - To package and publish application images ([Download](https://www.docker.com/get-started/))
- **Testnet or Mainnet ETH** - For deployment transactions

## Installation

```bash
npm install -g @layr-labs/ecloud-cli
```

## Initial Setup

### Docker Login

First, log in to your Docker registry. This is required to push your application images:

```bash
docker login
```

### Authenticate with EigenCloud

You have two options for authentication:

#### Option 1: Use an Existing Private Key

```bash
ecloud auth login
```

This command will prompt you to enter your private key and store it securely in your OS keyring.

#### Option 2: Generate a New Private Key

```bash
ecloud auth generate --store
```

This generates a new private key and stores it securely.

### Get Testnet Funds

Check your wallet address:

```bash
ecloud auth whoami
```

```
Address: 0x9431Cf5DA0CE60664661341db650763B08286B18
Source:  stored credentials
```

The current environment (Mainnet or Sepolia testnet) is displayed.  To change from Mainnet to Sepolia, use `ecloud compute env set sepolia`.

:::tip Developing on Sepolia
To get testnet ETH, use:
- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- [Alchemy Faucet](https://sepoliafaucet.com/)
  :::

## Create & Deploy Your First App

### Create a New Application

Create a new application from a template. Choose from: `typescript`, `python`, `golang`, or `rust`

```bash
ecloud compute app create --name my-app --language typescript --template-repo minimal
cd my-app
```

This creates a new project with:
- Application code from the template
- A `Dockerfile` configured for TEE deployment
- An `.env.example` file for environment variables

Templates include:

1. TEE-Ready Dockerfile. Pre-configured to:
  - Target `linux/amd64` architecture.
  - Run as root user (required for TEE).
  - Include necessary system dependencies.

2. Environment Variable Handling. Access to:
  - `MNEMONIC` - Auto-generated wallet mnemonic.
  - Custom environment variables from `.env`.

3. Example Code. Demonstrates:
  - Accessing the TEE mnemonic.
  - Creating wallet accounts.
  - Making onchain transactions.
  - Environment variable usage.

4. Development Setup. Includes:
  - Local development instructions.
  - Testing guidelines.
  - Deployment best practices.

### Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` to add any environment variables your application needs:

```bash
# Example .env content
API_KEY=your_api_key_here
DATABASE_URL=your_database_url

# Variables with _PUBLIC suffix are visible to users
NETWORK_PUBLIC=sepolia
```

Variables with the `_PUBLIC` suffix will be visible to users for transparency. Standard variables remain encrypted within the TEE.

:::important Auto-Generated MNEMONIC
The `MNEMONIC` environment variable is **automatically provided by KMS** at runtime. Any mnemonic in `.env.example` is just
a placeholder. The TEE overwrites it with your app's unique, persistent KMS-generated mnemonic.
:::

### Test locally (if needed)

```bash
npm install
npm run dev
```

### Subscribe to EigenCompute

Before deploying, you'll need an [EigenCompute subscription](billing).

To subscribe:

```
ecloud billing subscribe
```

The payment portal is displayed.  Enter your payment method details and click the Subscribe button.

### Deploy to TEE

Deploy your application to a Trusted Execution Environment:

```bash
ecloud compute app deploy
```

When prompted, select `Build and deploy from Dockerfile` option.

The CLI will:
1. Build your Docker image targeting `linux/amd64`
2. Push the image to your Docker registry
3. Deploy to a TEE instance
4. Return your app details including app ID and instance IP

### View Your Application

After deployment, view your app's information:

```bash
ecloud compute app info
```

## Port Configuration

To make your application accessible over the internet, you need to expose ports in your Dockerfile.

### Basic Port Exposure

Add the `EXPOSE` directive to your Dockerfile:

```dockerfile
FROM --platform=linux/amd64 node:18
USER root
WORKDIR /app
COPY . .
RUN npm install

# Expose the port your app listens on
EXPOSE 3000

CMD ["npm", "start"]
```

### Application Binding

Your application must bind to `0.0.0.0` (not `localhost`) to be accessible.

For more advanced port configuration including multiple ports and port ranges, see the [Port Exposure Guide](../howto/deploy/expose-ports.md).

## Next Steps

* Explore [CLI Commands](../reference/ecloud-cli/ecloud-cli-overview.md) - Learn about all available commands
* Review [Core Concepts](../concepts/eigencompute-overview.md) - Deep dive into keys, environment variables, and security

## Troubleshooting

### Docker Build Fails

Ensure your Dockerfile targets the correct platform:

```dockerfile
FROM --platform=linux/amd64 node:18
```

### Deployment Transaction Fails

Check your ETH balance:

```bash
ecloud auth whoami
```

Ensure you have sufficient mainnet ETH for deployment transactions.

### Image Push Fails

Ensure you're logged into Docker:

```bash
docker login
```

### App Not Starting

Check your app logs for errors:

```bash
ecloud compute app logs
```

Common issues:
- Port conflicts - ensure `APP_PORT` is set correctly
- Missing environment variables
- Application crashes - check your code

## Get Help

- **GitHub Issues**: [Report issues](https://github.com/Layr-Labs/ecloud)
- **Discord**: Join our [Support channel](https://discord.com/channels/1089434273720832071/1187153894564966480).
- **Talk to EigenCompute team**: Complete [this form](https://ein6l.share.hsforms.com/2L1WUjhJWSLyk72IRfAhqHQ) and a member of the team will reach out to discuss your project.
