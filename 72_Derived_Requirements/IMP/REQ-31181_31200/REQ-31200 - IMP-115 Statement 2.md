---
type: Requirement
subtype: functional
id: REQ-31200
uid: 20261022043100200skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-115
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31200::RuleREQ31200
---
# IMP-115 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

> [!flagNote] D-0070 — historical Draft candidate, not approved implementation criteria
> D-0070 implements D-0010: an unresolved MDSE-note connector gets a `flagLink` and `deferred_review` ledger row with original GUID and endpoints, not a new `tracesTo` YAML link. Existing approved descriptive YAML fields are unchanged. Retain the original clause, ID, `sourceRuleStatus`, and SysML definition as prior modeling evidence. Reevaluate clause-level acceptance criteria against current governance; no `verify`, `satisfy` or `#derivation` has been added. See [[STEP_03_PROVISIONAL_LINK_RECONCILIATION_2026-10-24]].

## Candidate obligation

Source: EA does not repeat the link.

## Authoritative origin

- [[IMP-115]] — exact source rule and decision origins
- [[IMP-115 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31104 - IMP-115 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer cross-note trace — Draft

- Rule: [[IMP-115]]; analysis: [[IMP-115 - Analysis]].
- [[Import an Engineering Model]]; [[Ingest and Reconcile Engineering Sources]].
- [[MDSE Importer]]; [[Source Reconciliation Engine]]; [[Managed Vault Update]].
- Planned case: [[VER-31104 - IMP-115 Rule Verification]].
- Typed usage: `imp31200` in [[MDSE Toolset Composition]]. No formal acceptance or test execution.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31200 {
    requirement def RuleREQ31200 {
        doc /* Source: EA does not repeat the link. */
    }
}
```
