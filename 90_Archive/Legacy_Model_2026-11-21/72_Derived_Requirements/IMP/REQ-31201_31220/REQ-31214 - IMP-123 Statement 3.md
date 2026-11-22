---
type: Requirement
subtype: functional
id: REQ-31214
uid: 20261022043100214skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-123
sourceRuleStatus: Active
sourceRuleClause: 3
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31214::RuleREQ31214
---
# IMP-123 — Candidate Requirement 3

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The Review CSVs stay.

## Authoritative origin

- [[IMP-123]] — exact source rule and decision origins
- [[IMP-123 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31112 - IMP-123 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Source and verification links — Draft

- [[IMP-123]]; [[IMP-123 - Analysis]].
- [[Import an Engineering Model]]; [[Ingest and Reconcile Engineering Sources]].
- [[MDSE Importer]]; [[Source Reconciliation Engine]]; [[Managed Vault Update]].
- [[VER-31112 - IMP-123 Rule Verification]]; native usage `imp31214` in [[MDSE Toolset Composition]].
- This segment remains Draft and needs independent criteria before execution.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31214 {
    requirement def RuleREQ31214 {
        doc /* The Review CSVs stay. */
    }
}
```
