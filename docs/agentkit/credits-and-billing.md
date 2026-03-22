---
sidebar_position: 5
title: Credits and Billing
---

# Credits and Billing

Running a sovereign agent on AgentKit has two cost components: **Compute** and **Inference**. Both are billed in USDC.

## Compute Pricing

Compute is the EigenCompute instance your agent runs on. Select a tier and SKU when you deploy.

| Instance Tier | Resources | Security Type | Hourly Price | Monthly Price |
|:--------------|:----------|:--------------|:-------------|:--------------|
| **Starter 1** | Shared 2 vCPU + 1 GB | Shielded VM (vTPM) | $0.03/hr | $19.99/mo |
| **Starter 2** | Shared 2 vCPU + 4 GB | Shielded VM (vTPM) | $0.04/hr | $29.99/mo |
| **Pro 1** | 2 vCPU + 4 GB | SEV-SNP (TEE) | $0.07/hr | $53.99/mo |
| **Pro 2** | 2 vCPU + 8 GB | SEV-SNP (TEE) | $0.12/hr | $85.99/mo |
| **Enterprise 1** | 4 vCPU + 16 GB | TDX (TEE) | $0.33/hr | $239.99/mo |
| **Enterprise 2** | 8 vCPU + 32 GB | TDX (TEE) | $0.66/hr | $484.99/mo |

For complete EigenCompute pricing details, refer to the [EigenCompute billing documentation](/eigencompute/get-started/billing).

## Inference Pricing

Inference is pay-per-usage across all compute tiers. During deployment, you select an inference model for your agent.

:::important
Inference is billed per token at your chosen provider's rates. Browse model pricing on [Vercel's AI Gateway](https://sdk.vercel.ai/docs). Eigen Labs applies a 1% margin. Deposit USDC via the AgentKit interface to fund inference.
:::

For a full list of available models and their per-token pricing, refer to [Vercel's AI Gateway pricing](https://sdk.vercel.ai/docs).

## How Credits Work

1. You select an EigenCompute plan during `agentkit init`
2. The CLI shows the required USDC amount for your chosen plan
3. Your funding wallet sends USDC to the credits contract
4. The coordinator confirms the on-chain transaction
5. Credits are consumed while the agent is running
6. When credits run low, top up with `agentkit topup`

## Topping Up

```bash
agentkit topup
```

Select an agent, enter a USDC amount, and confirm the transaction. Credits are applied once the on-chain transaction is confirmed.

## What Happens When Credits Run Out

- The agent is **stopped**, not terminated
- No data loss — agent state is preserved
- Top up credits, then restart with `agentkit status`

## Deploy Flow (Under the Hood)

A self-funded deployment moves through these stages:

1. `awaiting_wallet_funds` — verifying your wallet holds enough USDC
2. `awaiting_credit_purchase` — waiting for the on-chain credit purchase transaction
3. `awaiting_quota` — EigenCloud is allocating compute quota
4. `ready_to_deploy` — quota secured, launching the agent
5. `deploying` — container is starting
6. `running` — agent is live

If any stage fails, the CLI reports the error and the deploy can be retried.
