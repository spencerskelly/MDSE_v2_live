---
type: Requirement
subtype: functional
id: REQ-31190
uid: 20261022043100190skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-111
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31190::RuleREQ31190
---
# IMP-111 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

An EA Object points at the Class it is a kind of through Classifier; its part def specializes that Class's part def (`:>`), never typed by it. (V1 W-135, approved exception on Object classifiers; D-0037)

## Authoritative origin

- [[IMP-111]] — exact source rule and decision origins
- [[IMP-111 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31100 - IMP-111 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer source-to-model trace — Draft

- Origin: [[IMP-111]]; interpretation: [[IMP-111 - Analysis]].
- Operational context: [[Import an Engineering Model]], [[Ingest and Reconcile Engineering Sources]].
- Tool context: [[MDSE Importer]], [[Source Reconciliation Engine]], [[Managed Vault Update]].
- Planned case: [[VER-31100 - IMP-111 Rule Verification]].
- Typed requirement usage `imp31190` in [[MDSE Toolset Composition]]; independent test, grammar and satisfaction remain unproven.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31190 {
    requirement def RuleREQ31190 {
        doc /* An EA Object points at the Class it is a kind of through Classifier; its part def specializes that Class's part def (`:>`), never typed by it. (V1 W-135, approved exception on Object classifiers; D-0037) */
    }
}
```
