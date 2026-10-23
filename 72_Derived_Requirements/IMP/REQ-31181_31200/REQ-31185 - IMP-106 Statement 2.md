---
type: Requirement
subtype: functional
id: REQ-31185
uid: 20261022043100185skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-106
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31185::RuleREQ31185
---
# IMP-106 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

It merges, with one hop and never up the redefinition chain: (1) PDATA3 names a Port owned by the Part's block; (2) else the block has exactly one port with the same non-blank name; (3) else it is added to the block as a port of its own, flagged for review, and same-named ones on one block combine. A Part with no block defers the Port (`USAGE_WITHOUT_NOTE_OWNER`). A merged Port types an untyped block port from its PDATA1. (V1 W-114, W-130; D-0037)

## Authoritative origin

- [[IMP-106]] — exact source rule and decision origins
- [[IMP-106 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

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

- Proposed case: [[VER-31096 - IMP-106 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31185 {
    requirement def RuleREQ31185 {
        doc /* It merges, with one hop and never up the redefinition chain: (1) PDATA3 names a Port owned by the Part's block; (2) else the block has exactly one port with the same non-blank name; (3) else it is added to the block as a port of its own, flagged for review, and same-named ones on one block combine. A Part with no block defers the Port (`USAGE_WITHOUT_NOTE_OWNER`). A merged Port types an untyped block port from its PDATA1. (V1 W-114, W-130; D-0037) */
    }
}
```
