# 02 — MDSE Importer: Detailed Tool Definition

**Tool boundary:** One offline HTML application for bringing engineering source data into a governed MDSE vault and for updating the vault's managed toolset/configuration. It creates and reconciles model data; it is **not** the day-to-day engineering editor.

**Authoritative model:** [[50_Architecture/MDSE Importer/MDSE Importer|MDSE Importer]] (OBJ-00001), with [[50_Architecture/MDSE Importer/Source Reconciliation Engine|Source Reconciliation Engine]] and [[50_Architecture/MDSE Importer/Managed Vault Update|Managed Vault Update]].

**Implementation:** [tools/importer](https://github.com/spencerskelly/MDSE_v2/tree/main/tools/importer), [Importer specification](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/importer/SPEC.md) and [current importer README](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/importer/README.md). **Governance:** IMP, BOM and MOD. **Source state:** code and automated tests merged; full production QEAX/BOM, native SysML and live-vault acceptance still require proof.

## 1. Goal and user outcomes

Transform useful engineering knowledge into the *same* canonical note/model format without requiring the engineer to recreate the model manually. Every imported element, connector and row must either be represented or have a recorded, reviewable disposition. Repeated source imports should not destroy previously added meaning or human notes.

An engineer should be able to:
1. Select an EA repository or supported BOM file.
2. Inspect source structure, candidate mappings, errors and impacts **before writing**.
3. Create a complete new vault ZIP or add to an explicitly selected existing vault.
4. Get model notes, managed SysML blocks, flags, source ledger and a change log.
5. Separately choose maintenance mode to preview and update the vault toolset without supplying a source model.

## 2. Supported inputs and intentionally excluded inputs

| Source | Current source implementation | Policy/limitation |
|---|---|---|
| EA .qea / .qeax / supported SQLite | Source graph reader (objects, connectors, packages, tags and supported embedded documents) | Read-only extraction; EA diagrams deliberately excluded |
| BOM .xlsx, .xlsm, .csv, .tsv, text | Spreadsheet/TSV reader and BOM translation | Flat and redline-like layouts; actual corporate workbook diversity not fully validated |
| Existing MDSE vault folder | Read/compare current notes and managed config | Explicit browser permission; no silent wholesale overwrite |
| No engineering source | Managed vault update (Step 4) | Maintains configuration and plugins, not modeled engineering notes |
| Standalone PDF, DOCX, scanned drawings/images | **Not a demonstrated general-purpose adapter** | Embedded QEAX documents are not equivalent to importing arbitrary documents |
| Old .xls binary workbooks | Unsupported by documented current reader | Convert source in a controlled manner before import |

Chrome/Edge support selected-folder writes through the File System Access API. Safari/Firefox are limited to new-vault ZIP generation for this flow. The distributed application is the self-contained [mdse_importer.html](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/importer/dist/mdse_importer.html), produced with Workbench built first.

## 3. Logical decomposition

### A. Source acquisition and preflight

Responsibilities: identify source format, inspect SQLite header/source consistency, calculate source fingerprint, enumerate supported tables/worksheets, validate destination permissions and classify unsafe path/name conditions. Preflight is read-only and must surface blockers before Apply.

Sources: ea_source.ts, qeax_reader.js, xlsx_reader.js, preflight.ts, importer.template.html.

### B. Source reconciliation engine

Extract EA elements/relationships/packages and BOM rows, normalize families through governed mapping, resolve existing identities, build a candidate source graph, then translate supported semantics. Do not infer unstated EA flow, connector direction or native SysML meaning from ambiguous input.

Per-source-row dispositions from the importer specification are **native**, **alias_merged**, **evidence_only**, **deferred_review**, **excluded_by_policy** and **error**. Unknown families/endpoints must be reviewable, never silently discarded.

Sources: run.ts, ea_mapping.ts, translation.ts, sysml.ts, bom.ts, bom_category.ts, identity.ts, naming.ts.

### C. Change planning and controlled merge

Match an existing note by stable model/source identity (EA UID, BOM part-number/revision policy), compare prospective YAML/body/SysML changes, and distinguish: create; unchanged; fill empty field; approved replacement; needs review; conflict; missing-from-source.

- Preserve an existing uid/id and human-authored Markdown.
- Filled fields and authoritative SysML text require an approved update transaction.
- Conflicting type/identity or ambiguous link becomes an explicit diagnostic/flag.
- Missing source records are flagged, not erased.
- A second identical import should be a no-op.

Sources: merge.ts, run.ts, notes.ts, identity.ts; shared Core contract. The legacy Core mergeNote policy still needs reconciliation against this approval-first importer contract.

### D. BOM and revision ingestion

The model supports one reusable part-number concept and separate CL1 revision-specific definitions/notes under governed BOM policy. Assemblies own revision-pinned child usages and are not updated simply because the newest component revision exists. The importer provides parent/child relationships, variants, alternates, per-usage quantities and classification from supported source layouts.

Sources: bom.ts, bom_update.ts, bom_category.ts. **Limit:** historical importer README explicitly identifies incomplete existing-BOM revision update/diff behavior; the 2026-11-21 hardening work improves file safety, not by itself the engineering meaning of CL1/CL2 revisions.

### E. Managed vault update

Updates controlled schema, templates, bundled Workbench plugin and governed settings to a paired tool release using **Preview → Apply**. Must protect the actual vault root; back up modified settings and plugin bytes before mutation; reject changed-since-preview state, unsafe Windows/macOS names and case/Unicode collisions; verify each write and attempt rollback after failure.

Sources: vault_update.ts and importer.template.html; merged PR #9. Rollback is best-effort, **not an ACID filesystem transaction**; a complete external vault copy is a prerequisite for real staging tests.

## 4. Primary workflows

**IMPORT-01 — New vault:** Select source and identity → read-only preflight → family mapping/row reconciliation → model note planning → build Base Vault + controlled plugin payload → ZIP export → ledger/changelog and parser report inputs.

**IMPORT-02 — Existing vault:** Choose actual vault root → scan identity and conflicts → source-to-existing comparison → show exact planned changes/flags → explicit Apply → write verification and recoverable backups → review imported notes in Workbench.

**IMPORT-03 — Tool maintenance:** No QEAX/BOM source required → choose existing vault → Preview vault update → inspect changed/unchanged/merged/left-alone rows → recheck snapshot and permission → Apply with backup/readback → restart or run Bootstrap repair as appropriate.

**IMPORT-04 — Reimport:** Re-read same source → reconcile UID/part matching → prove unchanged rows are no-ops and user data unchanged; new/changed records produce only approved writes and flags.

## 5. Data contracts and interface boundaries

**Receives:** governed schema/class/EA mappings from MDSE_v2; existing model files from selected vault; user identity; approved merge choices; optional BOM history.  
**Writes:** Markdown/YAML notes with authoritative SysML v2 sections; flags; import ledger; dated change log; allowed attachments; controlled plugin/configuration when maintenance is chosen.  
**Consumes:** Core note codec, Base Vault build payload, compiled Workbench and Bootstrap artifacts.  
**Hands off:** imported knowledge to Workbench for review/search/edit; unresolved flags to engineer; no Jira/PLM release authorization.  
**Does not own:** authoritative engineering approval, interactive drawing editing, automatically classifying a parent's CL1 vs CL2, native SysML semantic inventions, installing OS software or managing Git repositories.

## 6. Must-hold invariants

1. A source graph row has one explicit disposition; errors and exclusions are counted.
2. Native SysML relationships are owned by the correct modeled element; no independent duplicate YAML semantics.
3. Nonapplicable/unsupported inputs are reported, not converted to plausible-looking but wrong model facts.
4. Model identity and note user zone survive reimports.
5. Preview has no mutation; Apply uses only the still-valid reviewed plan.
6. Backups of replaced content exist and are verified **before** first original mutation.
7. Interrupted Apply reports remaining recovery work; never claim rollback was atomic.
8. Toolset update and engineering data import must not silently replace user plugin data or unrelated notes.

## 7. Acceptance cases and evidence

- **IMP-01:** Synthetic QEAX extraction count and row dispositions reconcile; connector endpoint/type gating is correct.
- **IMP-02:** Every generated note validates against classes; UID/id uniqueness and no accidental model duplicates.
- **IMP-03:** Independently assemble and parse all emitted native SysML, including qualified references.
- **IMP-04:** Reimport identical model is a no-op; a changed model produces a complete reviewable diff, with no unapproved overwrite.
- **IMP-05:** Import multiple BOM revisions and verify parent-owned pinned usages, quantities, CL1/CL2 classification and source provenance.
- **IMP-06:** Backup/permission/path/error-injection tests on actual Windows NTFS and macOS APFS vault copies; prove no unnoticed partial write.
- **IMP-07:** Update installed toolset from the same paired build; source, embedded plugin and lock match.
- **IMP-08:** Importer output is searchable/inspectable in installed Obsidian Workbench, with flags and missing items visible.

**Automated sources:** [Importer unit tests](https://github.com/spencerskelly/MDSE_v2/tree/main/tools/importer/test), [browser oracle](https://github.com/spencerskelly/MDSE_v2/blob/main/testing/oracles/test_importer_browser.py), [cross-platform acceptance](https://github.com/spencerskelly/MDSE_v2/blob/main/docs/CROSS_PLATFORM_IMPORT_ACCEPTANCE.md). **Outstanding:** independent full real-data acceptance; live deployment; existing-BOM revision reconciliation and user permission evidence.

## 8. Future integration, not present certification

A production document/drawing repository intake adapter, wire-list/schematic extractor, redline/change-deviation import and broader PDF/DOCX/image intake are desired engineering workflows, but **do not assume the current importer performs them**. A redline may require impact queries, temporary effectivity and controlled release managed by Workbench/PLM processes rather than automatically importing a new parent revision.

**Model owner:** [[50_Architecture/MDSE Importer/MDSE Importer]]. This specification is a readable index; it introduces no new modeled parts, requirements or native links.
