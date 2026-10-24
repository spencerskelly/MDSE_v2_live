---
type: Requirement
subtype: functional
id: REQ-31250
uid: 20261022043100250skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: BOM-016
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31250::RuleREQ31250
---
# BOM-016 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Each part number gets one `Object` (subtype part) note named `<PN>` (the part number alone, so the file name and the part number are the same value; the name is the H1 and a `- Name:` line in Source) under `BOM/Parts`: `part def P_<PN>` with `partNumber`, `revision` (CL1+CL2 as exported), `source`, `lifecycleState` attributes.

## Authoritative origin

- [[BOM-016]] — exact source rule and decision origins
- [[BOM-016 - Analysis]] — clause decomposition and current classification
- Source family: `BOM`; semantic role: BOM Functional Requirement; source phase `P2`
- This is one of 5 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31127 - BOM-016 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## BOM cross-model trace — Draft

- Source rule: [[BOM-016]]; analysis: [[BOM-016 - Analysis]].
- User scenario: [[Import an Engineering Model]]; related function: [[Ingest and Reconcile Engineering Sources]].
- Architecture: [[MDSE Importer]], [[Source Reconciliation Engine]].
- Planned verification: [[VER-31127 - BOM-016 Rule Verification]].
- Integration identity: `bom31250` typed usage in [[MDSE Toolset Composition]]; this is verification intent only, not actual execution.
- Segment 1 of BOM-016; semantic atomization and acceptance remain pending. The source rule is compound; this fragment must be reconciled before owner approval.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31250 {
    requirement def RuleREQ31250 {
        doc /* Each part number gets one `Object` (subtype part) note named `<PN>` (the part number alone, so the file name and the part number are the same value; the name is the H1 and a `- Name:` line in Source) under `BOM/Parts`: `part def P_<PN>` with `partNumber`, `revision` (CL1+CL2 as exported), `source`, `lifecycleState` attributes. */
    }
}
```
