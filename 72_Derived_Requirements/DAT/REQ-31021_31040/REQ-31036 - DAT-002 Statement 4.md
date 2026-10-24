---
type: Requirement
subtype: design
id: REQ-31036
uid: 20261022043100036skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: DAT-002
sourceRuleStatus: Active
sourceRuleClause: 4
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31036::RuleREQ31036
---
# DAT-002 — Candidate Requirement 4

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

> [!flagNote] Step 03 — governance reconciliation (D-0066)
> The original privacy/parser clause remains potentially relevant, but current DAT-001/DAT-002 wording differs; review before promoting this Draft interpretation. `sourceRuleStatus: Active` records the historical source revision. The candidate definition is not approved and its verification case has not been executed. No native semantic relationship is added. See [[STEP_03_ACTIVE_GOVERNANCE_RECONCILIATION_2026-10-24]].

## Candidate obligation

Test_Vault_ stays the method and tool authority.

## Authoritative origin

- [[DAT-002]] — exact source rule and decision origins
- [[DAT-002 - Analysis]] — clause decomposition and current classification
- Source family: `DAT`; semantic role: Data Protection Constraint; source phase `Standing`
- This is one of 4 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[View and Export Engineering Information]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Compose and Exchange Engineering Knowledge]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Workbench]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31014 - DAT-002 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Data governance trace — Draft

- Governing rule: [[DAT-002]]; semantic analysis: [[DAT-002 - Analysis]].
- Stakeholder: [[Protect Engineering Data]]; supporting use case: [[Import an Engineering Model]].
- Responsible review context: [[MDSE Importer]], [[MDSE Core]]. Repository publication restrictions also govern developer release processes, not necessarily runtime implementation allocations.
- Reusable case: [[VER-31014 - DAT-002 Rule Verification]].
- Native typed usage: `dat31036` in [[MDSE Toolset Composition]]. **Held** from normative objective-level verification due to obsolete repo-authority claim.
- Acceptance interpretation: Obsolete source-authority declaration contradicts current MDSE_v2 tool-authority governance; no positive acceptance criterion.
- Preserve source, definition and Draft status; no satisfaction, executed result, or parser certification is asserted.

> [!flagNote] Conflict: current MDSE_v2 authority
> The historic statement that Test_Vault_ remains tooling authority conflicts with current MDSE_v2 governance. Do not enforce or approve as a current requirement until its disposition is recorded.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31036 {
    requirement def RuleREQ31036 {
        doc /* Test_Vault_ stays the method and tool authority. */
    }
}
```
