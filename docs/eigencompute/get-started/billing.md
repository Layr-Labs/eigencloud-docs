---
title: Billing
sidebar_position: 4
---

# Billing

Deploying an EigenCompute application to Sepolia testnet or mainnet requires an EigenCompute subscription. EigenCompute subscriptions
can be paid by credit card or EigenCompute credits can be purchased with USDC.

EigenCompute has metered billing so you pay for what you use. All new customers receive up to $25 matched credits.

:::important Mainnet Pricing
Current EigenCompute pricing is the testnet pricing. Mainnet deployments are available at testnet pricing for a promotional
period ending on 04/31/2026.
:::

Up to 10 apps each can be deployed on Sepolia testnet and mainnet per subscription (that is, 20 apps total can be deployed per subscription per [ecloud CLI authentication key](../concepts/keys-overview.md)).

## Instance types

* Shielded VM (vTPM): Verified boot and runtime attestation.
* SEV-SNP (TEE): Verified boot, runtime attestation, and hardware-encrypted memory (AMD).
* TDX (TEE): Verified boot, runtime attestation, and hardware-encrypted memory (Intel).

### Instance pricing and specifications

| Instance Tier    | Resources            | Security Type      | Hourly Price | Monthly Price |
|:-----------------|:---------------------|:-------------------|:-------------|:--------------|
| **Starter 1**    | Shared 2 vCPU + 1 GB | Shielded VM (vTPM) | $0.03/hr     | $19.99/mo     |
| **Starter 2**    | Shared 2 vCPU + 4 GB | Shielded VM (vTPM) | $0.04/hr     | $29.99/mo     |
| **Pro 1**        | 2 vCPU + 4 GB        | SEV-SNP (TEE)      | $0.07/hr     | $53.99/mo     |
| **Pro 2**        | 2 vCPU + 8 GB        | SEV-SNP (TEE)      | $0.12/hr     | $85.99/mo     |
| **Enterprise 1** | 4 vCPU + 16 GB       | TDX (TEE)          | $0.33/hr     | $239.99/mo    |
| **Enterprise 2** | 8 vCPU + 32 GB       | TDX (TEE)          | $0.66/hr     | $484.99/mo    |

## Subscribe

To subscribe to EigenCompute: 

```
ecloud billing subscribe
```

Choose whether to subscribe with credit card or by purchasing credits with USDC. 

If you select credit card, the payment portal is displayed.  Enter your payment method details and click the Subscribe button.

If you select purchase credits with USDC, the EigenCompute wallet address and balance is displayed. If the wallet contains USDC,
specify the amount to spend on credits. If the wallet does not contain USDC, you are prompted to send USDC to the wallet.

The payment successful message is displayed.  Return to the terminal and you have access to [deploy your application](../reference/ecloud-cli/compute/app.md#deploy).

## Cancel a Subscription

To cancel an active subscription:

```
ecloud billing cancel
```

The deployed application is terminated and a refund for the remaining period of the month issued to the payment method you provided
when subscribing.

## Manage Billing

To view current subscriptions:

```
ecloud billing status
```

The subscription status is displayed and a link provided to manage payment methods and view subscription transactions.

## Top up with USDC

To purchase EigenCompute credits with USDC:

```
ecloud billing top-up
```

The EigenCompute wallet address and balance is displayed. If the wallet contains USDC, specify the amount to spend on credits. 
If the wallet does not contain USDC, you are prompted to send USDC to the wallet.

## Top up with x402

[x402](https://www.x402.org/) is an open protocol for paying APIs with signed stablecoin messages. EigenCompute credits can be
purchased over x402 with USDC on Base. Unlike the on-chain USDC top-up, no ETH for gas is required — you sign a USDC payment
authorization and settlement is handled by the billing API.

To purchase credits over x402:

```
ecloud billing top-up --method x402 --amount 5
```

The CLI requests a payment challenge from the billing API, signs the USDC payment with your ecloud key, and settles it. On
success, the credits are applied to your account and the CLI prints the payment ID and settlement transaction hash.

By default, credits go to the shared credit pool for your wallet. To credit a specific app instead (isolated billing), pass the
app address:

```
ecloud billing top-up --method x402 --amount 5 --app 0xYourAppAddress
```

:::note
The minimum x402 purchase is $5. Payment settles in USDC on Base mainnet, so your wallet needs at least the purchase amount in
USDC on Base. No ETH is required.
:::

### Purchase credits from an agent or x402 client

The endpoints implement standard x402 (version 2), so any x402-capable client can purchase credits programmatically — including
an agent topping up its own compute. The endpoints are discoverable at:

```
GET https://billingapi.eigencloud.xyz/.well-known/x402.json
```

To purchase, POST the amount in cents to either endpoint and complete the returned `402` payment challenge with your x402 client:

```
POST https://billingapi.eigencloud.xyz/creators/{creatorAddress}/x402-credits
{"amountCents": 500}

POST https://billingapi.eigencloud.xyz/apps/{appAddress}/x402-credits
{"amountCents": 500}
```

A successful purchase returns the credited amount, a payment ID, and the settlement transaction hash.

## Support

For support, join our [Telegram channel](https://t.me/EigenCloudSupp).

To talk to the EigenCompute team, complete [this form](https://ein6l.share.hsforms.com/2L1WUjhJWSLyk72IRfAhqHQ) and a member of the team will reach out to discuss your project.