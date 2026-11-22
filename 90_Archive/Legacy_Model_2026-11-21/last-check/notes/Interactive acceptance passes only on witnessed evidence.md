---
type: Requirement
subtype: engineering
id: REQ-98012
uid: 20261021212000017skellyspencer
status: Draft
tags: [last-check]
---
# Interactive acceptance passes only on witnessed evidence

## Definition

An interactive acceptance row (Bootstrap first-open, author registration, Workbench diagnostics, edit and restart, Review and Canvas inspection) is marked pass only after a person has executed it in an isolated desktop vault and submitted timestamped results, screenshots or logs. CI output, parser checks and synthetic fixtures never turn such a row to pass.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/GitHub Consolidation Step 18 Obsidian UI Acceptance Handoff 2026-10-09.md`.
- Compared with MDSE_v2 at `d35af12`.
- Extends the principle 'Real data first' and TST-006. The source kept the matrix of interactive rows (identified B, M, Q, V, S) outside this repository; it is evidence, not carried.
- A candidate build is never presented as a controlled release: hashes of the candidate and the controlled artifact are recorded side by side.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def InteractiveAcceptancePassesOnlyOnWitnessedEvidence {
        doc /* Interactive acceptance rows pass only on witnessed, timestamped human evidence. */
    }
}
```
