---
type: Requirement
subtype: design
id: REQ-31111
uid: 20261022043100111skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-118
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31111::RuleREQ31111
---
# MOD-118 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

New development goes in the v2 workspace (numbered 20+ folders). V1 is frozen reference evidence. A v2 change never modifies 10_*, 11_* or other v1 areas without explicit cross-version approval; shared changes must be compatible with both pipelines.

## Authoritative origin

- [[MOD-118]] — exact source rule and decision origins
- [[MOD-118 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `Standing`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Correct or Complete Knowledge]]
- [[Search SysML Syntax and Model Properties]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31058 - MOD-118 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD source-to-model trace — Draft

- Governing [[MOD-118]] and [[MOD-118 - Analysis]].
- User scenarios [[Import an Engineering Model]], [[Correct or Complete Knowledge]]; function [[Maintain and Improve Model Knowledge]].
- Tool context [[MDSE Core]], [[MDSE Importer]], [[MDSE Workbench]], [[Note and SysML Codec]].
- Planned case [[VER-31058 - MOD-118 Rule Verification]].
- Canonical definition remains in this note; typed usage `mod31111` in [[MDSE Toolset Composition]].
- Semantic hold: release-phase or archived workspace policy needs owner disposition against current v2 build.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31111 {
    requirement def RuleREQ31111 {
        doc /* New development goes in the v2 workspace (numbered 20+ folders). V1 is frozen reference evidence. A v2 change never modifies 10_*, 11_* or other v1 areas without explicit cross-version approval; shared changes must be compatible with both pipelines. */
    }
}
```
