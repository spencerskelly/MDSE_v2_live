---
type: Use Case
subtype: what
id: UC-98008
uid: 20261021212000028skellyspencer
status: Draft
tags: [last-check]
---
# Engineer folds unconnected requirements into document notes

## Definition

The import brings in every requirement as its own note. A requirement with no direct or child connectors can be folded into the note of its standard or stakeholder document under a clause anchor. The engineer decides which documents fold and which clauses stay as notes (for example a clause drawn on a diagram or with values worth keeping), folds in batches with one reviewed commit per document, retires each folded note (status Retired, id stays reserved), and records the batch. Done when every unconnected requirement is folded or kept with a reason.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 4)`.
- Compared with MDSE_v2 at `d35af12`.
- V1 scale: 9,788 unconnected requirements; 817 drawn on a diagram; 7,491 had a note. IMP-027 and REG-159 say folding is a stage 2 task; the procedure is not carried.
- The decision which documents fold must be settled before the first push, or folded notes remain in git history.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerFoldsUnconnectedRequirementsIntoDocumentNotes {
        doc /* The engineer folds unconnected clauses into document notes and retires the folded notes. */
    }
}
```
