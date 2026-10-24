---
type: Requirement
subtype: functional
id: REQ-31165
uid: 20261022043100165skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-097
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31165::RuleREQ31165
---
# IMP-097 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

A requirement's wording is the `doc /* … */` of its `requirement def` (EA Note plus `text` tags), and is not repeated in the note body.

## Authoritative origin

- [[IMP-097]] — exact source rule and decision origins
- [[IMP-097 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Search for a Part, Function or Design]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Discover and Resolve Model Elements]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31087 - IMP-097 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer source-to-model trace — Draft

- [[IMP-097]] → [[IMP-097 - Analysis]] → this requirement.
- Engineering scenario [[Import an Engineering Model]]; function [[Ingest and Reconcile Engineering Sources]].
- Architecture [[MDSE Importer]], [[Source Reconciliation Engine]], [[Managed Vault Update]].
- Verification intent [[VER-31087 - IMP-097 Rule Verification]].
- Native typed usage `imp31165` in [[MDSE Toolset Composition]]. No asserted implementation, parser acceptance, or executed verification.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31165 {
    requirement def RuleREQ31165 {
        doc /* A requirement's wording is the `doc /* … * /` of its `requirement def` (EA Note plus `text` tags), and is not repeated in the note body. */
    }
}
```
