---
type: Requirement
subtype: functional
id: REQ-31236
uid: 20261022043100236skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: BOM-008
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31236::RuleREQ31236
---
# BOM-008 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

A usage records the child revision pinned by the parent.

## Authoritative origin

- [[BOM-008]] — exact source rule and decision origins
- [[BOM-008 - Analysis]] — clause decomposition and current classification
- Source family: `BOM`; semantic role: BOM Functional Requirement; source phase `P2`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Complete Product Context]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Importer]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31119 - BOM-008 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## BOM traceability — Draft

- Governing source: [[BOM-008]]; source interpretation: [[BOM-008 - Analysis]].
- Engineering use case: [[Import an Engineering Model]]; related logical function: [[Ingest and Reconcile Engineering Sources]].
- Responsible component candidate: [[MDSE Importer]]; related source handling: [[Source Reconciliation Engine]].
- Existing case: [[VER-31119 - BOM-008 Rule Verification]].
- Model integration: typed requirement usage `bom31236` in [[MDSE Toolset Composition]], planned objective-level verification. This is an intent trace, not an implementation `satisfy` relationship.
- Source segment 1 of BOM-008; original ID, SysML block, and Draft status are preserved pending engineering semantic review.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31236 {
    requirement def RuleREQ31236 {
        doc /* A usage records the child revision pinned by the parent. */
    }
}
```
