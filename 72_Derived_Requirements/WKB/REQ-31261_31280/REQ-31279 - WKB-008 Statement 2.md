---
type: Requirement
subtype: functional
id: REQ-31279
uid: 20261022043100279skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31279::RuleREQ31279
---
# WKB-008 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Relationship kinds offered depend on the selected note's SysML definition; targets come from a searchable, folder-grouped browser limited to eligible notes.

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

A typed requirement usage named `eligibleEditTargets` is owned by [[MDSE Toolset Composition]]. Its SysML v2 `allocate eligibleEditTargets to ...;` identifies proposed responsibility in [[MDSE Workbench]], not satisfaction.

The original rule is [[WKB-008]]. Its generated reference records exact source wording/status/revision; the current normative authority remains MDSE_v2 governance.

See [[MDSE Rule to Requirement - Allocation and Verification]] for the saved Obsidian Canvas. The reusable **definition** below is not duplicated or replaced; the context owns its relationships. Exact grammar validity and runtime Workbench edge resolution remain subject to acceptance testing.

## Native incoming use-case traces — Draft

[[Add Engineering Knowledge]] and [[Correct or Complete Knowledge]] now carry native scenario `dependency` references to this reusable requirement definition, based on their relationship-edit and target-selection steps. The owning use-case blocks contain the actual dependencies. The requirement remains `Draft` / `semanticReview: pending` and its existing [[VER-31137 - WKB-008 Rule Verification]] coverage has not been executed.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31279 {
    requirement def RuleREQ31279 {
        doc /* Relationship kinds offered depend on the selected note's SysML definition; targets come from a searchable, folder-grouped browser limited to eligible notes. */
    }
}
```
