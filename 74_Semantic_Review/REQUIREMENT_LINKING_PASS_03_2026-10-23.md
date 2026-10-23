# Requirement linking pass 3 — WKB-008 clauses 1 and 3

**Date:** 2026-10-23  
**Status:** Draft native SysML model update; structural checks only. Not an owner approval, an independently parsed model, an executed engineering verification or demonstrated Workbench behavior.

## Objective and source

Complete the three candidate clauses of [[WKB-008]] in the existing software-system composition without creating duplicate definition notes or treating the source rule's **Active** status as an approval of the 3 generated candidate requirements. WKB-008 in [MDSE_v2/RULESET.md](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md) is the governing statement. Its candidate requirements remain `Draft`, `semanticReview: pending`.

| Source clause | Existing model definition | Model expression / coverage |
|---|---|---|
| 1: Edit lens adds relationships, elements, requirement text | [[REQ-31278 - WKB-008 Statement 1]] | Typed `editLensCapabilities` usage → Workbench `allocate`; existing WKB-008 verification objective `verify` |
| 2: relationship kind and target eligibility | [[REQ-31279 - WKB-008 Statement 2]] | Existing `eligibleEditTargets` usage, allocation and `verify` preserved |
| 3: structure and links written to the source note's SysML v2 block | [[REQ-31280 - WKB-008 Statement 3]] | Typed `authoritativeSysmlWrite` usage → Workbench `allocate`; existing objective `verify` |

Native relationships added in this pass: **4** UC-to-requirement `dependency` statements (two each in UC-00007 / UC-00008), **2** requirement-to-stakeholder `#refinement dependency` statements (REQ-31278 → STK-00013, REQ-31280 → STK-00002), **2** toolset `allocate` statements, and **2** toolset `verify` statements = **10 new native semantic edges**. The toolset also contains **2** new typed requirement usage declarations. Existing WKB-008 clause-2 relationships are retained.

## Semantic choices

- **Use-case requirement dependency:** [[Add Engineering Knowledge]] and [[Correct or Complete Knowledge]] both require the ability to add/edit concepts and persist authoritative changes. `dependency` does **not** assert that the Workbench satisfies those obligations.
- **Refinement of stakeholder need:** WKB-008 clause 1 is a Draft elaboration of the editable [[Engineering Knowledge Base]], not all of that need. Clause 3 is a Draft elaboration of [[One Trustworthy Model]], focused specifically on one authoritative SysML relationship store. These must be reviewed before promotion.
- **Allocation, not satisfaction:** in [[MDSE Toolset Composition]], the three requirement usages map responsibility to the Workbench part usage via native `allocate`. No `satisfy` claim is added.
- **Reuse existing verification:** [[VER-31137 - WKB-008 Rule Verification]] is the single reusable verification definition for WKB-008. Its contextual objective in the toolset now has three `verify` targets; no new execution record or claim of pass is made.
- **Definition/usage ownership:** the individual candidate notes own the reusable requirement definitions and stakeholder refinements. The toolset composition owns typed usages, allocations and verification objectives. The UC definitions own scenario dependencies. YAML and canvases do not duplicate native relationships.

## Static checks performed

- Confirmed qualified `primarySymbol` endpoints for two added requirement targets and two stakeholder requirement targets are present in the live vault.
- Preserved all existing model `id`, `uid`, `primarySymbol`, `status`, candidate-source and execution metadata.
- Checked each modified model note contains exactly one final fenced `sysml` block with balanced braces.
- Checked the new 10 native relation statements and two typed usages are present once in the relevant owning blocks. Source/status and Markdown navigational links remain descriptive only.
- Checked the current source note itself already lists three separate WKB-008 candidate clauses and one case, without introducing a new note identity.

## Remaining acceptance and modeling issues

1. **Grammar/semantic parser acceptance still unrun:** aggregate namespaces and run the pinned independent SysML v2 parser. The Workbench scanner and brace counts are not parser certification.
2. **Workbench acceptance still unrun:** verify inbound/outbound relationship indexing, eligibility filtering, application/undo, and authoritative SysML writes in real Obsidian. Review whether the model captures transaction/review/rollback requirements independently from these three generated clauses.
3. **Clause 1 is compound:** editing relationships, elements, and requirement text may need distinct atomic requirements or separate acceptance assertions. Do not auto-promote it.
4. **Clause 2 is compound:** selectable relationship types, eligible targets, and search/folder grouping need independently assessable criteria. Do not auto-promote it.
5. **Verification is not execution:** add fixtures/assertions for all clauses and an explicit test-run result record, separate from the `verification def`.
6. **Views are behind:** regenerate the saved canvas(s) from the authoritative SysML after a validated graph index; do not alter view edges manually and treat them as source semantics.
7. **Trace coverage is not approval:** STK-00002 still lacks a directly refining use case even though it now has a candidate requirement refinement.

## Next useful slice

Select the next source-backed `WKB` or `IMP` candidates based on substantive use-case coverage, checking duplicate semantics before adding graph edges. Expand a short end-to-end path to a real test assertion rather than bulk-linking all 332 derived requirements automatically.
