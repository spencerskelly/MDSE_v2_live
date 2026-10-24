---
type: Requirement
subtype: functional
id: REQ-31228
uid: 20261022043100228skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-126
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31228::RuleREQ31228
---
# IMP-126 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Updating the toolset during the import is a choice: ticked by default only when the importer is newer, unticked when the vault is newer, forced on for a new vault.

## Authoritative origin

- [[IMP-126]] — exact source rule and decision origins
- [[IMP-126 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 4 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31115 - IMP-126 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Source and verification links — Draft

- [[IMP-126]]; [[IMP-126 - Analysis]].
- [[Import an Engineering Model]]; [[Ingest and Reconcile Engineering Sources]].
- [[MDSE Importer]]; [[Source Reconciliation Engine]]; [[Managed Vault Update]].
- [[VER-31115 - IMP-126 Rule Verification]].
- Typed usage `imp31228` in [[MDSE Toolset Composition]]. Original clause 2 remains Draft and needs objective-specific acceptance.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31228 {
    requirement def RuleREQ31228 {
        doc /* Updating the toolset during the import is a choice: ticked by default only when the importer is newer, unticked when the vault is newer, forced on for a new vault. */
    }
}
```
