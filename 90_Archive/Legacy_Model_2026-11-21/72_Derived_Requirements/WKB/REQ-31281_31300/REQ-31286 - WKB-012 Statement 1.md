---
type: Requirement
subtype: functional
id: REQ-31286
uid: 20261022043100286skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-012
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31286::RuleREQ31286
---
# WKB-012 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Relationship properties are written inside the relationship in SysML: a `doc` comment, `attribute name = value;` (or `attribute name { doc … }` when the value is not a plain number or simple text), usage modifiers `ordered` and `nonunique`, quantity and direction.

## Authoritative origin

- [[WKB-012]] — exact source rule and decision origins
- [[WKB-012 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Correct or Complete Knowledge]]
- [[Visualize Relationships by Viewpoint]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31141 - WKB-012 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Native contextual trace — Draft

[[MDSE Toolset Composition]] contains a typed `requirement relationshipProperties : MDSE_REQ_31286::RuleREQ31286` usage allocated to the `workbench` part usage. The existing [[VER-31141 - WKB-012 Rule Verification]] case is reused through a contextual verification objective. Its use-case dependency is owned by [[Correct or Complete Knowledge]].

Relationship property persistence inside native SysML, including direction, quantity and usage modifiers. This remains a **Draft candidate** and is not evidence of a passed test, `satisfy`, or independently certified SysML syntax.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31286 {
    requirement def RuleREQ31286 {
        doc /* Relationship properties are written inside the relationship in SysML: a `doc` comment, `attribute name = value;` (or `attribute name { doc … }` when the value is not a plain number or simple text), usage modifiers `ordered` and `nonunique`, quantity and direction. */
    }
}
```
