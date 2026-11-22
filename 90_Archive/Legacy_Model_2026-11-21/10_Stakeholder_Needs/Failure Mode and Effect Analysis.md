---
type: Requirement
subtype: stakeholder
id: STK-00017
uid: 20261021181500005skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00017::FailureModeAndEffectAnalysis
---
# Failure Mode and Effect Analysis

## Need

Identify potential failure modes, consequences, causes, mitigations and verification evidence in relation to affected product elements and functions.

## Stakeholders (proposed)

Safety engineers; reliability engineers; design teams

## Desired outcome (proposed)

Trace a failure mode from an affected function or component through risk assessment, recommended actions and checks.

## Candidate use case

Analyze and manage a potential failure mode

## Impact on toolset (preliminary)

Core; Workbench

## Existing coverage (preliminary)

Failure Mode and Issue model classifications exist; complete FMEA workflow not verified.

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
package MDSE_STK_00017 {
    requirement def FailureModeAndEffectAnalysis {
        doc /* Identify potential failure modes, consequences, causes, mitigations and verification evidence in relation to affected product elements and functions. */
    }
}
```
