---
type: Verification
subtype: test
id: VER-31104
uid: 20261022043200104skellyspencer
status: Draft
sourceRole: rule-derived-verification-candidate
sourceRule: IMP-115
sourceRuleStatus: Active
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
executionStatus: not-run
semanticReview: pending
primarySymbol: MDSE_VER_31104::TestVER31104
---
# IMP-115 — Candidate Verification Case

> [!warning] Draft test definition only
> No test execution is recorded by this note. The source rule is Active, but clause-level acceptance criteria and relevance of cited source test files are not yet independently verified.

## Objective

Establish verifiable evidence for the governed outcomes of [[IMP-115]] and its proposed requirements. Explicitly test or review each clause; do not consider a generic smoke test sufficient.

## Candidate requirements

- [[REQ-31199 - IMP-115 Statement 1]]
- [[REQ-31200 - IMP-115 Statement 2]]

> [!flagNote] D-0070 — draft verification procedure needs new acceptance conditions
> D-0070 implements D-0010: an unresolved MDSE-note connector gets a `flagLink` and `deferred_review` ledger row with original GUID and endpoints, not a new `tracesTo` YAML link. Existing approved descriptive YAML fields are unchanged. This original checklist is historical; future tests must check that unresolved links are flagged and that no provisional YAML semantic link is emitted. `executionStatus: not-run` is unchanged. See [[STEP_03_PROVISIONAL_LINK_RECONCILIATION_2026-10-24]].

## Acceptance checklist — source statements requiring verification

- [ ] Clause 1: A relationship end that is an MDSE note (Issue, Change, Info, Artifact, Decision) has no SysML form and becomes a YAML link on the source note: `describes` when the note is Info, Artifact or Document, `dependsOn` for Dependency and Usage, `hasChild` for Aggregation, and otherwise the provisional `tracesTo` with PROVISIONAL_LINK.
- [ ] Clause 2: Source: EA does not repeat the link.

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
- Source rule: [[IMP-115]]
- Analysis: [[IMP-115 - Analysis]]
- No SysML parser certification or actual component acceptance is implied.

## SysML v2

> Draft verification definition; native requirement-verification relationship and independent parser validation remain pending.

```sysml
package MDSE_VER_31104 {
    verification def TestVER31104 {
        doc /* Candidate verification of IMP-115; execution and clause-level acceptance are pending. */
    }
}
```
