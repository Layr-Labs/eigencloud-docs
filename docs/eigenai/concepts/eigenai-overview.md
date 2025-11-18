---
title: EigenAI Overview
sidebar_position: 1
---

:::tip Get Started
While in Alpha **an allowlisted account is required to use the API.** If you have a wallet address already for [EigenCompute](../../eigencompute/concepts/eigencompute-overview.md) or if you have a separate address, use that address to submit an onboarding request here to receive an API key:

<a href="https://onboarding.eigencloud.xyz/?utm_source=docs&utm_content=eigenai_overview" className="onboardingButton" target="_blank" rel="noopener noreferrer">
  <span>Request Onboarding Access</span>
</a>
:::

## Overview
Build verifiable applications leveraging LLM inference without wondering if the same LLM call might produce different results 
on different runs, or whether your prompts, models, or responses are modified in any way. EigenAI offers:

* [Deterministic execution of EigenAI API requests.](deterministic-execution.md)
* [Drop-in compatibility with the OpenAI API.](drop-in-compatibility.md)

**AI is one of the greatest technological advancements in human history. Our mission is to enable any developer to build with scalable & verifiable AI, so that any developer anywhere in the world can build trusted applications.** 

## Use Cases

Builders are leveraging EigenAI to build applications such as:
- **Prediction Market Agents**: Build agents who can interpret real world events, news, etc and place bets or dispute market settlements.
- **Trading Agents**: Build agents who can reason through financial data with consistent quality of thinking (no need to worry if models are quantized or not in production) while you ensure they process all of the information they're given (unmodified prompts) and that agents actually use the unmodified responses. You can also ensure they reliably make the same trading decision if prompted about the same data multiple times (via EigenAI's determinism).
- **Verifiable AI Games**: Build games with AI characters or AI governance, where you can prove to your users that their interactions with the AI aren't being gamed.
- **Verifiable AI Judges**: Whether it's contests / games, admissions committees, or prediction market settlements, AI can be used to verifiably judge entries / submissions.

<img src="/img/eigenai-use-cases.jpg" alt="EigenAI Use Cases"/>

## Get started 

A few key points:

- By OpenAI compliancy we specifically mean the messages-based Chat Completions API: https://platform.openai.com/docs/api-reference/chat/create
- By “deterministic” we specifically mean that one request (prompt, parameters, etc) provided to the API multiple times will produce the **same output bit-by-bit**, compared to the potentially varying responses one would typically get if calling an OpenAI, Anthropic, etc endpoint as they do not guarantee deterministic behavior. We will be releasing more details shortly on how EigenAI achieves this across the stack.
- On wanting non-determinism:
    - You can still introduce non-determinism in your application if you want. By setting a different seed for requests but otherwise keeping the request the same, the API will produce a different output.
- On verification: As part of EigenAI’s mainnet alpha release, the code will be open sourced shortly after. Anyone with access to commodity GPUs will be able to leverage the determinism of EigenAI's software to re-execute any requests and verify the responses given to them by EigenAI.
    - As we go towards general availability, we will stand up another API that can be used for this verification flow.