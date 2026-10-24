---
type: Requirement
subtype: design
id: REQ-31090
uid: 20261022043100090skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-034
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31090::RuleREQ31090
---
# MOD-034 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

EA GUID line is first; other kept EA values go below it, one per line.

## Authoritative origin

- [[MOD-034]] — exact source rule and decision origins
- [[MOD-034 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31046 - MOD-034 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD model trace — Draft

- Original rule [[MOD-034]] and [[MOD-034 - Analysis]].
- [[Add Engineering Knowledge]], [[Import an Engineering Model]]; [[Maintain and Improve Model Knowledge]], [[Ingest and Reconcile Engineering Sources]].
- [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Existing case [[VER-31046 - MOD-034 Rule Verification]].
- Typed native usage `mod31090` in [[MDSE Toolset Composition]]; **hold from positive verification** pending current-v2 semantic reconciliation.
- Source preserved and execution unproven.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31090 {
    requirement def RuleREQ31090 {
        doc /* EA GUID line is first; other kept EA values go below it, one per line. */
    }
}
```
