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

## Actual modeled use-case coverage

The following use-case definitions contain draft native SysML v2 `dependency` statements referencing this stakeholder requirement. They represent **traceable reliance**, not satisfaction, complete implementation, or acceptance evidence:

- [[Add Engineering Knowledge]]

View the edges in [[MDSE Knowledge Base - Modeled Dependencies]]. The authoritative dependency statements reside in the owning **use-case notes**; they are not duplicated in this reusable requirement definition. The model remains Draft and parser verification is outstanding.

## SysML v2

> Draft SysML definition, not parser-certified. Formal cross-element relationships will be added after native syntax/endpoint review; this note is not a release requirement.

```sysml
package MDSE_STK_00017 {
    requirement def FailureModeAndEffectAnalysis {
        doc /* Identify potential failure modes, consequences, causes, mitigations and verification evidence in relation to affected product elements and functions. */
    }
}
```
