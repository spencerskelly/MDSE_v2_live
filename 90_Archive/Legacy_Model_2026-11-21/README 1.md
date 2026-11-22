# MDSE toolset — engineering the engineering tool

**Status:** Draft self-model on `mdse_v2_cleanup` (2026-10-21). **Not** an approved normative specification or released vault.

## Start here

**[Owner-defined primary stakeholder needs](NEEDS_BASELINE.md)** — twelve capability needs supplied by the owner, with one review note per concept, proposed stakeholder and outcome, existing coverage assessment, and verification gaps.

These capabilities cover engineering knowledge, product discovery, requirements, concept and risk analysis, design and architecture, validation, publications, regulation, and engineering change. They are not one software application each.

The earlier `STK-00001`–`STK-00012` draft statements are preserved, but treated as *provisional cross-cutting qualities / supporting needs* for review, not the primary capability taxonomy. They must not be silently renumbered or reused. New owner-provided primary needs use `STK-00013`–`STK-00024`.

## Self-model convention

One note per concept. Iterate: stakeholder need → use case → logical function → engineering requirement → architectural element → verification case → executed result. Follow relationships in both directions and record gaps explicitly.

Existing `governance/RULESET.md` and `DECISIONS.md` remain the **only normative rules/decision authorities**. This model is an engineering analysis and traceability proposal, not a second ruleset. All native SysML relationships must eventually be parser-validated and managed through the shared writer. Current Markdown links and `TRACE_PROPOSALS.csv` remain review candidates.


**Current review:** [Engineering Knowledge Base — critical import, name/alias search, graph and document viewpoints, multi-hop/common links, model-field search, embedded-note composition and flag display](20_Use_Cases/_README.md), scoped for a potentially organization-wide but engineering-led audience. PDM/PLM owns complete CAD files, Jira owns work items; MDSE models knowledge and may link to those external systems. Formal trace and tests are pending.

## Primary need index

- [[Engineering Knowledge Base]]
- [[Product Discovery Aide]]
- [[Requirements Management]]
- [[Concept Analysis]]
- [[Failure Mode and Effect Analysis]]
- [[Design Definition]]
- [[Architecture Definition]]
- [[Validation definition]]
- [[Customer Documentation Builder]]
- [[Supplier Documentation Builder]]
- [[Regulatory Impact Analysis]]
- [[Change Management Tool]]

## Existing proof-of-concept trace (prior supporting quality)

[[Preserve Imported Knowledge]] → [[Import an Engineering Model]] → [[Reconcile Source Records]] → [[Account for Every Source Row]] → [[MDSE Importer]] → [[Source Row Disposition Test]]

This is a *draft* vertical chain. The synthetic source-row ledger test exists in `tools/importer/test/importer.test.ts`, but its execution against this self-model and independent parser acceptance have not been established here.

## Rules decomposed into engineering-model candidates

- [Complete 386-rule semantic analysis](71_Rule_Analysis/README.md) — 826 preliminary statement segments, with candidate functions, use cases, responsible software parts and review disposition.
- [332 draft requirement statement notes](72_Derived_Requirements/README.md) — derived only from the 159 Active source rules; these are **not** approved as independently atomic or binding model requirements.
- [159 draft verification case notes](73_Derived_Verification/README.md) — checklists and test paths to investigate, with **no execution result claimed**.
- [First engineering review findings](SEMANTIC_REVIEW_FINDINGS.md) — sample decompositions, superseded Active policies, duplicate semantics and release-test gaps.

The authoritative rules and decisions remain in `governance/RULESET.md` and `governance/DECISIONS.md`. This self-model is a structured analysis, not a second ruleset. Parser-validated native SysML connections and verified tool/test allocations are next.

## Existing governance-rule reference notes

The [current rules reference library](70_Rule_References/README.md) preserves all 386 current rule IDs and their exact source wording, with provisional links to the six functions and sixteen knowledge-base use cases. The original RULESET remains normative; all reference-note associations require review.

## Existing implementation baseline

Before adding requirements or rebuilding capabilities, review the [existing-system capability baseline](AS_BUILT_CAPABILITY_BASELINE.md), [one row per existing knowledge-base use case](AS_BUILT_USE_CASE_EVIDENCE.csv), and [five tool implementation notes](50_Architecture/_README.md). This is source-and-test inspection; no full test suite, real model import, Obsidian startup or independent SysML parsing was executed for this assessment.

## Functional architecture — draft

Six shared function notes now trace back to the 16 knowledge-base use cases. See [Functional architecture and coverage](30_Functions/_README.md). This is an implementation-independent analysis, not an approved allocation or verified SysML relationship graph.

## Next steps

1. Review the twelve owner-supplied capability needs in `NEEDS_BASELINE.md`, beginning with **Engineering Knowledge Base**.
2. Record revised intent, stakeholder actors, success criteria and boundaries in each note.
3. Create/reuse use-case notes, then derive functions and requirements without prematurely naming implementation components.
4. Link requirements to existing rule IDs and observed tests without duplicating normative definitions.
5. Establish checks for unlinked needs, unverified requirements and impacted tests.
6. Run Workbench and a pinned SysML parser before treating the model as operational. Neither has been executed on these newly drafted notes in this review.

## Unresolved modeling decisions

- Stakeholder need versus stakeholder requirement type and status schema
- Native SysML relationship syntax and endpoint typing for the complete chain
- Whether this self-model is later materialized as a standalone MDSE-built vault
- Identity governance and managed provenance for model-to-code/test associations
- Distinguishing test definitions from executed evidence
