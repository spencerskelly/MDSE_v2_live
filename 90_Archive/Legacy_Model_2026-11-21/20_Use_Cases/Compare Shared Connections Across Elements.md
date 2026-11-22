---
type: Use Case
subtype: what
id: UC-00013
uid: 20261021181502004skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00013::CompareCommonLinkedElements
---
# Compare Shared Connections Across Elements

> [!note] Engineering Knowledge Base use case — proposed
> Capability requested by the owner on 2026-10-21. Detailed scenario and implementation coverage are review candidates, not approved requirements.

## Intent

Select two or more elements and display the elements or paths that are connected to multiple selections.

## Primary actor

Engineer, systems architect, analyst or reviewer

## Main success scenario

1. Select two or more source elements.
2. Choose viewpoint, relation types, direction and optional hop depth.
3. Determine shared connected elements and optionally the distinct paths from each selection.
4. Display common and selection-specific connections in visual or document form.

## Expected outcome

The user identifies common functions, requirements, components, interfaces or other connections among selected elements.

## Alternate / constraint

Distinguish direct shared neighbors from multi-hop intersection; if none, show no intersection rather than combining unrelated elements.

## Candidate logical functions

Multi-seed graph query; compute common neighbors and path intersections; preserve input provenance; visualize or report intersection.

## Current evidence and gap

No verified multi-selection shared-connection implementation established; treat as gap until tested.

## Proposed trace

- Stakeholder capability: [[Engineering Knowledge Base]]
- Related use cases: [[Explore Multiple Relationship Hops]], [[Visualize Relationships by Viewpoint]]
- Functions, derived requirements and verification: pending review.
- Relationship links are draft navigation; not independently SysML-parser-certified.

## Proposed functional coverage

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]

The model now distinguishes native action usages, need refinements, and limited supporting dependencies. Parser and runtime acceptance remain under review.

## Native relationship semantics — draft

- 2 owned typed `action` usage(s) express behavior appearing in the described user scenario, without implying the selected software performer has been verified.
- 2 `#refinement dependency` statement(s) detail stakeholder needs rather than asserting successful implementation.

The reclassification reflects the actual use-case scenario, not an automatic type conversion. The SysML block remains the single authored source; parser acceptance and system verification remain open.

## SysML v2

> Draft SysML definition; this model's native syntax and relationships have not been independently parser-verified.

```sysml
package MDSE_UC_00013 {
    private import ModelingMetadata::Refinement;
    use case def CompareCommonLinkedElements {
        doc /* Select two or more elements and display the elements or paths that are connected to multiple selections. */
        action traverseModelRelationships : MDSE_BEH_00004::TraverseModelRelationships;
        action generateModelViewpoints : MDSE_BEH_00005::GenerateModelViewpoints;
        #refinement dependency from CompareCommonLinkedElements to MDSE_STK_00013::EngineeringKnowledgeBase;
        #refinement dependency from CompareCommonLinkedElements to MDSE_STK_00007::StakeholderNeed07;
    }
}
```
