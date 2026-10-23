---
type: Object
subtype: software
id: OBJ-00015
uid: 20261023141400015skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00015::PinnedPluginPayload
---
# Pinned Plugin Payload

## Software responsibility

Packages the governed plugin payload and its release identity without owning engineer-authored model content.

This is a reusable **software part definition** owned as a typed usage by [[MDSE Base Vault]]. It is a draft decomposition based on the existing implementation inventory. No unverified separate service, process, or executed behavior is asserted.

## Implementation evidence

- `tools/base-vault/src/base_vault.ts` — source path reported by the tool implementation baseline; function boundaries and acceptance remain subject to testing.

## Original rule sources

- [[GOV-012]] — trace to the original rule, with its exact wording and source revision in the reference note.
- [[BAS-001]] — trace to the original rule, with its exact wording and source revision in the reference note.
- [[BOO-001]] — trace to the original rule, with its exact wording and source revision in the reference note.

## SysML v2

```sysml
package MDSE_OBJ_00015 {
    part def PinnedPluginPayload {
        doc /* Packages the governed plugin payload and its release identity without owning engineer-authored model content. */
    }
}
```
