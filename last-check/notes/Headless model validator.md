---
type: Behavior
subtype: action
id: BEH-98002
uid: 20261021212000019skellyspencer
status: Draft
tags: [last-check]
---
# Headless model validator

## Definition

A command validates a vault folder without Obsidian and returns a failing result when any check fails. Checks: every YAML block parses; every link resolves; uid, id and path are unique; the 30-character identity token is not reused; each note has one SysML block that parses against the pinned parser; open flags are counted by type. The validator runs after every import write, with its result in the run manifest (a failing check marks the run FAIL), and in CI. It reuses the same schema loader and identity rules as Workbench and the importer.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (I3, W8, X1)`; `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (E3)`.
- Compared with MDSE_v2 at `d35af12`.
- TST-009 lists these checks as a handoff gate and MOD-138 names a shared parser and validator; mdse_core.js has validation helpers. No rule specifies the command, the failing result, or the use after import.
- Source names: I3 (importer validator), W8 (headless CLI over the pure core), X1 (shared core). Terms tied to V1 (inverse consistency, Local Model validity) are dropped.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    action def HeadlessModelValidator {
        doc /* A headless command validates a vault folder and fails the run when any check fails. */
    }
}
```
