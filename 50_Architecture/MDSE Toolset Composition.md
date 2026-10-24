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

## AIP process-governance trace — Draft

Seven distinct policy requirement definitions are used here for cross-note navigation. Six normative checks have native objective-level `verify` references to their pre-existing cases. The seventh, REQ-31326, is an optional permission and is deliberately not made a required positive test. No AI policy requirement was allocated to a product tool: the responsible system component is not established in these source rules. See [[AIP Requirement Trace Review]].

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

        requirement aiPolicy31321 : MDSE_REQ_31321::RuleREQ31321;
        requirement aiPolicy31322 : MDSE_REQ_31322::RuleREQ31322;
        requirement aiPolicy31323 : MDSE_REQ_31323::RuleREQ31323;
        requirement aiPolicy31324 : MDSE_REQ_31324::RuleREQ31324;
        requirement aiPolicy31325 : MDSE_REQ_31325::RuleREQ31325;
        requirement aiPolicy31326 : MDSE_REQ_31326::RuleREQ31326;
        requirement aiPolicy31327 : MDSE_REQ_31327::RuleREQ31327;

        requirement bas31260 : MDSE_REQ_31260::RuleREQ31260;
        requirement bas31261 : MDSE_REQ_31261::RuleREQ31261;
        requirement bas31262 : MDSE_REQ_31262::RuleREQ31262;
        requirement bas31263 : MDSE_REQ_31263::RuleREQ31263;
        requirement bas31264 : MDSE_REQ_31264::RuleREQ31264;
        requirement bas31265 : MDSE_REQ_31265::RuleREQ31265;
        requirement bas31266 : MDSE_REQ_31266::RuleREQ31266;
        requirement bas31267 : MDSE_REQ_31267::RuleREQ31267;
        requirement bas31268 : MDSE_REQ_31268::RuleREQ31268;
        requirement bas31269 : MDSE_REQ_31269::RuleREQ31269;
        requirement bas31270 : MDSE_REQ_31270::RuleREQ31270;

        requirement bom31233 : MDSE_REQ_31233::RuleREQ31233;
        requirement bom31234 : MDSE_REQ_31234::RuleREQ31234;
        requirement bom31235 : MDSE_REQ_31235::RuleREQ31235;
        requirement bom31236 : MDSE_REQ_31236::RuleREQ31236;
        requirement bom31237 : MDSE_REQ_31237::RuleREQ31237;
        requirement bom31238 : MDSE_REQ_31238::RuleREQ31238;
        requirement bom31239 : MDSE_REQ_31239::RuleREQ31239;
        requirement bom31240 : MDSE_REQ_31240::RuleREQ31240;
        requirement bom31241 : MDSE_REQ_31241::RuleREQ31241;
        requirement bom31242 : MDSE_REQ_31242::RuleREQ31242;
        requirement bom31243 : MDSE_REQ_31243::RuleREQ31243;
        requirement bom31244 : MDSE_REQ_31244::RuleREQ31244;
        requirement bom31245 : MDSE_REQ_31245::RuleREQ31245;
        requirement bom31246 : MDSE_REQ_31246::RuleREQ31246;
        requirement bom31247 : MDSE_REQ_31247::RuleREQ31247;
        requirement bom31248 : MDSE_REQ_31248::RuleREQ31248;
        requirement bom31249 : MDSE_REQ_31249::RuleREQ31249;
        requirement bom31250 : MDSE_REQ_31250::RuleREQ31250;
        requirement bom31251 : MDSE_REQ_31251::RuleREQ31251;
        requirement bom31252 : MDSE_REQ_31252::RuleREQ31252;
        requirement bom31253 : MDSE_REQ_31253::RuleREQ31253;
        requirement bom31254 : MDSE_REQ_31254::RuleREQ31254;
        requirement bom31255 : MDSE_REQ_31255::RuleREQ31255;
        requirement bom31256 : MDSE_REQ_31256::RuleREQ31256;
        requirement bom31257 : MDSE_REQ_31257::RuleREQ31257;
        requirement bom31258 : MDSE_REQ_31258::RuleREQ31258;
        requirement bom31259 : MDSE_REQ_31259::RuleREQ31259;

        requirement boo31271 : MDSE_REQ_31271::RuleREQ31271;
        requirement boo31272 : MDSE_REQ_31272::RuleREQ31272;
        requirement boo31273 : MDSE_REQ_31273::RuleREQ31273;
        requirement boo31274 : MDSE_REQ_31274::RuleREQ31274;
        requirement boo31275 : MDSE_REQ_31275::RuleREQ31275;
        requirement boo31276 : MDSE_REQ_31276::RuleREQ31276;
        requirement boo31277 : MDSE_REQ_31277::RuleREQ31277;

        requirement dat31031 : MDSE_REQ_31031::RuleREQ31031;
        requirement dat31032 : MDSE_REQ_31032::RuleREQ31032;
        requirement dat31033 : MDSE_REQ_31033::RuleREQ31033;
        requirement dat31034 : MDSE_REQ_31034::RuleREQ31034;
        requirement dat31035 : MDSE_REQ_31035::RuleREQ31035;
        requirement dat31036 : MDSE_REQ_31036::RuleREQ31036;

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

        verification aiPolicyCheck1 : MDSE_VER_31153::TestVER31153 {
            objective aiPolicyObjective1 {
                verify aiPolicy31321;
                verify aiPolicy31322;
            }
        }
        verification aiPolicyCheck2 : MDSE_VER_31154::TestVER31154 {
            objective aiPolicyObjective2 {
                verify aiPolicy31323;
                verify aiPolicy31324;
            }
        }
        verification aiPolicyCheck3 : MDSE_VER_31155::TestVER31155 {
            objective aiPolicyObjective3 {
                verify aiPolicy31325;
            }
        }
        verification aiPolicyCheck4 : MDSE_VER_31156::TestVER31156 {
            objective aiPolicyObjective4 {
                verify aiPolicy31327;
            }
        }

        verification basCase1 : MDSE_VER_31129::TestVER31129 {
            objective basObjective1 {
                verify bas31260;
            }
        }
        verification basCase2 : MDSE_VER_31130::TestVER31130 {
            objective basObjective2 {
                verify bas31261;
            }
        }
        verification basCase3 : MDSE_VER_31131::TestVER31131 {
            objective basObjective3 {
                verify bas31262;
            }
        }
        verification basCase12 : MDSE_VER_31133::TestVER31133 {
            objective basObjective12 {
                verify bas31267;
                verify bas31268;
                verify bas31269;
                verify bas31270;
            }
        }

        verification bomCase6 : MDSE_VER_31117::TestVER31117 {
            objective bomObjective6 {
                verify bom31233;
                verify bom31234;
            }
        }
        verification bomCase7 : MDSE_VER_31118::TestVER31118 {
            objective bomObjective7 {
                verify bom31235;
            }
        }
        verification bomCase8 : MDSE_VER_31119::TestVER31119 {
            objective bomObjective8 {
                verify bom31236;
                verify bom31237;
            }
        }
        verification bomCase9 : MDSE_VER_31120::TestVER31120 {
            objective bomObjective9 {
                verify bom31238;
            }
        }
        verification bomCase10 : MDSE_VER_31121::TestVER31121 {
            objective bomObjective10 {
                verify bom31239;
            }
        }
        verification bomCase11 : MDSE_VER_31122::TestVER31122 {
            objective bomObjective11 {
                verify bom31240;
            }
        }
        verification bomCase12 : MDSE_VER_31123::TestVER31123 {
            objective bomObjective12 {
                verify bom31241;
            }
        }
        verification bomCase13 : MDSE_VER_31124::TestVER31124 {
            objective bomObjective13 {
                verify bom31242;
                verify bom31243;
            }
        }
        verification bomCase14 : MDSE_VER_31125::TestVER31125 {
            objective bomObjective14 {
                verify bom31244;
            }
        }
        verification bomCase15 : MDSE_VER_31126::TestVER31126 {
            objective bomObjective15 {
                verify bom31245;
                verify bom31246;
                verify bom31247;
                verify bom31248;
                verify bom31249;
            }
        }
        verification bomCase16 : MDSE_VER_31127::TestVER31127 {
            objective bomObjective16 {
                verify bom31250;
                verify bom31251;
                verify bom31252;
                verify bom31253;
                verify bom31254;
            }
        }
        verification bomCase17 : MDSE_VER_31128::TestVER31128 {
            objective bomObjective17 {
                verify bom31255;
                verify bom31256;
                verify bom31257;
                verify bom31258;
                verify bom31259;
            }
        }

        verification booCheck1 : MDSE_VER_31134::TestVER31134 {
            objective booObjective1 {
                verify boo31271;
            }
        }
        verification booCheck7 : MDSE_VER_31135::TestVER31135 {
            objective booObjective7 {
                verify boo31272;
                verify boo31273;
                verify boo31274;
                verify boo31275;
            }
        }
        verification booCheck8 : MDSE_VER_31136::TestVER31136 {
            objective booObjective8 {
                verify boo31276;
                verify boo31277;
            }
        }

        verification datPolicyCheck1 : MDSE_VER_31013::TestVER31013 {
            objective datPolicyObjective1 {
                verify dat31031;
                verify dat31032;
            }
        }
        verification datPolicyCheck2 : MDSE_VER_31014::TestVER31014 {
            objective datPolicyObjective2 {
                verify dat31033;
                verify dat31034;
                verify dat31035;
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
