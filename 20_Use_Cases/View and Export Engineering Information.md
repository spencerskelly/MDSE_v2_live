---
type: Use Case
subtype: what
id: UC-00006
uid: 20261021181501005skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00006::ViewAndExportInformation
---
# View and Export Engineering Information

> [!note] Draft use case for Engineering Knowledge Base
> The user action comes from the owner. Process steps, actors and success outcomes are initial interpretations for review; not an approved software specification.

## Intent

View model data and export it for communication to others.

## Primary actor

Engineer; authorized collaborator

## Trigger

User needs to share selected engineering information.

## Main scenario (proposed)

Choose model element/list/view; set scope and filters; review status/provenance; export appropriate representation.

## Successful outcome

A shareable representation reflects selected model information and indicates its status.

## Alternative and review concern

Audience permissions, export formats, and approval for external disclosure need definition.

## Candidate logical functions

Select model data; render views; export governed information.

## Traceability

- Stakeholder need: [[Engineering Knowledge Base]]
- Engineering requirements: not yet derived
- Test case and executed evidence: not yet established
- Formal SysML link to stakeholder need: pending independent parser validation

## View and composition refinements

- [[Display Linked Elements in Document Viewpoints]] gives a structured document-form view of selected links and relationships.
- [[Visualize Relationships by Viewpoint]] gives a visual counterpart based on the same underlying selection.
- [[Compose Documentation from Embedded Notes]] uses Obsidian `![[...]]` transclusion to assemble presentations or documentation without copying a semantic definition.

Exports are presentation artifacts derived from authoritative notes, and must not automatically become another source of truth.

## Proposed functional coverage

- [[Generate Engineering Model Viewpoints]]
- [[Compose and Exchange Engineering Knowledge]]

The use-case/function links are now recorded as draft native SysML dependencies. Their qualified endpoints and intended meaning remain subject to independent parser and Workbench checks; implementation and test evidence are not established.

## Modeled dependencies — draft

The SysML block contains generic `dependency` statements from this use-case definition to the stakeholder need and the logical functions in the existing use-case/function matrix. These are *proposed functional dependencies*, not a native `motivates` or `requiresFunction` keyword, not verified implementation, and not independently parser-certified.

## SysML v2

> Draft use-case definition only; do not treat Markdown navigation as certified native SysML relationship semantics.

```sysml
package MDSE_UC_00006 {
    use case def ViewAndExportInformation {
        doc /* View model data and export it for communication to others. */
        dependency from ViewAndExportInformation to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from ViewAndExportInformation to MDSE_BEH_00005::GenerateModelViewpoints;
        dependency from ViewAndExportInformation to MDSE_BEH_00006::ComposeEngineeringKnowledge;
        dependency from ViewAndExportInformation to MDSE_STK_00001::StakeholderNeed01;
    }
}
```
