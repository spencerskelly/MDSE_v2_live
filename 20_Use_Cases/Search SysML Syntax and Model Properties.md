---
type: Use Case
subtype: what
id: UC-00014
uid: 20261021181502005skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00014::SearchModelTextAndProperties
---
# Search SysML Syntax and Model Properties

> [!note] Engineering Knowledge Base use case — proposed
> Capability requested by the owner on 2026-10-21. Detailed scenario and implementation coverage are review candidates, not approved requirements.

## Intent

Search within SysML v2 textual model definitions, YAML properties and other searchable note fields.

## Primary actor

Engineer, systems architect, importer reviewer or model maintainer

## Main success scenario

1. Choose searchable scope (SysML block, YAML properties, source metadata, body, or all).
2. Enter text, identifier or property/value criteria.
3. Show matching note identities with field context and matched snippets.
4. Open the owning note and navigate to the relevant location if supported.

## Expected outcome

The user can find model content even when the requested term is not the note title or alias.

## Alternate / constraint

Maintain a clear separation between finding literal syntax/text and correctly interpreting the semantics of that syntax.

## Candidate logical functions

Index source fields and text regions; field-scoped queries; match snippets; open source note.

## Current evidence and gap

Workbench indexes notes and some model fields; comprehensive SysML/property search is not verified.

## Proposed trace

- Stakeholder capability: [[Engineering Knowledge Base]]
- Related use cases: [[Search for a Part, Function or Design]]
- Functions, derived requirements and verification: pending review.
- Relationship links are draft navigation; not independently SysML-parser-certified.

## Proposed functional coverage

- [[Discover and Resolve Model Elements]]

The use-case/function links are now recorded as draft native SysML dependencies. Their qualified endpoints and intended meaning remain subject to independent parser and Workbench checks; implementation and test evidence are not established.

## Modeled dependencies — draft

The SysML block contains generic `dependency` statements from this use-case definition to the stakeholder need and the logical functions in the existing use-case/function matrix. These are *proposed functional dependencies*, not a native `motivates` or `requiresFunction` keyword, not verified implementation, and not independently parser-certified.

## SysML v2

> Draft SysML definition; this model's native syntax and relationships have not been independently parser-verified.

```sysml
package MDSE_UC_00014 {
    use case def SearchModelTextAndProperties {
        doc /* Search within SysML v2 textual model definitions, YAML properties and other searchable note fields. */
        dependency from SearchModelTextAndProperties to MDSE_STK_00013::EngineeringKnowledgeBase;
        dependency from SearchModelTextAndProperties to MDSE_BEH_00003::DiscoverModelElements;
        dependency from SearchModelTextAndProperties to MDSE_STK_00001::StakeholderNeed01;
    }
}
```
