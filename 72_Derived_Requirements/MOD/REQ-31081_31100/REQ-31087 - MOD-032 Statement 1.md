---
type: Requirement
subtype: design
id: REQ-31087
uid: 20261022043100087skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-032
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31087::RuleREQ31087
---
# MOD-032 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Every property has its own definition note: what it is, how determined, what it impacts.

## Authoritative origin

- [[MOD-032]] — exact source rule and decision origins
- [[MOD-032 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

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

- Proposed case: [[VER-31044 - MOD-032 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31087 {
    requirement def RuleREQ31087 {
        doc /* Every property has its own definition note: what it is, how determined, what it impacts. */
    }
}
```
