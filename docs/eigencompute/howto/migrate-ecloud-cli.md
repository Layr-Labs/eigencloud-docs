---
title: Migrate to ecloud CLI
sidebar_position: 1
---

:::important
The [`eigenx` CLI](../reference/eigenx-cli/eigenx-cli.md) is being deprecated and will no longer receive updates. The [`ecloud` CLI](../reference/ecloud-cli/ecloud-cli-overview.md) supports the same commands as `eigenx`
and the `migrate` command is provided to migrate your authentication key. We recommend migrating to the `ecloud` CLI as soon as practical.
:::

To migrate a stored authentication key from `eigenx` to `eigencloud`:

1. Install the ecloud CLI: 

    ```
    npm install -g @layr-labs/ecloud-cli  
    ```

2. Verify the installation was successful:

    ```
    ecloud version
    ```

3. Migrate the stored authentication key:

    ```
    ecloud auth migrate 
    ```

    Legacy keys for `eigenx` environments are displayed. Select the key to migrate. 

4. When prompted to delete the legacy key, select N. We recommend not deleting your legacy key until you have verified
that the migrated key works correctly.

5. Verify the migration was successful:

    ```
    ecloud auth whoami 
    ```

    The migrated key is displayed and will be used for all environments.

## Changes 

### One key for all environments

The `ecloud` CLI uses one key for all environments. When migrating from `eigenx`, which stored a key per environment,
you select one stored key to migrate to `ecloud`.

To continue using other keys, use the `--private-key` option or the `ECLOUD_PRIVATE_KEY` environment variable.

### compute

The `app`, `environment`, and `undelegate` subcommands have moved under the [`compute` command](../reference/ecloud-cli/compute).

### Arguments moved to options

The `language`, `template-name`, `image-ref` arguments for the `app` subcommand in `eigenx` are [options in `ecloud`](../reference/ecloud-cli/compute/app.md). 