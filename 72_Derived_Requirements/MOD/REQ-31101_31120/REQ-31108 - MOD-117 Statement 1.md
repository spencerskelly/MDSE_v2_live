---
type: Requirement
subtype: design
id: REQ-31108
uid: 20261022043100108skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-117
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31108::RuleREQ31108
---
# MOD-117 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Anything SysML v2 can define (structure, usages, relationships SysML defines) is written only in the note's `## SysML v2` block.

## Authoritative origin

- [[MOD-117]] — exact source rule and decision origins
- [[MOD-117 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Correct or Complete Knowledge]]
- [[Search SysML Syntax and Model Properties]]
- [[Display Flagged Model Data]]
- [[Compose Documentation from Embedded Notes]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]
- [[Compose and Exchange Engineering Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31057 - MOD-117 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD source-to-model trace — Draft

- Governing [[MOD-117]] and [[MOD-117 - Analysis]].
- User scenarios [[Import an Engineering Model]], [[Correct or Complete Knowledge]]; function [[Maintain and Improve Model Knowledge]].
- Tool context [[MDSE Core]], [[MDSE Importer]], [[MDSE Workbench]], [[Note and SysML Codec]].
- Planned case [[VER-31057 - MOD-117 Rule Verification]].
- Canonical definition remains in this note; typed usage `mod31108` in [[MDSE Toolset Composition]].
- Draft verification objective planned; no observed result or independent parser acceptance.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31108 {
    requirement def RuleREQ31108 {
        doc /* Anything SysML v2 can define (structure, usages, relationships SysML defines) is written only in the note's `## SysML v2` block. */
    }
}
```
