---
title: Configuration
sidebar_position: 7
---

# Configuration Commands

Manage CLI settings, check versions, and control telemetry.

## Commands Overview

| Command | Description |
| --- | --- |
| `eigenx telemetry [--enable\|--disable\|--status]` | Manage usage analytics |
| `eigenx upgrade` | Update CLI to latest version |
| `eigenx version` | Show CLI version |

---

## `eigenx telemetry`

Manage anonymous usage analytics collection.

### Syntax

```bash
eigenx telemetry [command options]
```

### Flags

| Flag | Description |
| --- | --- |
| `--enable` | Enable telemetry collection |
| `--disable` | Disable telemetry collection |
| `--status` | Show current telemetry status |

### Examples

**Check telemetry status**

```bash
eigenx telemetry --status
```

Output:
```
Telemetry: Enabled
```

Or if disabled:
```
Telemetry: Disabled
```

**Disable telemetry**

```bash
eigenx telemetry --disable
```

Output:
```
Telemetry disabled
```

**Enable telemetry**

```bash
eigenx telemetry --enable
```

Output:
```
Telemetry enabled
```

---

## `eigenx upgrade`

Update the EigenX CLI to the latest version.

### Syntax

```bash
eigenx upgrade [command options]
```

### Flags

| Flag | Description |
| --- | --- |
| `--version <version>` | Upgrade to specific version |
| `--dev` | Upgrade to latest dev version |
| `--check` | Check for updates without upgrading |

### Examples

**Upgrade to latest stable**

```bash
eigenx upgrade
```

Output:
```
Checking for updates...

Current version: 1.2.0
Latest version: 1.3.0

Changelog:
  New Features:
    - Added support for custom domains
    - Improved log streaming performance

  Bug Fixes:
    - Fixed authentication timeout issue
    - Resolved Docker build errors on ARM

Upgrading...
✓ Downloaded eigenx v1.3.0
✓ Installed successfully
✓ Upgrade complete!

Your CLI has been upgraded to v1.3.0
Verify with: eigenx version
```

**Check for updates only**

```bash
eigenx upgrade --check
```

Output:
```
Current version: 1.2.0
Latest version: 1.3.0

A new version is available!
Upgrade with: eigenx upgrade
```

**Upgrade to specific version**

```bash
eigenx upgrade --version 1.2.5
```

**Upgrade to dev version**

```bash
eigenx upgrade --dev
```

Output:
```
⚠️  Warning: Dev versions may be unstable

Upgrading to latest dev version...
✓ Downloaded eigenx v1.4.0-dev.3
✓ Installed successfully

You're now using the development version.
Report issues at: https://github.com/Layr-Labs/eigenx-cli/issues
```

### When to Upgrade

**New features**

```bash
# Check release notes
eigenx upgrade --check

# Upgrade if new features are useful
eigenx upgrade
```

**Bug fixes**

```bash
# If you're experiencing issues, upgrade
eigenx upgrade
```

**Security updates**

```bash
# Always upgrade for security patches
eigenx upgrade
```

**Breaking changes**

Check the changelog before upgrading major versions:

```bash
eigenx upgrade --check
# Read changelog carefully
eigenx upgrade
```

### Upgrade Process

1. **Backup** - Config and credentials are preserved
2. **Download** - Latest version is downloaded
3. **Install** - Binary is replaced
4. **Verify** - Installation is tested
5. **Cleanup** - Old version is removed

### Rollback

If you need to downgrade:

```bash
# Reinstall specific version
eigenx upgrade --version 1.2.0
```

Or reinstall from scratch:

```bash
# macOS/Linux
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.sh | bash

# Windows
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.ps1 | powershell -
```

---

## `eigenx version`

Display the current CLI version and build information.

### Syntax

```bash
eigenx version [command options]
```

### Example

```bash
eigenx version
```

Output:
```
Version: v0.2.1
Commit: e62b701
```

---

## Global Flags

These flags work with any command:

### `--help`, `-h`

Show help for any command:

```bash
eigenx --help
eigenx app --help
eigenx app deploy --help
eigenx auth login --help
```

### `--version`, `-v`

Quick version check:

```bash
eigenx --version
# or
eigenx -v
```

### `--private-key`

Provide private key for signing:

```bash
eigenx app deploy --private-key 0x1234...
```

### `--env`

Temporarily override environment:

```bash
eigenx app list --env prod
```

### `--quiet`, `-q`

Suppress non-essential output:

```bash
eigenx app deploy --quiet
```

### `--verbose`

Show detailed output:

```bash
eigenx app deploy --verbose
```

---

## Related Commands

- [Authentication](./authentication) - Manage credentials
- [Environment Management](./environment) - Switch between mainnet and sepolia
- [Monitoring](./monitoring) - View apps and logs

## Additional Resources

- **GitHub Repository**: [eigenx-cli](https://github.com/Layr-Labs/eigenx-cli)
- **Issue Tracker**: [Report bugs](https://github.com/Layr-Labs/eigenx-cli/issues)
- **Release Notes**: [Changelog](https://github.com/Layr-Labs/eigenx-cli/releases)
