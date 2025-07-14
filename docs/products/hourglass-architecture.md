---
sidebar_position: 5
title: Architecture Overview
---

:::note
Hourglass is currently in public preview, and active development.
:::

Hourglass is a task-based execution framework for building decentralized services (AVSs) requiring verifiable offchain compute. 
Hourglass standardizes how developers define, distribute, execute, and verify compute tasks across decentralized operator networks.

## Architecture 

[![](/img/hourglass-architecture_v.01.0.svg)](/img/hourglass-architecture_v.01.0.svg)

## Onchain Components 

### TaskMailbox 

The `TaskMailbox` is an EigenLayer core contract deployed to Ethereum and each support L2 network, and is responsible for:

* Allowing users and apps to create tasks.
* Managing the lifecycle of tasks.
* Verifying the results of tasks against the stake weight of the Operators in the Operator Set performing the work.
* Making the task verification results available for users and apps to query.
* Enabling AVSs to manage their TaskMailbox configurations.

### TaskAVSRegistrar

The `TaskAVSRegistrar` is a per-AVS EigenLayer middleware contract that is responsible for:

* Handling Operator registration for specific Operator Sets of your AVS.
* Providing the offchain components with BLS public keys and socket endpoints for the Aggregator and Executor operators.

The default `TaskAVSRegistrar` is a copy of the provided contract and works as provided. `TaskAVSRegistrar` can be extended 
to include additional onchain logic for your use case.

### AVSTaskHook

The `AVSTaskHook` is a per-AVS EigenLayer Hourglass contract that is responsible for:

* Validating the task lifecycle.
* Creating fee markets for your AVS.

It's empty by default and works out of the box, but can be extended to include additional onchain validation logic for your AVS.

### CertificateVerifier

The `CertificateVerifier` is an EigenLayer core contract that is responsible for:

* Verifying the validity of Operator certificates.
* Verifying stake threshold requirements for Operator Sets.

## Offchain Components

### Aggregator

The Aggregator is responsible for:

* Listening to events from the Mailbox contract on chain for new tasks
* Discovering Executors by querying the `AVSRegistrar` contract, retrieving their metadata containing a BLS public key and a socket (URL) endpoint that references the Executor's gRPC server.
* Distributing tasks to Executors by sending a gRPC request to the Executor's socket endpoint, including the task payload and a signature of the payload signed by the Aggregator. This enables the Executor to validate the message is coming from the expected Aggregator.
* Aggregating results from Executors until a signing threshold has been met.
* Publishing the result back to the Mailbox contract.

### Executor

The Executor is responsible for:

* Launching and managing Performer containers that execute the tasks.
* Listening to gRPC requests from the Aggregator for new tasks.
* Forwarding the task to the correct Performer.
* Signing the result of the task with its BLS private key and sending it back to the Aggregator.

### Performer

The Performer is the component the AVS is responsible for building. At a high level, it is a simple gRPC server that listens 
for tasks, runs them and returns the results to the Executor.

The Hourglass framework provides all of the boilerplate and server code for your Performer; you simply need to fill in the logic to
handle tasks for your AVS.

For information on how to implement an AVS using the Hourglass template, refer to [Implementing with Hourglass](implementing-with-hourglass.md).

:::important
Rewards and Slashing are areas that Hourglass does not yet provide opinionated solutions for and must be implemented separately:

* Rewards logic and distribution

    Hourglass does not include logic for how Operator rewards are calculated or distributed. Each AVS must design and 
    implement a reward model that aligns with its own incentives and application-specific goals. This logic can be implemented 
    onchain or offchain, but is out of scope for the Hourglass framework.

* Slashing Logic and Handling

    Hourglass does not provide slashing mechanisms. AVS developers are responsible for defining how to detect operator misbehavior
    and determine the conditions and consequences for slashing. This logic must be implemented independently of the Hourglass AVS
    contracts and tooling.

These areas are not part of the Hourglass framework and must be handled externally based on the specific needs of the AVS.
:::