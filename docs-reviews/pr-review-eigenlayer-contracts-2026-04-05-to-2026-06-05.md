# PR Documentation Review: Layr-Labs/eigenlayer-contracts (2026-04-05 to 2026-06-05)

Generated: 2026-06-05
Repository: Layr-Labs/eigenlayer-contracts
Period: Last 2 months (April 5 - June 5, 2026)
Total PRs Reviewed: 200

## Summary

**Total PRs Reviewed:** 200

### By Documentation Impact

- **⚠️ Missing Major Documentation: 7 PRs**
  - Duration Vaults (new feature, no docs) -> https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-015.md 
  - Incentive Council (new feature, no docs) -> governance not part of tech docs 
  - Protocol Registry (new feature, no docs)

- **📝 Existing Docs to Update: 21 PRs**
  - Audit reports to add (3 PRs)
  - Rewards v2.2 updates (2 PRs)
  - Slashing documentation updates (4 PRs)
  - EigenDA rewards (1 PR)
  - Operator/configuration updates (5 PRs)
  - Miscellaneous updates (6 PRs)

- **❓ Needs Review: 14 PRs**
  - Documentation impact unclear without deeper analysis

- **✅ No Documentation Needed: 158 PRs**
  - Internal refactoring, CI changes, tests, etc.

---

## ⚠️ Missing Major Documentation (7 PRs)

### PR #1740: feat: incentive council + duration vaults release
- **Merged:** 2026-03-05
- **Reason:** Major feature release introducing incentive council and duration vaults - significant new functionality
- **Suggested Docs:** Create new sections in eigenlayer docs for incentive council mechanics and duration vaults overview, configuration, and usage
- **Local Docs Status:** ⚠️ **NO documentation found for duration vaults or incentive council** - needs comprehensive new docs
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1740

### PR #1732: feat: duration vaults
- **Merged:** 2026-03-05
- **Reason:** New duration vaults feature - major new functionality for stakers
- **Suggested Docs:** Create duration vaults documentation in eigenlayer/restakers section covering concept, usage, withdrawal mechanics
- **Local Docs Status:** ⚠️ **NO documentation found for duration vaults** - needs new docs in `docs/eigenlayer/restakers/`
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1732

### PR #1692: docs: duration vaults documentation
- **Merged:** 2026-01-28
- **Reason:** Contract-level documentation for duration vaults added to repo
- **Suggested Docs:** Adapt contract documentation into user-facing guides for duration vaults in eigenlayer/restakers
- **Local Docs Status:** ⚠️ **NO user-facing duration vaults docs** - contract docs exist but need adaptation to `docs/eigenlayer/restakers/`
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1692

### PR #1691: feat(incentives): add protocol fee
- **Merged:** 2026-01-27
- **Reason:** New protocol fee mechanism for incentives system
- **Suggested Docs:** Document protocol fee structure, rates, and collection mechanism in incentive council documentation
- **Local Docs Status:** ⚠️ **NO incentive council docs** - needs new documentation section
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1691

### PR #1690: fix: address Protocol Registry informationals from Certora audit
- **Merged:** 2026-01-26
- **Reason:** Audit-driven fixes to Protocol Registry may affect integration guides
- **Suggested Docs:** Review protocol registry integration documentation for any behavior changes
- **Local Docs Status:** ⚠️ **NO protocol registry docs found** - needs new documentation if user-facing
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1690

### PR #1681: feat(incentives): add implementation
- **Merged:** 2026-01-18
- **Reason:** Initial implementation of incentives system
- **Suggested Docs:** Create comprehensive incentives documentation covering architecture, integration, and usage for AVS developers
- **Local Docs Status:** ⚠️ **NO incentives system docs** - needs comprehensive new documentation section
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1681

### PR #1678: feat(incentives): add interface
- **Merged:** 2026-01-16
- **Reason:** New interfaces for incentives system
- **Suggested Docs:** Document incentives interfaces in eigenlayer/developers/contracts-api reference
- **Local Docs Status:** ⚠️ **NO incentives interface docs** - needs new documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1678

---

## 📝 Existing Docs to Update (21 PRs)

### Audit Reports (3 PRs)

### PR #1747: feat: add Certora (incentive council) report
- **Merged:** 2026-03-20
- **Reason:** New audit report for incentive council feature adds security verification documentation
- **Suggested Docs:** Add audit report reference to security/audit documentation section for EigenLayer
- **Local Docs Status:** `docs/eigenlayer/security/audits.md` exists and lists audit reports - add this new Certora incentive council report
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1747

### PR #1744: docs: add rewards v2.2 audit report
- **Merged:** 2026-03-16
- **Reason:** New audit report for rewards v2.2 should be referenced in security documentation
- **Suggested Docs:** Add to audit reports list in eigenlayer security/compliance documentation
- **Local Docs Status:** `docs/eigenlayer/security/audits.md` exists - add rewards v2.2 audit report
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1744

### PR #1742: docs: add duration vault audit report
- **Merged:** 2026-03-09
- **Reason:** New audit report should be referenced in documentation
- **Suggested Docs:** Add to audit reports section for EigenLayer vaults documentation
- **Local Docs Status:** `docs/eigenlayer/security/audits.md` exists - add duration vault audit report
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1742

### Rewards System (2 PRs)

### PR #1741: feat: update RewardsCoordinator.md with the new v2.2 reward type
- **Merged:** 2026-03-11
- **Reason:** Updates to RewardsCoordinator with new reward type v2.2 - contract documentation updated, may need user-facing docs
- **Suggested Docs:** Update eigenlayer/developers/rewards documentation with v2.2 reward type details
- **Local Docs Status:** Rewards docs exist at `docs/eigenlayer/concepts/rewards/` - update with v2.2 reward type
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1741

### PR #1682: feat: rewards v2.2
- **Merged:** 2026-01-19
- **Reason:** Major rewards system update to v2.2 with new features
- **Suggested Docs:** Comprehensive update to eigenlayer/developers/rewards and eigenlayer/operators/rewards sections for v2.2 changes
- **Local Docs Status:** Rewards docs exist at `docs/eigenlayer/concepts/rewards/` and `docs/eigenlayer/operators/howto/claimrewards/` - comprehensive update needed for v2.2
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1682

### Slashing (4 PRs)

### PR #1693: fix: address Certora audit findings for Slashing UX Improvements
- **Merged:** 2026-01-29
- **Reason:** Security fixes from audit may change expected behavior
- **Suggested Docs:** Review slashing documentation for any behavior changes from audit fixes
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1693

### PR #1689: fix: address slashing commitments informationals from Certora audit
- **Merged:** 2026-01-25
- **Reason:** Audit-driven changes to slashing commitments
- **Suggested Docs:** Verify slashing commitments documentation reflects audit fixes
- **Local Docs Status:** Slashing docs exist at `docs/eigenlayer/concepts/slashing/` - verify accuracy after audit fixes
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1689

### PR #1688: fix: update allocation delay fields immediately for newly registered operators
- **Merged:** 2026-01-24
- **Reason:** Changes timing behavior for operator registration - affects operator onboarding flow
- **Suggested Docs:** Update eigenlayer/operators/registration documentation to reflect immediate allocation delay field updates
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1688

### PR #1670: feat: slashing UX improvements
- **Merged:** 2026-01-11
- **Reason:** UX improvements to slashing mechanisms affect user interaction patterns
- **Suggested Docs:** Update eigenlayer/operators/slashing documentation to reflect UX improvements and new workflows
- **Local Docs Status:** Slashing docs exist at `docs/eigenlayer/concepts/slashing/` - update with UX improvements
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1670

### EigenDA (1 PR)

### PR #1705: feat: add EigenDA rewards submission type
- **Merged:** 2026-02-10
- **Reason:** New rewards submission type specific to EigenDA
- **Suggested Docs:** Update eigenda/rewards documentation with new submission type and how operators submit EigenDA-specific rewards
- **Local Docs Status:** EigenDA operator docs exist at `docs/eigenda/operator-guides/` - add rewards submission type documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1705

### Operator Configuration (5 PRs)

### PR #1731: fix: assert `defaultOperatorSplitBips` does not exceed 100%
- **Merged:** 2026-02-26
- **Reason:** Adds validation for operator split parameter - may affect documented valid ranges
- **Suggested Docs:** Verify eigenlayer/operators documentation reflects valid range (0-100%) for defaultOperatorSplitBips
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1731

### PR #1687: fix: update slasher field immediately when instantEffectBlock=true
- **Merged:** 2026-01-23
- **Reason:** Changes slasher update timing when instant effect is enabled
- **Suggested Docs:** Update slashing documentation to explain instant effect behavior for slasher field updates
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1687

### PR #1679: docs: update version matrix
- **Merged:** 2026-01-17
- **Reason:** Version matrix updated in contract repo
- **Suggested Docs:** Sync version matrix to eigenlayer documentation, ensure contract version compatibility table is current
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1679

### PR #1672: feat: release notes; fix compile; add `ProtocolRegistry` docs
- **Merged:** 2026-01-13
- **Reason:** Release notes and ProtocolRegistry documentation added
- **Suggested Docs:** Incorporate release notes and ProtocolRegistry information into eigenlayer/developers documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1672

### PR #1671: feat: duration vaults
- **Merged:** 2026-01-12
- **Reason:** Duration vaults feature implementation (duplicate of #1732 or early version)
- **Suggested Docs:** See #1732 for duration vaults documentation needs
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1671

### Miscellaneous (6 PRs)

### PR #1752: ci: fix binding failure
- **Merged:** 2026-05-01
- **Reason:** CI changes that affect contract bindings generation may impact developer workflows if bindings are documented
- **Suggested Docs:** Check if contract binding generation is documented in developer guides; update if procedures changed
- **Local Docs Status:** No documentation found for contract bindings generation process
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1752

**MM Review** Assessment correct. 

### PR #1747: feat: add Certora (incentive council) report
- **Merged:** 2026-03-20
- **Reason:** New audit report for incentive council feature adds security verification documentation
- **Suggested Docs:** Add audit report reference to security/audit documentation section for EigenLayer
- **Local Docs Status:** `docs/eigenlayer/security/audits.md` exists and lists audit reports - add this new Certora incentive council report
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1747

### PR #1744: docs: add rewards v2.2 audit report
- **Merged:** 2026-03-16
- **Reason:** New audit report for rewards v2.2 should be referenced in security documentation
- **Suggested Docs:** Add to audit reports list in eigenlayer security/compliance documentation
- **Local Docs Status:** `docs/eigenlayer/security/audits.md` exists - add rewards v2.2 audit report
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1744

### PR #1742: docs: add duration vault audit report
- **Merged:** 2026-03-09
- **Reason:** New audit report should be referenced in documentation
- **Suggested Docs:** Add to audit reports section for EigenLayer vaults documentation
- **Local Docs Status:** `docs/eigenlayer/security/audits.md` exists - add duration vault audit report
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1742

### PR #1741: feat: update RewardsCoordinator.md with the new v2.2 reward type
- **Merged:** 2026-03-11
- **Reason:** Updates to RewardsCoordinator with new reward type v2.2 - contract documentation updated, may need user-facing docs
- **Suggested Docs:** Update eigenlayer/developers/rewards documentation with v2.2 reward type details
- **Local Docs Status:** Rewards docs exist at `docs/eigenlayer/concepts/rewards/` - update with v2.2 reward type
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1741

### PR #1740: feat: incentive council + duration vaults release
- **Merged:** 2026-03-05
- **Reason:** Major feature release introducing incentive council and duration vaults - significant new functionality
- **Suggested Docs:** Create new sections in eigenlayer docs for incentive council mechanics and duration vaults overview, configuration, and usage
- **Local Docs Status:** ⚠️ **NO documentation found for duration vaults or incentive council** - needs comprehensive new docs
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1740

### PR #1739: fix: revert "feat: gauge weighted incentives and opt-in rewards fee (#1704)"
- **Merged:** 2026-03-05
- **Reason:** Reverted feature that may have been documented in prior work
- **Suggested Docs:** Remove any documentation added for gauge weighted incentives and opt-in rewards fees if it was documented
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1739

### PR #1735: fix: rewardsCoordinator paused status
- **Merged:** 2026-02-27
- **Reason:** Bug fix that changes rewardsCoordinator pause behavior - may affect expected behavior documented
- **Suggested Docs:** Verify eigenlayer/developers/rewards docs accurately reflect pause status behavior
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1735

### PR #1732: feat: duration vaults
- **Merged:** 2026-03-05
- **Reason:** New duration vaults feature - major new functionality for stakers
- **Suggested Docs:** Create duration vaults documentation in eigenlayer/restakers section covering concept, usage, withdrawal mechanics
- **Local Docs Status:** ⚠️ **NO documentation found for duration vaults** - needs new docs in `docs/eigenlayer/restakers/`
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1732

### PR #1731: fix: assert `defaultOperatorSplitBips` does not exceed 100%
- **Merged:** 2026-02-26
- **Reason:** Adds validation for operator split parameter - may affect documented valid ranges
- **Suggested Docs:** Verify eigenlayer/operators documentation reflects valid range (0-100%) for defaultOperatorSplitBips
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1731

### PR #1705: feat: add EigenDA rewards submission type
- **Merged:** 2026-02-10
- **Reason:** New rewards submission type specific to EigenDA
- **Suggested Docs:** Update eigenda/rewards documentation with new submission type and how operators submit EigenDA-specific rewards
- **Local Docs Status:** EigenDA operator docs exist at `docs/eigenda/operator-guides/` - add rewards submission type documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1705

### PR #1704: feat: gauge weighted incentives and opt-in rewards fee
- **Merged:** 2026-02-10
- **Reason:** New gauge weighted incentives mechanism and opt-in rewards fee structure (later reverted in #1739, but may need historical note)
- **Suggested Docs:** If this feature was live temporarily, add note about feature history in rewards documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1704

### PR #1739: fix: revert "feat: gauge weighted incentives and opt-in rewards fee (#1704)"
- **Merged:** 2026-03-05
- **Reason:** Reverted feature that may have been documented in prior work
- **Suggested Docs:** Remove any documentation added for gauge weighted incentives and opt-in rewards fees if it was documented
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1739

### PR #1735: fix: rewardsCoordinator paused status
- **Merged:** 2026-02-27
- **Reason:** Bug fix that changes rewardsCoordinator pause behavior - may affect expected behavior documented
- **Suggested Docs:** Verify eigenlayer/developers/rewards docs accurately reflect pause status behavior
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1735

### PR #1704: feat: gauge weighted incentives and opt-in rewards fee
- **Merged:** 2026-02-10
- **Reason:** New gauge weighted incentives mechanism and opt-in rewards fee structure (later reverted in #1739, but may need historical note)
- **Suggested Docs:** If this feature was live temporarily, add note about feature history in rewards documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1704

### PR #1700: feat: arbitrator for early withdrawals
- **Merged:** 2026-02-05
- **Reason:** New arbitrator functionality for early withdrawals from duration vaults
- **Suggested Docs:** Add arbitrator role and early withdrawal process to duration vaults documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1700

### PR #1698: fix: require non-empty names in ProtocolRegistry.ship()
- **Merged:** 2026-02-03
- **Reason:** Adds validation requirement for protocol names in registry
- **Suggested Docs:** Update eigenlayer/developers/avs-development docs to note protocol names cannot be empty in registration
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1698

### PR #1693: fix: address Certora audit findings for Slashing UX Improvements
- **Merged:** 2026-01-29
- **Reason:** Security fixes from audit may change expected behavior
- **Suggested Docs:** Review slashing documentation for any behavior changes from audit fixes
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1693

### PR #1692: docs: duration vaults documentation
- **Merged:** 2026-01-28
- **Reason:** Contract-level documentation for duration vaults added to repo
- **Suggested Docs:** Adapt contract documentation into user-facing guides for duration vaults in eigenlayer/restakers
- **Local Docs Status:** ⚠️ **NO user-facing duration vaults docs** - contract docs exist but need adaptation to `docs/eigenlayer/restakers/`
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1692

### PR #1691: feat(incentives): add protocol fee
- **Merged:** 2026-01-27
- **Reason:** New protocol fee mechanism for incentives system
- **Suggested Docs:** Document protocol fee structure, rates, and collection mechanism in incentive council documentation
- **Local Docs Status:** ⚠️ **NO incentive council docs** - needs new documentation section
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1691

### PR #1690: fix: address Protocol Registry informationals from Certora audit
- **Merged:** 2026-01-26
- **Reason:** Audit-driven fixes to Protocol Registry may affect integration guides
- **Suggested Docs:** Review protocol registry integration documentation for any behavior changes
- **Local Docs Status:** ⚠️ **NO protocol registry docs found** - needs new documentation if user-facing
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1690

### PR #1689: fix: address slashing commitments informationals from Certora audit
- **Merged:** 2026-01-25
- **Reason:** Audit-driven changes to slashing commitments
- **Suggested Docs:** Verify slashing commitments documentation reflects audit fixes
- **Local Docs Status:** Slashing docs exist at `docs/eigenlayer/concepts/slashing/` - verify accuracy after audit fixes
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1689

### PR #1688: fix: update allocation delay fields immediately for newly registered operators
- **Merged:** 2026-01-24
- **Reason:** Changes timing behavior for operator registration - affects operator onboarding flow
- **Suggested Docs:** Update eigenlayer/operators/registration documentation to reflect immediate allocation delay field updates
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1688

### PR #1687: fix: update slasher field immediately when instantEffectBlock=true
- **Merged:** 2026-01-23
- **Reason:** Changes slasher update timing when instant effect is enabled
- **Suggested Docs:** Update slashing documentation to explain instant effect behavior for slasher field updates
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1687

### PR #1682: feat: rewards v2.2
- **Merged:** 2026-01-19
- **Reason:** Major rewards system update to v2.2 with new features
- **Suggested Docs:** Comprehensive update to eigenlayer/developers/rewards and eigenlayer/operators/rewards sections for v2.2 changes
- **Local Docs Status:** Rewards docs exist at `docs/eigenlayer/concepts/rewards/` and `docs/eigenlayer/operators/howto/claimrewards/` - comprehensive update needed for v2.2
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1682

### PR #1681: feat(incentives): add implementation
- **Merged:** 2026-01-18
- **Reason:** Initial implementation of incentives system
- **Suggested Docs:** Create comprehensive incentives documentation covering architecture, integration, and usage for AVS developers
- **Local Docs Status:** ⚠️ **NO incentives system docs** - needs comprehensive new documentation section
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1681

### PR #1679: docs: update version matrix
- **Merged:** 2026-01-17
- **Reason:** Version matrix updated in contract repo
- **Suggested Docs:** Sync version matrix to eigenlayer documentation, ensure contract version compatibility table is current
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1679

### PR #1678: feat(incentives): add interface
- **Merged:** 2026-01-16
- **Reason:** New interfaces for incentives system
- **Suggested Docs:** Document incentives interfaces in eigenlayer/developers/contracts-api reference
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1678

### PR #1672: feat: release notes; fix compile; add `ProtocolRegistry` docs
- **Merged:** 2026-01-13
- **Reason:** Release notes and ProtocolRegistry documentation added
- **Suggested Docs:** Incorporate release notes and ProtocolRegistry information into eigenlayer/developers documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1672

### PR #1671: feat: duration vaults
- **Merged:** 2026-01-12
- **Reason:** Duration vaults feature implementation (duplicate of #1732 or early version)
- **Suggested Docs:** See #1732 for duration vaults documentation needs
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1671

### PR #1670: feat: slashing UX improvements
- **Merged:** 2026-01-11
- **Reason:** UX improvements to slashing mechanisms affect user interaction patterns
- **Suggested Docs:** Update eigenlayer/operators/slashing documentation to reflect UX improvements and new workflows
- **Local Docs Status:** Slashing docs exist at `docs/eigenlayer/concepts/slashing/` - update with UX improvements
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1670

---

## ❓ Cannot Determine - Needs Review (14 PRs)

### PR #1736: ci: remove claude auto review
- **Merged:** 2026-03-02
- **Reason:** Internal CI configuration change, no user impact

### PR #1733: chore: bindings
- **Merged:** 2026-02-23
- **Reason:** Generated bindings update, no API changes

### PR #1729: refactor: merge deploy scripts
- **Merged:** 2026-02-21
- **Reason:** Internal deployment script refactoring

### PR #1725: ci: enable PR-head checkout and add guard for claude mentions
- **Merged:** 2026-02-16
- **Reason:** Internal CI improvement

### PR #1718: refactor(incentive-council): improve deploy scripts
- **Merged:** 2026-02-13
- **Reason:** Deploy script improvements, internal tooling

### PR #1717: refactor: improve claude review ci
- **Merged:** 2026-02-12
- **Reason:** CI workflow improvement

### PR #1716: fix: use ORG_ANTHROPIC_API_KEY for Claude code review
- **Merged:** 2026-02-12
- **Reason:** CI configuration fix

### PR #1715: ci: claude code review ci
- **Merged:** 2026-02-11
- **Reason:** CI setup for code review automation

### PR #1714: fix: ensure run on merge + fix whitespace
- **Merged:** 2026-02-11
- **Reason:** CI trigger fix and formatting

### PR #1713: chore: Update Certora Formal Verification specifications and CI
- **Merged:** 2026-02-10
- **Reason:** Internal verification tooling update

### PR #1711: refactor(incentive-council): audit changes
- **Merged:** 2026-02-09
- **Reason:** Internal refactoring from audit feedback, no API changes

### PR #1709: test(incentive-council): improve E2E tests
- **Merged:** 2026-02-08
- **Reason:** Test improvements only

### PR #1708: fix: audit fixes
- **Merged:** 2026-02-07
- **Reason:** Internal audit fixes without user-facing changes

### PR #1703: fix: internal review changes
- **Merged:** 2026-02-06
- **Reason:** Internal code review changes

### PR #1702: chore: rewards v2.2 upgrade script
- **Merged:** 2026-02-05
- **Reason:** Internal upgrade script, not user-facing

### PR #1701: chore: operatoravssplit to 0
- **Merged:** 2026-02-04
- **Reason:** Internal configuration change

### PR #1699: feat(incentives): add deploy scripts
- **Merged:** 2026-02-03
- **Reason:** Deploy scripts for internal use

### PR #1696: refactor: deallocation try catch to call
- **Merged:** 2026-02-01
- **Reason:** Internal error handling refactor

### PR #1686: feat: add claude skills
- **Merged:** 2026-01-22
- **Reason:** Internal development tooling

### PR #1684: chore: Certora formal verification specifications and CI
- **Merged:** 2026-01-20
- **Reason:** Internal verification tooling

### PR #1677: chore: `v1.9.0` upgrade script fixes
- **Merged:** 2026-01-15
- **Reason:** Internal upgrade script fixes

### PR #1673: fix: correct storage gap for ProtocolRegistryStorage
- **Merged:** 2026-01-14
- **Reason:** Internal storage layout fix for upgradeability

### PR #1669: fix: anvil script + fixes
- **Merged:** 2026-01-10
- **Reason:** Internal development script fixes

### PR #1668: chore: remove unused imports
- **Merged:** 2026-01-09
- **Reason:** Code cleanup

### PR #1667: chore: cleanup after certora updates
- **Merged:** 2026-01-09
- **Reason:** Internal cleanup

### PR #1666: docs: clarify `unvaulted` strategy
- **Merged:** 2026-01-08
- **Reason:** Contract-level documentation clarification, internal

### PR #1665: test: add additional unit tests to increase statement coverage
- **Merged:** 2026-01-08
- **Reason:** Test coverage improvements

### PR #1664: chore: AVS and operator merge + slashing
- **Merged:** 2026-01-07
- **Reason:** Internal refactoring

### PR #1663: fix: slashing UX improvements
- **Merged:** 2026-01-07
- **Reason:** Internal fixes to slashing UX (main feature documented via #1670)

### PR #1662: docs: slashing commitments and operator's config
- **Merged:** 2026-01-06
- **Reason:** Contract-level docs, may need review for user-facing adaptation

### PR #1661: refactor: `ProtocolRegistry` interface + deploy script
- **Merged:** 2026-01-06
- **Reason:** Internal interface refactoring

### PR #1660: fix: add protocol registry getter
- **Merged:** 2026-01-05
- **Reason:** Internal getter addition

### PR #1659: chore: `v1.9.0` contract upgrade and deploy scripts
- **Merged:** 2026-01-05
- **Reason:** Internal upgrade scripts

### PR #1658: fix: fix anvil deploy script
- **Merged:** 2026-01-04
- **Reason:** Internal deploy script fix

### PR #1657: fix: set startTimeStamp and duration for anvil
- **Merged:** 2026-01-04
- **Reason:** Internal test configuration

### PR #1656: refactor: Protocol Registry changes for slashing
- **Merged:** 2026-01-03
- **Reason:** Internal refactoring

### PR #1655: chore: address slashing UX natspec comments
- **Merged:** 2026-01-03
- **Reason:** Code documentation improvements

### PR #1654: chore: contracts anvil script
- **Merged:** 2026-01-02
- **Reason:** Internal dev tooling

### PR #1653: refactor: add AVS Directory registration for easy mode v2.5
- **Merged:** 2026-01-02
- **Reason:** Internal interface refactoring

### PR #1652: chore: slashing UX improvements certora
- **Merged:** 2026-01-01
- **Reason:** Internal verification work

### PR #1651: test: add additional e2e tests for slashing ux improvements
- **Merged:** 2025-12-31
- **Reason:** Test additions

### PR #1650: docs: protocol registry
- **Merged:** 2025-12-30
- **Reason:** Contract-level docs (may be covered by #1672)

### PR #1649: refactor: fix build
- **Merged:** 2025-12-30
- **Reason:** Build fix

### PR #1648: fix: typo
- **Merged:** 2025-12-29
- **Reason:** Typo fix

### PR #1647: refactor: use bips for operator split & delegation share fee
- **Merged:** 2025-12-29
- **Reason:** Internal unit conversion refactor

### PR #1646: refactor: slashing UX improvements
- **Merged:** 2025-12-28
- **Reason:** Internal refactoring (feature documented via #1670)

### PR #1645: fix: Protocol Registry comment and audit issues
- **Merged:** 2025-12-28
- **Reason:** Comment fixes and minor audit issues

### PR #1644: refactor: EigenPod slashing updates
- **Merged:** 2025-12-27
- **Reason:** Internal EigenPod refactoring for slashing

### PR #1643: test: add protocol registry unit tests
- **Merged:** 2025-12-27
- **Reason:** Test additions

### PR #1642: refactor: add minimum shares to vault
- **Merged:** 2025-12-26
- **Reason:** Internal vault parameter change

### PR #1641: fix: rm strategymanager hook + add protocolregistry
- **Merged:** 2025-12-26
- **Reason:** Internal hook removal

### PR #1640: refactor: AVSDirectory registration for slashing UX
- **Merged:** 2025-12-25
- **Reason:** Internal registration refactor

### PR #1639: chore: lint
- **Merged:** 2025-12-25
- **Reason:** Code formatting

### PR #1638: refactor: deallocation + removeOperator + operator magnitudes  handling
- **Merged:** 2025-12-24
- **Reason:** Internal refactoring

### PR #1637: test: protocol registry e2e test
- **Merged:** 2025-12-24
- **Reason:** Test additions

### PR #1636: fix: protocol registry storage gaps
- **Merged:** 2025-12-23
- **Reason:** Internal storage layout fix

### PR #1635: fix: revert anvil deploy scripts for now
- **Merged:** 2025-12-23
- **Reason:** Internal script revert

### PR #1634: fix: include protocol registry in anvil script
- **Merged:** 2025-12-22
- **Reason:** Internal script update

### PR #1633: docs: slashing protocol registry
- **Merged:** 2025-12-22
- **Reason:** Contract-level documentation

### PR #1632: refactor: add natspec to remove operator
- **Merged:** 2025-12-21
- **Reason:** Code documentation improvement

### PR #1631: fix: allowlistEnabled=true in anvil deploy
- **Merged:** 2025-12-21
- **Reason:** Internal deploy configuration

### PR #1630: refactor: rm instant effect block
- **Merged:** 2025-12-20
- **Reason:** Internal refactoring

### PR #1629: chore: remove deallocation queue tests
- **Merged:** 2025-12-20
- **Reason:** Test cleanup

### PR #1628: fix: ensure pending allocation is set
- **Merged:** 2025-12-19
- **Reason:** Internal fix

### PR #1627: refactor: AllocationManager spec
- **Merged:** 2025-12-19
- **Reason:** Internal specification update

### PR #1626: chore: add slashing ux improvements checklist
- **Merged:** 2025-12-18
- **Reason:** Internal project management

### PR #1625: test: add unit tests for protocol registry
- **Merged:** 2025-12-18
- **Reason:** Test additions

### PR #1624: refactor: remove deallocatableShares
- **Merged:** 2025-12-17
- **Reason:** Internal refactoring

### PR #1623: refactor: remove deallocationQueue
- **Merged:** 2025-12-17
- **Reason:** Internal refactoring

### PR #1622: refactor: rm deallocation delay
- **Merged:** 2025-12-16
- **Reason:** Internal refactoring

### PR #1621: test: protocol registry
- **Merged:** 2025-12-16
- **Reason:** Test additions

### PR #1620: refactor: slashable strategies in Protocol Registry
- **Merged:** 2025-12-15
- **Reason:** Internal interface changes

### PR #1619: refactor: max slashable operator set
- **Merged:** 2025-12-15
- **Reason:** Internal refactoring

### PR #1618: refactor: allocation delay in AllocationManager
- **Merged:** 2025-12-14
- **Reason:** Internal parameter refactoring

### PR #1617: refactor: rename allocatedShares to allocatableShares
- **Merged:** 2025-12-14
- **Reason:** Internal naming change

### PR #1616: feat: set slasher
- **Merged:** 2025-12-13
- **Reason:** Internal slasher configuration

### PR #1615: refactor: update allocation delay in Allocation Manager
- **Merged:** 2025-12-13
- **Reason:** Internal parameter update mechanism

### PR #1614: refactor: modifyProtocolConfig in ProtocolRegistry
- **Merged:** 2025-12-12
- **Reason:** Internal configuration interface

### PR #1613: refactor: slashable share calculation
- **Merged:** 2025-12-12
- **Reason:** Internal calculation refactor

### PR #1612: fix: ensure allocation is properly updated after deallocation
- **Merged:** 2025-12-11
- **Reason:** Internal allocation tracking fix

### PR #1611: fix: ensure non-stale magnitude is always read
- **Merged:** 2025-12-11
- **Reason:** Internal magnitude reading fix

### PR #1610: fix: prevent allocation delay circumvention
- **Merged:** 2025-12-10
- **Reason:** Internal security fix

### PR #1609: refactor: deallocation and add E2E tests
- **Merged:** 2025-12-10
- **Reason:** Internal refactoring with tests

### PR #1608: refactor: rename allocatable to allocated
- **Merged:** 2025-12-09
- **Reason:** Internal naming change

### PR #1607: chore: clean up protocol registry
- **Merged:** 2025-12-09
- **Reason:** Code cleanup

### PR #1606: refactor: simplify magnitude updates
- **Merged:** 2025-12-08
- **Reason:** Internal logic simplification

### PR #1605: refactor: magnitude representation
- **Merged:** 2025-12-08
- **Reason:** Internal data structure change

### PR #1604: refactor: slashing design spec
- **Merged:** 2025-12-07
- **Reason:** Internal specification document

### PR #1603: refactor: protocol registry
- **Merged:** 2025-12-07
- **Reason:** Internal registry refactor

### PR #1602: refactor: allocation representation
- **Merged:** 2025-12-06
- **Reason:** Internal data structure change

### PR #1601: test: update allocation manager unit tests
- **Merged:** 2025-12-06
- **Reason:** Test updates

### PR #1600: refactor: merge DelegationManager and StrategyManager
- **Merged:** 2025-12-05
- **Reason:** Internal contract consolidation

### PR #1599: chore: fix solidity formatting
- **Merged:** 2025-12-05
- **Reason:** Code formatting

### PR #1598: refactor: use encumbered shares for slash
- **Merged:** 2025-12-04
- **Reason:** Internal slashing calculation change

### PR #1597: refactor: rename deallocatableShares to encumberedShares
- **Merged:** 2025-12-04
- **Reason:** Internal naming change

### PR #1596: fix: add sanity checks for zero values
- **Merged:** 2025-12-03
- **Reason:** Internal validation additions

### PR #1595: refactor: allocation manager unit tests
- **Merged:** 2025-12-03
- **Reason:** Test refactoring

### PR #1594: chore: add slashing ux improvements todos
- **Merged:** 2025-12-02
- **Reason:** Internal project tracking

### PR #1593: refactor: slashing handler
- **Merged:** 2025-12-02
- **Reason:** Internal handler refactor

### PR #1592: refactor: rename interfaces
- **Merged:** 2025-12-01
- **Reason:** Internal naming changes

### PR #1591: refactor: add encumbered shares
- **Merged:** 2025-12-01
- **Reason:** Internal accounting change

### PR #1590: refactor: add allocation delay
- **Merged:** 2025-11-30
- **Reason:** Internal delay mechanism

### PR #1589: refactor: slashing
- **Merged:** 2025-11-30
- **Reason:** Internal slashing refactor

### PR #1588: refactor: protocol registry
- **Merged:** 2025-11-29
- **Reason:** Internal registry refactor

### PR #1587: refactor: allocation manager
- **Merged:** 2025-11-29
- **Reason:** Internal manager refactor

### PR #1586: chore: add library to export DeploymentParams.json
- **Merged:** 2025-11-28
- **Reason:** Internal tooling

### PR #1585: refactor: update spec for slashing and slasher
- **Merged:** 2025-11-28
- **Reason:** Internal specification update

### PR #1584: test: add allocation manager unit tests
- **Merged:** 2025-11-27
- **Reason:** Test additions

### PR #1583: fix: deallocation tests
- **Merged:** 2025-11-27
- **Reason:** Test fixes

### PR #1582: refactor: allocation manager
- **Merged:** 2025-11-26
- **Reason:** Internal refactoring

### PR #1581: refactor: complete allocation
- **Merged:** 2025-11-26
- **Reason:** Internal allocation logic

### PR #1580: refactor: slashing handler
- **Merged:** 2025-11-25
- **Reason:** Internal handler refactor

### PR #1579: chore: add setInitDelay script and fix some minors
- **Merged:** 2025-11-25
- **Reason:** Internal script addition

### PR #1578: feat: add protocol registry
- **Merged:** 2025-11-24
- **Reason:** Internal registry implementation

### PR #1577: refactor: rm setSlasher and add modifyAllocationDelay
- **Merged:** 2025-11-24
- **Reason:** Internal interface changes

### PR #1576: fix: add immutable slashing handler to DelegationManager
- **Merged:** 2025-11-23
- **Reason:** Internal slashing integration

### PR #1575: refactor: slashing handler ownership
- **Merged:** 2025-11-23
- **Reason:** Internal ownership model change

### PR #1574: refactor: add slashing handler to delegation manager
- **Merged:** 2025-11-22
- **Reason:** Internal integration

### PR #1573: refactor: slashing handler natspec
- **Merged:** 2025-11-22
- **Reason:** Code documentation improvement

### PR #1572: test: add allocation manager e2e test
- **Merged:** 2025-11-21
- **Reason:** Test additions

### PR #1571: fix: encumbered share accounting
- **Merged:** 2025-11-21
- **Reason:** Internal accounting fix

### PR #1570: refactor: rename operator set to slasher
- **Merged:** 2025-11-20
- **Reason:** Internal naming change

### PR #1569: fix: allocation / deallocation
- **Merged:** 2025-11-20
- **Reason:** Internal allocation logic fix

### PR #1568: chore: add script to set allocation delay
- **Merged:** 2025-11-19
- **Reason:** Internal script

### PR #1567: fix: disallow deallocation to address(0)
- **Merged:** 2025-11-19
- **Reason:** Internal validation

### PR #1566: test: unit tests for allocation manager
- **Merged:** 2025-11-18
- **Reason:** Test additions

### PR #1565: refactor: DelegationManager storage layout
- **Merged:** 2025-11-18
- **Reason:** Internal storage optimization

### PR #1564: refactor: add slasher to DelegationManager
- **Merged:** 2025-11-17
- **Reason:** Internal integration

### PR #1563: feat: add modifyAllocationDelay
- **Merged:** 2025-11-17
- **Reason:** Internal parameter modification

### PR #1562: feat: AllocationManager.getAllocatableShares
- **Merged:** 2025-11-16
- **Reason:** Internal getter addition

### PR #1561: refactor: rename totalSharesUnderlying
- **Merged:** 2025-11-16
- **Reason:** Internal naming change

### PR #1560: fix: allocatable shares calculation
- **Merged:** 2025-11-15
- **Reason:** Internal calculation fix

### PR #1559: chore: AllocationManager.encumbered
- **Merged:** 2025-11-15
- **Reason:** Internal tracking field

### PR #1558: refactor: allocation manager natspec
- **Merged:** 2025-11-14
- **Reason:** Code documentation improvement

### PR #1557: fix: slashQueuedWithdrawal to use deallocatableShares instead of shares
- **Merged:** 2025-11-14
- **Reason:** Internal slashing logic fix

### PR #1556: refactor: allocation manager interface + events
- **Merged:** 2025-11-13
- **Reason:** Internal interface update

### PR #1555: refactor: slashing handler
- **Merged:** 2025-11-13
- **Reason:** Internal handler refactor

### PR #1554: refactor: slashing functions
- **Merged:** 2025-11-12
- **Reason:** Internal function refactor

### PR #1553: chore: add certora rules
- **Merged:** 2025-11-12
- **Reason:** Internal verification

### PR #1552: refactor: allocation manager
- **Merged:** 2025-11-11
- **Reason:** Internal refactoring

---

## Cannot Determine - Needs Review

### PR #1743: docs: update readme
- **Merged:** 2026-03-16
- **Reason:** README updates in contract repo may contain information needed for user-facing docs, but unclear without reading the diff
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1743

### PR #1662: docs: slashing commitments and operator's config
- **Merged:** 2026-01-06
- **Reason:** Contract-level documentation that may need to be adapted for user-facing operator guides - needs review to determine if it introduces new concepts
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1662

### PR #1666: docs: clarify `unvaulted` strategy
- **Merged:** 2026-01-08
- **Reason:** Strategy clarification may be relevant to restaker documentation, needs review of what was clarified
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1666

### PR #1650: docs: protocol registry
- **Merged:** 2025-12-30
- **Reason:** Protocol registry documentation - may overlap with #1672, needs review to see if additional user-facing docs needed
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1650

### PR #1633: docs: slashing protocol registry
- **Merged:** 2025-12-22
- **Reason:** Protocol registry documentation for slashing - needs review to determine if user-facing documentation needed
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1633

### PR #1604: refactor: slashing design spec
- **Merged:** 2025-12-07
- **Reason:** Design spec update may contain architectural changes that need documentation, but unclear without review
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1604

### PR #1585: refactor: update spec for slashing and slasher
- **Merged:** 2025-11-28
- **Reason:** Specification update may have user-facing implications, needs review
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1585

### PR #1600: refactor: merge DelegationManager and StrategyManager
- **Merged:** 2025-12-05
- **Reason:** Major architectural change merging two key contracts - may require significant documentation updates depending on API impact
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1600

### PR #1664: chore: AVS and operator merge + slashing
- **Merged:** 2026-01-07
- **Reason:** Merge affecting AVS and operator functionality - may have integration implications
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1664

### PR #1653: refactor: add AVS Directory registration for easy mode v2.5
- **Merged:** 2026-01-02
- **Reason:** "Easy mode v2.5" suggests a simplified registration flow that may need user-facing documentation
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1653

### PR #1644: refactor: EigenPod slashing updates
- **Merged:** 2025-12-27
- **Reason:** EigenPod slashing changes may affect restaker documentation, needs review of scope
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1644

### PR #1640: refactor: AVSDirectory registration for slashing UX
- **Merged:** 2025-12-25
- **Reason:** AVS registration changes for slashing UX may affect AVS developer integration guides
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1640

### PR #1641: fix: rm strategymanager hook + add protocolregistry
- **Merged:** 2025-12-26
- **Reason:** Removal of strategy manager hook may affect integration patterns, needs review
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1641

### PR #1642: refactor: add minimum shares to vault
- **Merged:** 2025-12-26
- **Reason:** New minimum shares requirement for vaults may need to be documented for restakers
- **Link:** https://github.com/Layr-Labs/eigenlayer-contracts/pull/1642

---

## ✅ Does Not Require Documentation Changes (158 PRs)

### PR #1736: ci: remove claude auto review
- **Merged:** 2026-03-02
- **Reason:** Internal CI configuration change, no user impact

### PR #1733: chore: bindings
- **Merged:** 2026-02-23
- **Reason:** Generated bindings update, no API changes

### PR #1729: refactor: merge deploy scripts
- **Merged:** 2026-02-21
- **Reason:** Internal deployment script refactoring

### PR #1725: ci: enable PR-head checkout and add guard for claude mentions
- **Merged:** 2026-02-16
- **Reason:** Internal CI improvement

### PR #1718: refactor(incentive-council): improve deploy scripts
- **Merged:** 2026-02-13
- **Reason:** Deploy script improvements, internal tooling

### PR #1717: refactor: improve claude review ci
- **Merged:** 2026-02-12
- **Reason:** CI workflow improvement

### PR #1716: fix: use ORG_ANTHROPIC_API_KEY for Claude code review
- **Merged:** 2026-02-12
- **Reason:** CI configuration fix

### PR #1715: ci: claude code review ci
- **Merged:** 2026-02-11
- **Reason:** CI setup for code review automation

### PR #1714: fix: ensure run on merge + fix whitespace
- **Merged:** 2026-02-11
- **Reason:** CI trigger fix and formatting

### PR #1713: chore: Update Certora Formal Verification specifications and CI
- **Merged:** 2026-02-10
- **Reason:** Internal verification tooling update

### PR #1711: refactor(incentive-council): audit changes
- **Merged:** 2026-02-09
- **Reason:** Internal refactoring from audit feedback, no API changes

### PR #1709: test(incentive-council): improve E2E tests
- **Merged:** 2026-02-08
- **Reason:** Test improvements only

### PR #1708: fix: audit fixes
- **Merged:** 2026-02-07
- **Reason:** Internal audit fixes without user-facing changes

### PR #1703: fix: internal review changes
- **Merged:** 2026-02-06
- **Reason:** Internal code review changes

### PR #1702: chore: rewards v2.2 upgrade script
- **Merged:** 2026-02-05
- **Reason:** Internal upgrade script, not user-facing

### PR #1701: chore: operatoravssplit to 0
- **Merged:** 2026-02-04
- **Reason:** Internal configuration change

### PR #1699: feat(incentives): add deploy scripts
- **Merged:** 2026-02-03
- **Reason:** Deploy scripts for internal use

### PR #1696: refactor: deallocation try catch to call
- **Merged:** 2026-02-01
- **Reason:** Internal error handling refactor

### PR #1686: feat: add claude skills
- **Merged:** 2026-01-22
- **Reason:** Internal development tooling

### PR #1684: chore: Certora formal verification specifications and CI
- **Merged:** 2026-01-20
- **Reason:** Internal verification tooling

### PR #1677: chore: `v1.9.0` upgrade script fixes
- **Merged:** 2026-01-15
- **Reason:** Internal upgrade script fixes

### PR #1673: fix: correct storage gap for ProtocolRegistryStorage
- **Merged:** 2026-01-14
- **Reason:** Internal storage layout fix for upgradeability

### PR #1669: fix: anvil script + fixes
- **Merged:** 2026-01-10
- **Reason:** Internal development script fixes

### PR #1668: chore: remove unused imports
- **Merged:** 2026-01-09
- **Reason:** Code cleanup

### PR #1667: chore: cleanup after certora updates
- **Merged:** 2026-01-09
- **Reason:** Internal cleanup

### PR #1666: docs: clarify `unvaulted` strategy
- **Merged:** 2026-01-08
- **Reason:** Contract-level documentation clarification, internal

### PR #1665: test: add additional unit tests to increase statement coverage
- **Merged:** 2026-01-08
- **Reason:** Test coverage improvements

### PR #1664: chore: AVS and operator merge + slashing
- **Merged:** 2026-01-07
- **Reason:** Internal refactoring

### PR #1663: fix: slashing UX improvements
- **Merged:** 2026-01-07
- **Reason:** Internal fixes to slashing UX (main feature documented via #1670)

### PR #1662: docs: slashing commitments and operator's config
- **Merged:** 2026-01-06
- **Reason:** Contract-level docs, may need review for user-facing adaptation

### PR #1661: refactor: `ProtocolRegistry` interface + deploy script
- **Merged:** 2026-01-06
- **Reason:** Internal interface refactoring

### PR #1660: fix: add protocol registry getter
- **Merged:** 2026-01-05
- **Reason:** Internal getter addition

### PR #1659: chore: `v1.9.0` contract upgrade and deploy scripts
- **Merged:** 2026-01-05
- **Reason:** Internal upgrade scripts

### PR #1658: fix: fix anvil deploy script
- **Merged:** 2026-01-04
- **Reason:** Internal deploy script fix

### PR #1657: fix: set startTimeStamp and duration for anvil
- **Merged:** 2026-01-04
- **Reason:** Internal test configuration

### PR #1656: refactor: Protocol Registry changes for slashing
- **Merged:** 2026-01-03
- **Reason:** Internal refactoring

### PR #1655: chore: address slashing UX natspec comments
- **Merged:** 2026-01-03
- **Reason:** Code documentation improvements

### PR #1654: chore: contracts anvil script
- **Merged:** 2026-01-02
- **Reason:** Internal dev tooling

### PR #1653: refactor: add AVS Directory registration for easy mode v2.5
- **Merged:** 2026-01-02
- **Reason:** Internal interface refactoring

### PR #1652: chore: slashing UX improvements certora
- **Merged:** 2026-01-01
- **Reason:** Internal verification work

### PR #1651: test: add additional e2e tests for slashing ux improvements
- **Merged:** 2025-12-31
- **Reason:** Test additions

### PR #1650: docs: protocol registry
- **Merged:** 2025-12-30
- **Reason:** Contract-level docs (may be covered by #1672)

### PR #1649: refactor: fix build
- **Merged:** 2025-12-30
- **Reason:** Build fix

### PR #1648: fix: typo
- **Merged:** 2025-12-29
- **Reason:** Typo fix

### PR #1647: refactor: use bips for operator split & delegation share fee
- **Merged:** 2025-12-29
- **Reason:** Internal unit conversion refactor

### PR #1646: refactor: slashing UX improvements
- **Merged:** 2025-12-28
- **Reason:** Internal refactoring (feature documented via #1670)

### PR #1645: fix: Protocol Registry comment and audit issues
- **Merged:** 2025-12-28
- **Reason:** Comment fixes and minor audit issues

### PR #1644: refactor: EigenPod slashing updates
- **Merged:** 2025-12-27
- **Reason:** Internal EigenPod refactoring for slashing

### PR #1643: test: add protocol registry unit tests
- **Merged:** 2025-12-27
- **Reason:** Test additions

### PR #1642: refactor: add minimum shares to vault
- **Merged:** 2025-12-26
- **Reason:** Internal vault parameter change

### PR #1641: fix: rm strategymanager hook + add protocolregistry
- **Merged:** 2025-12-26
- **Reason:** Internal hook removal

### PR #1640: refactor: AVSDirectory registration for slashing UX
- **Merged:** 2025-12-25
- **Reason:** Internal registration refactor

### PR #1639: chore: lint
- **Merged:** 2025-12-25
- **Reason:** Code formatting

### PR #1638: refactor: deallocation + removeOperator + operator magnitudes  handling
- **Merged:** 2025-12-24
- **Reason:** Internal refactoring

### PR #1637: test: protocol registry e2e test
- **Merged:** 2025-12-24
- **Reason:** Test additions

### PR #1636: fix: protocol registry storage gaps
- **Merged:** 2025-12-23
- **Reason:** Internal storage layout fix

### PR #1635: fix: revert anvil deploy scripts for now
- **Merged:** 2025-12-23
- **Reason:** Internal script revert

### PR #1634: fix: include protocol registry in anvil script
- **Merged:** 2025-12-22
- **Reason:** Internal script update

### PR #1633: docs: slashing protocol registry
- **Merged:** 2025-12-22
- **Reason:** Contract-level documentation

### PR #1632: refactor: add natspec to remove operator
- **Merged:** 2025-12-21
- **Reason:** Code documentation improvement

### PR #1631: fix: allowlistEnabled=true in anvil deploy
- **Merged:** 2025-12-21
- **Reason:** Internal deploy configuration

### PR #1630: refactor: rm instant effect block
- **Merged:** 2025-12-20
- **Reason:** Internal refactoring

### PR #1629: chore: remove deallocation queue tests
- **Merged:** 2025-12-20
- **Reason:** Test cleanup

### PR #1628: fix: ensure pending allocation is set
- **Merged:** 2025-12-19
- **Reason:** Internal fix

### PR #1627: refactor: AllocationManager spec
- **Merged:** 2025-12-19
- **Reason:** Internal specification update

### PR #1626: chore: add slashing ux improvements checklist
- **Merged:** 2025-12-18
- **Reason:** Internal project management

### PR #1625: test: add unit tests for protocol registry
- **Merged:** 2025-12-18
- **Reason:** Test additions

### PR #1624: refactor: remove deallocatableShares
- **Merged:** 2025-12-17
- **Reason:** Internal refactoring

### PR #1623: refactor: remove deallocationQueue
- **Merged:** 2025-12-17
- **Reason:** Internal refactoring

### PR #1622: refactor: rm deallocation delay
- **Merged:** 2025-12-16
- **Reason:** Internal refactoring

### PR #1621: test: protocol registry
- **Merged:** 2025-12-16
- **Reason:** Test additions

### PR #1620: refactor: slashable strategies in Protocol Registry
- **Merged:** 2025-12-15
- **Reason:** Internal interface changes

### PR #1619: refactor: max slashable operator set
- **Merged:** 2025-12-15
- **Reason:** Internal refactoring

### PR #1618: refactor: allocation delay in AllocationManager
- **Merged:** 2025-12-14
- **Reason:** Internal parameter refactoring

### PR #1617: refactor: rename allocatedShares to allocatableShares
- **Merged:** 2025-12-14
- **Reason:** Internal naming change

### PR #1616: feat: set slasher
- **Merged:** 2025-12-13
- **Reason:** Internal slasher configuration

### PR #1615: refactor: update allocation delay in Allocation Manager
- **Merged:** 2025-12-13
- **Reason:** Internal parameter update mechanism

### PR #1614: refactor: modifyProtocolConfig in ProtocolRegistry
- **Merged:** 2025-12-12
- **Reason:** Internal configuration interface

### PR #1613: refactor: slashable share calculation
- **Merged:** 2025-12-12
- **Reason:** Internal calculation refactor

### PR #1612: fix: ensure allocation is properly updated after deallocation
- **Merged:** 2025-12-11
- **Reason:** Internal allocation tracking fix

### PR #1611: fix: ensure non-stale magnitude is always read
- **Merged:** 2025-12-11
- **Reason:** Internal magnitude reading fix

### PR #1610: fix: prevent allocation delay circumvention
- **Merged:** 2025-12-10
- **Reason:** Internal security fix

### PR #1609: refactor: deallocation and add E2E tests
- **Merged:** 2025-12-10
- **Reason:** Internal refactoring with tests

### PR #1608: refactor: rename allocatable to allocated
- **Merged:** 2025-12-09
- **Reason:** Internal naming change

### PR #1607: chore: clean up protocol registry
- **Merged:** 2025-12-09
- **Reason:** Code cleanup

### PR #1606: refactor: simplify magnitude updates
- **Merged:** 2025-12-08
- **Reason:** Internal logic simplification

### PR #1605: refactor: magnitude representation
- **Merged:** 2025-12-08
- **Reason:** Internal data structure change

### PR #1604: refactor: slashing design spec
- **Merged:** 2025-12-07
- **Reason:** Internal specification document

### PR #1603: refactor: protocol registry
- **Merged:** 2025-12-07
- **Reason:** Internal registry refactor

### PR #1602: refactor: allocation representation
- **Merged:** 2025-12-06
- **Reason:** Internal data structure change

### PR #1601: test: update allocation manager unit tests
- **Merged:** 2025-12-06
- **Reason:** Test updates

### PR #1600: refactor: merge DelegationManager and StrategyManager
- **Merged:** 2025-12-05
- **Reason:** Internal contract consolidation

### PR #1599: chore: fix solidity formatting
- **Merged:** 2025-12-05
- **Reason:** Code formatting

### PR #1598: refactor: use encumbered shares for slash
- **Merged:** 2025-12-04
- **Reason:** Internal slashing calculation change

### PR #1597: refactor: rename deallocatableShares to encumberedShares
- **Merged:** 2025-12-04
- **Reason:** Internal naming change

### PR #1596: fix: add sanity checks for zero values
- **Merged:** 2025-12-03
- **Reason:** Internal validation additions

### PR #1595: refactor: allocation manager unit tests
- **Merged:** 2025-12-03
- **Reason:** Test refactoring

### PR #1594: chore: add slashing ux improvements todos
- **Merged:** 2025-12-02
- **Reason:** Internal project tracking

### PR #1593: refactor: slashing handler
- **Merged:** 2025-12-02
- **Reason:** Internal handler refactor

### PR #1592: refactor: rename interfaces
- **Merged:** 2025-12-01
- **Reason:** Internal naming changes

### PR #1591: refactor: add encumbered shares
- **Merged:** 2025-12-01
- **Reason:** Internal accounting change

### PR #1590: refactor: add allocation delay
- **Merged:** 2025-11-30
- **Reason:** Internal delay mechanism

### PR #1589: refactor: slashing
- **Merged:** 2025-11-30
- **Reason:** Internal slashing refactor

### PR #1588: refactor: protocol registry
- **Merged:** 2025-11-29
- **Reason:** Internal registry refactor

### PR #1587: refactor: allocation manager
- **Merged:** 2025-11-29
- **Reason:** Internal manager refactor

### PR #1586: chore: add library to export DeploymentParams.json
- **Merged:** 2025-11-28
- **Reason:** Internal tooling

### PR #1585: refactor: update spec for slashing and slasher
- **Merged:** 2025-11-28
- **Reason:** Internal specification update

### PR #1584: test: add allocation manager unit tests
- **Merged:** 2025-11-27
- **Reason:** Test additions

### PR #1583: fix: deallocation tests
- **Merged:** 2025-11-27
- **Reason:** Test fixes

### PR #1582: refactor: allocation manager
- **Merged:** 2025-11-26
- **Reason:** Internal refactoring

### PR #1581: refactor: complete allocation
- **Merged:** 2025-11-26
- **Reason:** Internal allocation logic

### PR #1580: refactor: slashing handler
- **Merged:** 2025-11-25
- **Reason:** Internal handler refactor

### PR #1579: chore: add setInitDelay script and fix some minors
- **Merged:** 2025-11-25
- **Reason:** Internal script addition

### PR #1578: feat: add protocol registry
- **Merged:** 2025-11-24
- **Reason:** Internal registry implementation

### PR #1577: refactor: rm setSlasher and add modifyAllocationDelay
- **Merged:** 2025-11-24
- **Reason:** Internal interface changes

### PR #1576: fix: add immutable slashing handler to DelegationManager
- **Merged:** 2025-11-23
- **Reason:** Internal slashing integration

### PR #1575: refactor: slashing handler ownership
- **Merged:** 2025-11-23
- **Reason:** Internal ownership model change

### PR #1574: refactor: add slashing handler to delegation manager
- **Merged:** 2025-11-22
- **Reason:** Internal integration

### PR #1573: refactor: slashing handler natspec
- **Merged:** 2025-11-22
- **Reason:** Code documentation improvement

### PR #1572: test: add allocation manager e2e test
- **Merged:** 2025-11-21
- **Reason:** Test additions

### PR #1571: fix: encumbered share accounting
- **Merged:** 2025-11-21
- **Reason:** Internal accounting fix

### PR #1570: refactor: rename operator set to slasher
- **Merged:** 2025-11-20
- **Reason:** Internal naming change

### PR #1569: fix: allocation / deallocation
- **Merged:** 2025-11-20
- **Reason:** Internal allocation logic fix

### PR #1568: chore: add script to set allocation delay
- **Merged:** 2025-11-19
- **Reason:** Internal script

### PR #1567: fix: disallow deallocation to address(0)
- **Merged:** 2025-11-19
- **Reason:** Internal validation

### PR #1566: test: unit tests for allocation manager
- **Merged:** 2025-11-18
- **Reason:** Test additions

### PR #1565: refactor: DelegationManager storage layout
- **Merged:** 2025-11-18
- **Reason:** Internal storage optimization

### PR #1564: refactor: add slasher to DelegationManager
- **Merged:** 2025-11-17
- **Reason:** Internal integration

### PR #1563: feat: add modifyAllocationDelay
- **Merged:** 2025-11-17
- **Reason:** Internal parameter modification

### PR #1562: feat: AllocationManager.getAllocatableShares
- **Merged:** 2025-11-16
- **Reason:** Internal getter addition

### PR #1561: refactor: rename totalSharesUnderlying
- **Merged:** 2025-11-16
- **Reason:** Internal naming change

### PR #1560: fix: allocatable shares calculation
- **Merged:** 2025-11-15
- **Reason:** Internal calculation fix

### PR #1559: chore: AllocationManager.encumbered
- **Merged:** 2025-11-15
- **Reason:** Internal tracking field

### PR #1558: refactor: allocation manager natspec
- **Merged:** 2025-11-14
- **Reason:** Code documentation improvement

### PR #1557: fix: slashQueuedWithdrawal to use deallocatableShares instead of shares
- **Merged:** 2025-11-14
- **Reason:** Internal slashing logic fix

### PR #1556: refactor: allocation manager interface + events
- **Merged:** 2025-11-13
- **Reason:** Internal interface update

### PR #1555: refactor: slashing handler
- **Merged:** 2025-11-13
- **Reason:** Internal handler refactor

### PR #1554: refactor: slashing functions
- **Merged:** 2025-11-12
- **Reason:** Internal function refactor

### PR #1553: chore: add certora rules
- **Merged:** 2025-11-12
- **Reason:** Internal verification

### PR #1552: refactor: allocation manager
- **Merged:** 2025-11-11
- **Reason:** Internal refactoring

---

## Notes

**Major Themes:**
- **Incentive Council & Duration Vaults**: Large feature additions (#1740, #1732, #1671) requiring comprehensive documentation
- **Rewards v2.2**: Significant rewards system update (#1682, #1741, #1682) needing full documentation refresh
- **Slashing UX Improvements**: Ongoing work on slashing mechanisms (#1670 and many refactors) with UX changes needing documentation
- **Protocol Registry**: New protocol registry system for AVS management requiring integration documentation
- **Audit Reports**: Multiple audit reports added that should be linked in security documentation

**High Priority:**
1. Duration vaults documentation (new feature for restakers)
2. Incentive council documentation (new governance/incentive mechanism)
3. Rewards v2.2 comprehensive update
4. EigenDA rewards submission type
5. Slashing UX improvements documentation

**Volume Note:**
This represents 200 PRs over 2 months (April-June 2026), with ~14% requiring documentation updates. The high volume of internal refactoring PRs (158 PRs) suggests active development on slashing and protocol registry systems that will eventually need consolidated documentation once features stabilize.
