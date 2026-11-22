---
type: Object
subtype: software
id: OBJ-00012
uid: 20261023141400012skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00012::NoteAndSysmlCodec
---
# Note and SysML Codec

## Software responsibility

Reads and writes the governed note format and authoritative SysML v2 text without creating another semantic source.

This is a reusable **software part definition** owned as a typed usage by [[MDSE Core]]. It is a draft decomposition based on the existing implementation inventory. No unverified separate service, process, or executed behavior is asserted.

## Implementation evidence

- `tools/core/src/mdse_core.js` — source path reported by the tool implementation baseline; function boundaries and acceptance remain subject to testing.

## Original rule sources

- [[GOV-012]] — trace to the original rule, with its exact wording and source revision in the reference note.

## SysML v2

```sysml
package MDSE_OBJ_00012 {
    part def NoteAndSysmlCodec {
        doc /* Reads and writes the governed note format and authoritative SysML v2 text without creating another semantic source. */
    }
}
```
