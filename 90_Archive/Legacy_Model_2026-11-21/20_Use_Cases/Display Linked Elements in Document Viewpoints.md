---
type: Use Case
subtype: what
id: UC-00011
uid: 20261021181502002skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00011::DocumentViewOfLinks
---
# Display Linked Elements in Document Viewpoints

> [!note] Engineering Knowledge Base use case — proposed
> Capability requested by the owner on 2026-10-21. Detailed scenario and implementation coverage are review candidates, not approved requirements.

## Intent

Display the same linked engineering content as a navigable document or structured report with different viewpoints.

## Primary actor

Engineer, technical writer or authorized model user

## Main success scenario

1. Select a model element and a document viewpoint.
2. Query applicable relationships using the shared graph selection rules.
3. Render an ordered narrative, outline, table or report with linked element identity and provenance.
4. Review the resulting document view or export where supported.

## Expected outcome

A document-form perspective on the chosen model with traceability to originating elements.

## Alternate / constraint

Avoid copying model definitions as a second authority; rendered text is derived from source notes.

## Candidate logical functions

Query viewpoint projection; render document/list hierarchy; preserve source links; present/export.

## Current evidence and gap

Workbench tables/CSV exist, but a general document-form multi-view renderer is unverified.

## Proposed trace

- Stakeholder capability: [[Engineering Knowledge Base]]
- Related use cases: [[View and Export Engineering Information]], [[Compose Documentation from Embedded Notes]]
- Functions, derived requirements and verification: pending review.
- Relationship links are draft navigation; not independently SysML-parser-certified.

## Proposed functional coverage

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]
- [[Compose and Exchange Engineering Knowledge]]

The model now distinguishes native action usages, need refinements, and limited supporting dependencies. Parser and runtime acceptance remain under review.

## Native relationship semantics — draft

- 3 owned typed `action` usage(s) express behavior appearing in the described user scenario, without implying the selected software performer has been verified.
- 2 `#refinement dependency` statement(s) detail stakeholder needs rather than asserting successful implementation.

The reclassification reflects the actual use-case scenario, not an automatic type conversion. The SysML block remains the single authored source; parser acceptance and system verification remain open.

## Additional source-backed requirement dependencies — Draft

This use case depends on [[REQ-31306]] as candidate behavior needed for the scenario. The owning SysML block holds these relationships. Dependency does not mean satisfaction, completed testing or requirement approval.

## SysML v2

> Draft SysML definition; this model's native syntax and relationships have not been independently parser-verified.

```sysml
package MDSE_UC_00011 {
    private import ModelingMetadata::Refinement;
    use case def DocumentViewOfLinks {
        doc /* Display the same linked engineering content as a navigable document or structured report with different viewpoints. */
        action traverseModelRelationships : MDSE_BEH_00004::TraverseModelRelationships;
        action generateModelViewpoints : MDSE_BEH_00005::GenerateModelViewpoints;
        action composeEngineeringKnowledge : MDSE_BEH_00006::ComposeEngineeringKnowledge;
        #refinement dependency from DocumentViewOfLinks to MDSE_STK_00013::EngineeringKnowledgeBase;
        #refinement dependency from DocumentViewOfLinks to MDSE_STK_00007::StakeholderNeed07;
        dependency from DocumentViewOfLinks to MDSE_REQ_31306::RuleREQ31306;
    }
}
```
