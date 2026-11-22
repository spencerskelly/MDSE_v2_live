# Historical MDSE Self-Model Archive — 2026-11-21

**Status: FROZEN HISTORICAL SNAPSHOT. Not the active engineering requirements baseline.**

The original live model had become extensive with rule-reference notes, generated draft requirements, semantic reviews, duplicated explanations and historical acceptance snapshots. This archive preserves its evidence and native SysML declarations while the active vault is reorganized around **00_Tool_Definitions** and **01_Engineering_Workflows**.

## Source and preservation

- **Pre-move MDSE_v2_live commit:** `eb286394ce0cf1465c2cc4751a6cd2ac82573548`.
- **Pre-move Git tree:** `aeef30d314b0e304030412e076ee92a12c4aaad5`.
- Each original root directory below is stored as a Git tree reference under this folder; the **directory tree SHA and all descendants remain identical**. No source note text, UID, primarySymbol, SysML block, test result or drawing/reference bytes have been rewritten by the archive operation.
- The original root README is saved as ROOT_README_2026-11-21.md without modification, alongside historical root baselines.
- Entire Git commit history remains retrievable. This is a relocation, **not** deletion of the archived engineering knowledge.

## Contents and original relative layout

- `05_MBSE_PLM_System_Definition/` — earlier cross-system MBSE/PLM planning.
- `10_Stakeholder_Needs/` — needs and source rationale.
- `20_Use_Cases/` — old use cases and model diagrams.
- `30_Functions/` — reusable action/function model definitions.
- `40_System_Requirements/` — old system requirements.
- `50_Architecture/` — former canonical five tool part definitions and composed subcomponents; retains all original SysML.
- `55_Language/` — SysML language reference notes.
- `60_Verification/` — original test-case definitions.
- `70_Rule_References/`, `71_Rule_Analysis/`, `72_Derived_Requirements/`, `73_Derived_Verification/`, `74_Semantic_Review/` — historical rules, decomposition, candidate trace and parser evidence.
- `80_Issues/` — old model review issues.
- `MDSE_Toolset/` — source/trace/evidence registers and CSVs.
- `last-check/` — historical comparison material.
- Historical root baseline reports and matrix in this directory.

The live runtime `99_System/`, tools/scripts, `.obsidian/` and external `86_Reference_Data/` remain outside this archive. This is a tool-model archive, not a copy of the entire vault or production data repository.

## How to use archived material safely

1. Search/consult it as **historical evidence**, then decide if an applicable concept is still valid. Do not treat an archived `status: Draft` as approval.
2. Do not casually edit or move archived notes. Preserve the original `uid`, id and native SysML namespaces. If something is reactivated, review modern governing rules, create a controlled migration/redirect plan and avoid duplicate live UIDs.
3. **Source-relative Markdown and explicit root paths may no longer resolve automatically** after the directory move. Obsidian basename-only wiki links may resolve, but this is not guaranteed for path-qualified links. Repair links selectively when reusing an archived artifact.
4. **Canvas JSON file-node paths still refer to the old active location.** The historical images are retained but can show missing cards until a separate, reviewed Canvas-reference migration. A Canvas is never native semantic authority.
5. The scripts/workflows named “archived MDSE model” validate this **frozen legacy graph** and its source format. A passing historical parser does not certify the current Markdown-only active workflow specifications.
6. An old Workbench plugin may still read all Markdown in 90_Archive and produce bloated results until archive exclusion is added to the current tool build and deployed to the vault. Do not assume the folder relocation alone fixes runtime search behavior.

## Future retirement decisions

Do not delete these files en masse. For every candidate to reactivate or permanently retire, record original path/UID, source rule and revision, inbound/outbound native relationships, test/evidence status, replacement definition, approver and post-change validation result. Preserve serial/lot/BOM revision history and any regulatory/safety evidence according to retention policy.

The active new engineering flow specifications are [01_Engineering_Workflows](../../01_Engineering_Workflows/README.md) and detailed tool descriptions are [00_Tool_Definitions](../../00_Tool_Definitions/README.md). They are reviewable prose, **not** new SysML definitions superseding all archived semantics automatically.
