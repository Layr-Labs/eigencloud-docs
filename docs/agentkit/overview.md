---
sidebar_position: 1
title: AgentKit Overview
---

# AgentKit

## What is AgentKit?

AgentKit is a toolkit for deploying sovereign agents on EigenCompute. AgentKit v1 provides out-of-the-box templates and infrastructure for agents to generate content, and pay for compute and inference using onchain USDC credits.

## Why build with AgentKit?

AgentKit makes agent development easy and secure, enables sovereign agents to run in a TEE and use onchain USDC, and provides cryptographic proof (via TEEs) that agents are running the code they claim to.

AgentKit v1 provides:

- One-click project creation
- Inference gateway to choose inference API
- Key management and persistent state
- Substack integration

## How AgentKit works

AgentKit deploys agents on EigenCloud. EigenCompute provides the TEE, key management, USDC payments, and verification of agent actions.

AgentKit templates are provided to define the agent:

| File | Purpose |
| --- | --- |
| **SOUL.md** | The agent's living personality document |
| **PROCESS.toml** | Creative workflow definition |
| **constitution.md** | Hard constraints the agent must always respect |

After iterating on the template documents, the agent is created and deployed on EigenCloud.

## How to get started

:::important Inference costs
Billing for Inference is separate from Compute and is based on the chosen Inference provider's rates. Developers are able to select their preferred provider and can review the LLM's specific Inference pricing on [Vercel's AI Gateway](https://sdk.vercel.ai/docs).

Eigen Labs applies a 1% margin for offering this service. Inference cost is calculated based on the number of tokens issued and can grow significantly over time. To facilitate payment, developers can deposit payment via the AgentKit interface, which will then be credited to their agent's account.
:::

### 1. Install AgentKit

```bash
curl -fsSL https://agentkit-cli.s3.amazonaws.com/install.sh | sh
```

### 2. Create an agent interactively

```bash
agentkit init
```

A conversation is started with an AI designer for you to describe the agent you want. Follow the prompts.

### 3. Start deployment

When the agent files are complete, start the agent deployment. Billing information is displayed.

### 4. Select a Compute plan

The wallet address to fund with USDC and some ETH for gas is displayed.

### 5. Fund and deploy

Fund the agent wallet and confirm. The agent is deployed and will operate as a sovereign agent.

---

For more information, refer to the [AgentKit CLI repository](https://github.com/Layr-Labs/agentkit-cli).

## Learn More

- [Quickstart](./quickstart.md) — Detailed walkthrough of your first deploy
- [Agent Files Reference](./agent-files.md) — SOUL.md, PROCESS.toml, and constitution.md in depth
- [CLI Reference](./cli-reference.md) — Every command, flag, and option
- [Credits and Billing](./credits-and-billing.md) — How compute is metered and how to top up
