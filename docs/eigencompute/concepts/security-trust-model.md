---
title: Security and Trust Model
sidebar_position: 4
---

## Trust Requirements

EigenCompute currently requires trust in:
- [Intel TDX hardware security guarantees](https://github.com/intel/tdx-module).
- Google Confidential Space attestation service.
- Single KMS operator (EigenLabs) and [KMS](https://github.com/Layr-Labs/eigenx-kms/blob/master/kms.md) [attestation](https://docs.trustauthority.intel.com/main/articles/articles/ita/concept-attestation-overview.html) process.

## Security Boundaries

* Trust boundary: You trust the [TEE hardware manufacturer](https://github.com/intel/tdx-module), Google Confidential Space attestation service, [KMS](https://github.com/Layr-Labs/eigenx-kms/blob/master/kms.md) [attestation](https://docs.trustauthority.intel.com/main/articles/articles/ita/concept-attestation-overview.html) process
* Your responsibility: Application logic, dependency security, and secret handling within your code.
* Platform/EigenLabs responsibility: Infrastructure security, TEE provisioning, and [KMS](https://github.com/Layr-Labs/eigenx-kms/blob/master/kms.md) operation.

:::tip Security Enhancements in Development
Security enhancements in development:
- Public attestation endpoints for runtime verification
- Threshold KMS for distributed key management
- Replica prevention via onchain checks and heartbeats
- Verifiably built images with reproducible builds
:::

## Threat Model 

The EigenCompute TEE/KMS architecture protects against: 

| Attack Vector                          | Protection                                                                                                                                                                                                                                                                                                                    |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Malicious cloud providers              | EigenLabs cannot access your TEE memory or runtime data. In the Mainnet Alpha phase, EigenLabs has access to KMS keys and can theoretically decrypt environment variables. Future releases will eliminate this access through an external hardened KMS system.                                                                |
| Infrastructure compromise              | Even if host machines are compromised, TEE hardware isolation prevents secret extraction.                                                                                                                                                                                                                                     |
| Man-in-the-middle attacks              | Encrypted secrets can only be decrypted inside TEE instances verified using [attestation](https://docs.trustauthority.intel.com/main/articles/articles/ita/concept-attestation-overview.html).                                                                                                                                |
| Secret exfiltration by Operators       | [KMS](https://github.com/Layr-Labs/eigenx-kms/blob/master/kms.md) cryptographically binds secrets to your specific TEE. In the Mainnet Alpha phase, EigenLabs has access to KMS keys and can theoretically decrypt environment variables. Future releases will eliminate this access through an external hardened KMS system. |
| Credential theft from storage          | Secrets are stored encrypted onchain and in the KMS. Secrets are never stored in plaintext outside your TEE.                                                                                                                                                                                                                  |
| Supply chain attacks on infrastructure | [Attestation](https://docs.trustauthority.intel.com/main/articles/articles/ita/concept-attestation-overview.html) ensures only genuine TEE hardware with verified measurements can decrypt secrets.                                                                                                                           |

The EigenCompute TEE/KMS architecture does not protect against: 

| Attack Vector               | Mitigation                                                                                                      |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------|
| Vulnerable application code | Review and test your code for traditional vulnerabilities (for example, injection attacks, XSS).                |
| Secrets logged by your app  | Implement proper logging hygiene. Never log sensitive values.                                                   |
| Compromised dependencies    | Audit your dependencies and use trusted sources for packages.                                                   |
| Side-channel attacks        | While TEEs mitigate many side-channels, be cautious with timing-sensitive operations.                           |
| Physical access attacks     | TEE protects against remote attacks, but sophisticated physical access could theoretically compromise hardware. |
| Malicious container images  | You control your container. Ensure you build from trusted base images and scan for vulnerabilities.             |