# Step 05 — Endpoint-specific relationship routing (2026-10-24)

**Status: typed mapping defined and two implementation conflicts corrected under D-0073; OD-01 still open.** The native model's last `## SysML v2` blocks and the historical source-rule quotations are unchanged.

## Authoritative source and machine-readable review

- [D-0073](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md) aligns the cross-owner temporal mapping and Workbench provisional trace action with D-0003/D-0010/D-0069/D-0070.
- [24-row typed endpoint routing](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/relationship-audit/STEP_05_TYPED_ENDPOINT_ROUTING.md) details `hasChild`, `dependsOn`, `participants`, `precedes` and `trace` by source/target and ownership, rather than generic YAML source/target classes.
- [JSON review matrix](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/relationship-audit/OD_01_ENDPOINT_ROUTING.json) includes per-row existing approval, syntax and acceptance-gate status; informational until OD-01 approval.

## Change and preserved model lineage

| Mapping family | Current action | Deliberately not decided |
|---|---|---|
| Owned `hasChild` | Typed owned part, action, state, requirement or use-case usages in valid native owners | Arbitrary note-to-model containment; no automatic folder-derived relationships |
| `dependsOn` | Native dependency for supported modeled elements; existing explicit administrative YAML dependency retained for MDSE notes | Final endpoint-specific split of generic dependency fields |
| Use-case `participants` | Existing Actor association → native `actor` usage; currently approved non-Actor part association remains YAML | Whether part is native subject/role; document vs actor role |
| Flow `precedes` | Shared-owner action flow → native succession; shared-owner state flow → native transition; no common owner → flagLink + review ledger | Valid cross-owner usage mapping; no inferred owners |
| Provisional `trace` | Workbench no longer offers an unchosen dependency; legacy modeled trace remains readable | When an explicitly justified trace dependency is semantically warranted |

**Historical preservation:** `[[IMP-116]]`, `[[IMP-116 - Analysis]]`, `[[REQ-31201 - IMP-116 Statement 1]]`, `[[REQ-31202 - IMP-116 Statement 2]]` and `[[VER-31105 - IMP-116 Rule Verification]]` have correction annotations only. The original pinned source, IDs, statuses and final SysML definition blocks are unchanged. **REQ-31202 is historical-only**, as the old cross-owner `precedes` YAML obligation is superseded. Existing typed usages are not removed without separate semantic review.

## Tests and remaining acceptance

- Added importer synthetic regression for a valid shared-owner succession and ownerless ControlFlow deferral retaining `flagLink`, ledger GUID and guard evidence. Added Workbench tests for refusing a new provisional trace even through direct API invocation and preventing retagging a dependency as provisional.
- The importer diagnostic registry records `FLOW_NO_COMMON_OWNER`; `Source: EA` carries the source event/guard/effect wording, while the connector GUID stays on flag and ledger per D-0026. The controlled source build/release workflow is [Rebuild MDSE importer release](https://github.com/spencerskelly/MDSE_v2/actions/workflows/rebuild-importer-release.yml).
- No native language/example parser fixture for each of the 24 rows is yet certified. The assembled-model parser evidence in Step 02 covers only its imported syntax graph; it is not full semantics. A full private QEAX import and real Workbench round trip are still required.
- `OD-01` remains open for exact MDSE-only field approval, native role/subject interpretation, inverse projections, schema migration and stale 109 language notes. The source vocabulary inventory (42 v1, 52 v2, 29 YAML) remains the broader Step 04 baseline.
