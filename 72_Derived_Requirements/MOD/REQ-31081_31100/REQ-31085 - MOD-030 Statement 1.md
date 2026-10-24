---
type: Requirement
subtype: design
id: REQ-31085
uid: 20261022043100085skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-030
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31085::RuleREQ31085
---
# MOD-030 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Notes in 99_System carry no type or subtype but keep id, uid and status.

## Authoritative origin

- [[MOD-030]] — exact source rule and decision origins
- [[MOD-030 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Compose Documentation from Embedded Notes]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31042 - MOD-030 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD model trace — Draft

- Governing rule [[MOD-030]]; analysis [[MOD-030 - Analysis]].
- Use cases [[Add Engineering Knowledge]] and [[Import an Engineering Model]]; functions [[Maintain and Improve Model Knowledge]] and [[Ingest and Reconcile Engineering Sources]].
- Architecture context [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Existing verification [[VER-31042 - MOD-030 Rule Verification]].
- Native usage `mod31085` in [[MDSE Toolset Composition]]; **semantic hold**: legacy note/schema/EA format requires v2 reconciliation before mandatory verification.
- No satisfaction, executed result, or independent parser certification is asserted.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31085 {
    requirement def RuleREQ31085 {
        doc /* Notes in 99_System carry no type or subtype but keep id, uid and status. */
    }
}
```
