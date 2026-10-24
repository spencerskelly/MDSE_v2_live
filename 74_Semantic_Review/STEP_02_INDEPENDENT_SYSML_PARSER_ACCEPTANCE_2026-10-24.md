# STEP-02 — Independent SysML v2 Model Acceptance (2026-10-24)

**Disposition: COMPLETE for independent SysML 2.0 pilot-parser acceptance of the assembled active live model, WITH 256 RECORDED WARNINGS AND REMAINING ENGINEERING REVIEW.** This is not blanket SysML conformance certification, requirement approval, implementation acceptance, or actual verification-case execution.

## Scope and authoritative sources

- Model: [MDSE_v2_live](https://github.com/spencerskelly/MDSE_v2_live) active self-model folders (10, 20, 30, 40, 50, 60, 72, 73). The historical \`last-check\` staging folder, \`70_Rule_References\` and \`71_Rule_Analysis\` are excluded because their non-native Info/evidence prose is not part of the active SysML compilation.
- Native source is always the final \`## SysML v2\` fenced block in the **owning** note; YAML and Markdown are metadata/evidence only.
- Extractor: [scripts/assemble-live-sysml.mjs](../scripts/assemble-live-sysml.mjs). Stable folder and filename ordering, SHA-256 digest, one block per source, symbol uniqueness and manifest mapping assembled lines to original notes. The generated \`.sysml\` file and line map are evidence artifacts, not edited authorities.
- Independent validator: DeciSym \`sysmlv2-validator\` commit \`63abbd9fbc7851dc437d01b2dc07836b919770b8\` backed by Systems-Modeling SysML v2 Pilot Implementation **2026-04 / 0.59.0**, provisioned using pinned \`MDSE_v2\` tool commit \`05e7875de9e289583f0f515145147961e82e5228\`, Java 21 and Maven. Official standard-library source: [2026-04 ModelingMetadata.sysml](https://github.com/Systems-Modeling/SysML-v2-Release/blob/2026-04/sysml.library/Domain%20Libraries/Metadata/ModelingMetadata.sysml).

## Measured evidence and correction

### Initial run — failures exposed by independent validation

- [CI run 40116910597](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40116910597): extraction failed on one moved Draft requirement \`40_System_Requirements/Cite Sources.md\` lacking YAML \`primarySymbol\`. Added the exact symbol already present in its SysML text; changed no requirement body, status, ID or relationship.
- [CI run 40117040766](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40117040766): **583** active native notes assembled into one 222,871-byte model without extraction issues. Independent validator **rejected** it (exit 1) with **99 errors** and **256 warnings**.
- All 99 errors were three related diagnostics for **33** native refinement annotations across **23** owning notes: \`Couldn't resolve reference to Type 'refinement'\`, \`A metadata usage must be typed by one metadata definition\`, and \`Must have a concrete type\`. This failure was hidden by previous text/scanner-only validation.

### Native standards-preserving correction

- Single model commit [d4dfdaa0](https://github.com/spencerskelly/MDSE_v2_live/commit/d4dfdaa08a65b4180cb3c3f7e01a9de880c989b1): inserted \`private import ModelingMetadata::Refinement;\` within the owning SysML package in each of the 23 affected notes.
- This uses the **standard SysML 2.0 ModelingMetadata library** (whose definition has short name \`<refinement>\`). Existing \`#refinement dependency from … to …;\` statements and endpoints remain unchanged. No duplicate definitions, invented MDSE relationship types, new dependencies, statuses, approval claims or requirement semantics were introduced.
- Reusing the native \`#refinement\` notation also preserves Workbench's recognized refinement association until the tool implements general qualified metadata and import resolution.

### Passing independent validator result

- [CI run 40117540021](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40117540021): **SUCCESS** at live model commit \`d4dfdaa08a65b4180cb3c3f7e01a9de880c989b1\`.
- Extractor read **652** Markdown notes in active modeling folders: **583** notes with authoritative SysML, **69** without a SysML block; **0** extraction errors/warnings. Assembled model: **223,998 bytes**; SHA-256 \`fbdb471e91d692dc56a404ca86295c3ac76816a72124267c4d33b675ac1957b3\`.
- The independent validator returned **exit code 0** and **0 parser errors**. Known-positive Golden Charger accepted; known-negative unresolved-type and malformed-syntax controls correctly rejected.
- The validator emitted **256 warnings**, all \`Duplicate of inherited member name 'this' from ownedPerformances, subperformances\`, mapping to \`50_Architecture/MDSE Toolset Composition.md\`. These must be investigated independently; parser acceptance does not mean a warning-free model. Three Log4j configuration warnings are runner diagnostics, not model syntax failures.
- Validator JAR SHA-256 \`c2dce209f35ebbe7188cd51c8b4f79d008ffb2ae20daa11604c7328b0a871957\`; pilot kernel SHA-256 \`7d6f1f2d555ddde2538a2b4f726709ba261567aa6c7eb172ad7db762d01efbaf\`.
- Evidence artifact: [mdse-live-sysml-parser-diagnostic](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40117540021/artifacts/12569681919), including assembled SysML, SHA/source line map, parser log and version/digest evidence.
- [Live Workbench regression CI run 40117540002](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40117540002): **SUCCESS**, **837** indexed native edges, **82** assertions, **0** missing critical native endpoints. This Workbench scanner test is independent of the external parser job and reports \`parser: not-run\` in its own report by design.

## Ongoing validation contract

\`.github/workflows/validate-live-sysml-parser.yml\` independently checks out the pinned parser provisioner; assembles current active model without writing source notes; executes known-positive and known-negative controls; validates the whole model; saves binary version/digest and line-mapped source artifacts; and then **blocks** if independent parsing is absent or exits nonzero. The final blocking-gate CI result must be checked separately from the earlier diagnostic-only passing run.

The model may legitimately retain Draft requirements and verification cases even when the assembled **syntax and reference resolution** are parser-accepted. Graph/index acceptance likewise does not prove every native statement's intended system meaning or observable implementation.

## Explicitly remaining

1. Investigate the 256 inherited \`this\` warnings in the toolset composition; determine whether they arise from valid verification usages, tooling diagnostics or invalid presentation patterns. Preserve objective-level \`verify\` semantics unless a standards-backed replacement is demonstrated.
2. Confirm a repeatable **blocking** CI run on \`main\` and continue pinning parser implementation and binary hashes. Do not replace the selected 2026-04 SysML 2.0 parser with 2026-07/08 SysML 2.1 beta tooling without a decision.
3. This gate does not test Obsidian user interactions, importer/Workbench round-trip edits, EA/BOM semantic equivalence, FMEA/architecture applicability, or satisfaction/evidence. These remain separate maturity dimensions.
4. Step 1's open Markdown/wiki navigation findings remain recorded; syntax acceptance does not repair them.

## Next chat — Step 03

**Reconcile obsolete/contradictory Active governance rules**, starting with \`GOV-006\` (Test_Vault_ main), \`DAT-002\` (Test_Vault_ repository authority clause) and \`GOV-018\` (EA package hierarchy placement), against the currently accepted MDSE_v2 governance and live model. Retire or rewrite only with explicit preserved provenance; do not reinterpret an Info rule as an engineering model relation.
