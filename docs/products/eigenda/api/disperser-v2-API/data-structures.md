---
sidebar_position: 2
title: Data Structures
---

# EigenDA Data Structures

## BlobKey (Blob Header Hash)

The `blobKey` (also called `blob_header_hash` or `blobHeaderHash`) is the main identifier used throughout EigenDA. It's a 32-byte value that uniquely identifies each blob dispersal, and you'll use it when querying dispersal status, retrieving blobs, and linking blobs to their certificates.

### How the BlobKey is Computed

The blob key is the keccak256 hash of the ABI-encoded `BlobHeader`. The hashing uses a nested structure: first it hashes the blob's content and dispersal requirements (version, quorums, and commitment), then combines that with the payment metadata hash. This means the same blob content dispersed with different payment terms gets a different blob key each time.

The disperser enforces uniqueness - if you try to disperse a blob with a previously used blob key, the request will be rejected.

```solidity
blobKey = keccak256(
    abi.encode(
        keccak256(abi.encode(blobHeader.version, blobHeader.quorumNumbers, blobHeader.commitment)),
        blobHeader.paymentHeaderHash
    )
)
```

A few things to note:
- `paymentHeaderHash` is itself a keccak256 hash of the `PaymentHeader` structure. Hashing payment metadata separately keeps on-chain verification efficient.
- `quorumNumbers` are sorted in ascending order before hashing. This ensures you get the same hash regardless of what order you specify the quorums.

### Who Computes It

The disperser computes the blob key and returns it in the `DisperseBlobReply`. You can also compute it yourself for verification - in fact, clients should verify the returned blob key by recomputing it from the `BlobHeader` they sent.

If you're working with a rollup that receives DA commitments from the proxy, you can extract the blob key by deserializing the `BlobCertificate` from the commitment, pulling out its `BlobHeader`, and computing the hash.

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

### Code References

Solidity: [`hashBlobHeaderV2()`](https://github.com/Layr-Labs/eigenda/blob/d73a9fa66a44dd2cfd334dcb83614cd5c1c5e005/contracts/src/integrations/cert/libraries/EigenDACertVerificationLib.sol#L324)

Go: [`ComputeBlobKey()`](https://github.com/Layr-Labs/eigenda/blob/d73a9fa66a44dd2cfd334dcb83614cd5c1c5e005/core/v2/serialization.go#L42)

The Go client shows how to verify the blob key in [`verifyReceivedBlobKey()`](https://github.com/Layr-Labs/eigenda/blob/6be8c9352c8e73c9f4f0ba00560ff3230bbba822/api/clients/v2/payloaddispersal/payload_disperser.go#L370-L400). After getting a `DisperseBlobReply`, compute the blob key yourself and check that it matches what the disperser returned.

### Where You'll Use It

**During dispersal:** The `DisperseBlob` method returns a blob key, which you then use with `GetBlobStatus` to poll until dispersal completes.

**Centralized retrieval:** The Relay API's `GetBlob` method takes the blob key as its lookup parameter.

**Decentralized retrieval:** Validators' `GetChunks` method also uses the blob key. You can grab erasure-coded chunks directly from validators and reconstruct the original blob.

**Other APIs:** The Data API and Blob Explorer both use blob key as the primary identifier when querying blob metadata and status.

**Verification:** The blob key links each blob to its certificate, so you can verify the certificate actually corresponds to the blob you care about.

## BlobHeader

The `BlobHeader` has the metadata for a blob dispersal - version, quorum numbers, blob commitment, and payment info. You submit it alongside the blob data in your `DisperseBlob` request.

See the [protobuf definition](https://github.com/Layr-Labs/eigenda/blob/master/api/proto/disperser/v2/disperser_v2.proto) for field details.

## BlobCertificate

A `BlobCertificate` packages up a `BlobHeader` with signatures and relay keys. You'll find it in the blob status reply - it has everything you need to verify blob availability and retrieve the data.

See the [protobuf definition](https://github.com/Layr-Labs/eigenda/blob/master/api/proto/common/v2/common_v2.proto) for field details.
