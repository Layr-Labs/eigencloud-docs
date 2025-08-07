---
sidebar_position: 5
title: Consume certificates
---

The AVS consumer is a smart contract, application, or protocol integrating with an AVS. They receive, verify, 
and act on certificates returned from the AVS. To do that, consumers:

1. Obtain a Certificate. Depending on the AVS integration model, consumers certificates by:
   * Making a request (for example, API call or onchain function) to the AVS.
   * Polling from decentralized storage.
   
    :::important
    If retrieving from a cache, consumers need to check the staleness period against the certificate.
    The `staleness` period is set in the [`CrossChainRegistry` by the verification service](configure-multichain).
    :::

2. Use the `CertificateVerifier` contract to [verify the certificate](verification-methods.md). 

3. Once the verification passes, the consumer can act on the AVS output. For example:
   * Use the AVS result (for example, a price, proof, or attestation)
   * Trigger follow-up logic (for example, settlement, payout, update)
   * Log or cache the certificate for transparency or auditability.

## Integration Examples

### Certificate Delivered in Response to Task Request

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

## Certificate Retrieved from Storage Cache

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
The `staleness` period is set in the [`CrossChainRegistry` by the verification service](configure-multichain).
:::

## Hybrid

The hybrid model queries cached certificates in the first instance, and if the certificate is stale or invalid, retrieves
from certificate storage.