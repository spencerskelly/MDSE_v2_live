# SysML v2 language coverage review — 2026-10-23

**Status:** Draft engineering review; findings and follow-up candidates, **not** approved normative language mappings, implemented tool capabilities, or parser acceptance.
**Scope:** MDSE v2 language reference completeness and accuracy, with implications for the importer, Core, Workbench, and shipped live vault.
**Review baseline:** `MDSE_v2/main` at `aae0eaa3baee2633b6022c8672d39f421b8394f7`; `MDSE_v2_live/main` at `09856b01ffa21b153370af7c5450c19f77e6b057` (the model-relocation commit), before review-note edits.
**Disposition:** Record gaps here; resolve language definitions in `MDSE_v2` before updating generated runtime files in `MDSE_v2_live`.

## Where the language reference actually lives

- **Authoritative MDSE catalog:** [MDSE_v2/governance/language/catalog.json](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/language/catalog.json).
- **Generated definitions:** [MDSE_v2/governance/language/sysml-v2](https://github.com/spencerskelly/MDSE_v2/tree/main/governance/language/sysml-v2), built with [scripts/build-language.mjs](https://github.com/spencerskelly/MDSE_v2/blob/main/scripts/build-language.mjs).
- **Live model language folder:** [55_Language](../55_Language/) — this is now the **top-level** review/reference folder, grouped by language kind (the earlier `modeling/MDSE_Toolset` paths were moved to the vault root by an intervening `update` commit).
- **Managed system copy:** [99_System/04_Language](../99_System/04_Language/) — the separate shipped runtime language reference. Avoid manual changes to generated notes.
- **Specification:** [OMG SysML v2.0 Language Specification](https://www.omg.org/spec/SysML/2.0/Language/PDF) and [OMG v2.0 specification index](https://www.omg.org/spec/SysML/2.0).

At inspection the catalog listed **108 constructs** (28 Everyday, 38 Common, 27 Occasional, 15 Rare) and generated **108 individual reference notes plus one index**. This is useful broad coverage of textual constructs; it is **not evidence that all SysML/KerML semantics and standard-library concepts are captured**. The OMG specification index also lists normative machine-readable libraries for Analysis, Cause and Effect, Geometry, Metadata, Quantities and Units, and Requirement Derivation. These are not all additional language keywords.

## A. Missing or underrepresented standard-library concepts

The **catalog gap** here means no dedicated topic in the 108-entry catalog; the concept may already be expressible by existing general SysML syntax. Do not introduce custom MDSE relationship types for things already defined by SysML/KerML or its standard libraries.

| ID | Priority | Concept / source | Observed catalog coverage | Required follow-up |
|---|---|---|---|---|
| LANG-01 | High | **Requirement derivation** — Requirement Derivation Domain Library | Generic requirements, dependencies, and nesting are covered; no dedicated derivation topic | Document derivation connection semantics, original/derived roles and library metadata; contrast with nesting, specialization, dependency, satisfaction and verification. Confirm exact library constructs with the pinned parser. |
| LANG-02 | High | **Cause and effect** — Cause and Effect Domain Library | Dependency and succession exist; causation is not separately documented | Cover causal vs temporal relations, including multiple causes where provided by the library; define eligibility, direction and view behavior. Do not substitute succession for cause/effect. |
| LANG-03 | High | **Trade studies** — Analysis Domain Library | Analysis case definition/usage exist; no distinct trade-study guidance | Document alternatives, evaluation criteria/functions, objectives and results using the actual library definitions; distinguish a trade study from a generic analysis case. |
| LANG-04 | High | **Quantities and units** — Quantities and Units Domain Library | Attributes/expressions mention units, without a library-level reference | Add quantity kinds, dimensional consistency, units, measurements and conversions; validate actual imported expressions and parser syntax. |
| LANG-05 | Medium | **Geometry/spatial models** — Geometry Domain Library | No dedicated catalog topic | Cover geometry and spatial concepts at a library level; defer detailed shape-specific notes until MDSE has a use case. |
| LANG-06 | Medium | **Domain metadata** — Metadata Domain Library | Generic metadata definitions/usages and annotations exist | Explain applicable standard metadata patterns, and clearly separate normative library annotations from MDSE-specific governance metadata. |
| LANG-07 | High | **Verification semantics** — SysML cases, objectives, verify and relevant libraries | Verification definitions/usages, objectives, subjects and verify are cataloged | Document verification method, evaluation/verdict and evidence/result handling at the appropriate semantic level. Do **not** assume test execution results are native verification definitions or that each method is a distinct native keyword. Confirm the exact library entities before adding entries. |

## B. Existing constructs needing richer semantic documentation

| ID | Priority | Existing coverage | Clarification / correction to record |
|---|---|---|---|
| LANG-08 | High | Requirement definition/usage, subject, reference usage, subsetting | Provide an explicit **requirement decomposition** pattern with nested versus referenced usages and where the derived requirement differs from a decomposed child. Do not invent a new keyword for decomposition. |
| LANG-09 | High | Succession, transition, conditional actions | Correct the **Succession** note's statement that succession has no guard: the Workbench's own scanner recognizes `succession first a if ok then b;`. Review conditional succession and else forms against the official grammar. Distinguish state transitions (trigger, guard, effect) from ordering. |
| LANG-10 | Medium | Use case definition/usage, include | Explain optional and nested use case behaviors and how legacy SysML v1 `extend` semantics are translated. Do not assert a one-to-one v2 `extend` keyword without specification evidence. |
| LANG-11 | Medium | Feature typing, modifiers, references, ownership, ports, connections | Add cross-topic examples for definition/usage, owned part versus `ref part`, feature typing versus specialization/subsetting/redefinition, binding versus connection, interface versus flow, and conjugated ports. Preserve distinctions in structural and visual Workbench views. |
| LANG-12 | Medium | Catalog fields named `metaclass`, including individual and other specialized forms | Cross-check each label with the OMG abstract syntax/XMI. Do not assume every textual form corresponds one-to-one to an independently declared metaclass. |
| LANG-13 | Medium | Expressions and value binding | Describe operators, units, default versus initial values, and value semantics with valid parse-tested examples; the general expression entry is not a syntax conformance certificate. |

## C. Documentation, implementation and acceptance must be separate

The [Workbench SysML scanner](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/workbench/src/sysml_scan.ts) explicitly states that it is **not a SysML parser**. Its recognizer identifies a subset and retains other material for review. The [language tests](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/workbench/test/language.test.ts) check catalog metadata, example classification, and selected scanner cases. They **do not** prove full grammar coverage, valid semantics, complete importer output, or Obsidian round trip.

For each topic track these separately:

1. **Documented:** a correct reference note and specific OMG clause/library reference exist.
2. **Recognized:** the scanner classifies the construct without losing unrecognized content.
3. **Represented:** Core and Workbench retain correct endpoints, ownership, identity, cardinality and semantic direction; structural, visual and document viewpoints show it correctly.
4. **Writable/importable:** importer and editor can produce/round-trip the native construct without lossy substitutions; failures become explicit flags.
5. **Parser validated:** an independent, version-pinned SysML v2 parser accepts valid examples and rejects invalid ones.
6. **Runtime accepted:** release artifacts are synchronized and exercised in actual Obsidian, with recorded evidence.

**Do not equate a catalog note saying “recognized” with supported editing, graphical display, or independent-parser certification.** Some generated note wording appears broader than the underlying tests warrant.

## D. Recommended implementation order

1. **Inventory and corrections:** verify the official SysML v2.0 spec and standard libraries, fix misleading existing language notes (especially succession), and identify every catalog-vs-library gap. Preserve the current 108 catalog entries unless a semantic reason for replacement is demonstrated.
2. **Trace-critical concepts first:** LANG-01, LANG-02, LANG-07, LANG-08; these affect requirements, FMEA and verification.
3. **Engineering analysis/units:** LANG-03 and LANG-04, followed by metadata and geometry (LANG-06 and LANG-05).
4. **Syntax and semantic refinement:** LANG-09–13, emphasizing real examples and explicit translation limitations.
5. **Prove the full tool chain:** update `MDSE_v2/governance/language/catalog.json` (or add a separately classified, governed standard-library catalog); regenerate using `node scripts/build-language.mjs --write`; run catalog/scanner tests, independent parser acceptance and pertinent importer/Workbench tests; build the managed release, sync to `MDSE_v2_live`, then test in Obsidian and log results.

## Acceptance conditions for closing this review

- Every identified gap is marked `Documented`, `Not applicable` (with rationale), or `Deferred` (with owner, reason and phase); never silently dropped.
- Each language item distinguishes **native grammar construct**, **standard-library concept**, **modeling pattern**, or **MDSE-only metadata/process**.
- Reference topics cite the appropriate OMG specification clauses or normative library artifact, and syntax examples are checked against the pinned parser.
- Workbench notes define structural representation, visual/document viewpoints, eligibility, navigation, containment/connection behavior, validation and round-trip/provenance separately.
- Release and live-vault sync are versioned; the verification record identifies tests actually run and whether they passed.
- Any changes to approved implementation rules are decided and updated **in MDSE_v2 governance**, not unilaterally in this live self-model.

**This review is a tracked documentation finding, not an instruction to edit `55_Language` reference notes or generated `99_System/04_Language` files in place. No importer, Workbench, catalog, schema, or normative rules are changed by this note.**
