---
type: Requirement
subtype: engineering
id: REQ-98069
uid: 20261021212000089skellyspencer
status: Draft
tags: [last-check]
---
# New schema controls are introduced as report-only checks and adopted by a small pilot, legacy notes stay valid until they carry an adoption marker, and each migration batch is checked before the next

## Definition

A schema or template change is first written as a proposal with a reconciliation matrix (current field to target field to disposition, and the same for types and relationships), then piloted on one note of each type with written acceptance criteria. Checks for new fields start report-only and warn before they enforce. Notes written before the change remain valid, and a new check applies only to notes with an adoption marker. A migration moves content in small batches; in each batch the links, the Base and Canvas paths and the navigation files are updated together, ids and provenance are kept, and the name, dependency and metadata checks run before the next batch. A new type is not created to match a folder name, and a synonym is resolved by choosing one name and recording the old one as an alias.

## Notes

- Carried from `PosiBattery` at `ca67e06` and rewritten: `PosiBattery 99_System/10_Docs/Schema Reconciliation Plan 0.1.md`; `PosiBattery 99_System/10_Docs/Schema Reconciliation Matrix 0.1.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: PosiBattery Schema Reconciliation Plan 0.1.md (principles, phases 1 to 5, risks and controls) and Schema Reconciliation Matrix 0.1.md (validation impact matrix, pilot proposal, acceptance criteria, decisions DEC-001 to DEC-008). Its pilot is one actor, need, function, design, metric and source record, with a cross-domain traceability view as an acceptance criterion.
- Compared with MDSE_v2 at d35af12: v2 has a roadmap and the Test_Vault_ base-vault gate (BAS-003, BOO-005), and a baseline protection note (last-check). I found no rule on adoption markers, report-only-first enforcement, or checks between migration batches. A search of governance for batch found only BOM and import batches.
- Corroboration: the source's decision DEC-008 asks whether tracesTo stays as a generic fallback, is limited to views, or is deprecated for new notes. This is the same question as the tracesTo drift between D-0010 and the importer, which is a v2 open item (see README).
- The reconciliation was never completed in the source (the decisions DEC-001 to DEC-008 were still open on 2026-10-12), so this is a method and not a finished design.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12. The method is relevant to the v2 move from V1 notes.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def NewSchemaControlsAreIntroducedAsReportOnlyChecksAndAdoptedByASmallPilotLegacyNotesStayValidUntilTheyCarryAnAdoptionMarkerAndEachMigrationBatchIsCheckedBeforeTheNext {
        doc /* Controls are report-only first; legacy stays valid until adopted; migrations are batched and checked. */
    }
}
```
