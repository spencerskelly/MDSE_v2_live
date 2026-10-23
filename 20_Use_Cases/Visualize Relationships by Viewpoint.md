---
type: Use Case
subtype: what
id: UC-00010
uid: 20261021181502001skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00010::VisualizeLinkedElements
---
# Visualize Relationships by Viewpoint

> [!note] Engineering Knowledge Base use case — proposed
> Capability requested by the owner on 2026-10-21. Detailed scenario and implementation coverage are review candidates, not approved requirements.

## Intent

Display elements related to a selected element in a visual form, with selectable engineering viewpoints.

## Primary actor

Engineer or authorized model user

## Main success scenario

1. Select a model element.
2. Choose a viewpoint (e.g. structure, function, design, requirements, interfaces or all relationships).
3. Render nodes and typed links from the same canonical model graph.
4. Change viewpoint without mutating model meaning; inspect and navigate related notes.

## Expected outcome

An understandable graph or canvas showing only the relationships permitted by the chosen viewpoint.

## Alternate / constraint

Missing targets and filtered links are disclosed; an empty view is not proof that no relationships exist.

## Candidate logical functions

Query modeled graph; filter by viewpoint; lay out nodes and links; navigate selected result.

## Current evidence and gap

Workbench includes synthetic graph/canvas view tests; specific combinations and real-vault acceptance not verified.

## Proposed trace

- Stakeholder capability: [[Engineering Knowledge Base]]
- Related use cases: [[Explore Element Relationships]], [[Explore Multiple Relationship Hops]]
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
package MDSE_UC_00010 {
    use case def VisualizeLinkedElements {
        doc /* Display elements related to a selected element in a visual form, with selectable engineering viewpoints. */
        action traverseModelRelationships : MDSE_BEH_00004::TraverseModelRelationships;
        action generateModelViewpoints : MDSE_BEH_00005::GenerateModelViewpoints;
        #refinement dependency from VisualizeLinkedElements to MDSE_STK_00013::EngineeringKnowledgeBase;
        #refinement dependency from VisualizeLinkedElements to MDSE_STK_00007::StakeholderNeed07;
    }
}
```
