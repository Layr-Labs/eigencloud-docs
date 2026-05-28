---
title: Overview
sidebar_position: 1
sidebar_label: Overview
---

<!-- AUTO-GENERATED from ecloud@v0.5.0 -->

# Overview

The ECloud SDK is a TypeScript library for deploying and managing applications on the EigenCompute Trusted Execution Environment (TEE) infrastructure.

## Overview

The SDK provides:
- **Application deployment** - Deploy containerized apps to TEE
- **Lifecycle management** - Start, stop, upgrade, and terminate apps
- **Billing and subscriptions** - Manage EigenCompute subscriptions and credits
- **Verifiable builds** - Submit and verify reproducible builds
- **TEE attestation** - Generate cryptographic proofs of execution
- **Browser support** - React hooks and browser-safe APIs

## Installation

Install the SDK using npm or yarn:

```bash
npm install @layr-labs/ecloud-sdk
```

```bash
yarn add @layr-labs/ecloud-sdk
```

## Quick start

### 1. Create a client

```typescript
import { createECloudClient } from '@layr-labs/ecloud-sdk';

const client = createECloudClient({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  environment: 'sepolia',
  verbose: true,
});

console.log('Your address:', client.billing.address);
```

### 2. Subscribe to EigenCompute

```typescript
const result = await client.billing.subscribe({
  productId: 'compute',
  successUrl: 'https://example.com/success',
  cancelUrl: 'https://example.com/cancel',
});

if (result.type === 'checkout_created') {
  console.log('Complete subscription:', result.checkoutUrl);
} else if (result.type === 'already_active') {
  console.log('Already subscribed!');
}
```

### 3. Deploy an application

```typescript
const deployment = await client.compute.app.deploy({
  appName: 'my-app',
  imageReference: 'myregistry/myapp:latest',
  env: {
    PORT: '3000',
  },
});

console.log('App deployed!');
console.log('App ID:', deployment.appId);
console.log('IP Address:', deployment.ipAddress);
```

## Modules

The SDK is organized into functional modules.

| Module | Purpose |
|--------|---------|
| **[Client](client.md)** | SDK initialization and configuration |
| **Compute** | Deploy and manage applications |
| **Billing** | Subscriptions and credit management |
| **Build** | Verifiable builds and provenance |
| **Attest** | TEE attestation (run inside TEE) |
| **Browser** | Browser-safe APIs and React hooks |
| **Utilities** | Helper functions and validators |

## Package exports

The SDK provides multiple entry points:

```typescript
// Full SDK (Node.js)
import { createECloudClient } from '@layr-labs/ecloud-sdk';

// Browser-safe subset
import { createECloudClient } from '@layr-labs/ecloud-sdk/browser';

// Direct module access
import { createComputeModule } from '@layr-labs/ecloud-sdk/compute';
import { createBillingModule } from '@layr-labs/ecloud-sdk/billing';

// Attestation module (for use inside TEE)
import { AttestClient } from '@layr-labs/ecloud-sdk/attest';
```

## Environments

The SDK supports two environments:

| Environment | Network |
|------------|---------|
| `sepolia` | Sepolia testnet |
| `mainnet-alpha` | Ethereum mainnet |

:::important Mainnet Alpha Limitations
- Not recommended for customer funds - Mainnet Alpha is intended to enable developers to build, test and ship applications.
- Developer is trusted - Does not enable full verifiable and trustless execution yet.
- No SLA - No SLAs around support and uptime of infrastructure.
:::

## TypeScript support

The SDK provides comprehensive type definitions:

```typescript
import type {
  ECloudClient,
  DeployAppOpts,
  AppId,
  Environment,
} from '@layr-labs/ecloud-sdk';
```

See the [SDK source code](https://github.com/Layr-Labs/ecloud/tree/main/packages/sdk/src) for complete type definitions.

## Authentication

The SDK supports multiple methods for providing your private key:

1. **Environment variable**: `PRIVATE_KEY=0x...`
2. **OS keychain**: Stored via `ecloud auth` CLI
3. **Direct parameter**: Pass to `createECloudClient()`

See the [Client reference](client.md#authentication) for details.

## Error handling

SDK methods throw errors when they fail. Use try-catch for error handling:

```typescript
try {
  await client.compute.app.deploy({ ... });
} catch (error) {
  console.error('Deployment failed:', error.message);
}
```

## Links

- **npm package**: [@layr-labs/ecloud-sdk](https://www.npmjs.com/package/@layr-labs/ecloud-sdk)
- **Source code**: [github.com/Layr-Labs/ecloud](https://github.com/Layr-Labs/ecloud)
- **Current version**: v0.5.0 (May 2026)
- **How-to guide**: [Use ecloud SDK](../../howto/build/use-ecloud-sdk.md)

## Next steps

- [Configure the client](client.md) - Detailed client setup
- [Deploy an application](../../get-started/quickstart.md) - Quickstart guide
- [Manage subscriptions](../../get-started/billing.md) - Billing and credits
