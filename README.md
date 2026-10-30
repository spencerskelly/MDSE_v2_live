# MDSE vault

Markdown Systems Engineering vault (release 0.9.0). SysML v2 text in the last `## SysML v2` block of a note is authoritative; everything else is YAML and Markdown.

- AI tools: start at `99_System/02_AI/AI_INSTRUCTIONS.md`.
- Schemas: `99_System/03_Schemas`.
- Imports: `99_System/11_Import`.
- **Step 05 endpoint mapping:** [native-v2 typed relationship routing and remaining OD-01 decisions](74_Semantic_Review/STEP_05_TYPED_RELATIONSHIP_ENDPOINT_MAPPING_2026-10-24.md), with historical IMP-116 trace preserved.
- SysML v2 language reference: [55_Language](55_Language/README.md).
- Open language completeness and validation findings: [SysML v2 language coverage review](74_Semantic_Review/SYSML_V2_LANGUAGE_COVERAGE_REVIEW.md).
- Software model composition: [MDSE Toolset Composition](50_Architecture/MDSE%20Toolset%20Composition.md).
- Rule-backed modeled relationships: [trace review](74_Semantic_Review/MODELED_RELATIONSHIP_TRACE_REVIEW.md).
- New import-change and edit-eligibility traces: [requirement linking pass 2](74_Semantic_Review/REQUIREMENT_LINKING_PASS_02_2026-10-23.md).
- Full WKB-008 three-clause model trace: [requirement linking pass 3](74_Semantic_Review/REQUIREMENT_LINKING_PASS_03_2026-10-23.md).
- Relationship editing and scanner/deduplication traces: [requirement linking pass 4](74_Semantic_Review/REQUIREMENT_LINKING_PASS_04_2026-10-23.md).
- Validated live-vault Workbench graph (with open parser/UI gates): [relationship validation evidence](74_Semantic_Review/LIVE_RELATIONSHIP_VALIDATION_2026-10-23.md).
- **Step 01 complete, navigation findings open:** [active-vault integrity baseline and handoff](74_Semantic_Review/STEP_01_VAULT_INTEGRITY_BASELINE_2026-10-24.md), with verified CI counts and categorized next actions.
- Whole-vault rule/analysis/requirement/verification provenance audit: [derived lineage audit and remaining gates](74_Semantic_Review/DERIVED_LINEAGE_AUDIT_2026-10-24.md); executable check: `scripts/audit-derived-lineage.mjs`.
- Independent SysML 2.0 parser: [Step 02 assembled-model acceptance and remaining warnings](74_Semantic_Review/STEP_02_INDEPENDENT_SYSML_PARSER_ACCEPTANCE_2026-10-24.md), with [blocking GitHub CI](https://github.com/spencerskelly/MDSE_v2_live/actions/workflows/validate-live-sysml-parser.yml). The assembly and parser check do not approve Draft requirements or execute verification cases.
- **Step 03 recorded:** [obsolete Active governance rules reconciled to D-0066](74_Semantic_Review/STEP_03_ACTIVE_GOVERNANCE_RECONCILIATION_2026-10-24.md). Five source rules reviewed; historical Info/analysis notes and fifteen Draft candidates remain traceable without newly asserting SysML relationships.
- **Step 03 continuation:** [MOD-075/076 native SysML versus MDSE-only YAML relationship authority](74_Semantic_Review/STEP_03_MOD_RELATIONSHIP_AUTHORITY_RECONCILIATION_2026-10-24.md) — D-0069, historical source and derived-candidate links, OD-01 still open.
- **OD-01 decision-support:** [29 legacy relationship fields triaged for native SysML, MDSE-only or semantic review](74_Semantic_Review/OD_01_LEGACY_RELATIONSHIP_FIELD_TRIAGE_2026-10-24.md); no approval implied.
- **Step 03 / D-0070:** [Unresolved MDSE-note links now remain `flagLink` evidence, not `tracesTo` YAML](74_Semantic_Review/STEP_03_PROVISIONAL_LINK_RECONCILIATION_2026-10-24.md), with historical candidate/test lineage preserved.
- First-class WKB-008 requirement definitions: [granular requirements](72_Derived_Requirements/WKB/REQ-31333_31341/README.md).

## Open modeled relationships in Obsidian Canvas

- [Stakeholder needs, use cases and functions](20_Use_Cases/MDSE%20Knowledge%20Base%20-%20Modeled%20Dependencies.canvas) — 62 semantically differentiated links (32 typed actions, 26 need refinements, 4 supporting dependencies), with 16 unconnected stakeholder needs visible as gaps.
- [Tool composition and software functions](50_Architecture/MDSE%20Software%20Architecture%20-%20Modeled%20Relationships.canvas) — 24 part/performance/behavior edges.
- [Original rules, requirements, allocations and verification](74_Semantic_Review/MDSE%20Rule%20to%20Requirement%20-%20Allocation%20and%20Verification.canvas) — 11 labeled connections, with sourceRule provenance explicitly distinguished from native SysML.

These are saved **views**, not independent semantic authorities. The last `## SysML v2` block in each model note remains authoritative. Changing the notes requires regeneration of saved views; the Workbench plugin can generate fresh preview canvases after its release is synchronized.

- [Native semantic disposition of existing use-case links](74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) — 16 reviewed notes, original associations, reasons for deferred connections and validation limits.

## Mandatory session-start synchronization with MDSE_v2

**Every new MDSE working chat must begin by inspecting the current `spencerskelly/MDSE_v2` default branch before editing the live model or making tool-behavior claims.** The live vault is the engineering definition and integration test environment; the toolchain repository is the implementation and governing source. Neither previous-chat observations nor local copies replace a fresh comparison.

1. Read the latest `MDSE_v2/governance/DECISIONS.md` (newest applicable decisions), `RULESET.md` (current rule status and wording), `OPEN_DECISIONS.md`, and `ARCHITECTURE.md`. Check the governing register for `live`-tagged rules and changed/retired IDs. Record the inspected commit/ref or file version.
2. Inspect the **relevant** current `tools/core`, `tools/importer`, `tools/workbench`, `tools/base-vault`, or `tools/bootstrap` source/README/contracts, plus schemas and actual build/test evidence, whenever work touches that capability. A README alone does not certify a tool's behavior.
3. Read the current live vault's own `README.md`, `99_System/02_AI/AI_INSTRUCTIONS.md`, schema/language references, model files and traceability matrix. Compare live modeled behavior with governing rules and actual tool behavior; distinguish source-version skew and draft work.
4. Before adding/updating model relationships, identify the **current** native SysML syntax and ownership from the governing decisions and language references. SysML v2 remains authoritative; administrative provenance, MDSE-only YAML fields and generated readable relationship projections must not become independent semantic authorities.
5. Keep each trace distinguished as **existing native relation**, **navigation/provenance**, **proposed association**, **owner-approved modeling direction**, or **validated executable evidence**. Do not infer valid chains just to fill empty cells. Preserve UID/ID and source provenance.
6. Record new decisions and gaps in live review notes; do not silently change `MDSE_v2` implementation governance from the live model. Update the model when implementation changes, then verify assembled SysML, Workbench indexing, UI behavior, and actual execution evidence separately.

**Important current contract example:** D-0108 (2026-10-25) permits readable forward YAML link projections of SysML relationships for Obsidian display, while the SysML block remains authoritative. These projections can become stale after editing and are ignored as independent edges by the Workbench when a SysML block exists. D-0069/OD-01 must be interpreted with this later decision and its unresolved synchronization work; do not treat YAML projections as independent native model facts.

**Chat startup report:** Before substantial new work, briefly state the inspected MDSE_v2 baseline, any changed rules/contracts affecting the requested task, and relevant unresolved compatibility or validation gates. If access to the latest repository fails, explicitly disclose that the baseline is unverified and avoid presenting historical information as current.

