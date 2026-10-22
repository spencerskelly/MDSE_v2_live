---
type: Requirement
subtype: engineering
id: REQ-98034
uid: 20261021212000053skellyspencer
status: Draft
tags: [last-check]
---
# Model validity, review, evidence and release are separate states

## Definition

A note or relationship carries no single 'valid' or 'approved' flag. Six states are kept apart: syntax valid; references resolved; semantic checks passed; engineering reviewed; evidence current; released. Language checks (the first three) are reported by the Workbench or the parser. Review, evidence and release are set by people through the workflow. A satisfaction link can be structurally valid and unreviewed; a verification case can exist and not have been run; a passing result can belong to an earlier configuration; a mitigation can be modeled and not demonstrated. A dashboard never rolls the six states into one value.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 88_Reference/resolve.md (section 7)`; `Test_Vault_ 88_Reference/SysML v2 integration.md (section 12)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 notes carry `status` (Draft and similar) in frontmatter and the Workbench reports parser results, but nothing separates review, evidence currency and release. The nearest rules are TST-009 (handoff checks), REQ-98031 (a stored analysis result is marked stale) and Baseline protection for the accepted model.
- Source is a design discussion kept as a reference page (phrased 'I would ...'), not an owner decision.
- The same idea applies to the work itself: the V1 master map says a file is never called complete because it exists, and tracks approved, implemented, synthetic-tested, real-source-tested, parser-accepted, GUI-accepted and released separately.

> [!flagNote] Draft proposal. Owner decides which of the six states v2 stores in frontmatter, which stay computed, and who may set them.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ModelValidityReviewEvidenceAndReleaseAreSeparateStates {
        doc /* Validity, review, evidence currency and release are tracked as separate states. */
    }
}
```
