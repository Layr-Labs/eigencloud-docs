---
title: EigenAI Overview
sidebar_position: 1
---

:::tip Get Started

Go to [deTERMinal](https://determinal.eigenarcade.com) and get a 1M inference token credit for free by connecting your X account.

To integrate deTERMinal token credit with your client, refer to the [Grant API Integration README](https://github.com/scotthconner/eigenx-determinal-token-grants).

<a href="https://determinal.eigenarcade.com" className="onboardingButton" target="_blank" rel="noopener noreferrer">
  <span>1M token credit</span>
</a>


For more tokens or different models, you can [contact us here](https://ein6l.share.hsforms.com/2L1WUjhJWSLyk72IRfAhqHQ).
:::

## What is EigenAI? 

EigenAI is a deterministic, verifiable LLM inference service that provides an OpenAI-compatible API for executing open source LLMs.
Unlike traditional AI services where you trust the provider's outputs, EigenAI enables cryptographic verification where inference
is executed using the specified model and input, and the output results are untampered.

:::note
- OpenAI-compatible refers to the [messages-based Chat Completions API](https://platform.openai.com/docs/api-reference/chat/create).
- Deterministic behavior refers to providing one request (prompt, seed/parameters) to the EigenAI API multiple times and receiving the same output bit-by-bit every time. The EigenAI inference stack is designed with this determinism guarantee. 
- Deterministic behavior requires not caching the results. Safety-critical systems cannot be vulnerable to potential cache misses.
:::

## Why build with EigenAI? 

1. Build verifiable applications leveraging LLM inference without wondering if the same LLM request might produce different results
on different runs, or whether your prompts, models, or responses are modified in any way. EigenAI offers:

    * [Deterministic execution of EigenAI API requests.](deterministic-execution.md)
    * [Drop-in compatibility with the OpenAI API.](drop-in-compatibility.md)

2. EigenAI provides the rails to instill trust for downstream stakeholders (such as users) that an AI output was executed 
as expected, and verifiably executed, improving confidence in automated and agentic workflows.

## How EigenAI works? 

EigenAI delivers verifiable LLM inference by making GPU execution a deterministic pipeline.

### Deterministic inference

EigenAI controls GPU execution and removes typical non-deterministic behavior found in kernel race conditions and opportunistic memory reuse. The overhead for this control remains negligible and retains practical inference performance (benchmarks will be included in the upcoming technical report).

### Isolated per-request execution

Each query runs in its own clean environment. The KV cache is reset, the full context is loaded, and tokens are generated sequentially with no batching or shared GPU state. This ensures that no other workload can influence the execution path or final output.

### Seed-controlled sampling

Randomness is governed through strict seed management. Users can provide a seed or rely on fixed defaults. This makes every result reproducible and enables users, or third parties, to re-run the exact same request to confirm correctness.

:::note
If different outputs for the same prompt are required, you can achieve this by setting different seeds across different requests of the same prompt, while retaining the option of deterministically replaying any of the requests with its respective seed.
:::

### Model and hardware integrity

EigenAI provides a consistent, verifiable execution stack. Model weights, quantization levels, and GPU types are fixed. Only H100 GPUs are used, with ECC memory enabled, providing stable, integrity-preserving computation.

## Verifiability Roadmap

EigenAI’s deterministic execution makes verification possible through deterministic re-execution. As we move through mainnet alpha into general availability, the verification pathways expand.

### Self-verification (Mainnet Alpha)
EigenAI will open source its inference stack. Anyone with access to commodity GPUs (H100s) can re-run a request locally using the same model, inputs, and seed, and confirm that the output matches bit-for-bit.

### Third-party verification (GA Target)
A separate verification API will allow independent operators to re-execute requests and return attestations. Applications can use this to spot-check results or provide external proof that an inference was executed correctly.

