---
type: Requirement
subtype: functional
id: REQ-31153
uid: 20261022043100153skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-085
sourceRuleStatus: Active
sourceRuleClause: 3
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31153::RuleREQ31153
---
# IMP-085 — Candidate Requirement 3

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

This applies to EA-owned relationships.

## Authoritative origin

- [[IMP-085]] — exact source rule and decision origins
- [[IMP-085 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P2`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Query and Traverse Model Relationships]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31080 - IMP-085 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31153 {
    requirement def RuleREQ31153 {
        doc /* This applies to EA-owned relationships. */
    }
}
```
