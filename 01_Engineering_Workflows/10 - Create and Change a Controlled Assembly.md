# Workflow 10 — Create and Change a Controlled Assembly

**Status:** Proposed workflow v0.1, 2026-11-22; **not implemented or approved as a production process**.
**Architecture:** [[00_Tool_Definitions/08 - Configuration Registry and Release Service|Configuration Registry and Engineering Release Service]].
**Accepted decisions:** MDSE will issue new engineering part numbers and engineering releases after applicable gates. Existing SOLIDWORKS PDM remains authoritative for native CAD files and check-in/out during the initial transition. Legacy information is indexed and promoted on demand, not reconstructed as all-model-notes.
**Related:** [[04 - Develop Architecture and Detailed Design]], [[06 - Manage Change, Redlines and Impact]], [[07 - Release Design to Production]], [[02 - Ingest and Qualify Existing Engineering Data]].

## 1. Engineer goals and entry contexts

**Primary jobs:** create a physical assembly, create a reusable unnumbered engineering definition, modify an unreleased assembly, or propose a revised assembly based on an exact released configuration. Any physical part number is issued once by the MDSE Configuration Registry, never by choosing a filename or typing into a model note.

**Starting context:** an open modeled assembly/note, selected SysML part usage, a selected Canvas card, a PN or known revision from search, an ECR/ECO, or the explicit **Create assembly** action without any current modeled note.

The Structure workflow remains **in one Workbench panel or pop-out**. Selecting tools/actions changes Workbench content; editing/opening Markdown notes, Canvases or intended Bases opens distinct reusable Obsidian editor tabs. Follow/Pin semantics remain separate; editing pins the target. Search is the deliberate way to bring unrelated existing parts or source records into a contextual change.

### Workbench Structure — proposed action groups

| Action | Starting input | Intended output |
|---|---|---|
| **Create assembly** | Product context or no selected source | New unnumbered model definition **or** numbered physical assembly + draft revision |
| **Edit assembly** | Draft assembly revision | Previewed additions, removal, quantity, source, alternate or effectivity change |
| **Revise released assembly** | Exact immutable released PartRevision/BOM baseline | New draft revision candidate based on the selected release, never an in-place edit |
| **Add existing part** | Selected assembly and explicit catalog query | Owned BOMLine with exact/reviewed child revision and separate optional model binding |
| **Create new part** | Selected assembly and approved numbering series | Reserved/assigned PN and draft PartRevision; optional governed model definition |
| **Replace part** | Selected BOM usage | Either a **new revision of the same part** or a **new distinct part identity**; engineer selects intent |
| **Review impact** | Candidate change and baseline | Per-parent/variant where-used paths, fit/form/function assessments and unresolved coverage |
| **Prepare release** | Approved candidate revision, G4/G5 evidence | Immutable candidate manifest + blocked/ready checklist, then separate authorized publication |

### Workbench context header (concept)

`Assembly: <description> | PN: <master> | CL1/CL2: <selected revision> | Draft/Released | Variant | Change: ECO-... | PDM CAD: exact version | Impact/Release status`.

For an unnumbered model definition show `Model concept — no physical PN assigned`. Do not use the filename as physical part identity.

## 2. Create new assembly — reviewed path

1. **Choose intent:** `Unnumbered design definition` or `Physical assembly/part`. The first creates a new governed SysML definition without allocating a PN; the second creates or binds the PartMaster to the concept as needed. A model element and physical part need not be 1:1.
2. **Identify the authority:** for new physical items, select the approved MDSE number series. The registry checks for conflicts with all active/historical PN namespaces. A successful online reservation is recorded permanently; do not allocate while offline.
3. **Create draft identity:** assign unique immutable `part_id`, `part_revision_id`, approved initial CL1/CL2 policy and owner. A draft PartRevision does **not** imply release. If a conceptual note is created, keep its stable UID and native SysML separate.
4. **Attach CAD context:** search the PDM read-only catalog by native file ID, revision, part/assembly number, CAD type and approved state. PDM continues to author and check in native SOLIDWORKS parts/assemblies. An MDSE-issued PN can be used as a PDM attribute/filename, but PDM does not issue a second engineering PN.
5. **Build structure:** use `Add existing part` from the registry and legacy catalog; for every new BOMLine choose exact child part/revision (or explicit approved bounded alternate), quantity, units, option/effectivity and source. Search may find unconnected records; choosing a result does not automatically create a SysML relationship.
6. **Connect the model only where useful:** reuse existing concepts/definitions, add SysML part usages through the existing reviewed native editing service, and create an explicit `ModelBinding` from the usage to registry identity. A purchased fastener need not receive its own SysML definition. Do not automatically derive native SysML semantics from a PDM BOM row.
7. **Preview and Apply draft:** side-by-side old/new model text and BOM diff; highlight new/removed rows, quantity/revision pins, conflicts, document source/version, and residual unmanaged items. Recheck both model-file version and registry draft version before committing. A durable change journal coordinates model write and registry update; any partial failure is flagged for reconciliation, not called a successful atomic cross-system transaction.
8. **Review and save:** engineer sees the draft revision, structure, where-used and unresolved flags. Workbench remains active; optional Canvas or note editor artifacts are independently accessible.

**Exit:** unnumbered model concept **or** numbered draft physical assembly with traceable exact usages and pending evidence. No production-release claim.

## 3. Modify or revise existing assembly

1. **Select exact starting point:** show live draft or an immutable released PartRevision and its corresponding BOMRevision. Present its source/effectivity and the original PDM authority where applicable. Never silently substitute the latest revision.
2. **Determine change kind:** 
   - `Edit draft`: permitted only before release, with optimistic concurrency.
   - `New revision of same part`: create a distinct draft PartRevision/BOMRevision referencing predecessor.
   - `New replacement part`: allocate **new PN**, create explicit supersession proposal, and preserve old parent usages.
   - `Temporary deviation/redline`: controlled overlay, not a rewrite of any released record.
3. **Edit the selected structure:** add/remove/replace child usages; change quantities, units, alternates, CL1/CL2 constraints, variant applicability and effectivity. Optional model-usage edits are separate reviewed native SysML text changes.
4. **Review the differential:** parent baseline vs candidate, complete changes by usage key, any PDM drawing/CAD changes and applicable requirements/interfaces/tests. Include missing or stale reference alerts.
5. **Where-used impact:** traverse all active-product and affected legacy BOMs; show every path with specific parent revision, product, market, variant and applicable serial/lot. Every changed child CL1 or CL2 triggers **parent review**, not automatic parent revision assignment.
6. **Engineer disposition:** for each impacted parent/configuration record fit, form, function, safety, manufacturing and verification impact; decide `CL1`, `CL2` or `no revision`, with reviewer/rationale. Recursively inspect ancestor assemblies where relevant. Missing legacy coverage remains an explicit open issue and blocks release unless addressed by a properly authorized risk-controlled exception.
7. **Review change/ECO:** connect reason, impacted definitions/usage, test or supplier trigger, required drawings, documents, FW/SW updates, validation and proposed effective date/lot/serial.
8. **Commit the candidate:** apply a version-checked, journaled change. Nothing changes in an already published baseline; prior configurations remain retrievable.

**Exit:** changed draft revision and detailed change-impact register, ready for verification and review or returned with explicit blockers.

## 4. Prepare and publish an engineering release

The Release action may become available after G4 evidence, but it must never skip defined G5 authorization. The release service (not a Markdown status field) is authoritative after organizational qualification.

| Gate | Required check | Failure behavior |
|---|---|---|
| **Identity** | Unique PN, authorized CL1/CL2 sequence, PartRevision and BOMRevision | Block duplicate/reused/stale records |
| **Structure** | Complete recursive BOM, quantity/unit/alternates/effectivity, no implicit latest | Block unresolved child choice or unknown parent impact coverage |
| **Model** | Exact committed native SysML source/UID/qualified usage bindings | Block stale source, mismatched binding or unreviewed model edit |
| **CAD** | Exact SOLIDWORKS PDM file ID/version/revision/state and verified bytes/hash/reference integrity; retain protected immutable capture of approved bytes for later reconstruction | Block inaccessible/unapproved/changed **pinned** CAD bytes or source state |
| **Change & compliance** | ECR/ECO, parent F/F/F dispositions, required safety/regulatory and supplier assessments | Block missing decisions or unsupported deviations |
| **Verification** | As-tested configuration, results, applicable waivers and G4 outcome | Block missing critical test evidence or unauthorized waiver |
| **G5 authorization** | Qualified reviewer roles, identity, permissions and decisions on one frozen digest | Block missing/wrong/stale approvals or role conflict |
| **Publish** | Immutable release manifest and durable registry audit event; downstream handoff | Distinguish approved/unpublished from published/acknowledged; retry without double release |

**Release sequence:** Prepare candidate → canonical hash → approved signatures/decisions → revalidate exact model/CAD/BOM versions → atomic registry release event → controlled publication → receiving-system acknowledgment. Editing any field after candidate approval invalidates the digest and requires new approval. Failure in a downstream delivery does not roll back an already committed engineering release or falsely mark manufacturing acknowledgment complete.

**Pilot vs full production:** a conditional pilot is a distinct explicitly authorized, restricted configuration and must not be displayed as an unrestricted production release.

## 5. Catalog search, Canvas and revision selection

Catalog search is global **only when deliberately invoked** via Search/Add existing part. The main Structure tables remain limited to the currently selected assembly/revision and its modeled/approved BOM relationships. The user can search for an unrelated catalog part and:
- open its evidence in a separate editor tab;
- stage it as a *candidate* BOM usage (explicit part+revision+quantity/effectivity, followed by preview/Apply);
- add an associated modeled note to the named existing Canvas (view-only; no implicit BOM line or semantic link);
- create a reviewed ModelBinding when the concept/usage association is intentional.

Search results must show `PN`, description, available CL1/CL2, released/draft/obsolete status, current authority (`legacy PDM` or `MDSE`), source freshness, confidence and document availability. Show *what is selected* before an Add; default to an explicit selected released revision, not "current/latest".

**On startup:** load a previously validated local read-only catalog snapshot; show its last sync and stale/coverage status. A separate PDM catalog sync service may refresh periodically or on demand. Never scan a partial Windows PDM cache and report it as the whole authoritative vault. A disconnected catalog can be searched as stale reference data but cannot prove CAD current state at release.

## 6. Legacy part promotion

**Level L1:** preserve original approved PDM drawing/BOM bytes, external IDs, released versions, status and SHA-256 without creating a model note.

**Level L2:** for all current products and potentially affected parent structures, import a queryable frozen BOM/where-used index (source revision, usage identities, quantity, variant/effectivity, provenance and coverage). Not every record needs a SysML definition.

**Level L3:** on engineering change, select exact legacy baseline, create reviewed PartMaster/PartRevision crosswalk if missing, choose model granularity only where needed, and validate structural/document evidence. For issuance of a *new* revision of that legacy PN, execute an approved `AuthorityTransfer` cutoff with final PDM authoritative revision, effective time and reviewers. Historical releases remain original evidence; no split-brain revision creation.

A source record with ambiguity stays unresolved. Do not infer an engineering relationship from a matching part number in a filename, a shared term or a Canvas card.

## 7. UI behavior contract

- **Persistent tool UI:** Create/Edit/Review Impact/Prepare Release and changing options update content of the same Workbench panel or pop-out.
- **Artifacts:** selecting/opening a model note, controlled drawing, Canvas or supported Base opens or refocuses an independent editor tab; no duplicated Workbench tabs.
- **Context persistence:** selected assembly and exact revision, change candidate, staged BOM rows and approval blockers survive lens switches. Changing editor tabs does not silently change the target of an in-progress edit.
- **Optimistic concurrency:** an engineer editing a stale draft sees a conflict and must rebase or cancel. A released configuration can only be revised by a new candidate.
- **Explicit changes:** a Canvas addition is visualization; a BOM row requires Add usage → Preview → Apply; a native SysML link requires a separate valid explicit edit; an engineering release requires G5.
- **Current implementation note:** today's Workbench handles some modeled structure, part lifecycle/clone, BOM tables and partial ECO planning. New number issuance, the managed part catalog, protected registry, comprehensive impact/disposition and actual MDSE release are proposed future functionality.

## 8. Acceptance scenarios

| ID | Demonstration required |
|---|---|
| STR-01 | Create unnumbered reusable SysML assembly; verify no physical PN was generated |
| STR-02 | Create physical assembly through the numbering service; retain stable PN, draft revision and unique audit event |
| STR-03 | Add two existing legacy parts plus one new MDSE part; selected child revisions and quantities are explicit, source records intact |
| STR-04 | Search an unrelated part and add its modeled note to current Canvas without changing BOM or creating a native model link |
| STR-05 | Add selected catalog part to an assembly after preview; only intended BOMLine and optional reviewed model usage change |
| STR-06 | Edit a draft and reject stale concurrent save; prior approved model and BOM remain intact |
| STR-07 | Revise released assembly and reconstruct older release exactly, including original PDM CAD version/digest **and the archived approved bytes** |
| STR-08 | Distinguish same-PN new revision from new-PN replacement; old parents unchanged until explicit reviewed usage updates |
| STR-09 | Show all direct/recursive current and relevant legacy parents; flag unknown coverage instead of declaring no impact |
| STR-10 | CL1 and CL2 child changes each trigger F/F/F decisions at every applicable parent; no automatic parent classification |
| STR-11 | Changed or inaccessible **pinned** SOLIDWORKS CAD bytes/state or source hash blocks final release; presence of newer CAD versions does not silently upgrade the selected one |
| STR-12 | New release requires valid G4/G5 and digest-bound reviewers, produces immutable manifest and separate publication receipt |
| STR-13 | Crash after registry approval but before ERP acknowledgment never creates duplicate release or false production authorization |
| STR-14 | Offline draft editing is possible subject to model controls; number issue and release are disabled without authoritative service |
| STR-15 | Note/Canvas/Base artifacts remain independently revisit-able while workflow options stay in the same Workbench |

## 9. Initial proof-of-capability test

Pilot an assembly with exactly three children: one new MDSE number, one cataloged released legacy part and one legacy part with multiple impacted parent products. Create draft and candidate revision; change the child CL1; inspect parent F/F/F decisions; pin exact PDM drawing versions; execute reviewed G4/G5 under a **staging-only test authority**; publish a manifest and reconstruct both generations. Verify number collision handling, missing-source release blocking and failure/retry recovery.

**Acceptance must distinguish source/CI passing from real Obsidian runtime, PDM integration, company QMS process approval and production cutover.** No production release may be issued on the basis of this document or a test-only backend.
