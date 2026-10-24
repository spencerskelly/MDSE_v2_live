---
type: Requirement
subtype: design
id: REQ-31086
uid: 20261022043100086skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-031
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31086::RuleREQ31086
---
# MOD-031 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Hand-made class templates end with ## Notes, ## Aliases and ## Former ids, in that order (modelCheck excepted).

## Authoritative origin

- [[MOD-031]] — exact source rule and decision origins
- [[MOD-031 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Compose Documentation from Embedded Notes]]
- [[Search for a Part, Function or Design]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Discover and Resolve Model Elements]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31043 - MOD-031 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD model trace — Draft

- Governing rule [[MOD-031]]; analysis [[MOD-031 - Analysis]].
- Use cases [[Add Engineering Knowledge]] and [[Import an Engineering Model]]; functions [[Maintain and Improve Model Knowledge]] and [[Ingest and Reconcile Engineering Sources]].
- Architecture context [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Existing verification [[VER-31043 - MOD-031 Rule Verification]].
- Native usage `mod31086` in [[MDSE Toolset Composition]]; **semantic hold**: legacy note/schema/EA format requires v2 reconciliation before mandatory verification.
- No satisfaction, executed result, or independent parser certification is asserted.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31086 {
    requirement def RuleREQ31086 {
        doc /* Hand-made class templates end with ## Notes, ## Aliases and ## Former ids, in that order (modelCheck excepted). */
    }
}
```
