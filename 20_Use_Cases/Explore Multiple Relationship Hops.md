---
type: Use Case
subtype: what
id: UC-00012
uid: 20261021181502003skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00012::ExploreMultipleHops
---
# Explore Multiple Relationship Hops

> [!note] Engineering Knowledge Base use case — proposed
> Capability requested by the owner on 2026-10-21. Detailed scenario and implementation coverage are review candidates, not approved requirements.

## Intent

Display relationships across multiple hops from the selected element rather than only directly attached elements.

## Primary actor

Engineer, systems architect or reviewer

## Main success scenario

1. Select a starting element.
2. Set maximum hop depth and eligible relationship families, direction and viewpoint.
3. Traverse explicitly modeled relationships and display path or graph results with depth indicators.
4. Expand or narrow scope and inspect each intermediate element.

## Expected outcome

The user sees how a selected element connects through one or more intermediates without hidden or invented edges.

## Alternate / constraint

Apply cycle protection, scope/cap disclosure and predictable filtering; report truncated traversals.

## Candidate logical functions

Traverse model graph; bound depth and filters; deduplicate paths; report cycles and caps.

## Current evidence and gap

Workbench contains depth/hops and filtering logic; exact full contract and performance acceptance unverified.

## Proposed trace

- Stakeholder capability: [[Engineering Knowledge Base]]
- Related use cases: [[Explore Element Relationships]], [[Compare Shared Connections Across Elements]]
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
package MDSE_UC_00012 {
    use case def ExploreMultipleHops {
        doc /* Display relationships across multiple hops from the selected element rather than only directly attached elements. */
        action traverseModelRelationships : MDSE_BEH_00004::TraverseModelRelationships;
        action generateModelViewpoints : MDSE_BEH_00005::GenerateModelViewpoints;
        #refinement dependency from ExploreMultipleHops to MDSE_STK_00013::EngineeringKnowledgeBase;
        #refinement dependency from ExploreMultipleHops to MDSE_STK_00007::StakeholderNeed07;
    }
}
```
