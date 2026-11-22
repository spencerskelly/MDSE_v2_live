---
type: Behavior
subtype: function
id: BEH-00008
uid: 20261024073600008skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00008::ResolveSourceIdentity
semanticReview: pending
---
# Resolve Source Identity

## Purpose

Match incoming source identifiers and provenance to exactly one existing model identity, or report an ambiguous/unresolved match without creating a duplicate.

## Inputs

Source namespace, source record identifier, existing identity crosswalk.

## Outputs

Resolved stable UID or explicit unresolved/ambiguous disposition.

## Parent function and user intent

- [[Ingest and Reconcile Engineering Sources]] is the reusable parent function; this definition is used as one nested action in that parent's SysML definition.
- This is a decomposition candidate grounded in the existing parent function, not a claim that the behavior is implemented or tested.

## Proposed verification

Reimport of the same GUID resolves to the same UID; ambiguous matches do not allocate a new identity.

**Status:** no independently executed test or native parser certification. Derive the corresponding requirement and verification case after semantic review.

## SysML v2

```sysml
package MDSE_BEH_00008 {
    action def ResolveSourceIdentity {
        doc /* Match incoming source identifiers and provenance to exactly one existing model identity, or report an ambiguous/unresolved match without creating a duplicate. */
    }
}
```
