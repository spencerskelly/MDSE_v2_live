---
type: Requirement
subtype: design
id: REQ-31062
uid: 20261022043100062skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-017
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31062::RuleREQ31062
---
# MOD-017 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Standard requirements take STD-#####; stakeholder requirements take STK-#####; other Requirement subtypes keep REQ-#####.

## Authoritative origin

- [[MOD-017]] — exact source rule and decision origins
- [[MOD-017 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `P1`
- This is one of 4 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Search for a Part, Function or Design]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Search SysML Syntax and Model Properties]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31030 - MOD-017 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD source and model trace — Draft

- Source rule: [[MOD-017]]; interpretation: [[MOD-017 - Analysis]].
- Use cases: [[Import an Engineering Model]] and [[Add Engineering Knowledge]].
- Functions: [[Ingest and Reconcile Engineering Sources]] and [[Maintain and Improve Model Knowledge]].
- Architecture: [[MDSE Core]], [[Model Identity Lookup]], [[Note and SysML Codec]]; author registration may involve [[MDSE Bootstrap]].
- Intended case: [[VER-31030 - MOD-017 Rule Verification]].
- Native typed usage: `mod31062` in [[MDSE Toolset Composition]]; responsibility and verification remain Draft.
- Source statement is Draft; no verified implementation is inferred.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31062 {
    requirement def RuleREQ31062 {
        doc /* Standard requirements take STD-#####; stakeholder requirements take STK-#####; other Requirement subtypes keep REQ-#####. */
    }
}
```
