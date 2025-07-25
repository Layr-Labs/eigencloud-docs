---
sidebar_position: 2
title: Obtain certificates
---

Multichain verifiable services can use the following integration patterns to obtain certificates: 
1. [Active verification](#active-verification) - Verification service wraps logic around the `CertificateVerifier`. Consumers pull certificate as needed.
2. [Self-service](#self-service) - Consumers request and receive cached certificates from Operators directly and can verify certificates against the stake weights onchain.
3. [Hybrid](#hybrid) - Consumers use cached certificates by default, and request fresh certificates as needed. 

## Active Verification

```
// 1. Consumer requests task from operator
TaskRequest memory task = TaskRequest({data: inputData, deadline: block.timestamp + 1 hours});
bytes memory result = operator.performTask(task);

// 2. Operator responds with certificate
Certificate memory cert = abi.decode(result, (Certificate));

// 3. Consumer verifies immediately
bool isValid = certificateVerifier.verifyCertificateProportion(operatorSet, cert, [6600]);
require(isValid, "Insufficient stake backing");
```

## Self-service

```
// 1. Query cached certificate (from AVS contract, IPFS, etc.)
Certificate memory cachedCert = avs.getLatestResult(taskType);

// 2. Check certificate freshness and validity
require(block.timestamp - cachedCert.referenceTimestamp < MAX_STALENESS, "Certificate too old");
bool isValid = certificateVerifier.verifyCertificateProportion(operatorSet, cachedCert, [5000]);
require(isValid, "Insufficient stake backing");

// 3. Use cached result
processResult(cachedCert.messageHash);
```

:::important
The `staleness` period is set in the [`CrossChainRegistry` by the verification service](../avs-developer/implement-multichain.md#4-opt-in-to-multichain).
:::

## Hybrid

The hybrid model uses the self-service model in the first instance, and if the certificate is stale or invalid, uses the active verification model
to obtain a current, valid certificate.