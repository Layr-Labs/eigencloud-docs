---
sidebar_position: 1
title: Restake New Validator Native Beacon Chain ETH
---

The steps below are only required for new validator native beacon chain ETH. Any validator native beacon chain ETH that was restaked prior to the PEPE release will not need to repeat these steps.

**Prerequisites**

The user will need an environment available to run the [EigenPod Proof Gen CLI](https://github.com/Layr-Labs/eigenpod-proofs-generation/tree/master/cli#quickstart) including its software prerequisites.

#### Part 1: Create EigenPod

Invoke `EigenPodManager.createPod()`.

#### Part 2: Configure Validator(s) Withdrawal Credentials

1. Configure the validator(s) credentials to point to the EigenPod address when the validator is created. Please see [Ethereum Launchpad](https://launchpad.ethereum.org/en/withdrawals#enabling-withdrawals) for more information.
   a. Optional: you may choose to set the FEE_RECIPIENT to your EigenPod address if you wish to Restake those fees.

2. Wait for the validator(s) to become active on-chain. Please see https://beaconcha.in/ to follow your validator status.

3. Run the `status` command via the [EigenPod Proofs Generation CLI](https://github.com/Layr-Labs/eigenpod-proofs-generation/tree/master/cli#proof-generation). The command will confirm the withdrawal address is set correctly and the validator is active on the beacon chain.

![](/img/restake-guides/native-cli-status.png)


#### Part 3: Link the Validator to the EigenPod via Proof Generation

1. Run the `credentials` command via the [EigenPod Proofs Generation CLI](https://github.com/Layr-Labs/eigenpod-proofs-generation/tree/master/cli#proof-generation).


2. Invoke the `credentials` command with the `--sender $EIGENPOD_OWNER_PK` argument so that CLI will submit proofs and act on-chain for you. This is the private key of the wallet that was used to create the EigenPod. Example here:
```bash
./cli credentials --execNode $NODE_ETH --beaconNode $NODE_BEACON --podAddress $EIGENPOD_ADDRESS --sender $EIGENPOD_OWNER_PK
```

3. Invoke the `status` command to confirm restaked shares increased by the anticipated amount.

4. Your validator ETH balance is now Restaked.
