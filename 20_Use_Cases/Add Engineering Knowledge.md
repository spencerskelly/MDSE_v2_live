---
type: Use Case
subtype: what
id: UC-00007
uid: 20261021181501006skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00007::AddEngineeringKnowledge
---
# Add Engineering Knowledge

## Intent

Document additions to engineering knowledge from different vantage points.

## Primary actor

Engineer; authorized contributor

## Trigger

Relevant new knowledge is not yet modeled.

## Main scenario (proposed)

Choose context; select conceptual kind; check for reusable definition; add information and provenance; connect explicit relationships; submit/save.

## Successful outcome

Knowledge is added at suitable model scope without unnecessary duplicate concepts.

## Alternative and review concern

Unsupported classification or link is flagged rather than guessed.

## Candidate logical functions

Create elements; reuse definitions; add contextual relationships; record provenance.

## Traceability

- Stakeholder need: [[Engineering Knowledge Base]]
- Engineering requirements: not yet derived
- Test case and executed evidence: not yet established
- Formal SysML link to stakeholder need: pending independent parser validation

## Proposed functional coverage

- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

These are draft use-case/function relations only. Formal SysML links, requirements, implementation allocation and test evidence remain to be established.

## Modeled dependencies — draft

The SysML block contains generic `dependency` statements from this use-case definition to the stakeholder need and the logical functions in the existing use-case/function matrix. These are *proposed functional dependencies*, not a native `motivates` or `requiresFunction` keyword, not verified implementation, and not independently parser-certified.

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Change the model through Workbench, or edit this block and re-run the parser check.

```sysml
package MDSE_UC_00007 {
    use case def AddEngineeringKnowledge {
        doc /* Document additions to engineering knowledge from different vantage points. */
        dependency from MDSE_UC_00007::AddEngineeringKnowledge to MDSE_STK_00019::ArchitectureDefinition; // refines
        dependency from MDSE_UC_00007::AddEngineeringKnowledge to MDSE_STK_00018::DesignDefinition; // refines
        dependency from MDSE_UC_00007::AddEngineeringKnowledge to MDSE_STK_00017::FailureModeAndEffectAnalysis; // refines
        dependency from MDSE_UC_00007::AddEngineeringKnowledge to MDSE_STK_00015::RequirementsManagement; // refines
        dependency from MDSE_UC_00007::AddEngineeringKnowledge to MDSE_STK_00005::StakeholderNeed05; // refines
        dependency from MDSE_UC_00007::AddEngineeringKnowledge to MDSE_STK_00020::ValidationDefinition; // refines
    }
    dependency from AddEngineeringKnowledge to MDSE_STK_00013::EngineeringKnowledgeBase;
    dependency from AddEngineeringKnowledge to MDSE_BEH_00003::DiscoverModelElements;
    dependency from AddEngineeringKnowledge to MDSE_BEH_00007::MaintainModelKnowledge;
}
```
