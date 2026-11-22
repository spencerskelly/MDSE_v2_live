---
type: Object
subtype: software
id: OBJ-00007
uid: 20261023141300007skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00007::SourceReconciliationEngine
---
# Source Reconciliation Engine

## Responsibility

Normalizes supported engineering sources, reconciles model identities, and records reviewable import dispositions.

This is a **reusable software part definition**, not a separate application or duplicate logical-function definition. The owning software tool contains one typed part usage with a native `perform action` reference to a function definition.

## Implementation evidence for this decomposition

- `tools/importer/src/run.ts`
- `tools/importer/src/ea_source.ts`
- `tools/importer/src/bom.ts`
- `tools/importer/src/merge.ts`

## Original rule provenance

- [[GOV-012]] — governed source rule reference, with original status and normative ruleset link.
- [[IMP-074]] — governed source rule reference, with original status and normative ruleset link.
- [[IMP-075]] — governed source rule reference, with original status and normative ruleset link.
- [[IMP-076]] — governed source rule reference, with original status and normative ruleset link.

## Model ownership

- Parent software tool: [[MDSE Importer]].
- Exact source-module boundary and parser/Obsidian acceptance: **pending**.
- Not a declaration that the proposed capabilities or verification cases have passed testing.

## SysML v2

```sysml
package MDSE_OBJ_00007 {
    part def SourceReconciliationEngine {
        doc /* Normalizes supported engineering sources, reconciles model identities, and records reviewable import dispositions. */
    }
}
```
