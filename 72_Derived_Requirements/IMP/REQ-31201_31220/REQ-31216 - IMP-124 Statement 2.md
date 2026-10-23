---
type: Requirement
subtype: functional
id: REQ-31216
uid: 20261022043100216skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-124
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31216::RuleREQ31216
---
# IMP-124 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Elsewhere a leading `+` is `plus`, a leading `-` is `minus`, a point between digits is `p`, `&` is `And`, `%` is `Pct`, `#` is `No`. A name that is only a number is named after its type (`wire1`, not `_1`).

## Authoritative origin

- [[IMP-124]] — exact source rule and decision origins
- [[IMP-124 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 6 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Search for a Part, Function or Design]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Discover and Resolve Model Elements]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31113 - IMP-124 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31216 {
    requirement def RuleREQ31216 {
        doc /* Elsewhere a leading `+` is `plus`, a leading `-` is `minus`, a point between digits is `p`, `&` is `And`, `%` is `Pct`, `#` is `No`. A name that is only a number is named after its type (`wire1`, not `_1`). */
    }
}
```
