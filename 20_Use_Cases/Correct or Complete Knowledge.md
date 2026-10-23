---
type: Use Case
subtype: what
id: UC-00008
uid: 20261021181501007skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00008::CorrectOrCompleteKnowledge
---
# Correct or Complete Knowledge

> [!note] Draft use case for Engineering Knowledge Base
> The user action comes from the owner. Process steps, actors and success outcomes are initial interpretations for review; not an approved software specification.

## Intent

Modify information to make the knowledge base correct or complete.

## Primary actor

Engineer; reviewer; model owner

## Trigger

User identifies inaccurate or incomplete knowledge.

## Main scenario (proposed)

Inspect current data and source; propose correction; assess linked impacts; review/approve according to change policy; save with history.

## Successful outcome

Accepted information is correct or the proposed change remains reviewable.

## Alternative and review concern

Engineer edits are not overwritten by source re-import without approval.

## Candidate logical functions

Preview edits; assess impacts; apply controlled changes; track history.

## Traceability

- Stakeholder need: [[Engineering Knowledge Base]]
- Engineering requirements: not yet derived
- Test case and executed evidence: not yet established
- Formal SysML link to stakeholder need: pending independent parser validation

## Proposed functional coverage

- [[Query and Traverse Model Relationships]]
- [[Maintain and Improve Model Knowledge]]

The use-case/function links are now recorded as draft native SysML dependencies. Their qualified endpoints and intended meaning remain subject to independent parser and Workbench checks; implementation and test evidence are not established.

## Modeled dependencies — draft

The SysML block contains generic `dependency` statements from this use-case definition to the stakeholder need and the logical functions in the existing use-case/function matrix. These are *proposed functional dependencies*, not a native `motivates` or `requiresFunction` keyword, not verified implementation, and not independently parser-certified.

## SysML v2

> Draft use-case definition only; do not treat Markdown navigation as certified native SysML relationship semantics.

```sysml
package MDSE_UC_00008 {
    use case def CorrectOrCompleteKnowledge {
        doc /* Modify information to make the knowledge base correct or complete. */
        dependency from CorrectOrCompleteKnowledge to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from CorrectOrCompleteKnowledge to MDSE_BEH_00004::TraverseModelRelationships;
        dependency from CorrectOrCompleteKnowledge to MDSE_BEH_00007::MaintainModelKnowledge;
        dependency from CorrectOrCompleteKnowledge to MDSE_STK_00004::StakeholderNeed04;
    }
}
```
