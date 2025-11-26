---
title: Quickstart
sidebar_position: 1
---

Get started with EigenX CLI and deploy your first verifiable application to a Trusted Execution Environment (TEE) in minutes.

## Prerequisites

Before you begin, ensure you have:

- **Docker** - To package and publish application images ([Download](https://www.docker.com/get-started/))
- **Testnet or Mainnet ETH** - For deployment transactions

## Installation

### macOS/Linux

```bash
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.sh | bash
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

```
Address: 0x9431Cf5DA0CE60664661341db650763B08286B18
Source:  stored credentials (sepolia)
```

The current environment (Mainnet or Sepolia testnet) is displayed.  To change from Mainnet to Sepolia, use `eigenx env set sepolia`.

:::tip Developing on Sepolia
To get testnet ETH, use:
- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- [Alchemy Faucet](https://sepoliafaucet.com/)
  :::

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

### View Your Application

After deployment, view your app's information:

```bash
eigenx app info
```

View real-time logs:

```bash
eigenx app logs
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

For more advanced port configuration including multiple ports and port ranges, see the [Port Exposure Guide](../howto/configure/expose-ports.md).

## Next Steps

* Explore [CLI Commands](../reference/cli-commands/authentication) - Learn about all available commands
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
