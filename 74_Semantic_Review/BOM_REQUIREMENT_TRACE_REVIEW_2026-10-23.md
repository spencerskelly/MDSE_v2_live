# BOM derived-requirement trace review — folder 3

**Scope:** 27 Draft candidate requirement notes REQ-31233 to REQ-31259, from 12 Active BOM source rules BOM-006 through BOM-017, and 12 existing verification definitions VER-31117 through VER-31128.

## Link inventory

Every source candidate now links to its existing `70_Rule_References/BOM` note, `71_Rule_Analysis/BOM` note, `20_Use_Cases/Import an Engineering Model.md`, `30_Functions/Ingest and Reconcile Engineering Sources.md`, `50_Architecture/MDSE Importer/MDSE Importer.md`, `50_Architecture/MDSE Importer/Source Reconciliation Engine.md`, and corresponding `73_Derived_Verification/BOM` case.

The existing integration note [[MDSE Toolset Composition]] has **27 typed requirement usages** and **12 verification case usages**, each with objective-level `verify` references to the corresponding requirement usages (**27 proposed verification targets**). No new definition notes are needed; no duplicated SysML definitions, `satisfy` relationships or asserted test passes were added.

## Semantic hold points

- BOM-001 through BOM-005 remain Unreviewed, not silently promoted, despite relevant approved rules. Cross-rule source conflicts must be reconciled explicitly.
- BOM-006 (latest revision only) and BOM-008/012 (pinned older child revisions and flagged conflicts) are context-sensitive and need review for consistency; do not normalize or silently discard revision history.
- BOM-011 requires older-revision where-used display; distinguish stored facts from derived read-only query behavior.
- BOM-013 alternate source rows are not part usages and must not change BOM quantities.
- BOM-015 through BOM-017 have compound text segments covering import formats, revision interpretation, part identities, quantities, conflict handling and no-clobber behavior. The initial punctuation-derived candidate notes are **not certified atomic**, and some contain multiple distinct acceptance outcomes. Native links express intended coverage, not successful verification of every sub-obligation.
- No real engineering BOM data was imported or modified.

## Validation pending

Run live Workbench indexed model regression; then extend fixture-level assertions for specific BOM input cases. Independent SysML v2 parser, user-visible Obsidian Workbench runtime and actual verification executions remain outstanding. Keep status Draft and executionStatus not-run.

**Next folder:** BOO, only after reviewing this folder's automated run.
