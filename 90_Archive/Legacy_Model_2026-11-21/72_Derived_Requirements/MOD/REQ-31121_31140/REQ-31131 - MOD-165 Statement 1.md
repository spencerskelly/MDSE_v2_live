---
type: Requirement
subtype: engineering
id: REQ-31131
uid: 20261022043100131skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-165
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31131::RuleREQ31131
---
# MOD-165 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The SysML v2 language is documented one note per construct (element and relationship) in `governance/language/`, built from `catalog.json`.

## Authoritative origin

- [[MOD-165]] — exact source rule and decision origins
- [[MOD-165 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Semantic Requirement; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Review and Resolve Flagged Model Items]]
- [[Display Flagged Model Data]]
- [[Compose Documentation from Embedded Notes]]

## Logical functions supported

- [[Generate Engineering Model Viewpoints]]
- [[Maintain and Improve Model Knowledge]]
- [[Compose and Exchange Engineering Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31068 - MOD-165 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD source and model trace — Draft

- Source [[MOD-165]] and semantic analysis [[MOD-165 - Analysis]].
- Context [[Add Engineering Knowledge]], [[Correct or Complete Knowledge]], [[Maintain and Improve Model Knowledge]].
- Architecture [[MDSE Core]], [[MDSE Workbench]], [[Note and SysML Codec]].
- Verification [[VER-31068 - MOD-165 Rule Verification]].
- Typed requirement usage `mod31131` in [[MDSE Toolset Composition]].
- Language catalog location and generated syntax examples need review against current 55_Language vault layout. No test execution asserted.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31131 {
    requirement def RuleREQ31131 {
        doc /* The SysML v2 language is documented one note per construct (element and relationship) in `governance/language/`, built from `catalog.json`. */
    }
}
```
