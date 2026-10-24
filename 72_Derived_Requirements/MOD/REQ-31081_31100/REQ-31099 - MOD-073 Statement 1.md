---
type: Requirement
subtype: engineering
id: REQ-31099
uid: 20261022043100099skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-073
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31099::RuleREQ31099
---
# MOD-073 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

There is no provisional relationship field. A link whose relationship cannot be resolved is recorded as a `flagLink`.

## Authoritative origin

- [[MOD-073]] — exact source rule and decision origins
- [[MOD-073 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Semantic Requirement; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Review Requirements for a Design]]
- [[Explore Complete Product Context]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Explore Multiple Relationship Hops]]
- [[Compare Shared Connections Across Elements]]
- [[Display Flagged Model Data]]
- [[Compose Documentation from Embedded Notes]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]
- [[Compose and Exchange Engineering Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31051 - MOD-073 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD trace integration — Draft

- Source [[MOD-073]] and analysis [[MOD-073 - Analysis]].
- Related use cases [[Add Engineering Knowledge]], [[Import an Engineering Model]] and function [[Maintain and Improve Model Knowledge]].
- Candidate architecture [[MDSE Core]], [[Note and SysML Codec]], [[Model Editing Service]].
- Existing verification [[VER-31051 - MOD-073 Rule Verification]].
- Typed usage `mod31099` in [[MDSE Toolset Composition]]; proposed objective-level verification intent.
- No asserted satisfaction, test execution, or parser certification.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31099 {
    requirement def RuleREQ31099 {
        doc /* There is no provisional relationship field. A link whose relationship cannot be resolved is recorded as a `flagLink`. */
    }
}
```
