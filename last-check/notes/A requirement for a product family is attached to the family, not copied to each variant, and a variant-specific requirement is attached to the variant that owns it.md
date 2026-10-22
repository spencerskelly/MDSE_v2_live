---
type: Requirement
subtype: engineering
id: REQ-98065
uid: 20261021212000085skellyspencer
status: Draft
tags: [last-check]
---
# A requirement for a product family is attached to the family, not copied to each variant, and a variant-specific requirement is attached to the variant that owns it

## Definition

Requirement applicability is stated with appliesTo, and folder placement or prose never establishes it. A requirement that holds for a whole product family points to the family element. It is not copied to each child product, because a copy would claim that every child complies when that may not yet be shown. A requirement owned by one variant points to that variant. A subtype link does not carry requirements to the child. When a family requirement later has exceptions or variant refinements, they are written as their own requirement or model element and not inferred from the folder tree. A review report counts family-level, variant-specific and unclassified requirements so unclassified ones are visible.

## Notes

- Carried from `PosiBattery` at `ca67e06` and rewritten: `PosiBattery requirement-applicability-review.md`; `PosiBattery 99_System/09_Tools/review-requirement-satisfaction.py`.
- Compared with MDSE_v2 at `d35af12`.
- Source: PosiBattery requirement-applicability-review.md (summary counts and interpretation section). In its sample, 4 of 8 requirements were family-level, 2 variant-specific, and 3 of 9 applicability assertions had no scope classification (a requirement on estimator firmware designs).
- Compared with MDSE_v2 at d35af12: MOD-091 says requirement scope uses appliesTo and REG-026 says a state-scoped requirement uses appliesTo to the state. Nothing says what a family-level requirement is attached to, that it is not copied to children, or that specialization does not inherit it. REQ-98038 covers the context of a satisfy or verify claim, which is a different question.
- Related to the previous note (scope kind). Only aggregate counts from the source are used here.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ARequirementForAProductFamilyIsAttachedToTheFamilyNotCopiedToEachVariantAndAVariantSpecificRequirementIsAttachedToTheVariantThatOwnsIt {
        doc /* Family requirements attach to the family; variant requirements to the variant; subtype does not inherit. */
    }
}
```
