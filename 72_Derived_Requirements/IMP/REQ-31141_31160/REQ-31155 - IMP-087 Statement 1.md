---
type: Requirement
subtype: functional
id: REQ-31155
uid: 20261022043100155skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-087
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31155::RuleREQ31155
---
# IMP-087 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Add-onto-existing matches a note by `uid`, not by path.

## Authoritative origin

- [[IMP-087]] — exact source rule and decision origins
- [[IMP-087 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P2`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Search for a Part, Function or Design]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Discover and Resolve Model Elements]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31082 - IMP-087 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31155 {
    requirement def RuleREQ31155 {
        doc /* Add-onto-existing matches a note by `uid`, not by path. */
    }
}
```
