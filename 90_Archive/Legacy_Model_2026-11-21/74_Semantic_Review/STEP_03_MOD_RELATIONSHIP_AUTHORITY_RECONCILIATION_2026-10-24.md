# STEP-03 continuation — MOD-075 and MOD-076 SysML relationship authority (2026-10-24)

**Disposition: two Active legacy model-contract rules clarified at the normative source and historical live model annotated. OD-01 is deliberately open.** This is not a claim that the entire relationships schema or importer/Workbench implementation is reconciled.

## Baseline / decisions

- Step 02 independent assembled SysML model acceptance: [[STEP_02_INDEPENDENT_SYSML_PARSER_ACCEPTANCE_2026-10-24]]. The accepted compiled model had 583 native SysML notes, zero parser errors and 256 inherited-member warnings. Those warnings are not resolved by this documentary update.
- Existing authority: MDSE_v2 [D-0003](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md) (SysML holds SysML semantics), D-0010 (`flagLink` for unresolved links), D-0061 (semantic authority and justified trace). The present source change is [D-0069](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md), commit [1fe15676](https://github.com/spencerskelly/MDSE_v2/commit/1fe15676dd5b3e14a1ec2ff68b80cb7b574eef71).
- Original language is preserved at ruleset [bcdb25a11efa](https://github.com/spencerskelly/MDSE_v2/blob/bcdb25a11efa3ea14ba343949b01f797553c044d/governance/RULESET.md), separately in `70_Rule_References`, `71_Rule_Analysis`, and the original Draft candidate bodies.

## Current authoritative scope

| Rule | Historical overreach | Current governing meaning | Still not decided |
|---|---|---|---|
| MOD-075 | `relationships.yaml` from/to restrictions for **all** relationship kinds | Native SysML kind/typing/ownership determine native endpoints. YAML endpoint constraints may apply only to explicitly MDSE-only links. | OD-01 classification of each old YAML field; implementation and round trip |
| MOD-076 | Translator/Workbench store inverse fields broadly, without SysML-v2 separation | Native reverse relationships are computed from authoritative SysML text/index, **not mirrored in YAML**. An approved MDSE-only YAML relation may have derived inverse fields; its forward value is authoritative. | OD-01 approval of each MDSE-only pair; current code may still carry V1 behavior |

The `relationships.yaml` schema retains old entries as a **legacy inventory**, with a warning added to its header; D-0069 does not silently drop or reinterpret any individual field. OD-01 remains in `governance/OPEN_DECISIONS.md` and must not be reported closed.

## Historical source-to-derived lineage: preserved in place

| Origin | Rule reference / analysis | Draft requirement candidates | Draft verification case |
|---|---|---|---|
| MOD-075 | [[MOD-075]], [[MOD-075 - Analysis]] | [[REQ-31102 - MOD-075 Statement 1]] | [[VER-31053 - MOD-075 Rule Verification]] |
| MOD-076 | [[MOD-076]], [[MOD-076 - Analysis]] | [[REQ-31103 - MOD-076 Statement 1]], [[REQ-31104 - MOD-076 Statement 2]] | [[VER-31054 - MOD-076 Rule Verification]] |

- All nine existing files above now carry a specific D-0069/scope warning. The old source quotation, `sourceRevision` and `sourceRuleStatus: Active` are retained to document **historical** status. Do not treat a historical rule-reference `Info` wrapper as a native requirement or manufacture `#derivation`/`#refinement` to it.
- Original Draft requirement definition blocks, verification definition blocks, IDs, UIDs, primarySymbols, existing typed usages in [[MDSE Toolset Composition]], and `executionStatus: not-run` were preserved. All five edited final SysML text sections were compared exactly to their original contents before commit. Previously drafted objective-level `verify` usage is **not a passed or approved verification** of these old v1-style clauses.
- The revision has **not** certified reader, editor, inverse projection, or YAML-contract interoperability in running Obsidian. That acceptance remains separate.

## Remaining Active rule candidates for focused review

| Rule | Why flagged | Recommended disposition to review |
|---|---|---|
| MOD-028 | Orders relationship YAML fields using the entire legacy `relationships.yaml` | Scope to **approved MDSE-only** fields after OD-01; do not impose v1 order on SysML semantics |
| MOD-012 | Global token namespace expressly includes V1 Local Model records | Review with OD-08 and stable v2 usage identity OD-03; do not reuse or erase identities |
| IMP-115 | Allows provisional `tracesTo` YAML for some imported relationships | Conflicts with approved MOD-073/D-0010 `flagLink`; preserve source and flag unresolved semantics, avoid silent rerouting |
| MOD-118 | Says active development belongs in the old 20+ V2 workspace, with cross-version compatibility constraints | Update to `MDSE_v2` toolchain plus `MDSE_v2_live` engineering-model boundary; retain archives as evidence |
| IMP-096 | Describes package placement as completely recoverable from folders | Reconcile D-0067 capped EA paths plus Source: EA `Package` line on cut cases; preserve owner/provenance |
| MOD-095 | Historical approximate 5–6 levels / implicit collapse advice | Clarify interaction with now-Active MOD-174 six-folder import cap, without changing user-owned paths |
| IMP-118 | V1 `participants` YAML for some use-case associations | Verify native SysML actor/subject forms and available MDSE-only classification before mapping |

These are **review candidates, not approved replacements**. OD-01 should be handled with a field-level disposition matrix and regression tests, not a wholesale schema deletion.

## Validation gates

1. `MDSE_v2` governance/rule-register checks must pass. CI at D-0069 initially failed **only the stale importer HTML release-artifact check**, following concurrently changed importer sources; the release-rebuild workflow was triggered separately. Do not call the source revision green without fresh CI evidence.
2. Run live integrity/lineage, Workbench native-edge checks and independent SysML parser CI after this documentation change. Its final native SysML bytes should be unchanged, but a fresh gate is needed to make a new-commit acceptance claim.
3. For OD-01, classify every `relationships.yaml` entry by native SysML availability and MDSE-only reason, specify canonical owner, inverse/disposition behavior, navigation and round trip; test actual importer and Workbench instances.
4. Revisit historical typed usages and verification objectives only under a separate semantic/impact decision. The existing model and earlier evidence are deliberately preserved for comparison.

## OD-01 field-by-field triage (not approved)

A complete 29-field candidate inventory now exists at [[OD_01_LEGACY_RELATIONSHIP_FIELD_TRIAGE_2026-10-24]]. It isolates native candidates, MDSE-only candidates and ambiguous mappings, including the D-0010/D-0045 `tracesTo` conflict. No fields are removed from the shared schema or implemented by this worksheet.

## Step 03 extension — D-0070

The follow-up importer/source-governance conflict is reconciled by [D-0070](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md): no new provisional `tracesTo` links are written; unresolved MDSE-note connectors become `flagLink` and `deferred_review` evidence. MOD-028 now scopes YAML relationship-field ordering only to approved MDSE-only relationships. Earlier decisions and original derived notes remain historical. See [[STEP_03_PROVISIONAL_LINK_RECONCILIATION_2026-10-24]]. OD-01 stays open for complete migration of legacy fields.
