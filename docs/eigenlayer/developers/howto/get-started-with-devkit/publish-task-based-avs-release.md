---
title: Publish Task-based AVS
sidebar_position: 3
---

DevKit publishes your AVS release to the `ReleaseManager` contract which makes it available for operators to upgrade to.

Prerequisites:

[Build and Test Locally](build-test-locally.md)

## Setting Release Metadata URI

You must set a release metadata URI before publishing releases. The metadata URI provides important information about your 
release to Operators.

To set the metadata URI for your Operator Sets:

```
# Set metadata URI for operator set 0
devkit avs release uri --metadata-uri "https://example.com/metadata.json" --operator-set-id 0

# Set metadata URI for operator set 1
devkit avs release uri --metadata-uri "https://example.com/metadata.json" --operator-set-id 1
```

Required Flags:

* `--metadata-uri` The URI pointing to your release metadata
* `--operator-set-id` The operator set ID to configure

Optional Flags:

* `--avs-address` AVS address (uses context if not provided)

## Publishing Release

Before publishing a release, ensure you have:

* Built your AVS with `devkit avs build`
* A running DevNet
* Properly configured registry in your context (or specify the command parameter)
* [Set release metadata URI for your Operator Sets](#setting-release-metadata-uri) 

:::important
The `upgrade-by-time` must be in the future. Operators have until the specified timestamp to upgrade to the new version. 
DevNet must be running before publishing.
:::

In your product directory, run: 

```
devkit avs release publish  --upgrade-by-time 1750000000
```

Required Flags:

* `--upgrade-by-time` Unix timestamp by which operators must upgrade

Optional Flags:

* `--registry` Registry for the release (defaults to context)

### Example

```
devkit avs release publish \
--upgrade-by-time <future-timestamp> \
--registry <ghcr.io/avs-release-example>
```

:::tip
Optional DevKit commands are described in the [DevKit repo](https://github.com/Layr-Labs/devkit-cli).
:::

## Advertise to Operators

Advertise to Operators that your AVS is an Hourglass AVS. Operators use the [Hourglass CLI (`hgctl`)](../../../operators/howto/run-task-based-avs.md) to streamline operations of Hourglass AVS.