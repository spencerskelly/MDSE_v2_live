---
type: Requirement
subtype: engineering
id: REQ-98028
uid: 20261021212000047skellyspencer
status: Draft
tags: [last-check]
---
# Planning note paths for a large import takes time linear in the number of notes

## Definition

The importer plans every note path, file name and link target in a time that grows in proportion to the number of notes, not with its square. A run over a model of more than 27,000 notes finishes the planning step, and a regression test over that size fails if the planning becomes quadratic. The test checks that the planner completes and its memory stays flat; it does not set a timing target on one machine.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 26_Definitions/V1_V2_REUSE_LEDGER_INDEX.md (R03)`; `Test_Vault_ 26_Definitions/V1_V2_DEEP_TECHNICAL_RECOVERY_AND_PLATFORM_ARCHITECTURE_2026-10-18.md (section A)`.
- Compared with MDSE_v2 at `d35af12`.
- The V1 importer (v0.8.19) had a quadratic path planner that was found on a real run of 35,969 elements, 27,709 notes and 28,273 output files, and fixed; a regression test guards it (`path_planning_scalability_regression_test.js`). The reuse ledger (R03) marks it 'no identified active target' in v2.
- TST-002 covers a 10,000-note semantic-cache smoke for the Workbench, not the importer. No RULESET row names importer planning. The v2 reduced QEAX has 11,447 elements, so a 27,000-note case has to be built as a synthetic fixture.

> [!flagNote] Draft. Check the v2 importer's planner on a synthetic 27,000-note input before treating this as open.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def PlanningNotePathsForALargeImportTakesTimeLinearInTheNumberOfNotes {
        doc /* Importer path planning scales linearly with the number of notes. */
    }
}
```
