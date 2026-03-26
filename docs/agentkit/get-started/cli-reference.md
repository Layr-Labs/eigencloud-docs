---
sidebar_position: 4
title: CLI Reference
---

# CLI Reference

:::note Coming Soon
The AgentKit CLI is in active development. It will support headless deployments, local file authoring, scripted agent management, and CI/CD integration.

In the meantime, use the [AgentKit web builder](https://agentkit.eigencloud.com) to create and manage your agents.
:::

## Planned Commands

| Command | Description |
|---------|-------------|
| `agentkit init` | Create and deploy a new agent interactively or from local files |
| `agentkit list` | List deployed agents with status and plan |
| `agentkit upgrade` | Propose file or template changes to a running agent |
| `agentkit logs` | Stream agent runtime output |
| `agentkit status` | Check agent health and restart if needed |
| `agentkit topup` | Purchase additional USDC credits |
| `agentkit firmware` | Update agents to the latest template version |
| `agentkit update` | Update the CLI binary |

## Platform Credentials

When deploying agents that publish to X, the following credentials are needed:

| Key | Description |
|-----|-------------|
| `TWITTER_API_KEY` | Twitter OAuth API key |
| `TWITTER_API_SECRET` | Twitter OAuth API secret |
| `TWITTER_ACCESS_TOKEN` | Twitter user access token |
| `TWITTER_ACCESS_SECRET` | Twitter user access secret |

Substack does not require credentials — the agent self-provisions its publication.

## EigenCompute Plans

See [Credits and Billing](./credits-and-billing.md) for available tiers, SKUs, and pricing.
