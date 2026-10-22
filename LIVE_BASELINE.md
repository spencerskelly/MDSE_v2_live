# MDSE v2 Live — integration baseline

This repository is the engineering definition and integration test vault for MDSE. All work is committed directly to main. The MDSE_v2 repository supplies the tool source, compiled runtime and normative rules; this vault describes and tests the product, without becoming a duplicate tool source.

## Initial synchronization (2026-10-22)

- Installed Workbench 0.9.0 from MDSE_v2 main built artifact under .obsidian/plugins/mdse-workbench.
- Installed Bootstrap 0.1.0 runtime under .obsidian/plugins/mdse-bootstrap, **disabled** pending an actual Base Vault release lock and controlled first-open acceptance. Do not enable it in an unprepared vault.
- Enable Workbench in community-plugins.json. Obsidian still requires explicit user trust of community plugins.
- Existing last-check notes and ledgers preserved in place; all are draft/proposal material until reviewed.
- The 65-file foundational portion of mdse_v2_cleanup/modeling/MDSE_Toolset (needs, use cases, behaviors, architecture, verification and baselines) was copied without editing source bytes. The remaining 1,406 files in the cleanup engineering model (70_Rule_References through 74_Semantic_Review) remain pending. Preserve UIDs, IDs and original evidence, and reconcile rather than blindly merge with last-check.
- Workbench bundled JS is the compiled artifact in MDSE_v2 main. The recently committed all-connections panel change in source must be rebuilt and validated before it will appear in this installed runtime.

## Baseline sources

- Tool source: https://github.com/spencerskelly/MDSE_v2/tree/main
- Initial self-model source: https://github.com/spencerskelly/MDSE_v2/tree/mdse_v2_cleanup/modeling/MDSE_Toolset
- Audit records: last-check/README.md

## Completion gates

1. Complete transfer of the cleanup model's 70–74 rule-reference/analysis/derived-test/semantic-review folders without renumbering or losing relationships; reconcile, do not overwrite, last-check.
2. Establish approved top-level navigation and Base Vault managed configuration.
3. Generate locked Bootstrap release metadata from the tool source and pass its startup/restart tests.
4. Rebuild Workbench, sync current source, and verify canvas all-relationships depth control in Obsidian.
5. Run note/schema/link/SysML parser and cross-platform integration checks; record evidence.

No completion gate is claimed passed by this file alone.
