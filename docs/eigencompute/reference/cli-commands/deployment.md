---
title: Deployment & Upgrades
sidebar_position: 3
---

# Deployment & Upgrades Commands

Deploy new applications to TEE instances and upgrade existing deployments with new code or configuration.

## Commands Overview

| Command | Description |
| --- | --- |
| `eigenx app deploy [image_ref]` | Deploy new app to TEE |
| `eigenx app upgrade <app-id\|name> [image_ref]` | Update existing deployment |

---

## `eigenx app deploy`

Deploy a new application to a Trusted Execution Environment (TEE). 

The CLI will prompt you for [billing details](../../get-started/billing) in our payment portal.

### Syntax

```bash
eigenx app deploy [command options] [image_ref]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `image_ref` | Pre-built Docker image reference | No |

### Flags

| Flag                         | Description                                                         |
|------------------------------|---------------------------------------------------------------------|
| `--dockerfile <path>`, `-f`  | Path to Dockerfile                                                  |
| `--env-file <path>`          | Path to .env file (default: `.env`)                                 |
| `--private-key <key>`        | Private key for signing transactions                                |
| `--environment <env>`        | Deployment environment to use                                       |
| `--rpc-url <url>`            | RPC URL to connect to blockchain                                    |
| `--name <name>`              | Friendly name for the app                                           |
| `--log-visibility <setting>` | Log visibility: `public`, `private`, or `off`                       |
| `--instance-type <value>`    | Machine instance type to use: `g1-standard-4t`, or `g1-standard-8t` |

### Examples

**Deploy from current directory**

```bash
eigenx app deploy
```

The CLI will prompt you for deployment configuration:

```
Found Dockerfile in current directory.
? Choose deployment method: Build and deploy from Dockerfile

📦 Build & Push Configuration

Detected authenticated registries:
  • Docker Hub (username: your-username)
    Example: your-username/my-app:latest

? Select image destination: your-username/my-app:latest
? Enter app name: my-app
? Choose an option: Use .env file
? Do you want to view your app's logs? Yes, but only viewable by me

Building base image from Dockerfile...
[Build output...]

Building updated image with EigenX components...
[Build output...]

Publishing updated image to your-username/my-app:latest...
[Push output...]

Deploying new app...

App Name: my-app
App ID: 0x34EEA5808d2580C68172b00c29111A7342B49F9c
Latest Release Time: 2025-10-02 12:58:48
Status: Deploying
IP: No IP assigned
EVM Address: 0xc86aaDeC6C291C30FF9e4a86b7a7e1200E616112 (path: m/44'/60'/0'/0/0)
Solana Address: AxkZ28MneJzGySFfW6rFQJhcRnkCszWNRXGiGWt4Nnew (path: m/44'/501'/0'/0')

Status changed: Deploying → Running
IP assigned: 34.169.169.68

App is now running with IP: 34.169.169.68
```

**Deploy with custom Dockerfile location**

```bash
eigenx app deploy --dockerfile ./docker/Dockerfile.prod
```

**Deploy with custom .env location**

```bash
eigenx app deploy --env-file ./config/.env.production
```

**Deploy pre-built image**

```bash
# Build and push manually
docker build --platform linux/amd64 -t registry.io/user/myapp:v1.0 .
docker push registry.io/user/myapp:v1.0

# Deploy the image
eigenx app deploy registry.io/user/myapp:v1.0
```

**Deploy without building (use existing image)**

```bash
eigenx app deploy registry.io/user/myapp:latest --no-build
```

### Deployment Process

The deployment follows these steps:

1. **Build Phase** (if not using pre-built image)
   - Read Dockerfile
   - Build for `linux/amd64` platform
   - Tag image with unique identifier

2. **Push Phase**
   - Authenticate with Docker registry
   - Push image layers
   - Verify image is accessible

3. **Transaction Phase**
   - Sign deployment transaction
   - Submit to Ethereum (Sepolia testnet)
   - Wait for confirmation

4. **Provisioning Phase**
   - Provision TEE instance
   - Generate app mnemonic via KMS
   - Inject environment variables
   - Start application container

5. **Verification Phase**
   - Verify app is running
   - Return app details and IP

### Requirements

**Dockerfile Requirements:**

```dockerfile
# Must target linux/amd64
FROM --platform=linux/amd64 node:18

# Must run as root (TEE requirement)
USER root

# Application code
WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "start"]
```

**Port Exposure:**

Your Dockerfile must include the `EXPOSE` directive to specify which port(s) your application listens on:

```dockerfile
# Single port
EXPOSE 3000

# Multiple ports
EXPOSE 3000
EXPOSE 9090

# Port range
EXPOSE 8000-8010
```

See the [Port Exposure Guide](../../howto/configure/expose-ports.md).

**Environment Variables:**

Your `.env` file is encrypted and securely injected into the TEE:

```bash
# Private variables (encrypted)
API_KEY=secret-key-here
DATABASE_URL=postgres://...

# Public variables (visible to users for transparency)
NETWORK_PUBLIC=sepolia
VERSION_PUBLIC=1.0.0
```

Variables ending in `_PUBLIC` are visible onchain for transparency.

:::important Auto-Generated MNEMONIC
The `MNEMONIC` environment variable is **automatically provided by KMS** at runtime. Any mnemonic in `.env.example` is just a placeholder. The TEE overwrites it with your app's unique, persistent KMS-generated mnemonic.
:::

### Use Cases

**New Application Deployment**

```bash
# From template
eigenx app create trading-bot typescript
cd trading-bot
cp .env.example .env
# Edit .env
eigenx app deploy
```

**Existing Project Deployment**

```bash
cd my-existing-app
eigenx app deploy --dockerfile ./Dockerfile --env-file ./.env
```

**CI/CD Pipeline Deployment**

```bash
# In CI/CD script
export EIGENX_PRIVATE_KEY=$CI_PRIVATE_KEY
docker build --platform linux/amd64 -t registry.io/app:$CI_COMMIT_SHA .
docker push registry.io/app:$CI_COMMIT_SHA
eigenx app deploy registry.io/app:$CI_COMMIT_SHA
```

**Multi-Environment Deployment**

```bash
# Deploy to mainnet (default)
eigenx app deploy --env-file .env.mainnet

# Deploy to sepolia testnet
eigenx --environment sepolia app deploy --env-file .env.sepolia
```

### Troubleshooting

**Build fails: platform mismatch**

Ensure your Dockerfile specifies the platform:

```dockerfile
FROM --platform=linux/amd64 node:18
```

**Push fails: authentication required**

Login to Docker registry:

```bash
docker login
```

**Transaction fails: insufficient funds**

Get Sepolia ETH:

```bash
eigenx auth whoami  # Get your address
# Visit faucet and request funds
```

**App fails to start**

Check logs:

```bash
eigenx app logs <app-id>
```

Common issues:
- Missing environment variables
- Port binding issues
- Application crashes
- Incorrect entrypoint/command

---

## `eigenx app upgrade`

Update an existing application with new code, configuration, or environment variables.

### Syntax

```bash
eigenx app upgrade [command options] <app-id|name> <image_ref>
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | Yes |
| `image_ref` | Pre-built Docker image reference | Yes |

### Flags

| Flag                         | Description                                                         |
|------------------------------|---------------------------------------------------------------------|
| `--dockerfile <path>`, `-f`  | Path to Dockerfile                                                  |
| `--env-file <path>`          | Path to .env file (default: `.env`)                                 |
| `--private-key <key>`        | Private key for signing transactions                                |
| `--environment <env>`        | Deployment environment to use                                       |
| `--rpc-url <url>`            | RPC URL to connect to blockchain                                    |
| `--log-visibility <setting>` | Log visibility: `public`, `private`, or `off`                       |
| `--instance-type <value>`    | Machine instance type to use: `g1-standard-4t`, or `g1-standard-8t` |

### Examples

**Upgrade with new code**

```bash
# Make code changes
vim src/index.ts

# Upgrade deployment
eigenx app upgrade my-app
```

Output:
```
Building Docker image...
✓ Image built: registry.io/user/app:def456

Pushing image to registry...
✓ Image pushed successfully

Upgrading app...
✓ Transaction sent: 0xabcdef1234567890...
✓ Waiting for confirmation...
✓ Upgrade successful!

App Details:
  App ID: app-1a2b3c4d5e6f
  Instance IP: 203.0.113.42
  Status: Running
  Image: registry.io/user/app:def456

Your app has been updated!
```

**Upgrade environment variables only**

```bash
# Edit .env file
vim .env

# Upgrade with new environment
eigenx app upgrade my-app
```

**Upgrade with pre-built image**

```bash
eigenx app upgrade my-app registry.io/user/app:v2.0
```

**Upgrade using app ID**

```bash
eigenx app upgrade app-1a2b3c4d5e6f
```

### Upgrade Process

1. **Build New Image** (if not using pre-built)
   - Build updated application
   - Tag with new identifier

2. **Push Image**
   - Push to registry
   - Verify accessibility

3. **Submit Upgrade Transaction**
   - Sign upgrade transaction
   - Submit to blockchain
   - Wait for confirmation

4. **Update TEE Instance**
   - Pull new image
   - Update environment variables
   - Restart application container

5. **Verify Update**
   - Confirm app is running
   - Verify new version is active

### What Gets Updated

**An upgrade updates:**
- Application code (new Docker image)
- Environment variables (updated .env values)
- Configuration (TLS, ports, etc.)

**What stays the same:**
- App ID
- TEE wallet address (same MNEMONIC)
- Instance IP (usually)

:::tip Zero Downtime
Upgrades aim for minimal downtime, but brief interruptions may occur during container restart. Plan upgrades during maintenance windows for production apps.
:::

### Common Upgrade Scenarios

**Code Update**

```bash
# Fix a bug or add feature
git pull
npm install  # if dependencies changed
eigenx app upgrade my-app
```

**Environment Variable Update**

```bash
# Add new API key
echo "NEW_API_KEY=abc123" >> .env
eigenx app upgrade my-app
```

**TLS Configuration**

```bash
# Add TLS
eigenx app configure tls
cat .env.example.tls >> .env
# Edit DOMAIN and APP_PORT
eigenx app upgrade my-app
```

**Version Rollback**

```bash
# Deploy previous image version
eigenx app upgrade my-app registry.io/user/app:v1.0
```

### Best Practices

**1. Test Before Upgrading**

```bash
# Test locally first
docker build --platform linux/amd64 -t my-app:test .
docker run -p 3000:3000 my-app:test
# Verify it works

# Then upgrade
eigenx app upgrade my-app
```

**2. Use Version Tags**

```bash
# Build with version tag
docker build --platform linux/amd64 -t registry.io/app:v2.1.0 .
docker push registry.io/app:v2.1.0

# Deploy specific version
eigenx app upgrade my-app registry.io/app:v2.1.0
```

**3. Monitor After Upgrade**

```bash
# Upgrade
eigenx app upgrade my-app

# Immediately check logs
eigenx app logs --watch my-app

# Verify app health
eigenx app info my-app
```

**5. Use Version Tags**

```bash
# Build with version tag
docker build --platform linux/amd64 -t registry.io/app:v2.1.0 .
docker push registry.io/app:v2.1.0

# Deploy specific version
eigenx app upgrade my-app registry.io/app:v2.1.0
```

### Troubleshooting

**Upgrade transaction fails**

Check you have sufficient ETH:

```bash
eigenx auth whoami
```

**App fails after upgrade**

Check logs for errors:

```bash
eigenx app logs my-app
```

Rollback to previous version if needed:

```bash
eigenx app upgrade my-app registry.io/user/app:previous-tag
```

**Environment variables not updating**

Ensure your .env file is being read:

```bash
eigenx app upgrade my-app --env-file ./.env
```

**Image pull fails**

Verify image exists and is accessible:

```bash
docker pull registry.io/user/app:tag
```

---

## Deployment Best Practices

### Security

**1. Use public variables for transparency**

```bash
# .env
VERSION_PUBLIC=1.0.0
NETWORK_PUBLIC=sepolia
SECRET_API_KEY=secret-here  # Private
```

**2. Rotate secrets regularly**

```bash
# Update API keys periodically
vim .env
eigenx app upgrade my-app
```

### Reliability

**1. Health checks in your app**

```javascript
// Example health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', version: process.env.VERSION_PUBLIC })
})
```

**2. Graceful shutdown**

```javascript
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully')
  await cleanup()
  process.exit(0)
})
```

**3. Logging**

```javascript
console.log('App started')
console.error('Error occurred:', error)
// Logs are visible via: eigenx app logs
```

---

## Related Commands

- [Lifecycle Management](./lifecycle) - Start, stop, and terminate apps
- [Monitoring](./monitoring) - View logs and app information
- [Project Management](./project-management) - Create and configure projects
- [Authentication](./authentication) - Manage deployment credentials
