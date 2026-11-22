---
type: Behavior
subtype: activity
id: BEH-98003
uid: 20261021212000020skellyspencer
status: Draft
tags: [last-check]
---
# Stepwise execution of a numbered plan

## Definition

When an AI tool or a person works through a numbered plan, it proceeds one step at a time:
1. Find the first step with no completion evidence; that is the only active step.
2. Read the step, the earlier steps it depends on, and the current code or notes for the seam before changing anything.
3. Keep scope exact; do not pull later-step behaviour forward. A blocking prerequisite defect may be fixed, with the exception recorded.
4. Measure before setting policy; measurement steps do not change thresholds.
5. A step is complete only when the work exists in the authoritative repository, tests cover it, and the plan records what changed and where the proof lives.
6. Record intent, files changed, test result and anything deferred, so a later session can continue without prior chat.
7. After documenting one step, stop and wait for the owner's explicit approval to start the next.
8. A step already satisfied is marked complete with proof; steps are never deleted or renumbered.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workbench Performance and Stability Roadmap.md (Execution contract, Execution rule)`.
- Compared with MDSE_v2 at `d35af12`.
- Candidate for a new AI process (AIP-001 requires an instruction file and an ID for each). Matches the owner's way of working: one decision at a time, with analysis done first.
- Source: the execution contract of the Workbench stability roadmap (60 numbered steps, closed). The contract is general; the steps were V1 Workbench work and are not carried.

> [!flagNote] Proposed as an AI process. Needs an ID and instruction file if adopted.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    action def StepwiseExecutionOfANumberedPlan {
        doc /* A numbered plan is executed one proven step at a time, stopping for owner approval after each. */
    }
}
```
