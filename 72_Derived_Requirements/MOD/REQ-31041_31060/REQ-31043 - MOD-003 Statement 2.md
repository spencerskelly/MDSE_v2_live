---
type: Requirement
subtype: design
id: REQ-31043
uid: 20261022043100043skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-003
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31043::RuleREQ31043
---
# MOD-003 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Login and display names of one person are one author.

## Authoritative origin

- [[MOD-003]] — exact source rule and decision origins
- [[MOD-003 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Search for a Part, Function or Design]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Search SysML Syntax and Model Properties]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31017 - MOD-003 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Native model trace review — Draft

- Governing source: [[MOD-003]] and [[MOD-003 - Analysis]].
- Existing architecture: [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Relevant operation: [[Add Engineering Knowledge]] and [[Maintain and Improve Model Knowledge]].
- Planned case: [[VER-31017 - MOD-003 Rule Verification]].
- Proposed native typed usage: `mod31043` in [[MDSE Toolset Composition]].
- Draft verification intent only; no implementation satisfaction or execution is claimed.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31043 {
    requirement def RuleREQ31043 {
        doc /* Login and display names of one person are one author. */
    }
}
```
