---
type: Requirement
subtype: engineering
id: REQ-98015
uid: 20261021212000034skellyspencer
status: Draft
tags: [last-check]
---
# Use Case and Condition subtypes follow the EA package path

## Definition

A Use Case takes its subtype from the EA package under `01 Product Use Case` that holds it: `00 Who` gives `who`, `01 What` gives `what`, `03 When` gives `when`, `04 Where` gives `where`. A Use Case anywhere else keeps a blank subtype and is listed for review, because there is no `why` folder and the 357 elements outside the four folders (for example `Mixed Use Digital`) have no source for a subtype. A State element in the package `05 Product Design` or below becomes a Condition with subtype `design`, and every other State becomes a Condition with subtype `state`. An Activity whose stereotype includes `function` is a Behavior with subtype `function` wherever it sits; otherwise it is a Behavior with subtype `activity`.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workspace Decision Log.md (W-140, W-142, W-384)`; `99_System/03_Schemas/ea-element-mapping.yaml`.
- Compared with MDSE_v2 at `d35af12`.
- MOD-062 states the Use Case rule and MOD-069 and the Behavior/Condition taxonomy carry the State and Activity classes. In `tools/importer/src/ea_mapping.ts`, `UseCaseDefinition` always returns subtype `what` and reports `SUBTYPE_DEFAULTED_WHAT`, and `StateDefinition` always returns `state`, so the folder rules do not run.
- Counts recorded in V1: Use Case who 232, what 983, when 21, where 74, blank 357 (1,667 in all). State in `05 Product Design` 954 (System State 752, none 202) against 158 elsewhere. No nesting crosses the Design boundary: 851 Design States are owned by a Design State and 57 other States by another State.
- Reading to confirm: W-384 states the State rule as `Condition / design` for `05 Product Design`. The match is by package path, not by stereotype.

> [!flagNote] Gap: the importer defaults both rules; implement the folder match or record that defaults are intended.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def UseCaseAndConditionSubtypesFollowTheEAPackagePath {
        doc /* Use Case and Condition subtypes are derived from the EA package path. */
    }
}
```
