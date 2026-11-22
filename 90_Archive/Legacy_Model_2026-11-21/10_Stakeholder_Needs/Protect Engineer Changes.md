---
type: Requirement
subtype: stakeholder
id: STK-00004
uid: 20261021163400004skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00004::StakeholderNeed04
---
# Protect Engineer Changes

**Status:** Proposed model element; not an approved new governance rule.

**Statement:** Engineers need their accepted edits and decisions to survive later imports and updates.

**Stakeholder:** Engineering team and model owner

**Existing basis:** MDSE_DEFINITION.md Merge rules

## Proposed trace links

- No trace established yet — an explicit review gap.

These are provisional navigational links. Formal native SysML relationships, endpoint typing, and independent parser acceptance remain to be verified. Do not treat a link or verification declaration as passed evidence.

## Native inbound relationship review

**Supporting use-case dependencies:** [[Import an Engineering Model]], [[Correct or Complete Knowledge]]. Their use-case definitions retain generic dependencies because their scenarios rely on this concern without fully refining it.

**Draft requirement refinement:** [[REQ-31139 - IMP-076 Statement 1]] addresses only the identical-input re-import case. Its requirement definition owns the native `#refinement` statement; acceptance for changed inputs and preservation of engineer edits remains unproven.

Modeling authority is the source use-case SysML block; this note is the reusable stakeholder requirement definition. Review the [semantic disposition ledger](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) and [[MDSE Knowledge Base - Modeled Dependencies]]. Parser acceptance and implemented coverage are not inferred.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_STK_00004 {
    requirement def StakeholderNeed04 {
        doc /* Engineers need their accepted edits and decisions to survive later imports and updates. */
    }
}
```
