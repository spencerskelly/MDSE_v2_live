---
type: Requirement
subtype: functional
id: REQ-31307
uid: 20261022043100307skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-020
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31307::RuleREQ31307
---
# WKB-020 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Counting both doubled every quantity in the rolled-up parts list.

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

> [!flagNote] Historical defect description, not intended behavior
> This text reports that duplicate representations once doubled the quantity roll-up. It must not become a `verify` target or be allocated as a functional requirement that demands doubling. Keep provenance and Draft status until engineer review. Use [[REQ-31306 - WKB-020 Statement 1]] for the normative one-relationship invariant and check WKB-020 with a negative double-counting regression.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31307 {
    requirement def RuleREQ31307 {
        doc /* Counting both doubled every quantity in the rolled-up parts list. */
    }
}
```
