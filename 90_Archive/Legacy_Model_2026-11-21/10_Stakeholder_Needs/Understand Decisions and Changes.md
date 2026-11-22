---
type: Requirement
subtype: stakeholder
id: STK-00010
uid: 20261021163400010skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00010::StakeholderNeed10
---
# Understand Decisions and Changes

**Status:** Proposed model element; not an approved new governance rule.

**Statement:** Maintainers need a reviewable record of approved decisions, affected semantics, changes and exceptions.

**Stakeholder:** Model owner and software team

**Existing basis:** GOV-004; DECISIONS.md

## Proposed trace links

- No trace established yet — an explicit review gap.

These are provisional navigational links. Formal native SysML relationships, endpoint typing, and independent parser acceptance remain to be verified. Do not treat a link or verification declaration as passed evidence.

## Native inbound relationship review

**Supporting use-case dependency:** [[Review and Resolve Flagged Model Items]]. The use-case retains generic `dependency`, because its flag disposition relies on this concern without refining all of its outcomes.

**Draft requirement refinements:** [[REQ-31137 - IMP-075 Statement 1]] and [[REQ-31138 - IMP-075 Statement 2]] independently detail the import-change-record aspect. Their respective requirement definitions own the native `#refinement` statements. No assertion of approval, satisfaction, or test pass follows.

Modeling authority is the source use-case SysML block; this note is the reusable stakeholder requirement definition. Review the [semantic disposition ledger](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) and [[MDSE Knowledge Base - Modeled Dependencies]]. Parser acceptance and implemented coverage are not inferred.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_STK_00010 {
    requirement def StakeholderNeed10 {
        doc /* Maintainers need a reviewable record of approved decisions, affected semantics, changes and exceptions. */
    }
}
```
