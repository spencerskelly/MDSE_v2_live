---
type: Requirement
subtype: engineering
id: REQ-98009
uid: 20261021212000014skellyspencer
status: Draft
tags: [last-check]
---
# Bootstrap activation behaves correctly under drift

## Definition

Bootstrap passes first-open acceptance only when each scenario holds across a restart, in one integrated vault:
1. A community plugin that is disabled is re-enabled by Bootstrap, and stays enabled after restart.
2. Core Canvas, if disabled, is enabled by Bootstrap and stays enabled.
3. Core Templates, if enabled, is disabled by Bootstrap and stays disabled.
4. A damaged locked plugin stays disabled and drift is reported.
5. A change to a governed data.json is detected and not overwritten.
6. An extra community plugin produces a warning and is neither disabled nor uninstalled.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Handoff Prompt - MDSE v0.8 Implementation.md (Bootstrap 0.3.1 promotion gate)`.
- Compared with MDSE_v2 at `d35af12`.
- BOO-005, BOO-007 and BOO-008 state the behaviour. The six scenarios were the explicit promotion gate for Bootstrap 0.3.1 in V1 and are not in MDSE_v2 as a test list.
- Runs on macOS and on Windows. Obsidian's 'Trust author and enable plugins' choice is stored outside the vault (BOO-008).

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def BootstrapActivationBehavesCorrectlyUnderDrift {
        doc /* Bootstrap enables, disables, preserves and reports according to six drift scenarios, across restart. */
    }
}
```
