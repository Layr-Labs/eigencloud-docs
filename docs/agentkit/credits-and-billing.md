---
sidebar_position: 5
title: Credits and Billing
---

# Credits and Billing

AgentKit uses a prepaid credit system. Credits are purchased on-chain with USDC on Sepolia testnet — no credit cards, no Stripe, no monthly invoices.

- **1 credit = 1 USDC**
- Credits are consumed hourly based on your compute plan
- All transactions go through USDC smart contracts on Sepolia

## Compute Plans

| Plan | SKU | Specs | Use Case |
|------|-----|-------|----------|
| Hobby | `g1-medium-1v` | Shared compute | Lightweight agents, experiments |
| Pro | `g1-standard-2s` | 2 vCPU / 8 GB (SEV-SNP) | Production agents |
| Scale | `g1-standard-4t` | TDX compute | High-throughput agents |

Exact hourly rates are fetched live from the coordinator API and may change between deployments.

## How Credits Work

1. You select a compute plan during `agentkit init`
2. The CLI shows the required USDC amount for your chosen plan
3. Your funding wallet sends USDC to the credits contract via `purchaseCreditsFor(amount, appAddress)`
4. The coordinator confirms the on-chain transaction
5. Credits are consumed hourly while the agent is running
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

Select an agent, enter a USDC amount, and confirm the transaction. Credits are applied once the on-chain tx is confirmed.

## What Happens When Credits Run Out

- The agent is **stopped**, not terminated
- No data loss — agent state is preserved
- Top up credits, then restart with `agentkit status`

## Deploy Flow (Under the Hood)

A self-funded deployment moves through these stages:

1. `awaiting_wallet_funds` — verifying your wallet holds enough USDC
2. `awaiting_credit_purchase` — waiting for the on-chain credit purchase tx
3. `awaiting_quota` — EigenCloud is allocating compute quota
4. `ready_to_deploy` — quota secured, launching the agent
5. `deploying` — container is starting in TEE
6. `running` — agent is live

If any stage fails, the CLI reports the error and the deploy can be retried.

## Getting Testnet USDC

Billing runs on Sepolia testnet. Visit the [Circle faucet](https://faucet.circle.com/) to get free testnet USDC. No real money is involved during testnet.
