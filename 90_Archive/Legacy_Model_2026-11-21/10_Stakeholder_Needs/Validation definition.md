---
type: Requirement
subtype: stakeholder
id: STK-00020
uid: 20261021181500008skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00020::ValidationDefinition
---
# Validation definition

## Need

Define test objectives, verification or validation cases, conditions, procedures and acceptance evidence linked to the engineering intent they address.

## Stakeholders (proposed)

Verification engineers; validation engineers; requirement owners

## Desired outcome (proposed)

For a requirement, locate the planned verification or validation method, acceptance criteria and result evidence.

## Candidate use case

Define verification and validation evidence

## Impact on toolset (preliminary)

Core; Workbench; Testing

## Existing coverage (preliminary)

Verification Case mapping exists; comprehensive trace-to-execution remains unverified.

## Candidate trace

- Use case, function, system requirements, architecture allocation and verification: not yet traced; fill after need review.

## Review questions

- Is this the intended stakeholder problem and desired outcome?
- Which outputs or decisions are in scope, and which are not?
- What existing functions, rules, implementations and tests should be reused?

## Native inbound relationship review

**Unresolved:** No justified native relationship remains from the current use cases. Former UC-00007 discipline-wide refinement was removed, because creating knowledge records is not the same as satisfying or refining a complete engineering domain capability.

The **owning use-case SysML block** carries the actual relationship; no duplicate connector is authored in this reusable requirement definition. See [semantic disposition review](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) and [[MDSE Knowledge Base - Modeled Dependencies]].

## SysML v2

> Draft SysML definition, not parser-certified. Formal cross-element relationships will be added after native syntax/endpoint review; this note is not a release requirement.

```sysml
package MDSE_STK_00020 {
    requirement def ValidationDefinition {
        doc /* Define test objectives, verification or validation cases, conditions, procedures and acceptance evidence linked to the engineering intent they address. */
    }
}
```
