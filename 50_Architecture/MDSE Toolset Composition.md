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

        requirement gov31001 : MDSE_REQ_31001::RuleREQ31001;
        requirement gov31002 : MDSE_REQ_31002::RuleREQ31002;
        requirement gov31003 : MDSE_REQ_31003::RuleREQ31003;
        requirement gov31004 : MDSE_REQ_31004::RuleREQ31004;
        requirement gov31005 : MDSE_REQ_31005::RuleREQ31005;
        requirement gov31006 : MDSE_REQ_31006::RuleREQ31006;
        requirement gov31007 : MDSE_REQ_31007::RuleREQ31007;
        requirement gov31008 : MDSE_REQ_31008::RuleREQ31008;
        requirement gov31009 : MDSE_REQ_31009::RuleREQ31009;
        requirement gov31010 : MDSE_REQ_31010::RuleREQ31010;
        requirement gov31011 : MDSE_REQ_31011::RuleREQ31011;
        requirement gov31012 : MDSE_REQ_31012::RuleREQ31012;
        requirement gov31013 : MDSE_REQ_31013::RuleREQ31013;
        requirement gov31014 : MDSE_REQ_31014::RuleREQ31014;
        requirement gov31015 : MDSE_REQ_31015::RuleREQ31015;
        requirement gov31016 : MDSE_REQ_31016::RuleREQ31016;
        requirement gov31017 : MDSE_REQ_31017::RuleREQ31017;
        requirement gov31018 : MDSE_REQ_31018::RuleREQ31018;
        requirement gov31019 : MDSE_REQ_31019::RuleREQ31019;
        requirement gov31020 : MDSE_REQ_31020::RuleREQ31020;
        requirement gov31021 : MDSE_REQ_31021::RuleREQ31021;
        requirement gov31022 : MDSE_REQ_31022::RuleREQ31022;
        requirement gov31023 : MDSE_REQ_31023::RuleREQ31023;
        requirement gov31024 : MDSE_REQ_31024::RuleREQ31024;
        requirement gov31025 : MDSE_REQ_31025::RuleREQ31025;
        requirement gov31026 : MDSE_REQ_31026::RuleREQ31026;
        requirement gov31027 : MDSE_REQ_31027::RuleREQ31027;
        requirement gov31028 : MDSE_REQ_31028::RuleREQ31028;
        requirement gov31029 : MDSE_REQ_31029::RuleREQ31029;
        requirement gov31030 : MDSE_REQ_31030::RuleREQ31030;

        requirement imp31135 : MDSE_REQ_31135::RuleREQ31135;
        requirement imp31136 : MDSE_REQ_31136::RuleREQ31136;
        requirement imp31140 : MDSE_REQ_31140::RuleREQ31140;
        requirement imp31141 : MDSE_REQ_31141::RuleREQ31141;
        requirement imp31142 : MDSE_REQ_31142::RuleREQ31142;
        requirement imp31143 : MDSE_REQ_31143::RuleREQ31143;
        requirement imp31144 : MDSE_REQ_31144::RuleREQ31144;
        requirement imp31145 : MDSE_REQ_31145::RuleREQ31145;
        requirement imp31146 : MDSE_REQ_31146::RuleREQ31146;
        requirement imp31147 : MDSE_REQ_31147::RuleREQ31147;
        requirement imp31148 : MDSE_REQ_31148::RuleREQ31148;
        requirement imp31149 : MDSE_REQ_31149::RuleREQ31149;
        requirement imp31150 : MDSE_REQ_31150::RuleREQ31150;
        requirement imp31151 : MDSE_REQ_31151::RuleREQ31151;
        requirement imp31152 : MDSE_REQ_31152::RuleREQ31152;
        requirement imp31153 : MDSE_REQ_31153::RuleREQ31153;
        requirement imp31154 : MDSE_REQ_31154::RuleREQ31154;

        requirement imp31155 : MDSE_REQ_31155::RuleREQ31155;
        requirement imp31156 : MDSE_REQ_31156::RuleREQ31156;
        requirement imp31157 : MDSE_REQ_31157::RuleREQ31157;
        requirement imp31158 : MDSE_REQ_31158::RuleREQ31158;
        requirement imp31159 : MDSE_REQ_31159::RuleREQ31159;
        requirement imp31160 : MDSE_REQ_31160::RuleREQ31160;
        requirement imp31161 : MDSE_REQ_31161::RuleREQ31161;
        requirement imp31162 : MDSE_REQ_31162::RuleREQ31162;
        requirement imp31163 : MDSE_REQ_31163::RuleREQ31163;
        requirement imp31164 : MDSE_REQ_31164::RuleREQ31164;
        requirement imp31165 : MDSE_REQ_31165::RuleREQ31165;
        requirement imp31166 : MDSE_REQ_31166::RuleREQ31166;
        requirement imp31167 : MDSE_REQ_31167::RuleREQ31167;
        requirement imp31168 : MDSE_REQ_31168::RuleREQ31168;
        requirement imp31169 : MDSE_REQ_31169::RuleREQ31169;
        requirement imp31170 : MDSE_REQ_31170::RuleREQ31170;
        requirement imp31171 : MDSE_REQ_31171::RuleREQ31171;
        requirement imp31172 : MDSE_REQ_31172::RuleREQ31172;
        requirement imp31173 : MDSE_REQ_31173::RuleREQ31173;
        requirement imp31174 : MDSE_REQ_31174::RuleREQ31174;
        requirement imp31175 : MDSE_REQ_31175::RuleREQ31175;
        requirement imp31176 : MDSE_REQ_31176::RuleREQ31176;
        requirement imp31177 : MDSE_REQ_31177::RuleREQ31177;
        requirement imp31178 : MDSE_REQ_31178::RuleREQ31178;
        requirement imp31179 : MDSE_REQ_31179::RuleREQ31179;
        requirement imp31180 : MDSE_REQ_31180::RuleREQ31180;
        requirement imp31181 : MDSE_REQ_31181::RuleREQ31181;
        requirement imp31182 : MDSE_REQ_31182::RuleREQ31182;
        requirement imp31183 : MDSE_REQ_31183::RuleREQ31183;
        requirement imp31184 : MDSE_REQ_31184::RuleREQ31184;
        requirement imp31185 : MDSE_REQ_31185::RuleREQ31185;
        requirement imp31186 : MDSE_REQ_31186::RuleREQ31186;
        requirement imp31187 : MDSE_REQ_31187::RuleREQ31187;
        requirement imp31188 : MDSE_REQ_31188::RuleREQ31188;
        requirement imp31189 : MDSE_REQ_31189::RuleREQ31189;
        requirement imp31190 : MDSE_REQ_31190::RuleREQ31190;
        requirement imp31191 : MDSE_REQ_31191::RuleREQ31191;
        requirement imp31192 : MDSE_REQ_31192::RuleREQ31192;
        requirement imp31193 : MDSE_REQ_31193::RuleREQ31193;
        requirement imp31194 : MDSE_REQ_31194::RuleREQ31194;
        requirement imp31195 : MDSE_REQ_31195::RuleREQ31195;
        requirement imp31196 : MDSE_REQ_31196::RuleREQ31196;
        requirement imp31197 : MDSE_REQ_31197::RuleREQ31197;
        requirement imp31198 : MDSE_REQ_31198::RuleREQ31198;
        requirement imp31199 : MDSE_REQ_31199::RuleREQ31199;
        requirement imp31200 : MDSE_REQ_31200::RuleREQ31200;
        requirement imp31201 : MDSE_REQ_31201::RuleREQ31201;
        requirement imp31202 : MDSE_REQ_31202::RuleREQ31202;
        requirement imp31203 : MDSE_REQ_31203::RuleREQ31203;
        requirement imp31204 : MDSE_REQ_31204::RuleREQ31204;
        requirement imp31205 : MDSE_REQ_31205::RuleREQ31205;
        requirement imp31206 : MDSE_REQ_31206::RuleREQ31206;
        requirement imp31207 : MDSE_REQ_31207::RuleREQ31207;
        requirement imp31208 : MDSE_REQ_31208::RuleREQ31208;
        requirement imp31209 : MDSE_REQ_31209::RuleREQ31209;
        requirement imp31210 : MDSE_REQ_31210::RuleREQ31210;
        requirement imp31211 : MDSE_REQ_31211::RuleREQ31211;
        requirement imp31212 : MDSE_REQ_31212::RuleREQ31212;
        requirement imp31213 : MDSE_REQ_31213::RuleREQ31213;
        requirement imp31214 : MDSE_REQ_31214::RuleREQ31214;
        requirement imp31215 : MDSE_REQ_31215::RuleREQ31215;
        requirement imp31216 : MDSE_REQ_31216::RuleREQ31216;
        requirement imp31217 : MDSE_REQ_31217::RuleREQ31217;
        requirement imp31218 : MDSE_REQ_31218::RuleREQ31218;
        requirement imp31219 : MDSE_REQ_31219::RuleREQ31219;
        requirement imp31220 : MDSE_REQ_31220::RuleREQ31220;
        requirement imp31221 : MDSE_REQ_31221::RuleREQ31221;
        requirement imp31222 : MDSE_REQ_31222::RuleREQ31222;
        requirement imp31223 : MDSE_REQ_31223::RuleREQ31223;
        requirement imp31224 : MDSE_REQ_31224::RuleREQ31224;
        requirement imp31225 : MDSE_REQ_31225::RuleREQ31225;
        requirement imp31226 : MDSE_REQ_31226::RuleREQ31226;
        requirement imp31227 : MDSE_REQ_31227::RuleREQ31227;
        requirement imp31228 : MDSE_REQ_31228::RuleREQ31228;
        requirement imp31229 : MDSE_REQ_31229::RuleREQ31229;
        requirement imp31230 : MDSE_REQ_31230::RuleREQ31230;
        requirement imp31231 : MDSE_REQ_31231::RuleREQ31231;
        requirement imp31232 : MDSE_REQ_31232::RuleREQ31232;

        requirement mod31037 : MDSE_REQ_31037::RuleREQ31037;
        requirement mod31038 : MDSE_REQ_31038::RuleREQ31038;
        requirement mod31039 : MDSE_REQ_31039::RuleREQ31039;
        requirement mod31040 : MDSE_REQ_31040::RuleREQ31040;
        requirement mod31041 : MDSE_REQ_31041::RuleREQ31041;
        requirement mod31042 : MDSE_REQ_31042::RuleREQ31042;
        requirement mod31043 : MDSE_REQ_31043::RuleREQ31043;
        requirement mod31044 : MDSE_REQ_31044::RuleREQ31044;
        requirement mod31045 : MDSE_REQ_31045::RuleREQ31045;
        requirement mod31046 : MDSE_REQ_31046::RuleREQ31046;
        requirement mod31047 : MDSE_REQ_31047::RuleREQ31047;
        requirement mod31048 : MDSE_REQ_31048::RuleREQ31048;
        requirement mod31049 : MDSE_REQ_31049::RuleREQ31049;
        requirement mod31050 : MDSE_REQ_31050::RuleREQ31050;
        requirement mod31051 : MDSE_REQ_31051::RuleREQ31051;
        requirement mod31052 : MDSE_REQ_31052::RuleREQ31052;
        requirement mod31053 : MDSE_REQ_31053::RuleREQ31053;
        requirement mod31054 : MDSE_REQ_31054::RuleREQ31054;
        requirement mod31055 : MDSE_REQ_31055::RuleREQ31055;
        requirement mod31056 : MDSE_REQ_31056::RuleREQ31056;

        requirement mod31057 : MDSE_REQ_31057::RuleREQ31057;
        requirement mod31058 : MDSE_REQ_31058::RuleREQ31058;
        requirement mod31059 : MDSE_REQ_31059::RuleREQ31059;
        requirement mod31060 : MDSE_REQ_31060::RuleREQ31060;
        requirement mod31061 : MDSE_REQ_31061::RuleREQ31061;
        requirement mod31062 : MDSE_REQ_31062::RuleREQ31062;
        requirement mod31063 : MDSE_REQ_31063::RuleREQ31063;
        requirement mod31064 : MDSE_REQ_31064::RuleREQ31064;
        requirement mod31065 : MDSE_REQ_31065::RuleREQ31065;
        requirement mod31066 : MDSE_REQ_31066::RuleREQ31066;
        requirement mod31067 : MDSE_REQ_31067::RuleREQ31067;
        requirement mod31068 : MDSE_REQ_31068::RuleREQ31068;
        requirement mod31069 : MDSE_REQ_31069::RuleREQ31069;
        requirement mod31070 : MDSE_REQ_31070::RuleREQ31070;
        requirement mod31071 : MDSE_REQ_31071::RuleREQ31071;
        requirement mod31072 : MDSE_REQ_31072::RuleREQ31072;
        requirement mod31073 : MDSE_REQ_31073::RuleREQ31073;
        requirement mod31074 : MDSE_REQ_31074::RuleREQ31074;
        requirement mod31075 : MDSE_REQ_31075::RuleREQ31075;
        requirement mod31076 : MDSE_REQ_31076::RuleREQ31076;

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

        verification govCase1 : MDSE_VER_31001::TestVER31001 {
            objective govObjective1 {
                verify gov31001;
                verify gov31002;
            }
        }
        verification govCase2 : MDSE_VER_31002::TestVER31002 {
            objective govObjective2 {
                verify gov31003;
                verify gov31004;
            }
        }
        verification govCase3 : MDSE_VER_31003::TestVER31003 {
            objective govObjective3 {
                verify gov31005;
                verify gov31006;
            }
        }
        verification govCase4 : MDSE_VER_31004::TestVER31004 {
            objective govObjective4 {
                verify gov31007;
                verify gov31008;
            }
        }
        verification govCase5 : MDSE_VER_31005::TestVER31005 {
            objective govObjective5 {
                verify gov31009;
                verify gov31010;
            }
        }
        verification govCase7 : MDSE_VER_31007::TestVER31007 {
            objective govObjective7 {
                verify gov31013;
                verify gov31014;
            }
        }
        verification govCase8 : MDSE_VER_31008::TestVER31008 {
            objective govObjective8 {
                verify gov31015;
                verify gov31016;
                verify gov31017;
            }
        }
        verification govCase9 : MDSE_VER_31009::TestVER31009 {
            objective govObjective9 {
                verify gov31018;
            }
        }
        verification govCase12 : MDSE_VER_31010::TestVER31010 {
            objective govObjective12 {
                verify gov31019;
                verify gov31020;
                verify gov31021;
                verify gov31022;
                verify gov31023;
            }
        }
        verification govCase17 : MDSE_VER_31011::TestVER31011 {
            objective govObjective17 {
                verify gov31024;
                verify gov31025;
                verify gov31026;
                verify gov31027;
            }
        }

        verification impCase74 : MDSE_VER_31070::TestVER31070 {
            objective impObjective74 {
                verify imp31135;
                verify imp31136;
            }
        }
        verification impCase78 : MDSE_VER_31073::TestVER31073 {
            objective impObjective78 {
                verify imp31140;
                verify imp31141;
            }
        }
        verification impCase79 : MDSE_VER_31074::TestVER31074 {
            objective impObjective79 {
                verify imp31142;
            }
        }
        verification impCase80 : MDSE_VER_31075::TestVER31075 {
            objective impObjective80 {
                verify imp31143;
            }
        }
        verification impCase81 : MDSE_VER_31076::TestVER31076 {
            objective impObjective81 {
                verify imp31144;
                verify imp31145;
            }
        }
        verification impCase82 : MDSE_VER_31077::TestVER31077 {
            objective impObjective82 {
                verify imp31146;
            }
        }
        verification impCase83 : MDSE_VER_31078::TestVER31078 {
            objective impObjective83 {
                verify imp31147;
                verify imp31148;
                verify imp31149;
            }
        }
        verification impCase84 : MDSE_VER_31079::TestVER31079 {
            objective impObjective84 {
                verify imp31150;
            }
        }
        verification impCase85 : MDSE_VER_31080::TestVER31080 {
            objective impObjective85 {
                verify imp31151;
                verify imp31152;
                verify imp31153;
            }
        }
        verification impCase86 : MDSE_VER_31081::TestVER31081 {
            objective impObjective86 {
                verify imp31154;
            }
        }

        verification impCase87 : MDSE_VER_31082::TestVER31082 {
            objective impObjective87 {
                verify imp31155;
            }
        }
        verification impCase93 : MDSE_VER_31083::TestVER31083 {
            objective impObjective93 {
                verify imp31156;
                verify imp31157;
            }
        }
        verification impCase94 : MDSE_VER_31084::TestVER31084 {
            objective impObjective94 {
                verify imp31158;
                verify imp31159;
            }
        }
        verification impCase95 : MDSE_VER_31085::TestVER31085 {
            objective impObjective95 {
                verify imp31160;
            }
        }
        verification impCase96 : MDSE_VER_31086::TestVER31086 {
            objective impObjective96 {
                verify imp31161;
                verify imp31162;
                verify imp31163;
                verify imp31164;
            }
        }
        verification impCase97 : MDSE_VER_31087::TestVER31087 {
            objective impObjective97 {
                verify imp31165;
                verify imp31166;
            }
        }
        verification impCase98 : MDSE_VER_31088::TestVER31088 {
            objective impObjective98 {
                verify imp31167;
                verify imp31168;
            }
        }
        verification impCase99 : MDSE_VER_31089::TestVER31089 {
            objective impObjective99 {
                verify imp31169;
                verify imp31170;
            }
        }
        verification impCase100 : MDSE_VER_31090::TestVER31090 {
            objective impObjective100 {
                verify imp31171;
                verify imp31172;
            }
        }
        verification impCase101 : MDSE_VER_31091::TestVER31091 {
            objective impObjective101 {
                verify imp31173;
                verify imp31174;
                verify imp31175;
                verify imp31176;
            }
        }
        verification impCase102 : MDSE_VER_31092::TestVER31092 {
            objective impObjective102 {
                verify imp31177;
                verify imp31178;
            }
        }
        verification impCase103 : MDSE_VER_31093::TestVER31093 {
            objective impObjective103 {
                verify imp31179;
                verify imp31180;
            }
        }
        verification impCase104 : MDSE_VER_31094::TestVER31094 {
            objective impObjective104 {
                verify imp31181;
                verify imp31182;
            }
        }
        verification impCase105 : MDSE_VER_31095::TestVER31095 {
            objective impObjective105 {
                verify imp31183;
            }
        }
        verification impCase106 : MDSE_VER_31096::TestVER31096 {
            objective impObjective106 {
                verify imp31184;
                verify imp31185;
            }
        }
        verification impCase107 : MDSE_VER_31097::TestVER31097 {
            objective impObjective107 {
                verify imp31186;
            }
        }
        verification impCase108 : MDSE_VER_31098::TestVER31098 {
            objective impObjective108 {
                verify imp31187;
            }
        }
        verification impCase109 : MDSE_VER_31099::TestVER31099 {
            objective impObjective109 {
                verify imp31188;
                verify imp31189;
            }
        }
        verification impCase111 : MDSE_VER_31100::TestVER31100 {
            objective impObjective111 {
                verify imp31190;
            }
        }
        verification impCase112 : MDSE_VER_31101::TestVER31101 {
            objective impObjective112 {
                verify imp31191;
            }
        }
        verification impCase113 : MDSE_VER_31102::TestVER31102 {
            objective impObjective113 {
                verify imp31192;
                verify imp31193;
                verify imp31194;
                verify imp31195;
            }
        }
        verification impCase114 : MDSE_VER_31103::TestVER31103 {
            objective impObjective114 {
                verify imp31196;
                verify imp31197;
                verify imp31198;
            }
        }
        verification impCase115 : MDSE_VER_31104::TestVER31104 {
            objective impObjective115 {
                verify imp31199;
                verify imp31200;
            }
        }
        verification impCase116 : MDSE_VER_31105::TestVER31105 {
            objective impObjective116 {
                verify imp31201;
                verify imp31202;
            }
        }
        verification impCase117 : MDSE_VER_31106::TestVER31106 {
            objective impObjective117 {
                verify imp31203;
            }
        }
        verification impCase118 : MDSE_VER_31107::TestVER31107 {
            objective impObjective118 {
                verify imp31204;
                verify imp31205;
            }
        }
        verification impCase119 : MDSE_VER_31108::TestVER31108 {
            objective impObjective119 {
                verify imp31206;
            }
        }
        verification impCase120 : MDSE_VER_31109::TestVER31109 {
            objective impObjective120 {
                verify imp31207;
                verify imp31208;
            }
        }
        verification impCase121 : MDSE_VER_31110::TestVER31110 {
            objective impObjective121 {
                verify imp31209;
                verify imp31210;
            }
        }
        verification impCase122 : MDSE_VER_31111::TestVER31111 {
            objective impObjective122 {
                verify imp31211;
            }
        }
        verification impCase123 : MDSE_VER_31112::TestVER31112 {
            objective impObjective123 {
                verify imp31212;
                verify imp31213;
                verify imp31214;
            }
        }
        verification impCase124 : MDSE_VER_31113::TestVER31113 {
            objective impObjective124 {
                verify imp31215;
                verify imp31216;
                verify imp31217;
                verify imp31218;
                verify imp31219;
                verify imp31220;
            }
        }
        verification impCase125 : MDSE_VER_31114::TestVER31114 {
            objective impObjective125 {
                verify imp31221;
                verify imp31222;
                verify imp31223;
                verify imp31224;
                verify imp31225;
                verify imp31226;
            }
        }
        verification impCase126 : MDSE_VER_31115::TestVER31115 {
            objective impObjective126 {
                verify imp31227;
                verify imp31228;
                verify imp31229;
                verify imp31230;
            }
        }
        verification impCase127 : MDSE_VER_31116::TestVER31116 {
            objective impObjective127 {
                verify imp31231;
                verify imp31232;
            }
        }

        verification modCase1 : MDSE_VER_31015::TestVER31015 {
            objective modObjective1 {
                verify mod31037;
                verify mod31038;
                verify mod31039;
                verify mod31040;
            }
        }
        verification modCase2 : MDSE_VER_31016::TestVER31016 {
            objective modObjective2 {
                verify mod31041;
            }
        }
        verification modCase3 : MDSE_VER_31017::TestVER31017 {
            objective modObjective3 {
                verify mod31042;
                verify mod31043;
            }
        }
        verification modCase5 : MDSE_VER_31019::TestVER31019 {
            objective modObjective5 {
                verify mod31046;
                verify mod31047;
            }
        }
        verification modCase6 : MDSE_VER_31020::TestVER31020 {
            objective modObjective6 {
                verify mod31048;
            }
        }
        verification modCase7 : MDSE_VER_31021::TestVER31021 {
            objective modObjective7 {
                verify mod31049;
            }
        }
        verification modCase9 : MDSE_VER_31022::TestVER31022 {
            objective modObjective9 {
                verify mod31050;
                verify mod31051;
            }
        }
        verification modCase10 : MDSE_VER_31023::TestVER31023 {
            objective modObjective10 {
                verify mod31052;
            }
        }
        verification modCase11 : MDSE_VER_31024::TestVER31024 {
            objective modObjective11 {
                verify mod31053;
            }
        }
        verification modCase13 : MDSE_VER_31026::TestVER31026 {
            objective modObjective13 {
                verify mod31056;
            }
        }

        verification modCase13 : MDSE_VER_31026::TestVER31026 {
            objective modObjective13 {
                verify mod31057;
            }
        }
        verification modCase14 : MDSE_VER_31027::TestVER31027 {
            objective modObjective14 {
                verify mod31058;
            }
        }
        verification modCase15 : MDSE_VER_31028::TestVER31028 {
            objective modObjective15 {
                verify mod31059;
                verify mod31060;
            }
        }
        verification modCase16 : MDSE_VER_31029::TestVER31029 {
            objective modObjective16 {
                verify mod31061;
            }
        }
        verification modCase17 : MDSE_VER_31030::TestVER31030 {
            objective modObjective17 {
                verify mod31062;
                verify mod31063;
                verify mod31064;
                verify mod31065;
            }
        }
        verification modCase19 : MDSE_VER_31032::TestVER31032 {
            objective modObjective19 {
                verify mod31068;
                verify mod31069;
            }
        }
        verification modCase20 : MDSE_VER_31033::TestVER31033 {
            objective modObjective20 {
                verify mod31070;
            }
        }
        verification modCase22 : MDSE_VER_31035::TestVER31035 {
            objective modObjective22 {
                verify mod31073;
                verify mod31074;
                verify mod31075;
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
