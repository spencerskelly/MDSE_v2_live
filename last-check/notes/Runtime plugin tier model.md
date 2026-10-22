---
type: Object
subtype: software
id: OBJ-98001
uid: 20261021212000031skellyspencer
status: Draft
tags: [last-check]
---
# Runtime plugin tier model

## Definition

Plugins in the controlled stack are placed in one of four tiers, which set how much they may own and how freely they can be replaced.
- Tier A, core: Bootstrap and Workbench. Both stay narrow: Bootstrap protects the environment and does no model indexing; Workbench owns model semantics.
- Tier B, operational dependencies: Git sync and Templater. Kept until a replacement is proven.
- Tier C, presentation and engineer experience: for example advanced Canvas. May fail or be disabled without corrupting the model; never semantic authority.
- Tier D, optional convenience: not forced on every vault unless value exceeds cost.
Each plugin is reviewed on seven questions: engineering value, semantic role, startup and runtime cost, overlap, failure impact, configuration burden, and replacement gate.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Runtime Plugin Dependency Audit.md`.
- Compared with MDSE_v2 at `d35af12`.
- BOO-001 lists essential, provisional and review plugins but gives no tiers or criteria. Pair this with the requirement on one dependency at a time.
- Target in the source: a small controlled core of Obsidian core, Bootstrap, Workbench, the minimum sync mechanism, and only those presentation plugins with measurable value. Reducing the stack is a means, not a goal.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    part def RuntimePluginTierModel {
        doc /* Controlled plugins belong to one of four tiers with seven review criteria. */
    }
}
```
