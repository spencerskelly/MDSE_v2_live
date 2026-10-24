---
type: Verification
subtype: test
id: VER-31071
uid: 20261022043200071skellyspencer
status: Draft
sourceRole: rule-derived-verification-candidate
sourceRule: IMP-075
sourceRuleStatus: Active
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
executionStatus: not-run
semanticReview: pending
primarySymbol: MDSE_VER_31071::TestVER31071
---
# IMP-075 — Candidate Verification Case

> [!warning] Draft test definition only
> No test execution is recorded by this note. The source rule is Active, but clause-level acceptance criteria and relevance of cited source test files are not yet independently verified.

## Objective

Establish verifiable evidence for the governed outcomes of [[IMP-075]] and its proposed requirements. Explicitly test or review each clause; do not consider a generic smoke test sufficient.

## Candidate requirements

- [[REQ-31137 - IMP-075 Statement 1]]
- [[REQ-31138 - IMP-075 Statement 2]]

## Acceptance checklist — source statements requiring verification

- [ ] Clause 1: Every change to an existing file is listed in one dated changelog per import run.
- [ ] Clause 2: Each entry links the changed file, describes the change, and flags any conflict.

## Candidate clause-level acceptance plan (not executed)

| Review ID | Fixture and action | Observable pass criterion |
|---|---|---|
| IMP-075-A01 | One import changes two existing files | Exactly one changelog for that import run, carrying a date |
| IMP-075-A02 | Compare import changed-file set to changelog entries | Every changed existing file represented |
| IMP-075-A03 | Inspect each entry's file reference | Link resolves to its actual changed file |
| IMP-075-A04 | Inspect changed-file entry | Describes what changed, not merely a filename |
| IMP-075-A05 | Fixture contains a change conflict | Its entry flags the conflict; no silent clean disposition |

Negative fixtures: no changed files, one conflict, two changed existing files and an added new file. Do not prescribe unapproved no-change log creation behavior; reconcile with IMP-076's no-op/no-entry rule.

Acceptance needs fixture ID, expected artifact, assertion, observed output, tool commit, run environment and reviewer disposition per subclause. None has been executed.

## Proposed test procedure

**Given:** Synthetic EA/QEAX source rows covering the specified element, connector, field or failure category.

**When:** Preflight, translate, create a ledger, re-import and inspect model output.

**Then:** Compare the rule's mapped semantics, flags, identity, source accounting and change disposition with expected values.

Each checklist item needs a precise fixture, expected outcome, pass/fail assertion and (where appropriate) manual review criterion before execution.

## Existing files to investigate

- `tools/importer/test/importer.test.ts` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**
- `tools/importer/test/preflight.test.ts` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**

## Result and authority

- Run result: **not run**
- Executed test commit, environment and evidence: **not linked**
- Source rule: [[IMP-075]]
- Analysis: [[IMP-075 - Analysis]]
- No SysML parser certification or actual component acceptance is implied.

## Contextual native trace — Draft

A typed verification usage named `importChangeLogCheck` is owned by [[MDSE Toolset Composition]]. Its native `objective { verify ...; }` now connects the same verification case to **both** [[REQ-31137 - IMP-075 Statement 1]] and [[REQ-31138 - IMP-075 Statement 2]] through local requirement usages in [[MDSE Toolset Composition]]. Both clauses remain unexecuted; no pass/fail verdict is inferred.

The original rule is [[IMP-075]]. Its generated reference records exact source wording/status/revision; the current normative authority remains MDSE_v2 governance.

See [[MDSE Rule to Requirement - Allocation and Verification]] for the saved Obsidian Canvas. The reusable **definition** below is not duplicated or replaced; the context owns its relationships. Exact grammar validity and runtime Workbench edge resolution remain subject to acceptance testing.

## SysML v2

> Draft verification definition; native requirement-verification relationship and independent parser validation remain pending.

```sysml
package MDSE_VER_31071 {
    verification def TestVER31071 {
        doc /* Candidate verification of IMP-075; execution and clause-level acceptance are pending. */
    }
}
```
