---
type: Requirement
subtype: engineering
id: REQ-98026
uid: 20261021212000045skellyspencer
status: Draft
tags: [last-check]
---
# A release with a stop-ship defect is not released

## Definition

A pilot release of the Base Vault, Importer, Bootstrap and Workbench is blocked while any of these defects is open: a model element is lost or duplicated without being reported; authoritative SysML text is corrupted; a relationship is given a meaning that no decision approved; a source identity changes between runs; a write stops half way and leaves a partly changed model with no report; a user's settings are overwritten without consent; a change cannot be rolled back; or an unsupported version is installed without a warning. A passing test counts only when it ran and was witnessed. Code that exists, or a test that was written but not run, does not make a step pass. For each step the status records the commit, the tests run, their results, the remaining risks and the next smallest action.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 26_Definitions/MDSE_V2_0_INTEGRATED_ENGINEERING_PILOT_PLAN_2026-10-18.md (Stop-ship defects, Evidence rule)`; `Test_Vault_ 26_Definitions/MDSE_V2_0_SHARED_NOTE_AND_RELEASE_CONTRACT_2026-10-18.md (Testing release gates 6)`.
- Compared with MDSE_v2 at `d35af12`.
- TST-008 (release gates) and IMP-051 (persistent transaction) cover most of the gates behind this list. The eight defects as one named list that blocks the release were not found in RULESET or DECISIONS. The evidence rule is close to the existing rule that interactive acceptance needs witnessed evidence (note 'Interactive acceptance passes only on witnessed evidence').
- The source plan has 13 steps with exit tests, from a clean install through a pilot release with an update and rollback guide. The steps are a plan and stay as evidence.
- TST-008 lists Windows and macOS Obsidian smoke acceptance; the pilot plan names the same pair.

> [!flagNote] Draft. The owner decides whether the eight defects become a release rule next to TST-008 or stay in the plan.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AReleaseWithAStopShipDefectIsNotReleased {
        doc /* A release is blocked while a stop-ship defect is open. */
    }
}
```
