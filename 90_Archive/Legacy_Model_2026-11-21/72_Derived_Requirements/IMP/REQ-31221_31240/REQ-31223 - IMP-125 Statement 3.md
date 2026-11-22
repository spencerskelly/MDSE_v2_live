---
type: Requirement
subtype: functional
id: REQ-31223
uid: 20261022043100223skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-125
sourceRuleStatus: Active
sourceRuleClause: 3
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31223::RuleREQ31223
---
# IMP-125 — Candidate Requirement 3

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

REVIEW: rows that would be skipped, conflicts with edits in the vault, BOM parts that differ from the vault, more than 10% of elements deferred, or over 50 BOM warnings.

## Authoritative origin

- [[IMP-125]] — exact source rule and decision origins
- [[IMP-125 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 6 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Search for a Part, Function or Design]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Query and Traverse Model Relationships]]
- [[Discover and Resolve Model Elements]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31114 - IMP-125 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Source and verification links — Draft

- Rule [[IMP-125]]; analysis [[IMP-125 - Analysis]].
- Use case [[Import an Engineering Model]]; function [[Ingest and Reconcile Engineering Sources]].
- Tool [[MDSE Importer]]; components [[Source Reconciliation Engine]], [[Managed Vault Update]].
- Verification [[VER-31114 - IMP-125 Rule Verification]].
- Native context usage `imp31223` in [[MDSE Toolset Composition]]; no approved execution or satisfaction.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31223 {
    requirement def RuleREQ31223 {
        doc /* REVIEW: rows that would be skipped, conflicts with edits in the vault, BOM parts that differ from the vault, more than 10% of elements deferred, or over 50 BOM warnings. */
    }
}
```
