---
type: Requirement
subtype: functional
id: REQ-31333
uid: 20261023200000001skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "1"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31333::RuleREQ31333
---
# REQ-31333 — Add Eligible Relationship

## Requirement

The MDSE Workbench shall allow an engineer to add an eligible relationship to a selected model element.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A01` from [[WKB-008 - Analysis]]
- Initial broad source candidate: REQ-31278
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Add an eligible relationship and assert native source text and indexed link match.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31333 {
    requirement def RuleREQ31333 {
        doc /* The MDSE Workbench shall allow an engineer to add an eligible relationship to a selected model element. */
    }
}
```
