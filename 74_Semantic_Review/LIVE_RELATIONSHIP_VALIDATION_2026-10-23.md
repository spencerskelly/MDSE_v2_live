# Live relationship validation — 2026-10-23

**Result:** **PASS — live-vault Workbench indexing and regression smoke test only.** Not SysML v2 parser conformance, Obsidian desktop acceptance, or a verification-case execution verdict.

## Actual execution evidence

- **Workflow:** [Validate live model relationships, run 40042508324](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40042508324)
- **Green implementation revision:** `MDSE_v2_live` commit `7b48042917fbd16c9dff93cad00e854ff5843551`
- **Workbench source pinned:** `MDSE_v2` commit `f918571cb3c2c416ace8eec1c4d0170a4adec788`. The CI job checks out this exact revision, not a moving branch.
- **CI test:** `node --no-warnings --experimental-strip-types scripts/check-live-workbench.mjs`
- **Existing Workbench suite:** `npm run test:workbench` in the pinned tool checkout; **85 passing tests**, 0 failing.
- **Live-vault smoke test:** **PASS**, 68 assertions, 0 errors.
- **Input:** 1,592 Markdown files read across modeled vault folders, 1,333 recognized as governed notes by the existing Workbench index API.
- **Indexer output:** 162 SysML-derived (native) edges on the live vault; `parser: not-run`.
- **Broken critical links:** 0 unresolved native endpoints in the selected requirement/use-case/software/verification definitions.
- **Negative regression:** synthetic parent/child whose YAML `hasPart` repeats a native SysML part usage yields **one indexed relationship** and **quantity 1** in the rolled-up parts list.

## Specifically checked

- Use-case `dependency` links to selected importer and Workbench requirements, including WKB-008, WKB-012, WKB-016, WKB-020, IMP-075 and IMP-076.
- Required `allocate` link orientation: `IMP-*` candidate requirement usages point to **MDSE Importer**; `WKB-*` candidate requirement usages point to **MDSE Workbench**.
- Existing verification definitions used from the toolset composition with expected `verify` targets.
- The seven modeled `#refinement dependency` requirement-to-stakeholder links introduced by earlier linking passes.
- All critical notes scanned without Workbench recognizer warnings.
- The historical WKB-020 double-counting defect candidate REQ-31307 is **not** positively allocated.
- Critical typed requirement usages are recognized and point to the expected definitions.

## First execution and fix

The initial workflow run [40042459802](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40042459802) passed all 85 Workbench unit tests but failed three **incorrect test-harness expectations**. The test had mistakenly expected IMP-075 and IMP-076 requirement allocations to point to Workbench rather than Importer. The live model was correct. Commit `7b48042917fbd16c9dff93cad00e854ff5843551` corrected **only that harness expectation**; the second workflow run passed. No native model syntax needed altering.

## Remaining acceptance gates

1. **Independent parser:** the `MDSE_v2/testing/fixtures/golden-charger/parser-pin.json` record still has `parser_binary`, `parser_binary_sha256`, and `parser_command` set to null and `validation_level: pending-independent-parser`. Its manual CI parser job validates Golden Charger / BOM samples, **not** the assembled live model. Do not mark this live model parser-approved.
2. **Runtime Obsidian:** the graph API test is real Workbench source code but ran in Node on GitHub Actions; it did not exercise plugin installation, search UI, relationship editing, preview, undo, Canvas regeneration, or actual Obsidian desktop behavior.
3. **Requirements approval:** all model entries remain Draft until engineer review; a graph-index pass is not a `satisfy` relation, a test execution result, or acceptance of source-rule segmentation.
4. **Views:** saved canvases have not been regenerated from the newly indexed native edges. Avoid editing them manually as semantic truth.
5. **Future scope:** the gate is deliberately focused on the linked contract slice and duplicate handling; it is not a blanket completeness audit for all 1,333 indexed notes or all 332 generated candidate requirements.

## Automated reruns

The live repository now contains `.github/workflows/validate-live-model-links.yml`, triggered on relevant modeled-folder or test-script changes to main, as well as `workflow_dispatch`. It checks out an exact Workbench tool revision, runs its unit suite, builds the actual live note index, and exits nonzero for contract-link regressions. A tool release change should intentionally update the pin and rerun these gates before synchronizing Workbench plugin binaries.

**Owner review needed:** whether to extend tests with real Obsidian UI, provision independent parser and aggregate full live SysML model.
