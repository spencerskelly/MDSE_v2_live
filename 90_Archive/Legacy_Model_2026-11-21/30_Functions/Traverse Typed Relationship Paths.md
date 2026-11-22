---
type: Behavior
subtype: function
id: BEH-00010
uid: 20261024073600010skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00010::TraverseTypedRelationshipPaths
semanticReview: pending
---
# Traverse Typed Relationship Paths

## Purpose

Traverse explicit directed and typed model relationships from selected seeds with configurable hop bounds, cycle prevention and disclosed missing endpoints.

## Inputs

Seed UID, selected relationship types, direction, maximum depth and authoritative graph.

## Outputs

Typed paths with visited nodes, traversal limits and unresolved endpoints.

## Parent function and user intent

- [[Query and Traverse Model Relationships]] is the reusable parent function; this definition is used as one nested action in that parent's SysML definition.
- This is a decomposition candidate grounded in the existing parent function, not a claim that the behavior is implemented or tested.

## Proposed verification

A cyclic three-node fixture terminates and returns only recorded edges; a missing target is disclosed.

**Status:** no independently executed test or native parser certification. Derive the corresponding requirement and verification case after semantic review.

## SysML v2

```sysml
package MDSE_BEH_00010 {
    action def TraverseTypedRelationshipPaths {
        doc /* Traverse explicit directed and typed model relationships from selected seeds with configurable hop bounds, cycle prevention and disclosed missing endpoints. */
    }
}
```
