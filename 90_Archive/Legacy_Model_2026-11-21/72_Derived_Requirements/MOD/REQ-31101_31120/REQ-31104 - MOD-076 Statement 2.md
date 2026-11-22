---
type: Requirement
subtype: engineering
id: REQ-31104
uid: 20261022043100104skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-076
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31104::RuleREQ31104
---
# MOD-076 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

> [!flagNote] Step 03 — historical candidate, semantic scope changed
> The old statement discusses persisted inverse YAML fields without distinguishing native SysML from MDSE-only links. Native relationships require reverse projection from SysML; only MDSE-only inverse maintenance may apply after OD-01 review. This candidate remains Draft at its original ID; its sourceRuleStatus describes the pinned source snapshot. Its existing native SysML definition and typed usage are retained only as reviewed historical/provisional content, not an independently approved new obligation or executed test. See [[STEP_03_MOD_RELATIONSHIP_AUTHORITY_RECONCILIATION_2026-10-24]].

## Candidate obligation

The forward field wins when they disagree.

## Authoritative origin

- [[MOD-076]] — exact source rule and decision origins
- [[MOD-076 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Semantic Requirement; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Review Requirements for a Design]]
- [[Explore Complete Product Context]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Explore Multiple Relationship Hops]]
- [[Compare Shared Connections Across Elements]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31054 - MOD-076 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD trace integration — Draft

- Source [[MOD-076]] and analysis [[MOD-076 - Analysis]].
- Related use cases [[Add Engineering Knowledge]], [[Import an Engineering Model]] and function [[Maintain and Improve Model Knowledge]].
- Candidate architecture [[MDSE Core]], [[Note and SysML Codec]], [[Model Editing Service]].
- Existing verification [[VER-31054 - MOD-076 Rule Verification]].
- Typed usage `mod31104` in [[MDSE Toolset Composition]]; semantic hold for native-v2 equivalence and/or deprecated terminology.
- No asserted satisfaction, test execution, or parser certification.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31104 {
    requirement def RuleREQ31104 {
        doc /* The forward field wins when they disagree. */
    }
}
```
