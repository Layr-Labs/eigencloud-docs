---
title: Understanding AVSs on EigenLayer
sidebar_position: 4
---

## What is an AVS

An AVS is a service whose offchain work results in onchain commitments that can be verified and enforced with cryptoeconomic guarantees.

An AVS has offchain and onchain components, and the onchain components interact with the EigenLayer contracts.

When you build an AVS, you are building a cryptoeconomic loop:
1. Operators make commitments
2. Those commitments are verifiable
3. Correct behavior is rewarded
4. Misbehavior can be proven and penalized
5. Parties harmed by misbehavior can be compensated

## What does EigenLayer Provide

EigenLayer provides the onchain protocol components to implement the cryptoeconomic loop. 

| Action                                           | EigenLayer Component                                   |
|--------------------------------------------------|--------------------------------------------------------|
| Operators make commitments                       | Join an Operator Set and allocate stake                |
| Those commitments are verifiable                 | CertificateVerifier and Operator Stake Table           |
| Correct behavior is rewarded                     | Rewards framework                                      |
| Misbehavior can be proven and penalized          | Slashing mechanism and other penalties such as ejection |
| Parties harmed by misbehavior can be compensated | Redistribution                                         |


Additionally EigenLayer provides onchain infrastructure for multichain deployments and key management.

| Action                                        | EigenLayer Component                                   |
|-----------------------------------------------|--------------------------------------------------------|
| Deploying on multiple chains                  | Multichain Verification framework                      |
| Secure key rotation, revocation, and recovery | User Access Management (UAM)                           |
