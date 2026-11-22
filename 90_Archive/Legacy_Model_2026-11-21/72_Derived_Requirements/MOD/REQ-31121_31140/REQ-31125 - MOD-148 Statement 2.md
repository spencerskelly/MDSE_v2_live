---
type: Requirement
subtype: design
id: REQ-31125
uid: 20261022043100125skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-148
sourceRuleStatus: Active
sourceRuleClause: 2
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31125::RuleREQ31125
---
# MOD-148 — Candidate Requirement 2

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

AI authors claudeai-----, chatgptai----, rovoai-------, geminiai-----; a user-directed note uses the user's code even if an AI wrote it; the generic unmapped fallback sparxeaauthor is overridden by skellyspencer for the EA8647 import.

## Authoritative origin

- [[MOD-148]] — exact source rule and decision origins
- [[MOD-148 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Add Engineering Knowledge]]
- [[Search SysML Syntax and Model Properties]]
- [[Explore Complete Product Context]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]
- [[Query and Traverse Model Relationships]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31065 - MOD-148 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD trace integration — Draft

- Governing [[MOD-148]] and [[MOD-148 - Analysis]].
- Operational context [[Import an Engineering Model]], [[Add Engineering Knowledge]] and [[Maintain and Improve Model Knowledge]].
- Architecture [[MDSE Core]], [[MDSE Importer]], [[MDSE Workbench]], [[Note and SysML Codec]].
- Verification [[VER-31065 - MOD-148 Rule Verification]].
- Native typed usage `mod31125` in [[MDSE Toolset Composition]]; draft objective intent only, without an executed test verdict.
- Author-code conventions and import-specific fallback remain subject to governance reconciliation.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31125 {
    requirement def RuleREQ31125 {
        doc /* AI authors claudeai-----, chatgptai----, rovoai-------, geminiai-----; a user-directed note uses the user's code even if an AI wrote it; the generic unmapped fallback sparxeaauthor is overridden by skellyspencer for the EA8647 import. */
    }
}
```
