# 03 — MDSE Workbench: Detailed Tool Definition

**Tool boundary:** Engineer-facing Obsidian plugin, with a related offline HTML viewer, for discovering, understanding, comparing, creating, reviewing and carefully changing model knowledge. All workflows stay in **one persistent Workbench right sidebar or optional pop-out**.

**Authoritative model:** [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Workbench/MDSE Workbench|MDSE Workbench]] (OBJ-00003). Canonical subcomponents: [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Workbench/Model Discovery Index|Model Discovery Index]], [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Workbench/Relationship Query Engine|Relationship Query Engine]], [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Workbench/Viewpoint Projection Engine|Viewpoint Projection Engine]], [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Workbench/Model Editing Service|Model Editing Service]].

**Source:** [tools/workbench](https://github.com/spencerskelly/MDSE_v2/tree/main/tools/workbench), [Workbench README](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/workbench/README.md). PR #8 merged the single-Workbench workflow behavior and subsequent Workbench features to source; PR #9 preserved the paired importer delivery. **Not yet accepted:** installation of those current bits and full workflow behavior inside the real live vault.

## 1. Product goal

An engineer should stay in one contextual tool while exploring knowledge, defining or modifying a design, examining assemblies, planning verification, and preparing documentation. The Workbench should reduce navigation overhead without becoming an alternative model database.

Success: a question or engineering action begins with a selected item (or search), continues in the same Workbench context through related actions, and yields a note, canvas, report or explicit reviewed model change. A saved artifact remains independently accessible in an editor tab.

## 2. Operating contexts and UI contract

- **Panel:** by default the right Obsidian sidebar. An explicit command/setting permits an optional pop-out. Do not create one tab per workflow or tool mode.
- **Workflows:** Document, Define, Structure and Verify. Selecting workflow, lens, table, related element or command changes the **contents of the existing Workbench**, not a new editor tab.
- **Editor artifacts:** opening a model Markdown note or Canvas creates a distinct editor tab. Reopening an already-open artifact focuses it. Canvas creation must not replace the note being edited or overwrite another unsaved Canvas.
- **Bases:** a Base is intended to be a separate editor artifact, but direct Workbench Base-opening behavior has **not been certified** and remains an acceptance gap.
- **Context:** active selected element, workflow/lens, filters and Follow/Pin status should survive navigation as appropriate. Editing pins context to protect the target from an unrelated selection change.
- **File explorer:** Obsidian's native explorer remains the filesystem browser; Workbench provides model-aware navigation rather than reimplementing folder management.

## 3. Four primary workflows

### Document — assemble and communicate engineering information

**Entry:** selected note, document source, new ordinary Markdown note or document navigation.  
**Functions:** open notes; inspect linked content; create Daily/Meeting/Transcript/Engineering Note with clean Markdown sections and no invented UID; use note links and embeds; navigate related model references.  
**Outputs:** ordinary .md notes, reviewed source sets, export candidates, separate editor tabs.  
**Current boundary:** generalized controlled document assembly, external customer/supplier publication and high-quality end-to-end publishing remain **incomplete or not demonstrated**. Do not claim that the Workbench has an approved automatic PDF publishing pipeline.

### Define — discover and create engineering model concepts

**Entry:** selected model concept, search result, need, requirement, function or interface.  
**Functions:** find by title/identity/aliases where supported; inspect relationships and members; create governed notes from supported templates; assign new IDs/UIDs and native SysML content; inspect **Potential relationships — preview only** and explicitly choose a valid relationship after creation.  
**Outputs:** one new governed note, independent artifact editor tab; optional separately approved native link transaction.  
**Invariant:** creating a note does **not** automatically create a semantic relationship. Ordinary Markdown is excluded from the governed-link wizard.

### Structure — investigate configuration and engineering relationships

**Entry:** selected part, system, interface or assembly; one or more selected Canvas cards.  
**Functions:** structure tree, direct and multilevel parts, rolled-up BOM, revision-aware where-used where supported, differences between assemblies, interface/port inspection, member-level connection Canvas, and part lifecycle/clone operations from the current source.  
**Outputs:** in-panel tables, CSV export, temporary/kept Canvases and proposed part/revision edits.  
**Boundary:** the new **Replace selected part (copy definition)** creates a distinct proposed replacement, preserves predecessor identity and an explicit supersedes dependency. It **does not** automatically revise parents or approve production release. Current-vs-obsolete part lifecycle labels are distinct from Draft/Approved note review status. A full redline/effectivity/parent-FFF decision workflow is **not completed**.

### Verify — trace and review requirements and evidence

**Entry:** selected requirement, verification case, design, function or unresolved model flag.  
**Functions:** requirements/verification trace views, gaps, relationships, verification cases and review queues; create governed verification-related notes where supported.  
**Outputs:** traceability tables, flags, proposed links and separate verification notes.  
**Current boundary:** selecting a verification relationship is not executing a test; results/evidence, completeness and final verification execution/publishing are separate requirements.

## 4. Functional service decomposition

| Subcomponent | Functional behavior | Source ownership |
|---|---|---|
| **Model Discovery Index** | Read all eligible governed notes; build path, identity, name and typed edge lookups; discard and rebuild rather than persist semantics | index.ts, vault_files.ts, sysml_scan.ts, term_discovery.ts |
| **Relationship Query Engine** | Direct/inverse edges, multi-hop traversal, where-used, similarities, shared neighbors, dependency and trace viewpoints | views.ts, similar.ts, member_nav.ts, compare.ts |
| **Viewpoint Projection Engine** | Generate filterable tables, review overlays, Canvas projections, internal structure and member-connection views | views.ts, canvas.ts, member_canvas.ts, canvas_draw.ts, outline.ts |
| **Model Editing Service** | Create/edit native SysML, relationships, ports, review flags, merge, PLM properties, ECO plans and part replacement using preview/Apply | edit.ts, edit_rel.ts, edit_port.ts, edit_ui.ts, merge_ops.ts, edit_plm.ts, edit_eco.ts, quick_create.ts |
| **Plugin shell and single workflow UI** | Obsidian commands, leaf/panel navigation, user selection, persistence, editor artifact focusing and popup/pop-out | plugin.ts, panel.ts, ui.ts, guide.ts |

These are software responsibilities under one existing modeled Workbench, not five additional top-level tools.

## 5. Search and engineering investigation

**Global governed-note search:** examine known model identities, names/aliases and selected textual properties; focus the record carrying the concept rather than list only files with a matching basename.

**Find shared terms:** source term_discovery.ts indexes governed note names, aliases, descriptions, body, SysML and identities. UI can find common terms across element types, reveal excerpts and provenance and tick results for Canvas placement. The results are **textual evidence**, not proof of a native model relationship. Shared-term matches never generate semantic edges.

**Find similar and common related:** identify typed neighbors and common connections between two or more selected notes; distinguish exact model edges from common word matches. Preserve explicit direction/kind and flag unresolved paths.

**Multi-hop navigation:** traverse native modeled relations with profile filters, depth/size controls, cycle guards and warnings. A filter must not quietly bridge through hidden elements.

**Member inspection:** display owner-local usage declarations, multiplicity, typing, reference/end/conjugation modifiers, subsets/redefines, ports, connect/bind/flow statements and missing endpoints. Distinct native statements remain distinct.

## 6. Structural and visual output

**Structure:** hierarchical assemblies with member quantity and revision-pinned usage where available, direct children, inverse where-used, quantities through the tree and CSV of the complete result.

**Canvases:** scratch views vs manually kept saved views; layout, expand/collapse, Auto-layout and canvas-based discovery are presentations only. Temporary discovery candidates may be kept or dismissed; only real modeled relationships draw semantic lines. Saving strips unkept discovery candidates. A saved Canvas must not be silently updated by unrelated navigation.

**Tables:** remain inside the Workbench. Large structures page in the sidebar; CSV exports the full dataset, not only the current page. Old documentation of “Table in main window” or single reusable overwritten scratch canvas describes pre-PR #8 behavior and is **not the current UX contract**.

**Member-connection canvas:** an owner note plus lightweight usage/endpoint visual cards; only explicit connect, bind or flow lines; unresolved endpoints visibly marked. These visual cards are not new model-note definitions.

## 7. Governed editing and revision-related actions

- New governed concept: preview template, identity, fields and initial SysML; Apply writes one new note. Contextual relationship choices require **separate** review and explicit Apply.
- Existing element edit: validate eligibility, preflight source timestamp/content, preview a diff, Apply atomically at the logical note level where supported, and provide undo.
- Relationship edit: use eligible native SysML relationship forms and direction, never infer an edge just because two notes share a word or appear on the same Canvas.
- Merge/alias: preserve surviving identity, retire or redirect merged note as approved; preserve traceable source relationships and require preview.
- Part replacement: copy a definition as a **new** proposed part concept with new ID/UID, optionally a distinct PN; create explicit supersedes relation, not a second definition with the old UID.
- Part lifecycle: proposed/current/obsolete is separate from note approval status; marking obsolete does not update the BOM or recall all uses automatically.
- ECO planning: edit_eco.ts currently defines candidate ECO items, direct/ancestor impact lookup, basic checks and a planned ECO note with YAML driving links. This is a limited **slice**, not a complete deviation/redline/production-release lifecycle.
- PLM fields and revision comparison: edit_plm.ts supports selected part classifications/links and revision chain/diff helpers; source quality and controlled drawing/BOM release remain downstream concerns.

## 8. Information authority and nonfunctional constraints

1. Read-only browsing never edits native SysML or note YAML.
2. The last SysML v2 section, not a Canvas edge or YAML projection, owns native engineering structure/relationships.
3. The Workbench scanner recognizes a supported subset; treat syntax it cannot resolve as a warning, **not** confirmed valid SysML.
4. Edits are previewed, authorized, stale-file checked and undoable to the extent established by the current editor.
5. On large vaults, indexing and searches must yield to the UI and avoid arbitrary hidden “first 50” truncation; explicit caps/warnings are acceptable for expensive Canvas rendering.
6. Identity survives note moves; never use filename as the only permanent reference.
7. Keep per-user work preferences local, preserve other tabs and leave the engineering vault unchanged until a reviewed Apply.
8. Shared Workbench controls behave consistently in the panel and pop-out.

## 9. Acceptance tests

| ID | Demonstration required |
|---|---|
| WB-01 | All four workflow switches, tables and contextual navigation stay in one panel/pop-out; no workflow editor tabs |
| WB-02 | Open note A, note B, Canvas C and Canvas D, then return to C unchanged; reopening an artifact focuses the existing tab |
| WB-03 | Open a Base artifact and keep other tabs; record **Blocked** if Base integration is not present |
| WB-04 | Find a concept by name/alias; shared-term results show exact matching fields without inventing links |
| WB-05 | For a selected owner usage show correct typed port endpoint, modifiers and all explicit connector kinds |
| WB-06 | Large where-used/structure graphs include complete matching paths or explicit documented limits and evidence |
| WB-07 | Create ordinary Markdown without model identity; create governed note with unique ID/UID but **no automatic link** |
| WB-08 | Relationship preview → Cancel does not edit, Apply makes exactly one native edit, Undo restores original |
| WB-09 | Clone replacement part without mutating predecessor, changing existing usages or assigning released status |
| WB-10 | ECO candidate list reports affected parent paths, does not auto-assign CL1/CL2 or claim actual release |
| WB-11 | Generated Canvas graph and saved Canvas remain independent of model semantics and resist accidental overwrite |
| WB-12 | Real Obsidian sidebar and pop-out behavior matches source tests and survives plugin reload |

**Detailed carried-forward navigation/CI script:** [Workbench and Importer Acceptance](https://github.com/spencerskelly/MDSE_v2/blob/main/testing/WORKBENCH_IMPORTER_ACCEPTANCE.md). Additional source tests: [Workbench test suite](https://github.com/spencerskelly/MDSE_v2/tree/main/tools/workbench/test) and [browser oracle](https://github.com/spencerskelly/MDSE_v2/blob/main/testing/oracles/test_workbench_plugin.py).

## 10. Required next evolution

- Release and real-Obsidian acceptance of the integrated four-workflow Workbench on a disposable vault; independently test Base-opening behavior.
- End-to-end **redline/temporary deviation** for a released part: effectivity, restriction, approved temporary change, where-used across all product lines, **individual fit/form/function evaluation at each parent**, engineer-determined CL1/CL2 or no-revision disposition, and closed-loop drawing/BOM release. Do not auto-cascade revisions.
- Complete Document publishing and Verify execution/evidence as separate workflows without changing the persistent-Workbench contract.
- Independent parser verification and source-to-installed-plugin SHA/manifest parity.

**Model owner:** [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Workbench/MDSE Workbench]]. This is the human-readable software specification, not a new SysML part definition.
