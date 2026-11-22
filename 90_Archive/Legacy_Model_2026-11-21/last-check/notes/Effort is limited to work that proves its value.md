---
type: Requirement
subtype: stakeholder
id: STK-98002
uid: 20261021212000001skellyspencer
status: Draft
tags: [last-check]
---
# Effort is limited to work that proves its value

## Definition

The owner needs remaining work filtered by a value test. A task continues only if it materially improves at least one of: model integrity (no wrong, stale, duplicated, orphaned or corrupted data), engineering usability, release confidence (the tools proven together on the real model), performance at real scale, or adoption and operability on Mac and Windows. Internal neatness, duplicate documentation, speculative abstraction and optimisation without a measured bottleneck are deferred.

Hardening of one boundary ends when its covered paths are recorded. Further defensive work on it restarts only when a real test exposes a new failure.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md`.
- Compared with MDSE_v2 at `d35af12`.
- Not carried by any MDSE_v2 rule. GOV-003 (Unreviewed rules are not binding) and ROADMAP.md sequence work but do not state a value test.
- The source also lists work to defer unless evidence changes: more numbered stability steps, diagram generation before the semantic model is accepted, cross-vault infrastructure, broad Canvas gestures, vault pruning without a measured problem, cosmetic documentation clean-up, and plugin removal without measured benefit. MDSE_v2 already defers diagrams (IMP-072) and cross-vault.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def EffortIsLimitedToWorkThatProvesItsValue {
        doc /* Work continues only when it improves integrity, usability, release confidence, scale performance or adoption. */
    }
}
```
