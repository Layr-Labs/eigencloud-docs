---
sidebar_position: 2
title: Data Structures
---

# EigenDA Data Structures

## BlobKey (Blob Header Hash)

The `blobKey` (also called `blob_header_hash` or `blobHeaderHash`) is the main identifier used throughout EigenDA. It's a 32-byte value that uniquely identifies each blob dispersal, and you'll use it when querying dispersal status, retrieving blobs, and linking blobs to their certificates.

### Common Use Cases

There are two primary scenarios for working with blob keys:

**1. You have data and want to compute a blob key (direct dispersal)**

When you call `DisperseBlob` directly with your data, the disperser computes and returns the blob key for you. You use this blob key to poll `GetBlobStatus` until dispersal completes, then retrieve the blob via the Relay API or validators. The disperser handles the blob key computation, but you should verify it matches your own computation.

**2. You have a commitment and need to compute a blob key (proxy dispersal - most common)**

When using the EigenDA proxy, your rollup receives a DA commitment after dispersal, but you need to compute the blob key yourself to retrieve the data later:
1. Deserialize the `BlobCertificate` from the commitment
2. Extract the `BlobHeader` from the certificate
3. Compute the blob key by hashing the header (see "How the BlobKey is Computed" below)
4. Use this blob key to call `GetBlob` on relays or `GetChunks` on validators

This proxy flow is the most common pattern for rollups integrating with EigenDA.

### How the BlobKey is Computed

The blob key is the keccak256 hash of the ABI-encoded `BlobHeader`. The hashing uses a nested structure: first it hashes the blob's content and dispersal requirements (version, quorums, and commitment), then combines that with the payment metadata hash. This means the same blob content dispersed with different payment terms gets a different blob key each time.

The disperser enforces uniqueness - if you try to disperse a blob with a previously used blob key, the request will be rejected.

In practice, you'll use the SDK to compute the blob key. Here's how to do it in Go:

```go
import (
    "github.com/Layr-Labs/eigenda/core/v2"
    "github.com/Layr-Labs/eigenda/encoding"
)

// Compute the blob key from blob header components
blobKey := core.ComputeBlobKey(
    blobVersion,        // BlobVersion
    blobCommitments,    // encoding.BlobCommitments (G1 and G2 points)
    quorumNumbers,      // []core.QuorumID (automatically sorted)
    paymentMetadataHash, // [32]byte
)
```

The function performs a nested hash:
1. First, it hashes the blob version, quorum numbers (sorted), and commitments
2. Then, it combines that hash with the payment metadata hash and hashes again
3. Returns a 32-byte blob key

A few important notes:
- `paymentMetadataHash` must be pre-computed from your `PaymentHeader` structure
- Quorum numbers are automatically sorted before hashing to ensure consistency
- This implementation matches the onchain hashing in [`hashBlobHeaderV2()` (Solidity)](https://github.com/Layr-Labs/eigenda/blob/d73a9fa66a44dd2cfd334dcb83614cd5c1c5e005/contracts/src/integrations/cert/libraries/EigenDACertVerificationLib.sol#L324)

See the full implementation: [`ComputeBlobKey()` in Go](https://github.com/Layr-Labs/eigenda/blob/d73a9fa66a44dd2cfd334dcb83614cd5c1c5e005/core/v2/serialization.go#L42)

### Who Computes It

The disperser computes the blob key and returns it in the `DisperseBlobReply`. You can also compute it yourself for verification - in fact, clients should verify the returned blob key by recomputing it from the `BlobHeader` they sent. The Go client demonstrates this in [`verifyReceivedBlobKey()`](https://github.com/Layr-Labs/eigenda/blob/6be8c9352c8e73c9f4f0ba00560ff3230bbba822/api/clients/v2/payloaddispersal/payload_disperser.go#L370-L400).

For the proxy flow mentioned above, you'll compute the blob key yourself from the certificate included in the DA commitment.

### Example

Here's a concrete example. Say you're dispersing a blob with:
- `version`: `0x0001`
- `quorumNumbers`: `[0, 1]` (sorted)
- `commitment`: The cryptographic commitment to your blob data (G1 point and G2 length commitment)
- `paymentHeaderHash`: `0x1234...` (the 32-byte hash of your PaymentHeader)

Computing the blob key happens in two steps:

First, hash the core dispersal parameters:
```
innerHash = keccak256(abi.encode(version, quorumNumbers, commitment))
```

Then combine that with the payment hash:
```
blobKey = keccak256(abi.encode(innerHash, paymentHeaderHash))
```

You can then use this blob key to query dispersal status with `GetBlobStatus`, retrieve chunks from validators with `GetChunks`, or fetch the full blob from relays with `GetBlob`.

### How It Relates to Other Structures

The blob key is the hash of the `BlobHeader`. A `BlobCertificate` wraps that header along with signatures and relay keys. When proving that a certificate was included in a batch, you use a `BlobInclusionInfo` which contains the certificate plus a Merkle proof. The `BatchHeader` has a `batchRoot` - that's the root of a Merkle tree where each leaf is the hash of a `BlobCertificate`.

![EigenDA V2 Batch Hashing Structure](/img/eigenda/v2-batch-hashing-structure.png)

## BlobHeader

The `BlobHeader` has the metadata for a blob dispersal - version, quorum numbers, blob commitment, and payment info. You submit it alongside the blob data in your `DisperseBlob` request.

See the [protobuf definition](https://github.com/Layr-Labs/eigenda/blob/master/api/proto/disperser/v2/disperser_v2.proto) for field details.

## BlobCertificate

A `BlobCertificate` packages up a `BlobHeader` with signatures and relay keys. You'll find it in the blob status reply - it has everything you need to verify blob availability and retrieve the data.

See the [protobuf definition](https://github.com/Layr-Labs/eigenda/blob/master/api/proto/common/v2/common_v2.proto) for field details.
