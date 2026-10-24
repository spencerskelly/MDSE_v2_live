---
type: Requirement
subtype: functional
id: REQ-31138
uid: 20261022043100138skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-075
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31138::RuleREQ31138
---
# IMP-075 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Each entry links the changed file, describes the change, and flags any conflict.

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

## Draft refinement of stakeholder change trace

A reviewable import changelog entry must identify the changed file, describe the change, and flag conflicts. This requirement elaborates the same [[Understand Decisions and Changes]] need as IMP-075 clause 1, but remains a distinct candidate for clause-level verification.

## Granular obligation candidates — not approved

- **IMP-075-A03:** Each change entry identifies/links the changed file.
- **IMP-075-A04:** Each change entry describes the change.
- **IMP-075-A05:** Each change entry flags a conflict when a conflict occurs.

Acceptance must separately check link resolution, meaningful change description and a conflicting change. Whether an explicit no-conflict marker is needed is an open design choice, not an existing source requirement.

## Cross-model trace — Importer (Draft)

- Source: [[IMP-075]] and [[IMP-075 - Analysis]].
- Use case: [[Import an Engineering Model]]; function: [[Ingest and Reconcile Engineering Sources]].
- Architecture: [[MDSE Importer]], [[Source Reconciliation Engine]] and [[Managed Vault Update]].
- Verification: [[VER-31071 - IMP-075 Rule Verification]].
- Native typed integration: `importChangeLogEntry` in [[MDSE Toolset Composition]], draft objective intent; original definition in this note. Source clause 2 remains Draft.
- No independent parser/verification or satisfaction assertion.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31138 {
    requirement def RuleREQ31138 {
        doc /* Each entry links the changed file, describes the change, and flags any conflict. */
        #refinement dependency from RuleREQ31138 to MDSE_STK_00010::StakeholderNeed10;
    }
}
```
