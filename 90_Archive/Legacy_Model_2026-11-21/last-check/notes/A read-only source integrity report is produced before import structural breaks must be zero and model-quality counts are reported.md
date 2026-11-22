---
type: Requirement
subtype: engineering
id: REQ-98057
uid: 20261021212000077skellyspencer
status: Draft
tags: [last-check]
---
# A read-only source integrity report is produced before import: structural breaks must be zero and model-quality counts are reported

## Definition

Before an EA model is translated, a read-only check of the source reports the following. Structural breaks, which must be zero or the import stops: the database is not in write-ahead mode; no connector has a missing end element; no element has a missing package; no package has a missing parent; no element has a missing parent or classifier; no diagram object, object property, connector tag or cross-reference points at a missing owner; no GUID is used twice by objects or by connectors. Quality counts, which are reported and not blocking: parts whose type link is missing, parts with no target at all, groups of sibling ports with the same name, ports whose third data field does not resolve, and elements with no author. Each check has a name, a count and a one-line meaning, and the report is kept with the import run evidence together with the source file's SHA-256 and the table row counts.

## Notes

- Carried from `Engineering_Data` at `bc3b2df` and rewritten: `Engineering_Data EA_2026_10_20_sampleset_export/integrity_report.csv`; `Engineering_Data EA_2026_10_20_sampleset_export/extract_manifest.json`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Engineering_Data EA_2026_10_20_sampleset_export/integrity_report.csv (17 named checks, written by the extractor tool 'qeax_export.html/1'), extract_manifest.json (table row counts and SHA-256) and part_resolution.csv / port_summary.csv (how each part type link and port type resolves). In that sample the structural checks were all zero and the quality counts were not: the aggregate figures were 71 parts with a missing type target, 288 parts with no target at all, 286 sibling-port groups with the same name and 208 elements with no author. Only aggregate counts are recorded here.
- Compared with MDSE_v2 at d35af12: IMP-053 blocks a write-ahead-mode source, TST-004 gate G0 asks for source counts and a fingerprint, and the importer reports each unresolved part type as a flag after translation (UNRESOLVED_PART_TYPE in translation.ts). I could not find a pre-import check for dangling connectors, missing parents, orphan properties or duplicate GUIDs, and the extractor that wrote this report is not in MDSE_v2. A search of Test_Vault_ for the extractor and the check names found one unrelated hit (a BOM archive verification note). The report may be produced outside the importer by design.

> [!flagNote] Draft. Partial gap against MDSE_v2 at d35af12 from a search. Whether the importer or a separate extractor should own the check is the owner's decision.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AReadOnlySourceIntegrityReportIsProducedBeforeImportStructuralBreaksMustBeZeroAndModelQualityCountsAreReported {
        doc /* A source integrity report runs before import; structural breaks stop the import. */
    }
}
```
