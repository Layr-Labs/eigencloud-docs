---
sidebar_position: 2
title: V1 Guide
---

# Quick Start

In this guide, we manually disperse and retrieve a blob from the EigenDA disperser. This is an extremely simple example that circumvents most of the complexities needed to benefit from the [secure properties](../../../core-concepts/overview)
 that EigenDA has to offer. After completing this quickstart, we recommend reading the [EigenDA Proxy Guide](../../eigenda-proxy/eigenda-proxy.md) guide to see how to setup a full integration with EigenDA.

## Dispersing Your First Blob to Testnet

**Prerequisites:**

- Open your favorite shell.
- [Install grpccurl](https://github.com/fullstorydev/grpcurl#installation).
- Install kzgpad: `go install github.com/layr-labs/eigenda/tools/kzgpad@latest`

**Step 1: Store (Disperse) a blob**

We target the [Sepolia Network](../../../networks/sepolia.md) Disperser/DisperseBlob endpoint:

```bash
$ grpcurl \
  -d '{"data": "'$(kzgpad -e hello)'"}' \
  disperser-testnet-sepolia.eigenda.xyz:443 disperser.Disperser/DisperseBlob

{
  "result": "PROCESSING",
  "requestId": "OGEyYTVjOWI3Njg4MjdkZTVhOTU1MmMzOGEwNDRjNjY5NTljNjhmNmQyZjIxYjUyNjBhZjU0ZDJmODdkYjgyNy0zMTM3MzQzMjM4MzczNTMwMzEzMTM5MzMzMzM2MzgzNzMzMzAzMDJmMzAyZjMzMzMyZjMxMmYzMzMzMmZlM2IwYzQ0Mjk4ZmMxYzE0OWFmYmY0Yzg5OTZmYjkyNDI3YWU0MWU0NjQ5YjkzNGNhNDk1OTkxYjc4NTJiODU1"
}
```

**Step 2: Poll Status Until the Blob gets Batched and Bridged**

The Disperser will return a `requestId` that you can use to poll the status of the blob. The status will change from `PROCESSING` to `CONFIRMED` once the blob has been successfully bridged onchain. This can take up to a few minutes, depending on network conditions. See the [Disperser API v1 Overview](../../../api/disperser-v1-API/overview.md) documentation for more details.

```bash
# Update the value of REQUEST_ID with the result of your disperse call above
$ REQUEST_ID="OGEyYTVjOWI3Njg4MjdkZTVhOTU1MmMzOGEwNDRjNjY5NTljNjhmNmQyZjIxYjUyNjBhZjU0ZDJmODdkYjgyNy0zMTM3MzQzMjM4MzczNTMwMzEzMTM5MzMzMzM2MzgzNzMzMzAzMDJmMzAyZjMzMzMyZjMxMmYzMzMzMmZlM2IwYzQ0Mjk4ZmMxYzE0OWFmYmY0Yzg5OTZmYjkyNDI3YWU0MWU0NjQ5YjkzNGNhNDk1OTkxYjc4NTJiODU1"
$ grpcurl \
  -d "{\"request_id\": \"$REQUEST_ID\"}" \
  disperser-testnet-sepolia.eigenda.xyz:443 disperser.Disperser/GetBlobStatus

{
  "status": "CONFIRMED",
  "info": {
    "blobHeader": {
      "commitment": {
        "x": "LvAG1kdZAttu4Le86xzTDZGmZIgEuocTNYicLlTsLuA=",
        "y": "Ez88I+rPb1gYjuepHJFaW9DtXIXzZKy0eEVFwKbwEtA="
      },
      "dataLength": 1,
      "blobQuorumParams": [
        {
          "adversaryThresholdPercentage": 33,
          "confirmationThresholdPercentage": 55,
          "chunkLength": 1
        },
        {
          "quorumNumber": 1,
          "adversaryThresholdPercentage": 33,
          "confirmationThresholdPercentage": 55,
          "chunkLength": 1
        }
      ]
    },
    "blobVerificationProof": {
      "batchId": 169982,
      "blobIndex": 2,
      "batchMetadata": {
        "batchHeader": {
          "batchRoot": "ptDrZ6PBEYAI9cwK1wBaU8DkVTuC5osQGiHHzasshRM=",
          "quorumNumbers": "AAE=",
          "quorumSignedPercentages": "RkM=",
          "referenceBlockNumber": 3553124
        },
        "signatoryRecordHash": "ZussG9vuP5MIcsNbJwozqfOHteoXB3xLAEgcCiXqxB4=",
        "fee": "AA==",
        "confirmationBlockNumber": 3553211,
        "batchHeaderHash": "fRi1f2vz0fjkHvjT1Vr5/R55iVPmJG6njdA6whYhPb0="
      },
      "inclusionProof": "KGEukYlavAXmakvgLDrqXUho8EFkVCyEOr+iXWT/QpdLw+m0hzpFn2AzX9TAEk+zYAC368Lvh8Msyj0pcLa+PA==",
      "quorumIndexes": "AAE="
    }
  }
}
```

**Step 3: Retrieve the blob**

Option A: invoke the `Disperser/RetrieveBlob` grpc method, which will retrieve the blob directly from the Disperser.

```bash
# Note the value for batch_header_hash can be obtained from the result of your
# call to GetBlobStatus via info.blob_verification_proof.batch_metadata.batch_header_hash.
BATCH_HEADER_HASH="fRi1f2vz0fjkHvjT1Vr5/R55iVPmJG6njdA6whYhPb0="
BLOB_INDEX="2"
$ grpcurl \
  -d "{\"batch_header_hash\": \"$BATCH_HEADER_HASH\", \"blob_index\":\"$BLOB_INDEX\"}" \
  disperser-testnet-sepolia.eigenda.xyz:443 disperser.Disperser/RetrieveBlob

{
  "data": "AGhlbGxv"
}

# You can further decode the data using jq and kzgpad:
$ grpcurl \
  -d "{\"batch_header_hash\": \"$BATCH_HEADER_HASH\", \"blob_index\":\"$BLOB_INDEX\"}" \
  disperser-testnet-sepolia.eigenda.xyz:443 disperser.Disperser/RetrieveBlob | \
  jq -r .data | kzgpad -d -

hello
```

Option B: Retrieve blob chunks from EigenDA nodes and reconstruct the blob yourself, by using the
[Retrieval Client](https://github.com/Layr-Labs/eigenda/tree/master/retriever).

### Null Bytes Padding

When the blob is retrieved it may be appended by a number of null bytes, which
the caller will need to remove. This occurs because the Disperser pads the blob
with null bytes to fit the frame size for encoding.

Once the user decodes the data, the decoded data may have null bytes appended to
the end. [Here is an example](https://github.com/Layr-Labs/eigenda/blob/master/test/integration_test.go#L522)
on how we trim the appended null bytes from recovered data.

## Troubleshooting

If you encounter an error that looks like this:

```bash
ERROR:
  Code: InvalidArgument
  Message: rpc error: code = InvalidArgument desc = encountered an error to convert a 32-bytes into a valid field element, please use the correct format where every 32 bytes(big-endian) is less than 21888242871839275222246405745257275088548364400416034343698204186575808495617
```

This means that you have stumbled upon an idiosyncracy of how EigenDA currently
works. Essentially what this means is that you have tried to disperse a blob
that is not encoded correctly, and that in order to disperse this blob you
should first encode it using `kzgpad`, a utility distributed in the `eigenda`
repo. This error is much more likely to be encountered when playing with EigenDA
using a raw GRPC CLI, since there is no encoding logic built-in. Please see
[Blob Serialization Requirements](../../../api/disperser-v1-API/blob-serialization-requirements.md) for more detail.
