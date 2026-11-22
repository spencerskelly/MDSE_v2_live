---
type: Requirement
subtype: engineering
id: REQ-98003
uid: 20261021212000008skellyspencer
status: Draft
tags: [last-check]
---
# Performance limits on the slowest team machine

## Definition

Opening the vault, building the Workbench index and running the model check are measured on the slowest practical team machine with the real-size vault. Proposed limits: vault open under 60 seconds, index under 60 seconds, model check under 120 seconds. Representative view load and edit latency are recorded too. Only measured bottlenecks are optimised.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 7 item 9, W7, B5)`; `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (F2)`.
- Compared with MDSE_v2 at `d35af12`.
- MDSE_v2 TST-002 gates memory and completion at 10,000 notes but sets no timing limit and no real-machine measurement.
- The source recorded CI timings on a real-size vault (read-only scan about 11 s, representative views about 5 s, edit transaction about 78 ms). The slowest-machine run was never done. The source's V1 term 'Check Local Model' is read here as 'model check'.

> [!flagNote] Limits are the source's proposal. Confirm numbers against the first real run.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def PerformanceLimitsOnTheSlowestTeamMachine {
        doc /* Vault open, index build and model check meet agreed time limits on the slowest team machine. */
    }
}
```
