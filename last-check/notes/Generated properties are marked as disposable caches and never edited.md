---
type: Requirement
subtype: engineering
id: REQ-98037
uid: 20261021212000056skellyspencer
status: Draft
tags: [last-check]
---
# Generated properties are marked as disposable caches and never edited

## Definition

Any property the tools write into frontmatter so Bases or search can filter (for example a requirement's verification count or an unresolved-reference count) uses one reserved prefix and is regenerated from the model. It is never read back as model input and the Workbench does not offer it for editing. Whether it is current is shown. Any link the tools display says whether it is authored, inherited, derived or suggested. Hand-authored frontmatter relationship fields use document-specific names (reviewers, relatedDecisions, openIssues). There is no generic `related` field, because it loses meaning and cannot support impact rules.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 88_Reference/separation.md (sections 2 and 7)`; `Test_Vault_ 88_Reference/SysML v2 integration.md (sections 7 and 8)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 generates inverse and derived links (hasChild, stateOf and similar in the V1 schema, the OD-02 index) but has no rule that marks them as caches or labels a link's origin. MOD-137 states that derived state is rebuildable and never a competing source of truth; this note adds the visible marker.
- Source is a design discussion kept as a reference page (phrased 'I would ...'), not an owner decision.

> [!flagNote] Draft proposal. Owner picks the reserved prefix (the source used derived_) and whether origin labels show in the Workbench or only in the index.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def GeneratedPropertiesAreMarkedAsDisposableCachesAndNeverEdited {
        doc /* Generated properties use a reserved prefix, are regenerated and never edited; link origin is labeled. */
    }
}
```
