---
type: Requirement
subtype: design
id: REQ-31068
uid: 20261022043100068skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-019
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31068::RuleREQ31068
---
# MOD-019 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Every model note has an immutable 30-character `uid` in the form `yyyyMMddHHmmssSSS` plus a 13-character author code.

## Authoritative origin

- [[MOD-019]] — exact source rule and decision origins
- [[MOD-019 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Search for a Part, Function or Design]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31032 - MOD-019 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD source and model trace — Draft

- Source rule: [[MOD-019]] and [[MOD-019 - Analysis]].
- Use cases: [[Import an Engineering Model]] and [[Add Engineering Knowledge]].
- Logical functions: [[Ingest and Reconcile Engineering Sources]] and [[Maintain and Improve Model Knowledge]].
- Component candidates: [[MDSE Core]], [[Model Identity Lookup]], [[Note and SysML Codec]].
- Verification case: [[VER-31032 - MOD-019 Rule Verification]].
- Native typed usage: `mod31068` in [[MDSE Toolset Composition]], pending engineer review; no satisfaction or executed verification.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31068 {
    requirement def RuleREQ31068 {
        doc /* Every model note has an immutable 30-character `uid` in the form `yyyyMMddHHmmssSSS` plus a 13-character author code. */
    }
}
```
