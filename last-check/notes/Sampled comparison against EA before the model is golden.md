---
type: Requirement
subtype: engineering
id: REQ-98002
uid: 20261021212000007skellyspencer
status: Draft
tags: [last-check]
---
# Sampled comparison against EA before the model is golden

## Definition

For each class of note, a random sample is compared with the source EA model for name, type, text, properties and relationships. Proposed sizes: 20 notes per class, and 50 for Requirement and Port. One engineer per discipline (electrical, mechanical, software) signs off their part. Systemic findings are corrected in the importer rules and the model is re-imported; findings that are per-note are fixed or logged.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 7 item 8, D8)`; `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (F1)`.
- Compared with MDSE_v2 at `d35af12`.
- Not carried by any MDSE_v2 rule. TST-004 G0 to G8 prove counts, mapping and determinism, not agreement with what an engineer sees in EA.
- Real data stays out of the repository (DAT rules). Sample results are recorded privately, as for other real-data evidence.

> [!flagNote] Sample sizes are the source's proposal, not a decision. Who signs off per discipline was an open question (D8).
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def SampledComparisonAgainstEABeforeTheModelIsGolden {
        doc /* A random sample per class is compared with EA and signed off by one engineer per discipline. */
    }
}
```
