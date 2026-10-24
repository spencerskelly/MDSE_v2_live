---
type: Requirement
subtype: functional
id: REQ-31183
uid: 20261022043100183skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: IMP-105
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31183::RuleREQ31183
---
# IMP-105 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

PDATA1, PDATA2 and PDATA3 of an object hold the GUID (`{…}`) of another element; a plain Object_ID is also accepted. A Part's block, a Port's type and a FlowProperty's Signal come from PDATA1; a Port's instance link from PDATA3. (V1 W-44, W-113; D-0037)

## Authoritative origin

- [[IMP-105]] — exact source rule and decision origins
- [[IMP-105 - Analysis]] — clause decomposition and current classification
- Source family: `IMP`; semantic role: Import Functional Requirement; source phase `P1`
- One preliminary segment; its atomicity is not yet established.

## Use cases requiring this candidate

- [[Import an Engineering Model]]
- [[Explore Element Relationships]]
- [[Explore Complete Product Context]]
- [[Search for a Part, Function or Design]]

## Logical functions supported

- [[Ingest and Reconcile Engineering Sources]]
- [[Query and Traverse Model Relationships]]
- [[Discover and Resolve Model Elements]]

## Existing software architecture candidates

- [[MDSE Importer]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31095 - IMP-105 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Importer source-to-model trace — Draft

- [[IMP-105]] and [[IMP-105 - Analysis]] preserve source and interpretation.
- [[Import an Engineering Model]] and [[Ingest and Reconcile Engineering Sources]] identify intended scenario and function.
- [[MDSE Importer]], [[Source Reconciliation Engine]], and [[Managed Vault Update]] provide architecture context.
- [[VER-31095 - IMP-105 Rule Verification]] defines planned verification; `imp31183` is typed in [[MDSE Toolset Composition]].
- Draft modeling intent only; no satisfaction, parser acceptance or executed verification.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31183 {
    requirement def RuleREQ31183 {
        doc /* PDATA1, PDATA2 and PDATA3 of an object hold the GUID (`{…}`) of another element; a plain Object_ID is also accepted. A Part's block, a Port's type and a FlowProperty's Signal come from PDATA1; a Port's instance link from PDATA3. (V1 W-44, W-113; D-0037) */
    }
}
```
