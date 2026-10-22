# MDSE v2 Live — integration baseline

This repository is the engineering definition and integration test vault for MDSE. All work is committed directly to main. The MDSE_v2 repository supplies the tool source, compiled runtime and normative rules; this vault describes and tests the product, without becoming a duplicate tool source.

## Initial synchronization (2026-10-22)

- Installed Workbench 0.9.0 from MDSE_v2 main built artifact under .obsidian/plugins/mdse-workbench.
- Installed Bootstrap 0.1.0 runtime under .obsidian/plugins/mdse-bootstrap, **disabled** pending an actual Base Vault release lock and controlled first-open acceptance. Do not enable it in an unprepared vault.
- Enable Workbench in community-plugins.json. Obsidian still requires explicit user trust of community plugins.
- Existing last-check notes and ledgers preserved in place; all are draft/proposal material until reviewed.
- All 1,471 files in mdse_v2_cleanup/modeling/MDSE_Toolset were synchronized unchanged to modeling/MDSE_Toolset on 2026-10-22, including 70_Rule_References through 74_Semantic_Review. The GitHub transfer verified the complete file count and byte-for-byte directory diff before committing at ad22f5bb. All 90 existing last-check model notes remain preserved, and no identity or semantic merging was performed.
- Workbench bundled JS is the compiled artifact in MDSE_v2 main. The recently committed all-connections panel change in source must be rebuilt and validated before it will appear in this installed runtime.

## Baseline sources

- Tool source: https://github.com/spencerskelly/MDSE_v2/tree/main
- Initial self-model source: https://github.com/spencerskelly/MDSE_v2/tree/mdse_v2_cleanup/modeling/MDSE_Toolset
- Audit records: last-check/README.md

## Completion gates

1. **DONE (transfer only):** the full cleanup self-model is present, without renumbering or rewriting existing notes. **OPEN:** semantic reconciliation of last-check and cleanup drafts; do not overwrite notes.
2. Establish approved top-level navigation and Base Vault managed configuration.
3. Generate locked Bootstrap release metadata from the tool source and pass its startup/restart tests.
4. Rebuild Workbench, sync current source, and verify canvas all-relationships depth control in Obsidian.
5. Run note/schema/link/SysML parser and cross-platform integration checks; record evidence.

No completion gate is claimed passed by this file alone.

## Model import evidence

- GitHub workflow: `.github/workflows/import-cleanup-model.yml` (transfer only; do not rerun against existing 70–74 folders).
- Source: `MDSE_v2@mdse_v2_cleanup`, `modeling/MDSE_Toolset`.
- Transfer commit: `ad22f5bb37ca82f0e252e7620d4dafa7e805bff9` on `MDSE_v2_live/main`.
- Source and destination file counts: 1,471; comparison: `diff -qr` passed in the transfer workflow.
- Candidate notes in `last-check/notes`: 90, preserved.
- This proves file parity, **not** SysML validity, trace correctness, plugin launch, Bootstrap release-lock compatibility or live Obsidian acceptance.
