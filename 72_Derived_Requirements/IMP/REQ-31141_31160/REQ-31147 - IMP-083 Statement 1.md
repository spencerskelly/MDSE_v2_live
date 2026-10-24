---
type: Requirement
subtype: functional
id: REQ-31147
uid: 20261022043100147skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-083
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31147::RuleREQ31147
---
# IMP-083 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

A conflict is content that contradicts existing YAML, v2, or body content and is not approved for change.

## Authoritative origin

- [[IMP-083]] — exact source rule and decision origins
- [[IMP-083 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P2`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31078 - IMP-083 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Cross-model trace — Importer (Draft)

- Source: [[IMP-083]] and [[IMP-083 - Analysis]].
- Use case: [[Import an Engineering Model]]; function: [[Ingest and Reconcile Engineering Sources]].
- Architecture: [[MDSE Importer]], [[Source Reconciliation Engine]] and [[Managed Vault Update]].
- Verification: [[VER-31078 - IMP-083 Rule Verification]].
- Native typed integration: `imp31141` in [[MDSE Toolset Composition]], draft objective intent; original definition remains here. Source clause 1.
- No executed verification, satisfaction or independent parser certification is asserted.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31147 {
    requirement def RuleREQ31147 {
        doc /* A conflict is content that contradicts existing YAML, v2, or body content and is not approved for change. */
    }
}
```
