---
type: Requirement
subtype: functional
id: REQ-31176
uid: 20261022043100176skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-101
sourceRuleStatus: Active
sourceRuleClause: 4
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31176::RuleREQ31176
---
# IMP-101 — Candidate Requirement 4

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

`~` is written when the object has an `isConjugated` tag with a true value (`true`, `yes`, `1` or EA's `-1`). A Port whose PDATA1 is not a port definition (a connector, a signal) is written without a type, the target is kept as a `- Port <name> is typed by [[…]]` line in Source, and the usage is flagged (`UNRESOLVED_PORT_TYPE:TARGET_IS_…`).

## Authoritative origin

- [[IMP-101]] — exact source rule and decision origins
- [[IMP-101 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31091 - IMP-101 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31176 {
    requirement def RuleREQ31176 {
        doc /* `~` is written when the object has an `isConjugated` tag with a true value (`true`, `yes`, `1` or EA's `-1`). A Port whose PDATA1 is not a port definition (a connector, a signal) is written without a type, the target is kept as a `- Port <name> is typed by [[…]]` line in Source, and the usage is flagged (`UNRESOLVED_PORT_TYPE:TARGET_IS_…`). */
    }
}
```
