---
type: Verification
subtype: test
id: VER-31135
uid: 20261022043200135skellyspencer
status: Draft
sourceRole: rule-derived-verification-candidate
sourceRule: BOO-007
sourceRuleStatus: Active
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
executionStatus: not-run
semanticReview: pending
primarySymbol: MDSE_VER_31135::TestVER31135
---
# BOO-007 — Candidate Verification Case

> [!warning] Draft test definition only
> No test execution is recorded by this note. The source rule is Active, but clause-level acceptance criteria and relevance of cited source test files are not yet independently verified.

## Objective

Establish verifiable evidence for the governed outcomes of [[BOO-007]] and its proposed requirements. Explicitly test or review each clause; do not consider a generic smoke test sufficient.

## Candidate requirements

- [[REQ-31272 - BOO-007 Statement 1]]
- [[REQ-31273 - BOO-007 Statement 2]]
- [[REQ-31274 - BOO-007 Statement 3]]
- [[REQ-31275 - BOO-007 Statement 4]]

## Acceptance checklist — source statements requiring verification

- [ ] Clause 1: Bootstrap runs after the person trusts the vault, about two seconds after layout.
- [ ] Clause 2: It checks each locked plugin's files against the lock, enables those that match, merges the lock's governed settings into their `data.json` (the person's other keys stay), enables required and switches off prohibited core plugins, and reports what it did in one notice. A plugin whose hash differs or whose file is missing stays off and is named.
- [ ] Clause 3: It never downloads.
- [ ] Clause 4: The command "Check and repair this vault" runs it again.

## Proposed test procedure

**Given:** A synthetic Obsidian-compatible plugin fixture, including valid and tampered settings/assets.

**When:** Run startup integrity checking and repair or identity registration.

**Then:** Check safe activation, author identity, preserved personal preferences, and explicit failures.

Each checklist item needs a precise fixture, expected outcome, pass/fail assertion and (where appropriate) manual review criterion before execution.

## Existing files to investigate

- `tools/bootstrap/test/bootstrap.test.mjs` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**

## Result and authority

- Run result: **not run**
- Executed test commit, environment and evidence: **not linked**
- Source rule: [[BOO-007]]
- Analysis: [[BOO-007 - Analysis]]
- No SysML parser certification or actual component acceptance is implied.

## Source-specific verification assertions — Draft, not run

- REQ-31272: establish trust and layout initialization before delayed Bootstrap activation, then measure actual trigger.
- REQ-31273: verify successful hash match enables only locked plugins; missing/hash-mismatched plugin remains disabled; merge governed data.json without deleting personal keys; set required/prohibited core plugins; provide one result notice.
- REQ-31274: block outbound binary download attempts, and confirm missing payload is reported rather than fetched.
- REQ-31275: execute 'Check and repair this vault' twice and verify repeatable safe results.

The [[MDSE Toolset Composition]] owns the native typed case usage and objective references. These are planned assertions, not evidence of execution. Record test environment, input fixture, observed file or UI state, expected outcome, tool commit and result before changing `executionStatus: not-run`.

## SysML v2

> Draft verification definition; native requirement-verification relationship and independent parser validation remain pending.

```sysml
package MDSE_VER_31135 {
    verification def TestVER31135 {
        doc /* Candidate verification of BOO-007; execution and clause-level acceptance are pending. */
    }
}
```
