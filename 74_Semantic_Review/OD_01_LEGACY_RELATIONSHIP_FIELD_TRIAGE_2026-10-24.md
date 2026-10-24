# OD-01 — Complete legacy relationship-field triage for review (2026-10-24)

**Disposition: PROPOSED CANDIDATE MATRIX; NO FIELD IS PROMOTED BY THIS DOCUMENT.**

**D-0070 update:** The one `tracesTo` decision conflict is resolved **for new importer writes**: the field is prohibited as a provisional semantic assertion and replaced by `flagLink` plus deferred ledger evidence. Legacy `tracesTo` values still need migration under OD-01; the original 29-field counts below remain a snapshot of pre-D-0070 triage. The source catalog is [governance/schemas/relationships.yaml](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/schemas/relationships.yaml); its header explicitly warns that it is a V1 inventory under revision. This matrix is a human review aid to implement open [OD-01](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/OPEN_DECISIONS.md) under accepted D-0003/D-0061/D-0069.

## Scope and classification

- **29 unique forward-side fields**: 24 from `paired`, 1 from `symmetric`, and 4 from `oneWay` in the original schema. Inverse names are derivative aliases, not additional forward categories.
- **13 native candidates**, **6 MDSE-only candidates**, **9 semantics requiring endpoint/context review**, and **1 explicit contradictory-decision case**. These are working dispositions, **not approvals**.
- A field categorized Native still requires type/owner/direction compatibility; a field categorized MDSE-only still requires an accepted reason it cannot be expressed in SysML. Some old fields may need splitting by endpoint type rather than a single destination.

| Legacy field | Proposed triage | Evidence / validation question |
|---|---|---|
| `subtypeOf` | Native candidate | specialization; do not preserve a YAML subtypeOf mirror |
| `hasPart` | Native candidate | owned part usage with typed definition and multiplicity |
| `hasChild` | Review | nested owned usage when SysML; informational note ownership needs separate MDSE semantics |
| `hasState` | Native candidate | state usage and exhibition/ownership as applicable |
| `includes` | Review | use case inclusion or reference usage; old generic membership is not automatically equivalent |
| `copyOf` | Review | SysML alias only with proven identity; preserve old copy provenance if non-equivalent |
| `dependsOn` | Review | native dependency for model elements; MDSE-only source/workflow dependencies require separation |
| `derivedFrom` | Native candidate | standard-library requirement derivation (#derivation), direction verified |
| `refines` | Native candidate | standard-library refinement metadata (#refinement), native endpoints |
| `drives` | Review | causation versus influence/document link must be distinguished; do not assume YAML-only |
| `references` | MDSE-only candidate | descriptive/source-reference navigation, not a duplicate native dependency |
| `precedes` | Native candidate | succession for ordered occurrences/flows |
| `triggeredBy` | Native candidate | transition triggers/accepts as appropriate, not generic YAML pair |
| `supersedes` | MDSE-only candidate | administrative note replacement/provenance unless native element semantics proven |
| `describes` | MDSE-only candidate | informational note/document describes target, outside native model |
| `tracesTo` | Resolved for new writes (D-0070); legacy migration open | New imports produce `flagLink` and `deferred_review` instead of `tracesTo`. Existing values remain historical; OD-01 must still classify/remove the old schema entry. |
| `performs` | Native candidate | perform action usage / owning behavior in SysML |
| `hasDesign` | Review | legacy design/condition mapping must reconcile with native exhibit/state/satisfaction |
| `appliesTo` | Native candidate | requirement subject/objective appropriately typed |
| `satisfies` | Native candidate | native satisfy between qualifying requirement and model element |
| `verifies` | Native candidate | native verify with verification case/objective |
| `realizedBy` | Review | reconcile endpoint meaning with perform/allocate; no generic 1:1 conversion |
| `optionOf` | Review | SysML optional use-case usage versus old extend/option relation |
| `affects` | MDSE-only candidate | Issue/Failure Mode evidence; distinguish actual native causation when applicable |
| `conflictsWith` | MDSE-only candidate | administrative incompatibility evidence unless explicit native constraint applies |
| `participants` | Review | native use-case actor/subject vs MDSE-only documents or other participating references |
| `initialState` | Native candidate | native initial/entry semantics and owned state usage |
| `finalState` | Native candidate | native final/done semantics and transitions |
| `aliasOf` | MDSE-only candidate | temporary merge marker D-0034; not automatically SysML alias |

## Validation and migration contract to decide

1. For each field, record exact allowed source/target *native kinds*, owner of the statement, mapping to the approved 2026-04 SysML standard library where possible, direction and relationship identity. Decide whether a MDSE-only link remains in frontmatter with a schema entry.
2. Prove that no SysML-native relation is duplicated in YAML, frontmatter reverse fields, `Source: EA`, importer outputs, or Workbench edits. Workbench search, graph, table and canvas projections must derive the same semantic edge from the authoritative final SysML block.
3. MDSE-only forward links need a stable identity/ownership rule; inverse projections must be clearly derivative and never override the forward. Resolve whether inverse YAML persistence should survive or be replaced with computed index edges. This is a specific OD-01 implementation choice, not decided merely by rewriting MOD-076.
4. Test round trips and re-import: existing legacy values are preserved as review evidence until accepted native conversion; unresolved endpoints become `flagLink` under D-0010, not silently dropped. **The `tracesTo` ambiguity between D-0010 and D-0045 is a decision conflict**, not a reason to auto-convert all old references to dependencies.
5. Verify representative cases with parser, Core, Importer and Workbench native relationship controls, then choose whether to update the shared schema and shipped `99_System` copies as one versioned change. Do not delete a legacy schema entry before reference and importer usages are inventoried.

## Immediate priority after D-0069

**P1:** resolve `tracesTo` vs `flagLink` and semantic ownership of `hasChild`, `dependsOn` and `participants` (all can cross the SysML/MDSE-only boundary). **P2:** mechanically migrate native candidates with preserved source provenance and parser/graph regression tests. **P3:** narrow `MOD-028`, `MOD-012`, `MOD-118`, `IMP-115` and `IMP-096` under separate decisions, as identified in [[STEP_03_MOD_RELATIONSHIP_AUTHORITY_RECONCILIATION_2026-10-24]].

This ledger does **not** decide OD-01 or indicate current implementation support, execution results or approved engineering requirement text.
