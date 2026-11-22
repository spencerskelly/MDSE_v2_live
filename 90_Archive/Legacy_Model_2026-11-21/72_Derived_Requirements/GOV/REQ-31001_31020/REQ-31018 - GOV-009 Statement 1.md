---
type: Requirement
subtype: engineering
id: REQ-31018
uid: 20261022043100018skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: GOV-009
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31018::RuleREQ31018
---
# GOV-009 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

Obsidian-native-first: prefer representations native to core Obsidian, then conventional Markdown/YAML, and use custom syntax only when needed.

## Authoritative origin

- [[GOV-009]] — exact source rule and decision origins
- [[GOV-009 - Analysis]] — clause decomposition and current classification
- Source family: `GOV`; semantic role: Governance / Process Constraint; source phase `Standing`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Visualize Relationships by Viewpoint]]
- [[Compose Documentation from Embedded Notes]]

## Logical functions supported

- [[Generate Engineering Model Viewpoints]]
- [[Compose and Exchange Engineering Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]
- [[MDSE Base Vault]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31009 - GOV-009 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Governance source-to-model trace — Draft

- Original rule: [[GOV-009]]; semantic analysis: [[GOV-009 - Analysis]].
- Model responsibility context: [[MDSE Toolset Composition]].
- Reusable verification case: [[VER-31009 - GOV-009 Rule Verification]].
- Typed usage `gov31018` in [[MDSE Toolset Composition]]; Draft objective-level verification intent, not execution.
- Clause 1 is preserved verbatim in the original definition.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31018 {
    requirement def RuleREQ31018 {
        doc /* Obsidian-native-first: prefer representations native to core Obsidian, then conventional Markdown/YAML, and use custom syntax only when needed. */
    }
}
```
