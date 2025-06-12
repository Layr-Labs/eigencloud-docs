---
title: EigenVerify Overview
sidebar_position: 3
---

## What is EigenVerify?

For AVS and rollup builders, writing custom fraud proofs is difficult and time consuming. EigenVerify is a set of ready to use 
dispute resolution services that can adjudicate the correctness of any AVS execution result in the event of a challenge. 
It will support three modes of dispute resolution: objective (via deterministic re-execution), intersubjective (via socially agreed-upon rules), 
and AI-assisted adjudication (for more complex or ambiguous cases). All outcomes are ultimately backed by EIGEN token forking, 
ensuring that honest participants can always coordinate on a canonical result.

## Why Use EigenVerify?
1. AVS builders can skip the complexity of designing custom fraud-proof systems by integrating directly with EigenVerify’s dispute
resolution infrastructure.
2. Support for objective (via re-execution), intersubjective (e.g., determinism, oracle consensus), and AI-based adjudication covers a wide spectrum of dispute types.
3. New AVSs can launch in weeks by outsourcing slashing to EigenVerify, thus dramatically reducing engineering lift and allowing teams
to focus on product and adoption.
4. For the first time, AVSs can now leverage the forkability of the EIGEN token to resolve disputes with strong cryptoeconomic guarantees.


## How it Works (in preview)
EigenVerify is currently available to select customers in private preview. We are hardening our code and approach, but the early design is:
* Any AVS can register with EigenVerify by meeting specific conditions.
* For objective adjudication, AVSs post claims during normal execution; if challenged, these are re-executed off-chain by a set of EigenVerify operators. The aggregated result is posted on-chain, and slashing is triggered if it differs from the original claim.
* Over time, more complex disputes, such as those involving oracle or AI outputs can be resolved through intersubjective or AI-based adjudication.
* If the adjudication outcome is disputed, anyone can trigger a fork of the EIGEN token, providing ultimate enforcement through social consensus.

## When Will it be Available?

EigenVerify is available to select customers in private preview today, we plan to open it more broadly in late Q3 2025.

If you are interested in learning more or being included in the private preview, please complete [this form](http://www.eigencloud.xyz/contact).  
A member of the team will reach out to discuss your project and how we can help support your next steps.