---
type: Verification
subtype: test
id: VER-31012
uid: 20261022043200012skellyspencer
status: Draft
sourceRole: rule-derived-verification-candidate
sourceRule: GOV-018
sourceRuleStatus: Active
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
executionStatus: not-run
semanticReview: pending
primarySymbol: MDSE_VER_31012::TestVER31012
---
# GOV-018 — Candidate Verification Case

> [!warning] Draft test definition only
> No test execution is recorded by this note. The source rule is Active, but clause-level acceptance criteria and relevance of cited source test files are not yet independently verified.

## Objective

Establish verifiable evidence for the governed outcomes of [[GOV-018]] and its proposed requirements. Explicitly test or review each clause; do not consider a generic smoke test sufficient.

## Candidate requirements

- [[REQ-31029 - GOV-018 Statement 1]]
- [[REQ-31030 - GOV-018 Statement 2]]

## Acceptance checklist — source statements requiring verification

- [ ] Clause 1: Final folder structure follows the EA package structure. 99_System is kept and edited topic by topic.
- [ ] Clause 2: Legacy empty model folders were removed.

## Proposed test procedure

**Given:** The actual repository governance, ruleset, decisions and configured CI.

**When:** Inspect or execute the applicable review, change or release policy.

**Then:** Check the policy obligation and decision references; use human approval evidence for responsibilities that are not machine-testable.

Each checklist item needs a precise fixture, expected outcome, pass/fail assertion and (where appropriate) manual review criterion before execution.

## Existing files to investigate

- `scripts/check-rules.mjs` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**
- `.github/workflows/ci.yml` — **candidate source evidence only; correspondence to this exact rule not yet confirmed**

## Result and authority

- Run result: **not run**
- Executed test commit, environment and evidence: **not linked**
- Source rule: [[GOV-018]]
- Analysis: [[GOV-018 - Analysis]]
- No SysML parser certification or actual component acceptance is implied.

## Governance clause trace — Draft, unexecuted

- GOV-018 EA-package placement source conflicts with current vault-independent v2 placement. REQ-31029 and REQ-31030 are retained for provenance but do not receive positive objectives.


Native `verify` usage is owned by [[MDSE Toolset Composition]] only for the relevant positive obligations. The reusable case remains not-run.

## SysML v2

> Draft verification definition; native requirement-verification relationship and independent parser validation remain pending.

```sysml
package MDSE_VER_31012 {
    verification def TestVER31012 {
        doc /* Candidate verification of GOV-018; execution and clause-level acceptance are pending. */
    }
}
```
