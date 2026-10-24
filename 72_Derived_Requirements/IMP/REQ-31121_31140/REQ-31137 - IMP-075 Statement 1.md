---
type: Requirement
subtype: functional
id: REQ-31137
uid: 20261022043100137skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-075
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31137::RuleREQ31137
---
# IMP-075 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Every change to an existing file is listed in one dated changelog per import run.

## Authoritative origin

- [[IMP-075]] — exact source rule and decision origins
- [[IMP-075 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Query and Traverse Model Relationships]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31071 - IMP-075 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Contextual native trace — Draft

A typed requirement usage named `importChangeLog` is owned by [[MDSE Toolset Composition]]. Its SysML v2 `allocate importChangeLog to ...;` identifies proposed responsibility in [[MDSE Importer]], not satisfaction.

The original rule is [[IMP-075]]. Its generated reference records exact source wording/status/revision; the current normative authority remains MDSE_v2 governance.

See [[MDSE Rule to Requirement - Allocation and Verification]] for the saved Obsidian Canvas. The reusable **definition** below is not duplicated or replaced; the context owns its relationships. Exact grammar validity and runtime Workbench edge resolution remain subject to acceptance testing.

## Draft refinement of stakeholder change trace

This source-backed import-changelog requirement elaborates the change-record aspect of [[Understand Decisions and Changes]] (STK-00010). Its native `#refinement` expresses increased specificity, not satisfaction, approval, or completed testing.

## Granular obligation candidates — not approved

- **IMP-075-A01:** For an import run that changes existing files, produce one dated changelog for the run.
- **IMP-075-A02:** Represent every changed existing file in that run's changelog.

Acceptance must check the changelog identity/date separately from completeness of changed-file coverage. Newly created files are outside this source statement's explicit scope.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31137 {
    requirement def RuleREQ31137 {
        doc /* Every change to an existing file is listed in one dated changelog per import run. */
        #refinement dependency from RuleREQ31137 to MDSE_STK_00010::StakeholderNeed10;
    }
}
```
