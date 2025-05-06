---
sidebar_position: 2
title: EigenPods
---

An [EigenPod](https://github.com/Layr-Labs/eigenlayer-contracts/blob/master/docs/core/EigenPodManager.md) is a smart contract managed by users, designed to facilitate the EigenLayer protocol in monitoring and managing balance and withdrawal statuses. Please review the following considerations when planning your EigenPod and validator operations:

- You may repoint any number of validators to a single EigenPod.
- An Ethereum address (wallet) can only deploy a single EigenPod instance.
- The address that deploys an EigenPod becomes the owner of the contract (EigenPod Owner) and gains permission for restaking and withdrawal operations.
- Ownership of an EigenPod cannot be transferred.

## Checkpoint Proofs

[Checkpoint Proofs](https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/EigenPod.md#checkpointing-validators) convert native validator ETH and validator yield to actively restaked shares. These proofs are initiated
before any Restaking or Withdrawal action and are necessary to prove the expected funds are deposited in the EigenPod and/or validator.
Checkpoint proofs are a two step process:
1. Starting a Checkpoint: this step occurs once.
1. Verify (and Completing) a Checkpoint: this step occurs multiple times until all of the remaining unproven ETH balance in the
   EigenPod has been proven.

## Key Management and EigenPod Proof Submitter

EigenLayer Native Restaking requires submitting proofs to EigenLayer contracts to prove the amount of validator ETH is active and its withdrawal address is pointing to the EigenPod. For users who do not wish to include the "EigenPod Owner" (aka The EigenPod generation key) in their proof generation commands, you may identify another wallet as the **Proof Submitter** and delegate its privilege to submit proofs on its behalf using the assign_submitter command. At any point in the future the `sender` of the proof can be the assigned submitter. The EigenPod owner can also designate a new Proof Submitter as needed.

Use the following command to assign a submitter for your EigenPod:
```bash
/cli assign-submitter --execNode $NODE_ETH --podAddress $EIGENPOD_ADDRESS --sender $EIGENPOD_OWNER_PK
```

Consider using a cold key for the EigenPod Owner role. This key should be stored securely and used infrequently.
For cold keys, best practice is using hardware wallets (e.g., Ledger, HSMSs) or smart contract multisigs (e.g., Safe).

Best practice is using a seperate key for the Proof Submitter, which can be considered a hot key. The Proof Submitter
is any other address approved to submit proofs on behalf of the EigenPod owner. This separation allows the EigenPod owner
key to remain secure and cold. Hot keys, while less secure, can be managed with solutions like Vault (Hashicorp) or environment
variables. It is crucial not to store any meaningful value in your hot keys as operational keys are considered less secure.

### Gas Cost Planning

For users planning to restake multiple validators, connecting many validators to a single EigenPod where possible reduces
gas cost and complexity. "Generate Proof Via eigenpod-proofs-generation CLI" will prove all connected validators.