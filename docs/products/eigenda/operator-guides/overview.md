---
sidebar_position: 1
---
# Overview

This guide contains the steps needed to set up your node on the EigenDA testnet.
The testnet is used to test the operational and performance requirements for
running a node before deploying on mainnet. The testnet is under constant stress
tests and has frequent updates to the node software and other network
components. It’s important to check regularly for new updates to the software
and documentation.

## Migration to EigenDA Blazar (V2)
EigenDA Blazar (V2) is the latest version of the EigenDA protocol.

Current testnet operators running v1 must follow the [Blazar migration guide](./blazar-migration.md) to update their nodes to v2.

## New operator onboarding
Start by understanding the [Requirements](requirements/requirements-overview.md) for being an EigenDA operator and running an EigenDA node. If you are able to satisfy all of the elligibility requirements for becoming a node operator, proceed onward to [run your node](run-a-node/run-overview.md). It's important that you properly [configure and start your node](./run-a-node/run-with-docker/) before [registering your operator with the network](./run-a-node/registration/) and becoming subject to the SLA. 

EigenDA is in a state of active development. Operators must make sure to listen for [node software updates](./upgrades/software-upgrades/) in the correct channels and to implement these upgrades promptly.

## Testing Environments
We have two environments for operators for testing: Holesky testnet and Mainnet Beta. 

[Holesky Testnet](../networks/holesky.md): reserved for functional testing and test traffic will be kept minimal. 

[Mainnet Beta](../networks/mainnet-beta.md): reserved for both functional _and_ load testing. Operators are expected to provision high network bandwidth and large performant storage. Due to potential cost associated with provisioning for large traffic, participation _may_ be incentivized. 