---
type: Requirement
subtype: design
id: REQ-31047
uid: 20261022043100047skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-005
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31047::RuleREQ31047
---
# MOD-005 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

An id is never reused.

## Authoritative origin

- [[MOD-005]] — exact source rule and decision origins
- [[MOD-005 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
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

- Proposed case: [[VER-31019 - MOD-005 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Cross-note model trace — Draft

- Source: [[MOD-005]] and [[MOD-005 - Analysis]].
- Architecture: [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Relevant use case [[Add Engineering Knowledge]] and function [[Maintain and Improve Model Knowledge]].
- Verification case [[VER-31019 - MOD-005 Rule Verification]].
- Typed model usage `mod31047` is recorded in [[MDSE Toolset Composition]]; original `requirement def` here remains authoritative.
- Source statement remains Draft pending explicit acceptance and execution.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31047 {
    requirement def RuleREQ31047 {
        doc /* An id is never reused. */
    }
}
```
