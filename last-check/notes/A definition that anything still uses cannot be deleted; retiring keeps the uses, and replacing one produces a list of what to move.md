---
type: Requirement
subtype: engineering
id: REQ-98048
uid: 20261021212000068skellyspencer
status: Draft
tags: [last-check]
---
# A definition that anything still uses cannot be deleted; retiring keeps the uses, and replacing one produces a list of what to move

## Definition

The Workbench refuses to delete a reusable definition while any note, relationship or contextual use still points at it, and it names what blocks the deletion. Retiring a definition changes only its own lifecycle status; it never detaches or rewrites the users. Replacing a definition records the replacement and produces a deterministic list of the uses that should move, but moves none of them. Moving a use is a separate reviewed edit, and it is refused if the use no longer points at the definition that was reviewed.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/src/core/definition-lifecycle.ts`; `Test_Vault_ 100_Archive/V1/14_Workbench/src/core/definition-supersede.ts`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 Workbench src/core definition-lifecycle, definition-retire, definition-supersede and definition-migrate (code comments and the WB-106 contract, read as comments; the code itself was not run). The migration planner refuses to overwrite a use that another edit has already changed.
- Compared with MDSE_v2 at d35af12: MOD-006 says a note is retired, never deleted, and keeps its id. I searched RULESET and tools/workbench/src for retire, supersede and delete-with-references and found no Workbench behavior for blocking a delete, retiring a definition or listing what to migrate. The Merge tab (WKB-017 to WKB-019) rewrites every user of a removed note, which is a related but different operation.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ADefinitionThatAnythingStillUsesCannotBeDeletedRetiringKeepsTheUsesAndReplacingOneProducesAListOfWhatToMove {
        doc /* Deleting a used definition is blocked; retiring keeps its uses; replacing lists the uses to move. */
    }
}
```
