---
type: Requirement
subtype: engineering
id: REQ-31329
uid: 20261022043100329skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: TST-001
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31329::RuleREQ31329
---
# TST-001 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Carried code keeps its original tests.

## Authoritative origin

- [[TST-001]] — exact source rule and decision origins
- [[TST-001 - Analysis]] — clause decomposition and current classification
- Source family: `TST`; semantic role: Verification and Acceptance Obligation; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Correct or Complete Knowledge]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Flagged Model Data]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]
- [[MDSE Workbench]]
- [[MDSE Base Vault]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31157 - TST-001 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Testing traceability — Draft

- Governing rule [[TST-001]] and source analysis [[TST-001 - Analysis]].
- Relevant engineering workflow: [[Explore Element Relationships]] and [[Correct or Complete Knowledge]].
- Tool responsibilities: [[MDSE Workbench]], [[MDSE Core]] and [[MDSE Toolset Composition]]. The CI and repository release policy is also outside the runtime system boundary.
- Existing verification definition: [[VER-31157 - TST-001 Rule Verification]].
- Model integration: `tst31329` is a native typed requirement usage in [[MDSE Toolset Composition]], with a Draft objective-level `verify` reference.
- This records intent, not actual test execution, parser certification or `satisfy` evidence.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31329 {
    requirement def RuleREQ31329 {
        doc /* Carried code keeps its original tests. */
    }
}
```
