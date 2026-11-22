---
type: Object
subtype: software
id: OBJ-00014
uid: 20261023141400014skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00014::GovernedConfiguration
---
# Governed Configuration

## Software responsibility

Defines and packages governed vault configuration, schemas and defaults for a consistent engineering environment.

This is a reusable **software part definition** owned as a typed usage by [[MDSE Base Vault]]. It is a draft decomposition based on the existing implementation inventory. No unverified separate service, process, or executed behavior is asserted.

## Implementation evidence

- `tools/base-vault/src/base_vault.ts` — source path reported by the tool implementation baseline; function boundaries and acceptance remain subject to testing.

## Original rule sources

- [[GOV-012]] — trace to the original rule, with its exact wording and source revision in the reference note.
- [[BAS-001]] — trace to the original rule, with its exact wording and source revision in the reference note.

## SysML v2

```sysml
package MDSE_OBJ_00014 {
    part def GovernedConfiguration {
        doc /* Defines and packages governed vault configuration, schemas and defaults for a consistent engineering environment. */
    }
}
```
