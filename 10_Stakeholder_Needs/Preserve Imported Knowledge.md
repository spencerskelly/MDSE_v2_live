---
type: Requirement
subtype: stakeholder
id: STK-00003
uid: 20261021163400003skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00003::StakeholderNeed03
---
# Preserve Imported Knowledge

**Status:** Proposed model element; not an approved new governance rule.

**Statement:** Model owners need to carry EA and BOM source information into MDSE without silent loss, including unsupported items.

**Stakeholder:** Model owner and data steward

**Existing basis:** MDSE_DEFINITION.md Inputs and Principles

## Proposed trace links

- motivates: [[Import an Engineering Model]]

These are provisional navigational links. Formal native SysML relationships, endpoint typing, and independent parser acceptance remain to be verified. Do not treat a link or verification declaration as passed evidence.

## Native inbound relationship review

**Refined by:** [[Import an Engineering Model]] and [[Account for Every Source Row]]. The use-case definition and the engineering requirement definition each own a draft native `#refinement dependency` to this need. Refinement adds detail; it is not evidence of satisfaction. Refinement is increased specificity, not satisfaction.

Modeling authority is the source use-case SysML block; this note is the reusable stakeholder requirement definition. Review the [semantic disposition ledger](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) and [[MDSE Knowledge Base - Modeled Dependencies]]. Parser acceptance and implemented coverage are not inferred.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_STK_00003 {
    requirement def StakeholderNeed03 {
        doc /* Model owners need to carry EA and BOM source information into MDSE without silent loss, including unsupported items. */
    }
}
```
