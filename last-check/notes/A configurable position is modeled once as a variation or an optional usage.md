---
type: Requirement
subtype: engineering
id: REQ-98017
uid: 20261021212000036skellyspencer
status: Draft
tags: [last-check]
---
# A configurable position is modeled once as a variation or an optional usage

## Definition

A position in an assembly that can be filled in more than one way, or left empty, is one usage in the owning assembly, not a link from the assembly to every candidate. A required position that resolves to exactly one of several allowed concrete definitions is a variation point; a position that may be absent is optional. Candidates come from the specialization hierarchy of the stated definition, transitively; a concrete root definition is itself a candidate; a definition marked abstract organizes concrete ones and cannot fill a position; abstractness is not inherited. Optionality belongs to the usage, never to the reusable definition, so the same definition can be optional in one assembly and required in another. The base architecture stays unresolved; a named configuration is stored separately from it and identifies each position by its stable address. A configuration distinguishes unresolved (no entry) from absent (explicitly excluded, valid only for an optional position); a completed configuration resolves every variation and includes or excludes every optional position. Commercial and model-number codes belong to a product or configuration, not to the reusable definition. Connections and flows are not varied directly; they follow the selected or absent positions.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workspace Decision Log.md (W-314, W-319)`.
- Compared with MDSE_v2 at `d35af12`.
- MOD-153 and MOD-157 carry the usage semantics for the V1 Local Model, and MOD-153 is marked as replaced by SysML usages under D-0003. The catalog describes `variation` and `abstract` as language words. Nothing in v2 says how configurations are stored, that unresolved differs from absent, or that a definition is never optional by itself.
- In SysML v2 terms the position is a usage; `variation` and `variant` express the choice, and optional is multiplicity `0..1`. EA has no variation concept, so this is a modeling rule for new work, not an import rule. W-314 deferred cross-variant compatibility lists until a real case needs them.

> [!flagNote] Depends on D-0003. Confirm that the SysML v2 terms (variation, variant, multiplicity 0..1) replace the V1 `usage: standard | variant | option` field.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AConfigurablePositionIsModeledOnceAsAVariationOrAnOptionalUsage {
        doc /* A configurable position is one usage; a configuration is stored outside the base model. */
    }
}
```
