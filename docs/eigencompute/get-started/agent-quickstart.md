---
title: Deploy with an AI Agent
sidebar_position: 3
---

# Deploy with an AI Agent

Use an AI coding agent to deploy, manage, and operate EigenCompute apps through natural language. Instead of running CLI commands manually, describe what you want and let your agent handle it.

## Install the skill

The EigenCompute agent skill lives at [`Layr-Labs/skill.md`](https://github.com/Layr-Labs/skill.md). Install it into your AI coding agent:

```
https://github.com/Layr-Labs/skill.md
```

Works with [Claude Code](https://claude.ai/code), [Codex](https://openai.com/index/codex/), and any agent that supports the [Agent Skills](https://github.com/openai/skills) open standard.

## What the agent can do

Once the skill is loaded, you can ask your agent to:

- **Deploy apps** — `"Deploy my Docker image to EigenCompute"` or `"Set up a new TypeScript app on a TEE"`
- **Verifiable builds** — `"Do a verifiable build from my GitHub repo"`
- **Manage apps** — `"Check the status of my app"`, `"Show me the logs"`, `"Upgrade to the latest image"`
- **Handle billing** — `"Subscribe to EigenCompute"`, `"Top up my credits"`
- **Troubleshoot** — `"My app isn't starting, help me debug it"`

The skill includes a gate-based runbook that walks the agent through prerequisites, building, deploying, verifying, and post-deploy setup automatically.

## Prerequisites

Your machine still needs:

- **Docker** installed and logged in (`docker login`)
- **ecloud CLI** installed (`npm install -g @layr-labs/ecloud-cli`)
- **ETH** for deployment gas ([Sepolia testnet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) or mainnet)

The agent checks for these and walks you through setup if anything is missing.

## Example

```
> Deploy my trading bot to EigenCompute on sepolia with a TDX instance

Agent: I'll walk through the deployment. Let me check your prerequisites first...
  ✓ ecloud CLI installed
  ✓ Auth configured (0x9431...)
  ✓ Environment set to sepolia
  ✓ Billing active
  ✓ Docker running

Building linux/amd64 image and pushing to registry...
Deploying to g1-standard-4t (Intel TDX)...

✅ Deployed!
  App ID: 0x5940e21020adb5bd2d1fdda4d498edc0eb1f60df
  IP: 34.56.78.90
  EVM Wallet: 0xa4Cae7029dfe122866F479E3b6eFb88dA3b35aea
  Dashboard: https://verify-sepolia.eigencloud.xyz/app/0x5940...
```

## Next steps

- [Quickstart](quickstart.md) — deploy manually with the CLI
- [Billing](billing.md) — subscription and credit details
- [Sample Apps](sample-apps.md) — templates to start from
