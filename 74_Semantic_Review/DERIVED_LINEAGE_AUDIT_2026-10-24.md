# Derived-note lineage and native SysML ownership audit — 2026-10-24

**Status:** Audit added to live main; whole-vault runtime result and independent parser acceptance not yet established. This is a traceability control, not requirement approval or verification execution.

## Authority and relationship rule

- `MDSE_v2/governance/RULESET.md` remains the original normative rule source.
- `70_Rule_References` contains 386 **Info** reference wrappers, not native SysML requirements.
- `71_Rule_Analysis` contains 386 source-rule analyses, also not new SysML requirements.
- `72_Derived_Requirements` contains 332 original Draft requirement candidates plus nine first-class, still-Draft WKB-008 atomic definitions.
- `73_Derived_Verification` contains 159 Draft verification case definitions. `executionStatus: not-run` is not a result.
- Navigation and provenance to an Info rule/analysis are captured in `sourceRule`, `sourceRevision` and `[[wikilinks]]`. **Never create a made-up native SysML derivation to an Info rule.**
- Native derivation, refinement, typed requirement usage, allocation and `verify` are reserved for semantically supported relationships between actual SysML model elements. A requirement split from a provisional compound candidate is not automatically an approved requirement derivation.

## Implemented checkpoint

Added `scripts/audit-derived-lineage.mjs` and a report-mode execution step in `.github/workflows/validate-live-model-links.yml`. The audit walks all four folders and checks:

1. Rule and analysis identity, source authority fields and navigation to the original rule.
2. Candidate requirements against the 332-row source-to-verification register, including reference and analysis links and their existing verification case.
3. Verification cases against the 159-row register, including every source candidate link.
4. Presence of one final SysML definition block, matching `primarySymbol`/package/definition, and duplicate symbol detection. These are **shape checks**, not SysML grammar or semantic certification.
5. New post-register requirements remain visible as a distinct count, not silently excluded.

Run locally with `node scripts/audit-derived-lineage.mjs`. It prints complete findings in JSON. To use it as a blocking gate, run `MDSE_STRICT_DERIVED_AUDIT=1 node scripts/audit-derived-lineage.mjs`. Strict mode should be enabled only after diagnosing the live output and closing or explicitly classifying all identified findings.

## Concrete trace correction

Eight WKB-008 atomic requirements `REQ-31333` through `REQ-31340` now include an explicit Obsidian wiki link to their originating compound `REQ-31278`, `REQ-31279` or `REQ-31280` note as **provenance/navigation**, not a fabricated SysML derivation.

`REQ-31341` (A09) has no compound precursor because it restores an omitted clause of the *original* WKB-008 rule; its direct WKB-008 and analysis links are retained. No identities, existing SysML definitions, allocations, case results or candidate approvals were changed.

## Native verification ownership correction

A direct inspection of `50_Architecture/MDSE Toolset Composition.md` detected two duplicate named verification usages:

- `modCase13 : MDSE_VER_31026::TestVER31026`, originally declared twice with separate `verify mod31056` and `verify mod31057` objectives.
- `modCase139 : MDSE_VER_31061::TestVER31061`, originally declared twice with `verify mod31116` and `verify mod31117/mod31118`.

Both were consolidated into **one named usage each**, preserving all five original `verify` targets, the original requirement usages and the reusable verification definitions. The lineage audit now checks for repeated named requirement/verification usage declarations in the toolset composition. This is a structural repair, **not** independent SysML parser certification or test execution.

## Explicitly still open

- Latest recorded family-level modeling progress is MOD 60/98 and IMP 20/98; their remaining native typed requirement/verification integration has not been certified complete by these notes. Other family trace reviews likewise remain Draft.
- Confirm the audit's actual run output for the current commit and fix any observed missing or ambiguous source links. A report-only workflow step does **not** imply zero issues.
- Independently parse all aggregated SysML namespaces with a pinned SysML v2 parser; neither brace checks nor the Workbench scanner certify language conformance.
- Resolve semantic holds (legacy V1 constructs, outdated rules, compound/defect clauses) by engineering review, not mass-producing `#derivation`, `allocate`, `verify` or `satisfy` edges merely for coverage.
- Execute case-specific acceptance tests and keep observed results separate from reusable verification definitions.

See `74_Semantic_Review/LIVE_RELATIONSHIP_VALIDATION_2026-10-23.md` for the narrower indexed-graph CI evidence. That pass does not cover all derived notes.
