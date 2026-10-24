---
type: Requirement
subtype: functional
id: REQ-31247
uid: 20261022043100247skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: BOM-015
sourceRuleStatus: Active
sourceRuleClause: 3
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31247::RuleREQ31247
---
# BOM-015 — Candidate Requirement 3

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Part numbers are read as text.

## Authoritative origin

- [[BOM-015]] — exact source rule and decision origins
- [[BOM-015 - Analysis]] — clause decomposition and current classification
- Source family: `BOM`; semantic role: BOM Functional Requirement; source phase `P2`
- This is one of 5 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Complete Product Context]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]

## Existing software architecture candidates

- [[MDSE Importer]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31126 - BOM-015 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## BOM cross-model trace — Draft

- Source rule: [[BOM-015]]; analysis: [[BOM-015 - Analysis]].
- User scenario: [[Import an Engineering Model]]; related function: [[Ingest and Reconcile Engineering Sources]].
- Architecture: [[MDSE Importer]], [[Source Reconciliation Engine]].
- Planned verification: [[VER-31126 - BOM-015 Rule Verification]].
- Integration identity: `bom31247` typed usage in [[MDSE Toolset Composition]]; this is verification intent only, not actual execution.
- Segment 3 of BOM-015; semantic atomization and acceptance remain pending. The source rule is compound; this fragment must be reconciled before owner approval.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31247 {
    requirement def RuleREQ31247 {
        doc /* Part numbers are read as text. */
    }
}
```
