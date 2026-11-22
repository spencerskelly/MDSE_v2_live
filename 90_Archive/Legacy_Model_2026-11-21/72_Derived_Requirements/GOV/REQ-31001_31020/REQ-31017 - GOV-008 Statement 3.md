---
type: Requirement
subtype: engineering
id: REQ-31017
uid: 20261022043100017skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: GOV-008
sourceRuleStatus: Active
sourceRuleClause: 3
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31017::RuleREQ31017
---
# GOV-008 — Candidate Requirement 3

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

CSV files only defined the rules.

## Authoritative origin

- [[GOV-008]] — exact source rule and decision origins
- [[GOV-008 - Analysis]] — clause decomposition and current classification
- Source family: `GOV`; semantic role: Governance / Process Constraint; source phase `Standing`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]
- [[MDSE Base Vault]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31008 - GOV-008 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Governance source-to-model trace — Draft

- Original rule: [[GOV-008]]; semantic analysis: [[GOV-008 - Analysis]].
- Model responsibility context: [[MDSE Importer]] and [[MDSE Core]].
- Reusable verification case: [[VER-31008 - GOV-008 Rule Verification]].
- Typed usage `gov31017` in [[MDSE Toolset Composition]]; Draft objective-level verification intent, not execution.
- Clause 3 is preserved verbatim in the original definition.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31017 {
    requirement def RuleREQ31017 {
        doc /* CSV files only defined the rules. */
    }
}
```
