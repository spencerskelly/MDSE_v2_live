# MDSE model-definition rule conformance — 2026-10-24

## Source of authority

The six Active Standing rules **GOV-019 through GOV-024** are maintained only in [MDSE_v2 governance/RULESET.md](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md); acceptance decision **D-0061** is in the associated decision ledger. This note is review evidence, **not a second ruleset**.

## What is now validated

- **BEH-00006:** four child usages (BEH-00018 through BEH-00021) are native typed actions in the parent's authoritative `## SysML v2` block.
- The live functional definition contains **21 reusable action definitions**, comprising BEH-00001 through BEH-00021.
- **14 decomposed child functions** (BEH-00008 through BEH-00021) each have exactly one typed parent action usage with a matching authoritative symbol and unique function ID/UID.
- `scripts/check-functional-model.mjs` validates ID/UID/symbol uniqueness, correspondence to the sole action definition, resolved typed-child targets, expected parent ownership and cycles. Negative controls deliberately create a malformed ID and an orphaned action, and must both be detected.
- `scripts/check-live-workbench.mjs` independently loads the **pinned Workbench index** and checks that all 14 typed usages are recognized exactly once by the current scanner.
- Existing live model CI and MDSE_v2 ruleset CI both completed successfully for these changes.

## Rule-to-evidence boundaries

| Rule | Current evidence | What remains open |
|---|---|---|
| GOV-019 — Model before documentation | Definition and native parent usages precede this review note | Automated review of the completeness of function inputs/outputs and behavioral decisions |
| GOV-020 — One semantic authority | Unique ID/symbol/action declaration and one owned action per child in this functional model | Whole-vault equivalence and semantic duplicate identification |
| GOV-021 — Native SysML relationships | Parent-child typed action usages recognized by Workbench index | Independent OMG SysML v2 parser conformance and all other relationship types |
| GOV-022 — Meaningful traceability | Child ownership checked without arbitrary use-case or requirement links | Engineer-reviewed rationale for additional trace relationships |
| GOV-023 — Independent maturity | All function definitions remain Draft; structural test evidence is separate | Implementation verification and execution evidence for each functional acceptance objective |
| GOV-024 — Dogfood MDSE model | Actual MDSE functional notes read by the pinned Workbench index in CI | Human Workbench inspection/editing and end-to-end validation through the tool UX |

## Next reference increment

Choose **BEH-00020 — Resolve Document Embeds** as a vertical reference. Its real MDSE fixture is the `55_Language` category views that embed the single-source `99_System/04_Language` notes. Develop one candidate requirement per distinct obligation (identity-preserving transclusion; missing target; cycle detection), one objective-specific verification case per behavior as appropriate, a declared responsible tool boundary, and a negative fixture. The edit UI and export workflow are not assumed complete.

**Classification:** structural/model-index gates passed; independent grammar acceptance and behavioral verification not yet established.
