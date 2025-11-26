---
title: Troubleshoot Authentication
sidebar_position: 5
---

## "Not authenticated" Error

If you get authentication errors:

```bash
# Check authentication status
eigenx auth whoami

# If not authenticated, login
eigenx auth login
```

## Keyring Access Issues

On some systems, you may need to unlock your keyring:

- **Linux**: Ensure GNOME Keyring or KWallet is running
- **macOS**: System Keychain should work automatically
- **Windows**: Credential Manager should work automatically

If issues persist, use the environment variable method as a fallback.

## Wrong Address

If you're using the wrong address:

```bash
# Check current address
eigenx auth whoami

# Logout and login with correct key
eigenx auth logout
eigenx auth login
```
