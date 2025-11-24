---
title: Security Best Practices
sidebar_position: 5
---

## Best Practices 

### Do

* Secure authentication keys

    Store your [authentication keys](keys-overview.md) in organization password managers (1Password, etc.) and back them up securely.
* Validate inputs

    Always validate and sanitize inputs in your TEE application. TEE isolation doesn't eliminate traditional security vulnerabilities.
* Use public variables intentionally 

    Mark configuration as `_PUBLIC` only when transparency benefits users (e.g., API endpoints, version numbers).
* Handle secrets carefully

    Once secrets are decrypted inside the TEE, treat them as plaintext. Avoid logging or exfiltrating secrets.
* Keep dependencies updated 

    Regularly update your container dependencies to patch known vulnerabilities.
* Test locally first 

    Develop and test your application logic thoroughly before deploying to TEE infrastructure.

### Don't

* Don't log secrets

    Never log the TEE mnemonic, private keys, or decrypted environment variables.
* Don't expose secrets via APIs

    Ensure your application doesn't inadvertently expose secrets through API responses or error messages.
* Don't trust all container images 

    Only use trusted base images from official sources. Remember your container is publicly auditable.
* Don't rely solely on TEE

    TEE protects against infrastructure attacks but doesn't eliminate application-level vulnerabilities such as SQL injection.

