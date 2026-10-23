# Initial native requirement-linking pass — 2026-10-23

**Status:** Draft trace proposal applied to model notes; static structural checks passed. **Not** an independent SysML v2 parser certificate, implementation acceptance, or engineer approval.

## Scope and authority

This is an incremental continuation of [modeled relationship review](MODELED_RELATIONSHIP_TRACE_REVIEW.md), based on the wording already carried in the four existing model notes. The `## SysML v2` section owns all two new native relations. Markdown `[[links]]` are navigation only. No new definition, note identity, approval status, tool implementation, release artifact, rule or test verdict was created.

| Owning note | Draft native relationship | Engineering interpretation |
|---|---|---|
| [[Import an Engineering Model]] (UC-00001) | `dependency from ImportEngineeringModel to MDSE_REQ_00001::RecordRowDisposition;` | Import scenario depends on a source-row disposition obligation; no satisfaction or formal verification asserted |
| [[Account for Every Source Row]] (REQ-00001) | `#refinement dependency from RecordRowDisposition to MDSE_STK_00003::StakeholderNeed03;` | Specific source-row-accounting requirement elaborates [[Preserve Imported Knowledge]] (STK-00003) |
| [[Preserve Imported Knowledge]] (STK-00003) | Inbound link documented, without duplicating SysML | Engineering requirement and import scenario elaborate distinct aspects of the need |
| [[Reconcile Source Records]] (BEH-00001) | `flagLink` only, no invented relation | The earlier `constrainedBy` proposal has no demonstrated exact typed mapping in the current context |

## Relationships already present and deliberately unchanged

- `MDSE_OBJ_00006::MDSEToolset` owns `sourceRowDisposition` as a typed requirement usage, allocates it to `importer`, and owns the `sourceDispositionCheck` verification usage with an objective verifying that local requirement usage.
- `MDSE_BEH_00002::IngestEngineeringSources` already contains the typed `reconcileSourceRecords` action usage; the Importer already has a performed ingestion action.
- The UC-00001 relationship to STK-00003 already exists as a separate refinement. This pass does **not** add another copy.

## Checks actually performed

- Read the current four notes on the live `main` branch, and edited only anchored existing passages.
- Preserved stable `id`, `uid`, `primarySymbol`, `status: Draft`, and existing SysML text.
- Checked that each touched model note keeps exactly one terminal `sysml` fence with balanced braces.
- Checked that both new qualified targets are pre-existing modeled definitions: `MDSE_REQ_00001::RecordRowDisposition` and `MDSE_STK_00003::StakeholderNeed03`.

## Acceptance still outstanding

1. Compile a namespace-consistent live model and run the independently pinned SysML v2 parser. No parser run was available in this edit session. In particular, validate the new `#refinement` use on a requirement definition and the cross-package dependency on a use-case definition.
2. Test Workbench inbound/outbound indexing and preview rendering of the two new edges, including regeneration of the saved Canvas from authoritative model text. Do **not** edit saved Canvas edges as an alternative to parsing the model.
3. Engineer-review the semantic meaning of the dependency and the refinement; keep both Draft until accepted.
4. Resolve the flagged function-to-requirement obligation using a semantics-preserving native construct, if available. Do not reinterpret a constraint as a mere dependency solely to make a visual edge.
5. Expand to other requirement-to-need and requirement-to-function traces, taking care not to duplicate the already authored allocation and verification usages.

No CI, parser, Workbench runtime, Obsidian desktop or verification execution result is claimed for this pass.
