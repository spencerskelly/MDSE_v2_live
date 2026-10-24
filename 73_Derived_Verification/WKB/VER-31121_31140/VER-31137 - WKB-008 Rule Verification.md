---
type: Verification
subtype: test
id: VER-31137
uid: 20261022043200137skellyspencer
status: Draft
sourceRole: rule-derived-verification-candidate
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
executionStatus: not-run
semanticReview: pending
primarySymbol: MDSE_VER_31137::TestVER31137
---
# WKB-008 — Candidate Verification Case

> [!warning] Draft test definition only
> No test execution is recorded by this note. The source rule is Active, but clause-level acceptance criteria and relevance of cited source test files are not yet independently verified.

## Objective

Establish verifiable evidence for the governed outcomes of [[WKB-008]] and its proposed requirements. Explicitly test or review each clause; do not consider a generic smoke test sufficient.

## Candidate requirements

- [[REQ-31278 - WKB-008 Statement 1]]
- [[REQ-31279 - WKB-008 Statement 2]]
- [[REQ-31280 - WKB-008 Statement 3]]

## Acceptance checklist — source statements requiring verification

- [ ] Clause 1: The Edit lens adds relationships, elements and requirement text.
- [ ] Clause 2: Relationship kinds offered depend on the selected note's SysML definition; targets come from a searchable, folder-grouped browser limited to eligible notes.
- [ ] Clause 3: Structure and links are written into the source note's `## SysML v2` block

## Candidate clause-level acceptance plan (not executed)

| Review ID | Fixture and action | Observable pass criterion |
|---|---|---|
| WKB-008-A01 | Eligible two-note relationship, add through Edit | Native SysML relationship is saved and reindexed once |
| WKB-008-A02 | Add element from supported kind | A note exists with an indexed definition and new identity |
| WKB-008-A03 | Edit requirement wording, save and reload | New authoritative requirement text matches submission |
| WKB-008-A04 | Two source definition kinds with disjoint allowed relations | UI offers permitted kinds only for each definition |
| WKB-008-A05 | Eligible and incompatible target notes | Incompatible target is not selectable/applicable |
| WKB-008-A06 | Multiple eligible notes with searchable names and aliases | Query locates the intended eligible note |
| WKB-008-A07 | Eligible notes under two folders | Browser groups notes under their correct folders |
| WKB-008-A08 | Apply a typed link update and reload source file | The only authoritative relationship write occurs in the source note's SysML section |
| WKB-008-A09 | Create a governed note through Edit lens | type/subtype/id/uid/status and one terminal SysML block; no unintended semantic duplicates |

These criteria are **draft test designs**, not executed cases. Include negative attempts, an Apply/Undo cycle, and observed before/after file bytes in real test evidence. A09 was absent from the initial broad candidate segmentation but is now modeled as Draft [[REQ-31341 - WKB-008 A09 - Create Governed Minimal Note]]. The toolset includes a proposed native `verify` objective for it; this does not imply requirement approval or test execution.

## Proposed test procedure

**Given:** A synthetic vault with known elements, graph links, flags and edit scenarios.

**When:** Build the Workbench index and exercise the relevant lens or write transaction.

**Then:** Check view semantics, typed references, preview/undo integrity, persistence and missing-link visibility.

Each checklist item needs a precise fixture, expected outcome, pass/fail assertion and (where appropriate) manual review criterion before execution.

## Existing files to investigate

- `tools/workbench/test/workbench.test.ts` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**
- `tools/workbench/test/edit.test.ts` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**
- `tools/workbench/test/edit_rel.test.ts` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**

## Result and authority

- Run result: **not run**
- Executed test commit, environment and evidence: **not linked**
- Source rule: [[WKB-008]]
- Analysis: [[WKB-008 - Analysis]]
- No SysML parser certification or actual component acceptance is implied.
- The expanded `verify` references are authored in the owning toolset composition, not duplicated in this reusable verification definition.

## Contextual native trace — Draft

A typed verification usage named `eligibleTargetsCheck` is owned by [[MDSE Toolset Composition]]. Its existing `objective { verify ...; }` now references all three typed requirement usages in [[MDSE Toolset Composition]]: [[REQ-31278 - WKB-008 Statement 1]], [[REQ-31279 - WKB-008 Statement 2]] and [[REQ-31280 - WKB-008 Statement 3]]. One case covers three candidate clauses, but each clause still needs independent assertions and fixtures. The case is unexecuted; no pass/fail verdict is inferred.

The original rule is [[WKB-008]]. Its generated reference records exact source wording/status/revision; the current normative authority remains MDSE_v2 governance.

See [[MDSE Rule to Requirement - Allocation and Verification]] for the saved Obsidian Canvas. The reusable **definition** below is not duplicated or replaced; the context owns its relationships. Exact grammar validity and runtime Workbench edge resolution remain subject to acceptance testing.

## Native requirement objectives — nine atomic Draft definitions

The existing verification objective in [[MDSE Toolset Composition]] now targets all nine distinct requirement usages, in addition to the three transitional generated broad candidate usages. Each requires a separate fixture and observed result; this formal verification case has **not** been executed.

- [[REQ-31333 - WKB-008 A01 - Add Eligible Relationship]]: Add an eligible relationship and assert native source text and indexed link match.
- [[REQ-31334 - WKB-008 A02 - Create Model Element]]: Create an eligible element and assert a native definition is indexed.
- [[REQ-31335 - WKB-008 A03 - Edit Requirement Text]]: Edit, save and reload a requirement; assert its authoritative text changes.
- [[REQ-31336 - WKB-008 A04 - Filter Eligible Relationship Kinds]]: Test two source kinds; assert incompatible relationship kinds are excluded.
- [[REQ-31337 - WKB-008 A05 - Restrict Relationship Target Choices]]: Provide eligible and incompatible targets; assert only eligible notes are selectable.
- [[REQ-31338 - WKB-008 A06 - Search Eligible Relationship Targets]]: Search known eligible target names and assert expected notes are returned.
- [[REQ-31339 - WKB-008 A07 - Group Relationship Targets by Folder]]: Provide target notes in two folders and assert correct browser grouping.
- [[REQ-31340 - WKB-008 A08 - Persist Edits in Authoritative SysML]]: Apply an edit, reload and assert the authoritative block and graph agree.
- [[REQ-31341 - WKB-008 A09 - Create Governed Minimal Note]]: Create a note and assert identity properties and one final SysML block.

## SysML v2

> Draft verification definition; native requirement-verification relationship and independent parser validation remain pending.

```sysml
package MDSE_VER_31137 {
    verification def TestVER31137 {
        doc /* Candidate verification of WKB-008; execution and clause-level acceptance are pending. */
    }
}
```
