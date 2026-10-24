---
type: Requirement
subtype: engineering
id: REQ-00001
uid: 20261021163400015skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_REQ_00001::RecordRowDisposition
---
# Account for Every Source Row

**Status:** Proposed model element; not an approved new governance rule.

**Statement:** For each source package, element and connector processed, MDSE shall record exactly one disposition and retain enough source identity to reconcile the result.

## Proposed trace links

- Referenced from (constrainedBy): [[Reconcile Source Records]]
- allocatedTo: [[MDSE Importer]]
- verifiedBy: [[Source Row Disposition Test]]
- refines: [[Preserve Imported Knowledge]] — per-source-row disposition makes the no-silent-loss need more precise.

The stakeholder refinement below and contextual allocation/verification in [[MDSE Toolset Composition]] are Draft native SysML relationships. Their endpoint semantics and independent parser acceptance remain to be verified; no execution result or passed verification is asserted.

## Contextual native trace — Draft

A typed requirement usage named `sourceRowDisposition` is owned by [[MDSE Toolset Composition]]. Its SysML v2 `allocate sourceRowDisposition to ...;` identifies proposed responsibility in [[MDSE Importer]], not satisfaction.

No one-to-one original governance rule has been established for this earlier pilot requirement or test.

See [[MDSE Rule to Requirement - Allocation and Verification]] for the saved Obsidian Canvas. The reusable **definition** below is not duplicated or replaced; the context owns its relationships. Exact grammar validity and runtime Workbench edge resolution remain subject to acceptance testing.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_REQ_00001 {
    private import ModelingMetadata::Refinement;
    requirement def RecordRowDisposition {
        doc /* For each source package, element and connector processed, MDSE shall record exactly one disposition and retain enough source identity to reconcile the result. */
        #refinement dependency from RecordRowDisposition to MDSE_STK_00003::StakeholderNeed03;
    }
}
```
