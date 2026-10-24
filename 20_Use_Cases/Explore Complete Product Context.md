---
type: Use Case
subtype: what
id: UC-00005
uid: 20261021181501004skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00005::ExploreProductContext
---
# Explore Complete Product Context

> [!note] Draft use case for Engineering Knowledge Base
> The user action comes from the owner. Process steps, actors and success outcomes are initial interpretations for review; not an approved software specification.

## Intent

View all aspects of a product and its context including external systems and actors.

## Primary actor

Engineer; system architect; technical reviewer

## Trigger

User needs to understand a product's role and interfaces.

## Main scenario (proposed)

Select a product, system, assembly or component; navigate structure, behavior, interfaces, external actors/systems; drill upward/downward as available.

## Successful outcome

Product boundary and modeled context are understandable at chosen depth.

## Alternative and review concern

Model granularity varies; do not imply absent component details exist.

## Candidate logical functions

Navigate hierarchy; inspect behavior/interfaces; present actors and external systems.

## Traceability

- Stakeholder need: [[Engineering Knowledge Base]]
- Engineering requirements: not yet derived
- Test case and executed evidence: not yet established
- Formal SysML link to stakeholder need: pending independent parser validation

## Proposed functional coverage

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]

The modeled relationships below now distinguish native actions, refinements, and supporting dependencies. Their endpoint semantics and independent parser acceptance remain under review.

## Native relationship semantics — draft

- 2 typed `action` usage(s) express actual functions in this user scenario; an `action` usage is not the software's `perform action` allocation.
- 1 `#refinement dependency`(ies) elaborate the corresponding stakeholder requirement; this does not claim satisfaction.
- 1 generic `dependency` remains because this need is a supporting prerequisite, not a refinement of its intent.

Semantic decisions are based on this note's described scenario. All additions remain Draft until model parsing and runtime verification.

## Additional source-backed requirement dependencies — Draft

This use case depends on [[REQ-31296]], [[REQ-31306]] as candidate behavior needed for the scenario. The owning SysML block holds these relationships. Dependency does not mean satisfaction, completed testing or requirement approval.

## SysML v2

> Draft use-case definition only; do not treat Markdown navigation as certified native SysML relationship semantics.

```sysml
package MDSE_UC_00005 {
    private import ModelingMetadata::Refinement;
    use case def ExploreProductContext {
        doc /* View all aspects of a product and its context including external systems and actors. */
        action traverseModelRelationships : MDSE_BEH_00004::TraverseModelRelationships;
        action generateModelViewpoints : MDSE_BEH_00005::GenerateModelViewpoints;
        #refinement dependency from ExploreProductContext to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from ExploreProductContext to MDSE_STK_00019::ArchitectureDefinition;
        dependency from ExploreProductContext to MDSE_REQ_31296::RuleREQ31296;
        dependency from ExploreProductContext to MDSE_REQ_31306::RuleREQ31306;
    }
}
```
