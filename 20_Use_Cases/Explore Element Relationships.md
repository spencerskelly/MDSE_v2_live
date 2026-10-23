---
type: Use Case
subtype: what
id: UC-00003
uid: 20261021181501002skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00003::ExploreElementLinks
---
# Explore Element Relationships

> [!note] Draft use case for Engineering Knowledge Base
> The user action comes from the owner. Process steps, actors and success outcomes are initial interpretations for review; not an approved software specification.

## Intent

View how an element is linked to other elements.

## Primary actor

Organization user; engineer

## Trigger

User wants to understand an element's context.

## Main scenario (proposed)

Select element; show explicit typed incoming/outgoing links; navigate definitions, usages, owners, dependents; identify unresolved links.

## Successful outcome

Linked concepts and relationship types can be understood, with gaps visible.

## Alternative and review concern

Do not fabricate links; do not silently hide missing endpoints.

## Candidate logical functions

Resolve typed links; build relationship views; report dangling links.

## Traceability

- Stakeholder need: [[Engineering Knowledge Base]]
- Engineering requirements: not yet derived
- Test case and executed evidence: not yet established
- Formal SysML link to stakeholder need: pending independent parser validation

## Relationship exploration refinements

- [[Visualize Relationships by Viewpoint]] — selectable visual perspectives.
- [[Display Linked Elements in Document Viewpoints]] — readable structured/document perspectives.
- [[Explore Multiple Relationship Hops]] — user-selected relationship depth.
- [[Compare Shared Connections Across Elements]] — common linked elements across two or more selections.

These are separate view/query capabilities over **one canonical model graph**, not distinct stores of semantic relationships. A filtered or capped view must disclose the filtering and cannot claim that omitted connections do not exist.

## Proposed functional coverage

- [[Query and Traverse Model Relationships]]
- [[Generate Engineering Model Viewpoints]]

The use-case/function links are now recorded as draft native SysML dependencies. Their qualified endpoints and intended meaning remain subject to independent parser and Workbench checks; implementation and test evidence are not established.

## Modeled dependencies — draft

The SysML block contains generic `dependency` statements from this use-case definition to the stakeholder need and the logical functions in the existing use-case/function matrix. These are *proposed functional dependencies*, not a native `motivates` or `requiresFunction` keyword, not verified implementation, and not independently parser-certified.

## SysML v2

> Draft use-case definition only; do not treat Markdown navigation as certified native SysML relationship semantics.

```sysml
package MDSE_UC_00003 {
    use case def ExploreElementLinks {
        doc /* View how an element is linked to other elements. */
        dependency from ExploreElementLinks to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from ExploreElementLinks to MDSE_BEH_00004::TraverseModelRelationships;
        dependency from ExploreElementLinks to MDSE_BEH_00005::GenerateModelViewpoints;
        dependency from ExploreElementLinks to MDSE_STK_00007::StakeholderNeed07;
    }
}
```
