---
type: Requirement
subtype: functional
id: REQ-31204
uid: 20261022043100204skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-118
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31204::RuleREQ31204
---
# IMP-118 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

An Association between a Use Case and an Actor is an `actor` usage in the use case, once; between a Use Case and another part it is the `participants` link on the use case.

## Authoritative origin

- [[IMP-118]] — exact source rule and decision origins
- [[IMP-118 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P2`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31107 - IMP-118 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer trace — Draft

- [[IMP-118]], [[IMP-118 - Analysis]], [[Import an Engineering Model]].
- [[Ingest and Reconcile Engineering Sources]], [[MDSE Importer]].
- [[Source Reconciliation Engine]], [[Managed Vault Update]].
- Planned [[VER-31107 - IMP-118 Rule Verification]].
- Typed usage `imp31204` in [[MDSE Toolset Composition]]. No approved verification result.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31204 {
    requirement def RuleREQ31204 {
        doc /* An Association between a Use Case and an Actor is an `actor` usage in the use case, once; between a Use Case and another part it is the `participants` link on the use case. */
    }
}
```
