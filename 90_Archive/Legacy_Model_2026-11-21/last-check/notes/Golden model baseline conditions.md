---
type: Requirement
subtype: engineering
id: REQ-98001
uid: 20261021212000006skellyspencer
status: Draft
tags: [last-check]
---
# Golden model baseline conditions

## Definition

A model is golden, and EA can be retired, only when all of the following hold:
1. It was produced by a released, matched set of importer, Base Vault, Workbench and Bootstrap, and Bootstrap passed its first-open checks on macOS and Windows.
2. The import run passed every translator check and its evidence package is kept.
3. Every post-import review item is resolved or has a recorded reason.
4. Headless model checks report zero errors, and every remaining warning is fixed or on an accepted list.
5. A sampled comparison against EA is signed off (see the sampling requirement).
6. The model is tagged as a baseline and its source archive is stored read-only with a checksum (see the baseline protection requirement).

Until then every vault is a candidate that may be discarded and regenerated.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 1, section 7)`.
- Compared with MDSE_v2 at `d35af12`.
- Open decision in the Rules Register: REG-264 (OPEN-09), 'what makes a vault ready for finishing touches (golden definition)'. This note is a candidate answer.
- MDSE_v2 TST-004 and TST-005 define tool acceptance gates. TST-005 R7 forbids a golden claim until outcome and UI checks are complete but does not define the checks. MOD-128 gates A to E are also tool gates.
- The V1 source named V1 artefacts in conditions 1 and 4 (Local Model report, inverse consistency, tracesTo count). They are generalised here.

> [!flagNote] Proposal in the source (D1), never decided. Needs owner confirmation before it becomes a rule.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def GoldenModelBaselineConditions {
        doc /* A model is golden only when tools, run evidence, review items, checks, EA sample and baseline are all satisfied. */
    }
}
```
