---
sidebar_position: 5
title: Glossary
---
# EigenDA Glossary

This glossary provides definitions for core components and related terms of the EigenDA protocol.

## Architecture

### Validator Nodes
Validator nodes are responsible for attesting to the availability of a blob and making that blob available to retrieval nodes (and eventually light nodes). Validator nodes are registered and staked in EigenLayer, registered to the EigenDA operator set(s) corresponding to their delegated staked asset(s). Each Validator node validates, stores, and serves only a portion of each blob processed by the protocol.

### Dispersers
Dispersers encode data and pass this data to the Validator nodes. Dispersers must generate proofs for the correctness of the data encoding which are also passed to the Validator nodes. The disperser also aggregates availability attestations from the Validator nodes which can be bridged on-chain to support use-cases like rollups.

### Retrieval Nodes
Retrieval nodes collect data shards from the Validator nodes and decode them to produce the original data content.

### Light Nodes (Planned)
Light nodes provide observability so that Validator nodes cannot withhold data from retrieval nodes without this withholding being broadly observable.

### Cert Verifier
A smart contract on Ethereum, exposing a `verifyDACertV2()` function which verifies a blob cert using the security thresholds and required quorums. 

### EigenDA Network

All of the actors in the EigenDA Network including Validator Nodes, Dispersers, Retrieval Nodes, Relays, and contracts.

## Cryptography

### KZG Polynomial Commitments
A cryptographic protocol that allows one to commit to a polynomial and later prove evaluations at specific points with small, constant-sized proofs. In EigenDA, KZG commitments enable validators to verify their assigned data chunks belong to the original blob without downloading the entire dataset, ensuring trustless verification of disperser operations.

### Multi-reveal Proof
A cryptographic mechanism enabling verification of multiple KZG polynomial evaluations at different points using a single, succinct proof. Used in EigenDA by Validator nodes to efficiently verify their assigned chunks are valid parts of the original blob without requiring separate proofs for each evaluation point.

### Reed-Solomon Erasure Encoding
Used to transform blob data into redundant chunks distributed across validator nodes, ensuring the original data can be reconstructed even if some nodes fail or act maliciously. It enables EigenDA to maintain data availability as long as a sufficient number of honest nodes remain accessible.

## General Concepts

### Horizontal Scaling
The practice of increasing a system's capacity by adding more machines rather than upgrading existing ones. In EigenDA, this means growing network throughput by adding more validator nodes, each handling a portion of the encoded data, enabling the system to process larger data volumes as the network expands.

### DA Certificate
A cryptographic proof attesting that specific data has been properly encoded, distributed and is available on EigenDA. Contains signatures from validator nodes and other metadata used to validate by EigenDA users like rollups, AVSs or apps.

### Payload
User submitted data to EigenDA.

### Blob
The intermediate representation of user-submitted data (payload) following Reed–Solomon erasure encoding over the BN254 prime field (chunked and mapped to field elements), whose elements serve as polynomial coefficients and are KZG-committed for distribution to validators.

### Blob Key
Also known as `blob_header_hash` or `blobHeaderHash`. A 32-byte identifier computed as the keccak256 hash of the ABI-encoded BlobHeader. This is the main lookup key used throughout EigenDA for querying dispersal status, retrieving blobs from validators or relays, and linking blobs to their certificates. The disperser computes and returns the blob key to clients, who can verify it by recomputing the hash from the BlobHeader they sent.

### Chunk
A shard of the erasure-coded blob that is assigned to and stored by individual validators based on their stake weight. Each validator is responsible for only storing their specific chunks rather than the entire blob.

### Batch
A collection of multiple blobs that are processed together for efficiency, allowing validators to generate attestations for many blobs at once.

### ETH / EIGEN / Custom Quorum
A set of Validator nodes registered with EigenDA, with DA tasks sent to these nodes, independently weighted by their relative stake weight in the quorum. Denoted by the assets specified in the delegation requirements.