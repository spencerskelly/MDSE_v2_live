---
type: Requirement
subtype: engineering
id: REQ-98049
uid: 20261021212000069skellyspencer
status: Draft
tags: [last-check]
---
# The plugin set is exercised automatically in a real Obsidian: first open, restart cycles, recovery, live edit and plugin overlap

## Definition

A build is not accepted on unit tests alone. Automated jobs start a real Obsidian on a disposable vault and check: that the controlled plugins activate on first open, that repeated restarts give the same result, that a damaged derived cache is recovered by a rebuild, that a live edit is picked up, that the generated views can be created, and that the controlled plugins do not interfere with each other. Each job reports its observations as evidence and fails when the observed state differs from the locked release.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/.github/workflows`; `Test_Vault_ 100_Archive/V1/14_Workbench/bench`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 14_Workbench .github/workflows (integration-candidate-startup, integration-cold-start, integration-live-edit, integration-plugin-overlap, integration-recovery, integration-restart-cycles, integration-view-capability, build-artifact) and the bench probe scripts obsidian-e2e-setup, obsidian-e2e-activate, obsidian-e2e-observe, obsidian-recovery-probe, obsidian-restart-cycle-probe, obsidian-plugin-overlap-probe, obsidian-live-edit-probe and obsidian-view-capability-probe. I read their names and the workflow header comments; I did not read each script line by line.
- Compared with MDSE_v2 at d35af12: the repository has one workflow, ci.yml, and I found no job that starts Obsidian. The bootstrap README says first-open acceptance in real Obsidian is pending, and the V1 first-open sheet has 21 manual rows. These V1 jobs are the automatic version of that sheet. They need Obsidian to be installable on a CI runner, which I did not check.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12. Whether a headless Obsidian can run in v2's CI is not verified.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ThePluginSetIsExercisedAutomaticallyInARealObsidianFirstOpenRestartCyclesRecoveryLiveEditAndPluginOverlap {
        doc /* A build is accepted only after automatic runs in a real Obsidian on a disposable vault. */
    }
}
```
