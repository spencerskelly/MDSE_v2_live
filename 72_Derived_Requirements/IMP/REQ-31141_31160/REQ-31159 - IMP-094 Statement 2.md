---
type: Requirement
subtype: functional
id: REQ-31159
uid: 20261022043100159skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-094
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31159::RuleREQ31159
---
# IMP-094 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Usage, relationship, flow, trigger and connector lines carry no GUID; they name the other note. A flag callout keeps the connector GUID because it is the handle to the ledger row.

## Authoritative origin

- [[IMP-094]] — exact source rule and decision origins
- [[IMP-094 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Search for a Part, Function or Design]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Query and Traverse Model Relationships]]
- [[Discover and Resolve Model Elements]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31084 - IMP-094 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31159 {
    requirement def RuleREQ31159 {
        doc /* Usage, relationship, flow, trigger and connector lines carry no GUID; they name the other note. A flag callout keeps the connector GUID because it is the handle to the ledger row. */
    }
}
```
