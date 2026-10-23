---
type: Object
subtype: software
id: OBJ-00009
uid: 20261023141300009skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00009::RelationshipQueryEngine
---
# Relationship Query Engine

## Responsibility

Traverses explicitly modeled typed links with path, filter and depth constraints for selected elements.

This is a **reusable software part definition**, not a separate application or duplicate logical-function definition. The owning software tool contains one typed part usage with a native `perform action` reference to a function definition.

## Implementation evidence for this decomposition

- `tools/workbench/src/index.ts`
- `tools/workbench/src/views.ts`

## Original rule provenance

- [[GOV-012]] — governed source rule reference, with original status and normative ruleset link.
- [[WKB-016]] — governed source rule reference, with original status and normative ruleset link.

## Additional draft requirement responsibilities

[[MDSE Toolset Composition]] allocates [[REQ-31296 - WKB-016 Statement 1]] (port syntax scanning) and [[REQ-31306 - WKB-020 Statement 1]] (one semantic relationship despite dual YAML/SysML storage) to the **Workbench tool usage**. Relationship Query Engine may own aspects of deduplication, while port parsing could be shared with Model Discovery Index or Core; no unsupported sub-role assignment is implied.

## Model ownership

- Parent software tool: [[MDSE Workbench]].
- Exact source-module boundary and parser/Obsidian acceptance: **pending**.
- Not a declaration that the proposed capabilities or verification cases have passed testing.

## SysML v2

```sysml
package MDSE_OBJ_00009 {
    part def RelationshipQueryEngine {
        doc /* Traverses explicitly modeled typed links with path, filter and depth constraints for selected elements. */
    }
}
```
