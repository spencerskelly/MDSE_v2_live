---
type: Requirement
subtype: functional
id: REQ-31254
uid: 20261022043100254skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: BOM-016
sourceRuleStatus: Active
sourceRuleClause: 5
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31254::RuleREQ31254
---
# BOM-016 — Candidate Requirement 5

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Parent note lists children in `hasPart`.

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

- Governing rule: [[BOM-016]]; semantic analysis: [[BOM-016 - Analysis]].
- Use case: [[Import an Engineering Model]]; logical function: [[Ingest and Reconcile Engineering Sources]].
- Responsible tool candidate: [[MDSE Importer]]; source handling: [[Source Reconciliation Engine]].
- Existing verification case: [[VER-31127 - BOM-016 Rule Verification]].
- Integration symbol: `bom31254` typed requirement usage in [[MDSE Toolset Composition]]; source segment 5 of compound BOM-016.
- This is a Draft trace, not an executed verification or accepted satisfaction. The source sentence boundaries need expert review for atomicity.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31254 {
    requirement def RuleREQ31254 {
        doc /* Parent note lists children in `hasPart`. */
    }
}
```
