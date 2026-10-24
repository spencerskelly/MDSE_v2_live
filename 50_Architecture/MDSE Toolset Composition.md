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
| [[WKB-008]] — Edit lens functionality, eligible model edit targets, and authoritative SysML writes | [[REQ-31278 - WKB-008 Statement 1]]; [[REQ-31279 - WKB-008 Statement 2]]; [[REQ-31280 - WKB-008 Statement 3]] | workbench ([[MDSE Workbench]]) | [[VER-31137 - WKB-008 Rule Verification]] (all three candidate clauses) |
| [[WKB-012]] — relationship property editing, eligibility and safe renaming | [[REQ-31286 - WKB-012 Statement 1]]; [[REQ-31287 - WKB-012 Statement 2]]; [[REQ-31288 - WKB-012 Statement 3]] | workbench ([[MDSE Workbench]]) | [[VER-31141 - WKB-012 Rule Verification]] (three draft clauses) |
| [[WKB-016]] — port scanning, modifier preservation and Edit lens refresh | [[REQ-31296 - WKB-016 Statement 1]]; [[REQ-31297 - WKB-016 Statement 2]]; [[REQ-31298 - WKB-016 Statement 3]] | workbench ([[MDSE Workbench]]) | [[VER-31145 - WKB-016 Rule Verification]] (three draft clauses) |
| [[WKB-020]] — deduplicate repeated YAML/SysML relationships | [[REQ-31306 - WKB-020 Statement 1]] | workbench ([[MDSE Workbench]]) | [[VER-31149 - WKB-020 Rule Verification]] (one normative candidate) |
| Early self-model pilot (not equated to a particular rule) | [[Account for Every Source Row]] | importer | [[Source Row Disposition Test]] |

Additional software responsibility rules: [[GOV-012]] (tool boundaries); [[IMP-074]] (mechanical translation), [[MOD-018]] (source identity); [[BAS-001]] and [[BOO-001]] (vault/release and plugin dependencies). The source rules' original IDs, statuses and exact historical revisions remain in their `70_Rule_References` notes. The **normative current wording** is [MDSE_v2 RULESET](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md).

The WKB-020 clause-2 note [[REQ-31307 - WKB-020 Statement 2]] describes a historical double-counting defect, not desired behavior; it is intentionally excluded from allocations and verification objectives. The pre-existing generated candidate requirement notes already contain `sourceRule`, `sourceRuleClause`, `sourceRuleStatus`, `sourceRevision` and `semanticReview: pending` fields. Do not infer that these 332 candidate statements are all approved or atomic.

## Modeling semantics and limitations

- Tool ownership is `part` composition, not GitHub repository or Obsidian folder hierarchy.
- Requirement responsibility is `allocate requirementUsage to toolUsage`. It does not assert `satisfy`.
- Verification intent is a `verification` usage containing an `objective` and `verify` references to requirement usages. The IMP-075 case references both clauses, WKB-008 references its three clause usages, and WKB-012/WKB-016/WKB-020 now have draft verification contexts for seven more requirement candidates. These are intended checks, not evidence of execution. Individual verification criteria still need review.
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
        requirement editLensCapabilities : MDSE_REQ_31278::RuleREQ31278;
        requirement eligibleEditTargets : MDSE_REQ_31279::RuleREQ31279;
        requirement authoritativeSysmlWrite : MDSE_REQ_31280::RuleREQ31280;
        requirement a01 : MDSE_REQ_31333::RuleREQ31333;
        requirement a02 : MDSE_REQ_31334::RuleREQ31334;
        requirement a03 : MDSE_REQ_31335::RuleREQ31335;
        requirement a04 : MDSE_REQ_31336::RuleREQ31336;
        requirement a05 : MDSE_REQ_31337::RuleREQ31337;
        requirement a06 : MDSE_REQ_31338::RuleREQ31338;
        requirement a07 : MDSE_REQ_31339::RuleREQ31339;
        requirement a08 : MDSE_REQ_31340::RuleREQ31340;
        requirement a09 : MDSE_REQ_31341::RuleREQ31341;
        requirement relationshipProperties : MDSE_REQ_31286::RuleREQ31286;
        requirement relationshipOptionEligibility : MDSE_REQ_31287::RuleREQ31287;
        requirement safeUsageRename : MDSE_REQ_31288::RuleREQ31288;
        requirement portSyntaxRecognition : MDSE_REQ_31296::RuleREQ31296;
        requirement preserveOwnedUsageModifiers : MDSE_REQ_31297::RuleREQ31297;
        requirement refreshEditIndex : MDSE_REQ_31298::RuleREQ31298;
        requirement deduplicateModeledRelationship : MDSE_REQ_31306::RuleREQ31306;

        allocate sourceRowDisposition to importer;
        allocate importChangeLog to importer;
        allocate importChangeLogEntry to importer;
        allocate repeatImport to importer;
        allocate editLensCapabilities to workbench;
        allocate eligibleEditTargets to workbench;
        allocate authoritativeSysmlWrite to workbench;
        allocate a01 to workbench;
        allocate a02 to workbench;
        allocate a03 to workbench;
        allocate a04 to workbench;
        allocate a05 to workbench;
        allocate a06 to workbench;
        allocate a07 to workbench;
        allocate a08 to workbench;
        allocate a09 to workbench;
        allocate relationshipProperties to workbench;
        allocate relationshipOptionEligibility to workbench;
        allocate safeUsageRename to workbench;
        allocate portSyntaxRecognition to workbench;
        allocate preserveOwnedUsageModifiers to workbench;
        allocate refreshEditIndex to workbench;
        allocate deduplicateModeledRelationship to workbench;

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
                verify editLensCapabilities;
                verify eligibleEditTargets;
                verify authoritativeSysmlWrite;
                verify a01;
                verify a02;
                verify a03;
                verify a04;
                verify a05;
                verify a06;
                verify a07;
                verify a08;
                verify a09;
            }
        }

        verification relationshipPropertyCheck : MDSE_VER_31141::TestVER31141 {
            objective relationshipPropertyCheckObjective {
                verify relationshipProperties;
                verify relationshipOptionEligibility;
                verify safeUsageRename;
            }
        }
        verification portAndEditRoundTripCheck : MDSE_VER_31145::TestVER31145 {
            objective portAndEditRoundTripCheckObjective {
                verify portSyntaxRecognition;
                verify preserveOwnedUsageModifiers;
                verify refreshEditIndex;
            }
        }
        verification relationshipDeduplicationCheck : MDSE_VER_31149::TestVER31149 {
            objective relationshipDeduplicationCheckObjective {
                verify deduplicateModeledRelationship;
            }
        }
    }
}
```
