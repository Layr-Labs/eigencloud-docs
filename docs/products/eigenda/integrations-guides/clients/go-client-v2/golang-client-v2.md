---
sidebar_position: 1
title: Using the Golang Client for Authenticated Dispersal
---

EigenDA provides a low-level golang client which wraps the bottom-level GRPC client with ECDSA keypair authentication logic. 
That client is available in the EigenDA repo in [disperser_client.go](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2/disperser_client.go).

For examples using the go client, refer to: 
* [Client construction](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2/examples/client_construction.go)
* [Retrieval from relay](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2/examples/example_relay_retrieval_test.go)
* [Retrieval from validator](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2/examples/example_validator_retrieval_test.go)
