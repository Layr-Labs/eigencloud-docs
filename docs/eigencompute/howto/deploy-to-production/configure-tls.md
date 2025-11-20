---
title: Configure TLS
sidebar_position: 1
---

Add TLS/HTTPS configuration to your project for secure domain access to:

* Expose your TEE app using HTTPS.
* Receive webhook events over HTTPS.
* Serve web UIs securely.
* Deploy to production with TLS.

EigenCompute enables TLS with [Let's Encrypt](https://letsencrypt.org/) [using Caddyfile](https://caddyserver.com/docs/caddyfile#:~:text=The%20Caddyfile%20is%20just%20a,use%20JSON%20with%20Caddy's%20API.). To use an alternative certificate provider, configure in your Dockerfile.

## TLS Environment Variables 

| Variable            | Description               | Required   | Default   |
|---------------------|---------------------------|------------|-----------|
| `DOMAIN`            | Your domain name          | Yes        | -         |
| `APP_PORT`          | Port your app listens on  | Yes        | -         |
| `ACME_STAGING`      | Use Let's Encrypt staging | No         | `false`   |
| `ACME_FORCE_ISSUE`  | Force certificate reissue | No         | `false`   |
| `ENABLE_CADDY_LOGS` | Enable Caddy debug logs   | No         | `false`   |

## Add TLS Configuration

To add TLS configuration:

```
eigenx app configure tls
```

TLS configuration is added to your project:

```
TLS configuration added successfully

Created:
  - Caddyfile
  - .env.example.tls

To enable TLS:

1. Add TLS variables to .env:
   cat .env.example.tls >> .env

2. Configure required variables:
   DOMAIN=yourdomain.com
   APP_PORT=3000

   For first deployment (recommended):
   ENABLE_CADDY_LOGS=true
   ACME_STAGING=true

3. Set up DNS A record pointing to instance IP
   Run 'eigenx app info' to get IP address

4. Upgrade:
   eigenx app upgrade

Note: Let's Encrypt rate limit is 5 certificates/week per domain
```

## Configure TLS and Test with Staging Certificates

1. Add TLS environment variables to `.env`: 

```
cat .env.example.tls >> .env
```

2. Configure required variables: 

```
# Required
DOMAIN=yourdomain.com
APP_PORT=3000

# Recommended for first deployment
ENABLE_CADDY_LOGS=true
ACME_STAGING=true  # Use staging certificates initially
```

:::tip
To avoid Let's Encrypt rate limits, always test with staging certificates first.
:::

3. Configure DNS by creating an A record pointing to your instance IP: 

    * Type: A 
    * Name: yourdomain.com
    * Value: Obtain IP address from `eigenx app info`

4. Deploy app with TLS configuration: 

```
eigenx app upgrade
```

## Switch to Production Certificates

To switch from staging to production:

1. Force a reissue of certificates by updating the `ACME_FORCE_ISSUE` environment variable:

```
ACME_STAGING=false
ACME_FORCE_ISSUE=true  # Only needed once
```

2. Redeploy the app:

```
eigenx app upgrade
```

3. Disable the `ACME_FORCE_ISSUE` environment variable:

```
ACME_FORCE_ISSUE=false
```

:::warning Let's Encrypt Rate Limits
Let's Encrypt has a rate limit of 5 certificates per week per domain. Always test with staging certificates first.
::: 

## Troubleshooting 

### DNS not propagating

Wait 5-10 minutes after DNS changes. Verify with:

```bash
dig yourdomain.com
nslookup yourdomain.com
```

### Certificate issuance failing

Check logs:

```bash
eigenx app logs
```

Common issues:
- DNS not pointing to correct IP.
- Port 80/443 not accessible.
- Domain already has certificates (use `ACME_FORCE_ISSUE=true`).

### Rate limit exceeded

If you hit rate limits:
- Wait a week for the limit to reset.
- Use a different subdomain.
- Consider using staging for development.