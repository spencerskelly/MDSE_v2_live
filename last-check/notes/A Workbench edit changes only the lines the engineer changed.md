---
type: Requirement
subtype: engineering
id: REQ-98050
uid: 20261021212000070skellyspencer
status: Draft
tags: [last-check]
---
# A Workbench edit changes only the lines the engineer changed

## Definition

After an edit made through the Workbench, the version-control difference of the note shows only the lines the engineer changed. Property order, quoting, spacing and list order that the engineer did not touch stay as they were. This is checked by a test that counts the changed lines on a real note, and the edit path is changed if the count is larger than the edit. Typing in an edit box in a view must not delete the selected element in the view behind it.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/docs/Testing/06 - Test Sheet.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Test_Vault_ 100_Archive/V1/14_Workbench/docs/Testing/06 - Test Sheet.md, section 5. The sheet asks how many lines changed besides the edited ones and says the answer 'decides whether to keep Obsidian's property rewrite'. It also has a key-safety row: pressing Delete or Backspace in the popup text box must not delete the canvas card. V1 also sorts relationship lists by target name so concurrent edits merge cleanly (README, WB-086).
- Compared with MDSE_v2 at d35af12: WKB-009 shows a diff before applying and refuses when the file differs. v2 edits a SysML text range (edit_rel.ts), so the property-rewrite problem is much smaller, but I found no test that asserts that the lines outside the edit are byte-identical.

> [!flagNote] Draft. May already be true of v2's range edits; it is an untested assertion, not a known defect.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AWorkbenchEditChangesOnlyTheLinesTheEngineerChanged {
        doc /* A Workbench edit leaves unedited lines identical and key presses in an edit box do not affect the view behind it. */
    }
}
```
