---
type: Requirement
subtype: engineering
id: REQ-98052
uid: 20261021212000072skellyspencer
status: Draft
tags: [last-check]
---
# A manual acceptance result is one of four states, a missing or blocked result is never a pass, and CI is not counted as a user-interface test

## Definition

Each manual acceptance check ends in one of four states: not run, pass, fail or blocked. A blocked check names the blocker and is not a pass. A passing CI job, a generated test kit or a headless check is never recorded as a result for a check that needs a person at the application. Each recorded result carries the platform, application version, the hashes of the build and lock under test, the observed behavior, the changed files, and the reviewer. A synthetic fixture never stands in for a check that is defined against the real source. The test sheet states which things CI can prove and which it cannot, so nobody reads a green job as more than it shows.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/15_Testing/Step18_Obsidian_UI_Acceptance.md`; `Test_Vault_ 100_Archive/V1/15_Testing/consolidation/Real QEAX Operator Input and Evidence Gate.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 15_Testing Step18_Obsidian_UI_Acceptance.md (matrix B01 to B06, M01 to M04, Q01 to Q03, V01 to V03, S01, with an evidence form whose default status is NOT_RUN), consolidation STEP20_GUI_ACCEPTANCE.md and STEP21 (all results NOT RUN), and 'Real QEAX Acceptance - Operator Input and Evidence Gate' (BLOCKED ON PAIRED REAL DATA; the gate needs the unmodified source and the vault generated from exactly that source, and a pass closes only that one gate). The Step 18 text lists what CI can verify (kit generation, locked payload, overlay hash, schemas, fixture syntax, package integrity, regression tests) and what it cannot (interactive start, author registration, editing and restart in the UI, performance, trust dialogs).
- Compared with MDSE_v2 at d35af12: TST-004 to TST-008 define automatic gates, and testing/REAL_DATA_TEST_LOG.md records only runs that found issues and has no entries. I found no v2 definition of the four result states, no evidence form, and no statement that a blocked check is not a pass. The v2 bootstrap README does say first-open acceptance in real Obsidian is pending.

> [!flagNote] Draft. Partial gap against MDSE_v2 at d35af12 (REAL_DATA_TEST_LOG covers issues only).
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AManualAcceptanceResultIsOneOfFourStatesAMissingOrBlockedResultIsNeverAPassAndCIIsNotCountedAsAUserInterfaceTest {
        doc /* Manual acceptance has four result states, and blocked or missing is never a pass. */
    }
}
```
