# 04 — MDSE Base Vault: Detailed Tool Definition

**Tool boundary:** Deterministic builder of the folder, template, schema, plugin and configuration package an engineer receives. Base Vault defines a **software release environment**, not the meaning or content of an engineering product model.

**Authoritative model:** [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Base Vault/MDSE Base Vault|MDSE Base Vault]] (OBJ-00004), with [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Base Vault/Governed Configuration|Governed Configuration]] and [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Base Vault/Pinned Plugin Payload|Pinned Plugin Payload]].

**Implementation:** [tools/base-vault](https://github.com/spencerskelly/MDSE_v2/tree/main/tools/base-vault), especially [base_vault.ts](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/base-vault/src/base_vault.ts). **Governing rules:** BAS, BOO, MOD-146, plugin configuration decisions. **Status:** vault skeleton and managed payload-generation code exist; README's historical “not yet built” text is inconsistent with current code and must not be used as acceptance evidence. Runtime integration still requires real Obsidian testing.

## 1. Goal

Every participating engineer should start with a consistent MDSE file layout, governed model templates, locked tools and a predictable Obsidian configuration. A new or upgraded vault must not depend on the engineer manually reconstructing plugins, copying AI/schema files or guessing compatible version combinations.

Success: identical source/release inputs produce reproducible managed files; the engineer can open the vault in a compatible Obsidian installation, retain personal settings, and rely on Bootstrap to check the declared plugin lock.

## 2. Delivered configuration

| Package area | Purpose | Update ownership |
|---|---|---|
| Vault marker (.vault.yaml) | Vault identity, MDSE release and schema revision | Importer initializes identity; managed release/schema keys updated |
| 99_System/02_AI | Controlled modeling/AI guidance | Managed from governance |
| 99_System/03_Schemas and 04_Language | Element/property/relationship definitions, language reference | Managed from governance and builder |
| 99_System/05_Templates | Model, document and ECO templates | Managed by Base Vault; copied by Importer |
| 99_System/22_Views | Temporary Workbench Canvas/review files | User workspace, not a semantic source |
| 99_System/23_Saved_Views | User-saved visual artifacts | User-owned, not model authority |
| .obsidian/plugins | Pinned MDSE Workbench, MDSE Bootstrap and supported third-party plugins | Controlled bundled payload; checked against lock |
| .obsidian/plugin-lock.yaml | Version, hashes and governed settings | Generated release authority; not hand-edited |
| .obsidian core/community config | Required core plugins and enabled allowed community plugins | Merge governed keys while keeping supported user preferences |
| .gitignore | Private workspace, caches and OS leftovers | Exclude personal/transient state |
| README/notice files and release metadata | Provenance, third-party notices and human instructions | Managed on release |

The actual contents and paths must be verified against the **current builder output**, not inferred from this summary. Base Vault may ship example content such as an ECO template and fictional ECO example; these examples are **not** approved production engineering changes.

## 3. Internal responsibilities

### A. Governed Configuration

Build the default folder skeleton, shipped schema and language references, templates, configuration files and controlled plugin settings. Decide which settings are **enforced centrally** and which user preferences are retained. Preserve the stable vault identity rather than treating an update as creating a new vault.

### B. Pinned Plugin Payload

Resolve artifacts for Bootstrap, Workbench and the community-plugin stack; include versions, payload hashes, notices and required configuration. Current source enumerates MDSE plugins and shipped dependencies such as Templater, Advanced Canvas and Obsidian Git. Required core Obsidian features include Bases, Canvas, Properties, File Explorer and Command Palette in the builder code. Exact lock contents and compatibility are controlled by the build, not this note.

### C. Templates and example material

Supply governed class templates and reusable documentation templates. An ordinary Document-workflow note and a modeled part/requirement template must not be accidentally interchangeable: only governed modeling templates receive UID/ID and native SysML declarations. The current builder includes an ECO template and a fictional example record.

## 4. Package build and update workflows

**BAS-01 — Build new base:** Read governed schemas and plugin artifacts → assemble folder tree and settings → write consistent lock hashes and example files → compare output with prior same-input build → hand package to Importer for new vault ZIP.

**BAS-02 — Pair with Importer:** Workbench plugin must be built before the Importer bundle, which embeds the distributed plugin payload. Build both products for a new source revision; do not combine an older importer with a newer Workbench manually.

**BAS-03 — Upgrade existing vault:** Importer reads the existing managed files → Preview shows add/replace/merge/leave-alone actions → user accepts → original managed files backed up → update applied and read back → Bootstrap performs integrity and activation/repair once Obsidian opens.

**BAS-04 — Update plugin pin:** Explicitly change approved vendor/plugin version → obtain/verify its license and artifact → regenerate source/bundle/lock → run compatible automated and real-Obsidian acceptance → publish a coordinated release.

## 5. Constraints and invariants

1. Base Vault has no authority to add, delete, merge or reinterpret product model notes.
2. A plugin lock and its referenced artifact hashes describe **one coordinated release**; versions cannot be changed by adjusting the YAML lock alone.
3. Running an update must preserve the vault UID and engineer-owned content.
4. Existing saved views, attachments and personal plugin data remain user-owned.
5. OS metadata and untrusted files never silently enter the controlled package.
6. Templates and language/schema definitions must agree with current governing classes.
7. Commercial or third-party plugin redistribution must preserve license notices and pinned source provenance.
8. A successful build is not proof the selected version starts in Obsidian, or that Bootstrap's first-open flow works.

## 6. What Base Vault does not own

- Author-registration dialog and person-note activation (Bootstrap).
- Import reconciliation and permission-aware writes to the user's existing folder (Importer).
- Workbench model edits, Canvas navigation or visual meaning (Workbench).
- SysML model semantics or note-format validation (Core and governing schemas).
- Source-control merges, production drawing release or customer data import.

## 7. Acceptance and test coverage

| ID | Expected result |
|---|---|
| BAS-01 | Same source plus release and plugin pins produces byte-identical managed payload and lock |
| BAS-02 | Essential plugins, language/schema content, templates and governed keys are present |
| BAS-03 | No personal workspace, plugin data or engineering note is overwritten by the generated defaults |
| BAS-04 | Obsidian starts with approved enabled plugins after trust/Bootstrap, with no false missing-hash state |
| BAS-05 | Upgrade an existing edited vault; verify backups first, personal preference retention and exact release agreement |
| BAS-06 | Change plugin payload without updating the lock and confirm Bootstrap rejects it |
| BAS-07 | Extract new vault ZIP on Windows/macOS and verify filenames, path safety and missing file detection |
| BAS-08 | ECO template/fictional example is present but never treated as a real release approval or model authority |

**Test references:** [Base Vault source](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/base-vault/src/base_vault.ts), [Bootstrap tests](https://github.com/spencerskelly/MDSE_v2/tree/main/tools/bootstrap/test) and [Importer vault-update tests](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/importer/test/vault_update.test.ts).

## 8. Open items

- Confirm the exact plugin payload and lock produced by current main for the installed live vault; the earlier live README records an older Workbench version.
- Reconcile the Base Vault README's inconsistent “shipped” versus “not built” statements against the current build and CI evidence.
- Confirm first-open/repair and multi-OS update acceptance, including governed-vs-personal settings.
- Establish explicit release approval, version recording and rollback procedure before updating MDSE_v2_live.

**Model owner:** [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Base Vault/MDSE Base Vault]]. No duplicate SysML declaration is introduced in this specification.
