---
type: Requirement
subtype: engineering
id: REQ-98011
uid: 20261021212000016skellyspencer
status: Draft
tags: [last-check]
---
# CI acceptance workflows fail loudly and run the packaged command

## Definition

Acceptance workflows propagate failure: a piped command never hides a non-zero exit (for example behind tee). Workflows that rebuild a large vault or upload large artifacts run only on demand, not on every push. The acceptance command that users or release owners run is itself executed by CI, so a module-format or packaging change cannot silently break it.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (WB-128 gate 2 note)`; `55_Workspace/Workbench Performance and Stability Roadmap.md (acceptance harness follow-up)`.
- Compared with MDSE_v2 at `d35af12`.
- Lessons from V1 runs: an all-in-one acceptance workflow hid failures behind tee and rebuilt and uploaded a 28,000-note vault on ordinary pushes; an acceptance script failed under a CommonJS context because it used top-level await, and the importer was blamed for a test-runner defect.
- MDSE_v2 GOV-001 requires CI green and TST-001 requires tests in CI; neither covers these failure modes.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def CIAcceptanceWorkflowsFailLoudlyAndRunThePackagedCommand {
        doc /* CI propagates failures, runs heavy jobs on demand, and executes the packaged acceptance command. */
    }
}
```
