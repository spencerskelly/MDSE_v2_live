---
type: Object
subtype: software
id: OBJ-00006
uid: 20261023141300006skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00006::MDSEToolset
---
# MDSE Toolset Composition

## Purpose and model boundaries

This software-system definition contains one typed usage of each of the five existing MDSE tools. Detailed roles are owned by [[MDSE Importer]], [[MDSE Core]], [[MDSE Workbench]], [[MDSE Base Vault]] and [[MDSE Bootstrap]]. Functions remain reusable action definitions under `30_Functions`. Only existing definitions are reused here.

The original-rule references below are provenance for **Draft requirement candidates**; they do not introduce new implementation rules. Native `allocate` means proposed responsibility, **not satisfaction**. `verify` means intended case coverage, **not an executed test**.

## Rule-to-model-to-verification trace

| Original authoritative rule | Existing requirement | Responsible software usage | Candidate verification |
|---|---|---|---|
| [[IMP-075]] — change log per import | [[REQ-31137 - IMP-075 Statement 1]]; [[REQ-31138 - IMP-075 Statement 2]] | importer ([[MDSE Importer]]) | [[VER-31071 - IMP-075 Rule Verification]] (both clauses) |
| [[IMP-076]] — repeated import idempotence | [[REQ-31139 - IMP-076 Statement 1]] | importer ([[MDSE Importer]]) | [[VER-31072 - IMP-076 Rule Verification]] |
| [[WKB-008]] — eligible model edit targets | [[REQ-31279 - WKB-008 Statement 2]] | workbench ([[MDSE Workbench]]) | [[VER-31137 - WKB-008 Rule Verification]] |
| Early self-model pilot (not equated to a particular rule) | [[Account for Every Source Row]] | importer | [[Source Row Disposition Test]] |

Additional software responsibility rules: [[GOV-012]] (tool boundaries); [[IMP-074]] (mechanical translation), [[MOD-018]] (source identity); [[BAS-001]] and [[BOO-001]] (vault/release and plugin dependencies). The source rules' original IDs, statuses and exact historical revisions remain in their `70_Rule_References` notes. The **normative current wording** is [MDSE_v2 RULESET](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md).

The pre-existing generated candidate requirement notes already contain `sourceRule`, `sourceRuleClause`, `sourceRuleStatus`, `sourceRevision` and `semanticReview: pending` fields. Do not infer that these 332 candidate statements are all approved or atomic.

## Modeling semantics and limitations

- Tool ownership is `part` composition, not GitHub repository or Obsidian folder hierarchy.
- Requirement responsibility is `allocate requirementUsage to toolUsage`. It does not assert `satisfy`.
- Verification intent is a `verification` usage containing an `objective` and `verify` references to requirement usages. The existing IMP-075 case now references both source clauses in one verification context; this does not assert that either clause has been tested.
- Tool role → function relationships are `perform action` usages within the associated tool definition.
- Stakeholder need and use-case-to-function links use generic `dependency` inside each use-case definition. There is no invented `motivates` or `requiresFunction` connector.
- This SysML block is an integration **candidate**. Qualified references, objective binding, and runtime graph indexing still require independent parser and Obsidian checks. No run results are asserted.

## SysML v2

```sysml
package MDSE_OBJ_00006 {
    part def MDSEToolset {
        part importer : MDSE_OBJ_00001::MDSEImporter;
        part core : MDSE_OBJ_00002::MDSECore;
        part workbench : MDSE_OBJ_00003::MDSEWorkbench;
        part baseVault : MDSE_OBJ_00004::MDSEBaseVault;
        part bootstrap : MDSE_OBJ_00005::MDSEBootstrap;

        requirement sourceRowDisposition : MDSE_REQ_00001::RecordRowDisposition;
        requirement importChangeLog : MDSE_REQ_31137::RuleREQ31137;
        requirement importChangeLogEntry : MDSE_REQ_31138::RuleREQ31138;
        requirement repeatImport : MDSE_REQ_31139::RuleREQ31139;
        requirement eligibleEditTargets : MDSE_REQ_31279::RuleREQ31279;

        allocate sourceRowDisposition to importer;
        allocate importChangeLog to importer;
        allocate importChangeLogEntry to importer;
        allocate repeatImport to importer;
        allocate eligibleEditTargets to workbench;

        verification sourceDispositionCheck : MDSE_VER_00001::SourceDispositionTest {
            objective sourceDispositionObjective {
                verify sourceRowDisposition;
            }
        }
        verification importChangeLogCheck : MDSE_VER_31071::TestVER31071 {
            objective importChangeLogObjective {
                verify importChangeLog;
                verify importChangeLogEntry;
            }
        }
        verification repeatedImportCheck : MDSE_VER_31072::TestVER31072 {
            objective repeatedImportObjective {
                verify repeatImport;
            }
        }
        verification eligibleTargetsCheck : MDSE_VER_31137::TestVER31137 {
            objective eligibleEditTargetsObjective {
                verify eligibleEditTargets;
            }
        }
    }
}
```
