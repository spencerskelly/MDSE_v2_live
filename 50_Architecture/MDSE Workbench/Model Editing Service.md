---
type: Object
subtype: software
id: OBJ-00011
uid: 20261023141300011skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00011::ModelEditingService
---
# Model Editing Service

## Responsibility

Offers eligible model-element and relationship changes and applies controlled SysML-text edit and review operations.

This is a **reusable software part definition**, not a separate application or duplicate logical-function definition. The owning software tool contains one typed part usage with a native `perform action` reference to a function definition.

## Implementation evidence for this decomposition

- `tools/workbench/src/edit.ts`
- `tools/workbench/src/edit_rel.ts`

## Original rule provenance

- [[GOV-012]] — governed source rule reference, with original status and normative ruleset link.
- [[WKB-008]] — governed source rule reference, with original status and normative ruleset link.
- [[WKB-011]] — governed source rule reference, with original status and normative ruleset link.
- [[WKB-012]] — governed source rule reference, with original status and normative ruleset link.

## Additional draft requirement responsibilities

[[MDSE Toolset Composition]] allocates the existing WKB-012 requirement candidates [[REQ-31286 - WKB-012 Statement 1]], [[REQ-31287 - WKB-012 Statement 2]], [[REQ-31288 - WKB-012 Statement 3]], and the WKB-016 editing candidates [[REQ-31297 - WKB-016 Statement 2]] and [[REQ-31298 - WKB-016 Statement 3]] to the **Workbench tool usage**. Model Editing Service is a possible responsible internal role, but no lower-level allocation has been made or validated.

## Model ownership

- Parent software tool: [[MDSE Workbench]].
- Exact source-module boundary and parser/Obsidian acceptance: **pending**.
- Not a declaration that the proposed capabilities or verification cases have passed testing.

## SysML v2

```sysml
package MDSE_OBJ_00011 {
    part def ModelEditingService {
        doc /* Offers eligible model-element and relationship changes and applies controlled SysML-text edit and review operations. */
    }
}
```
