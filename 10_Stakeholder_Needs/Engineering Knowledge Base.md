---
type: Requirement
subtype: stakeholder
id: STK-00013
uid: 20261021181500001skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00013::EngineeringKnowledgeBase
---
# Engineering Knowledge Base

## Stakeholder need

A shared engineering-focused knowledge base available potentially to the entire organization, defining products through functional and design specifications, structure, relationships and operating context. Its depth can vary from system-level definitions to individual components according to engineering needs.

## Stakeholders

- **Primary:** Engineers across hardware, firmware, software, systems, manufacturing and related disciplines; engineering reviewers and architects.
- **Additional potential users:** Other organizational teams needing product knowledge or information exports.
- Access, contribution, and review authority for different audiences are not yet defined.

## Model content and extent

- All products are intended to be represented, although completeness and necessary decomposition vary by product and use.
- The model holds functional and design specifications, product structure, requirements, interfaces, behavior, and related engineering information.
- It must support navigation among products, systems, assemblies, modules, components, functions, designs, requirements, external systems and actors.
- Other stakeholder capabilities use this knowledge foundation; they must not create independent competing model definitions.
- Detail is added only where useful, potentially down to individual components; absent detail remains visible as a coverage gap.

## Boundaries with external systems

| External system | Owns | MDSE role |
|---|---|---|
| PDM / PLM | Complete CAD data and managed design documentation | Keep meaningful engineering definition and optionally link to authoritative external records; do not import entire CAD datasets by default |
| Jira | Tracking of work performed, work items and their workflow | Optionally link relevant engineering elements to Jira work items; do not silently duplicate Jira task state |
| MDSE | Connected engineering knowledge and semantic relationships | Store and present model elements, source references, and reviewable engineering context |

The existence of a possible link does not imply an implemented connector, automatic synchronization, or granted access.

## Critical capabilities added in owner review

- **Import is critical**: import and reconcile knowledge from flexible source types, not only QEAX and Excel; PDF, documents and images may supply evidence or candidate facts. See [[Import an Engineering Model]].
- **Find by name or alias**: primary usability path resolves the note carrying the name/alias. See [[Search for a Part, Function or Design]].
- **Multiple forms and viewpoints**: visual and document views of connected elements are alternate presentations of one semantic graph.
- **Graph exploration**: adjustable multi-hop traversal and shared connections among two or more selected elements.
- **Field/syntax search**: query SysML v2 and properties, separately from primary note-name lookup.
- **Composition**: use Obsidian `![[...]]` to assemble a note/document/presentation from existing notes; transclusion is presentation reuse, not a new SysML relationship.
- **Flag visibility**: display flagged records as a read-only discovery function, separate from resolving them.

## Owner-identified use cases

1. [[Search for a Part, Function or Design]] — Search for a part, function, or design.
2. [[Explore Element Relationships]] — View how an element is linked to other elements.
3. [[Review Requirements for a Design]] — Check which requirements are identified for a design.
4. [[Explore Complete Product Context]] — View all aspects of a product and its context including external systems and actors.
5. [[View and Export Engineering Information]] — View model data and export it for communication to others.
6. [[Add Engineering Knowledge]] — Document additions to engineering knowledge from different vantage points.
7. [[Correct or Complete Knowledge]] — Modify information to make the knowledge base correct or complete.
8. [[Review and Resolve Flagged Model Items]] — Review flagged elements to improve model accuracy.

**Critical source-ingestion use case:** [[Import an Engineering Model]] — a core knowledge-base interaction, extended to heterogeneous structured, document and image inputs.

## Additional linked use cases

- [[Visualize Relationships by Viewpoint]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Explore Multiple Relationship Hops]]
- [[Compare Shared Connections Across Elements]]
- [[Search SysML Syntax and Model Properties]]
- [[Compose Documentation from Embedded Notes]]
- [[Display Flagged Model Data]]

## Expected outcomes

Users can locate engineering elements, navigate explicit relationships, review requirements related to a design, understand product and external context, communicate selected knowledge, make additions and corrections, and inspect and resolve flagged quality concerns.

## Modeling and implementation review gaps

1. Specify how completeness is assessed across all products at variable depth.
2. Define organization-wide viewing permissions versus engineering edit and review roles.
3. Decide how external PDM/PLM file references are identified, versioned and checked.
4. Decide whether Jira linking is manual or later supported by live synchronization.
5. Define acceptable export formats, scope and information-disclosure safeguards.
6. Derive reusable functions, testable requirements, allocations and verification cases from these eight use cases.
7. Validate native SysML relationship syntax and execute model integrity checks before treating these traces as formal.

## Native inbound relationship review

**Refined by:** [[Import an Engineering Model]], [[Search for a Part, Function or Design]], [[Explore Element Relationships]], [[Review Requirements for a Design]], [[Explore Complete Product Context]], [[View and Export Engineering Information]], [[Add Engineering Knowledge]], [[Correct or Complete Knowledge]], [[Review and Resolve Flagged Model Items]], [[Visualize Relationships by Viewpoint]], [[Display Linked Elements in Document Viewpoints]], [[Explore Multiple Relationship Hops]], [[Compare Shared Connections Across Elements]], [[Search SysML Syntax and Model Properties]], [[Compose Documentation from Embedded Notes]], [[Display Flagged Model Data]]. These use cases elaborate aspects of this stakeholder requirement via native `#refinement dependency`; none is evidence of verified satisfaction.

The **owning use-case SysML block** carries the actual relationship; no duplicate connector is authored in this reusable requirement definition. See [semantic disposition review](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) and [[MDSE Knowledge Base - Modeled Dependencies]].

## SysML v2

> Draft definition; no independent parser certification for this self-model yet.

```sysml
package MDSE_STK_00013 {
    requirement def EngineeringKnowledgeBase {
        doc /* The organization needs an engineering-centered, connected knowledge base covering product functional, design, structural and contextual information at variable detail, with external authoritative design and work data linked when appropriate. */
    }
}
```
