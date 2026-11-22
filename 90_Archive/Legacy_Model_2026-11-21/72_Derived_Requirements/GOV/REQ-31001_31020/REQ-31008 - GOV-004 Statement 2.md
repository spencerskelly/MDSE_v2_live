---
type: Requirement
subtype: engineering
id: REQ-31008
uid: 20261022043100008skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: GOV-004
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31008::RuleREQ31008
---
# GOV-004 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Decisions that create, change or retire a rule are recorded in `governance/DECISIONS.md` and name the rule they change.

## Authoritative origin

- [[GOV-004]] — exact source rule and decision origins
- [[GOV-004 - Analysis]] — clause decomposition and current classification
- Source family: `GOV`; semantic role: Governance / Process Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]
- [[MDSE Base Vault]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31004 - GOV-004 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Governance trace — Draft

- Source: [[GOV-004]] and [[GOV-004 - Analysis]].
- Relevant model context: [[MDSE Toolset Composition]]. This rule constrains engineering process or tooling ownership and is not automatically an allocated runtime capability.
- Verification case: [[VER-31004 - GOV-004 Rule Verification]].
- Native typed integration usage: `gov31008` in [[MDSE Toolset Composition]]; normative requirement draft objective pending test execution.
- Original source clause 2; no semantic approval, parser certification or executed test claimed.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31008 {
    requirement def RuleREQ31008 {
        doc /* Decisions that create, change or retire a rule are recorded in `governance/DECISIONS.md` and name the rule they change. */
    }
}
```
