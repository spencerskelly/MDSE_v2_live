---
type: Requirement
subtype: design
id: REQ-31031
uid: 20261022043100031skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: DAT-001
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31031::RuleREQ31031
---
# DAT-001 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

> [!flagNote] Step 03 — governance reconciliation (D-0066)
> DAT-001 was rewritten; its original public Test_Vault_ privacy restriction is now generalized to public MDSE repos. This original candidate must be reviewed against the rewritten current rule before promotion; do not automatically approve its unchanged wording. `sourceRuleStatus: Active` describes the pinned source snapshot. The original requirement definition and its Draft status are preserved; no new `verify`, `satisfy` or `allocate` relation is asserted. See [[STEP_03_ACTIVE_GOVERNANCE_RECONCILIATION_2026-10-24]].

## Candidate obligation

Safety: QEAX, BOM originals, private ledgers, EA identifiers and generated real model content stay out of public Test_Vault_.

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
- Native typed usage: `dat31031` in [[MDSE Toolset Composition]]. Draft objective-level verification intent.
- Acceptance interpretation: No private QEAX, BOM original, ledger, source EA identity, or real source-model content enters the public tooling repository.
- Preserve source, definition and Draft status; no satisfaction, executed result, or parser certification is asserted.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31031 {
    requirement def RuleREQ31031 {
        doc /* Safety: QEAX, BOM originals, private ledgers, EA identifiers and generated real model content stay out of public Test_Vault_. */
    }
}
```
