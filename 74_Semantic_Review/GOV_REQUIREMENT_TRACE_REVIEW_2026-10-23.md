# GOV requirement trace review — folder 6

**Inventory:** 18 original GOV source rule notes, 18 analysis notes, 30 generated requirements from 12 Active GOV rules (001–009, 012, 017, 018) and 12 existing reusable verification cases. GOV-010 is Check, GOV-011/013/014 Proposed, and GOV-015/016 Unreviewed; those are not promoted.

All **30** derived requirement notes retain their original identities and SysML definitions. Each has explicit rule/analysis link, matching case and a relevant architecture-context navigation link. [[MDSE Toolset Composition]] now owns **30 native typed requirement usages** plus **25** positive objective-level verification intents in ten existing case usages.

## Explicit holds

- REQ-31011, REQ-31012 (GOV-006): historical Test_Vault_ workflow, superseded by GOV-001/GOV-005 authority.
- REQ-31028 (GOV-017): Test_Vault_ as workspace is historical repository positioning, not an independently actionable model behavior.
- REQ-31029, REQ-31030 (GOV-018): EA-package placement and legacy folder cleanup conflict with the active v2 folder/placement policy.
- None of these five was assigned positive `verify` targets. They remain Draft for reconciliation/retirement with approval; source text not silently changed.

## Semantic and acceptance gaps

GOV-002 TypeScript-only mandate may conflict with existing runtime JavaScript paths; GOV-008 direct-QEAX intake needs code-path evidence; GOV-012 tool responsibility segmentation mixes prohibitions and implementations; GOV-017 single-vault phase scope has future cross-vault implications. A generic verification case per source rule is **not** acceptance of each constituent software/process claim. Capture fixture, failure mode, expected observation and executed evidence per atomic statement.

**No new model notes were needed** because rule, analysis, architecture and case endpoints already existed. No governance rule edits, repo release policy changes, runtime tool edits, inferred satisfaction, or test execution were made. `status: Draft` and `executionStatus: not-run` remain.

**Next family:** IMP, after checking Workbench graph validation for this commit.
