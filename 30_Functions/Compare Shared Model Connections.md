---
type: Behavior
subtype: function
id: BEH-00011
uid: 20261024073600011skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00011::CompareSharedModelConnections
semanticReview: pending
---
# Compare Shared Model Connections

## Purpose

Find common neighbors or typed paths shared by two or more selected model elements rather than returning their union.

## Inputs

At least two resolved seed elements, graph and filters.

## Outputs

Intersection result with each supporting seed/path and disclosed exclusions.

## Parent function and user intent

- [[Query and Traverse Model Relationships]] is the reusable parent function; this definition is used as one nested action in that parent's SysML definition.
- This is a decomposition candidate grounded in the existing parent function, not a claim that the behavior is implemented or tested.

## Proposed verification

A common-neighbor fixture excludes neighbors attached to only one seed.

**Status:** no independently executed test or native parser certification. Derive the corresponding requirement and verification case after semantic review.

## SysML v2

```sysml
package MDSE_BEH_00011 {
    action def CompareSharedModelConnections {
        doc /* Find common neighbors or typed paths shared by two or more selected model elements rather than returning their union. */
    }
}
```
