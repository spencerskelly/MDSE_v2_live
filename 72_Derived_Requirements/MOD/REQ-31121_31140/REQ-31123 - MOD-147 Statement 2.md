---
type: Requirement
subtype: design
id: REQ-31123
uid: 20261022043100123skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-147
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31123::RuleREQ31123
---
# MOD-147 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Rules never name a schema version; pinned versions live only in the release manifest

## Authoritative origin

- [[MOD-147]] — exact source rule and decision origins
- [[MOD-147 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Add Engineering Knowledge]]
- [[Search SysML Syntax and Model Properties]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31064 - MOD-147 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD trace integration — Draft

- Governing [[MOD-147]] and [[MOD-147 - Analysis]].
- Operational context [[Import an Engineering Model]], [[Add Engineering Knowledge]] and [[Maintain and Improve Model Knowledge]].
- Architecture [[MDSE Core]], [[MDSE Importer]], [[MDSE Workbench]], [[Note and SysML Codec]].
- Verification [[VER-31064 - MOD-147 Rule Verification]].
- Native typed usage `mod31123` in [[MDSE Toolset Composition]]; draft objective intent only, without an executed test verdict.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31123 {
    requirement def RuleREQ31123 {
        doc /* Rules never name a schema version; pinned versions live only in the release manifest */
    }
}
```
