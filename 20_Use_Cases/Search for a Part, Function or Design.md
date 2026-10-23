---
type: Use Case
subtype: what
id: UC-00002
uid: 20261021181501001skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00002::FindEngineeringElement
---
# Search for a Part, Function or Design

> [!note] Draft use case for Engineering Knowledge Base
> The user action comes from the owner. Process steps, actors and success outcomes are initial interpretations for review; not an approved software specification.

## Intent

Search for a part, function, or design.

## Primary actor

Organization user; engineer

## Trigger

User needs information about a concept, product, or part.

## Main scenario (proposed)

Query by name, identifier, or descriptive text; examine candidates; distinguish similar names; open selected element.

## Successful outcome

A relevant, identifiable model element is opened or the absence of a match is made clear.

## Alternative and review concern

Missing or ambiguous matches are reported, not guessed.

## Candidate logical functions

Index/search engineering concepts; resolve identities; navigate notes.

## Traceability

- Stakeholder need: [[Engineering Knowledge Base]]
- Engineering requirements: not yet derived
- Test case and executed evidence: not yet established
- Formal SysML link to stakeholder need: pending independent parser validation

## Critical name and alias lookup refinement

The primary navigation operation is to locate the **note carrying a requested name or alias** and open it. Users should not have to know the filename, folder or internal ID.

Search must consider the canonical note title/name, declared aliases, human-visible names and identifiers, with enough result context to disambiguate. This is a user-facing behavior rather than a suggestion to duplicate authoritative names in separate stores.

**Main success check:** Given an element with a known alias, entering that alias returns the owning note, not an unrelated mention of the text.

Also see [[Search SysML Syntax and Model Properties]] for full text and field-scoped queries. Field search is distinct from fast primary navigation.

## Proposed functional coverage

- [[Discover and Resolve Model Elements]]
- [[Generate Engineering Model Viewpoints]]

The modeled relationships below now distinguish native actions, refinements, and supporting dependencies. Their endpoint semantics and independent parser acceptance remain under review.

## Native relationship semantics — draft

- 2 typed `action` usage(s) express actual functions in this user scenario; an `action` usage is not the software's `perform action` allocation.
- 2 `#refinement dependency`(ies) elaborate the corresponding stakeholder requirement; this does not claim satisfaction.

Semantic decisions are based on this note's described scenario. All additions remain Draft until model parsing and runtime verification.

## SysML v2

> Draft use-case definition only; do not treat Markdown navigation as certified native SysML relationship semantics.

```sysml
package MDSE_UC_00002 {
    use case def FindEngineeringElement {
        doc /* Search for a part, function, or design. */
        action discoverModelElements : MDSE_BEH_00003::DiscoverModelElements;
        action generateModelViewpoints : MDSE_BEH_00005::GenerateModelViewpoints;
        #refinement dependency from FindEngineeringElement to MDSE_STK_00013::EngineeringKnowledgeBase;
        #refinement dependency from FindEngineeringElement to MDSE_STK_00001::StakeholderNeed01;
    }
}
```
