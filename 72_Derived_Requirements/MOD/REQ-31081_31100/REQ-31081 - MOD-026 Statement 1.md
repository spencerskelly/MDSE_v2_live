---
type: Requirement
subtype: design
id: REQ-31081
uid: 20261022043100081skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-026
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31081::RuleREQ31081
---
# MOD-026 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The old eaGUID appears only at the bottom of the note body, for traceability.

## Authoritative origin

- [[MOD-026]] — exact source rule and decision origins
- [[MOD-026 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Compose Documentation from Embedded Notes]]
- [[Search SysML Syntax and Model Properties]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31039 - MOD-026 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31081 {
    requirement def RuleREQ31081 {
        doc /* The old eaGUID appears only at the bottom of the note body, for traceability. */
    }
}
```
