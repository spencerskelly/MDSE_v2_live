# Granular rule / requirement / verification decomposition review

**Date:** 2026-10-23. **Status:** Engineering draft for owner review. No source rules changed, no requirement IDs minted, and no verification status promoted.

## Source inventory

Read the live folder README inventories and sampled source-linked analysis, requirements and verification notes. Their own coverage reports describe **386** rule-analysis notes (826 preliminary text segments), **332** generated requirement candidates from Active rules, and **159** generated verification cases. The tree itself contains 386 substantive analysis notes, 332 requirement notes and 159 verification notes. Counts describe file inventory, **not** individually approved semantics.

**Structural issue:** the analysis notes use punctuation-based segmentation and generic classification. Requirement candidates inherit those segments, and a single verification note is generated per Active rule. This is convenient for migration but does not guarantee one obligation per requirement or one assertion per test.

## Reviewed pilot rules

| Governed rule | Source interpretation | Problem found | Proposed review subclauses |
|---|---|---|---|
| [[WKB-008]] | Edit lens add/edit, eligible target browser and authoritative write | Three candidate REQs cover at least **9 distinct obligations**; source-rule tail concerning new-note fields is missing from REQ set | WKB-008-A01…A09 |
| [[IMP-075]] | Dated per-run changelog and traceable entries | Two requirement candidates carry **5 separately assessable obligations** | IMP-075-A01…A05 |
| [[WKB-020]] | One semantic relation when YAML repeats SysML | One candidate is a **historical defect statement**, not required behavior | WKB-020-A01 (normative), WKB-020-E01 (defect regression) |

## Recommended target process

1. **71 — semantic analysis:** Preserve exact rule text, provenance/status and decisions; classify each sentence or subclause as normative obligation, architectural constraint, process policy, fact, rationale, example or observed defect. Record ambiguity, duplicates, contradictions, and source coverage. Source rules remain normative until changed through governance.
2. **72 — requirements:** For an approved interpretation, create one independently testable obligation per requirement definition when warranted; use stable unique note IDs, explicit source-rule/clause and ownership, with no duplicate definition for the same underlying concept. Retain the generated broad candidates as Draft parent/provenance records until a reviewed consolidation or retirement decision. No unreviewed bulk generation.
3. **73 — verification:** Define objective, fixture/conditions, steps, expected observable result and pass/fail assertion **for each atomic requirement**. One reusable verification case may cover several requirements only when each assertion is separately recorded; never treat a group smoke test as proving all.
4. **Native SysML:** Requirement-to-need refinements only where meaningful; scenario requirements use native dependencies, allocation maps Draft responsibility, `verify` points from existing case objectives to typed requirement usages. Never use `satisfy` without verified design evidence. Parser acceptance is still outstanding.
5. **Review and progress:** Track proposed/approved/implemented/verified independently. Keep `status: Draft` and `executionStatus: not-run` until actual review and execution. Route ambiguous meaning to `flagNote`/`flagLink`.

## Concrete next review slices

Priority 1: **WKB-008 A01–A09**, because it underlies the editing process used to author this model and A09 is a clear source-to-requirement omission. Priority 2: **IMP-075 A01–A05** and reconcile the no-change case with IMP-076. Priority 3: systematic **WKB-012/WKB-016** property and port round-trip semantics, followed by **MOD** identity/authoritative-text rules. Record each completed slice under `74_Semantic_Review`.

## What was modified

Added labeled, independently assessable *review statements* to the existing WKB-008, IMP-075 and WKB-020 analysis notes, to five corresponding candidate requirement notes and three related verification notes. No native model text, original rule references, YAML identities, governance source, CI test or approvals were changed. This is a decomposition blueprint, **not a false claim that granular requirement notes and verified tests already exist**.

## Remaining validation

Engineer approves semantic splits and disposition of the historical defect; then add atomic requirement definitions/typed usages and true one-to-one or explicit many-to-one verification coverage, run the independent parser, and run Workbench/Obsidian tests. The current 85 Workbench unit tests and successful 68-assertion live-link CI gate show indexability only, not blanket acceptance of all generated rules.
