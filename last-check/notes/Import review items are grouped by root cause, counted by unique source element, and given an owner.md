---
type: Requirement
subtype: engineering
id: REQ-98040
uid: 20261021212000059skellyspencer
status: Draft
tags: [last-check]
---
# Import review items are grouped by root cause, counted by unique source element, and given an owner

## Definition

The import's review output is grouped by root cause, not listed as one row per warning. Each group states how many unique source elements it affects, gives one or two representative examples, and names who must act: the importer rule or code, a defect in the source data, or an engineering review of the model. A source element that raises two warnings is counted once. A group whose cause is a bug in the importer is fixed in the importer and is not sent to an engineer. The report separates three things that look alike: a count of warnings, a count of unique elements, and a count of decisions an engineer has to make. Only the last one is the engineer's workload.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/11_Importer/Definition/Importer Issue Register.md (IMP-014, IMP-017)`; `Test_Vault_ 100_Archive/V1/11_Importer/History/Importer Revisions/EA_to_MDSE_Native_Importer/v0.8.4 and v0.8.5 READMEs; Testing/v0.8.19/FULL_IMPORT_EXECUTION_STATUS.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: the V1 Importer Issue Register items IMP-014 (review evidence grouped by root cause) and IMP-017 (owner of each group). The V1 acceptance run showed why: 438 warnings about folded Parts were 219 unique source Parts, each warned twice by two passes of the same function. The same population then split into three different meanings (behavior references, state references and interface flow properties), and only one of the three needed an engineering decision.
- Another example from the same run: the BindingConnector review table labelled 232 pairs 'temporary local equals' because it tested only whether both ends had the same owner, while the model actually held 23 exposures, 191 temporary equals and 35 pairs with nothing written. A reviewer could not tell resolved from unresolved. The table must report the disposition that was really written.
- Compared with MDSE_v2 at d35af12: the ledger gives every EA row one disposition and a diagnostic code (IMP-059), and TRANSLATION.md lists the codes with an action for each. Nothing in RULESET or the importer groups the review rows by root cause, counts unique elements, or assigns an owner category. REQ-98036 (coverage state for a missing link) and REQ-98034 (separate states) are related but do not cover this.
- Related v2 rules: IMP-059 (ledger), TST-006 (acceptance gates on accounting, not on zero flags). TST-006 says flags are expected; this note says how to make the flags readable.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12. The three owner categories come from the source register and may need renaming for v2.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ImportReviewItemsAreGroupedByRootCauseCountedByUniqueSourceElementAndGivenAnOwner {
        doc /* Review findings are grouped by cause, counted once per source element, and each group has an owner. */
    }
}
```
