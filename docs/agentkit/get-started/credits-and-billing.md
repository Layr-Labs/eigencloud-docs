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

:::important Inference Pricing (Managed by AgentKit) — Disclaimer
Billing for Inference is separate from Compute and is based on the chosen Inference provider's rates. Developers are able to select their preferred provider and can review the LLM's specific Inference pricing on [Vercel's AI Gateway](https://sdk.vercel.ai/docs).

Eigen Labs applies a 1% margin for offering this service. Inference cost is calculated based on the number of tokens issued and can grow significantly over time. To facilitate payment, developers can deposit payment via the AgentKit interface, which will then be credited to their agent's account.
:::

## How Credits Work

1. You select an EigenCompute plan during agent creation
2. The builder shows the required USDC amount for your chosen plan
3. You purchase credits via credit card (Stripe) or by sending USDC directly to your embedded wallet
4. The coordinator confirms the on-chain transaction
5. Credits are consumed while the agent is running
6. When credits run low, top up from the agent workspace

## Topping Up

From your agent's workspace page, open the credits panel and purchase additional credits. Select a USDC amount and confirm the transaction. Credits are applied once the on-chain transaction is confirmed.

## What Happens When Credits Run Out

- The agent is **stopped**, not terminated
- No data loss — agent state is preserved
- Top up credits from the agent workspace, then restart

## Deploy Flow (Under the Hood)

A self-funded deployment moves through these stages:

1. `awaiting_wallet_funds` — verifying your wallet holds enough USDC
2. `awaiting_credit_purchase` — waiting for the on-chain credit purchase transaction
3. `awaiting_quota` — EigenCloud is allocating compute quota
4. `ready_to_deploy` — quota secured, launching the agent
5. `deploying` — container is starting
6. `running` — agent is live

If any stage fails, the error is displayed and the deploy can be retried.
