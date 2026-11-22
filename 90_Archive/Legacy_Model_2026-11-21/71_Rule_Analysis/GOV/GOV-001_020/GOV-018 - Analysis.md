---
type: Info
subtype: ""
id: INFO-22018
uid: 20261022043000018skellyspencer
status: Draft
sourceRole: derived-rule-analysis
ruleId: GOV-018
sourceRuleStatus: Active
sourceRulePhase: Standing
sourceRevision: 5360a55e896498091b5c18b0218839f7e2b9ffba
traceConfidence: requires-semantic-review
modelRoleCandidate: "Governance / Process Constraint"
---
# GOV-018 — Semantic Decomposition

> [!important] Rule analysis, not another source of authority
> Binding source rule; every derived requirement remains a **Draft interpretation** until its meaning and clause boundaries are reviewed. Original text and decision provenance remain in [[GOV-018]] and the linked ruleset.

> [!warning] Step 03 — original analysis, not current authority
> Retired by D-0066. EA package layout/old cleanup is not the current v2 placement contract. Managed 99_System support is preserved in revised GOV-017; D-0067 has since made MOD-174 Active (6-folder cap). The original `sourceRuleStatus: Active` and clause segmentation below describe the pinned history; they do not authorize promotion of derived candidates. See [[STEP_03_ACTIVE_GOVERNANCE_RECONCILIATION_2026-10-24]].

## Rule and provenance

- Original rule: [[GOV-018]]
- Source: [governance/RULESET.md line 53](https://github.com/spencerskelly/MDSE_v2/blob/5360a55e896498091b5c18b0218839f7e2b9ffba/governance/RULESET.md#L53)
- Family / section: GOV / Scope and authority
- Source status: **Active** · phase **Standing**
- Initial relevance to Engineering Knowledge Base: **legacy-review**
- Primary candidate modeling role: **Governance / Process Constraint**

## Candidate statement decomposition

1. Final folder structure follows the EA package structure. 99_System is kept and edited topic by topic.
2. Legacy empty model folders were removed.

**Review caution:** These are source-text segments extracted using sentence/semicolon boundaries, not independently approved atomic requirements. Some segments contain several obligations and some may need to be recombined or factored into reusable definitions.

## Proposed model elements

### Requirement or constraint candidates

- [[REQ-31029 - GOV-018 Statement 1]] — Final folder structure follows the EA package structure. 99_System is kept and edited topic by topic.
- [[REQ-31030 - GOV-018 Statement 2]] — Legacy empty model folders were removed.

### Shared logical functions

- No direct function established; cross-cutting governance or legacy review may apply.

### Existing use cases

- No existing knowledge-base use case assigned. Define a new use case only when a stakeholder interaction actually requires one.

### Existing architecture / responsible parts

- [[MDSE Core]] — responsibility candidate, not a certified allocation
- [[MDSE Base Vault]] — responsibility candidate, not a certified allocation

### Verification case

- [[VER-31012 - GOV-018 Rule Verification]]
- Executed result: **none linked**
- Test source and CI evidence: **individual reconciliation pending**

## Decomposition review checklist

- Is this a stakeholder need, system requirement, design constraint, procedure, architectural decision, or explanatory definition?
- Are all statements truly atomic, testable and necessary? Are they duplicated by another rule?
- Should the requirement reference an existing function or a newly identified function?
- Is a use case an actual actor interaction, rather than a function or implementation step?
- Does the suggested architectural responsibility match the existing code and approved tool boundary?
- Are existing test cases sufficient, and does an execution result demonstrate the rule?
- Is the original rule Active and current, or does later V2 policy supersede it?

No existing source code, governing rule, or test was modified by generating this analysis.
