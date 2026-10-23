# Engineering Knowledge Base — functional architecture (draft)

These are **logical functions**, not one software service or plugin per function. They are derived from [[Engineering Knowledge Base]] and its 16 use cases. The model and all relationship declarations remain draft.

## Reusable function definitions

- [[Ingest and Reconcile Engineering Sources]] — Import external source data and evidence into MDSE using appropriate adapters, source identity, managed files, approved reconciliation, and recorded dispositions.
- [[Discover and Resolve Model Elements]] — Find the note owning an engineering name, alias or ID, and perform scoped search of SysML text, YAML properties, source metadata and notes.
- [[Query and Traverse Model Relationships]] — Answer queries on typed model relationships for one or several elements, including direction, types, hop depth, paths and shared connections.
- [[Generate Engineering Model Viewpoints]] — Create visual, table, document and review projections of selected model content using the same underlying model relationships.
- [[Compose and Exchange Engineering Knowledge]] — Assemble existing notes and sections into documents or presentations with native Obsidian ![[...]] transclusion and produce governed exports.
- [[Maintain and Improve Model Knowledge]] — Create and correct engineering knowledge, review flags and conflicting changes, and preserve identity, approval, provenance and model integrity.

The earlier [[Reconcile Source Records]] remains a separate existing function note; its candidate parent is BEH-00002. We have **not** altered its ID.

## Use-case to function coverage

The [function/use-case matrix](FUNCTION_USECASE_MATRIX.csv) records **32 owned action usages and 2 deferred historical links** covering all 16 use cases, with multiple functions per use case where appropriate.

- UC-00001: [[Ingest and Reconcile Engineering Sources]] (BEH-00007 separated as importer/workbench boundary review)
- UC-00002: [[Discover and Resolve Model Elements]], [[Generate Engineering Model Viewpoints]]
- UC-00007: [[Discover and Resolve Model Elements]], [[Maintain and Improve Model Knowledge]]
- UC-00014: [[Discover and Resolve Model Elements]]
- UC-00015: [[Discover and Resolve Model Elements]], [[Compose and Exchange Engineering Knowledge]]
- UC-00016: [[Discover and Resolve Model Elements]], [[Generate Engineering Model Viewpoints]] (BEH-00007 deferred because display is read-only)
- UC-00003: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]]
- UC-00004: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]]
- UC-00005: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]]
- UC-00008: [[Query and Traverse Model Relationships]], [[Maintain and Improve Model Knowledge]]
- UC-00009: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]], [[Maintain and Improve Model Knowledge]]
- UC-00010: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]]
- UC-00011: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]], [[Compose and Exchange Engineering Knowledge]]
- UC-00012: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]]
- UC-00013: [[Query and Traverse Model Relationships]], [[Generate Engineering Model Viewpoints]]
- UC-00006: [[Generate Engineering Model Viewpoints]], [[Compose and Exchange Engineering Knowledge]]

## Functional boundaries

- Source import (BEH-00002) and manual authoring/review (BEH-00007) both write model content but share identity and approval contracts.
- Discovery (BEH-00003) locates notes, properties and SysML text; traversal (BEH-00004) uses *semantic typed relationships*.
- Graph traversal (BEH-00004) owns hop/intersection semantics; viewpoint rendering (BEH-00005) does not independently reinterpret edges.
- Composition (BEH-00006) reuses model content through `![[...]]`; it does not create new part/behavior containment.
- Changes and flag review (BEH-00007) are distinct from read-only flagged-data presentation (BEH-00005).

## Existing implementation references — not allocations

| Function | Candidate relevant code | Verification state |
|---|---|---|
| BEH-00002 | `tools/importer/src/run.ts`, `bom.ts`, `merge.ts` | Synthetic tests exist; heterogeneous documents/images unverified |
| BEH-00003 | `tools/workbench/src/index.ts` | Alias-first and field-scoped search unverified |
| BEH-00004 | `tools/workbench/src/index.ts`, `views.ts` | Shared-connection intersections unverified |
| BEH-00005 | `tools/workbench/src/views.ts`, `canvas.ts` | General document perspectives unverified |
| BEH-00006 | Native Obsidian embeds; Workbench export | Composition workflow unverified |
| BEH-00007 | `tools/workbench/src/edit.ts`, `tools/importer/src/merge.ts` | Merge semantics still conflicting across core/importer |

## Native modeled connections — draft

The sixteen use-case definitions now contain **32 typed `action` usages** of the six reusable function definitions, rather than 34 generic dependency statements. Two pre-existing proposed links were deferred because they conflated importer/Workbench ownership or read-only viewing with model editing. Twenty-six stakeholder connections are native `#refinement dependency` and four retain generic supporting `dependency` semantics.

The function definitions remain owned here and are reused by the use-case action usages; software responsibility is modeled separately with `perform action` under Importer/Workbench. See the [revised matrix](FUNCTION_USECASE_MATRIX.csv) and [semantic review](../74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md). A normal Workbench scanner run is **not** independent SysML v2 parser acceptance.


## Next review

Approve the functional boundaries and missing subfunctions. Then derive testable requirements, map existing governance rules as their authoritative origin, assign component responsibilities, and create verification cases. Formal relations must be expressed in native SysML and accepted by the pinned parser. The CSV and Markdown links are provisional review views only.
