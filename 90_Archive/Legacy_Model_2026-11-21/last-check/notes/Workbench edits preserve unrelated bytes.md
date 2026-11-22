---
type: Requirement
subtype: engineering
id: REQ-98010
uid: 20261021212000015skellyspencer
status: Draft
tags: [last-check]
---
# Workbench edits preserve unrelated bytes

## Definition

A structured edit changes only the intended region of a note. All other text, including mixed line endings in a legacy or hand-written note, stays byte-for-byte unchanged. A no-op edit produces no file difference. Regression cases cover a mixed line-ending no-op and a real edit on the same note. Generated Markdown is written with LF line endings.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workbench Performance and Stability Roadmap.md (2026-10-06 follow-up)`.
- Compared with MDSE_v2 at `d35af12`.
- IMP-070 preserves non-SysML Markdown byte-for-byte on import, and a rule on LF output is carried (REG-186). Workbench edits are covered by WKB-009 (atomic, refused if the file changed) but not by a byte-preservation rule.
- Cause in the source: the edit selected one line ending for the whole file if the text contained CRLF anywhere, so unrelated lines were normalised. Preferred fix: a minimal splice that touches only the replaced region.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def WorkbenchEditsPreserveUnrelatedBytes {
        doc /* A Workbench edit changes only the intended region and leaves all other bytes unchanged. */
    }
}
```
