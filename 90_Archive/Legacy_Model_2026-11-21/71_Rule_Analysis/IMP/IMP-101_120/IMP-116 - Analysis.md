---
type: Info
subtype: ""
id: INFO-22302
uid: 20261022043000302skellyspencer
status: Draft
sourceRole: derived-rule-analysis
ruleId: IMP-116
sourceRuleStatus: Active
sourceRulePhase: P1
sourceRevision: 5360a55e896498091b5c18b0218839f7e2b9ffba
traceConfidence: requires-semantic-review
modelRoleCandidate: "Import Functional Requirement"
---
# IMP-116 — Semantic Decomposition

> [!important] Rule analysis, not another source of authority
> Binding source rule; every derived requirement remains a **Draft interpretation** until its meaning and clause boundaries are reviewed. Original text and decision provenance remain in [[IMP-116]] and the linked ruleset.

> [!flagNote] D-0073: historical clause decomposition
> Original statement 2 (cross-owner `precedes`) is now superseded. The current importer defers such connectors with `flagLink` and retained trigger/guard/effect. Native same-owner sequence remains the accepted direction. See [[STEP_05_TYPED_RELATIONSHIP_ENDPOINT_MAPPING_2026-10-24]].

## Rule and provenance

- Original rule: [[IMP-116]]
- Source: [governance/RULESET.md line 385](https://github.com/spencerskelly/MDSE_v2/blob/5360a55e896498091b5c18b0218839f7e2b9ffba/governance/RULESET.md#L385)
- Family / section: IMP / EA to SysML v2 mapping
- Source status: **Active** · phase **P1**
- Initial relevance to Engineering Knowledge Base: **direct**
- Primary candidate modeling role: **Import Functional Requirement**

## Candidate statement decomposition

1. ControlFlow and StateFlow between usages, or between definitions nested in one owner, are a `succession` or `transition` in that owner.
2. Between notes that share no owner they are the `precedes` link on the step before, with trigger, guard and effect as a Source line (V1 W-174, W-175).

**Review caution:** These are source-text segments extracted using sentence/semicolon boundaries, not independently approved atomic requirements. Some segments contain several obligations and some may need to be recombined or factored into reusable definitions.

## Proposed model elements

### Requirement or constraint candidates

- [[REQ-31201 - IMP-116 Statement 1]] — ControlFlow and StateFlow between usages, or between definitions nested in one owner, are a `succession` or `transition` in that owner.
- [[REQ-31202 - IMP-116 Statement 2]] — Between notes that share no owner they are the `precedes` link on the step before, with trigger, guard and effect as a Source line (V1 W-174, W-175).

### Shared logical functions

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]

### Existing use cases

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]

### Existing architecture / responsible parts

- [[MDSE Importer]] — responsibility candidate, not a certified allocation
- [[MDSE Core]] — responsibility candidate, not a certified allocation

### Verification case

- [[VER-31105 - IMP-116 Rule Verification]]
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
