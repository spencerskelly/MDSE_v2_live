---
type: Info
subtype: ""
id: INFO-22281
uid: 20261022043000281skellyspencer
status: Draft
sourceRole: derived-rule-analysis
ruleId: IMP-094
sourceRuleStatus: Active
sourceRulePhase: P1
sourceRevision: 5360a55e896498091b5c18b0218839f7e2b9ffba
traceConfidence: requires-semantic-review
modelRoleCandidate: "Import Functional Requirement"
---
# IMP-094 — Semantic Decomposition

> [!important] Rule analysis, not another source of authority
> Binding source rule; every derived requirement remains a **Draft interpretation** until its meaning and clause boundaries are reviewed. Original text and decision provenance remain in [[IMP-094]] and the linked ruleset.

## Rule and provenance

- Original rule: [[IMP-094]]
- Source: [governance/RULESET.md line 364](https://github.com/spencerskelly/MDSE_v2/blob/5360a55e896498091b5c18b0218839f7e2b9ffba/governance/RULESET.md#L364)
- Family / section: IMP / EA to SysML v2 mapping
- Source status: **Active** · phase **P1**
- Initial relevance to Engineering Knowledge Base: **direct**
- Primary candidate modeling role: **Import Functional Requirement**

## Candidate statement decomposition

1. `## Source: EA` carries one EA GUID, the note's own, as the re-import identity.
2. Usage, relationship, flow, trigger and connector lines carry no GUID; they name the other note. A flag callout keeps the connector GUID because it is the handle to the ledger row.

**Review caution:** These are source-text segments extracted using sentence/semicolon boundaries, not independently approved atomic requirements. Some segments contain several obligations and some may need to be recombined or factored into reusable definitions.

## Proposed model elements

### Requirement or constraint candidates

- [[REQ-31158 - IMP-094 Statement 1]] — `## Source: EA` carries one EA GUID, the note's own, as the re-import identity.
- [[REQ-31159 - IMP-094 Statement 2]] — Usage, relationship, flow, trigger and connector lines carry no GUID; they name the other note. A flag callout keeps the connector GUID because it is the handle to the ledger row.

### Shared logical functions

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Query and Traverse Model Relationships]]
- [[Discover and Resolve Model Elements]]

### Existing use cases

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Search for a Part, Function or Design]]

### Existing architecture / responsible parts

- [[MDSE Importer]] — responsibility candidate, not a certified allocation
- [[MDSE Core]] — responsibility candidate, not a certified allocation

### Verification case

- [[VER-31084 - IMP-094 Rule Verification]]
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
