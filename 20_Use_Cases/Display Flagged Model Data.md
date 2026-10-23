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

These are draft use-case/function relations only. Formal SysML links, requirements, implementation allocation and test evidence remain to be established.

## Modeled dependencies — draft

The SysML block contains generic `dependency` statements from this use-case definition to the stakeholder need and the logical functions in the existing use-case/function matrix. These are *proposed functional dependencies*, not a native `motivates` or `requiresFunction` keyword, not verified implementation, and not independently parser-certified.

## SysML v2

> Draft SysML definition; this model's native syntax and relationships have not been independently parser-verified.

```sysml
package MDSE_UC_00016 {
    use case def DisplayFlaggedData {
        doc /* Display flagged notes, relationships and records with their type, context, source and unresolved status. */
        dependency from DisplayFlaggedData to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from DisplayFlaggedData to MDSE_BEH_00003::DiscoverModelElements;
        dependency from DisplayFlaggedData to MDSE_BEH_00005::GenerateModelViewpoints;
        dependency from DisplayFlaggedData to MDSE_BEH_00007::MaintainModelKnowledge;
    }
}
```
