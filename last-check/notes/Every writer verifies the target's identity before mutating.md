---
type: Behavior
subtype: action
id: BEH-98001
uid: 20261021212000018skellyspencer
status: Draft
tags: [last-check]
---
# Every writer verifies the target's identity before mutating

## Definition

Before any writer changes a note (property, body, relationship, SysML block, merge, or an import into an existing vault), it re-reads the file and checks that the uid on disk still matches the indexed target. If the uid is missing or different, or the file was renamed or replaced, the writer refuses and changes nothing. A failure is atomic: no partial write, and an interrupted write preparation leaves the model unchanged. The check sits in one shared transaction layer, not copied into each writer. Once every write path is listed and covered, defensive work on this boundary stops.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (C1, A1 to A6)`.
- Compared with MDSE_v2 at `d35af12`.
- WKB-009 refuses an Edit-lens change when the file differs from what the preview was built from, and WKB-006 and MOD-138 use a source hash or version check. A uid-identity check on every write path, including importer add-onto, is not stated.
- Regression cases from the source: stale uid, missing uid, renamed or replaced file, stale owner, interrupted write preparation. Expected result in every case is zero mutation.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    action def EveryWriterVerifiesTheTargetSIdentityBeforeMutating {
        doc /* A writer checks the target uid just before mutation and refuses without any change on mismatch. */
    }
}
```
