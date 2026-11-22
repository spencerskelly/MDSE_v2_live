---
type: Requirement
subtype: design
id: REQ-31071
uid: 20261022043100071skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: MOD-021
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31071::RuleREQ31071
---
# MOD-021 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The primary reusable engineering type is `Object`.

## Authoritative origin

- [[MOD-021]] — exact source rule and decision origins
- [[MOD-021 - Analysis]] — clause decomposition and current classification
- Source family: `MOD`; semantic role: Model Representation Constraint; source phase `P1`
- This is one of 2 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Search for a Part, Function or Design]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31034 - MOD-021 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## MOD source and model trace — Draft

- Source rule: [[MOD-021]] and [[MOD-021 - Analysis]].
- Use cases: [[Import an Engineering Model]] and [[Add Engineering Knowledge]].
- Logical functions: [[Ingest and Reconcile Engineering Sources]] and [[Maintain and Improve Model Knowledge]].
- Component candidates: [[MDSE Core]], [[Model Identity Lookup]], [[Note and SysML Codec]].
- Verification case: [[VER-31034 - MOD-021 Rule Verification]].
- Native typed usage: `mod31071` in [[MDSE Toolset Composition]], pending engineer review; no satisfaction or executed verification.
- **Semantic review:** source uses legacy `Object`/`Thing` classification language; verify compatibility with SysML v2 PartDefinition terminology before final approval.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31071 {
    requirement def RuleREQ31071 {
        doc /* The primary reusable engineering type is `Object`. */
    }
}
```
