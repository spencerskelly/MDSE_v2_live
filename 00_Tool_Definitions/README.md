# MDSE Tool Definitions — Start Here

**Purpose:** One straightforward root-level location explaining the five existing MDSE tools and the interfaces between them. The active engineer journey is in [[01_Engineering_Workflows/README|01_Engineering_Workflows]]. This is the recommended human-readable review entry point for the toolset.

**Authority:** These are explanatory software specifications, **not a second SysML v2 model**. The historical notes under 90_Archive/Legacy_Model_2026-11-21/50_Architecture retain the original native SysML and UIDs **as a frozen historical model**, not the new active requirements baseline. New native modeling requires a separately reviewed reactivation or migration. The latest normative rules and executable implementation live in [MDSE_v2](https://github.com/spencerskelly/MDSE_v2). If text here conflicts with the live native SysML or the current governing rules, reconcile the difference explicitly; never silently duplicate a tool definition.

**Baseline reviewed:** MDSE_v2/main at fae74cd58c4ef2582bc484148531795bcfdc72ad; MDSE_v2_live/main at ad5e9425276ebaaf4c82f25666461bcd7d1bce08 before these files were added. Recheck both main branches before treating any capability as current. **Source merged** does not equal **installed and accepted**: the live vault baseline lists an older Workbench, while PRs #8 and #9 changed the tool source.

## Read the tools in this order

| File | Tool | Principal responsibility |
|---|---|---|
| [[01 - MDSE Core]] | Core | Shared note/SysML contract, identity and serialization |
| [[02 - MDSE Importer]] | Importer | Source ingestion, reconciliation, controlled new/existing vault writes |
| [[03 - MDSE Workbench]] | Workbench | One contextual UI for finding, investigating, defining, structuring, verifying and reviewing engineering knowledge |
| [[04 - MDSE Base Vault]] | Base Vault | Deterministic vault package, governed configuration, templates and plugin payload |
| [[05 - MDSE Bootstrap]] | Bootstrap | Startup integrity checks, activation/repair and author registration |
| [[06 - Tool Interfaces and Workflows]] | Toolset integration | Cross-tool data flow, workflow ownership, release and common model contracts |
| [[07 - Consolidation Review]] | Retirement review | Existing material, nonduplicate-model policy, outstanding requirements and proposed cleanup |
| [[08 - Configuration Registry and Release Service]] | **Proposed service (v0.1)** | Transactional part identities, revision-controlled EBOM, exact CAD references, change/approval and immutable MDSE release authority |

## Functional view

1. **Import engineering knowledge:** Importer reads QEAX or supported BOM sources, applies mapping and identity policy, creates a preview and writes accepted notes to a new or existing vault.
2. **Open a consistent environment:** Base Vault supplies governed files and matching runtime artifacts; Bootstrap checks their integrity and author context.
3. **Investigate and change the model:** Workbench reads the vault, builds a disposable index, offers Document / Define / Structure / Verify in the **same sidebar or optional pop-out**, and opens actual notes/canvases as separate editor tabs.
4. **Preserve semantic authority:** The authoritative relationship and structure content remains in the last SysML v2 block of the owning modeled note. YAML metadata/projections, tables, canvases, source evidence and this folder do not independently assert new native SysML relationships.
5. **Verify separately:** Unit tests and CI support source integration; independent SysML parser acceptance, real Obsidian and native vault-update tests are separate gates.

## What this folder deliberately does not do

- It does **not** create new tool UIDs, object IDs, part definitions or duplicative allocation/satisfaction statements.
- It does **not** reclassify the existing many Draft requirements as approved.
- Historical 50_Architecture, 55_Language and 70–74 model/review folders have been **moved intact** to 90_Archive/Legacy_Model_2026-11-21/; their content, UIDs and source provenance remain preserved.
- It does **not** deploy newly merged code into this vault or declare the installed plugin current.

## Archived native model reference (historical)

- [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Toolset Composition|Toolset composition — one typed usage of each tool]]
- [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Core/MDSE Core|Core definition]]
- [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Importer/MDSE Importer|Importer definition]]
- [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Workbench/MDSE Workbench|Workbench definition]]
- [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Base Vault/MDSE Base Vault|Base Vault definition]]
- [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Bootstrap/MDSE Bootstrap|Bootstrap definition]]
- [Implementation architecture](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/ARCHITECTURE.md)
- [Governing rules](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md)
- [Accepted source consolidation and outstanding runtime tests](https://github.com/spencerskelly/MDSE_v2/blob/main/testing/WORKBENCH_IMPORTER_ACCEPTANCE.md)

**Editorial policy:** Update the relevant tool specification after a source change; reference the exact governing rule and model note. Label an item **implemented**, **source only / unaccepted**, **proposed**, **unsupported**, or **requires reconciliation**. Never represent a planned behavior as demonstrated functionality.
