---
sidebar_position: 2
title: Security FAQs
---

# Security FAQs

The purpose of this post is to review frequently asked questions and better understand security tradeoffs when using DA solutions to Ethereum as an Ethereum L2. Outside of the scope of this is a holistic security assessment of DA. 

## What kinds of security can alt-DA solutions provide for Ethereum L2s?

BFT security and cryptoeconomic security are the only types of security possible for alt-DA. A detailed discussion about how EigenDA achieves both of these forms of security is provided in [Security Model](security-model.md).

Even for DA protocols which purport to provide unilateral verifiability to a light client operator of a Data Availability Sampling (DAS) protocol, this function cannot be evaluated by an L1 smart contract, since it requires networking capabilities which are not available in that context. Thus, rollup bridges cannot verify that the data is available from the DA providers before accepting a DA attestation. In other words, the observation of the light nodes cannot be provably bridged to layer-1.

In this sense, every DA solution which provides BFT and Cryptoeconomic security provides qualitatively equivalent security guarantees from the standpoint of an Ethereum rollup. 

## How does slashing work in DA protocols?

Data availability cannot be objectively proven or disproven; it can only be subjectively observed. This is because virtually all common networking primitives allow for data to be selectively served to one party but not another.

For this reason, the only known way to achieve cryptoeconomic security in DA protocols under a dishonest majority is through the ability to fork the chain or the staking asset in response to a safety failure. The idea is straightforward: if a majority of nodes collude to violate safety—such as by withholding data they claim to be available—the honest minority can fork the chain or the token used for staking. The broader community can then evaluate both forks and decide which one to support, allowing the market to economically penalize the dishonest majority by devaluing their fork.

Data availability is an implied function of blockchains such as Ethereum and Solana. An assumption that is made about these blockchains is that in the event of a data availability withholding attack, the chain would fork and the stake of the offending validators would be slashed, as inspection by community members surfaced the withholding attack. DA protocols such as EigenDA which utilize the token forking mechanism for slashing inherit this default posture toward cryptoeconomic security. 

## Does EigenDA have slashing? How does slashing work?

Slashing is the main instrument of the cryptoeconomic security model described in the previous question. 

We have slashing for EIGEN by token forking, which is equivalent to chain forking (see more in  [EIGEN Token Whitepaper](https://docs.eigenlayer.xyz/assets/files/EIGEN_Token_Whitepaper-0df8e17b7efa052fd2a22e1ade9c6f69.pdf)). 

Whenever there is a safety failure when the malicious stake controls more than a threshold of staked assets in the quorum (see more in [Security Model](security-model.md)), a community member can trigger an alarm for data unavailability. If enough community members agree that the safety is violated, they can start the token forking to slash the dishonest majority. 

EIGEN can support multiple Eigen forks where marketplace can inflict slashing, while the solution using Tendermint consensus may face the challenge of non-progress on the minority fork, when the honest minority try to slash dishonest majority using chain forking.

## What are the limitations of DAS?

DAS generally has two purposes for DA protocols. 

1. Improved observability: Improving community observability of DA faults in order to support slashing. 
2. Verifiability: Enabling end users to make a judgement about availability to verify that the rollup is in good status and trust the service, decreasing time to effective finality for users transacting on the rollup. 

However, current instantiations of Data Availability Sampling tend to have severe limitations which limit their value proposition. 

1. Limited utility for L2: As mentioned previously, the verification of data availability cannot be performed within the L1 bridge contract due to inherent limitations of smart contracts. 
2. Poor detection properties: Most DAS protocols are presented at a level of abstraction which hides important network level assumptions which are not satisfied in practice in any existing system. This makes it possible for a large number of light clients to be fooled into believing that data is available in a potentially targeted way. Specifically, malicious data storage nodes may selectively release chunks to a specific light node, fooling it into believing that the data is available, while the released chunks are not enough to recover the original data (i.e. the data is not available). More discussion on this topic can be found in the [blog post of Joachim Neu](https://www.paradigm.xyz/2022/08/das).
3. Incomplete recovery mechanism: While many DAS protocols aim to detect whether data has been collectively released to the set of light nodes (in the sense that the data can theoretically be reconstructed from the chunks held by the light nodes), many protocols do not provide a mechanism for performing this construction in a fully performant manner or at all. This means that an adversary can release data to the light nodes while denying data to actual data consumers, in such a way that *all* light nodes are fooled about the status of the data. 
4. Hidden trust assumptions: Many DAS protocols rely on trust assumptions which call into question the overall properties afforded by the protocol. For example, Celestia requires that each light node be connected to an honest full node in order to receive fraud proofs in the event of incorrect encoding. Based on network topologies, this can translate to a variety of different BFT-style trust assumptions on the limited collection of Celestia full nodes. 

## Is EigenDA building a DAS protocol?

Yes, EigenDA is actively developing a scalable DAS protocol which addresses many of the limitations of the previous section. A whitepaper of EigenDA DAS will be published soon.

## What security does restaked ETH provide EigenDA?

EigenDA is additionally validated by a quorum of over \$8.8B of ETH restaked, meaning that a colluding set of operators would need to receive over \$4.4B* in delegation from ETH re-stakers in order to attack the system.

## What does EigenDA use KZG Polynomial Commitments for?

In EigenDA, KZG commitment is used to guarantee that the data chunks are correctly encoded from the data blob. This enables the validators to efficiently verify the validity of the chunks they received from the disperser. In comparison, fraud proofs require longer time window and extra trust assumptions to ensure the validity of data chunks.

*This conclusion is based on a confirmation threshold of 63%, which corresponds to a safety threshold of 50%. A more detailed analysis is available in [Security Model](security-model.md).
