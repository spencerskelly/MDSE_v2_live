---
type: Requirement
subtype: functional
id: REQ-31150
uid: 20261022043100150skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-084
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31150::RuleREQ31150
---
# IMP-084 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

An engineer resolves a conflict by approving a change or by selecting the correct data by hand.

## Authoritative origin

- [[IMP-084]] — exact source rule and decision origins
- [[IMP-084 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P2`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31079 - IMP-084 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Cross-model trace — Importer (Draft)

- Source: [[IMP-084]] and [[IMP-084 - Analysis]].
- Use case: [[Import an Engineering Model]]; function: [[Ingest and Reconcile Engineering Sources]].
- Architecture: [[MDSE Importer]], [[Source Reconciliation Engine]] and [[Managed Vault Update]].
- Verification: [[VER-31079 - IMP-084 Rule Verification]].
- Native typed integration: `imp31141` in [[MDSE Toolset Composition]], draft objective intent; original definition remains here. Source clause 1.
- No executed verification, satisfaction or independent parser certification is asserted.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31150 {
    requirement def RuleREQ31150 {
        doc /* An engineer resolves a conflict by approving a change or by selecting the correct data by hand. */
    }
}
```
