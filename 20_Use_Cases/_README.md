# Engineering Knowledge Base — use cases

**Stakeholder capability:** [[Engineering Knowledge Base]]  
**Status:** Draft review model, updated after owner additions on 2026-10-21.

## Critical foundation: bring data into MDSE

- [[Import an Engineering Model]] — **critical** heterogeneous source import. QEAX and Excel are initial adapters; PDFs, documents, images and other sources must be handled through explicit adapter/evidence dispositions. A linked/attached source is not the same as a translated semantic model.

## Find, query and navigate

- [[Search for a Part, Function or Design]] — prioritize resolution of the **note holding a name or alias**.
- [[Search SysML Syntax and Model Properties]] — field-scoped SysML text, YAML property and other content search.
- [[Explore Element Relationships]] — explicit source/target relationships.
- [[Explore Multiple Relationship Hops]] — adjustable traversal depth.
- [[Compare Shared Connections Across Elements]] — compare two or more seeds and reveal common neighbors or paths.
- [[Review Requirements for a Design]]
- [[Explore Complete Product Context]]

## Present model knowledge in different viewpoints

- [[Visualize Relationships by Viewpoint]] — graphs, canvases and structural/functional/requirements views.
- [[Display Linked Elements in Document Viewpoints]] — linked lists, outlines, reports or structured document views.
- [[View and Export Engineering Information]] — export selected governed representations.
- [[Compose Documentation from Embedded Notes]] — `![[...]]` transclusion for documents or presentations.

## Contribute and improve model quality

- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Display Flagged Model Data]] — surface known gaps/read-only.
- [[Review and Resolve Flagged Model Items]] — investigate, correct or disposition flags.

## Functional decomposition now drafted

Review [the six reusable function definitions and the 16-use-case trace matrix](30_Functions/_README.md). All links and coverage assessments remain proposals.

## Earlier candidate subfunctions for future detailed decomposition

| Function candidate | Used by |
|---|---|
| Source adapter and import reconciliation | UC-00001 |
| Element identity/name/alias resolution | UC-00002, UC-00003, UC-00014, UC-00015 |
| Scoped text and property search | UC-00002, UC-00014, UC-00016 |
| Shared relationship graph traversal | UC-00003, UC-00010, UC-00011, UC-00012, UC-00013 |
| Multi-selection comparison | UC-00013 |
| Viewpoint selection and presentation | UC-00005, UC-00006, UC-00010, UC-00011 |
| Composition/transclusion | UC-00015, UC-00006 |
| Model write, conflict and review | UC-00007, UC-00008, UC-00009 |
| Flag discovery | UC-00016, UC-00009 |

**Architecture constraint:** the functions above are candidates, not new duplicate implementations. Core model semantics and identities have one authority; visual and document views are derived projections.

## Boundary reminders

All products can be modeled at variable depth. Complete CAD remains in PDM/PLM, and work tracking remains in Jira, with links as appropriate. PDFs/documents/images may be imported as evidence or interpreted through future controlled adapters; they are not automatically equivalent to structured SysML input.

## Native modeled dependencies — draft

The 16 individual use-case definitions now contain 34 standard `dependency` statements to existing function definitions and 16 to the Engineering Knowledge Base need. This is general SysML dependency, not a custom `requiresFunction` or `motivates` relationship. See [model trace review](../74_Semantic_Review/MODELED_RELATIONSHIP_TRACE_REVIEW.md). These links remain Draft until the compiled SysML model and Workbench runtime are checked.

## Coverage and certification

Current source and tests provide partial evidence for some existing Workbench functions and QEAX/Excel import. Newly defined multi-selection, comprehensive field search, document composition and heterogeneous document/image interpretation **must not be presented as verified implementations**. Native SysML relationships, derived requirements and test cases for these user interactions remain to be developed and parser-checked.
