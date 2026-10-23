---
type: Requirement
subtype: functional
id: REQ-31160
uid: 20261022043100160skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-095
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31160::RuleREQ31160
---
# IMP-095 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

A Part, Port or Action usage with no name of its own takes the name of its typed element, made unique within its owner (`pCE25ECU`, then `pCE25ECU_2`). A usage with neither a name nor a resolvable type keeps a generated name and is flagged.

## Authoritative origin

- [[IMP-095]] — exact source rule and decision origins
- [[IMP-095 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

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

- Proposed case: [[VER-31085 - IMP-095 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31160 {
    requirement def RuleREQ31160 {
        doc /* A Part, Port or Action usage with no name of its own takes the name of its typed element, made unique within its owner (`pCE25ECU`, then `pCE25ECU_2`). A usage with neither a name nor a resolvable type keeps a generated name and is flagged. */
    }
}
```
