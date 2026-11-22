---
type: Requirement
subtype: engineering
id: REQ-98027
uid: 20261021212000046skellyspencer
status: Draft
tags: [last-check]
---
# An attachment is linked from the note that owns it, decided from source evidence

## Definition

An EA Artifact (an image or a document) does not become a note. It becomes an attachment that the note of the element that owns it links to. The owner is decided from the source in this order. If the Artifact has a parent element that exists, that element is the owner candidate. If it has no parent but has connectors, the connector direction and kind are read with the approved relationship rules, and the owner is accepted only when they support one. If it has neither, it goes to an attachment review queue. An EA package does not own an attachment. An owner is never guessed from a name, from a count that happens to match, or from folder position. Each queue entry carries its own flagNote with the source identity on the note that should own it, or on the attachment record when no owner is known. The import reports the number owned by parent, by connector, and unassigned, and these categories do not overlap. A count that equals another count (for example 144 Artifacts and 144 flags) is not proof of the link between them.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 26_Definitions/STEP_03N_ATTACHMENT_IDENTITY_INVENTORY_2026-10-18.md`; `Test_Vault_ 26_Definitions/STEP_03O_ATTACHMENT_OWNERSHIP_EVIDENCE_2026-10-18.md`; `Test_Vault_ 26_Definitions/STEP_03P_ATTACHMENT_OWNER_CANDIDATES_2026-10-18.md`; `Test_Vault_ 26_Definitions/STEP_03Q_CONNECTOR_OWNER_EVIDENCE_2026-10-18.md`; `Test_Vault_ 26_Definitions/STEP_03A_GRAPH_FLAG_ACCEPTANCE_GAP_2026-10-18.md`; `Test_Vault_ 26_Definitions/STEP_00_APPROVED_MODEL_HANDLING_CLARIFICATIONS_2026-10-18.md (6)`.
- Compared with MDSE_v2 at `d35af12`.
- Measured on the reduced QEAX of 2026-10-18 (11,447 elements): 144 Artifacts (93 Image, 51 Document); 52 with an existing parent element, 91 with no parent but connectors, 1 with neither. 120 embedded document rows, 114 matching a model object by GUID. 42 Artifacts have no connector. These numbers belong to that snapshot and are not constants.
- RULESET has MOD-133 (attachments are not definition notes; no orphan references; GAP-DOC-01), IMP-025 (linked documents as files named '<note> asset <n>'), IMP-090 and IMP-115. None says how the owner is chosen. IMP-013 says ParentID is structure and is not copied into notes, which fits using it to find the owner and then dropping it.
- STEP-02P left the attachments unowned in an aggregate queue; STEP-02Q split it into 144 flagNotes in one review note; STEP-03A found that 144 of 159 flagNotes were counted from an index and not on graph nodes. The lesson stands: a flag must live on a note or node, not only in a review index.

> [!flagNote] Draft. Whether a connector direction can make an owner is not decided; the source steps left the 91 connector cases as review.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AnAttachmentIsLinkedFromTheNoteThatOwnsItDecidedFromSourceEvidence {
        doc /* An attachment is linked from its owning note; owner comes from source evidence. */
    }
}
```
