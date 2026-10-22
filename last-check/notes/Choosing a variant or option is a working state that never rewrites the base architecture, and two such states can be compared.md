---
type: Requirement
subtype: engineering
id: REQ-98051
uid: 20261021212000071skellyspencer
status: Draft
tags: [last-check]
---
# Choosing a variant or option is a working state that never rewrites the base architecture, and two such states can be compared

## Definition

For a part that can be a variant or an option, the Workbench shows the candidates that the specialization family allows and lets the engineer pick one, or switch an option on or off. The pick is held as a configuration state apart from the base architecture. Selecting a variant never changes the definition stored in the base occurrence. A view can be filtered to the chosen configuration so that an absent option removes the topology that depends on it. A choice that is out of the family, that names an abstract definition, or that a later change to the family has made invalid is reported and never repaired by choosing another definition. Two configurations can be compared. Saving a named configuration waits until its stored format is defined.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/docs/Definition/01 - Workbench Product Definition.md`; `Test_Vault_ 100_Archive/V1/14_Workbench/docs/Definition/04 - Architecture and Model Boundary.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Test_Vault_ 100_Archive/V1/14_Workbench/docs/Definition/01 - Workbench Product Definition.md ('Variation and configuration experience (W-314)'), 04 - Architecture and Model Boundary.md ('Contextual usage and configuration boundary') and 03 - Build Outline and Roadmap.md ('W-314 configuration follow-on', seven steps). V1 never built this beyond reading usage and abstract.
- Compared with MDSE_v2 at d35af12: MOD-153, MOD-157 and MOD-160 carry usage standard, variant and option, with candidates drawn from the subtypeOf family. A configuration state, its validity findings, the filtered view and the comparison are not in v2's rules. The V1 text also says commercial model-number codes belong to product configuration knowledge and not to the reusable definition; I found no equivalent v2 rule. Related: the use case 'compares two assembly configurations' in this set.

> [!flagNote] Draft. Deferred in V1 and not in v2; the owner decides whether it is wanted.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ChoosingAVariantOrOptionIsAWorkingStateThatNeverRewritesTheBaseArchitectureAndTwoSuchStatesCanBeCompared {
        doc /* A variant or option choice is a separate working state, validated, and comparable. */
    }
}
```
