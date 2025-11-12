---
title: Attested API Quickstart
sidebar_position: 1
---

EigenCloud provides secure application hosting where Docker containers run with similar guarantees to smart contracts. This
guide will get you started with EigenCompute and deploying your first containerized workload in minutes.

## Getting Started 

What you'll do:

1. Install EigenCloud CLI.
2. Authenticate to EigenCompute.
3. Build and deploy the Attested API application. 
4. Request a signed message from the application.
5. Verify the signed message was returned from the application TEE. 

## Prerequisites

Before you begin, ensure you have:

- [Docker](https://www.docker.com/get-started/) - To package and publish application images.
- Testnet ETH - For deployment transactions.

:::tip Sepolia Faucets for Testnet ETH
Get testnet ETH from:
- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- [Alchemy Faucet](https://sepoliafaucet.com/)
:::

## 1. Install EigenCloud CLI

### macOS/Linux

```bash
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.sh | bash
```

### Windows

```bash
curl -fsSL https://eigenx-scripts.s3.us-east-1.amazonaws.com/install-eigenx.ps1 | powershell -
```

## 2. Authenticate to EigenCompute

### Switch to Sepolia Testnet

Set the deployment environment to Sepolia testnet:

```
eigenx env set sepolia
```

### Authenticate

Authenticate by generating a new private key: 

```bash
eigenx auth generate --store
```

The private key is displayed and must be backed up before continuing.

```
A new private key was generated for you.
IMPORTANT: You MUST backup this key now. It will never be shown again.
Copy it to your password manager or secure storage before continuing.
```

The private key is securely stored for the Eigenx CLI to use when signing deployment transactions.

:::warning 
The private key is securely stored while you remain authenticated to EigenCompute. 

If you log out of EigenCompute and have not backed up the private key that was generated for you, you will be unable to access your deployed application.

If you generate another EigenCompute key and overwrite the existing private key without first having backed up the private key that was generated for you, you will be unable to access your deployed application.
:::

### Get Testnet Funds

Obtain your wallet address:

```bash
eigenx auth whoami
```

Ensure the appplication wallet is funded with testnet ETH for deployment. 

:::tip Testnet ETH Faucets 
You can obtain testnet ETH from a faucet:
- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- [Alchemy Faucet](https://sepoliafaucet.com/)
::: 

## 3. Build and deploy application 

### Docker Login

Ensure Docker is running and log in to your Docker registry:

```bash
docker login
```

You must be logged into Docker to push the application image.

### Clone the templates repository 

Clone the repository: 

```
git clone https://github.com/Layr-Labs/eigenx-templates.git
```

Change into the `attested-api` directory: 

```
cd eigenx-templates/templates/attested-api/typescript
```

:::tip
The Attested API template is provided in Go, Python, Rust, and Typescript.
:::

### Subscribe to EigenCompute

Before deploying, you'll need an [EigenCompute subscription](billing).

To subscribe:

```
eigenx billing subscribe
```

The payment portal is displayed.  Enter your payment method details and click the **Subscribe** button.

:::important Mainnet Pricing
Current EigenCompute pricing is the [testnet pricing](billing). Mainnet deployments are available testnet pricing for a promotional
period ending on 12/31/2025.
:::

### Deploy to EigenCompute TEE

Build and deploy your application:

```bash
eigenx app deploy
```

Deployment options are displayed. Select the default deployment method to build from Dockerfile:

```
Found Dockerfile in current directory.
? Choose deployment method: Build and deploy from Dockerfile

📦 Build & Push Configuration
Your Docker image will be built and pushed to a registry
so that EigenX can pull and run it in the TEE.
```

Select the default image reference: 
```
? Enter image reference: <yourusername>/typescript:latest
```

Enter an application name: 
```
App name selection:
? Enter app name: <yourapplicationname>
```

Select `Continue without env file`:

```
Environment file not found.
Environment files contain variables like RPC_URL, etc.
? Choose an option: Continue without env file
```

Select the default instance type and logs option: 
```
Select instance type:
? Choose instance: g1-standard-4t - 4 vCPUs, 16 GB memory, TDX (default)
? Do you want to view your app's logs? Yes, but only viewable by app and platform admins
```

The CLI:
1. Builds the Docker image targeting `linux/amd64`.
2. Pushes the image to your Docker registry.
3. Deploys to a TEE instance.
4. Returns the application details including app ID and instance IP. You will see the Refreshing timer running while the 
app is being started.

```
2025/11/11 10:54:58 Status changed: Deploying → Running
2025/11/11 10:54:58 IP assigned: 34.82.182.235
                              
2025/11/11 10:54:58 App is now running with IP: 34.82.182.235
```

## 4. Request signed message

View the application information:

```bash
eigenx app info
```

The application information is displayed: 

```
2025/11/11 12:05:38 App Name: AppName
2025/11/11 12:05:38 App ID: 0x1Fe4a6FedF45071c45aE779756d79E463E590d28
2025/11/11 12:05:38 Latest Release Time: 2025-11-11 10:54:12
2025/11/11 12:05:38 Status: Running
2025/11/11 12:05:38 Instance: g1-standard-4t
2025/11/11 12:05:38 IP: 34.82.182.235
2025/11/11 12:05:38 EVM Address: 0x17c66C17F03899daD0cBab3A7Fc5EA89B37dcD52 (path: m/44'/60'/0'/0/0)
2025/11/11 12:05:38 Solana Address: G3QYTKnA5PmsQGyPN2xW83RsiUXm2Zsp2eN3y3tfAMsF (path: m/44'/501'/0'/0')
```

Use the Attested API to request a signed message containing a random number and attestation for that random number:

```
curl http://<yourApplicationIP>:8080/random
```

The API response is displayed. 

```
{"randomNumber":"0xdf9aac2b3d24f016069f60b80f9eb6078af53a75e003efccb3d9a701398e1f2e","randomNumberDecimal":"101139047948132875594643189998571798010250255951109269318072821531194929585966","timestamp":"2025-11-10T06:11:14.025Z","message":"RandomnessBeacon|0xdf9aac2b3d24f016069f60b80f9eb6078af53a75e003efccb3d9a701398e1f2e|2025-11-10T06:11:14.025Z","messageHash":"0x8fb10cc1c2b7e200f748df0caa61342328eda3220ee8943f6cf87a8b6e06922f","signature":"0x65fef0640e256497f9276565a662f568a2569003f83ab5c1b717d8a47b6d9347064ef9fd28df568bc18d343cf7505b77fae788818d7251c8d6da6f6d6a74f17f1b","signer":"0x17c66C17F03899daD0cBab3A7Fc5EA89B37dcD52"}
```

## 5. Verify the signed message

Click the **Verify Signature** button available on [Etherscan](https://etherscan.io/verifiedSignatures#). The **Verify Signature** window is displayed.

<img src="/img/verify-signature-button.png" width="50%" style={{ margin: '50px' }} />

From the API response, enter:

1. `signer` in the _Address_ field. The `signer` is the EVM Address for the application.
2. `message` in the _Message_ field.
3. `signature` in the _Signature Hash_ field.

Click the **Verify** button. The _Signature Verification_ window is displayed and indicates the message signature was verified.

<img src="/img/message-signature-verified.png" width="50%" style={{ margin: '50px' }} />

The signature verification verifies that message was signed by the private key for the application address.


