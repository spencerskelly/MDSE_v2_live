---
type: Requirement
subtype: functional
id: REQ-31139
uid: 20261022043100139skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-076
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31139::RuleREQ31139
---
# IMP-076 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Importing the same input again produces no changes and no changelog entries.

## Authoritative origin

- [[IMP-076]] — exact source rule and decision origins
- [[IMP-076 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

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

- Proposed case: [[VER-31072 - IMP-076 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Contextual native trace — Draft

A typed requirement usage named `repeatImport` is owned by [[MDSE Toolset Composition]]. Its SysML v2 `allocate repeatImport to ...;` identifies proposed responsibility in [[MDSE Importer]], not satisfaction.

The original rule is [[IMP-076]]. Its generated reference records exact source wording/status/revision; the current normative authority remains MDSE_v2 governance.

See [[MDSE Rule to Requirement - Allocation and Verification]] for the saved Obsidian Canvas. The reusable **definition** below is not duplicated or replaced; the context owns its relationships. Exact grammar validity and runtime Workbench edge resolution remain subject to acceptance testing.

## Draft refinement of protected changes

No-op repeated import is a narrow safeguard within [[Protect Engineer Changes]] (STK-00004). It does **not** establish that arbitrary changed-source re-imports preserve accepted edits, and it is not evidence of successful merge protection.

## Cross-model trace — Importer (Draft)

- Source: [[IMP-076]] and [[IMP-076 - Analysis]].
- Use case: [[Import an Engineering Model]]; function: [[Ingest and Reconcile Engineering Sources]].
- Architecture: [[MDSE Importer]], [[Source Reconciliation Engine]] and [[Managed Vault Update]].
- Verification: [[VER-31072 - IMP-076 Rule Verification]].
- Native typed integration: `repeatImport` in [[MDSE Toolset Composition]], draft objective intent; original definition in this note. Source clause 1 remains Draft.
- No independent parser/verification or satisfaction assertion.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31139 {
    requirement def RuleREQ31139 {
        doc /* Importing the same input again produces no changes and no changelog entries. */
        #refinement dependency from RuleREQ31139 to MDSE_STK_00004::StakeholderNeed04;
    }
}
```
