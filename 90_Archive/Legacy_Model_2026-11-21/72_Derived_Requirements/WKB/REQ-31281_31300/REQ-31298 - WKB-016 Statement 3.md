---
type: Requirement
subtype: functional
id: REQ-31298
uid: 20261022043100298skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-016
sourceRuleStatus: Active
sourceRuleClause: 3
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31298::RuleREQ31298
---
# WKB-016 — Candidate Requirement 3

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

After an apply or an undo the Edit lens redraws its lists from the new index without discarding a form being filled.

## Authoritative origin

- [[WKB-016]] — exact source rule and decision origins
- [[WKB-016 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Complete Product Context]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31145 - WKB-016 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Native contextual trace — Draft

[[MDSE Toolset Composition]] contains a typed `requirement refreshEditIndex : MDSE_REQ_31298::RuleREQ31298` usage allocated to the `workbench` part usage. The existing [[VER-31145 - WKB-016 Rule Verification]] case is reused through a contextual verification objective. Its use-case dependency is owned by [[Correct or Complete Knowledge]].

Apply/undo refreshes indexed relationship information without destroying an in-progress edit form. This remains a **Draft candidate** and is not evidence of a passed test, `satisfy`, or independently certified SysML syntax.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31298 {
    requirement def RuleREQ31298 {
        doc /* After an apply or an undo the Edit lens redraws its lists from the new index without discarding a form being filled. */
    }
}
```
