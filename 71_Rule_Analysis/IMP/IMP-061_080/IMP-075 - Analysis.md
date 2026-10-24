---
type: Info
subtype: ""
id: INFO-22262
uid: 20261022043000262skellyspencer
status: Draft
sourceRole: derived-rule-analysis
ruleId: IMP-075
sourceRuleStatus: Active
sourceRulePhase: P1
sourceRevision: 5360a55e896498091b5c18b0218839f7e2b9ffba
traceConfidence: requires-semantic-review
modelRoleCandidate: "Import Functional Requirement"
---
# IMP-075 — Semantic Decomposition

> [!important] Rule analysis, not another source of authority
> Binding source rule; every derived requirement remains a **Draft interpretation** until its meaning and clause boundaries are reviewed. Original text and decision provenance remain in [[IMP-075]] and the linked ruleset.

## Rule and provenance

- Original rule: [[IMP-075]]
- Source: [governance/RULESET.md line 342](https://github.com/spencerskelly/MDSE_v2/blob/5360a55e896498091b5c18b0218839f7e2b9ffba/governance/RULESET.md#L342)
- Family / section: IMP / Merge, rerun and conflicts
- Source status: **Active** · phase **P1**
- Initial relevance to Engineering Knowledge Base: **direct**
- Primary candidate modeling role: **Import Functional Requirement**

## Candidate statement decomposition

1. Every change to an existing file is listed in one dated changelog per import run.
2. Each entry links the changed file, describes the change, and flags any conflict.

**Review caution:** These are source-text segments extracted using sentence/semicolon boundaries, not independently approved atomic requirements. Some segments contain several obligations and some may need to be recombined or factored into reusable definitions.

## Proposed model elements

### Requirement or constraint candidates

- [[REQ-31137 - IMP-075 Statement 1]] — Every change to an existing file is listed in one dated changelog per import run.
- [[REQ-31138 - IMP-075 Statement 2]] — Each entry links the changed file, describes the change, and flags any conflict.

### Shared logical functions

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]
- [[Query and Traverse Model Relationships]]

### Existing use cases

- [[Import an Engineering Model]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]

### Existing architecture / responsible parts

- [[MDSE Importer]] — responsibility candidate, not a certified allocation
- [[MDSE Core]] — responsibility candidate, not a certified allocation

### Verification case

- [[VER-31071 - IMP-075 Rule Verification]]
- Executed result: **none linked**
- Test source and CI evidence: **individual reconciliation pending**

## Atomic interpretation proposed for review

The existing two source segments are compound. Review them as:

| Proposed clause ID | Single assessable outcome | Parent |
|---|---|---|
| IMP-075-A01 | An import run with changes produces one dated changelog | REQ-31137 |
| IMP-075-A02 | Every changed existing file has a corresponding changelog entry | REQ-31137 |
| IMP-075-A03 | Each entry identifies or links the changed file | REQ-31138 |
| IMP-075-A04 | Each entry describes the change | REQ-31138 |
| IMP-075-A05 | Each entry identifies a conflict when one exists | REQ-31138 |

The source **does not expressly require** a conflict field value for changes without a conflict; that case must be resolved by acceptance design, not silently inferred. Distinguish files changed by an import from newly added files (the rule says *existing* files). Date format and location remain unspecified; do not invent them.

These IDs are analytical subclauses, not approved additional requirement notes. Candidate responsibility is Importer, with any shared changelog conventions reviewed separately.

## Decomposition review checklist

- Is this a stakeholder need, system requirement, design constraint, procedure, architectural decision, or explanatory definition?
- Are all statements truly atomic, testable and necessary? Are they duplicated by another rule?
- Should the requirement reference an existing function or a newly identified function?
- Is a use case an actual actor interaction, rather than a function or implementation step?
- Does the suggested architectural responsibility match the existing code and approved tool boundary?
- Are existing test cases sufficient, and does an execution result demonstrate the rule?
- Is the original rule Active and current, or does later V2 policy supersede it?

No existing source code, governing rule, or test was modified by generating this analysis.
