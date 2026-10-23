---
type: Requirement
subtype: functional
id: REQ-31311
uid: 20261022043100311skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-022
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31311::RuleREQ31311
---
# WKB-022 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Structure shows parts only.

## Authoritative origin

- [[WKB-022]] — exact source rule and decision origins
- [[WKB-022 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 7 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31151 - WKB-022 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31311 {
    requirement def RuleREQ31311 {
        doc /* Structure shows parts only. */
    }
}
```
