---
type: Requirement
subtype: engineering
id: REQ-98068
uid: 20261021212000088skellyspencer
status: Draft
tags: [last-check]
---
# A quality finding is cleared only by evidence, every audit names the commit it ran on, and a passing baseline is not read as proof for later edits

## Definition

A relationship or traceability finding is cleared by adding the evidence or the justified exception, never by bulk-filling links to make a report pass. Each audit report records the model commit it ran on. A report that passed on an earlier commit says nothing about later edits, and the checks run again after any batch of changes. Quality checks start as report-only, and a check becomes a hard failure only after the templates and schema it depends on are updated. Scripts never rewrite notes, relationships, ids or links silently; an automatic change is a separate reviewable write.

## Notes

- Carried from `PosiBattery` at `ca67e06` and rewritten: `PosiBattery README.md`; `PosiBattery 99_System/10_Docs/PosiBattery Runtime Handoff State.md`; `PosiBattery 99_System/10_Docs/Schema Reconciliation Plan 0.1.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: PosiBattery README.md (state history), 99_System/10_Docs/PosiBattery Runtime Handoff State.md, the 'Relationship Recovery Batch' records, Schema Reconciliation Plan 0.1.md (validation and script impacts) and the review reports. Aggregate lesson: a 100-step plan and 28-step linking program passed on their snapshot, then a day of further edits produced 256 missing inverse assertions and 75 incompatible endpoints, repaired over seven batches.
- Compared with MDSE_v2 at d35af12: TST-004 gate G0 and the importer preflight check structural integrity of the import, and REQ-98056/98057 cover derived state and source reports. I found no rule that a report names its commit, that a green baseline does not carry forward, or that findings are cleared only by evidence. REQ-98034 separates states but does not address regression after edits.
- Practical point for v2: the Workbench and oracle results should print the commit they ran on, so a result copied into a handoff can be tied to a state.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AQualityFindingIsClearedOnlyByEvidenceEveryAuditNamesTheCommitItRanOnAndAPassingBaselineIsNotReadAsProofForLaterEdits {
        doc /* Findings are cleared by evidence; audits name their commit. */
    }
}
```
