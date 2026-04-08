---
title: Deploy Your Agent
sidebar_position: 3
---

# Deploy Your Agent on EigenCloud

Deploy your agent to a Trusted Execution Environment on EigenCloud using [Claude Code](https://claude.ai/code) and the EigenCompute agent skill.

## Install the skill

```bash
mkdir -p .claude/skills && curl -o .claude/skills/ecloud.md \
  https://raw.githubusercontent.com/Layr-Labs/skill.md/master/ecloud/SKILL.md
```

The skill source is at [`Layr-Labs/skill.md`](https://github.com/Layr-Labs/skill.md) — it works with Claude Code and any agent that supports the [Agent Skills](https://github.com/openai/skills) open standard.

## Prerequisites

Before deploying, ensure you have:

- [Docker](https://www.docker.com/get-started/) installed and logged in (`docker login`)
- [ecloud CLI](quickstart.md): `npm install -g @layr-labs/ecloud-cli`
- [Sepolia ETH](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) for testnet, or mainnet ETH for production
- An [EigenCompute subscription](billing.md)

## Deploy

Open Claude Code in your project directory and tell it what you want:

```
> Deploy my agent to EigenCloud on sepolia
```

The skill handles the full lifecycle:

1. **Checks prerequisites** — CLI, auth, billing, Docker, environment
2. **Builds your image** — cross-compiles to `linux/amd64` if you're on Apple Silicon
3. **Deploys to a TEE** — provisions an Intel TDX instance with encrypted environment variables
4. **Verifies the deployment** — polls for running status, health checks the app
5. **Sets up your dashboard profile** — name, description, and verify dashboard link

Your agent gets its own persistent EVM and Solana wallets, derived deterministically inside the TEE.

## What else you can ask

- `"Upgrade my agent to the latest image"`
- `"Show me the logs for my app"`
- `"Do a verifiable build from my GitHub repo"`
- `"Roll back to the previous release"`
- `"Top up my USDC credits"`

## Next steps

- [Quickstart](quickstart.md) — deploy manually with the CLI
- [Billing](billing.md) — subscription and credit details
- [Sample Apps](sample-apps.md) — templates to start from
