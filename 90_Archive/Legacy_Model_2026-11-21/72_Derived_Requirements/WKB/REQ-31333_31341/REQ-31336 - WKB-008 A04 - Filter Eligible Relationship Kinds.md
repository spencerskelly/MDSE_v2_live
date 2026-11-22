---
type: Requirement
subtype: functional
id: REQ-31336
uid: 20261023200000004skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "2"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31336::RuleREQ31336
---
# REQ-31336 — Filter Eligible Relationship Kinds

## Requirement

The MDSE Workbench shall offer relationship kinds applicable to the selected source element's SysML v2 definition.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A04` from [[WKB-008 - Analysis]]
- Initial broad source candidate (provenance/navigation only): [[REQ-31279 - WKB-008 Statement 2]]
- Native requirement derivation is **not asserted**: the source candidate is a compound, unapproved preliminary interpretation.
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Test two source kinds; assert incompatible relationship kinds are excluded.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31336 {
    requirement def RuleREQ31336 {
        doc /* The MDSE Workbench shall offer relationship kinds applicable to the selected source element's SysML v2 definition. */
    }
}
```
