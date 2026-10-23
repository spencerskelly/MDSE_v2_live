---
type: Behavior
subtype: function
id: BEH-00001
uid: 20261021163400014skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00001::ReconcileSourceRecords
---
# Reconcile Source Records

**Statement:** Normalize and translate source records with explicit dispositions, preserving unhandled cases for review.

## Proposed trace links

- Referenced from (requiresFunction): [[Import an Engineering Model]]
- constrainedBy: [[Account for Every Source Row]] — proposed association, with native constraint semantics still under review.

These are provisional navigational links. Formal native SysML relationships, endpoint typing, and independent parser acceptance remain to be verified. Do not treat a link or verification declaration as passed evidence.

## Candidate parent function

- [[Ingest and Reconcile Engineering Sources]] — proposed broader ingestion function; this note remains the prior narrower reconciliation concept.

## Modeled incoming relationships

The broader [[Ingest and Reconcile Engineering Sources]] function owns one nested `action reconcileSourceRecords` usage typed by this definition. The logic is not duplicated.

Function definitions remain reusable in this note; relationships are authored as native SysML usages or dependencies **in their owning notes**, not duplicated here. See [[MDSE Toolset Composition]] and [[Engineering Knowledge Base]] for navigation. All of these links remain Draft pending independent parser and runtime acceptance.

> [!flagLink] Function-to-requirement constraint trace pending
> The proposed `constrainedBy` relationship to [[Account for Every Source Row]] has not been typed as a native SysML relationship. Do not infer `satisfy`, `allocate`, or a constraint usage from this provisional link.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_BEH_00001 {
    action def ReconcileSourceRecords {
        doc /* Normalize and translate source records with explicit dispositions, preserving unhandled cases for review. */
    }
}
```
