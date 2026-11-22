---
type: Requirement
subtype: stakeholder
id: STK-00023
uid: 20261021181500011skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00023::RegulatoryImpactAnalysis
---
# Regulatory Impact Analysis

## Need

Relate applicable regulations and standards to requirements, products, architectures and changes so compliance implications can be assessed.

## Stakeholders (proposed)

Compliance engineers; regulatory specialists; engineering management

## Desired outcome (proposed)

For a proposed design or requirement change, identify potentially affected standards, evidence and review obligations.

## Candidate use case

Assess regulatory implications of a product change

## Impact on toolset (preliminary)

Core; Workbench

## Existing coverage (preliminary)

Standard requirement classification exists; impact-analysis workflow not verified.

## Candidate trace

- Use case, function, system requirements, architecture allocation and verification: not yet traced; fill after need review.

## Review questions

- Is this the intended stakeholder problem and desired outcome?
- Which outputs or decisions are in scope, and which are not?
- What existing functions, rules, implementations and tests should be reused?

## Modeling coverage and next trace

**Open modeling gap.** None of the sixteen currently defined Engineering Knowledge Base use cases directly depends on this stakeholder need in native SysML. The need remains a reusable Draft requirement, **not** an automatically satisfied capability.

Source-note candidate context: Assess regulatory implications of a product change

The correct follow-up is to review this need and create or reuse a suitable use-case definition and logical function before writing a native dependency or allocation. No connection has been fabricated solely to make a canvas visually complete. See [[MDSE Knowledge Base - Modeled Dependencies]] for relationships that are actually present.

## SysML v2

> Draft SysML definition, not parser-certified. Formal cross-element relationships will be added after native syntax/endpoint review; this note is not a release requirement.

```sysml
package MDSE_STK_00023 {
    requirement def RegulatoryImpactAnalysis {
        doc /* Relate applicable regulations and standards to requirements, products, architectures and changes so compliance implications can be assessed. */
    }
}
```
