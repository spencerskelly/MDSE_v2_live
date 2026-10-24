---
type: Requirement
subtype: engineering
id: REQ-31011
uid: 20261022043100011skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: GOV-006
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31011::RuleREQ31011
---
# GOV-006 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Claude may push directly to main on Test_Vault_.

## Authoritative origin

- [[GOV-006]] — exact source rule and decision origins
- [[GOV-006 - Analysis]] — clause decomposition and current classification
- Source family: `GOV`; semantic role: Governance / Process Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- No directly matching Engineering Knowledge Base interaction has been established; evaluate the broader tool lifecycle.

## Logical functions supported

- No functional link approved yet; cross-cutting governance may apply.

## Existing software architecture candidates

- [[MDSE Core]]
- [[MDSE Base Vault]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31006 - GOV-006 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Governance source-to-model trace — Draft

- Original rule: [[GOV-006]]; semantic analysis: [[GOV-006 - Analysis]].
- Model responsibility context: [[MDSE Toolset Composition]].
- Reusable verification case: [[VER-31006 - GOV-006 Rule Verification]].
- Typed usage `gov31011` in [[MDSE Toolset Composition]]; no normative objective pending historical-policy retirement.
- Clause 1 is preserved verbatim in the original definition.

> [!flagNote] Obsolete governance provenance
> GOV-006 describes direct changes to the archived Test_Vault_ repository. GOV-001 and GOV-005 govern the current MDSE_v2 tool repository. Do not assert GOV-006 as a current implementation requirement.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31011 {
    requirement def RuleREQ31011 {
        doc /* Claude may push directly to main on Test_Vault_. */
    }
}
```
