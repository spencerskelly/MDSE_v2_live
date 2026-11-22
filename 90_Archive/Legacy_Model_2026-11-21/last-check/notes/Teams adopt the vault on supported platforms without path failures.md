---
type: Requirement
subtype: stakeholder
id: STK-98003
uid: 20261021212000002skellyspencer
status: Draft
tags: [last-check]
---
# Teams adopt the vault on supported platforms without path failures

## Definition

Engineers need to clone, open, edit and sync the vault on every supported Windows and macOS environment, at the agreed vault location, without path-related failures. If a platform cannot create, clone, open or sync a path, that is a compatibility finding. It is resolved by the smallest meaningful naming or navigation rule for the affected group, put into the importer and applied by a fresh import. It is not resolved by hand-editing the accepted model, by an arbitrary global character limit, or by mechanical numbered folders. If no platform failure occurs, no change is needed.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 9)`; `55_Workspace/MDSE Plan - Path to a Golden Model.md (S2, D4)`.
- Compared with MDSE_v2 at `d35af12`.
- Existing rules: MOD-103, MOD-104, MOD-112 (no importer-defined path or file-count limits, no folder_N). Open decision: whether to add a path-length report for SharePoint (OPEN_DECISIONS, C-12).
- The source also proposes that Bootstrap compare the vault folder path length plus the longest path in the vault with the 260-character Windows limit at first open, and warn before Git or Obsidian fails. That is a candidate behaviour, not a decision.
- Import-state wording in the source (re-import to apply the rule) must be read with OD-04: V2 supports additive re-import.

> [!flagNote] Bootstrap path-length warning is a source proposal (S2) never decided; confirm before building.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def TeamsAdoptTheVaultOnSupportedPlatformsWithoutPathFailures {
        doc /* The vault can be cloned, opened, edited and synced on supported Windows and macOS platforms. */
    }
}
```
