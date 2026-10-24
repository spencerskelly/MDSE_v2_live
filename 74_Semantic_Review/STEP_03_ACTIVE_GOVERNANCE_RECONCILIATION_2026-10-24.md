# STEP-03 — Active governance reconciliation (2026-10-24)

**Disposition: targeted GOV/DAT governance reconciliation complete; broader model-contract rule audit remains open.** Rule authority was updated in `MDSE_v2` by [D-0066](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md), commit [3a976e15](https://github.com/spencerskelly/MDSE_v2/commit/3a976e15d391749ac93fbf27aaef300d9eccef40). This review neither promotes Draft requirements nor executes verification cases.

## Baseline and limits

- Prior Step 02 blocking independent SysML parser pass: [CI 40117753196](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40117753196), 583 native SysML notes, 0 errors, 256 nonfatal inherited-member warnings, model SHA-256 `fbdb471e91d692dc56a404ca86295c3ac76816a72124267c4d33b675ac1957b3`.
- Governance authority: `MDSE_v2/governance/RULESET.md`, with owner decisions in `DECISIONS.md`. The original 2026-10-22 rule snapshot was [bcdb25a11efa](https://github.com/spencerskelly/MDSE_v2/blob/bcdb25a11efa3ea14ba343949b01f797553c044d/governance/RULESET.md).
- `70_Rule_References` and `71_Rule_Analysis` are historical **Info** notes, excluded from compiled native SysML. `sourceRevision`, `sourceRuleStatus: Active`, `ruleStatus: Active`, source quotations and candidate clauses are preserved as at their historical source revision, not rewritten as new authority.

## Rule dispositions

| Rule | Former Active conflict | Current disposition | Current authority |
|---|---|---|---|
| GOV-006 | Authorized pushes on archived Test_Vault_ | **Retired** | GOV-001 (main/CI), GOV-005 (MDSE_v2 tool source) |
| GOV-018 | Required folders to follow EA package hierarchy and cited legacy cleanup | **Retired** | GOV-017 supports managed `99_System`; D-0067 subsequently activated MOD-174 with a 6-folder cap |
| GOV-017 | Valid single-vault P1 scope mixed with old Test_Vault_ workspace positioning | **Rewritten, Active** | One vault at a time; cross-vault deferred; live self-model separate from tool authority |
| DAT-001 | Restricted protected data specifically in Test_Vault_ | **Rewritten, Active** | Private data excluded from current public repos; parser-only passes do not prove engineering acceptance |
| DAT-002 | Valid protected-data rule mixed with obsolete Test_Vault_ method/tool authority | **Rewritten, Active** | Public MDSE self-model and synthetic fixtures allowed; private real data prohibited; MDSE_v2 remains tool authority |

## Historical lineage preserved

- Updated **5** existing rule-reference notes and **5** corresponding source-analysis notes with a current-governance warning, while leaving source text, IDs, original Active snapshots and original source links unchanged.
- Updated **15** existing Draft derived-requirement candidate notes with a Step 03 disposition before their final `## SysML v2` block. The SysML tail of each edited note was checked byte-for-byte against its pre-edit source; no SysML definition, typed usage, native relationship, identity or status was changed.
- **Six obsolete-clause candidates held as historical only:** `REQ-31011`, `REQ-31012` (GOV-006), `REQ-31028` (GOV-017 Test_Vault_), `REQ-31029`, `REQ-31030` (GOV-018), and `REQ-31036` (DAT-002 Test_Vault_). No positive acceptance claim is made from those candidates.
- `REQ-31031` (old DAT-001 public Test_Vault_ clause) is a **re-scope candidate**, not silently retired: its data-protection intent survives with broader public-repository coverage. Other GOV-017 and DAT-001/DAT-002 Draft clauses also require comparison with the revised source before any promotion.
- Existing GOV/DAT trace review notes and G01 review are updated as historical assessments. Source-to-note trace navigation stays intact; **no fabricated native SysML derivation/refinement to an Info reference** was introduced.

## Validation and remaining actions

1. Source-level preservation: the five pinned quotations and all fifteen final SysML sections were left intact; inspect resulting GitHub commits for the documentary-only delta. **A fresh post-edit independent parser CI pass is required to extend the Step 02 acceptance claim to the new live commit.**
2. Run/read the lineage and link-integrity audit on the updated vault. Original snapshot rule-status fields intentionally remain historical while normative source status has changed; audit should distinguish those meanings.
3. Review the historical typed requirement usages and held objectives in `50_Architecture/MDSE Toolset Composition.md`. They remain in the parser-accepted graph as evidence of how candidates were modeled; they are not approved current requirements. Do not delete or rewire them without a separate impact/semantic review.
4. Audit other contradictory **Active** v1 model-contract rules separately, especially MOD-075 and MOD-076 (YAML relationship endpoints/inverses) against D-0003 and open OD-01. The present Step 03 pass intentionally focused on the explicit GOV/DAT scope in the Step 02 handoff. D-0067 independently resolves the former folder-cap proposal: MOD-174 is now Active with cap 6. This does not reinstate GOV-018's old EA-package-as-authority rule.
5. Step 01 navigation defects, Step 02's 256 inherited-member warnings, real Obsidian interaction testing, and private EA/BOM semantic acceptance are still open and unrelated to this governance reconciliation.

No folder-depth cap is set **by D-0066**; the subsequently approved D-0067 cap is 6. No user approval of candidate requirements, successful verification execution, new semantic SysML relationship, or implementation completion is inferred here.

## Continuation — MOD relationship authority (D-0069)

After this original GOV/DAT disposition, [D-0069](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md) clarified Active MOD-075 and MOD-076. Native SysML relationship endpoint rules and reverse links come from authoritative SysML semantics, not legacy `relationships.yaml`. OD-01 remains open for MDSE-only field classification. Two historical rule reference notes, two analyses, three Draft requirement notes (`REQ-31102`–`REQ-31104`) and two Draft verification cases (`VER-31053`, `VER-31054`) were annotated, preserving their SysML source. See [[STEP_03_MOD_RELATIONSHIP_AUTHORITY_RECONCILIATION_2026-10-24]] for the continuation and follow-up rule inventory.
