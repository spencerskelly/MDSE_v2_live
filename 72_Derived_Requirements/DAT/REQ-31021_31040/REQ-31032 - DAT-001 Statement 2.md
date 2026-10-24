---
type: Requirement
subtype: design
id: REQ-31032
uid: 20261022043100032skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: DAT-001
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31032::RuleREQ31032
---
# DAT-001 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Never claim native certification from source normalization or parser-only syntax acceptance.

## Authoritative origin

- [[DAT-001]] — exact source rule and decision origins
- [[DAT-001 - Analysis]] — clause decomposition and current classification
- Source family: `DAT`; semantic role: Data Protection Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[View and Export Engineering Information]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Compose and Exchange Engineering Knowledge]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Workbench]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31013 - DAT-001 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Data governance trace — Draft

- Governing rule: [[DAT-001]]; semantic analysis: [[DAT-001 - Analysis]].
- Stakeholder: [[Protect Engineering Data]]; supporting use case: [[Import an Engineering Model]].
- Responsible review context: [[MDSE Importer]], [[MDSE Core]]. Repository publication restrictions also govern developer release processes, not necessarily runtime implementation allocations.
- Reusable case: [[VER-31013 - DAT-001 Rule Verification]].
- Native typed usage: `dat31032` in [[MDSE Toolset Composition]]. Draft objective-level verification intent.
- Acceptance interpretation: Native language certification claims must distinguish source normalization, syntax parsing, complete semantic validation, and actual test execution.
- Preserve source, definition and Draft status; no satisfaction, executed result, or parser certification is asserted.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31032 {
    requirement def RuleREQ31032 {
        doc /* Never claim native certification from source normalization or parser-only syntax acceptance. */
    }
}
```
