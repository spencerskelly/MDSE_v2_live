---
type: Requirement
subtype: functional
id: REQ-31340
uid: 20261023200000008skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "3"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31340::RuleREQ31340
---
# REQ-31340 — Persist Edits in Authoritative SysML

## Requirement

The MDSE Workbench shall write structural and relationship changes to the source note's terminal authoritative SysML v2 block.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A08` from [[WKB-008 - Analysis]]
- Initial broad source candidate (provenance/navigation only): [[REQ-31280 - WKB-008 Statement 3]]
- Native requirement derivation is **not asserted**: the source candidate is a compound, unapproved preliminary interpretation.
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Apply an edit, reload and assert the authoritative block and graph agree.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31340 {
    requirement def RuleREQ31340 {
        doc /* The MDSE Workbench shall write structural and relationship changes to the source note's terminal authoritative SysML v2 block. */
    }
}
```
