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

### CT-04a — Search-to-Canvas release checkpoint (2026-11-22)

- **Toolset:** MDSE_v2 0.11.1; **Workbench:** 0.10.1. Source is the reviewed merge commit [138f3e8](https://github.com/spencerskelly/MDSE_v2/commit/138f3e84686b2e0c1f19f68830cec725c7fec787), PR #14.
- **Implementation:** global Search and Pick notes both support add-one/add-many into the already-open named Canvas; New canvas is explicit. Switching Canvas tabs updates the target label; asynchronous additions reject a changed/closed target.
- **Build and verification:** paired Workbench/importer generated artifacts committed; source/packaging regression and native Windows/macOS CI checks passed. Independent parser acceptance was not performed by that PR job.
- **Live repository:** `.obsidian/plugins/mdse-workbench` synchronized from the pinned revision; `.obsidian/plugin-lock.yaml` records the matching Workbench version, immutable source commit and file SHA-256 hashes. The sync job changed controlled plugin files and the lock, not engineering model notes.
- **Deployment boundary:** remote repository synchronization is not proof that a user's local Obsidian installation has pulled or reloaded the plugin. Real saved-Canvas and sidebar/pop-out acceptance still requires a local staging session and recorded outcomes.

### CT-04b — Context-scoped Workbench workflow checkpoint (2026-11-22)

- **Source:** MDSE_v2 toolset/Importer 0.11.2, Workbench 0.10.2, reviewed merge [1aff02b](https://github.com/spencerskelly/MDSE_v2/commit/1aff02b681028189db3ffe7ab369018c854637d2), PR #15.
- **UI behavior:** Function, Requirements and Tables have no whole-vault scope; All notes and the unrelated global part registry are not workflow outputs. With no selected note, the views prompt for a source instead of showing every indexed element.
- **Scoped relationship expansion:** only true connected modeled elements are shown automatically. Search/Pick notes still searches the vault for unlinked concepts and adds explicitly selected notes to the named existing Canvas without inferring native SysML relationships.
- **Evidence:** paired generated plugin/importer outputs, Workbench regression checks, version policy, browser/oracle and native Windows/macOS CI passed. The independent SysML v2 parser was not executed on this change.
- **Live configuration:** MDSE_v2_live plugin `0.10.2` and `.obsidian/plugin-lock.yaml` were synchronized and hashes verified by GitHub Actions against the pinned merge commit. This updates tracked repository files, **not** any already-open local plugin process. Interactive staging Obsidian acceptance is still open.

### CT-05 — Workflow/navigation isolation

Document, Define, Structure, Verify and all tool-mode selections remain in one Workbench sidebar or pop-out. Notes, Canvases and intended Bases are editor artifacts, not Workbench views. Reopening an artifact should focus the existing tab. Changing the current lens must not alter the file being edited.

### CT-06 — Model versus configuration change

**Model change:** explicitly reviewed native note/SysML transaction through Workbench or approved Importer merge.  
**Configuration update:** controlled and previewed Importer maintenance using Base Vault payload, then Bootstrap integrity/activation.  
**Engineering release change:** ECO/redline/CL1/CL2/production effectivity process; the tool can aid analysis but cannot auto-approve the change.

### CT-07 — Proposed configuration registry and engineering release service (2026-11-22)

**Decision:** Preserve the current five modeled MDSE tool definitions. Add a **proposed transactional configuration/release backend service** consumed by Workbench (and by Importer for legacy catalog reconciliation); do not create another native SysML tool definition or imply a delivered capability. Source specification: [[08 - Configuration Registry and Release Service]]; engineer journey: [[01_Engineering_Workflows/10 - Create and Change a Controlled Assembly|Controlled Assembly]].

- The authoritative **model** remains in a governed UID/native SysML note. The backend owns administrative part identities, CL1/CL2 revision policies, EBOM usage pins, ECO/approvals, effectivity and immutable engineering release manifests. A registry binding or Canvas edge is not automatically a SysML relationship.
- New engineering PNs and later revisions are MDSE-issued **only after** company approval and implementation of transactional uniqueness and release gates. Previous PDM-issued records remain historically authoritative; transfer of each legacy PN's subsequent revision issuance requires a signed cutoff and source snapshot.
- SOLIDWORKS PDM continues to own native CAD content, file-version/revision identity and check-in/out. MDSE release must bind exact PDM CAD file identities, versions and approved statuses, preserve verifiable hashes and fail closed if references are missing or stale.
- Structure remains a context-scoped Workbench. Explicit catalog Search may find unrelated parts, but adding a modeled card to Canvas does not create a BOM usage. A BOM change and a native SysML change each require a previewed, authorized transaction.
- A release registry transaction publishes an immutable candidate manifest only with exact G4/G5 and digest-bound approvals. Manufacturing/ERP/MES acknowledgment is a separate downstream status, not implied by engineering release.
- The coordinated Git/registry/PDM workflow uses staged versioned inputs, durable journal, revalidation and idempotent recovery; it must not claim cross-system ACID atomicity.

**Status:** design proposal only. Existing quick-create and clone helpers do not constitute a number allocator; existing partLifecycle/approval note labels do not constitute engineering release. No MDSE production release is authorized by this decision.

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


## Version identification and release progression (2026-11-21)

**Development release decision:** The next target is `0.11.0`, still **internal development/testing**, not approved for use. For routine improvements increment PATCH (`0.11.1`, `0.11.2`); for meaningful new functionality increment MINOR (`0.12.0`); significant breaking architecture changes within `0.x` require a clear migration warning and still do not constitute a released product. Reserve `1.0.0` for the first separately approved release for use. Do not tag a development build as released-for-use, promote a local installed plugin or deploy to `MDSE_v2_live` merely because version or CI changed. Source: [version policy update PR #13](https://github.com/spencerskelly/MDSE_v2/pull/13).



Every distributable tool change must have a visible, monotonically increasing semantic version. **Importer** owns an independent version in `MDSE_v2/tools/importer/version.json`; **Workbench** and **Bootstrap** own their plugin `manifest.json` versions; the **combined toolset** uses root `package.json`. Source changes to an embedded component change the Importer HTML and must advance **both** the Importer and toolset version (plus the modified component's version). CI checks this across changes against the branch base, and each released version must have a changelog and traceable compiled artifact build hash.

Engineers must be able to compare: the **currently opened offline Importer** version and build hash; the **bundled toolset** version; and the **installed vault** toolset/Workbench/Bootstrap versions. The Importer includes a local version-history panel, but an offline file **cannot detect** the latest approved online release. A selected vault with a newer release than an older Importer must be flagged as a downgrade risk; never silently install the old bundled configuration.

**Observed source/version gap:** as of 2026-11-21, the tracked `MDSE_v2_live` vault still declares `mdse_release: 0.9.0` and `mdse-workbench: 0.9.0`, while the source release candidate is Importer/toolset 0.11.0 (Workbench source 0.10.0, Bootstrap 0.1.0). This is a **candidate**, not permission to deploy. Upgrading this live vault requires an approved paired-build, plugin lock/backup, staged runtime and independent parser/real-vault acceptance. See [MDSE_v2 versioning policy](https://github.com/spencerskelly/MDSE_v2/blob/main/docs/VERSIONING.md) and [PR #12](https://github.com/spencerskelly/MDSE_v2/pull/12).
