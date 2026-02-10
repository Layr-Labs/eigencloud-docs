---
title: Use ecloud SDK
sidebar_position: 1
---

Use the ecloud SDK to:

* Deploy containerized applications to ecloud TEE
* Manage application lifecycle (start, stop, terminate)
* Build and push Docker images with encryption
* Monitor application status and logs

## Getting Started

1. Install ecloud SDK:

```
npm install @layr-labs/ecloud-sdk
```

2. Create a TypeScript file (for example, `subscribe.ts`) that initializes the SDK client and subscribes to EigenCompute:

```
import { createECloudClient } from '@layr-labs/ecloud-sdk';

async function main() {
  const client = createECloudClient({
    privateKey: process.env.PRIVATE_KEY as `0x${string}`,
    environment: 'sepolia',
    verbose: true,
  });
  
  console.log('✓ Client created!');
  console.log('Your address:', client.billing.address);
  
  // Subscribe
  const result = await client.billing.subscribe({
    productId: 'compute',
    successUrl: 'https://example.com/success',  // Where to redirect after payment
    cancelUrl: 'https://example.com/cancel',    // Where to redirect if cancelled
  });
  
  if (result.type === 'checkout_created') {
    console.log('\n🔗 Complete your subscription here:');
    console.log(result.checkoutUrl);
    console.log('\nOpen this URL in your browser to add payment details.');
  } else if (result.type === 'already_active') {
    console.log('✓ Already subscribed! Status:', result.status);
  } else if (result.type === 'payment_issue') {
    console.log('⚠️  Payment issue. Visit:', result.portalUrl);
  }
}

main().catch(console.error);
```

3. Run the script with your private key to generate a checkout URL:

```
PRIVATE_KEY=0x... npx tsx subscribe.ts 
```