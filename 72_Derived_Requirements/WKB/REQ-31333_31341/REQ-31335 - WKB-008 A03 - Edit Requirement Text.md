---
type: Requirement
subtype: functional
id: REQ-31335
uid: 20261023200000003skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "1"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31335::RuleREQ31335
---
# REQ-31335 — Edit Requirement Text

## Requirement

The MDSE Workbench shall allow an engineer to update authoritative text of an eligible requirement.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A03` from [[WKB-008 - Analysis]]
- Initial broad source candidate (provenance/navigation only): [[REQ-31278 - WKB-008 Statement 1]]
- Native requirement derivation is **not asserted**: the source candidate is a compound, unapproved preliminary interpretation.
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Edit, save and reload a requirement; assert its authoritative text changes.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31335 {
    requirement def RuleREQ31335 {
        doc /* The MDSE Workbench shall allow an engineer to update authoritative text of an eligible requirement. */
    }
}
```
