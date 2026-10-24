# Functional definition gap audit — 2026-10-24

## Baseline inspected

The current source model has 16 use cases and six reusable top-level function definitions (BEH-00002 through BEH-00007), plus narrower pre-existing BEH-00001. The 30_Functions/FUNCTION_USECASE_MATRIX.csv already records 32 owned action usages across all 16 use cases. **This is use-case coverage, not sufficient functional decomposition or verification.**

## Five new reusable functional definitions

| ID | Subfunction | Parent | Initial acceptance focus |
|---|---|---|---|
| BEH-00008 | [[Resolve Source Identity]] | [[Ingest and Reconcile Engineering Sources]] | Stable crosswalk; ambiguity disposition |
| BEH-00009 | [[Search Model Properties]] | [[Discover and Resolve Model Elements]] | Scope/field and owning-note resolution |
| BEH-00010 | [[Traverse Typed Relationship Paths]] | [[Query and Traverse Model Relationships]] | Native directions, depth, cycles |
| BEH-00011 | [[Compare Shared Model Connections]] | [[Query and Traverse Model Relationships]] | True multi-seed intersection |
| BEH-00012 | [[Validate Model Change Transaction]] | [[Maintain and Improve Model Knowledge]] | Atomic edit/reject, UID preservation |

Each is a Draft `action def` in its own note with one owned typed action usage in its parent function definition. Parent functions and user-facing use-case definitions retain identity and authoritative text. No duplicate top-level functions were added. Parent relationships still need independent native parser and Workbench scanner confirmation.

## Remaining missing or under-specified subfunctions — candidates

| Parent function | Missing detail | Primary consumer |
|---|---|---|
| BEH-00002 Ingestion | Source format detection/adapter selection; evidence attachment vs semantic translation; explicit disposition reporting; reconciliation preview | Import an Engineering Model |
| BEH-00003 Discovery | Name/alias/ID disambiguation; matched-context reporting and no-match handling | Search for a Part, Function or Design |
| BEH-00004 Traversal | Relationship kind/direction selection and comparison of path evidence across selected seeds | Explore Multiple Relationship Hops; Compare Shared Connections Across Elements |
| BEH-00005 Viewpoints | Scope/viewpoint selection; visual graph projection; document perspective; flagged-data overlays; presentation-only changes | Visualize Relationships by Viewpoint; Display Linked Elements in Document Viewpoints |
| BEH-00006 Composition | Native Obsidian transclusion; missing/cyclic embed detection; governed export, provenance retention | Compose Documentation from Embedded Notes; View and Export Engineering Information |
| BEH-00007 Maintenance | Existing-definition reuse; flag triage and engineer disposition; impact analysis; conflict survival on reimport | Correct or Complete Knowledge; Review and Resolve Flagged Model Items |

## Functional boundaries and non-goals

- Import translates and reconciles evidence; it does not infer unsupported engineering semantics.
- Search locates owner notes and fields; traversal analyzes *explicit* relationships.
- Visual/document renderers project the same graph and must never generate semantic links based on canvas layout.
- Native Obsidian transclusion displays source content; it does not create another authoritative model definition.
- A flag is removed by controlled engineer disposition, not merely by hiding a warning.
- Tests in the tools repository and CI validation of the live model are separate from independent SysML parsing and end-to-end feature acceptance.

## Next controlled implementation

Expand BEH-00005 viewpoint functions and BEH-00006 document composition functions before attempting more requirements allocation. Then add native use-case/functional-flow usages where justified, derive atomic requirements, and create verification cases with positive and negative fixtures. Do not infer runtime implementation from a source path reference alone.

**Status:** functional decomposition drafted; independent parser verification, acceptance fixtures, allocation and engineering review remain open.
