---
type: Use Case
subtype: what
id: UC-00001
uid: 20261021163400013skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_UC_00001::ImportEngineeringModel
---
# Import an Engineering Model

**Status:** Proposed model element; not an approved new governance rule.

**Statement:** A user imports engineering knowledge from multiple source formats, retaining provenance and reviewable disposition of every processed source record.

## Proposed trace links

- Referenced from (motivates): [[Preserve Imported Knowledge]]
- Scenario function: [[Ingest and Reconcile Engineering Sources]], which owns the [[Reconcile Source Records]] action usage

These are provisional navigational links. Native dependency declarations are present below. Their endpoint typing, semantics and independent parser acceptance remain to be verified. Do not treat a link or verification declaration as passed evidence.

> [!note] Critical use case — expanded source formats requested by owner, 2026-10-21
> Data import is a first-class capability of the Engineering Knowledge Base, not a minor supporting use case. Existing QEAX and Excel implementations are only part of the target.

## Supported source classes (target, not current feature claims)

- Structured engineering models: EA QEAX and future model formats.
- BOM and tabular sources: Excel, CSV or equivalent.
- Documents: PDF and word-processing documents, with identifiable source, document version and extraction provenance where supported.
- Images: illustrations, diagrams, photos or scans as linked/owned evidence; extracting semantic model definitions from image content is a distinct capability requiring validation.
- Other formats: extensible through source adapters, not restricted to the examples above.

A document or image may be indexed as an attachment, linked as external evidence, or yield candidate model facts. These outcomes are **not equivalent**. Do not claim source semantics were translated when only the file was attached or linked.

## Main scenario

1. Select one or more source inputs and identify available source format and provenance.
2. Detect an appropriate source adapter and report supported extraction/translation capabilities.
3. Normalize supported records or files, preserving references to source items and original identifiers.
4. Match existing MDSE definitions/usages where justified and propose new model records.
5. Identify uncertain, unsupported, duplicate, incomplete or conflicting data in reviewable dispositions/flags.
6. Present an import plan and apply only permitted additions or approved changes.
7. Write model notes, managed attachments or links, and a source-specific import ledger/report.
8. Run appropriate structural and syntax checks, reporting their actual outcomes.

## Expected outcome

Knowledge from multiple engineering sources is available in the connected model, without silently discarding source records or overwriting accepted engineer edits.

## Critical boundaries

- PDM/PLM remains authoritative for complete CAD and controlled design files; MDSE may link to those sources instead of duplicating them.
- Import adapters must be source-specific, but canonical identity, note writing, semantic rules, conflict handling and dispositions belong to shared MDSE contracts.
- Any text or image extraction is candidate evidence, not automatically a certified fact or approved SysML relationship.
- Private data must remain in private/local vaults, not in public MDSE_v2 code.

## Traceability

- Primary capability: [[Engineering Knowledge Base]]
- Supporting quality: [[Preserve Imported Knowledge]]
- Existing candidate function: [[Reconcile Source Records]]
- Existing candidate requirement: [[Account for Every Source Row]] — a draft native dependency now records the need for per-row disposition, not satisfaction.
- Existing candidate verification: [[Source Row Disposition Test]]
- Actual QEAX/Excel implementations require independent acceptance; PDF/Docs/Images adapters are future implementation gaps until demonstrated.

## Proposed functional coverage

- [[Ingest and Reconcile Engineering Sources]]
- [[Maintain and Improve Model Knowledge]]

The modeled relationships below now distinguish native actions, refinements, and supporting dependencies. Their endpoint semantics and independent parser acceptance remain under review.

## Native relationship semantics — draft

- 1 typed `action` usage(s) express actual functions in this user scenario; an `action` usage is not the software's `perform action` allocation.
- 2 `#refinement dependency`(ies) elaborate the corresponding stakeholder requirement; this does not claim satisfaction.
- 1 generic `dependency` remains because this need is a supporting prerequisite, not a refinement of its intent.
- The prior BEH-00007 import link was removed: importing data and Workbench author editing have distinct responsibility under GOV-012.

Semantic decisions are based on this note's described scenario. All additions remain Draft until model parsing and runtime verification.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_UC_00001 {
    use case def ImportEngineeringModel {
        doc /* A user imports engineering knowledge from multiple source formats, retaining provenance and reviewable disposition of every processed source record. */
        action ingestEngineeringSources : MDSE_BEH_00002::IngestEngineeringSources;
        #refinement dependency from ImportEngineeringModel to MDSE_STK_00013::EngineeringKnowledgeBase;
        #refinement dependency from ImportEngineeringModel to MDSE_STK_00003::StakeholderNeed03;
        dependency from ImportEngineeringModel to MDSE_STK_00004::StakeholderNeed04;
        dependency from ImportEngineeringModel to MDSE_REQ_00001::RecordRowDisposition;
    }
}
```
