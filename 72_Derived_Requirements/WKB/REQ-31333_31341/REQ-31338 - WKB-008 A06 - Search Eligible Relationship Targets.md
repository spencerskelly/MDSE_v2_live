---
type: Requirement
subtype: functional
id: REQ-31338
uid: 20261023200000006skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "2"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31338::RuleREQ31338
---
# REQ-31338 — Search Eligible Relationship Targets

## Requirement

The MDSE Workbench shall allow engineers to search eligible relationship target notes.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A06` from [[WKB-008 - Analysis]]
- Initial broad source candidate: REQ-31279
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Search known eligible target names and assert expected notes are returned.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31338 {
    requirement def RuleREQ31338 {
        doc /* The MDSE Workbench shall allow engineers to search eligible relationship target notes. */
    }
}
```
