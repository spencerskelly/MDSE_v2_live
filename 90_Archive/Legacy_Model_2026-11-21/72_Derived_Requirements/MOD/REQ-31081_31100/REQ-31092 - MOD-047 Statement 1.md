---
type: Requirement
subtype: design
id: REQ-31092
uid: 20261022043100092skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-047
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31092::RuleREQ31092
---
# MOD-047 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Template fields are always present in a note.

## Authoritative origin

- [[MOD-047]] — exact source rule and decision origins
- [[MOD-047 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Compose Documentation from Embedded Notes]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31047 - MOD-047 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD model trace — Draft

- Original rule [[MOD-047]] and [[MOD-047 - Analysis]].
- [[Add Engineering Knowledge]], [[Import an Engineering Model]]; [[Maintain and Improve Model Knowledge]], [[Ingest and Reconcile Engineering Sources]].
- [[MDSE Core]], [[Note and SysML Codec]], [[Model Identity Lookup]].
- Existing case [[VER-31047 - MOD-047 Rule Verification]].
- Typed native usage `mod31092` in [[MDSE Toolset Composition]]; draft objective verification intent.
- Source preserved and execution unproven.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31092 {
    requirement def RuleREQ31092 {
        doc /* Template fields are always present in a note. */
    }
}
```
