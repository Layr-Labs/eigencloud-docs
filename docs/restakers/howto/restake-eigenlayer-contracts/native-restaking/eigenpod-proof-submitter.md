---
sidebar_position: 4
title: Key Management and EigenPod Proof Submitter
---

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