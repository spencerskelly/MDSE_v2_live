---
type: Requirement
subtype: functional
id: REQ-31337
uid: 20261023200000005skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "2"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31337::RuleREQ31337
---
# REQ-31337 — Restrict Relationship Target Choices

## Requirement

The MDSE Workbench shall restrict selectable relationship targets to eligible model notes.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A05` from [[WKB-008 - Analysis]]
- Initial broad source candidate: REQ-31279
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Provide eligible and incompatible targets; assert only eligible notes are selectable.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31337 {
    requirement def RuleREQ31337 {
        doc /* The MDSE Workbench shall restrict selectable relationship targets to eligible model notes. */
    }
}
```
