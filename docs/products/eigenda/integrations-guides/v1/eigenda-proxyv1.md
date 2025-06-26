# EigenDA Proxy v1

## About

EigenDA proxy is a sidecar server run as part of a rollup node cluster for communication with the EigenDA network. Information about
proxy releases can be found [here](https://github.com/Layr-Labs/eigenda-proxy/releases).

### Example Rollup interaction diagram
Shown below is a high level flow of how proxy is used across a rollup stack by different network roles (i.e, sequencer, verifier). Any rollup node using an eigenda integration who wishes to sync directly from the parent chain inbox or a safe head must run this service to do so.

![Proxy V1 usage diagram](/img/integrations/proxy/proxy-v1.png)

### Usage
Different actors in the rollup topology will have to use proxy for communicating with EigenDA in the following ways:
- **Rollup Sequencer:** posts batches to proxy and submits accredited DA certificates to batch inbox
- **Rollup Verifier Nodes:** read batches from proxy to update a local state view (*assuming syncing from parent chain directly)*

- **Prover Nodes:** both rollup types (i.e, optimistic, zero knowledge) will have some way of deriving child chain state from the parent's inbox for the purpose of generating child --> parent bridge withdraw proofs. These "proving pipelines" will also read from proxy as well; either for settling disputes in optimistic rollups with working fraud proofs or for generating zero knowledge proofs attesting to the validity of some batch execution.

*E.g, In Arbitrum there is a `MakeNode` validator that posts state claims to the parent chain's rollup assertion chain. In the event of a challenge, both asserter/challenger players will have to pre-populate their local pre-image stores with batches read from the proxy to compute the WAVM execution traces that they will bisect over.*

:::note
Reference this [Quick Start](../quick-start/v2/index.md) to setup payments for your usage. 
:::
## Technical Details
[EigenDA Proxy](https://github.com/Layr-Labs/eigenda-proxy) wraps the [high-level EigenDA client](https://github.com/Layr-Labs/eigenda/blob/master/api/clients/eigenda_client.go) with an HTTP server, and performs additional verification tasks when reading and writing blobs that eliminate any trust assumption on the EigenDA disperser service. EigenDA Proxy also provides additional security features (i.e, read fallback) and optional performance optimizations (i.e, caching). Instructions for building and running the service can be found [here](https://github.com/Layr-Labs/eigenda-proxy/blob/main/README.md).


## Recommended Config Types
Different security measures and runtime optimizations can be applied through various proxy configurations. The different configuration flags can be found [here](https://github.com/Layr-Labs/eigenda-proxy/blob/main/docs/help_out.txt). The following recommendations are advised for different rollup node actor types:

### Batchers
Privileged roles that are responsible for submitting rollup batches to EigenDA should have the following presets:
- Certificate verification enabled. If the rollup (stage = 0) doesn't verify DA certs against the `EigenDAServiceManager` for writing then a `ETH_CONFIRMATION_DEPTH` should be reasonably set (i.e, >= 6). Otherwise, a certificate could be submitted to the sequencer's inbox using an EigenDA blob batch header which is reorged from Ethereum.

### Bridge Validators
Validators that are responsible for defending or progressing a child --> parent chain withdraw bridge should be configured with the following:
- Certificate verification enabled
- Read fallback configured with a secondary backed to ensure blobs can be read in the event of EigenDA retrieval failure

### Permissionless Verifiers
- Certificate verification enabled
- Use of a cached backend provider which ensures data read from EigenDA is only done once