---
type: Use Case
subtype: what
id: UC-00016
uid: 20261021181502007skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00016::DisplayFlaggedData
---
# Display Flagged Model Data

> [!note] Engineering Knowledge Base use case — proposed
> Capability requested by the owner on 2026-10-21. Detailed scenario and implementation coverage are review candidates, not approved requirements.

## Intent

Display flagged notes, relationships and records with their type, context, source and unresolved status.

## Primary actor

Any authorized reader; engineer; model steward

## Main success scenario

1. Open a flagged-data view or select a relevant model scope.
2. Filter flags by category, element type, view or selected engineering context.
3. Show each flagged item with linked owning element, issue details and evidence.
4. Navigate to the flagged note or review process.

## Expected outcome

Users can see known gaps and unreliable or incomplete model content before relying on it.

## Alternate / constraint

Flag display does not auto-resolve the issue; flag resolution is handled by UC-00009.

## Candidate logical functions

Discover flags; scope/filter review records; display linked evidence and owning notes.

## Current evidence and gap

Workbench Review UI indexes flags; broad scoped flag display and acceptance not yet verified.

## Proposed trace

- Stakeholder capability: [[Engineering Knowledge Base]]
- Related use cases: [[Review and Resolve Flagged Model Items]]
- Functions, derived requirements and verification: pending review.
- Relationship links are draft navigation; not independently SysML-parser-certified.

## Proposed functional coverage

- [[Discover and Resolve Model Elements]]
- [[Generate Engineering Model Viewpoints]]
- [[Maintain and Improve Model Knowledge]]

The model now distinguishes native action usages, need refinements, and limited supporting dependencies. Parser and runtime acceptance remain under review.

## Native relationship semantics — draft

- 2 owned typed `action` usage(s) express behavior appearing in the described user scenario, without implying the selected software performer has been verified.
- 1 `#refinement dependency` statement(s) detail stakeholder needs rather than asserting successful implementation.
- The BEH-00007 link was deferred because displaying flagged model data does not itself maintain or correct it; [[Review and Resolve Flagged Model Items]] is the separate editing/review scenario.

The reclassification reflects the actual use-case scenario, not an automatic type conversion. The SysML block remains the single authored source; parser acceptance and system verification remain open.

## SysML v2

> Draft SysML definition; this model's native syntax and relationships have not been independently parser-verified.

```sysml
package MDSE_UC_00016 {
    private import ModelingMetadata::Refinement;
    use case def DisplayFlaggedData {
        doc /* Display flagged notes, relationships and records with their type, context, source and unresolved status. */
        action discoverModelElements : MDSE_BEH_00003::DiscoverModelElements;
        action generateModelViewpoints : MDSE_BEH_00005::GenerateModelViewpoints;
        #refinement dependency from DisplayFlaggedData to MDSE_STK_00013::EngineeringKnowledgeBase;
    }
}
```
