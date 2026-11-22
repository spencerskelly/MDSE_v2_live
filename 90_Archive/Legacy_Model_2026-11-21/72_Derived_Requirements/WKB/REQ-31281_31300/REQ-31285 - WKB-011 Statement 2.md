---
type: Requirement
subtype: functional
id: REQ-31285
uid: 20261022043100285skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-011
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31285::RuleREQ31285
---
# WKB-011 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The kinds that can be changed are those the Edit lens can add; any other member can only be removed or edited in the note.

## Authoritative origin

- [[WKB-011]] — exact source rule and decision origins
- [[WKB-011 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Correct or Complete Knowledge]]
- [[Visualize Relationships by Viewpoint]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31140 - WKB-011 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31285 {
    requirement def RuleREQ31285 {
        doc /* The kinds that can be changed are those the Edit lens can add; any other member can only be removed or edited in the note. */
    }
}
```
