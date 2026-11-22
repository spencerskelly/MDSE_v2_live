# 07 — Consolidation Review and Legacy Definition Disposition

**Purpose:** Provide a practical route out of the current large, fragmented self-model without destroying traceability or making a second set of SysML definitions. The readable current-tool entry point is [[00_Tool_Definitions/README|00_Tool_Definitions]].

**Action completed:** new detailed *documentation* for five existing tools and the engineer workflows; historical model folders moved into 90_Archive/Legacy_Model_2026-11-21/ by exact Git tree references. Source note bytes, IDs, UIDs and native SysML remain unchanged, but old path-qualified links/Canvas card paths require review before reuse.

## 1. Observed starting point

The live vault already contains five top-level software part definitions in 90_Archive/Legacy_Model_2026-11-21/50_Architecture, one for each implemented tool. Their modeled composition is in [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Toolset Composition]]. Each tool is decomposed into several reusable software subpart definitions. Many additional folders contain needs, use cases, functions, rules, derived requirements, Draft verification cases and relationship/semantic review evidence.

The root also contains historical baseline snapshots, a very large rule-to-model traceability matrix and an MDSE_Toolset directory with CSV evidence registers. The earlier [[90_Archive/Legacy_Model_2026-11-21/AS_BUILT_CAPABILITY_BASELINE|AS_BUILT_CAPABILITY_BASELINE]] represents an October 2026 assessment, **not** proof that all later tool changes were modeled and installed.

The current MDSE_v2 source already contains the merged persistent Workbench (PR #8) and importer transaction hardening (PR #9). Some live model descriptions still characterize those as missing or proposed. This mismatch is why the new simple specifications explicitly identify the source/version checked.

## 2. Keep or review by folder

| Existing location | Current role | Proposed disposition |
|---|---|---|
| **00_Tool_Definitions/** | Concise current tool documentation and handoff | **Keep as primary human review entry point** |
| **50_Architecture/** | Native modeled composition and tool/subtool definitions with UIDs and qualified SysML symbols | **Keep as archived native source**; not the active model baseline until separately reactivated |
| **10_Stakeholder_Needs/** | Stakeholder rationale | Preserved in dated archive; review obsolete duplicates rather than deleting by date |
| **20_Use_Cases/** | User goals and modeled dependencies | Archived; map useful cases to current workflow documents and flag gaps |
| **30_Functions/** | Reusable engineering system functions | Archived; reconcile useful functions with actual tool behavior |
| **40_System_Requirements/** | System-level requirements | Archived; check requirement coverage and approval status before reactivation |
| **55_Language/** | SysML v2 language definitions and examples | Archived language reference; no longer an active sixth software tool |
| **60_Verification/** | Top-level cases | Archived; distinguish test definition from execution evidence |
| **70_Rule_References/** | Imported historical rule wording/provenance | **Do not delete** until current rule IDs/revisions and source lineage are preserved |
| **71_Rule_Analysis/** | Historical semantic decomposition and review | Candidate for later archive after approval, with references retained |
| **72_Derived_Requirements/** | Generated requirement candidates with source IDs | **Do not delete**; review status and links before promote/archive |
| **73_Derived_Verification/** | Generated verification candidates | Do not bulk delete until requirement/test traces and statuses are reconciled |
| **74_Semantic_Review/** | Parser, lineage, unresolved semantic links and acceptance evidence | Archived as audit evidence; retire obsolete snapshots only after replacement is verified |
| **80_Issues/** | Outstanding problems/review records | Archived legacy issues; re-open current blockers explicitly in the active workflow |
| **86_Reference_Data/** | External SysML reference PDFs | Keep separate from tool descriptions |
| **99_System/** | Runtime AI, schema, templates, imports and views | Controlled system folder; **do not manually reorganize for aesthetics** |
| **MDSE_Toolset/** | Evidence/CSV registers | Moved intact to dated archive as provenance |
| **last-check/** | Earlier model notes/evidence | Moved intact into archive; compare before any new active model copy |

## 3. What may be redundant, and what is not

**Potentially redundant:** prose that repeats current source implementation in many historical review notes; superseded workbench view instructions; duplicate status snapshots; Draft derived requirement statements that restate one governing rule or were superseded by a later decision.

**Not automatically redundant:** a note with a unique source rule, unique UID, native part/usage definition, unresolved flagged relationship, verification intent, engineering decision, revision history or parser failure. A title duplicate or old timestamp is not sufficient evidence for deletion.

**Do not treat “approved because modeled” as a valid status.** Existing parent composition allocations are draft assignment of responsibility, **not** satisfaction of a requirement. Verification cases are intent, not execution results.

## 4. Safe cleanup sequence

1. **Establish baseline:** record a commit SHA and count notes/UIDs per folder; run the live repository's link, identity and independent SysML parser checks where available.
2. **Build catalog:** for each old note, record path, uid, type/subtype, original source rule, approval state, references, inbound/outbound native relations, YAML/navigation projections and source revision.
3. **Classify:** active authoritative model; active requirement/verification; historical provenance; duplicate prose; superseded decision; unresolved semantic candidate; user-owned evidence.
4. **Map to one retained target:** for a redundant explanatory note, identify the single retained modeled concept and/or the new tool specification; keep a redirect/reference and source citation until the relationship inventory is reviewed.
5. **Review semantic impact:** preserve all valid native SysML relationships and ID/UID history. Never invent substitute relationships solely to make an audit pass.
6. **Archive before deletion:** move approved obsolete prose to a governed archive folder rather than erase it initially. Update Obsidian links/source references, verify same-UID collisions and regenerate saved Canvas views as needed.
7. **Validate again:** compare model note counts, unresolved flags, complete traced requirements and parser results before/after; inspect Workbench search and navigation from a real staging vault.
8. **Approve targeted retirement:** commit an explicit manifest containing original UID/path, reason, approving engineer, replacement path, source rule and archive or deletion decision. Only then remove the retired content from active indexing.

**Important:** on its own, moving model files may change qualified paths, links or imports. A mass move is not “just folder cleanup.” Any such move requires transactional link repair and parser/runtime validation.

## 5. Proposed evidence register for future cleanup

A subsequent review can use a table or CSV with the following columns:

| Field | Meaning |
|---|---|
| Original path and uid | Stable identity of the candidate |
| Note type and model symbol | Whether it is native model content or explanatory evidence |
| Rule/decision/source revision | Traceable origin |
| Current governing status | Approved, Draft, historical, superseded, unresolved |
| Inbound/outbound native references | Whether relocation/deletion breaks the graph |
| Proposed retained owner | Canonical model note or current tool specification |
| Disposition | keep, reconcile, archive, retire |
| Justification and approver | Engineering decision, not inferred from folder age |
| Before/after validation | Identity/link/parser and actual Workbench checks |

## 6. Outstanding mismatches to reconcile

- The installed Workbench in the older live baseline does not establish deployment of the merged PR #8 features; runtime must be updated and accepted independently.
- Existing Workbench model notes still describe alias search and shared-connection limitations observed in the October baseline. Recheck current implementation and update model responsibilities based on evidence.
- Importer description and Core README expose different merge/overwrite semantics; approval-first handling is the intended importer contract, but legacy Core behavior must be reviewed.
- Base Vault README contains contradictory implementation-state text; compare to current bundled artifacts/lock.
- Bootstrap JavaScript and incomplete staged first-open experience do not yet meet all source governance aspirations.
- The redline/deviation, usage-level PLM traceability and recursive parent FFF/revision workflow require further definition and testing.
- Full real QEAX/BOM/wire-list/schematic/document import acceptance is not established merely by synthetic CI.
- The language/relationship authority and MDSE-only projections must remain distinct from the native SysML text.
- Independent parser and real Obsidian acceptance are still separate from tool-source merging.

## 7. Exit criteria for a genuinely simpler live vault

A future cleanup is complete when an engineer can locate a tool in **one place**, see its goal/inputs/outputs/functions/gaps, navigate to exactly one corresponding authoritative model definition, and trace every retained approved rule/test. Old material must either be referenced as retained evidence or appear on an approved retirement manifest. The vault must still pass identity, link and parser checks and retain its modeled relationship graph.

**Decision requested in a later review:** which classes of historical rule-derived Draft notes may be archived by policy. Until approved, preserve them; this consolidation makes the review possible without premature deletion.
