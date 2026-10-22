---
type: Requirement
subtype: engineering
id: REQ-98016
uid: 20261021212000035skellyspencer
status: Draft
tags: [last-check]
---
# EA discussion posts and class attributes are preserved on import

## Definition

Two small groups of EA data that no other rule covers are kept in the note, not dropped. The 15 discussion posts attached to requirements (13 `EDisc` and 2 `EPost` rows in the linked-document table) are written as one line each, with the author and the date, on the requirement they were attached to, or on its document note if the requirement is folded. They are decision rationale the requirement does not otherwise carry. The attribute rows of a Class (`t_attribute`, 5 rows in the EA8647 source: `Abstraction Layer` twice on `MHE Charger`, `Part Number` on `MVS_800`, `Cable OD Min` and `Cable OD Max` on `Bend Relief`, plus a profile stereotype row) are written as one line each, `Attribute: <name> (<type>)`, on the owning Object note. The profile row is kept so a later cleanup can decide. There are no default values in the source, only names and types.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workspace Decision Log.md (W-75, W-86, W-108)`; `99_System/03_Schemas/ea-field-dispositions.yaml (tDocument, tSmallColumns)`.
- Compared with MDSE_v2 at `d35af12`.
- `governance/DECISIONS.md` lists attributes from `t_attribute` under 'Not yet', and `EA_TO_V2_PATHS.md` names the table without a path. Discussion posts (`EDisc`, `EPost`) are not named anywhere in v2.
- Reading to confirm: in SysML v2 an attribute with a type can be an `attribute` usage on the part definition; the V1 line form is only the carrying format that survives if no SysML construct is chosen. Both forms keep the name and type.

> [!flagNote] Gap. Small volume (20 rows), but the discussion posts are the only record of why a requirement was decided; they are lost if the importer ignores the document table's discussion rows.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def EADiscussionPostsAndClassAttributesArePreservedOnImport {
        doc /* Discussion posts and class attributes from EA are kept on the owning note. */
    }
}
```
