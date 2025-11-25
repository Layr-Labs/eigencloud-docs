---
title: Follow Best Practices
sidebar_position: 3
---

### Before Stopping

- [ ] Finish any in-progress transactions
- [ ] Notify users if it's a public service
- [ ] Save any ephemeral state to external storage

### Before Terminating

- [ ] **Critical**: Withdraw all funds from TEE wallet
- [ ] Backup logs: `eigenx app logs my-app > backup.log`
- [ ] Document configuration
- [ ] Verify app is no longer needed
- [ ] Check for any dependent services
