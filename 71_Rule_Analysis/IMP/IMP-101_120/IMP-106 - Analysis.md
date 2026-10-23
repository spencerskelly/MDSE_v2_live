---
type: Info
subtype: ""
id: INFO-22293
uid: 20261022043000293skellyspencer
status: Draft
sourceRole: derived-rule-analysis
ruleId: IMP-106
sourceRuleStatus: Active
sourceRulePhase: P1
sourceRevision: 5360a55e896498091b5c18b0218839f7e2b9ffba
traceConfidence: requires-semantic-review
modelRoleCandidate: "Import Functional Requirement"
---
# IMP-106 — Semantic Decomposition

> [!important] Rule analysis, not another source of authority
> Binding source rule; every derived requirement remains a **Draft interpretation** until its meaning and clause boundaries are reviewed. Original text and decision provenance remain in [[IMP-106]] and the linked ruleset.

## Rule and provenance

- Original rule: [[IMP-106]]
- Source: [governance/RULESET.md line 376](https://github.com/spencerskelly/MDSE_v2/blob/5360a55e896498091b5c18b0218839f7e2b9ffba/governance/RULESET.md#L376)
- Family / section: IMP / EA to SysML v2 mapping
- Source status: **Active** · phase **P1**
- Initial relevance to Engineering Knowledge Base: **direct**
- Primary candidate modeling role: **Import Functional Requirement**

## Candidate statement decomposition

1. A Port under a Part is the Part's block's own port and is not written as a usage of the Part.
2. It merges, with one hop and never up the redefinition chain: (1) PDATA3 names a Port owned by the Part's block; (2) else the block has exactly one port with the same non-blank name; (3) else it is added to the block as a port of its own, flagged for review, and same-named ones on one block combine. A Part with no block defers the Port (`USAGE_WITHOUT_NOTE_OWNER`). A merged Port types an untyped block port from its PDATA1. (V1 W-114, W-130; D-0037)

**Review caution:** These are source-text segments extracted using sentence/semicolon boundaries, not independently approved atomic requirements. Some segments contain several obligations and some may need to be recombined or factored into reusable definitions.

## Proposed model elements

### Requirement or constraint candidates

- [[REQ-31184 - IMP-106 Statement 1]] — A Port under a Part is the Part's block's own port and is not written as a usage of the Part.
- [[REQ-31185 - IMP-106 Statement 2]] — It merges, with one hop and never up the redefinition chain: (1) PDATA3 names a Port owned by the Part's block; (2) else the block has exactly one port with the same non-blank name; (3) else it is added to the block as a port of its own, flagged for review, and same-named ones on one block combine. A Part with no block defers the Port (`USAGE_WITHOUT_NOTE_OWNER`). A merged Port types an untyped block port from its PDATA1. (V1 W-114, W-130; D-0037)

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

- [[VER-31096 - IMP-106 Rule Verification]]
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
