---
type: Requirement
subtype: design
id: REQ-31041
uid: 20261022043100041skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-002
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31041::RuleREQ31041
---
# MOD-002 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Author code is 13 characters: last name then first name, lowercase letters only, truncated to 13, padded right with hyphens.

## Authoritative origin

- [[MOD-002]] — exact source rule and decision origins
- [[MOD-002 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- One preliminary segment; its atomicity is not yet established.

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

- Proposed case: [[VER-31016 - MOD-002 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Native model trace review — Draft

- Governing source: [[MOD-002]] and [[MOD-002 - Analysis]].
- Existing architecture: [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Relevant operation: [[Add Engineering Knowledge]] and [[Maintain and Improve Model Knowledge]].
- Planned case: [[VER-31016 - MOD-002 Rule Verification]].
- Proposed native typed usage: `mod31041` in [[MDSE Toolset Composition]].
- Draft verification intent only; no implementation satisfaction or execution is claimed.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31041 {
    requirement def RuleREQ31041 {
        doc /* Author code is 13 characters: last name then first name, lowercase letters only, truncated to 13, padded right with hyphens. */
    }
}
```
