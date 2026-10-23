---
type: Object
subtype: software
id: OBJ-00008
uid: 20261023141300008skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00008::ModelDiscoveryIndex
---
# Model Discovery Index

## Responsibility

Indexes model identities and retrieves owning notes by names, aliases and search criteria without becoming the source of model semantics.

This is a **reusable software part definition**, not a separate application or duplicate logical-function definition. The owning software tool contains one typed part usage with a native `perform action` reference to a function definition.

## Implementation evidence for this decomposition

- `tools/workbench/src/index.ts`
- `tools/workbench/src/views.ts`

## Original rule provenance

- [[GOV-012]] — governed source rule reference, with original status and normative ruleset link.
- [[WKB-008]] — governed source rule reference, with original status and normative ruleset link.

## Model ownership

- Parent software tool: [[MDSE Workbench]].
- Exact source-module boundary and parser/Obsidian acceptance: **pending**.
- Not a declaration that the proposed capabilities or verification cases have passed testing.

## SysML v2

```sysml
package MDSE_OBJ_00008 {
    part def ModelDiscoveryIndex {
        doc /* Indexes model identities and retrieves owning notes by names, aliases and search criteria without becoming the source of model semantics. */
    }
}
```
