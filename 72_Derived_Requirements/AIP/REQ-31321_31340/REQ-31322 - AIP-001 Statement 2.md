---
type: Requirement
subtype: design
id: REQ-31322
uid: 20261022043100322skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: AIP-001
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31322::RuleREQ31322
---
# AIP-001 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The index is in `AI_INSTRUCTIONS.md`.

## Authoritative origin

- [[AIP-001]] — exact source rule and decision origins
- [[AIP-001 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31153 - AIP-001 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Completed AIP navigation and native context — Draft

- Governing policy: [[AIP-001]]; semantic review: [[AIP-001 - Analysis]].
- Planned verification case: [[VER-31153 - AIP-001 Rule Verification]].
- Relevant existing instruction artifact: `99_System/02_AI/AI_INSTRUCTIONS.md` (process index).
- Draft acceptance interpretation: The published AI_INSTRUCTIONS.md process index identifies each registered process and points to its instruction file.
- The governing `AIP` controls AI process behavior. They are **not automatically allocated to Workbench/Core**, and these policy links do not assert a tool implementation or satisfaction.
- [[MDSE Toolset Composition]] now carries this requirement's **typed usage** and a case objective-level verification intent. The canonical definition remains in this note.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31322 {
    requirement def RuleREQ31322 {
        doc /* The index is in `AI_INSTRUCTIONS.md`. */
    }
}
```
