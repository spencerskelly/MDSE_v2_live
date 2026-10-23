---
type: Behavior
subtype: function
id: BEH-00004
uid: 20261021195900003skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00004::TraverseModelRelationships
---
# Query and Traverse Model Relationships

## Purpose

Answer queries on typed model relationships for one or several elements, including direction, types, hop depth, paths and shared connections.

## Inputs

One or more model elements; typed model graph; depth/direction/filter settings.

## Outputs

Typed paths, related elements, common connections, unresolved and cap evidence.

## Functional decomposition candidates

- Resolve selected seed element identities
- Read explicit typed relationships from the canonical model
- Apply direction, relation filters, hop bounds and cycle safety
- For multiple seeds calculate shared neighbors or path intersections
- Return paths, limits and unresolved endpoint evidence

## Function boundary

A multi-seed common connection is not simply the union of every seed's neighbors. Never infer an unrecorded link.

## Use cases depending on this function

- [[Explore Element Relationships]]
- [[Review Requirements for a Design]]
- [[Explore Complete Product Context]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Explore Multiple Relationship Hops]]
- [[Compare Shared Connections Across Elements]]

## Candidate verification outcome

Controlled 1/2-hop traversal works; multi-seed intersection excludes non-common neighbors; capped/missing edges are disclosed.

## Existing implementation evidence — not certification

Partial: tools/workbench/src/index.ts, views.ts and workbench.test.ts; shared-connection intersection unverified.

## Proposed subfunctions

- Direct link resolution
- multi-hop traversal
- shared-connection intersection

## Trace status

- [[Engineering Knowledge Base]]
- Derived system requirements, component allocations, verification cases and run results: pending
- Native relationship declarations exist in their owning notes; independent SysML parser certification and runtime canvas acceptance remain open.

## Modeled incoming relationships

[[Relationship Query Engine]] (within [[MDSE Workbench]]) carries the typed `perform action` usage for this function. Multi-hop and shared-connection use cases refer to this same definition.

Function definitions remain reusable in this note; relationships are authored as native SysML usages or dependencies **in their owning notes**, not duplicated here. See [[MDSE Toolset Composition]] and [[Engineering Knowledge Base]] for navigation. All of these links remain Draft pending independent parser and runtime acceptance.

## SysML v2

> Draft standalone action definition; parser acceptance and typed relationship declarations remain to be verified.

```sysml
package MDSE_BEH_00004 {
    action def TraverseModelRelationships {
        doc /* Answer queries on typed model relationships for one or several elements, including direction, types, hop depth, paths and shared connections. */
    }
}
```
