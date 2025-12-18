---
sidebar_position: 2
title: Create and Deliver Certificates
---

The AVS developer needs to enable their service to produce stake-backed certificates that are verifiable by 
consumers. This includes: 
1. [Creating and verifying certificates](#create-and-verify-certificates).
2. [Delivering or exposing certificates](#deliver-or-expose-certificates).

:::tip
The [Hourglass template](https://github.com/Layr-Labs/hourglass-avs-template) includes a reference implementation for certificate creation using an AVS aggregator.
:::

## Create and Verify Certificates

To create a certificate for multiple Operators: 
1. Implement the offchain component to collect signed certificates from Operators. 
2. [Create the certificate](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-008.md#certificates--verification). Ensure the certificate includes the correct `referenceTimestamp` that corresponds to the latest 
(or desired) stake table version transported to the target chain. The `referenceTimestamp` must match the stake table exactly.

Typically, a certificate consists of an aggregation of Operator signatures that is [verified against stake tables using 
the `CertificateVerifier`](verification-methods.md). In the case of a single Operator, the Operator can produce a certificate
with only their signature.

## Deliver or Expose Certificates

Once created, certificates need to be delivered to Consumers, or stored in a location available to Consumers.  Options include:
* Deliver to Consumer in response to requests.
* Push certificate to storage (for example, IPFS or L2 contract). 

The [required threshold (proportional or nominal)](verification-methods.md) for verification also needs to be supplied to the Consumer. 

## Next 

[The AVS Consumer receives, verifies, and acts on certificates returned from the AVS.](consume-certificates.md)