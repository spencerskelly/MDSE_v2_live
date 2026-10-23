---
type: Requirement
subtype: stakeholder
id: STK-00015
uid: 20261021181500003skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00015::RequirementsManagement
---
# Requirements Management

## Need

Capture, structure, relate and control requirements throughout the product lifecycle, including origin and verification relationships.

## Stakeholders (proposed)

Systems engineers; product managers; requirement owners

## Desired outcome (proposed)

Locate a requirement, see its source and status, identify dependencies and track satisfaction and verification.

## Candidate use case

Define, review and trace a requirement

## Impact on toolset (preliminary)

Core; Importer; Workbench

## Existing coverage (preliminary)

Requirement translation and traceability exist in parts; end-to-end management needs acceptance.

## Candidate trace

- Use case, function, system requirements, architecture allocation and verification: not yet traced; fill after need review.

## Review questions

- Is this the intended stakeholder problem and desired outcome?
- Which outputs or decisions are in scope, and which are not?
- What existing functions, rules, implementations and tests should be reused?

## Native inbound relationship review

**Refined by:** [[Review Requirements for a Design]]. These use cases elaborate aspects of this stakeholder requirement via native `#refinement dependency`; none is evidence of verified satisfaction.

The **owning use-case SysML block** carries the actual relationship; no duplicate connector is authored in this reusable requirement definition. See [semantic disposition review](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) and [[MDSE Knowledge Base - Modeled Dependencies]].

## SysML v2

> Draft SysML definition, not parser-certified. Formal cross-element relationships will be added after native syntax/endpoint review; this note is not a release requirement.

```sysml
package MDSE_STK_00015 {
    requirement def RequirementsManagement {
        doc /* Capture, structure, relate and control requirements throughout the product lifecycle, including origin and verification relationships. */
    }
}
```
