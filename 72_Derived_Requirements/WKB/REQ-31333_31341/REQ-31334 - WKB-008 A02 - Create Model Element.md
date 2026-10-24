---
type: Requirement
subtype: functional
id: REQ-31334
uid: 20261023200000002skellyspencer
status: Draft
sourceRole: authoritative-model
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: "1"
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31334::RuleREQ31334
---
# REQ-31334 — Create Model Element

## Requirement

The MDSE Workbench shall allow an engineer to create a model element of a supported SysML v2 kind.

## Source and trace

- Governing rule: [[WKB-008]]
- Analysis identifier: `WKB-008-A02` from [[WKB-008 - Analysis]]
- Initial broad source candidate (provenance/navigation only): [[REQ-31278 - WKB-008 Statement 1]]
- Native requirement derivation is **not asserted**: the source candidate is a compound, unapproved preliminary interpretation.
- Proposed responsible tool: [[MDSE Workbench]]
- Requirement identity and definition: authoritative in this note, **Draft pending engineering review**. No `satisfy` relationship or parser certification is asserted.

## Candidate verification assertion

Create an eligible element and assert a native definition is indexed.

- Verification definition: [[VER-31137 - WKB-008 Rule Verification]]
- Result: not run for this requirement

## SysML v2

```sysml
package MDSE_REQ_31334 {
    requirement def RuleREQ31334 {
        doc /* The MDSE Workbench shall allow an engineer to create a model element of a supported SysML v2 kind. */
    }
}
```
