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

The modeled relationships below now distinguish native actions, refinements, and supporting dependencies. Their endpoint semantics and independent parser acceptance remain under review.

## Native relationship semantics — draft

- 2 typed `action` usage(s) express actual functions in this user scenario; an `action` usage is not the software's `perform action` allocation.
- 1 `#refinement dependency`(ies) elaborate the corresponding stakeholder requirement; this does not claim satisfaction.
- 1 generic `dependency` remains because this need is a supporting prerequisite, not a refinement of its intent.

Semantic decisions are based on this note's described scenario. All additions remain Draft until model parsing and runtime verification.

## SysML v2

> Draft use-case definition only; do not treat Markdown navigation as certified native SysML relationship semantics.

```sysml
package MDSE_UC_00008 {
    use case def CorrectOrCompleteKnowledge {
        doc /* Modify information to make the knowledge base correct or complete. */
        action traverseModelRelationships : MDSE_BEH_00004::TraverseModelRelationships;
        action maintainModelKnowledge : MDSE_BEH_00007::MaintainModelKnowledge;
        #refinement dependency from CorrectOrCompleteKnowledge to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from CorrectOrCompleteKnowledge to MDSE_STK_00004::StakeholderNeed04;
    }
}
```
