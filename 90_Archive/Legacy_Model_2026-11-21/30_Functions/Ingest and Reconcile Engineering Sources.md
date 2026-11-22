---
type: Behavior
subtype: function
id: BEH-00002
uid: 20261021195900001skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00002::IngestEngineeringSources
---
# Ingest and Reconcile Engineering Sources

## Purpose

Import external source data and evidence into MDSE using appropriate adapters, source identity, managed files, approved reconciliation, and recorded dispositions.

## Inputs

Source files/references; adapter capabilities; current model; merge approvals.

## Outputs

New model content or attachments/references; disposition ledger; exceptions; change report.

## Functional decomposition candidates

- Identify source types and format-specific capabilities
- Normalize source data and metadata with provenance
- Match existing definitions and usages without guessing
- Plan approved additions/changes and preserve unsupported data as reviewable evidence
- Report dispositions, conflicts and actual validation results

## Function boundary

PDF, documents, and images are not automatically a SysML model simply because they are indexed or attached. PDM/PLM retains complete CAD authority.

## Use cases depending on this function

- [[Import an Engineering Model]]

## Candidate verification outcome

Every processed source item has a disposition; repeat import is controlled; unsupported records are not silently lost.

## Existing implementation evidence — not certification

Partial: tools/importer/src/run.ts, ea_source.ts, bom.ts and merge.ts; importer/test/importer.test.ts. Generic document/image semantic adapters not verified.

## Proposed subfunctions

- BEH-00001 - Reconcile Source Records

## Trace status

- [[Engineering Knowledge Base]]
- Derived system requirements, component allocations, verification cases and run results: pending
- Native relationship declarations exist in their owning notes; independent SysML parser certification and runtime canvas acceptance remain open.

## Modeled software decomposition — draft

A nested `action reconcileSourceRecords` usage reuses the existing BEH-00001 definition. This is real behavioral decomposition within BEH-00002 rather than another function definition.

Original sources: [[IMP-074]], [[IMP-075]], [[IMP-076]]. These are native part usages and candidate performed-action allocations, **not** evidence of completed testing. Where a child role lacks a reusable definition, it is an untyped initial software usage pending further decomposition.

## Modeled incoming relationships

[[Source Reconciliation Engine]] (within [[MDSE Importer]]) carries a native `perform action` usage typed by this definition. The existing [[Reconcile Source Records]] definition is its nested action.

Function definitions remain reusable in this note; relationships are authored as native SysML usages or dependencies **in their owning notes**, not duplicated here. See [[MDSE Toolset Composition]] and [[Engineering Knowledge Base]] for navigation. All of these links remain Draft pending independent parser and runtime acceptance.

## Decomposed reusable subfunctions — Draft

- [[Resolve Source Identity]] — Match incoming source identifiers and provenance to exactly one existing model identity, or report an ambiguous/unresolved match without creating a duplicate.

These native typed action usages express functional composition, not software allocations or implementation evidence. Each child is a single reusable definition.

## SysML v2

> Draft standalone action definition; parser acceptance and typed relationship declarations remain to be verified.

```sysml
package MDSE_BEH_00002 {
    action def IngestEngineeringSources {
        action resolveSourceIdentity : MDSE_BEH_00008::ResolveSourceIdentity;
        doc /* Import external source data and evidence into MDSE using appropriate adapters, source identity, managed files, approved reconciliation, and recorded dispositions. */
        action reconcileSourceRecords : MDSE_BEH_00001::ReconcileSourceRecords;
    }
}
```
