---
type: Requirement
subtype: functional
id: REQ-31251
uid: 20261022043100251skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: BOM-016
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31251::RuleREQ31251
---
# BOM-016 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The parent's block owns one part usage per line: whole-number counts with unit ea/piece become multiplicity; any other quantity is `quantity` plus the unit as written (case kept); line, pinned `childRevision`, reference designator, effectivity dates, SSC and notes are attributes.

## Authoritative origin

- [[BOM-016]] — exact source rule and decision origins
- [[BOM-016 - Analysis]] — clause decomposition and current classification
- Source family: `BOM`; semantic role: BOM Functional Requirement; source phase `P2`
- This is one of 5 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31127 - BOM-016 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31251 {
    requirement def RuleREQ31251 {
        doc /* The parent's block owns one part usage per line: whole-number counts with unit ea/piece become multiplicity; any other quantity is `quantity` plus the unit as written (case kept); line, pinned `childRevision`, reference designator, effectivity dates, SSC and notes are attributes. */
    }
}
```
