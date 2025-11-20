---
title: Deterministic Execution
sidebar_position: 2
---

EigenAI provides verifiable AI inference through deterministic execution using GPUs. See deterministic execution in action at
[deterministicinference.com](https://www.deterministicinference.com/).

The EigenAI API is deterministic, meaning that when you send the same request (including identical prompt, parameters, and
configuration) multiple times, it produces exactly the same output bit-for-bit each time. This differs from APIs such as 
OpenAI or Anthropic, which may return slightly different responses for identical inputs because they don't guarantee determinism
by design.

Deterministic execution enables: 

* Reproducible results. The same request results in the same output. Reproducible results
enable reliable workflows with consistent outputs. 
* Verifiability. A EigenAI user can repeat a request made by an application and verify they get the same result. 
* Consistent [tool call](https://platform.openai.com/docs/guides/function-calling) planning. 
* Simplified debugging of workflows that include AI inference due to consistent AI outputs.