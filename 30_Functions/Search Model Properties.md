---
type: Behavior
subtype: function
id: BEH-00009
uid: 20261024073600009skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00009::SearchModelProperties
semanticReview: pending
---
# Search Model Properties

## Purpose

Search YAML properties, authoritative SysML text, aliases and note bodies with scoped field criteria while returning the owning note identity.

## Inputs

Scope, field selector, search value and current model index.

## Outputs

Owning-note matches with field/source context and ambiguity indication.

## Parent function and user intent

- [[Discover and Resolve Model Elements]] is the reusable parent function; this definition is used as one nested action in that parent's SysML definition.
- This is a decomposition candidate grounded in the existing parent function, not a claim that the behavior is implemented or tested.

## Proposed verification

A known property query finds the owning note; an unmatched field does not silently fall back to an unrelated text hit.

**Status:** no independently executed test or native parser certification. Derive the corresponding requirement and verification case after semantic review.

## SysML v2

```sysml
package MDSE_BEH_00009 {
    action def SearchModelProperties {
        doc /* Search YAML properties, authoritative SysML text, aliases and note bodies with scoped field criteria while returning the owning note identity. */
    }
}
```
