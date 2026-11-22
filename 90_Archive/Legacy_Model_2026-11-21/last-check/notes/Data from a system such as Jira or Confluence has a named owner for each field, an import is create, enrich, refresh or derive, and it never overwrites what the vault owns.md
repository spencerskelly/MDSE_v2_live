---
type: Requirement
subtype: engineering
id: REQ-98060
uid: 20261021212000080skellyspencer
status: Draft
tags: [last-check]
---
# Data from a system such as Jira or Confluence has a named owner for each field, an import is create, enrich, refresh or derive, and it never overwrites what the vault owns

## Definition

The model holds interpretation, durable structure and relationships. A connected system such as Jira, Confluence or a BOM source keeps the operational facts. For each field or section the owner is stated, and an integration never overwrites vault-owned content unless the integration was named as that field's owner. An import is one of four kinds: create a new element, enrich an existing one, refresh content that was imported before, or derive new knowledge from several source items. Only information with lasting knowledge, relationship, compliance or reuse value is promoted, and fields are not mirrored in bulk. Each promoted item records which source items contributed, when it was imported or refreshed, whether it is copied, summarized, interpreted or derived, and which side is the authority for it. An external key or URL is provenance and never the identity of the element. Imported content starts unreviewed until a person confirms its meaning and placement.

## Notes

- Carried from `Ampure_Data` at `21c60ba` and rewritten: `Ampure_Data Rules/MDSE/30_Integration/README.md`; `Ampure_Data Rules/MDSE/20_Governance/README.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Ampure_Data Rules/MDSE/30_Integration/README.md (Jira promotion and enrichment, Confluence intake and publishing, system-of-record boundary, update semantics), Rules/MDSE/20_Governance/README.md (external source ownership, imported knowledge review) and 50_Implementation/README.md (keep the original file and add a Markdown companion note when fidelity matters). The source names Rovo as a reader and writer of approved vault content.
- Compared with MDSE_v2 at d35af12: IMP-062 assigns field ownership between EA, BOM, MDSE and users, and IMP-025 keeps attached documents as files with a note. STK-98005 records the wish to link to Jira and Confluence. No rule covers Jira or Confluence data, or the four import kinds. This note extends IMP-062 to those systems and is for a later phase.

> [!flagNote] Draft, later phase. Gap against MDSE_v2 at d35af12. Whether Jira and Confluence data enter the model at all is the owner's decision (see STK-98005).
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def DataFromASystemSuchAsJiraOrConfluenceHasANamedOwnerForEachFieldAnImportIsCreateEnrichRefreshOrDeriveAndItNeverOverwritesWhatTheVaultOwns {
        doc /* External data has a named owner per field and never overwrites vault-owned content. */
    }
}
```
