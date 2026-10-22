---
type: Requirement
subtype: engineering
id: REQ-98030
uid: 20261021212000049skellyspencer
status: Draft
tags: [last-check]
---
# A view filter that hides relationships is shown and warned about before an edit

## Definition

When a Workbench view hides element kinds or relationship kinds, the model does not change and the view says so. A visible element whose relationships are hidden by the filter shows a marker, and one action reveals them without changing the model. Before an edit or removal that would affect a hidden relationship, the Workbench lists the hidden relationships and asks the person to confirm. A relationship added while a filter hides its kind offers to show that kind. A filter hides the element and its connectors in that view only; queries, tables and the SysML v2 text still include them. Saved filter sets are view data, not part of the model, and do not appear in the SysML v2 block.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 24_Workbench/docs/SYSML_V2_MESSAGE_AND_VISUAL_FILTERS.md (Visual filters, VIEW-01 to VIEW-06)`.
- Compared with MDSE_v2 at `d35af12`.
- WKB README principle 8 says filters hide and do not connect through, and caps are reported. It does not say hidden relationships are flagged on a visible element or warned about before a destructive edit. WKB-009 says every Edit lens change is previewed as a diff and refused when the file changed, but the preview does not name relationships a filter hides.
- The source also asks for named presets (Structural, Behavioral, Communication, Requirements, Custom) and per-view versioning. These are conveniences and were not carried as rules.
- Source tests VIEW-01 to VIEW-06: toggle a kind off and the text, queries and Git diff do not change; hiding an element hides its incident connectors without deleting them; reveal hidden relationships before a destructive edit.

> [!flagNote] Draft. The marker and the warning are not in the v2 Workbench. The owner decides whether they are wanted.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AViewFilterThatHidesRelationshipsIsShownAndWarnedAboutBeforeAnEdit {
        doc /* A filter hides in the view only; hidden relationships are shown and warned about before an edit. */
    }
}
```
