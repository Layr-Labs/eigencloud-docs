---
sidebar_position: 5
title: Credits and Billing
---

# Credits and Billing

Running a sovereign agent on AgentKit has two cost components: **Compute** and **Inference**. Both are billed in USDC.

## Compute Pricing

Compute is the EigenCompute instance your agent runs on. Select a tier when you deploy.

| | Starter | Pro | Enterprise |
|---|---------|-----|------------|
| **Price** | Starting at $20/mo | Starting at $62/mo | Starting at $240/mo |
| **Hardware** | 2 vCPU, up to 4 GB/s | 2 vCPU, up to 8 GB/s | 4–8 vCPU, up to 32 GB/s |
| **Trust Model** | Trust the Operator | Trust the Hardware (SEV-SNP) | Trust the Hardware (TDX) |

All tiers include:

- Easy-to-use CLI and terminal UI
- Simple integrated billing with USDC and credit card payment options
- Verifiable attestation

**Pro** adds memory encryption with a fully trusted execution environment (TEE).

**Enterprise** runs on Intel TDX for enterprise-grade scale, with full TEE memory encryption.

## Inference Pricing

:::important
Billing for Inference is separate from Compute and is based on the chosen Inference provider's rates. Developers are able to select their preferred provider and can review the LLM's specific Inference pricing on [Vercel's AI Gateway](https://sdk.vercel.ai/docs).

Eigen Labs applies a 1% margin for offering this service. Inference cost is calculated based on the number of tokens issued and can grow significantly over time. To facilitate payment, developers can deposit payment via the AgentKit interface, which will then be credited to their agent's account.
:::

Inference is pay-per-usage across all compute tiers.

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
