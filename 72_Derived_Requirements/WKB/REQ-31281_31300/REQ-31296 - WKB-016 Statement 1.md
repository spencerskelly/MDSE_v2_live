---
type: Requirement
subtype: functional
id: REQ-31296
uid: 20261022043100296skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-016
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31296::RuleREQ31296
---
# WKB-016 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The scanner reads every port form: `~`, `ref`, `:>` and `:>>` before or after the multiplicity, `ordered`, `nonunique`, directed features, interface and connection ends, and plain, `connection` and `interface` connects.

## Authoritative origin

- [[WKB-016]] — exact source rule and decision origins
- [[WKB-016 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Explore Complete Product Context]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31145 - WKB-016 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31296 {
    requirement def RuleREQ31296 {
        doc /* The scanner reads every port form: `~`, `ref`, `:>` and `:>>` before or after the multiplicity, `ordered`, `nonunique`, directed features, interface and connection ends, and plain, `connection` and `interface` connects. */
    }
}
```
