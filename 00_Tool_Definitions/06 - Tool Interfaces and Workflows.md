# 06 — Tool Interfaces and End-to-End Workflows

**Purpose:** Explain the five-tool architecture without redefining any tool or adding native SysML associations. The canonical modeled composition is [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Toolset Composition|MDSE Toolset Composition]] (OBJ-00006). Current architectural software source: [MDSE_v2 governance/ARCHITECTURE.md](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/ARCHITECTURE.md).

## 1. System boundary and toolset decomposition

| Tool | Producer/consumer role | One responsibility it must not steal |
|---|---|---|
| [[01 - MDSE Core]] | Common model-note strings, identity/codec and validation helpers used by other tools | Never operates as an independent engineering UI or repository |
| [[02 - MDSE Importer]] | External source → planned, reconciled notes; optional controlled vault update | Never silently approves changed model semantics |
| [[03 - MDSE Workbench]] | Vault notes → searchable index/viewpoints; explicit proposed and applied model changes | Never treats a Canvas/term match as authoritative SysML |
| [[04 - MDSE Base Vault]] | Governed schemas, templates, Obsidian plugin assets and lock → reproducible vault package | Never owns imported customer/product content |
| [[05 - MDSE Bootstrap]] | Installed Base Vault lock and local plugin state → integrity, activation and author context | Never downloads arbitrary binaries or silently overrides model content |

The **five existing model tools** have one reusable definition each. Their internal services are contained subparts of those tools, not separate top-level products. Tools, governance and synthetic tests live in public MDSE_v2; real engineering data belongs in the controlled engineering vault. This MDSE_v2_live repo is a self-model/integration-test vault, not the tool source repository.

## 2. Data flow and authority

**External data → Importer:** QEAX/BOM sources are inspected, assigned row dispositions and converted into a planned note/usage graph.

**Base Vault + bundled Workbench/Bootstrap → Importer:** the same release bundle supplies schemas, templates, plugin versions and settings for a new vault or approved maintenance update.

**Importer + Core → Vault:** write planned Markdown/YAML notes and the final native SysML v2 section; preserve user zone, identity, source ledger and unresolved flags. Do not edit released source evidence without review.

**Vault → Workbench:** read governed model notes and explicit native relationships; build a disposable index. A Workbench search/table/Canvas is a projection, never the authoritative model.

**Workbench → Core → Vault:** for an approved edit, validate target/class and native relationship eligibility, show a diff, recheck the underlying file, Apply, and record undo/diagnostics. An unapproved preview must leave the vault unchanged.

**Base Vault/Importer → Bootstrap → Obsidian:** compare the installed plugin/runtime configuration with the lock; repair only allowed settings and enable only verified tools after user trust.

## 3. Cross-tool contracts

### CT-01 — Note structure and identity

Stable uid, class/type schema, frontmatter, optional source evidence, human-authored prose and final SysML v2 block must mean the same thing to every tool. Paths and names are mutable; note identity is not. One modeling concept may be used many times without creating duplicate definitions.

### CT-02 — Native relationships and link projections

A native SysML statement in the owning note defines model structure, specialization, typing, connection, flow, allocation or other allowed semantics. Obsidian links, YAML projections, report tables, generated Canvas edges and this explanatory documentation are views/navigation/provenance. MDSE-only administrative relationships are governed separately. An unresolved link remains a flag/review item; never invent a native dependency to hide it.

### CT-03 — Source authority and reconciliation

Importer must explain each source-row disposition and distinguish existing model meaning from a candidate mapping. Source provenance, translation status and human review remain traceable. Reimport changes require approved merge semantics; repeated unchanged import should not create new notes or rewritten model data.

### CT-04 — Release and plugin compatibility

The controlled package must include a matching Workbench, Importer-produced vault payload, Base Vault, Bootstrap and plugin-lock. Build the Workbench first, then the bundled importer. A GitHub source merge alone does not update MDSE_v2_live's installed plugin. A staging-vault acceptance and an explicit release decision remain necessary.

### CT-05 — Workflow/navigation isolation

Document, Define, Structure, Verify and all tool-mode selections remain in one Workbench sidebar or pop-out. Notes, Canvases and intended Bases are editor artifacts, not Workbench views. Reopening an artifact should focus the existing tab. Changing the current lens must not alter the file being edited.

### CT-06 — Model versus configuration change

**Model change:** explicitly reviewed native note/SysML transaction through Workbench or approved Importer merge.  
**Configuration update:** controlled and previewed Importer maintenance using Base Vault payload, then Bootstrap integrity/activation.  
**Engineering release change:** ECO/redline/CL1/CL2/production effectivity process; the tool can aid analysis but cannot auto-approve the change.

## 4. Engineers' high-level workflows

| Workflow | Starts with | Services involved | Outputs | Current acceptance limit |
|---|---|---|---|---|
| Find/investigate engineering knowledge | Search query, selected part, alias or note | Workbench discovery/query/projection; Core reading | Related notes, where-used, visual and table viewpoints | Whole deployed Obsidian flow not yet accepted |
| Import and reconcile knowledge | QEAX/BOM source, existing vault | Importer, Core, Base Vault | New/reviewed notes, source ledger, flags and change log | Real full source and native parser checks open |
| Define a new concept | Context note, template and approved identity | Workbench quick-create, Core, schemas | Governed note; optional separately reviewed native relationship | Source implemented, installed runtime acceptance open |
| Analyze structural changes | Part/assembly/usage | Workbench where-used, PLM diff, Canvas, ECO candidate | Impact report, parent paths, explicit proposed change | Automated full parent CL1/CL2 disposition not implemented |
| Review requirements and verification | Requirement, case, design or need | Workbench trace, review and edit; Core | Coverage/gap view; verified source relationships | Execution evidence and final release gate separate |
| Create stakeholder documentation | Markdown/selected notes | Workbench Document; Obsidian embeds; export tools | Draft assembled document | Controlled end-to-end publishing not demonstrated |
| Initialize engineer environment | Blank vault or upgraded release | Base Vault, Importer, Bootstrap | Pinned configuration, user identity, active plugin | Real platform first-open tests remain open |

## 5. Detailed redline/change workflow boundary

A **redline** is an approved temporary deviation against a released drawing/part until the controlled revision is released. The toolset needs to support: select released part and current revision; record temporary authorization, limits and effectivity; enumerate all product-line where-used paths; evaluate **each affected parent** for fit/form/function and CL1 or CL2 (or documented no revision); repeat at successive parent levels; link resulting ECO/revised drawings; and close the temporary deviation. A CL1 change requires parent impact review; it must not silently trigger a parent revision without engineering decision. A CL2 change also requires review.

**Current implementation evidence:** Workbench has ECO item planning, ancestor where-used and clone/supersession helpers. **Not demonstrated:** full redline approval, expiry/effectivity, complete configuration-specific impact matrix, final CL1/CL2 disposition and automatic controlled-document release. Those are open workflow requirements, not “existing capability.”

## 6. Test and release handoff

- Build and source-level test: [MDSE_v2 test commands and acceptance](https://github.com/spencerskelly/MDSE_v2/blob/main/testing/WORKBENCH_IMPORTER_ACCEPTANCE.md).
- Independent native SysML parser: verify generated definitions and assembled qualified references, not only the plugin's partial scanner.
- User-facing Obsidian: one-panel navigation, independent note/Canvas/Base tabs, preview and undo, no unintended writes.
- Native Windows/macOS importer: real copied NTFS/APFS vaults, changed-since-preview conflicts, backup-before-mutation, recovery of interrupted writes.
- Released toolset: recorded source/build hashes, approved lock, explicit operator, controlled deployment to live model with no model-file overwrite.
- Product-specific proof: only private staging data may establish full QEAX/BOM, revision and source-document integration.

## 7. Ownership and change control

Tool source and normative rules: MDSE_v2/main.  
Active human-readable tool/engineer workflow definition: MDSE_v2_live/main; original native SysML self-model frozen in 90_Archive/Legacy_Model_2026-11-21/50_Architecture.  
Professional engineering source data: controlled product vault/repository, not the public tools repo.  
New feature decisions: govern through current rule/decision registry, update one existing tool model and tests, then this readable definition. Do **not** use an explanatory page to bypass a governed modeling decision.

This cross-tool description intentionally includes **no new native SysML declaration**. See [[00_Tool_Definitions/README|Tool Definitions index]].
