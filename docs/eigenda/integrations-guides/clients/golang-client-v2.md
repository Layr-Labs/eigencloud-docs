---
sidebar_position: 1
title: Using the Go Clients
---

EigenDA provides low-level golang clients which wraps the bottom-level GRPC client with ECDSA keypair authentication logic. 
The EigenDA v2 clients are available in the [EigenDA repo](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2).

For examples using the v2 go clients, refer to: 
* [Client construction](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2/examples/client_construction.go)
* [Retrieval from relay](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2/examples/example_relay_retrieval_test.go)
* [Retrieval from validator](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/v2/examples/example_validator_retrieval_test.go).