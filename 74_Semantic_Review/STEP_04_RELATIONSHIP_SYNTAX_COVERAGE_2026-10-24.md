# Step 04 — complete relationship inventory and SysML v2 syntax coverage review (2026-10-24)

**State: complete inventory classification, incomplete proof of syntax/semantic/implementation coverage.** Do not interpret a catalog entry, language-name match, or the Step 02 independently parsed assembled vault as proof that every construct is implemented correctly. This review makes the missing evidence explicit rather than claiming full certification.

## Sources of truth and compared sets

- **SysML v2 language:** OMG formal/2026-03-02 specification: https://www.omg.org/spec/SysML/2.0/Language/PDF; syntax operators `:`, `:>`, `::>`, `=>`, `:>>` are distinct.
- **Attached inventory:** `SysML_v1_v2_MDSE_Complete_Inventory_and_Relationship_Matrix.xlsx` with 42 SysML v1 relationship rows, 52 SysML v2 relationship rows (51 unique names, duplicate Dependency), and 20 MDSE relationship terms.
- **Governed tool catalog:** `MDSE_v2/governance/language/catalog.json` has 31 entries classified `kind: relationship`. Direct name/synonym matches exist for 28 of the 52 workbook rows. The remaining 24 require explicit catalog linkage or documented coverage through another construct kind; they are not proven unsupported by OMG.
- **Active v1-style source inventory:** 29 forward legacy relationship fields in `governance/schemas/relationships.yaml`; D-0069 says it is not native relationship authority, D-0070 retires new `tracesTo` writes; OD-01 is still open.
- **Runtime:** `tools/importer/src/run.ts`, `tools/workbench/src/edit.ts`, `tools/workbench/src/index.ts`. The Workbench exposes 12 editorial relationship choices; EA resolver enumerates 30 connector families. Those counts are not coverage percentages.

## Crosswalks committed to the authoritative tool repository

- [All 42 v1 relationship forms and v2 translation proposals](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/relationship-audit/SYSML1_TO_V2_42_RELATIONSHIP_TRANSLATION.md)
- [All 52 v2 relationship inventory entries cross-referenced to the language catalog](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/relationship-audit/SYSML2_52_RELATIONSHIP_INVENTORY_COVERAGE.md)
- [All 29 historical YAML fields: native, MDSE-only, split, review or retired](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/relationship-audit/OD_01_29_FIELD_NATIVE_SYNTAX_CROSSWALK.md)

## Reconciliation of the workbook's 20 MDSE-specific relationship names

These are a **historical engineering taxonomy**. Not all are valid current YAML fields or direct SysML v2 textual relationship keywords.

| MDSE term in workbook | Current semantic candidate / disposition |
|---|---|
| `partOf` | derive from native owned part usage; do not write independent inverse |
| `usedIn` | derive 'where used' from typed usages/reference usages; not standalone native keyword |
| `subtypeOf` | native definition specialization `:>` |
| `variantOf` | native variation/variant candidate; exact syntax and ownership require review |
| `performs` | native `perform action` by eligible owner |
| `realizedBy` | typed `perform` or `allocate` depending on endpoints |
| `satisfies` | native `satisfy` with valid satisfier/requirement context |
| `verifies` | native verification objective `verify`, execution separate |
| `connectsTo` | native `connect` with ports and common owner; not generic graph adjacency |
| `exposes` | ambiguous: interface exposure vs native *view* `expose`, not synonyms |
| `describes` | MDSE-only informational YAML |
| `affects` | MDSE-only Issue/FailureMode YAML; check causation overlap |
| `optionOf` | optional use-case usage `[0..1]`, not automatically v1 extend-equivalent |
| `requiredStep` | native `include use case` for actual required include |
| `dependsOn` | native dependency for formal model; MDSE-only admin link requires decision |
| `supersedes` | MDSE administrative version/revision meaning; BOM uses `// supersedes` tag |
| `hasPart` | derived reverse structural navigation; never independently stored YAML |
| `hasVariant` | derived reverse navigation, only once variantOf semantics accepted |
| `hasInterface` | proposed; port/interface usage or a non-native note relation after endpoint review |
| `implements` | proposed; cannot silently equate software implementation with perform |

## Required separation of relationship semantics

1. **Definition identity and variation:** specialization, subsetting, reference subsetting, redefinition, feature typing, alias and variation/variant require separate rules; a common WikiLink renderer must never conflate them.
2. **Ownership:** component structure is typed part usage (and explicit multiplicity), not folder nesting or YAML `hasPart`. Reference usages do not transfer ownership. A note containing a definition is distinct from every use of that definition.
3. **Topology:** connection, binding and flow have different consequences. A normal connector is not proof of a transfer, nor does an association imply port connectivity. Ports used as parts remain visible through qualified endpoint paths.
4. **Behavior/time:** succession, transition, message/flow and causation are distinct. A guarded StateFlow is a transition, not a generic `precedes` label. A message may carry payload and direction; a causation statement denotes causal effect, not chronological order.
5. **Requirements and verification:** derivation, refinement, containment/decomposition, satisfaction, verification and allocation are distinct. Verify belongs to a verification objective/case, not test execution results. Never synthesize `satisfy` from a folder or documentation link.
6. **MDSE descriptive evidence:** `describes`, `affects`, historical aliases, source identity and `flagLink` stay outside native SysML when no equivalent semantics exist. Do not invent SysML relationship keywords or persist a YAML inverse of a native edge.

## Step 05 continuation — typed routing under D-0073

[D-0073](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md) prohibits the importer from creating ownerless YAML `precedes` on ControlFlow/StateFlow and blocks creation of new provisional trace dependencies in the Workbench. Existing evidence is preserved and the full endpoint-specific review matrix is at [[STEP_05_TYPED_RELATIONSHIP_ENDPOINT_MAPPING_2026-10-24]]. The broad list of gaps below is a historical Step 04 snapshot; Step 05 supplies code/test status. OD-01 remains open for `hasChild`, `dependsOn`, and `participants` interpretation.

## Verified gaps in current code, requiring dedicated fixes/tests

| Priority | Source | Problem / acceptance criterion |
|---|---|---|
| P1 | `tools/importer/src/run.ts`, IMP-116 | A cross-owner ControlFlow/StateFlow may become YAML `precedes`. Must either produce an explicitly valid native owner/context or a flagged unresolved connector; test with unique and ambiguous ownership fixtures |
| P1 | `tools/importer/src/run.ts`, IMP-118 | UseCase-to-part association writes YAML `participants` without resolving actor/subject/other semantic roles. Distinguish real native roles from MDSE-only informational participation |
| P1 | `tools/workbench/src/edit.ts` | Editor still offers `trace` for an unchosen relationship. D-0010/D-0070 direct unresolved cases to `flagLink`. Preserve explicit modeled dependency meaning separately, block unsupported provisional edges |
| P1 | `governance/schemas/relationships.yaml` | Old `tracesTo` explanatory guidance contradicts its D-0070 read-only header. Retain history and update current shipped/reader contract in OD-01 migration |
| P1 | Language catalog / importer / Workbench | Need an evidence matrix per construct: source endpoint kinds, grammar, editor operation, scanner/index, structural and visual rendering, parser, semantic validation and round-trip; catalog has documentation, not universal parser proof |
| P2 | `MOD-012`, OD-03/OD-08 | Separate obsolete Local Model identity assumptions from native v2 usage identity; do not merge/reassign without proven stable reference behavior |

## Acceptance criteria for calling relationships 'mapped and clear'

- Every source connector has exactly one semantic native / explicitly MDSE-only / evidence-only / flagged disposition. Every old field and workbook concept is classified, even if result is **open**.
- Every native construct actively emitted or edited has a minimal standalone valid SysML v2 test, accepted by the pinned independent parser, plus endpoint/owner semantics and Workbench navigation and round-trip checks.
- Each relationship has an in-place language note documenting source kind, target kind, direction, ownership, multiplicity, syntax and neighboring constructs it must not be confused with; surface 'read-only' distinctly from 'editable'.
- No assertion is duplicated in YAML, Source: EA, SysML text or an authoritative index. Derived inverses are projections only.
- Any ambiguous connection remains a review marker and the original evidence remains recoverable. No Draft derived requirement is promoted and no verification execution is implied by this review.

**Status:** inventory audited and categorized; OD-01 and the named implementation/parser/view acceptance gates remain open. No native model source was changed by this report.

## Canonical language reference sync — 2026-10-24

Comparison with `MDSE_v2/governance/language/sysml-v2` found **15 missing canonical Markdown notes** in the live `99_System/04_Language` (109 present vs 124 current). All 15 missing files were copied **unchanged** from the current tool-source canonical notes. The read-only category views now embed these additions: five in Relationship, seven in Annotation, two in Structure and one in Usage. The `55_Language/Relationship` assembled view therefore contains the 31 documented relationship-kind notes in the source catalog, up from 26.

This sync updates language documentation/managed vault files. It does **not** change the native SysML model definitions, approve an unverified syntax example, establish semantic equivalence or close OD-01.

### Source equality check (qualification)

A Git blob comparison after the 15-file sync found **124/124 canonical filenames present**, **15 freshly added notes byte-identical** to current MDSE_v2 source, and **109 pre-existing notes differing** from current source. Sample differences include missing `category` metadata and shorter older support-status explanations in `Redefinition`, `Satisfy`, `Dependency` and `Part usage`. Those 109 files were deliberately **not overwritten** in this review to avoid an unreviewed wholesale managed-vault rewrite. Their content is still stale relative to the current authoritative tool repository.

The category view now discovers all 31 relationship-kind note names, but **full current-text conformance of existing language notes is not yet established**. Next task: controlled Base Vault/Importer toolset-update synchronization, diff review and post-update integrity tests. Do not call the managed language content wholly synchronized until this is done.

## Workbook directed from/to matrix — separate unvalidated legacy contract

The attached workbook's `MDSE From-To Matrix` is **43×43** (1,849 potential ordered pairs): **668 populated pairs**, **1,181 blank**, and **21 distinct populated rule-expression profiles**. The most common expression combines `connectsTo*`, `dependsOn*`, `supersedes*`, `partOf` and `subtypeOf*` without showing typed native v2 ownership/endpoints. It is **not** an independently validated current v2 relationship eligibility matrix. Blank cells are not proof that a relation is impossible, and a filled cell is not proof that it maps to valid native SysML.

A separate `Endpoint Matrix Review` sheet in the updated spreadsheet records these counts and profiles without changing the original 43×43 historical matrix. A future typed native-v2 eligibility matrix must be derived from v2 model element/usage kinds, ownership and approved semantics, with individual parser and Workbench assertions. Do not mechanically adopt the old generic matrix.
