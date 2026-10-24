---
type: Requirement
subtype: functional
id: REQ-31201
uid: 20261022043100201skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-116
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31201::RuleREQ31201
---
# IMP-116 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

> [!flagNote] D-0073 — native case remains conditional on proven ownership
> The original Draft clause is consistent only for typed action/state usages in one valid owner. Parser, round-trip and Workbench visual acceptance are not inferred; existing SysML source remains unchanged.

## Candidate obligation

ControlFlow and StateFlow between usages, or between definitions nested in one owner, are a `succession` or `transition` in that owner.

## Authoritative origin

- [[IMP-116]] — exact source rule and decision origins
- [[IMP-116 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31105 - IMP-116 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer trace — Draft

- [[IMP-116]], [[IMP-116 - Analysis]], [[Import an Engineering Model]].
- [[Ingest and Reconcile Engineering Sources]], [[MDSE Importer]].
- [[Source Reconciliation Engine]], [[Managed Vault Update]].
- Planned [[VER-31105 - IMP-116 Rule Verification]].
- Typed usage `imp31201` in [[MDSE Toolset Composition]]. No approved verification result.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31201 {
    requirement def RuleREQ31201 {
        doc /* ControlFlow and StateFlow between usages, or between definitions nested in one owner, are a `succession` or `transition` in that owner. */
    }
}
```
