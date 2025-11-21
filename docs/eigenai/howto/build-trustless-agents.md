---
title: Build Trustless Agents with ERC-8004 and EigenCloud
sidebar_position: 3
---

# How to Build Trustless Agents with ERC-8004 and EigenCloud

Building verifiable AI agents using [ERC8004](https://eips.ethereum.org/EIPS/eip-8004), [Agent0 SDK](https://sdk.ag0.xyz/), [EigenAI](https://docs.eigencloud.xyz/products/eigenai/concepts/eigenai-overview), and [EigenCompute](https://docs.eigencloud.xyz/products/eigencompute/concepts/eigencompute-overview).

> **Note**: This guide uses Python examples, but both the OpenAI SDK and Agent0 SDK are also available in TypeScript.

## Why ERC-8004 + EigenCloud?

EigenAI and EigenCompute provide **verifiable, deterministic AI execution**. ERC-8004 provides **decentralized identity and reputation** for those agents. 

Together, they enable trustless AI economies where:

- Agents prove their execution integrity (via EigenAI/EigenCompute TEEs)
- Agents advertise capabilities and build reputation on-chain (via ERC-8004)
- Other agents discover and evaluate them without intermediaries (via Agent0 SDK)

## Quick Architecture

**EigenCompute** → Runs your agent logic in a TEE with its own wallet  
**EigenAI** → Provides deterministic, verifiable LLM inference  
**ERC-8004** → Registers your agent identity on-chain as an NFT  
**Agent0 SDK** → Manages registration, discovery, and reputation

## Getting Started

### 1. Build Your Agent Logic

Create your agent with EigenAI inference:
```python
from openai import OpenAI

# EigenAI client (OpenAI-compatible)
client = OpenAI(
    base_url="https://eigenai.eigencloud.xyz/v1",
    default_headers={"x-api-key": eigenai_api_key}
)

# Deterministic inference with seed
response = client.chat.completions.create(
    model="gpt-oss-120b-f16",
    seed=42,  # Same seed = same output (verifiable!)
    messages=[{"role": "user", "content": "Should I buy or sell?"}]
)

# Response includes cryptographic signature
print(response.signature)  # Verify this matches if you re-run
```

**Why this matters**: With EigenAI, anyone can verify your agent's decisions by re-running the same prompt with the same seed and checking the signature.

### 2. Register Your Agent with ERC-8004

Before deploying to EigenCompute, register your agent identity on-chain:
```python
from agent0_sdk import SDK

# Initialize SDK (Sepolia testnet)
sdk = SDK(
    chainId=11155111,
    rpcUrl="https://sepolia.infura.io/v3/YOUR_PROJECT_ID",
    signer=your_private_key,
    ipfs="pinata",
    pinataJwt=your_pinata_jwt
)

# Create agent
agent = sdk.createAgent(
    name="EigenAI Trading Agent",
    description="Verifiable trading agent using deterministic LLM inference. Uses EigenAI for decision-making with guaranteed reproducibility.",
    image="https://example.com/agent.png"
)

# Add MCP endpoint (will be your EigenCompute URL after deployment)
agent.setMCP("https://your-eigencompute-agent.com/mcp")

# Enable x402 payments (for clients paying YOUR agent)
agent.setX402Support(True)

# note - this agent still uses API keys to pay for EigenAI inference.
# x402 support for EigenAI is coming soon.

# Set trust models - TEE attestation is key for Eigen!
agent.setTrust(
    teeAttestation=True,      # EigenCompute provides TEE attestations
    reputation=True,           # Build reputation via feedback
    cryptoEconomic=True       # Optional: add economic stakes
)

# Register on-chain
agentId = agent.register()
print(f"Agent registered: {agentId}")
```

### 3. Deploy to EigenCompute

Now deploy your agent to a TEE with its own wallet:
```bash
# Initial deployment
eigenx deploy myagent:latest
```

Your deployed agent now has:
- Hardware-isolated execution (Intel TDX)
- A unique wallet for autonomous operations
- Cryptographic proof of its Docker image (proving exactly what code is running)

After deployment, update your agent registration with the wallet address:
```python
# Load your registered agent
agent = sdk.loadAgent(agentId)

# Set agent wallet (from EigenCompute deployment)
agent.setAgentWallet("0x742d35...bEb", chainId=11155111)

# Update registration on-chain
agent.register()
```

**Deploying Updates**: When you update your agent code, deploy the new version:
```bash
eigenx app upgrade
```

This creates a new cryptographic attestation for the updated Docker image while maintaining the same agent identity and wallet.

## Discovery: Finding Verifiable Agents
```python
# Search for agents with TEE attestation
agents = sdk.searchAgents(
    trustModels=["tee-attestation"],  # Only verifiable agents
    x402support=True,                  # Payment-enabled
    active=True
)

for agent in agents:
    print(f"{agent.name}: {agent.walletAddress}")
    print(f"TEE-attested: {agent.hasTEEAttestation}")
    print(f"Reputation: {agent.reputationScore}")
```

## Building Reputation with Verifiable Feedback
```python
# After using an EigenAI agent
feedback = sdk.prepareFeedback(
    agentId="11155111:123",
    score=95,
    tags=["accurate", "fast"],
    # Optional: Include payment proof from x402
    proofOfPayment={
        "fromAddress": "0x...",
        "toAddress": agent.walletAddress,
        "chainId": "11155111",
        "txHash": "0x..."
    }
)

sdk.submitFeedback(feedback)
```

## Complete Example: Verifiable Trading Agent
```python
# 1. Build agent logic with EigenAI
# Your agent.py uses deterministic EigenAI calls

# 2. Register with ERC-8004
agent = sdk.createAgent(
    name="AlphaBot",
    description="TEE-attested trading agent with deterministic decision-making"
)

agent.setMCP("https://alphabot.eigencompute.xyz/mcp")
agent.setTrust(teeAttestation=True, reputation=True)
agent.setX402Support(True)

agentId = agent.register()

# 3. Deploy to EigenCompute
# $ eigenx deploy alphabot:latest

# 4. Update registration with wallet
agent = sdk.loadAgent(agentId)
agent.setAgentWallet(eigencompute_wallet_address)
agent.register()

# 5. Other agents discover and trust your agent
results = sdk.searchAgents(
    capabilities=["trading"],
    trustModels=["tee-attestation"]
)

# 6. Build reputation through verifiable interactions
```

## Key Benefits

### For Agent Developers
- **Verifiable execution**: TEE attestations prove your agent runs unmodified code
- **Deterministic AI**: Same inputs always produce same outputs (with seed)
- **Autonomous identity**: Agent wallet can hold funds and sign transactions
- **Discoverability**: Agents find you via indexed capabilities and trust signals

### For Agent Users
- **Trust**: Verify agent execution and decisions cryptographically
- **Reputation**: See on-chain feedback history before engaging
- **Transparency**: Audit trail of what code is running (Docker digest on-chain)
- **Payment security**: x402 payments to attested agent wallets

## Trust Model Architecture
```
┌─────────────────┐
│  EigenCompute   │ → TEE Attestation (proves code integrity)
│  (TEE + Wallet) │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│    EigenAI      │ → Deterministic Inference (verifiable outputs)
│  (Signed LLM)   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│    ERC-8004     │ → On-chain Identity + Reputation
│  (Agent0 SDK)   │
└─────────────────┘
```

## Next Steps

1. **Get Access**: Request [onboarding](https://onboarding.eigencloud.xyz/) for [EigenAI](https://docs.eigencloud.xyz/products/eigenai/concepts/eigenai-overview) and [EigenCompute](https://docs.eigencloud.xyz/products/eigencompute/concepts/eigencompute-overview)
2. **Build Your Agent**: Integrate EigenAI for deterministic inference
3. **Register Identity**: Use [Agent0 SDK](https://sdk.ag0.xyz/) to register on ERC-8004
4. **Deploy to TEE**: Follow [EigenCompute quickstart](https://docs.eigencloud.xyz/products/eigencompute/quickstart)
5. **Build Reputation**: Submit and receive feedback for verifiable interactions

## Resources

- **Agent0 SDK**: [Python and TypeScript](https://sdk.ag0.xyz/)
- **ERC-8004 Spec**: [EIP-8004](https://eips.ethereum.org/EIPS/eip-8004)
- **EigenAI Docs**: [docs.eigencloud.xyz/products/eigenai](https://docs.eigencloud.xyz/products/eigenai/concepts/eigenai-overview)
- **EigenCompute Docs**: [docs.eigencloud.xyz/products/eigencompute](https://docs.eigencloud.xyz/products/eigencompute/concepts/eigencompute-overview)