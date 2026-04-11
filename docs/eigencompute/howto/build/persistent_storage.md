---
title: Persistent storage
sidebar_position: 4
---

EigenCompute provides a persistent storage volume that survives application upgrades. The boot disk is replaced during image updates, but user data lives on an independent persistent disk that is reattached to the new VM. This means your workload state persists across upgrades, not just reboots.

## Storage path

All persistent data should be written to:

```
/mnt/disks/userdata
```

This path is also available via the environment variable `USER_PERSISTENT_DATA_PATH`:

```bash
echo $USER_PERSISTENT_DATA_PATH
# /mnt/disks/userdata
```

Use this environment variable in your application code to stay forward-compatible if the mount path ever changes.

## Example usage

Write any data you need to persist (databases, configuration, caches) under the persistent storage path:

```python
import os

data_dir = os.environ.get("USER_PERSISTENT_DATA_PATH", "/mnt/disks/userdata")

# Store a SQLite database
db_path = os.path.join(data_dir, "myapp.db")

# Store application state
state_path = os.path.join(data_dir, "state.json")
```

```go
dataDir := os.Getenv("USER_PERSISTENT_DATA_PATH")
if dataDir == "" {
    dataDir = "/mnt/disks/userdata"
}
dbPath := filepath.Join(dataDir, "myapp.db")
```

## How it works

The persistent storage volume is encrypted and managed automatically by the platform:

- **With a secondary disk attached** — The volume uses a LUKS-encrypted disk that is formatted on first boot and reopened on subsequent boots.
- **Without a secondary disk** — The platform falls back to a directory on the boot disk that is already encrypted by the platform.

In both cases, the data is available at the same `/mnt/disks/userdata` path and your application code does not need to change.

For more details, see the [Persistent Storage Design Spec](https://github.com/Layr-Labs/go-tpm-tools/blob/main/specs/design-persistent-storage.md).
