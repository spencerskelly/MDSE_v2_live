---
type: Requirement
subtype: design
id: REQ-31056
uid: 20261022043100056skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-013
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31056::RuleREQ31056
---
# MOD-013 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Translated notes carry the original EA creation time and author in uid.

## Authoritative origin

- [[MOD-013]] — exact source rule and decision origins
- [[MOD-013 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31026 - MOD-013 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Cross-note model trace — Draft

- Source: [[MOD-013]] and [[MOD-013 - Analysis]].
- Architecture: [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Relevant use case [[Add Engineering Knowledge]] and function [[Maintain and Improve Model Knowledge]].
- Verification case [[VER-31026 - MOD-013 Rule Verification]].
- Typed model usage `mod31056` is recorded in [[MDSE Toolset Composition]]; original `requirement def` here remains authoritative.
- Source statement remains Draft pending explicit acceptance and execution.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31056 {
    requirement def RuleREQ31056 {
        doc /* Translated notes carry the original EA creation time and author in uid. */
    }
}
```
