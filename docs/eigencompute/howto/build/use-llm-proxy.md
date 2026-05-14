---
title: Use LLM proxy
sidebar_position: 1
---

Use the LLM proxy to:
* Enable an agent to pay for it's own inference.
* Use inference APIs without needing to bring your own API keys.

## Get started 

```
npm install @layr-labs/ai-gateway-provider ai
```

:::note Minimal code example
```
import { eigen } from '@layr-labs/ai-gateway-provider';
import { generateText } from 'ai';

const { text } = await generateText({
model: eigen('anthropic/claude-sonnet-4.6'),
prompt: 'Hello',
});
```
:::

Clone [this repo](https://github.com/Layr-Labs/ecloud-inference-example) for an example application.

### How it works 

1. No API keys needed.  Authentication is handled automatically using JWTs issued by the KMS.
2. Works on EigenCloud.  Environment variables are correctly configured by default when you deploy.
3. Uses Vercel AI SDK as a gateway provider.
4. Anthropic models supported via Bedrock.

### Available models

The LLM proxy supports multiple providers. Use the format `provider/model`.

The supported models:
* `anthropic/claude-sonnet-4.6`
* `anthropic/claude-opus-4.7`
* `anthropic/claude-haiku-4.5`
* Models provided by [Vercel AI gateway](https://vercel.com/ai-gateway/models).

### Available on mainnet

The LLM proxy is available for `mainnet` deployments only. The LLM proxy is not available on `sepolia-dev`.