---
type: Object
subtype: software
id: OBJ-00016
uid: 20261023141400016skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00016::RuntimeIntegrityCheck
---
# Runtime Integrity Check

## Software responsibility

Checks the installed runtime and managed plugin release state before safe activation or repair.

This is a reusable **software part definition** owned as a typed usage by [[MDSE Bootstrap]]. It is a draft decomposition based on the existing implementation inventory. No unverified separate service, process, or executed behavior is asserted.

## Implementation evidence

- `tools/bootstrap/src/main.js` — source path reported by the tool implementation baseline; function boundaries and acceptance remain subject to testing.

## Original rule sources

- [[GOV-012]] — trace to the original rule, with its exact wording and source revision in the reference note.
- [[BOO-001]] — trace to the original rule, with its exact wording and source revision in the reference note.

## SysML v2

```sysml
package MDSE_OBJ_00016 {
    part def RuntimeIntegrityCheck {
        doc /* Checks the installed runtime and managed plugin release state before safe activation or repair. */
    }
}
```
