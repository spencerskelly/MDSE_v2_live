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
- Engineering requirement candidates: [[REQ-31278 - WKB-008 Statement 1]] (Edit lens capabilities), [[REQ-31279 - WKB-008 Statement 2]] (eligible kinds and targets), and [[REQ-31280 - WKB-008 Statement 3]] (write authoritative SysML). All remain Draft.
- Test case and executed evidence: not yet established
- Formal SysML link to stakeholder need: pending independent parser validation

## Proposed functional coverage

- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

The modeled relationships below now distinguish native actions, refinements, and supporting dependencies. Their endpoint semantics and independent parser acceptance remain under review.

## Native relationship semantics — draft

- 2 typed `action` usage(s) express actual functions in this user scenario; an `action` usage is not the software's `perform action` allocation.
- 1 `#refinement dependency`(ies) elaborate the corresponding stakeholder requirement; this does not claim satisfaction.
- 6 prior discipline links were withheld: ability to add engineering knowledge does not refine the discipline's architectural, design, FMEA, requirements or validation capability. Historical context remains in this note and the review ledger.

This scenario also has three draft requirement dependencies for WKB-008 clauses 1–3. These are dependencies on required behavior and persistence, not claims of satisfaction or test completion.

Semantic decisions are based on this note's described scenario. All additions remain Draft until model parsing and runtime verification.

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Change the model through Workbench, or edit this block and re-run the parser check.

```sysml
package MDSE_UC_00007 {
    use case def AddEngineeringKnowledge {
        doc /* Document additions to engineering knowledge from different vantage points. */
        action discoverModelElements : MDSE_BEH_00003::DiscoverModelElements;
        action maintainModelKnowledge : MDSE_BEH_00007::MaintainModelKnowledge;
        #refinement dependency from AddEngineeringKnowledge to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from AddEngineeringKnowledge to MDSE_REQ_31278::RuleREQ31278;
        dependency from AddEngineeringKnowledge to MDSE_REQ_31279::RuleREQ31279;
        dependency from AddEngineeringKnowledge to MDSE_REQ_31280::RuleREQ31280;
    }
}
```
