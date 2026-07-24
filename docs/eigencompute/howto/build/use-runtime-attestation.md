---
title: Use runtime attestation
sidebar_position: 2
---

:::important
Runtime attestation is available inside a deployed EigenCompute TEE. The `KMS_SERVER_URL` and
`KMS_PUBLIC_KEY` environment variables it depends on are set automatically at runtime — there is
nothing to configure. Outside a TEE the calls fail; guard for local development.
:::

Your [app wallet](use-app-wallet.mdx) proves *who* your app is. Runtime attestation proves *what it did*:
at any point while running, your app can request a fresh attestation over a payload — an API response,
a job result, a model output, a decision — and receive a JWT that binds that exact payload to your app's
attested TEE instance at that moment. The KMS verifies the enclave's hardware quote before minting the
token, so the JWT is checkable evidence that *this code, in this enclave, committed to this data*.

Use it when a signature from the app wallet isn't enough — for example, when the verifier wants proof
rooted in the TEE quote rather than trust in how your app handles its key, or when each action needs its
own independently verifiable receipt.

## Attest a payload

`extraData` must be a `Buffer` and is limited to **1 MB**. Don't send large payloads — hash them first.
A SHA-512 digest is exactly 64 bytes and works on every TEE:

```typescript
import { createHash } from 'node:crypto';

// pre-hash the payload you want to commit to
const payload = JSON.stringify(result);
const extraData = createHash('sha512').update(payload).digest(); // 64 bytes
```

### Option 1: directly via `AttestClient` (no caching)

```typescript
import { AttestClient } from '@layr-labs/ecloud-sdk/attest';

const client = new AttestClient({ audience: 'my-verifier' });

const jwt = await client.attest(extraData);
```

### Option 2: via `JwtProvider` (recommended — dedupes concurrent calls)

```typescript
import { AttestClient, JwtProvider } from '@layr-labs/ecloud-sdk/attest';

const provider = new JwtProvider(new AttestClient({ audience: 'my-verifier' }));

// no extraData → long-lived cached JWT (use for service-to-service auth)
const generalJwt = await provider.getToken();

// with extraData → per-action token, bypasses the cache,
// but concurrent in-flight requests for the same extraData are deduplicated
const actionJwt = await provider.getToken(extraData);
```

`audience` identifies the intended consumer of the token; the verifier should check it. Inside the TEE,
the KMS connection details are picked up from the environment automatically.

## Verify an attestation

The returned JWT is signed by the KMS after it has verified the enclave's hardware quote against your
app's registered image. A verifier:

1. Validates the JWT signature against the KMS public key.
2. Checks the `audience` claim matches what it expects.
3. Recomputes the SHA-512 of the payload it received and compares it to the extra-data claim in the token.
4. Ties the token to your app via its entry on the [verify dashboard](https://verify.eigencloud.xyz).

If the hash matches, the payload is exactly what the attested instance committed to — it cannot have been
altered after the fact.

## Wallet signature or runtime attestation?

| | App wallet signature | Runtime attestation |
|---|---|---|
| Proves | This app's key signed the data | This attested TEE instance committed to the data |
| Root of trust | KMS-generated mnemonic held in the enclave | Hardware quote verified by the KMS per request |
| Verify with | One `ecrecover` — no EigenCloud tooling | JWT validation against the KMS public key |
| Best for | Onchain settlement, wallet-native flows | Per-action receipts, offchain verifiers, freshness |

They compose: sign the result with the app wallet for onchain use *and* attach a runtime attestation for
verifiers who want the hardware-rooted receipt.
