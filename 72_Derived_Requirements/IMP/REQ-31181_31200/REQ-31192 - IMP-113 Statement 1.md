---
type: Requirement
subtype: functional
id: REQ-31192
uid: 20261022043100192skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-113
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31192::RuleREQ31192
---
# IMP-113 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

An Aggregation or Composition makes the child a usage in the whole, of the kind its two definitions are: part/part is `part`, action/action `action`, state/state `state`, item/item `item`, requirement/requirement `requirement`, part/port def `port`, use case/use case `use case`.

## Authoritative origin

- [[IMP-113]] — exact source rule and decision origins
- [[IMP-113 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 4 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31102 - IMP-113 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31192 {
    requirement def RuleREQ31192 {
        doc /* An Aggregation or Composition makes the child a usage in the whole, of the kind its two definitions are: part/part is `part`, action/action `action`, state/state `state`, item/item `item`, requirement/requirement `requirement`, part/port def `port`, use case/use case `use case`. */
    }
}
```
