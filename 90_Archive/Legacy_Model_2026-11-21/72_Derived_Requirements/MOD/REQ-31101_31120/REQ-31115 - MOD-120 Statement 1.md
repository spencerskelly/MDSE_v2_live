---
type: Requirement
subtype: design
id: REQ-31115
uid: 20261022043100115skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-120
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31115::RuleREQ31115
---
# MOD-120 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Non-negotiable: approved mappings are not reopened because implementation is incomplete; native OMG SysML v2 only, with non-native MDSE evidence and review flags distinct; V2 builds independently of archived V1; each source element and connector gets an auditable disposition with zero hidden drops; syntax parsing, semantic validation, end-user UI and package/release acceptance are different gates.

## Authoritative origin

- [[MOD-120]] — exact source rule and decision origins
- [[MOD-120 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Correct or Complete Knowledge]]
- [[Search SysML Syntax and Model Properties]]
- [[Display Flagged Model Data]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31060 - MOD-120 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD source-to-model trace — Draft

- Governing [[MOD-120]] and [[MOD-120 - Analysis]].
- User scenarios [[Import an Engineering Model]], [[Correct or Complete Knowledge]]; function [[Maintain and Improve Model Knowledge]].
- Tool context [[MDSE Core]], [[MDSE Importer]], [[MDSE Workbench]], [[Note and SysML Codec]].
- Planned case [[VER-31060 - MOD-120 Rule Verification]].
- Canonical definition remains in this note; typed usage `mod31115` in [[MDSE Toolset Composition]].
- Draft verification objective planned; no observed result or independent parser acceptance.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31115 {
    requirement def RuleREQ31115 {
        doc /* Non-negotiable: approved mappings are not reopened because implementation is incomplete; native OMG SysML v2 only, with non-native MDSE evidence and review flags distinct; V2 builds independently of archived V1; each source element and connector gets an auditable disposition with zero hidden drops; syntax parsing, semantic validation, end-user UI and package/release acceptance are different gates. */
    }
}
```
