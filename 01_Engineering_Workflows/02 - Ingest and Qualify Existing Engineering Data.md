# Workflow 02 — Ingest and Qualify Existing Engineering Data

**Engineer goal:** Reuse the knowledge held in existing engineering systems without recreating it manually or corrupting an already-reviewed design. The source documents may include EA models, manufacturing BOMs, wire lists, PCBAs, drawings, manuals, tests and supplier records.

**Workbench:** Start in **Document** for intake/provenance and use **Structure/Define/Verify** to review imported meaning. Importer is a separate offline utility; the review, navigation and correction experience returns to the single Workbench.

## Starting conditions

Select a source repository and an **explicitly identified vault**. Establish the product line, source owner, revision/effective date, approved/obsolete status, licensing and target import scope. Obtain a source backup/fingerprint; record import tool version and released source.

## Engineer journey

| Step | Engineer activity | Information/process checks | Output |
|---|---|---|---|
| 1. Choose evidence | Select QEAX, BOM, wire list, drawing collection or existing test record | Is source current? Authoritative for what? How is its revision represented? | Controlled intake record |
| 2. Inventory | Count tables/rows, sheets, files, nested references, attachments and key fields | Missing PNs, duplicates, path suffixes, embedded docs, contradictory revisions | Coverage and quality report |
| 3. Identify entities | Match stable source IDs, PNs, approved revisions and aliases against existing vault | Reusable definition vs owner-specific usage; revision vs base PN; identity conflicts | Candidate entity map |
| 4. Plan mapping | Classify structural parts, interfaces, actions, requirements, drawings, measurements and provenance | Allowed native SysML syntax vs administrative YAML vs source-only evidence | Previewed translation/mapping |
| 5. Reconcile changes | Compare to existing notes and exact revisions; select authorized fields to update | Protect user zone, source row lineage and earlier model meaning | Conflict list with owner |
| 6. Validate before write | Check every source row disposition, referenced endpoint and planned file path | Unknown families, unsupported document formats and missing links must be flagged | Reviewed import plan |
| 7. Apply in staging | Run controlled Importer and preserve before-images | No hidden overwrites; fail visibly on stale-preview, permission and collision | Notes + source ledger + log |
| 8. Review in Workbench | Search representative PNs, inspect assembly hierarchy, BOM pins, ports and linked documents | Compare to independent source reading; inspect unresolved flags | Accepted/flagged imported knowledge |
| 9. Reimport test | Run same source again, then a controlled changed revision | Idempotence; approved changes only; exact preserved local edits | Import release evidence |
| 10. Publish accepted intake | Sign off coverage and map unresolved work to owners | Parser and real data check required before declaring model reliable | Import acceptance checkpoint |

## Example: charger BOM and harness collection

For a new controller or power module, begin with the released electrical drawings, hierarchical assembly BOM, control board PCBA BOM, cable/harness wire lists, FW configuration and manufacturing test plan. Preserve one reusable part concept with revision-specific definitions where policy requires them; each parent assembly owns usages with **the installed revision**, quantity and unit. A wire list defines which connector pin links to which endpoint; two cables sharing a PN are not assumed electrically interchangeable unless pin configuration and revision match.

A drawing PDF or SolidWorks output remains a *versioned source document* unless a dedicated content extractor has been validated. A matching filename is a candidate attachment, not proof of a validated electrical connection.

## Critical data distinctions

- **Original file:** exact bytes, source/owner, revision/effectivity and checksum.
- **Imported administrative record:** metadata and source disposition.
- **Modeled item:** reusable SysML definition or explicit usage owned by its actual assembly.
- **Graphical artifact:** derived Canvas/view, not independent semantics.
- **Unresolved source:** review flag with original reference and reason, not a guessed relationship.
- **Controlled release:** authorization by the organization's quality/PLM process, not an import success message.

## Handoff and acceptance

The engineer can account for the full selected source scope, prove imported note identity, demonstrate parent-child and wire endpoint accuracy using independent samples, and provide source-to-note trace. An ambiguous BOM revision or connector must have a named owner and a correction plan.

- **INT-01:** Every supported source row has exactly one disposition.
- **INT-02:** No UID collision or duplicated authoritative concept.
- **INT-03:** Same source reimport results in no unauthorized changes.
- **INT-04:** Pinned child revisions and quantities reconcile to the released BOM, not newest available.
- **INT-05:** Link to a selected original drawing/wire list preserves exact revision/effectivity.
- **INT-06:** Unknown connectors and unsupported PDF/DOCX/image extraction remain explicitly unresolved.
- **INT-07:** Native SysML parser and tool/vault version checks provide independent evidence.
- **INT-08:** Interrupted updates preserve verified backups and report any incomplete rollback.

**Current support:** QEAX and selected BOM structures in Importer, preview/merge/ledger, safe managed update; general wire-list/drawing/standalone DOCX/PDF ingestion is not established. This workflow specifies the target behavior without claiming its current availability.

**Next:** [[01 - Find and Investigate Engineering Information]] to use the model, or [[03 - Define Need, Requirements and Acceptance]] to define a product opportunity.
