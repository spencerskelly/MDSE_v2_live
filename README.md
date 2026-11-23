# MDSE v2 Live — Active Engineering Tool Definition

This vault is the **engineering definition of the MDSE toolset** and its engineer-facing workflows. It is intentionally smaller than the historical SysML self-model. Source code and normative rules remain in [MDSE_v2](https://github.com/spencerskelly/MDSE_v2); this vault is where we specify and review the engineer's work and validate tools.

## Start here

1. **[00_Tool_Definitions](00_Tool_Definitions/README.md)** — one detailed, readable specification for each of the five tools (Core, Importer, Workbench, Base Vault, Bootstrap), plus cross-tool contracts.
2. **[01_Engineering_Workflows](01_Engineering_Workflows/README.md)** — how engineers actually take a product from evidence and customer need through architecture, detailed design, verification, production release and sustaining change.
3. **[90_Archive/Legacy_Model_2026-11-21](90_Archive/Legacy_Model_2026-11-21/README.md)** — original historical modeled needs, definitions, requirements, functions, verification, rules, decisions, review and reference records, preserved under original subpaths.
4. **[86_Reference_Data](86_Reference_Data)** — external source/reference documents (not an active engineering model).
5. **[99_System](99_System)** — governed runtime schemas, plugins, templates and tool views; preserve the installed configuration.

## Authoritative boundaries

- **Current tool behavior:** MDSE_v2 source and test evidence, not historical screenshots or a feature description written before the latest merge.
- **Current operating requirements:** this active workflow documentation is a proposed engineering process until reviewed and accepted; it does not replace company QMS, PDM/PLM, manufacturing or test approval systems.
- **Historical native SysML:** authoritative *for its frozen 2026-11-21 snapshot* under 90_Archive. It is no longer asserted to be the current active requirements baseline. Tool definitions in 00 are intentional explanatory Markdown, not a second set of native SysML symbols or UIDs.
- **New native model:** when required, author one canonical definition and accepted relationships in a future controlled active model. Do not quietly copy archived notes wholesale or treat draft requirement candidates as approved.
- **Operational tool navigation:** Document / Define / Structure / Verify change the contents of the **same Workbench panel/pop-out**; notes, canvases and supported Bases use independent editor tabs.
- **Source control:** MDSE_v2_live remains main-only under the established repository policy. Inspect tool main, current rules, installed runtime and source/model versions before making claims about installed behavior.

## Configuration management / PDM transition — proposed design v0.1 (2026-11-22)

**Architecture decision:** after formal validation and quality release gates, MDSE will issue new engineering part numbers, control part revisions/EBOMs and become authoritative for engineering releases. Native SOLIDWORKS CAD stays under existing PDM file/version and check-in/out control in the first phase. Legacy records are preserved/indexed and promoted into detailed modeling only when necessary; an approved authority-transfer cutoff prevents simultaneous revision issuers.

- [[00_Tool_Definitions/08 - Configuration Registry and Release Service|Configuration Registry and Release Service]] — proposed identities, CL1/CL2 revision rules, variant BOMs, exact CAD version capture, ECO/approvals, immutable release manifests, legacy crosswalks and acceptance tests.
- [[01_Engineering_Workflows/10 - Create and Change a Controlled Assembly|Create and Change a Controlled Assembly]] — proposed Structure Create/Edit/Revise/Impact/Release journey in the persistent Workbench.

**Status:** specification only. These proposals are not functioning number-allocation or release services and do not change the currently qualified PDM/QMS authority. Do not perform product numbering or release from the present Workbench implementation.

## Archive and validation status

The historical folders were **moved without rewriting their file contents**, preserving original directory subtrees and Git history. The 2026-11-21 archive README records the exact pre-move revision, exclusions and known internal-link/Canvas limitations. Legacy validation scripts are now explicitly scoped to the archived model so an old parser success cannot be misreported as certification of the new active workflow definition. Manual Obsidian and real QEAX/BOM acceptance are still independent gates.

Keep 00 and 01 lean. Every new tool behavior should be described as: engineer's goal → context → steps and decisions → outputs → UI behavior → rules/trace/evidence → acceptance tests → current implementation gap.

## Archived initial baseline and related history

- [Pre-consolidation root README](90_Archive/Legacy_Model_2026-11-21/ROOT_README_2026-11-21.md).
- [Archived tool composition](90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE%20Toolset%20Composition.md).
- [Original derived requirements](90_Archive/Legacy_Model_2026-11-21/72_Derived_Requirements).
- [Historical semantic review and independent parser notes](90_Archive/Legacy_Model_2026-11-21/74_Semantic_Review).
- [Archive manifest](90_Archive/Legacy_Model_2026-11-21/README.md).

**Runtime repository checkpoint (2026-11-22):** The tracked Workbench plugin in this vault has been synchronized to **0.10.2** from reviewed MDSE_v2 commit `1aff02b681028189db3ffe7ab369018c854637d2`. Its `.obsidian/plugin-lock.yaml` version and file hashes were regenerated and verified by GitHub Actions. This updates the **GitHub vault**, not an already-open local Obsidian instance: pull the latest `main`, verify the plugin manifest and reload/restart the plugin. Validate global Search, Pick notes, two Canvas tabs and a saved Canvas in a copied staging vault before asserting real-Obsidian acceptance. Function, Requirements, Tables and Structure now use only selected-element/explicit-relationship context; use Search to add unrelated notes intentionally. Archive indexing limitations remain independent work.
