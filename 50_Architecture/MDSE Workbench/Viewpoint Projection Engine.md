---
type: Object
subtype: software
id: OBJ-00010
uid: 20261023141300010skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00010::ViewpointProjectionEngine
---
# Viewpoint Projection Engine

## Responsibility

Projects model relationships into reviewable visual, table and document viewpoints while keeping one semantic graph.

This is a **reusable software part definition**, not a separate application or duplicate logical-function definition. The owning software tool contains one typed part usage with a native `perform action` reference to a function definition.

## Implementation evidence for this decomposition

- `tools/workbench/src/views.ts`
- `tools/workbench/src/canvas.ts`

## Original rule provenance

- [[GOV-012]] — governed source rule reference, with original status and normative ruleset link.
- [[WKB-020]] — governed source rule reference, with original status and normative ruleset link.

## Model ownership

- Parent software tool: [[MDSE Workbench]].
- Exact source-module boundary and parser/Obsidian acceptance: **pending**.
- Not a declaration that the proposed capabilities or verification cases have passed testing.

## SysML v2

```sysml
package MDSE_OBJ_00010 {
    part def ViewpointProjectionEngine {
        doc /* Projects model relationships into reviewable visual, table and document viewpoints while keeping one semantic graph. */
    }
}
```
