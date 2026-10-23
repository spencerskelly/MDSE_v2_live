---
type: Requirement
subtype: functional
id: REQ-31156
uid: 20261022043100156skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-093
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31156::RuleREQ31156
---
# IMP-093 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Tagged values follow `governance/schemas/ea-tag-dispositions.json` (the V1 list, 121 tags, decisions W-29 to W-106).

## Authoritative origin

- [[IMP-093]] — exact source rule and decision origins
- [[IMP-093 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31083 - IMP-093 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31156 {
    requirement def RuleREQ31156 {
        doc /* Tagged values follow `governance/schemas/ea-tag-dispositions.json` (the V1 list, 121 tags, decisions W-29 to W-106). */
    }
}
```
