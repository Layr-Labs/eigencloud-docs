---
title: Attested API Quickstart
sidebar_position: 1
---

EigenCloud provides secure application hosting where Docker containers run with similar guarantees to smart contracts. This
guide will get you started with EigenCompute and deploying your first containerized workload in minutes.

## Getting Started 

What you'll do:

1. Install EigenCloud CLI.
2. Authenticate to EigenCompute.
3. Build and deploy the Attested API application. 
4. Request a signed message from your application.
5. Verify the signed message was returned from the application TEE. 

## Prerequisites

Before you begin, ensure you have:

- [Docker](https://www.docker.com/get-started/) - To package and publish application images.
- **Testnet or Mainnet ETH** - For deployment transactions.

:::note Testing on Sepolia
To test on Sepolia testnet, use `eigenx env set sepolia` and get testnet ETH from:
- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- [Alchemy Faucet](https://sepoliafaucet.com/)
:::

## 1. Install EigenCloud CLI

### macOS/Linux

```bash
curl -fsSL https://tools.eigencloud.xyz | bash
```

### Windows

```bash
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.ps1 | powershell -
```

## Initial Setup

### Docker Login

First, log in to your Docker registry. This is required to push your application images:

```bash
docker login
```

## 2. Authenticate to EigenCompute

### Authenticate with EigenX

You have two options for authentication:

#### Option 1: Use an Existing Private Key

```bash
eigenx auth login
```

This command will prompt you to enter your private key and store it securely in your OS keyring.

#### Option 2: Generate a New Private Key

```bash
eigenx auth generate --store
```

This generates a new private key and stores it securely.

### Get Testnet Funds

Check your wallet address:

```bash
eigenx auth whoami
```

Ensure you have mainnet ETH for deployment transactions.

## 3. Build and deploy application 

## Create & Deploy Your First App

### Create a New Application

Create a new application from a template. Choose from: `typescript`, `python`, `golang`, or `rust`

```bash
eigenx app create my-app typescript
cd my-app
```

This creates a new project with:
- Application code from the template
- A `Dockerfile` configured for TEE deployment
- An `.env.example` file for environment variables

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

:::tip
Variables with the `_PUBLIC` suffix will be visible to users for transparency. Standard variables remain encrypted within the TEE.
:::

### Subscribe to EigenCompute

Before deploying, you'll need an [EigenCompute subscription](billing).

To subscribe:

```
eigenx billing subscribe
```

The payment portal is displayed.  Enter your payment method details and click the Subscribe button.

:::important Mainnet Pricing
Current EigenCompute pricing is the [testnet pricing](billing). Mainnet deployments are available testnet pricing for a promotional
period ending on 12/31/2025.
:::

### Deploy to TEE

Deploy your application to a Trusted Execution Environment:

```bash
eigenx app deploy
```

The CLI will:
1. Build your Docker image targeting `linux/amd64`
2. Push the image to your Docker registry
3. Deploy to a TEE instance
4. Return your app details including app ID and instance IP

## 4. Request signed message

### View Your Application

After deployment, view your app's information:

```bash
eigenx app info
```

View real-time logs:

```bash
eigenx app logs
```

## 5. Verify the signed message

## Working with Existing Projects

Already have a containerized application? You don't need to start from a template:

```bash
cd my-existing-project

# Deploy directly - the CLI will prompt for Dockerfile and .env paths
eigenx app deploy
```
The CLI will prompt you for [billing details](billing) in our payment portal.

**Requirements for existing projects:**
- **Dockerfile** - Must target `linux/amd64` and run as root user
- **.env file** - Optional but recommended for environment variables

The CLI will automatically prompt for file paths if they're not in default locations.

### Manual Image Building

If you prefer to build and push images yourself:

```bash
# Build and push manually
docker build --platform linux/amd64 -t myregistry/myapp:v1.0 .
docker push myregistry/myapp:v1.0

# Deploy using the image reference
eigenx app deploy myregistry/myapp:v1.0
```

The CLI will prompt you for [billing details](billing) in our payment portal.

## Update Your Application

After making changes to your code or environment variables:

```bash
eigenx app upgrade
```

The CLI will rebuild and redeploy your application with the latest changes.

## Application Environment

Your TEE application runs with these capabilities:

### Secure Execution
Your code runs in an Intel TDX instance with hardware-level isolation.

### Auto-Generated Wallet
Access a private mnemonic via `process.env.MNEMONIC`:

```typescript
// TypeScript/JavaScript example
import { mnemonicToAccount } from 'viem/accounts'

const account = mnemonicToAccount(process.env.MNEMONIC)
```

```python
# Python example
import os
from eth_account import Account

Account.enable_unaudited_hdwallet_features()
account = Account.from_mnemonic(os.environ['MNEMONIC'])
```

:::important KMS-Generated Mnemonic
The `MNEMONIC` variable is **automatically generated by KMS** and injected into your TEE at runtime. Any mnemonic you see in `.env.example` is just a placeholder for local development. The TEE will **overwrite** this with the actual KMS-generated mnemonic that's unique and persistent to your app.

Only your specific TEE instance can decrypt and use this mnemonic.
:::

### Environment Variables
All variables from your `.env` file are available in your container:
- Variables with `_PUBLIC` suffix are visible to users for transparency
- Standard variables remain private and encrypted within the TEE

### Onchain Management
Your app's lifecycle is controlled via Ethereum smart contracts on Sepolia.

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

For more advanced port configuration including multiple ports and port ranges, see the [Port Exposure Guide](../howto/configure/expose-ports.md).

## TLS/HTTPS Setup (Optional)

For information on exposing your application using HTTPS with a custom domain, refer to [Configure TLS](../howto/deploy-to-production/configure-tls.md).

## Next Steps

- **Explore [CLI Commands](../reference/cli-commands/authentication)** - Learn about all available commands
- **Read [Architecture Documentation](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_ARCHITECTURE.md)** - Understand how EigenX works
- **Review [Core Concepts](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_CONCEPTS.md)** - Deep dive into keys, environment variables, and security

## Troubleshooting

### Docker Build Fails

Ensure your Dockerfile targets the correct platform:

```dockerfile
FROM --platform=linux/amd64 node:18
```

### Deployment Transaction Fails

Check your ETH balance:

```bash
eigenx auth whoami
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
eigenx app logs
```

Common issues:
- Port conflicts - ensure `APP_PORT` is set correctly
- Missing environment variables
- Application crashes - check your code

## Get Help

- **GitHub Issues**: [Report issues](https://github.com/Layr-Labs/eigenx-cli/issues)
- **Discord**: Join our [Support channel](https://discord.com/channels/1089434273720832071/1187153894564966480).
- **Talk to EigenCompute team**: Complete [this form](https://ein6l.share.hsforms.com/2L1WUjhJWSLyk72IRfAhqHQ) and a member of the team will reach out to discuss your project.
