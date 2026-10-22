---
type: Requirement
subtype: stakeholder
id: STK-98001
uid: 20261021212000000skellyspencer
status: Draft
tags: [last-check]
---
# Opening a vault leaves Obsidian responsive

## Definition

Engineers need Obsidian to open to a responsive, readable workspace first. MDSE capabilities may become ready afterwards, in explicit stages. A failure in any MDSE subsystem must leave plain Markdown reading and editing usable, and must be reported as a scoped failure rather than shown as a valid result. Stability comes before feature latency.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Startup Stability Plan.md`; `55_Workspace/Workbench Performance and Stability Roadmap.md`.
- Compared with MDSE_v2 at `d35af12`.
- Existing implementation rules: WKB-002, WKB-004 (staged readiness, no model I/O in onload or layout-ready). This note adds the need they serve, so a later change to those rules can be tested against it.
- Stages named in the source: Obsidian startup safe, then core model graph ready, then heavier derived data on demand or in the background, then warm-start restore. Warm-start is enabled only after the earlier stages are accepted.
- A cache restore that fails falls back to a cooperative cold build and never leaves partly restored state visible (roadmap step 43). The semantic cache is disposable acceleration, never authoritative model state.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def OpeningAVaultLeavesObsidianResponsive {
        doc /* Opening a vault yields a responsive Obsidian first; MDSE readiness follows in stages and failures stay scoped. */
    }
}
```
