---
type: Requirement
subtype: functional
id: REQ-31280
uid: 20261022043100280skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: 3
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31280::RuleREQ31280
---
# WKB-008 — Candidate Requirement 3

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Structure and links are written into the source note's `## SysML v2` block

## Authoritative origin

- [[WKB-008]] — exact source rule and decision origins
- [[WKB-008 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31137 - WKB-008 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Contextual native trace — Draft

[[MDSE Toolset Composition]] now owns the typed usage `authoritativeSysmlWrite`, allocated to the `workbench` usage and included in the existing [[VER-31137 - WKB-008 Rule Verification]] objective. [[Add Engineering Knowledge]] and [[Correct or Complete Knowledge]] own draft dependencies to this requirement.

This candidate elaborates [[One Trustworthy Model]] by specifying that native structure and links are persisted in the note's single authoritative SysML v2 block. The requirement is not a proof that every graph-edit transaction round-trips correctly. Parser, persistence, undo and runtime validation remain open.
## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31280 {
    requirement def RuleREQ31280 {
        doc /* Structure and links are written into the source note's `## SysML v2` block */
        #refinement dependency from RuleREQ31280 to MDSE_STK_00002::StakeholderNeed02;
    }
}
```
