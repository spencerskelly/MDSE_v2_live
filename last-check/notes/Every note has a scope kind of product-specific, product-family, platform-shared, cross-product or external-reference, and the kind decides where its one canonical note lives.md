---
type: Requirement
subtype: engineering
id: REQ-98064
uid: 20261021212000084skellyspencer
status: Draft
tags: [last-check]
---
# Every note has a scope kind of product-specific, product-family, platform-shared, cross-product or external-reference, and the kind decides where its one canonical note lives

## Definition

Each note states the scope it applies to, using one of five controlled kinds: product-specific, product-family, platform-shared, cross-product, or external-reference (a standard, protocol or market concept that is not part of any one product). There is one canonical note per identity, and other notes link to it. A reference concept is not given a product scope because it appears in a product discussion; it is linked to a product design only by a typed relationship that says how it applies. Where the note sits in the folder tree follows from its scope kind but never defines it.

## Notes

- Carried from `PosiBattery` at `ca67e06` and rewritten: `PosiBattery 99_System/10_Docs/Common Element Metadata Standard 0.1.md`; `PosiBattery 99_System/10_Docs/Canonical Vault Top-Level Taxonomy 0.1.md`; `PosiBattery 99_System/10_Docs/Relationship Vocabulary Usage Guide 0.1.md`; `PosiBattery 99_System/10_Docs/Schema Reconciliation Matrix 0.1.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: PosiBattery 99_System/10_Docs/Common Element Metadata Standard 0.1.md (scope section), Canonical Vault Top-Level Taxonomy 0.1.md and Relationship Vocabulary Usage Guide 0.1.md (governing rules). The source calls scope.kind optional for legacy notes and required for newly adopted notes, and leaves the data shape open (nested object, flat fields or relationship only; decision DEC-005 in its reconciliation matrix).
- Compared with MDSE_v2 at d35af12: The folder-structure note says a path is navigation and not meaning, and MOD-091 says requirement scope uses appliesTo. I found no controlled list of scope kinds and no rule that reference concepts have their own scope. A search of RULESET.md and the register for product-family, platform-shared and external-reference found nothing.
- This matters for a shared engineering vault that holds several products: without a scope kind, a query cannot separate a platform rule from one product's behavior.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search. Owner decides whether scope is a property, a relationship, or out of scope for the first release; v1 phase 1 holds one product line.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def EveryNoteHasAScopeKindOfProductSpecificProductFamilyPlatformSharedCrossProductOrExternalReferenceAndTheKindDecidesWhereItsOneCanonicalNoteLives {
        doc /* A note states one scope kind and has one canonical home. */
    }
}
```
