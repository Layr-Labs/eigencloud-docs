---
sidebar_position: 5
title: Credits and Billing
---

# Credits and Billing

Running a sovereign agent on AgentKit has two cost components: **Compute** and **Inference**. Both are billed in USDC.

## Compute Pricing

Compute is the EigenCompute instance your agent runs on. Select a tier and SKU when you deploy.

| Tier | SKU | vCPU | Memory | Price |
|------|-----|------|--------|-------|
| Starter | E2 Micro | 2 | Up to 1 GB/s | $19.99/mo |
| Starter | EC Medium | 2 | Up to 4 GB/s | $29.99/mo |
| Growth | AMD Small | 2 | Up to 4 GB/s | $61.99/mo |
| Growth | AMD Big | 2 | Up to 8 GB/s | $85.99/mo |
| Enterprise | IntelTDX Small | 4 | Up to 16 GB/s | $239.99/mo |
| Enterprise | IntelTDX Big | 8 | Up to 32 GB/s | $484.99/mo |

For complete pricing details and trust model information, refer to the [EigenCompute pricing documentation](/eigencompute/get-started/eigencompute-overview).

## Inference Pricing

Inference is pay-per-usage across all compute tiers. During deployment, you select an inference model for your agent.

:::important
Inference is billed per token at your chosen provider's rates. Browse model pricing on [Vercel's AI Gateway](https://sdk.vercel.ai/docs). Eigen Labs applies a 1% margin. Deposit USDC via the AgentKit interface to fund inference.
:::

For a full list of available models and their per-token pricing, refer to [Vercel's AI Gateway pricing](https://sdk.vercel.ai/docs).

## How Credits Work

1. You select a compute plan during `agentkit init`
2. The CLI shows the required USDC amount for your chosen plan
3. Your funding wallet sends USDC to the credits contract
4. The coordinator confirms the on-chain transaction
5. Credits are consumed while the agent is running
6. When credits run low, top up with `agentkit topup`

## Estimated Runway

```
remainingCredits / hourlyPriceUsd = hours remaining
```

Check your agent's remaining runway with `agentkit status`.

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
5. `deploying` — container is starting in TEE
6. `running` — agent is live

If any stage fails, the CLI reports the error and the deploy can be retried.
