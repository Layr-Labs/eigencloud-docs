---
title: EigenCompute Overview
sidebar_position: 1
---

import InteractiveDemo from '@site/src/components/InteractiveDemo';

# EigenCompute Overview

EigenCompute enables developers to deploy **verifiable applications**: containerized services that receive their own cryptographic identity, allowing them to hold funds, sign transactions, and operate autonomously.

## Understanding Verifiable Applications

Traditional applications require users to trust developers with both code execution and key management. Smart contracts eliminated this trust requirement but introduced severe constraints: prohibitive gas costs, limited computational power, and restricted programming models.

EigenCompute provides a third path: applications that offer cryptographic guarantees about their behavior while retaining the flexibility and performance of traditional computing.

## How It Works

When you deploy to EigenCompute, your application gets:

1. **Hardware-isolated execution**: Your app runs in Intel TDX, a secure enclave with encrypted memory. Even the cloud provider cannot see your app's data or computation. This hardware can prove what Docker image is running inside it, making it impossible to fake or modify your application.

2. **Autonomous wallet**: Each application gets its own unique wallet that only it controls. The hardware guarantees that only the code running in the enclave can access the private key.

3. **No key management**: The platform handles secure key distribution to your application.

4. **Public endpoints**: Expose ports for your application with HTTP by default, or configure HTTPS with your custom domain.

5. **Code transparency**: Every deployment is recorded on-chain by its Docker digest.

This creates truly autonomous applications - code that holds its own funds with cryptographic proof of what it will do with them. From code to production in under a minute.

## Get Started

Install the CLI and join the mainnet alpha:

```bash
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.sh | bash
```

[Sign up for mainnet alpha access →](https://onboarding.eigencloud.xyz/)

### Try It Out

<InteractiveDemo />

## Practical Applications

### Autonomous Trading Systems

Traditional trading bots require depositing funds into developer-controlled wallets. With EigenCompute, the bot itself holds the funds:

```javascript
// Bot receives its deterministic wallet
const wallet = mnemonicToAccount(process.env.MNEMONIC)

// Bot executes strategy autonomously
if (await meetsTradingConditions()) {
  await executeSwap(wallet, userDeposit)
}
```

Funds are sent directly to the bot's address, with only the verified trading logic able to access them.

### Verifiable Social Media

Social platforms can prove their ranking algorithms work as claimed:

```javascript
// Transparent content ranking
const posts = await fetchUserFeed(userId)
const engagement = await getEngagementMetrics(posts)

// Verifiable algorithm execution
const ranked = posts.sort((a, b) => {
  // Public ranking logic
  return (b.likes * 0.3 + b.comments * 0.5 + b.shares * 0.2) -
         (a.likes * 0.3 + a.comments * 0.5 + a.shares * 0.2)
})

// Sign the feed to prove no manipulation
const signature = await wallet.signMessage({
  userId,
  algorithm: 'engagement_v1',
  feed: ranked.map(p => p.id)
})
```

The feed ranking algorithm is verifiable and transparent, preventing manipulation.

### Verifiable Gaming

Build high-performance games with provable fairness and on-chain assets:

```javascript
// Game server controls tournament funds
const wallet = mnemonicToAccount(process.env.MNEMONIC)
const tournament = await getTournamentState()

// Verifiable game logic
async function processGameRound(players, moves) {
  // Deterministic game state updates
  const outcomes = calculateOutcomes(moves, seedFromBlockhash)

  // Update player tokens on-chain
  for (const winner of outcomes.winners) {
    await wallet.sendTransaction({
      to: winner.address,
      value: tournament.prizePool / outcomes.winners.length
    })
  }

  return outcomes
}
```

Game logic is verifiable and tournament prizes are distributed according to transparent rules.

## Technical Comparison

<table>
  <thead>
    <tr>
      <th>Capability</th>
      <th>EigenCompute</th>
      <th>Smart Contracts</th>
      <th>Traditional Apps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Trust Model</strong></td>
      <td>Verify code via attestation</td>
      <td>Verify on-chain bytecode</td>
      <td>Trust developer</td>
    </tr>
    <tr>
      <td><strong>Key Management</strong></td>
      <td>Platform-controlled, attestation-gated</td>
      <td>Protocol-controlled</td>
      <td>Developer-controlled</td>
    </tr>
    <tr>
      <td><strong>Data Privacy</strong></td>
      <td>Encrypted memory, isolated execution</td>
      <td>All data public on-chain</td>
      <td>Depends on developer</td>
    </tr>
    <tr>
      <td><strong>Languages</strong></td>
      <td>Any</td>
      <td>Solidity/Vyper</td>
      <td>Any</td>
    </tr>
    <tr>
      <td><strong>External APIs</strong></td>
      <td>Direct HTTPS</td>
      <td>Oracle-only</td>
      <td>Direct HTTPS</td>
    </tr>
    <tr>
      <td><strong>Compute Power</strong></td>
      <td>Up to 176 vCPUs, 704GB RAM</td>
      <td>Gas-limited</td>
      <td>Unlimited</td>
    </tr>
  </tbody>
</table>

## Security Model

### Trust Requirements

EigenCompute currently requires trust in:
- Intel TDX hardware security guarantees
- Google Confidential Space attestation service
- Single KMS operator (being decentralized via threshold cryptography)

Applications cannot be compromised by:
- Cloud infrastructure providers
- Network operators
- Application developers post-deployment
- Other applications in the system

### Verification Flow

Applications can be verified through a cryptographic chain:

1. Check on-chain Docker digest for the application
2. Request attestation from the application endpoint
3. Verify the signature matches the expected wallet address
4. Confirm hardware attestation chain (TEE → KMS → Application)

## Deploy Your Own App

Four simple steps to deploy an autonomous application:

```bash
# 1. Install the CLI (one-time setup)
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.sh | bash

# 2. Create your app from a template (choose: typescript | python | golang | rust)
eigenx app create my-app
cd my-app

# 3. Edit your application code
# Add your logic - your app gets process.env.MNEMONIC automatically

# 4. Deploy to hardware-isolated infrastructure
eigenx app deploy
```

✨ **That's it!** Your app is now running with:
- Its own wallet address (no key management needed)
- Hardware isolation via Intel TDX
- Public HTTP endpoint (HTTPS with custom domain)
- Ready to receive and manage funds

Try it yourself - from zero to deployed in under a minute.

:::tip Already have a Docker image?
Deploy it directly: `eigenx app deploy your-image:tag`
:::

## Documentation

- **[Quickstart Guide](./quickstart)** - Deploy your first app in 5 minutes
- **[CLI Commands](./cli-commands/authentication)** - Complete command reference
- **[Architecture Guide](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_ARCHITECTURE.md)** - Deep dive into how EigenCompute works
- **[Core Concepts](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_CONCEPTS.md)** - Understanding keys, security, and best practices
