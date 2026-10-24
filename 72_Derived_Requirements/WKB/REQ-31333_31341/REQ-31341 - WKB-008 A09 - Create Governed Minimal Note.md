---
type: Requirement
subtype: functional
id: REQ-31341
uid: 20261023200000009skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "4"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31341::RuleREQ31341
---
# REQ-31341 — Create Governed Minimal Note

## Requirement

The MDSE Workbench shall create a new model note containing type, subtype, id, uid, status and one terminal SysML v2 block.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A09` from [[WKB-008 - Analysis]]
- Initial broad source candidate: none; requirement restored from the omitted final clause of the governing rule
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Create a note and assert identity properties and one final SysML block.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31341 {
    requirement def RuleREQ31341 {
        doc /* The MDSE Workbench shall create a new model note containing type, subtype, id, uid, status and one terminal SysML v2 block. */
    }
}
```
