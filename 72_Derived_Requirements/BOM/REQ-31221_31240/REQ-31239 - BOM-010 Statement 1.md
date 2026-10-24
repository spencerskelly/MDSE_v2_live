---
type: Requirement
subtype: functional
id: REQ-31239
uid: 20261022043100239skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: BOM-010
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31239::RuleREQ31239
---
# BOM-010 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Revision strings are stored as exported, not normalized.

## Authoritative origin

- [[BOM-010]] — exact source rule and decision origins
- [[BOM-010 - Analysis]] — clause decomposition and current classification
- Source family: `BOM`; semantic role: BOM Functional Requirement; source phase `P2`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Complete Product Context]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Importer]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31121 - BOM-010 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## BOM traceability — Draft

- Governing source: [[BOM-010]]; source interpretation: [[BOM-010 - Analysis]].
- Engineering use case: [[Import an Engineering Model]]; related logical function: [[Ingest and Reconcile Engineering Sources]].
- Responsible component candidate: [[MDSE Importer]]; related source handling: [[Source Reconciliation Engine]].
- Existing case: [[VER-31121 - BOM-010 Rule Verification]].
- Model integration: typed requirement usage `bom31239` in [[MDSE Toolset Composition]], planned objective-level verification. This is an intent trace, not an implementation `satisfy` relationship.
- Source segment 1 of BOM-010; original ID, SysML block, and Draft status are preserved pending engineering semantic review.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31239 {
    requirement def RuleREQ31239 {
        doc /* Revision strings are stored as exported, not normalized. */
    }
}
```
