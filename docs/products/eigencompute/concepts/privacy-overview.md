---
title: Privacy 
sidebar_position: 7
---

EigenCompute provides strong privacy guarantees through TEE isolation and encryption. To build secure applications, 
it's important to understand what's private and what's public.

## Private to your TEE Application 

| Category                        | Details                                                                                       | Example Use Case                                                                                                                                                                                                  |
|:--------------------------------|:----------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TEE Mnemonic                    | KMS-generated mnemonic only accessible inside your specific TEE instance                      | Build an autonomous trading bot that manages real funds without exposing private keys to operators                                                                                                                |
| Encrypted environment variables | Environment variables encrypted by KMS, only decryptable within your TEE                      | Store API keys for payment processors or AI services that your app uses. Even EigenLabs can't see them                                                                                                            |
| Application code                | Your containerized application runs in isolation within the TEE                               | Run proprietary trading algorithms or ML models where the logic itself is valuable IP                                                                                                                             |
| Runtime data                    | Memory contents, temporary files, and process state isolated in TEE                           | Process user PII or financial data in memory without it being accessible to cloud providers                                                                                                                       |
| Private keys                    | Any keys derived from or stored within the TEE environment                                    | Generate signing keys for multi-party computation or [attestations](https://docs.trustauthority.intel.com/main/articles/articles/ita/concept-attestation-overview.html) that prove computation happened correctly |

## Publicly Visible Information

| Category                      | Details                                                                 |
|:------------------------------|:------------------------------------------------------------------------|
| App metadata                  | App ID, name, deployment status, and basic configuration                |
| Container image               | Docker image reference and tags used for deployment                     |
| Container registry            | Your container hosted on DockerHub/OCI registries is publicly viewable  |
| Public environment variables  | Environment variables with `_PUBLIC` suffix                               |
| Network endpoints             | Public IP addresses and exposed ports for your application              |
| Logs (if public)              | Application logs only if configured to be public (private by default)   |

## Privacy Guarantees 

| Guarantee             | Details                                                                                                                                                                                                      |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Code isolation        | Your application code executes in hardware-enforced isolation                                                                                                                                                |
| Data encryption       | All sensitive data encrypted at rest, and decryptable within TEE. In the Mainnet Alpha, EigenLabs has KMS key access. Future releases will use a hardened external system with onchain-authorized upgrades.  |
| Attestation-based     | KMS releases secrets to verified TEE instances via cryptographic attestation proof                                                                                                                           |
| Limited admin access  | EigenLabs cannot access your TEE's internal state or memory. However, in the Mainnet Alpha they have access to KMS keys for encryption/decryption operations.                                                |

## Privacy Boundaries 

* Private by default 

     All application data and environment variables are private unless explicitly marked public.
* TEE boundary

    Privacy protection exists at the TEE hardware level, not just software isolation.
* Customer control

    You decide what information to make transparent through public environment variables.
* Container transparency
    
    Your container image on DockerHub/OCI registries is publicly accessible, allowing users to audit and understand trust assumptions.
* Log privacy control
    
    Application logs can be configured as private (default) or public based on your transparency requirements.