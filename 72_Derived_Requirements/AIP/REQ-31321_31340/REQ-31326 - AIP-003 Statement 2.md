---
type: Requirement
subtype: design
id: REQ-31326
uid: 20261022043100326skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: AIP-003
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31326::RuleREQ31326
---
# AIP-003 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

It may recommend a split.

## Authoritative origin

- [[AIP-003]] — exact source rule and decision origins
- [[AIP-003 - Analysis]] — clause decomposition and current classification
- Source family: `AIP`; semantic role: AI Behavior Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]
- [[MDSE Workbench]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31155 - AIP-003 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Completed AIP navigation and native context — Draft

- Governing policy: [[AIP-003]]; semantic review: [[AIP-003 - Analysis]].
- Planned verification case: [[VER-31155 - AIP-003 Rule Verification]].
- Relevant existing instruction artifact: AIP-003 original rule: permission only; no missing tool part or action inferred.
- Draft acceptance interpretation: Recommendation of a vault split is permitted but not required; do not use absence of a recommendation as a failed verification.
- The governing `AIP` controls AI process behavior. They are **not automatically allocated to Workbench/Core**, and these policy links do not assert a tool implementation or satisfaction.
- [[MDSE Toolset Composition]] now carries this requirement's **typed usage** and keeps the permission outside mandatory verification objectives. The canonical definition remains in this note.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31326 {
    requirement def RuleREQ31326 {
        doc /* It may recommend a split. */
    }
}
```
