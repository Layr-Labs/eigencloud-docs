---
title: Client Configuration
sidebar_position: 2
---

<!-- AUTO-GENERATED from ecloud@v0.5.0 -->

# Client Configuration

The ECloud SDK client is the main entry point for interacting with EigenCompute. It provides access to all SDK modules and handles authentication and network configuration.

## Creating a client

### Basic usage

```typescript
import { createECloudClient } from '@layr-labs/ecloud-sdk';

const client = createECloudClient({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  environment: 'sepolia',
});
```

### With custom RPC

```typescript
const client = createECloudClient({
  privateKey: '0x...',
  environment: 'mainnet-alpha',
  rpcUrl: 'https://rpc.example.com',
  verbose: true,
});
```

### Multiple RPC endpoints (fallback)

```typescript
const client = createECloudClient({
  privateKey: '0x...',
  environment: 'sepolia',
  rpcUrl: [
    'https://rpc1.example.com',
    'https://rpc2.example.com',
    'https://rpc3.example.com',
  ],
});
```

## Configuration options

### ClientConfig

```typescript
interface ClientConfig {
  /**
   * Private key for signing transactions
   * Must be a hex string starting with '0x'
   */
  privateKey: `0x${string}`;
  
  /**
   * Deployment environment
   * - 'sepolia': Sepolia testnet
   * - 'mainnet-alpha': Ethereum mainnet
   */
  environment: 'sepolia' | 'mainnet-alpha';
  
  /**
   * Custom RPC URL(s) for Ethereum node connection
   * Can be a single URL or array of URLs for fallback
   * @default Uses environment's default RPC
   */
  rpcUrl?: string | string[];
  
  /**
   * Enable verbose logging
   * @default false
   */
  verbose?: boolean;
}
```

## Authentication

The SDK requires a private key to sign transactions. Provide it using one of these methods:

### 1. Environment variable

Set the `PRIVATE_KEY` environment variable:

```bash
export PRIVATE_KEY=0x...
```

```typescript
const client = createECloudClient({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  environment: 'sepolia',
});
```

### 2. OS keychain (using ecloud CLI)

Store your key securely [using the ecloud CLI](../../howto/setup/create-use-auth-keys.md):

```bash
ecloud auth create
```

Retrieve it programmatically:

```typescript
import { requirePrivateKey } from '@layr-labs/ecloud-sdk';

const privateKey = await requirePrivateKey({
  environment: 'sepolia',
  // Will prompt or retrieve from keychain
});

const client = createECloudClient({
  privateKey,
  environment: 'sepolia',
});
```

### 3. Direct parameter

Pass the private key directly (not recommended for production):

```typescript
const client = createECloudClient({
  privateKey: '0x...',
  environment: 'sepolia',
});
```

:::caution Security
Never commit private keys to source control. Use environment variables or secure key management systems in production.
:::

## Client properties

Once created, the client exposes the following modules:

```typescript
const client = createECloudClient({ ... });

// Access modules
client.compute    // Compute module (app deployment & management)
client.billing    // Billing module (subscriptions & credits)

// Billing address
client.billing.address  // Ethereum address derived from private key
```

## Environments

See [Billing](../../get-started/billing.md) for subscription setup and [Prerequisites](../../get-started/quickstart.md#prerequisites) for client creation.

### Sepolia (testnet)

Development and testing environment on Sepolia testnet.

```typescript
const client = createECloudClient({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  environment: 'sepolia',
});
```

### Mainnet Alpha

Ethereum mainnet environment (currently in Alpha phase).

```typescript
const client = createECloudClient({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  environment: 'mainnet-alpha',
});
```

## Verbose logging

Enable detailed logging for debugging:

```typescript
const client = createECloudClient({
  privateKey: '0x...',
  environment: 'sepolia',
  verbose: true,  // Enable verbose output
});
```

When enabled, the SDK logs:
- Transaction submissions
- API requests
- Deployment progress
- Error details

## Error handling

```typescript
try {
  const client = createECloudClient({
    privateKey: process.env.PRIVATE_KEY as `0x${string}`,
    environment: 'sepolia',
  });
  
  // Method calls may throw
  await client.compute.app.deploy({ ... });
} catch (error) {
  if (error.message.includes('insufficient funds')) {
    console.error('Not enough ETH for gas');
  } else {
    console.error('Error:', error.message);
  }
}
```

## Best practices

### 1. Use environment variables

```typescript
const client = createECloudClient({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  environment: (process.env.ECLOUD_ENV || 'sepolia') as 'sepolia' | 'mainnet-alpha',
  rpcUrl: process.env.RPC_URL,
});
```

### 2. Enable verbose logging during development

```typescript
const client = createECloudClient({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  environment: 'sepolia',
  verbose: process.env.NODE_ENV === 'development',
});
```

## Private key utilities

### Generate a new private key

```typescript
import { generateNewPrivateKey } from '@layr-labs/ecloud-sdk';

const { privateKey, address } = generateNewPrivateKey();
console.log('Private Key:', privateKey);
console.log('Address:', address);
```

### Validate private key format

```typescript
import { validatePrivateKeyFormat } from '@layr-labs/ecloud-sdk';

const isValid = validatePrivateKeyFormat('0x...');
if (!isValid) {
  throw new Error('Invalid private key format');
}
```

## Next steps

- [Use ecloud SDK](../../howto/build/use-ecloud-sdk.md) - How-to guide
- [Deploy an application](../../get-started/quickstart.md) - Quickstart guide
- [Manage subscriptions](../../get-started/billing.md) - Billing and credits
- [View ecloud SDK source](https://github.com/Layr-Labs/ecloud/blob/main/packages/sdk/src/client/index.ts)
