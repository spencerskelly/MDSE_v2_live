---
type: Requirement
subtype: functional
id: REQ-31158
uid: 20261022043100158skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-094
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31158::RuleREQ31158
---
# IMP-094 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

`## Source: EA` carries one EA GUID, the note's own, as the re-import identity.

## Authoritative origin

- [[IMP-094]] — exact source rule and decision origins
- [[IMP-094 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31084 - IMP-094 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer cross-note trace — Draft

- Governing source: [[IMP-094]]; interpretation: [[IMP-094 - Analysis]].
- Use case: [[Import an Engineering Model]]; function: [[Ingest and Reconcile Engineering Sources]].
- Architecture: [[MDSE Importer]], [[Source Reconciliation Engine]], [[Managed Vault Update]].
- Verification: [[VER-31084 - IMP-094 Rule Verification]].
- Native typed integration `imp31158` planned in [[MDSE Toolset Composition]]. Draft intent, not test execution, independent parse or satisfaction.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31158 {
    requirement def RuleREQ31158 {
        doc /* `## Source: EA` carries one EA GUID, the note's own, as the re-import identity. */
    }
}
```
