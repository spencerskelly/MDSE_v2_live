---
type: Requirement
subtype: engineering
id: REQ-98066
uid: 20261021212000086skellyspencer
status: Draft
tags: [last-check]
---
# An unresolved satisfaction is recorded as an explicit coded exception with a reason, a link is never inferred to clear it, and a verification intent may exist before its satisfier

## Definition

When a requirement has no function or design that demonstrably satisfies it, the note records a coded exception with a stated reason instead of linking the nearest design by inference. The same applies to other absent chain links, such as a need with no use case or a function with no design. The exception code is chosen from a controlled list: not applicable, reference leaf, framing note, research only, historical, architecture unresolved, evidence pending, import holding, unmodeled implementation, reusable unselected. Only the last-named unresolved kinds (architecture unresolved, evidence pending, import holding) are reported as open work. A verification may be defined for a requirement before any satisfier exists, and the coverage report shows both facts separately.

## Notes

- Carried from `PosiBattery` at `ca67e06` and rewritten: `PosiBattery architecture-design-linking-review.md`; `PosiBattery market-reference-leaf-review.md`; `PosiBattery verification-coverage-review.md`; `PosiBattery 99_System/09_Tools/review-true-orphans.py`.
- Compared with MDSE_v2 at `d35af12`.
- Source: PosiBattery architecture-design-linking-review.md, market-reference-leaf-review.md, verification-coverage-review.md, and the review scripts under 99_System/09_Tools (review-true-orphans, review-requirement-satisfaction, review-end-to-end-product-chains). In the source, 7 of 8 active requirements had a satisfier and all 8 had verification intent; the 1 without a satisfier carried EXC-ARCH-UNRESOLVED. Exception code counts across the scripts and notes: not applicable 255, reference leaf 111, architecture unresolved 47, framing 25, research only 23, evidence pending 17.
- Compared with MDSE_v2 at d35af12: REQ-98036 reports a missing link with a coverage state and not as an error, and REQ-98034 separates validity, review and release. Neither defines a controlled list of reasons for a gap, a rule that a gap is recorded and not filled by inference, or that verification can precede a satisfier. A search of RULESET.md and the register for exception class and disposition registry found nothing.
- This extends REQ-98036 with the reasons. Flag for the owner: the list of ten codes comes from one product vault and may be more than v2 needs.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12. Extends REQ-98036; owner decides the code list.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AnUnresolvedSatisfactionIsRecordedAsAnExplicitCodedExceptionWithAReasonALinkIsNeverInferredToClearItAndAVerificationIntentMayExistBeforeItsSatisfier {
        doc /* A gap is a coded exception with a reason and is never filled by inference. */
    }
}
```
