---
sidebar_position: 1
title: Security Model
---

# Security Model

# Introduction

EigenDA is a high-throughput, decentralized data availability (DA) layer built on EigenLayer, designed to ensure that any data confirmed as available by the protocol can be reliably retrieved by clients. The system distinguishes between two core failure modes:

- **Safety failure**: The DA layer issues a valid availability certificate, but users are unable to retrieve the corresponding data.
- **Liveness failure**: Data that should be available—i.e., properly paid for and within system throughput bounds—is not served to users.

EigenDA mitigates these risks through a BFT security model backed by restaked collateral. Operators participating in the DA layer are delegated stake via EigenLayer, including ETH, EIGEN, and customized tokens.

Additionally, EIGEN slashing introduces strong accountability: in the event of a safety failure, stake can be slashed, penalizing operators who sign availability attestations for data they do not actually serve. Extra economic alignment is also provided by token toxicity.

On this page, we present a technical analysis of EigenDA's security guarantees.

# Cryptographic Primitives

The encoding module is used for extending a blob of data into a set of encoded chunks which can be used to reconstruct the blob. The correctness of the encoding is proven by the proving module. The encoding and proving module needs to satisfy two main properties: 

- Any collection of unique, encoded chunks of a sufficient size can be used to reconstruct the original unencoded blob.
- Each chunk can be paired with an opening proof which can be used to verify that the chunk was properly derived from a blob corresponding to a particular commitment.

To achieve these properties, the module provides the following primitives: 

- `EncodeAndProve`. Extends a blob of data into a set of encoded chunks. Also produces opening proofs and blob commitments.
- `Verify`. Verifies a chunk against a blob commitment using an opening proof.
- `Decode`. Reconstructs the original blob given a sufficiently sized collection of encoded chunks.

EigenDA implements the encoding module using Reed Solomon encoding, together with KZG polynomial commitments and opening proofs. More details about the encoding and proving module can be found in the [code spec](https://github.com/Layr-Labs/eigenda/blob/master/docs/spec/src/protocol/architecture/encoding.md).

# Security Models

In EigenDA, there are three different kinds of quorums where different assets (restaked-ETH, EIGEN and customized tokens of roll-ups) are delegated to the operators.  Different quorums provide different security guarantees. All three kinds of quorums must simultaneously fail for a safety attack to be successfully executed, providing multi-layered security assurance.

The three security models in EigenDA, along with their corresponding quorums, are outlined below:

- BFT security: ETH, EIGEN and Custom Quorum
- Cryptoeconomic security: EIGEN Quorum
- Token Toxicity: Custom Quorum

We begin by giving an overview of each security model and how it contributes to EigenDA’s overall resilience: BFT security ensures both safety and liveness of the system as long as the share of stake or voting power held by malicious validators stays below a certain threshold. Cryptoeconomic security goes a step further—if an attacker misbehaves, they not only need to control a significant amount of stake, but they also risk losing it through slashing. This makes attacks financially unappealing. Token toxicity adds another layer of incentive alignment. When validators misbehave, the native token may drop in value, leading to losses for token holders who delegated their stake to those validators. This dynamic encourages stakeholders to carefully choose trustworthy operators.

In the rest of this page, we provide a detailed analysis of how the three kinds of security are satisfied.

## BFT Security Model

The BFT security model ensures system safety and liveness as long as the stake delegated to malicious validators remains below a predefined threshold.

### Security Parameters

The allocation of blob data among the EigenDA validators is governed by Chunk Assignment logic which takes as input a set of `BlobParameters` which are linked to the blob `Version` by a mapping in the `EigenDAServiceManager` contract. The `BlobParameters` consist of:

- `NumChunks` - The number of encoded chunks that will be generated for each blob (must be a power of 2).
- `CodingRate` - The total size of the encoded chunks divided by the size of the original blob (must be a power of two). Note that for representational purposes, this is the inverse of the standard coding rate used in coding theory.
- `MaxNumOperators` - The maximum number of operators which can be supported by the blob `Version`.

Separately, Byzantine liveness and safety properties of a blob are specified by a collection of `SecurityParameters`. 

- `ConfirmationThreshold` - The confirmation threshold defines the minimum percentage of stake which needs to sign to make the DA certificate valid.
- `SafetyThreshold` - The safety threshold refers to the minimum percentage of total stake an attacker must control to make a blob with a valid DA certificate unavailable.
- `LivenessThreshold` - The liveness threshold refers to the minimum percentage of total stake an attacker must control to cause a liveness failure.

### Assumptions

1. To guarantee **safety**, we assume that the adversary controls less than the `SafetyThreshold` percentage of the total stake.
2. To guarantee **liveness**, we currently rely on a trusted disperser that does not censor clients’ blob disperser requests. We will soon introduce decentralized dispersal to remove this trust assumption. Additionally, to ensure liveness, we assume the adversary is delegated with less than `LivenessThreshold` percentage of the total stake.

### Chunk Assignment Logic

**Overview** 

The chunk assignment logic assigns encoded chunks to validators in such a way that the security properties specified by the `SecurityParameters` can be verified.

The chunk assignment logic provides the following primitives: 

- `GetChunkAssignments`. Given a blob version and the state of the validators, generates a mapping from each chunk index to a validator.
- `VerifySecurityParameters`. Validates whether a given set of security parameters is valid with respect to a blob version.

For the purposes of modeling, we let $m_i$ denote the number of chunks which the assignment logic maps to an operator $i$. We also denote the `NumChunks` defined by the blob version as $m$, the `CodingRate` as $r$, and the `MaxNumOperators` as $n$. Any set of $m/r$ unique chunks can be used to recover the blob. We let $\alpha_i = rm_i/m$, which is the number of chunks assigned to validator $i$, divided by the number of chunks needed for recover the blob. We also denote $\eta_i$ as the percentage of quorum stake which is assigned to the validator $i$. The minimum percentage of the total stake that a group of validators must collectively hold in order to possess enough chunks to recover the blob is denoted by $\gamma$ . The confirmation threshold, safety threshold, and liveness threshold are denoted as $\eta_C$, $\eta_S$ and $\eta_L$. Additionally, $\eta_S = \eta_C - \gamma$ and $\eta_L = 1 - \eta_C$. The key terminology is summarized below for reference:

| **Term** | **Symbol** | **Description** |
| --- | --- | --- |
| Max Validator Count |  $n$ | The maximum number of validator nodes participating in the system (currently $n =200$) |
| Validator Set | $N$ | Set of all the validators. $\|N\|$ is the total number of validator nodes participating in the system. |
| Total Chunks | $m$ | The total number of chunks after encoding (currently $m=8192$) |
| Coding Rate | $r$ | The total number of chunks after encoding / total number of chunks before encoding (currently $r=8$) |
| Percentage of blob per validator  | $\alpha_i$ | $\alpha_i = rm_i/m$, the percentage of chunks required to reconstruct the blob assigned to validator $i$ |
| Num of Chunks Assigned | $m_i$ | The number of chunks assigned to validator $i$ |
| Validator Stake | $\eta_i$  | The stake proportion of validator $i$ ($0 \le \eta_i \le 1$, and $\sum_{i} \eta_i = 1$) |
| Reconstruction Threshold | $\gamma$  | The minimum percentage of total stake required for a group of validators to successfully reconstruct the blob |
| Confirmation Threshold | $\eta_C$ | The minimum percentage of stake to make a DA certificate valid |
| Safety Threshold | $\eta_S$ | The minimum percentage of stake to cause safety failure, $\eta_S = \eta_C - \gamma$ |
| Liveness Threshold | $\eta_L$ | The minimum percentage of stake to cause liveness failure, $\eta_L = 1 - \eta_C$ |

**Properties**

The assignment logic must satisfy the following properties: 

1. Exact number of chunks: $\sum_i m_i = m$. 
2. Reconstruction: If a blob passes `VerifySecurityParameters`, then for any set of validators $H \subseteq N$ such that $\sum_{i \in H} \eta_i \ge \gamma$, we must have $\sum_{i\in H} \alpha_i \ge 1$. 

**Specification**

- **GetChunkAssignments**

Let

$$
m'_i= \left\lceil\eta_i(m- \|N\|)\right\rceil
$$

where $\|N\|$ is the actual number of operators. Note that $\sum_{i} m'_{i} \le   \sum_{i} [\eta_{i} (m-\|N\|)+1] = m-\|N\| + \|N\| = m$. Sort the validator nodes (in a deterministic order), and let $k_i$ be the index of node $i$ within this list.  Let  $m' = \sum_i m’_i$. Finally, let

$$
m_i=m'_i + \mathbb{I}_{k_i \le m-m'}
$$

- **VerifySecurityParameters**

Verification succeeds as long as the following condition holds

$$
n \le m(1 - 1/r\gamma)
$$

Note that from the inequality above, we can derive that $\gamma \ge \frac{m}{(m-n)r} > 1/r$, which implies that the reconstruction threshold is greater than the theoretical lower bound of stake needed for reconstruction $(1/r)$, due to the chunk assignment logic. 

**Analysis**

We want to show that for a blob which has been distributed using `GetChunkAssignments` and which satisfies `VerifySecurityParameters` , the following properties hold: 

1. Number of allocated chunks is equal to $m$. 

$$
\sum_i m_i = \sum_i (m'_i + \mathbb{I}_{k_i \le m - m'}) = m ' + \sum \mathbb{I}_{k_i \le m - m'} = m' + m-m' = m
$$

2. Reconstruction threshold satisfied. We show that $\alpha_i  \ge \eta_i /\gamma$:

$$
m_i \ge \eta_i(m- \|N\|) \ge \eta_i(m - m(1-1/r\gamma))=\eta_i m/(r\gamma) 
$$

$$
\Rightarrow \alpha_i = rm_i/m \ge \eta_i/\gamma
$$

Therefore, $\sum_{i\in H} \alpha_i \ge \sum_{i\in H} \eta_i/\gamma \ge 1$ when $\sum_{i \in H} \eta_i \ge \gamma$.

### Security Analysis

In this part, we prove that the security and liveness holds when the assumptions are satisfied.

First, we prove the security of our protocol: If the malicious party is delegated with less than $\eta_S = \eta_C - \gamma$ percentage of stake in the quorum, when a DA certificate is issued, any end-user can retrieve the blob within the time window during which the blob is supposed to be available.
Proof: 
Since at least $\eta_C = \eta_S + \gamma$ percentage of the stake signed for the blob in order for the DA certificate to be issued and the maximum adversarial stake percentage is $\eta_S$, there is a set of honest validators $H$ who are delegated with at least $\eta_C - \eta_S = \gamma$ percentage of the stake and signed the blob.
As we proved in the previous section, for any set of validators $H$ such that $\sum_{i \in H} \eta_i \ge \gamma$, we must have $\sum_{i\in H} \alpha_i \ge 1$, which means $H$ holds a set of chunks whose size is large enough to recover the blob and will be able to recover and serve the blob to the end-user. 

Second, we prove the liveness of our protocol:  If the malicious party controls less than $\eta_L = 1 - \eta_C$ portion of stake in the quorum, when a client calls the dispersal function, they will eventually get back a DA certificate for the blob they submitted, assuming that the disperser is honest. This simply follows from the fact that an honest disperser would encode and distribute the chunks following the protocol and all the honest validators would send their signatures to the dispersal when they receive and verify the chunks they are assigned. Therefore, since the portion of honest stake is greater than $\eta_C$, enough signatures will be collected by the disperser and a DA certificate will be issued in the end.

### Encoding Rate and System Overhead

In the previous section, we demonstrated that the system is secure—that is, both the safety and liveness properties are upheld—provided the adversarial stake remains below a certain threshold. In this section, we aim to determine the minimum required encoding rate based on a given adversarial stake percentage, in order to quantify the system’s overhead.

Suppose the maximum adversarial stake that can be used to compromise safety is denoted by $\eta_s$, and the maximum stake that can be used to compromise liveness is  $\eta_l$. To ensure the security of the system, the following conditions must be satisfied: $\eta_s \le \eta_S = \eta_C - \gamma$ and $\eta_l \leq \eta_L = 1 - \eta_C$. From these inequalities, we can derive: $\gamma \le 1 - \eta_s - \eta_l$. Also, recall that $\gamma \ge \frac{m}{(m-n)r}$ . This leads to the following constraint on the encoding rate $r$:

  

$$
\frac{m}{(m-n)r}  \leq 1 - \eta_s - \eta_l \Leftrightarrow r \ge \frac{m}{(m-n)(1-\eta_s-\eta_l)}
$$

Assuming the system aims to tolerate up to 54% adversarial stake for safety attacks ($\eta_s = 54 \%$) and and up to 33% adversarial stake for liveness attacks ($\eta_l = 33 \%$),  and given system parameters $m = 8192$  and $n = 200$, we compute: $r \ge 8192 / (8192-200)/(1-54\% -33\%)= 7.9$ . Therefore, to ensure system security under these adversarial conditions, the encoding rate must be at least 7.9.

In our implementation, we choose an encoding rate of $r = 8$ (which means that our system operates with a 8X overhead). Therefore, we can compute the minimum value of $\gamma$ as $\gamma_{min} = \frac{8192}{(8192-200)*8} = 0.13$. This yields the following safety and liveness threshold: $\eta_S = \eta_C - 0.13$ and $\eta_L = 1 - \eta_C$. Combining the two gives: $\eta_S + \eta_L = 0.87$. The safety-liveness threshold trade-off of our system, given the chosen parameters, is illustrated in the figure below. Any adversary with a stake profile $(\eta_s, \eta_l)$ that lies below the line in the plot falls within the defensible region of the system. 

<div style={{ textAlign: 'center' }}>
  <img src="/img/eigenda/safety-liveness-bound.png" alt="security_livness_bound" style={{ width: '50%' }} />
</div>

## Cryptoeconomic Security Model

In addition to BFT security, the EIGEN quorum provides cryptoeconomic security as an extra layer of protection. Cryptoeconomic security guarantees that if the safety of the system is compromised, a certain portion of stake will be slashed. This creates a strong disincentive for attacking the system. A protocol is considered cryptoeconomically secure when the total cost of an attack always exceeds the total profit from an attack. However, like many other attacks, the profit possible from a DA withholding attack can be difficult to quantify. That’s why the emphasis is placed on slashing: the ability to penalize misbehaving validators is key to maintaining system safety.

### Intersubjective Slashing with Token Forking

If BFT security fails and data certified by a valid DA certificate becomes unretrievable, any community member can raise a data unavailability alarm. Once triggered, other community members will attempt to retrieve and verify the data. If a sufficient number of community members confirm that safety has indeed been compromised, they can initiate a token fork to slash the stake of dishonest validators (see more in the [EIGEN Token Whitepaper](https://docs.eigenlayer.xyz/assets/files/EIGEN_Token_Whitepaper-0df8e17b7efa052fd2a22e1ade9c6f69.pdf)). 

### DAS: Fraud Detection Tool for Slashing

As discussed in [Security FAQs](./security-FAQs.md) , the Data Availability Sampling (DAS) protocol is useful for fraud detection, especially for light nodes with limited resources, though it has limitations. We are actively developing the DAS protocol for EigenDA to address these limitations, providing better support for fraud detection and intersubjective slashing. A detailed white paper will be released soon.

## Token Toxicity

In addition to BFT security, the custom quorum provides an extra security guarantee through Token Toxicity. Token toxicity refers to the phenomenon where the value of a rollup's native token declines sharply when the rollup fails to function properly. Specifically, if DA isn't ensured for a rollup, market confidence in the roll-up service declines, causing its token price to drop. This economic incentive encourages holders of the roll-up's custom token to delegate their stakes only to trusted operators, minimizing the risk of data unavailability and potential loss in token value.

In conclusion, EigenDA’s security model combines BFT security, cryptoeconomic security, and token toxicity to create a robust, multi-layered defense against safety and liveness failures. 