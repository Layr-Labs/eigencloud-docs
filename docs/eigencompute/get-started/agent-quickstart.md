---
title: Deploy Your Agent
sidebar_position: 3
---

# Deploy Your Agent on EigenCloud

The fastest way to deploy an agent on EigenCloud is with [Claude Code](https://claude.ai/code) and the EigenCompute skill.

## Quick setup

Add the skill to your project:

```bash
mkdir -p .claude/skills && curl -o .claude/skills/ecloud.md \
  https://raw.githubusercontent.com/Layr-Labs/ecloud/master/packages/cli/skills/deploy/SKILL.md
```

Then tell Claude:

```
> Deploy my agent to EigenCloud
```

That's it. The skill handles prerequisites, building, deploying to a TEE, and verification.

## Prerequisites

- [Docker](https://www.docker.com/get-started/)
- [ecloud CLI](quickstart.md): `npm install -g @layr-labs/ecloud-cli`
- [Sepolia ETH](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) for testnet, or mainnet ETH for production
