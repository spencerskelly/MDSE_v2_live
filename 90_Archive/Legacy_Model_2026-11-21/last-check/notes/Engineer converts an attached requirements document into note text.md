---
type: Use Case
subtype: what
id: UC-98010
uid: 20261021212000030skellyspencer
status: Draft
tags: [last-check]
---
# Engineer converts an attached requirements document into note text

## Definition

The import attaches a linked requirements document unchanged (as an RTF file), which makes its text unreadable and unsearchable in the vault. When the text is the owner's own, the engineer converts it to Markdown and places it in the main text of the note it is attached to, as a reviewed commit, then keeps or removes the attachment and records the decision. Done when the text is searchable in the note and the log row exists.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 3)`.
- Compared with MDSE_v2 at `d35af12`.
- Applies after the standards-content decision: the text must be confirmed as publishable first.
- V1 case: one 19,277-character document. It is the only text-only own-work attachment the source identified.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerConvertsAnAttachedRequirementsDocumentIntoNoteText {
        doc /* The engineer converts an own-work attached document to searchable note text. */
    }
}
```
