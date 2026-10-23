---
type: Object
subtype: software
id: OBJ-00001
uid: 20261021163400016skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00001::MDSEImporter
performs: "[[Ingest and Reconcile Engineering Sources]]"
---
# MDSE Importer

HTML file including all capabilities listed
Software adapter that reads engineering sources and produces reconciled MDSE notes and evidence.
Ability to update an existing vault with the latest version of [[MDSE Bootstrap]] and [[MDSE Workbench]].


## Proposed trace links

- Referenced from (allocatedTo): [[Account for Every Source Row]]


## Existing implementation evidence (read-only assessment)

- **Source:** `tools/importer/src/run.ts`, `ea_source.ts`, `bom.ts`, `merge.ts`, `vault_update.ts`, `importer.template.html`.
- **Tests present:** `tools/importer/test/importer.test.ts`, `bom.test.ts`, `preflight.test.ts`, `vault_update.test.ts`, `testing/oracles/test_importer_browser.py`.
- **Functions supported partially:** [[Ingest and Reconcile Engineering Sources]], [[Maintain and Improve Model Knowledge]].
- **As implemented:** QEAX graph extraction and translation with review dispositions; BOM tabular import from `.xlsx`, `.csv`, `.tsv`; import planning, flags, approved merges, new vault ZIP and update of existing vault tool configuration.
- **Not proven:** General PDF/word-processing/image import; real full-size QEAX/BOM golden acceptance; independently parser-checked exported model.
- **Conflict to resolve:** The page's help text still promises automatic refresh of EA-owned fields, while `src/merge.ts` requires prior approval; legacy core `mergeNote` independently implements automatic refresh.
- **Evidence level:** implementation and dedicated test cases found; these test cases were not executed for this assessment, and no real-data acceptance evidence was verified.

**No new normative allocation is approved by this note.**

## Modeled software decomposition — draft

The source-reconciliation engine and managed-vault updater are separable importer software roles. The former owns a usage of the shared ingestion function; the latter is a release/update responsibility requiring later detailed functional modeling.

Original sources: [[GOV-012]], [[IMP-074]], [[IMP-075]], [[IMP-076]]. These are native part usages and candidate performed-action allocations, **not** evidence of completed testing. Where a child role lacks a reusable definition, it is an untyped initial software usage pending further decomposition.

## SysML v2



```sysml
package MDSE_OBJ_00001 {
    part def MDSEImporter {
        doc /* Software adapter that reads engineering sources and produces reconciled MDSE notes and evidence. */
        part sourceReconciliation : MDSE_OBJ_00007::SourceReconciliationEngine {
            perform action ingest : MDSE_BEH_00002::IngestEngineeringSources;
        }
        part managedVaultUpdate : MDSE_OBJ_00019::ManagedVaultUpdate;
    }
}
```
