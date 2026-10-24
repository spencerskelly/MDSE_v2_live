---
type: Requirement
subtype: functional
id: REQ-31186
uid: 20261022043100186skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-107
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31186::RuleREQ31186
---
# IMP-107 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

A Part inside an action definition that points (PDATA1) at an action definition is an `action name : Target;` there; inside a state definition pointing at a state definition it is a `state name : Target;`. (V1 W-137, REG-113; D-0037)

## Authoritative origin

- [[IMP-107]] — exact source rule and decision origins
- [[IMP-107 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

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

- Proposed case: [[VER-31097 - IMP-107 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer source-to-model trace — Draft

- Origin: [[IMP-107]]; interpretation: [[IMP-107 - Analysis]].
- Operational context: [[Import an Engineering Model]], [[Ingest and Reconcile Engineering Sources]].
- Tool context: [[MDSE Importer]], [[Source Reconciliation Engine]], [[Managed Vault Update]].
- Planned case: [[VER-31097 - IMP-107 Rule Verification]].
- Typed requirement usage `imp31186` in [[MDSE Toolset Composition]]; independent test, grammar and satisfaction remain unproven.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31186 {
    requirement def RuleREQ31186 {
        doc /* A Part inside an action definition that points (PDATA1) at an action definition is an `action name : Target;` there; inside a state definition pointing at a state definition it is a `state name : Target;`. (V1 W-137, REG-113; D-0037) */
    }
}
```
