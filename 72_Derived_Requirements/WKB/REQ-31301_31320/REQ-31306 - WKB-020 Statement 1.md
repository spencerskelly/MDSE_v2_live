---
type: Requirement
subtype: functional
id: REQ-31306
uid: 20261022043100306skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-020
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31306::RuleREQ31306
---
# WKB-020 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

A YAML link that repeats a relationship the SysML block already states (the BOM importer lists `hasPart` in both) is one relationship.

## Authoritative origin

- [[WKB-020]] — exact source rule and decision origins
- [[WKB-020 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31149 - WKB-020 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Contextual native trace — Draft

The canonical single-relationship interpretation refines [[One Trustworthy Model]]. [[MDSE Toolset Composition]] now contains a typed usage allocated to Workbench and an objective referring to the existing [[VER-31149 - WKB-020 Rule Verification]] case. The native refinement is owned below, not duplicated in YAML. A regression must show a duplicated YAML/SysML link does not inflate relationship or quantity counts.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31306 {
    private import ModelingMetadata::Refinement;
    requirement def RuleREQ31306 {
        doc /* A YAML link that repeats a relationship the SysML block already states (the BOM importer lists `hasPart` in both) is one relationship. */
        #refinement dependency from RuleREQ31306 to MDSE_STK_00002::StakeholderNeed02;
    }
}
```
