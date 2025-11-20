---
title: Use Cases
sidebar_position: 2
---

### Autonomous Trading Systems

Traditional trading bots require depositing funds into developer-controlled wallets. With EigenCompute, the bot itself holds the funds:

```javascript
// Bot receives its deterministic wallet
const wallet = mnemonicToAccount(process.env.MNEMONIC)

// Bot executes strategy autonomously
if (await meetsTradingConditions()) {
  await executeSwap(wallet, userDeposit)
}
```

Funds are sent directly to the bot's address, with only the verified trading logic able to access them.

### Verifiable Social Media

Social platforms can prove their ranking algorithms work as claimed:

```javascript
// Transparent content ranking
const posts = await fetchUserFeed(userId)
const engagement = await getEngagementMetrics(posts)

// Verifiable algorithm execution
const ranked = posts.sort((a, b) => {
  // Public ranking logic
  return (b.likes * 0.3 + b.comments * 0.5 + b.shares * 0.2) -
         (a.likes * 0.3 + a.comments * 0.5 + a.shares * 0.2)
})

// Sign the feed to prove no manipulation
const signature = await wallet.signMessage({
  userId,
  algorithm: 'engagement_v1',
  feed: ranked.map(p => p.id)
})
```

The feed ranking algorithm is verifiable and transparent, preventing manipulation.

### Verifiable Gaming

Build high-performance games with provable fairness and on-chain assets:

```javascript
// Game server controls tournament funds
const wallet = mnemonicToAccount(process.env.MNEMONIC)
const tournament = await getTournamentState()

// Verifiable game logic
async function processGameRound(players, moves) {
  // Deterministic game state updates
  const outcomes = calculateOutcomes(moves, seedFromBlockhash)

  // Update player tokens on-chain
  for (const winner of outcomes.winners) {
    await wallet.sendTransaction({
      to: winner.address,
      value: tournament.prizePool / outcomes.winners.length
    })
  }

  return outcomes
}
```

Game logic is verifiable and tournament prizes are distributed according to transparent rules.
