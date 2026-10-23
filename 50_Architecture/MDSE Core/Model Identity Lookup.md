---
type: Object
subtype: software
id: OBJ-00013
uid: 20261023141400013skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00013::ModelIdentityLookup
---
# Model Identity Lookup

## Software responsibility

Resolves governed note identifiers and source-model identities for shared model operations.

This is a reusable **software part definition** owned as a typed usage by [[MDSE Core]]. It is a draft decomposition based on the existing implementation inventory. No unverified separate service, process, or executed behavior is asserted.

## Implementation evidence

- `tools/core/src/mdse_core.js` — source path reported by the tool implementation baseline; function boundaries and acceptance remain subject to testing.

## Original rule sources

- [[GOV-012]] — trace to the original rule, with its exact wording and source revision in the reference note.
- [[MOD-018]] — trace to the original rule, with its exact wording and source revision in the reference note.

## SysML v2

```sysml
package MDSE_OBJ_00013 {
    part def ModelIdentityLookup {
        doc /* Resolves governed note identifiers and source-model identities for shared model operations. */
    }
}
```
