---
type: Requirement
subtype: engineering
id: REQ-31106
uid: 20261022043100106skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-167
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31106::RuleREQ31106
---
# MOD-167 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

It is removed by the merge or by clearing it; no inverse is written.

## Authoritative origin

- [[MOD-167]] — exact source rule and decision origins
- [[MOD-167 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Semantic Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Review Requirements for a Design]]
- [[Explore Complete Product Context]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Explore Multiple Relationship Hops]]
- [[Compare Shared Connections Across Elements]]
- [[Search for a Part, Function or Design]]
- [[Correct or Complete Knowledge]]
- [[Compose Documentation from Embedded Notes]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]
- [[Discover and Resolve Model Elements]]
- [[Compose and Exchange Engineering Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31055 - MOD-167 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD trace integration — Draft

- Source [[MOD-167]] and analysis [[MOD-167 - Analysis]].
- Related use cases [[Add Engineering Knowledge]], [[Import an Engineering Model]] and function [[Maintain and Improve Model Knowledge]].
- Candidate architecture [[MDSE Core]], [[Note and SysML Codec]], [[Model Editing Service]].
- Existing verification [[VER-31055 - MOD-167 Rule Verification]].
- Typed usage `mod31106` in [[MDSE Toolset Composition]]; semantic hold for native-v2 equivalence and/or deprecated terminology.
- No asserted satisfaction, test execution, or parser certification.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31106 {
    requirement def RuleREQ31106 {
        doc /* It is removed by the merge or by clearing it; no inverse is written. */
    }
}
```
