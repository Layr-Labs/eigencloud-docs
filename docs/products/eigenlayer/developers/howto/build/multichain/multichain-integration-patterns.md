---
sidebar_position: 2
title: Integration Patterns
---

Multichain verifiable services can use the following integration patterns: 
1. [Pull](#pull) - Consumers pull certificate as needed.
2. [Push](#push) - Operators publish certificates, and consumers use cached certificates.
3. [Hybrid](#hybrid) - Consumers use cached certificates by default, and request fresh certificates as needed. 

## Pull

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

## Push

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

## Hybrid

The hybrid model uses the push model in the first instance, and if the certificate is stale or invalid, uses the pull model
to obtain a current, valid certificate.