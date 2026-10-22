---
type: Requirement
subtype: engineering
id: REQ-98008
uid: 20261021212000013skellyspencer
status: Draft
tags: [last-check]
---
# Plugin baseline changes one dependency at a time with evidence

## Definition

A plugin stays in the controlled default stack only if it provides a capability still required for the standard MDSE experience that Obsidian core, Bootstrap or Workbench does not already provide more reliably. Changing the baseline needs: every file, template and process that depends on the plugin identified; the replacement workflow named; the replacement tested in a disposable vault; startup and runtime compared with and without the plugin; macOS and Windows behaviour checked where relevant; the Base Vault, plugin lock, enabled-plugin documentation and troubleshooting updated. Only one dependency changes at a time, so a regression has one cause.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Runtime Plugin Dependency Audit.md`.
- Compared with MDSE_v2 at `d35af12`.
- Existing rules: BAS-003 (Dataview removed after replacement and startup-cost gates), BOO-001 (essential, provisional, review). This note adds the evidence steps and the one-at-a-time rule.
- Measurement named in the source: Obsidian startup time with the full stack, per-plugin startup time, whether each plugin scans the whole vault, memory after idle, and which functions the Base Vault actually uses. One measured result: removing Dataview improved Workbench readiness by 34 seconds with identical model counts.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def PluginBaselineChangesOneDependencyAtATimeWithEvidence {
        doc /* A plugin leaves or enters the controlled stack only on evidence, one dependency at a time. */
    }
}
```
