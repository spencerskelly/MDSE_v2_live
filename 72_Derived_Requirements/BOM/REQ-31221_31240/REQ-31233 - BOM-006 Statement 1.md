---
type: Requirement
subtype: functional
id: REQ-31233
uid: 20261022043100233skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: BOM-006
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31233::RuleREQ31233
---
# BOM-006 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The vault holds the latest revision of each product in scope.

## Authoritative origin

- [[BOM-006]] — exact source rule and decision origins
- [[BOM-006 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31117 - BOM-006 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## BOM traceability — Draft

- Governing source: [[BOM-006]]; source interpretation: [[BOM-006 - Analysis]].
- Engineering use case: [[Import an Engineering Model]]; related logical function: [[Ingest and Reconcile Engineering Sources]].
- Responsible component candidate: [[MDSE Importer]]; related source handling: [[Source Reconciliation Engine]].
- Existing case: [[VER-31117 - BOM-006 Rule Verification]].
- Model integration: typed requirement usage `bom31233` in [[MDSE Toolset Composition]], planned objective-level verification. This is an intent trace, not an implementation `satisfy` relationship.
- Source segment 1 of BOM-006; original ID, SysML block, and Draft status are preserved pending engineering semantic review.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31233 {
    requirement def RuleREQ31233 {
        doc /* The vault holds the latest revision of each product in scope. */
    }
}
```
