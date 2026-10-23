---
type: Requirement
subtype: engineering
id: REQ-31102
uid: 20261022043100102skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-075
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31102::RuleREQ31102
---
# MOD-075 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Relationship endpoint rules (allowed source and target classes) live on each relationship in relationships.yaml.

## Authoritative origin

- [[MOD-075]] — exact source rule and decision origins
- [[MOD-075 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Semantic Requirement; source phase `Standing`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Review Requirements for a Design]]
- [[Explore Complete Product Context]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Explore Multiple Relationship Hops]]
- [[Compare Shared Connections Across Elements]]
- [[Search SysML Syntax and Model Properties]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31053 - MOD-075 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31102 {
    requirement def RuleREQ31102 {
        doc /* Relationship endpoint rules (allowed source and target classes) live on each relationship in relationships.yaml. */
    }
}
```
