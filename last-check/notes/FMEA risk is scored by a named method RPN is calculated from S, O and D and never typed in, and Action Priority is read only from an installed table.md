---
type: Requirement
subtype: engineering
id: REQ-98053
uid: 20261021212000073skellyspencer
status: Draft
tags: [last-check]
---
# FMEA risk is scored by a named method: RPN is calculated from S, O and D and never typed in, and Action Priority is read only from an installed table

## Definition

A risk note records the raw severity, occurrence and detection scores. The risk priority number is calculated as S x O x D and is never edited by hand. Action Priority is read only from the official lookup table of a method version that has been selected and installed; if no table is installed, the result is reported as not evaluated and not as a guessed Low, Medium or High. Thresholds for the RPN rank belong to the organization. When a score is accepted, the standard or method version, the revision and the reviewer are recorded. The Workbench shows a table with S, O, D, RPN, AP, the method and the affected model elements.

## Notes

- Carried from `v2_test` at `f43f231` and rewritten: `v2_test 99_System/FMEA Scoring Contract.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: v2_test 99_System/FMEA Scoring Contract.md (and the two synthetic FMEA examples in 80_Reviews, which carry both views in YAML). The same source says formal links from a risk to the affected usage, function or requirement are a mapping task, and that ratings, controls and actions may stay human-owned.
- Compared with MDSE_v2 at d35af12: I searched RULESET.md, DECISIONS.md and OPEN_DECISIONS.md for FMEA, RPN and action priority. The only hit is IMP-030 (FMEA tags are kept as body lines with real values). v2 has no scoring rule.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search. Whether FMEA scoring belongs in this toolset is the owner's decision.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def FMEARiskIsScoredByANamedMethodRPNIsCalculatedFromSOAndDAndNeverTypedInAndActionPriorityIsReadOnlyFromAnInstalledTable {
        doc /* RPN is derived from S, O and D; AP is table-driven or not evaluated. */
    }
}
```
