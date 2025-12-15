---
title: Migrate to ecloud CLI
sidebar_position: 1
---

The `eigenx` CLI is being replaced by the `ecloud` CLI. The `ecloud` CLI supports the same commands as `eigenx` and the `migrate` 
command is provided to migrate your authentication key. We recommend migrating to `ecloud` as soon as practical. 

The `eigenx` CLI will continue to operate but will no longer be updated.

:::note
The `ecloud` CLI stores one key for all environments. When migrating from `eigenx`, which stored a key per environment,
you select one stored key to migrate to `ecloud`.

To continue using other keys, use the `--private-key` option or the `ECLOUD_PRIVATE_KEY` environment variable.
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

Differences 

Moved under the compute command -> add this 

`list` subcommand no longer needed as same authenticaiton used for all environments. 