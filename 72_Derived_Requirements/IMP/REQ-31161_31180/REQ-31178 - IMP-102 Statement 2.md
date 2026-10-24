---
type: Requirement
subtype: functional
id: REQ-31178
uid: 20261022043100178skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-102
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31178::RuleREQ31178
---
# IMP-102 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The page checks every path before writing anything and lists any that would fail; a write error names its path.

## Authoritative origin

- [[IMP-102]] — exact source rule and decision origins
- [[IMP-102 - Analysis]] — clause decomposition and current classification
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

- Proposed case: [[VER-31092 - IMP-102 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer source-to-model trace — Draft

- [[IMP-102]] and [[IMP-102 - Analysis]] preserve source and interpretation.
- [[Import an Engineering Model]] and [[Ingest and Reconcile Engineering Sources]] identify intended scenario and function.
- [[MDSE Importer]], [[Source Reconciliation Engine]], and [[Managed Vault Update]] provide architecture context.
- [[VER-31092 - IMP-102 Rule Verification]] defines planned verification; `imp31178` is typed in [[MDSE Toolset Composition]].
- Draft modeling intent only; no satisfaction, parser acceptance or executed verification.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31178 {
    requirement def RuleREQ31178 {
        doc /* The page checks every path before writing anything and lists any that would fail; a write error names its path. */
    }
}
```
