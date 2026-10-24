# Step 03 — Provisional tracesTo / flagLink reconciliation (2026-10-24)

**Status: governance and importer mapping reconciled for new writes; legacy-schema cleanup and model-semantic acceptance remain open.** D-0070 is the normative decision. This is not blanket approval of the OD-01 disposition matrix or any Draft engineering requirement.

## Problem confirmed in source

- [D-0010](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md) removed provisional `tracesTo` in favor of `flagLink` (`MOD-073`; `REG-024` retired).
- D-0038 and D-0039 later left the Issue/Change mapping pending and introduced a provisional fallback in `IMP-115`; D-0045 also listed it as a non-native exception. These older texts are preserved rather than edited.
- The importer was observed to write `tracesTo` YAML and a `PROVISIONAL_LINK` connector ledger row with disposition `native`. That incorrectly conveys accepted semantics when the mapping is unresolved.

## Implemented under D-0070

1. [MDSE_v2 decision D-0070](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md) supersedes only D-0045's provisional `tracesTo` exception. Approved specific `describes`, `affects`, `dependsOn`, and MDSE-only `hasChild` handling is preserved.
2. `tools/importer/src/run.ts` now defers an ambiguous MDSE-note connector with diagnostic `PROVISIONAL_LINK`, stores one `flagLink` callout on the owning note (or review holder), and retains source connector evidence in the ledger. It writes **no new provisional YAML or native SysML relation** and does not label the row native.
3. `tools/importer/test/importer.test.ts` exercises the synthetic Change-to-Issue case, absence of `tracesTo` YAML, presence of `flagLink`, and `deferred_review` with EA connector GUID. This is a code regression, not test-case execution evidence for `VER-31104` or any engineering verification definition.
4. `MOD-028` is narrowed to YAML property ordering only for **approved MDSE-only** fields. Legacy `relationships.yaml` is not pruned; a header indicates `tracesTo` is historical-only pending OD-01. `OPEN_DECISIONS.md` retains OD-01 for field-by-field classification.
5. D-0070 preserves the old `tracesTo` content in existing vaults and never edits earlier decisions. Historic values require a separate reversible, provenance-aware reconciliation before deleting/rewriting.

## Model provenance and impact

| Rule source | Historical analysis | Draft requirements | Draft verification |
|---|---|---|---|
| [[MOD-028]] | [[MOD-028 - Analysis]] | [[REQ-31083 - MOD-028 Statement 1]] | [[VER-31040 - MOD-028 Rule Verification]] |
| [[IMP-115]] | [[IMP-115 - Analysis]] | [[REQ-31199 - IMP-115 Statement 1]], [[REQ-31200 - IMP-115 Statement 2]] | [[VER-31104 - IMP-115 Rule Verification]] |

Nine source/analysis/Draft requirement/verification notes were annotated in place without changing their frontmatter, original rule text, existing native SysML definition blocks, current typed usages or verification results. These Info notes remain evidence rather than invented native SysML relationship endpoints.

## Acceptance and remaining gates

- Confirm **source CI on the post-rebuild commit**; the controlled importer release workflow runs importer, Workbench and Bootstrap tests and regenerates the HTML release artifact. Its success is evidence for those synthetic tests, not the full EA golden import or Workbench editing behavior.
- Confirm live vault integrity and parser/graph validation after this documentary-only commit. The Step 02 independently accepted native model's 256 nonfatal inherited-member warnings remain unresolved.
- Continue OD-01 field-classification and owner-level review: specifically `hasChild`, `dependsOn`, `participants`, and the remaining v1 relations. Do not convert legacy YAML to native SysML without semantic and endpoint evidence.
- Determine whether source-to-note MDSE-only YAML inverses should be persisted or computed. Run an actual complete QEAX round trip and inspect the resulting flags, ledgers, search results and Workbench links. No real protected source data may enter the public repos.

**Operational boundary:** historical Draft requirement and verification notes remain Draft / not-run. A green parser and importer test does not imply approved acceptance of a source rule's generated candidate requirements.
