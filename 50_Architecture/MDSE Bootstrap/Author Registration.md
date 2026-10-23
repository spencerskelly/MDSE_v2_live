---
type: Object
subtype: software
id: OBJ-00018
uid: 20261023141400018skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00018::AuthorRegistration
---
# Author Registration

## Software responsibility

Establishes author identity used by governed note creation and update operations.

This is a reusable **software part definition** owned as a typed usage by [[MDSE Bootstrap]]. It is a draft decomposition based on the existing implementation inventory. No unverified separate service, process, or executed behavior is asserted.

## Implementation evidence

- `tools/bootstrap/src/main.js` — source path reported by the tool implementation baseline; function boundaries and acceptance remain subject to testing.

## Original rule sources

- [[GOV-012]] — trace to the original rule, with its exact wording and source revision in the reference note.

## SysML v2

```sysml
package MDSE_OBJ_00018 {
    part def AuthorRegistration {
        doc /* Establishes author identity used by governed note creation and update operations. */
    }
}
```
