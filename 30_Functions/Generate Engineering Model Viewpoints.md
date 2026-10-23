---
type: Behavior
subtype: function
id: BEH-00005
uid: 20261021195900004skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00005::GenerateModelViewpoints
---
# Generate Engineering Model Viewpoints

## Purpose

Create visual, table, document and review projections of selected model content using the same underlying model relationships.

## Inputs

Graph query result; viewpoint; filters and presentation preferences.

## Outputs

Navigable visual, document or review representations with identity/source links.

## Functional decomposition candidates

- Select a model scope and viewpoint
- Use a shared query result rather than independent model semantics
- Render visual nodes/edges, table entries or linked document sections
- Expose filters, limits, missing targets and flags

## Function boundary

A viewpoint is not a competing semantic model; equivalent visual and document projections use the same relationships.

## Use cases depending on this function

- [[Search for a Part, Function or Design]]
- [[Explore Element Relationships]]
- [[Review Requirements for a Design]]
- [[Explore Complete Product Context]]
- [[View and Export Engineering Information]]
- [[Review and Resolve Flagged Model Items]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Explore Multiple Relationship Hops]]
- [[Compare Shared Connections Across Elements]]
- [[Display Flagged Model Data]]

## Candidate verification outcome

View changes do not mutate source notes; corresponding representations cite the same identities; flagged gaps remain visible.

## Existing implementation evidence — not certification

Partial: tools/workbench/src/views.ts, canvas.ts and panel.ts; generalized document viewpoints unverified.

## Proposed subfunctions

- Viewpoint selection
- visual rendering
- document rendering
- review overlays

## Trace status

- [[Engineering Knowledge Base]]
- Derived system requirements, component allocations, verification cases and run results: pending
- Native relationship declarations exist in their owning notes; independent SysML parser certification and runtime canvas acceptance remain open.

## Modeled incoming relationships

[[Viewpoint Projection Engine]] (within [[MDSE Workbench]]) carries the typed `perform action` usage. It remains separate from canonical graph traversal and model ownership.

Function definitions remain reusable in this note; relationships are authored as native SysML usages or dependencies **in their owning notes**, not duplicated here. See [[MDSE Toolset Composition]] and [[Engineering Knowledge Base]] for navigation. All of these links remain Draft pending independent parser and runtime acceptance.

## SysML v2

> Draft standalone action definition; parser acceptance and typed relationship declarations remain to be verified.

```sysml
package MDSE_BEH_00005 {
    action def GenerateModelViewpoints {
        doc /* Create visual, table, document and review projections of selected model content using the same underlying model relationships. */
    }
}
```
