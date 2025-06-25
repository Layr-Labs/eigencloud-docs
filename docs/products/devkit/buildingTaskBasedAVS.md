---
title: Building with DevKit and Hourglass
sidebar_position: 1
---

:::important
DevKit and Hourglass are currently in a public preview stage and intended strictly for local experimentation and development.
They have not been audited, and should not be used for use in any live environment, including public testnets or mainnet.
Users are strongly discouraged from pushing generated projects to remote repositories without reviewing and sanitizing
sensitive configuration files (for example, `devnet.yaml`), which may contain private keys or other sensitive material.
:::

Together the Devkit CLI and the Hourglass AVS Template provide a powerful, streamlined environment for building, simulating,
and testing task-based AVSs on EigenLayer.

## Get Started with AVS Development

Use DevKit and Hourglass to:

1. Scaffold your AVS project using the DevKit CLI.

   The DevKit CLI initializes an AVS project structure and configuration.

2. Understand and extend using the Hourglass framework.

   The Hourglass framework provides a task-based AVS implementation.

3. Simulate Operator and AVS behaviour.

   The DevKit CLI provides simulation tooling to launch a local devnet and run end-to-end workflows.