---
type: Requirement
subtype: stakeholder
id: STK-00001
uid: 20261021163400001skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00001::StakeholderNeed01
stereotype: Stakeholder Need
---
# Accessible Engineering Knowledge

**Statement:** Engineers need to find and understand relevant engineering knowledge without learning a complex modeling tool.

**Stakeholder:** Engineering team

**Existing basis:** MDSE_DEFINITION.md Purpose
## Proposed trace links

- No trace established yet — an explicit review gap.

These are provisional navigational links. Formal native SysML relationships, endpoint typing, and independent parser acceptance remain to be verified. Do not treat a link or verification declaration as passed evidence.

## Native inbound relationship review

**Refined by:** [[Search for a Part, Function or Design]], [[View and Export Engineering Information]], [[Search SysML Syntax and Model Properties]]. These use cases carry a native `#refinement dependency` to this need. Refinement is increased specificity, not satisfaction.

Modeling authority is the source use-case SysML block; this note is the reusable stakeholder requirement definition. Review the [semantic disposition ledger](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) and [[MDSE Knowledge Base - Modeled Dependencies]]. Parser acceptance and implemented coverage are not inferred.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_STK_00001 {
    requirement def StakeholderNeed01 {
        doc /* Engineers need to find and understand relevant engineering knowledge without learning a complex modeling tool. */
    }
}
```
