---
sidebar_position: 1
title: EigenDA Overview
---

# What is EigenDA?

EigenDA is a data availability protocol developed by Eigen Labs and built on EigenLayer, live on Mainnet and Sepolia testnet.

EigenDA is built from the ground up to be optimally scalable and efficient, making it possible to provide DA at throughputs and costs that other solutions cannot approach.

## What Makes EigenDA Different?

### The most scalable DA layer

The blockchain trilemma implies that scalability, security, and decentralization will always be in conflict. Layer 2 rollups challenge the intuition conveyed by this trilemma by showing that the compute function of the blockchain can be taken off-chain and scaled more or less arbitrarily, leaving only a small verification footprint on the blockchain—all without compromising the other two axes of the trilemma. 

EigenDA was born out the realization that this same maneuver is possible for the data availability (DA) function of a blockchain: By moving data availability to a non-blockchain structure, full scalability is possible without any compromise to security or decentralization. 

In this way, EigenDA represents the completion of the Layer 2 scaling roadmap for Ethereum. Layer 2 rollups and other patterns such as EigenLayer Actively Validated Services can provide scalability for various forms of computation, while EigenDA provides scalability for DA, such that a full spectrum of applications can be securely verified at Web2 scales. 

EigenDA utilizes an elegant architecture that maintains optimality or near-optimality across the dimensions of performance, security, and cost: 

- EigenDA obtains *information-theoretically minimal data overhead* via Reed Solomon encoding that is cryptographically verified by KZG polynomial opening proofs.
- *Security at scale -* Unlike in committee-based sharding schemes, in EigenDA identical data is never stored more than once by nodes; by maximizing redundancy / byte, EigenDA achieves theoretically optimal security properties relative to data storage and transmission costs.
- *Scalable unit economics -* The total data transmission volume of EigenDA falls within a factor of 10X of the theoretical minimum (given a fully trusted setting), whereas the transmission volume of competitors can grow with the number of validators and full nodes to be more than 100X.

For more details, see the Optimal DA Sharding section below. 

### Ethereum-based Security

EigenDA’s security approach leverages the depth of ETH plus the forkability of EIGEN, and can be customized to employ the native staking tokens of customers like rollups.

While competitors secure workloads exclusively with their own sidechain tokens, EigenDA uses restaked ETH while enabling L2s to augment the security of Ethereum with EIGEN and even their own native tokens (via Custom Quorums).

For Ethereum-based L2s, this security approach is advantageous for several reasons: 

- EigenDA feeds back into the Ethereum ecosystem by allowing Ethereum stakers to earn additional yield by restaking through EigenLayer and earning EigenDA rewards in exchange for helping secure the EigenDA protocol (As of March 2025, EigenDA has 4.3M ETH staked, or billions of dollars of economic security, at launch) This means that EigenDA helps support the economics of Ethereum as more activity migrates to Layer 2 chains.
- Because EigenDA natively uses Ethereum as a settlement layer and for operator set management, EigenDA provides enhanced security for L2s that also settle to Ethereum since these L2s do not need to rely on another chain’s bridge for safety or liveness.
- EigenDA has unique censorship resistance properties which make it particularly suited to based rollups in Ethereum which are particularly sensitive to censorship attacks from an alternative DA solution. In particular, while competitors have consensus leaders that can censor transactions, EigenDA’s novel, leader-free design introduces little to no additional censorship vectors (Note: This feature is expected in Q2 2025).

### Unparalleled Control

As an Actively Validated Service (AVS), EigenDA takes part in EigenLayer’s mission of taking the modular blockchain thesis to its completion by building a complete ecosystem of scalable and customizable verifiable cloud primitives. 

In principle, EigenDA represents an Archetype of an AVS which can be forked, modified, and redeployed as needed in order to support value-adding customizations for customers. In practice, due to the inherent simplicity and flexibility of the AVS format, many such customizations are available out-of-the-box. 

**Pay how you want**

- In ETH, EIGEN or your own native token. EigenDA is the only DA protocol which allows this kind of payment flexibility.
- *Improve cost forecasting -* ****Purchase upfront with reserved bandwidth. While L1 blobs and Celestia are both fee markets, EigenDA offers fixed pricing and bandwidth reservations as opposed to competing with other activity on the network (which can become congested and thus slow/expensive)

**Customize DA security**

- *Custom Quorums -* Stake your rollup’s token to secure EigenDA. EigenDA exclusively offers the ability for Rollups to secure their EigenDA usage with their native token, providing an additional layer of security.

**Unlock liquidity incentives**

- Attract stakers with EigenLayer’s ULIP program.

# How EigenDA Works

## Architecture

The EigenDA architecture consists of several key components: 

- **Validator nodes**: Validator nodes are responsible for attesting to the availability of a blob and making that blob available to retrieval nodes (and eventually light nodes). Validator nodes must be staked in EigenLayer and registered to the EigenDA operator set(s) corresponding to their delegated staked asset(s). Each Validator node validates, stores, and serves only a portion of each blob processed by the protocol.
- **Dispersers**: Dispersers encode data and pass this data to the Validator nodes. Dispersers must generate proofs for the correctness of the data encoding which are also passed to the Validator nodes. The disperser also aggregates availability attestations from the Validator nodes which can be bridged on-chain to support use-cases such as rollups.
- **Retrieval nodes**: Retrieval nodes collect data shards from the Validator nodes and decode them to produce the original data content.
- **Light nodes** (Planned): Light nodes provide observability so that Validator nodes cannot withhold data from retrieval nodes without this withholding being broadly observable.

![EigenDA Architecture](/img/eigenda/eigenda-overview-architecture.png)


The EigenDA architecture is heterogeneous in order to allow specialization of each component to its peculiar task. Dispersers can be run as decentralized service providers or as a dedicated side-car for a rollup sequencer or other originator. 

The ability to disperse directly to the network without relying on a consensus leader gives EigenDA unique censorship resistance properties: Where a consensus leader can unilaterally censor in most blockchains, in EigenDA a blob must be rejected by a set of Validator nodes having an amount of stake exceeding the protocol’s liveness threshold in order for the blob to be censored. 

## **Optimal DA sharding**

The central idea of the EigenDA architecture is that not every node needs to store all of the data secured by the system. “Sharding” work among sub-committees or shards of a network in order to improve scalability is a common idea within blockchain systems, yet this is often done in a naive manner which compromises security. 

Because EigenDA is not a blockchain and does not perform tasks, such as VM execution, which operate on the semantic content of data, it can employ an optimized strategy of sharding data via an erasure coding scheme that preserves the security properties of the fully replicated system.

EigenDA makes use of Reed Solomon erasure coding, which provides the information-theoretically optimal reconstruction property that any collection of unique encoded data shards whose total size is at least equal to the size of the original unsharded item can be used to recover that item. 

Each Validator node is given a unique shard having a size proportional to their delegated stake. That is, an operator $i$ with stake percentage $\alpha_i$ is given a shard whose size is a fraction $\alpha_i / \gamma$ of the original data blob, where $\gamma$ is known as the coding rate. The result is that any set of operators collectively having a percentage $\gamma$ of the total delegated stake is able to reconstruct the original blob, as their shard sizes sum to a fraction $\gamma/\gamma = 1$ of the original blob size. 

The coding rate $\gamma$ characterizes the total “overhead” of the system, since the total size of data sent to the operators will be a factor $\sum_i{\alpha_i}/\gamma = 1/\gamma$ of the unencoded data. The coding rate $\gamma$ also relates to the Byzantine safety and liveness thresholds, defined as follows:

- Safety threshold, $\eta_S$: The percentage of stake that an adversary must control to cause a safety failure.
- Liveness threshold, $\eta_L$: The percentage of stake that an adversary must control to cause a liveness failure.

The protocol must observe $1 - \eta_L - \eta_S \ge \gamma$. This means that with an adversary threshold of 54% and a liveness threshold of 33%, the total data overhead of the system can be less than 8X (See below section for comparison with other systems). 

EigenDA makes use of KZG polynomial commitments and opening proofs generated by the disperser to enable Validator nodes, light nodes, and full nodes to validate the integrity of their shards and the correctness of the Reed Solomon encoding operation. 

# Comparative Analysis

The following table compares EigenDA with some popular alternatives along various dimensions of performance and security. 

|  | EIP-4844 | Celestia | EigenDA (Blazar)                                                  |
| --- | --- | --- |-------------------------------------------------------------------|
| Throughput | 1MB/s | 1MB/s | 50 MB/s                                                           |
| Avg Download Bandwidth Requirement per Node | 25 MB/s | 1GB/s | 1 MB/s                                                            |
| Thoughput Scaling | 0.04 | 0.001 | 15                                                                |
| Overhead (Storage, Download Bandwidth*) | $\mathcal{O}(n)$** | $\mathcal{O}(n)$** | $c=8$                                                             |
| Latency | 12s | 12s | 5s average, 10s at p99                                            |
| Safety Threshold | 1/3 of ETH Stake | 1/3 of Celestia Stake | 1/3 of ETH restakers + 1/3 of EIGEN stake (+ 1/3 of custom token) |

*For common use cases such as rollups, the properties of the system are upheld by a relatively small number of rollup full nodes which interact with the DA layer. In this case, download bandwidth represents the bottleneck for system performance. Systems such as EIP-4844 and Celestia may utilize upload bandwidth in propagation of data through P2P network, whereas EigenDA only utilizes upload bandwidth for servicing data consumers. 

**Most existing blockchains (such as Ethereum, Celestia, Solana), gossip blocks among all nodes within the network. This means that the total cost of making a block available is equal to the processing cost per node multiplied by the number of nodes; in practice there are also P2P overheads which inflate the processing cost per node.

