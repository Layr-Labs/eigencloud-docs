---
title: EigenCompute Overview
sidebar_position: 1
---

import InteractiveDemo from '@site/src/components/InteractiveDemo';

:::tip Get Started
Follow the [EigenX CLI documentation](https://github.com/Layr-Labs/eigenx-cli) to deploy your application to EigenCompute.

While in Alpha **an allowlisted account is required to create apps.** Use an existing address with `eigenx auth login` or generate a new address with `eigenx auth generate`, then submit an onboarding request:

<a href="https://onboarding.eigencloud.xyz/?utm_source=docs&utm_content=eigencompute_overview" className="onboardingButton" target="_blank" rel="noopener noreferrer">
  <span>Request Onboarding Access</span>
</a>
:::

# EigenCompute Overview

EigenCompute enables developers to deploy **verifiable applications**: containerized services that receive their own cryptographic identity, allowing them to hold funds, sign transactions, and operate autonomously.

## Understanding Verifiable Applications

Traditional applications require users to trust developers with both code execution and key management. Smart contracts eliminated this trust requirement but introduced severe constraints: prohibitive gas costs, limited computational power, and restricted programming models.

EigenCompute provides a third path: applications that offer cryptographic guarantees about their behavior while retaining the flexibility and performance of traditional computing.

## How It Works

When you deploy to EigenCompute, your application gets:

1. **Hardware-isolated execution**: Your app runs inside Intel TDX, a secure enclave with encrypted memory that generates cryptographic proof of the exact Docker image running inside.

2. **A dedicated wallet**: Each application receives a unique wallet. Only that specific app, running the verified Docker image in the enclave, can retrieve the private key.

3. **Secure secret management**: Environment variables that are encrypted locally and only accessible within the TEE.

4. **On-chain deployment record**: Every deployment is permanently recorded on-chain by its Docker digest, creating an immutable audit trail.

5. **Network access**: Optionally expose ports for HTTP endpoints, or configure HTTPS with a custom domain.

This creates truly autonomous applications - code that holds its own funds with cryptographic proof of what it will do with them.

## Get Started

Install the CLI and join the mainnet alpha:

```bash
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.sh | bash
```

[Sign up for mainnet alpha access →](https://onboarding.eigencloud.xyz/)

### Try It Out

<InteractiveDemo
  steps={[
    {
      command: 'eigenx app create my-trading-bot typescript',
      output: [
        '🚀 Creating app from typescript template...',
        '✅ Created my-trading-bot/',
        '✅ Generated index.ts',
        '✅ Added package.json',
        '✅ Created Dockerfile for TEE deployment',
        '',
        'cd my-trading-bot'
      ]
    },
    {
      command: 'cat index.ts',
      output: [
        'import { mnemonicToAccount } from "viem/accounts"',
        '',
        '// Access your app\'s wallet',
        'const wallet = mnemonicToAccount(process.env.MNEMONIC)',
        '',
        'console.log("Address:", wallet.address)',
        '',
        '// Now your app can:',
        '// - Hold funds autonomously',
        '// - Sign transactions and messages',
        '// - Interact with any blockchain'
      ]
    },
    {
      command: 'eigenx app deploy',
      output: [
        '🏗️  Building Docker image...',
        '   ✓ Built: my-trading-bot:latest',
        '',
        '📤 Pushing to registry...',
        '   ✓ Pushed: docker.io/my-trading-bot:latest',
        '',
        '⛓️  Submitting to blockchain...',
        '   ✓ Transaction confirmed',
        '',
        '🚀 Deploying to TEE...',
        '   ✓ Instance provisioned',
        '   ✓ Running in Intel TDX',
        '',
        '✅ Deployment complete!',
        '   App Name: my-trading-bot',
        '   Docker Digest: sha256:4f6c2b3a...',
        'Wallet Addresses:',
        '   Ethereum: 0xa4Cae7029dfe122866F479E3b6eFb88dA3b35aea',
        '   Solana: 6Xu2q4nifx9pfdwLtvAHSfGnXhXUJhnjWqcDhfhT1vpY',
      ]
    }
  ]}
  completionMessage="🎉 That's it! Your app is deployed with its own wallet."
  ctaButton={{ text: 'Deploy Your Own →', href: '/products/eigencompute/quickstart' }}
/>

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

Security enhancements in development:
- Public attestation endpoints for runtime verification
- Threshold KMS for distributed key management
- Replica prevention via onchain checks and heartbeats
- Verifiably built images with reproducible builds

## Documentation

- **[Quickstart Guide](./quickstart)** - Deploy your first app in 5 minutes
- **[CLI Commands](./cli-commands/authentication)** - Complete command reference
- **[Architecture Guide](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_ARCHITECTURE.md)** - Deep dive into how EigenCompute works
- **[Core Concepts](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_CONCEPTS.md)** - Understanding keys, security, and best practices
