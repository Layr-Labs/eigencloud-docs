---
sidebar_position: 2
title: Convert Consensus Rewards to Restaked Shares
---

As of the PEPE release, users can now convert consensus rewards and validator execution fees to restaked shares.  Initiating and completing a checkpoint proof will automatically convert any consensus rewards to restaked shares for the EigenPod.

1. Check the status command via `./cli status` to determine how many additional shares the user would gain from completing a checkpoint at this time.
2. Generate [checkpoint proof ](https://github.com/Layr-Labs/eigenpod-proofs-generation/tree/master/cli#checkpoint-proofs)via eigenpod-proofs-generation CLI in order to initiate and complete a checkpoint. This command will both start the checkpoint and run verify proofs until the checkpoint is completed.


#### Checkpoint Frequency

To optimize gas costs, initiating a checkpoint no more than once every two weeks is generally recommended. Waiting longer
before performing a checkpoint can lead to greater gas savings, as the gas cost remains the same regardless of the number of
consensus rewards being proven. Users should choose a checkpoint interval that aligns with their gas cost considerations and restaking benefits.

Consensus rewards are transferred from the beacon chain to your EigenPod approximately every 9 days, according to the Ethereum protocol.
Creating checkpoints more than once per sweep provides no additional benefit.