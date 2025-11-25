---
title: Withdraw Funds before Terminating
sidebar_position: 4
---

:::danger Irreversible Action
Termination is permanent and irreversible. The TEE wallet mnemonic becomes inaccessible. Any funds in the wallet will be lost forever.
:::

```javascript
// Before termination, withdraw funds
const balance = await provider.getBalance(teeWallet.address)
if (balance > 0) {
  const tx = await teeWallet.sendTransaction({
    to: safeAddress,
    value: balance
  })
  await tx.wait()
  console.log('Funds withdrawn safely')
}
```