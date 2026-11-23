# 08 — Configuration Registry and Engineering Release Service

**Status:** Proposed architecture v0.1, 2026-11-22; **NOT IMPLEMENTED OR QUALIFIED FOR ENGINEERING RELEASE**.
**Decision:** MDSE will own new engineering part numbers, approved EBOM/revisions, change authorization and engineering release **after validated gates**. SOLIDWORKS PDM retains native CAD file ownership and check-in/out through the first migration phases. No parallel numbering/revision authority for the same record.
**Related workflows:** [[01_Engineering_Workflows/10 - Create and Change a Controlled Assembly|Controlled Assembly]], [[01_Engineering_Workflows/06 - Manage Change, Redlines and Impact|Change]], [[01_Engineering_Workflows/07 - Release Design to Production|Release]], [[01_Engineering_Workflows/02 - Ingest and Qualify Existing Engineering Data|Legacy Intake]].
**Boundary:** This is a candidate data contract, not a new native SysML definition, approved QMS procedure, database migration, or authorization to stop using PDM.

## 1. Objectives and system boundaries

1. A part number is globally unique and issued exactly once by its currently authorized issuer.
2. A released assembly can be reconstructed from exact approved child revisions, quantities, effectivity, variants, documents, model state, code, and approval evidence.
3. A reusable SysML concept can map to zero, one, or many physical parts. The same physical part can be used many times, with different **usage-specific** approved revision constraints. Model notes are not mandatory for catalog parts.
4. Existing released PDM data can remain indexed and archived without generating model notes until a controlled edit or explicit modeling need arises.
5. The complete active-product and affected legacy BOM/where-used graph must remain queryable; unknown coverage is reported rather than treated as "not used".
6. Numbering, approval and release transactions are centrally enforced; a modified Markdown status or Git commit does not release a product.

### Authority matrix (target)

| Information | Active authority | Rule / integration |
|---|---|---|
| SysML definitions, ownership, typing, connections | MDSE modeled vault, text authoritative | UID and native SysML source; accepted changes have source version/transaction references |
| New part identities and number allocation | MDSE Configuration Registry | Transactional allocation and unique constraints; no manual bypass or offline allocation |
| Part revision / engineering EBOM / usage pins | MDSE Configuration Registry for transferred/new records | Drafts mutable with optimistic locking; released snapshots immutable |
| ECR/ECO, parent impact dispositions, engineering release | MDSE Change & Release Service after qualification | Named authorities, separate review, explicit approvals and audit evidence |
| Native SOLIDWORKS part/assembly/drawing files | Existing SOLIDWORKS PDM during transition | Read exact PDM IDs, versions, revision labels, state, references and hashes; native CAD operations remain there |
| Historical released revisions predating transfer | Frozen legacy PDM/source evidence | Preserve original identifiers and original release evidence; never backdate MDSE authorization |
| Manufacturing inventory, routings, as-built serial/lot history | Manufacturing/ERP/MES until separate approved transfer | MDSE publishes signed/controlled release manifests and receives handoff status |
| Archived source documents | Controlled evidence repository | Content hashes, retention and provenance; original bytes not silently replaced |

**Shared part numbers with CAD:** MDSE allocates the engineering PN first. PDM can use that identifier for a CAD filename/attribute, but must not allocate a competing engineering PN. CAD file revision/version and part engineering revision are distinct identifiers and may not advance together.

## 2. Logical record model (proposed v0.1)

Primary keys below are stable internal IDs, not filenames or editable descriptions. IDs should be UUID/ULID or comparable never-reused immutable keys. Human readable PNs, ECR numbers and release numbers are **external display identities** with separately controlled uniqueness.

| Entity | Stable key and minimum fields | Relationships / invariants |
|---|---|---|
| **NumberSeries** | `series_id`, prefix/range, numeric width, next allocation, status, allocation policy | At most one active sequence controller per namespace |
| **NumberAllocation** | `allocation_id`, series ID, allocated value, state `reserved/assigned/void`, actor, UTC time, idempotency key | Unique `(series_id,value)`, unique across all colliding external PN namespaces; never reuse void numbers |
| **PartMaster** | `part_id`, `canonical_pn`, description, category, engineering owner, origin `MDSE/legacy`, lifecycle | One master identity; unique canonical PN. A model note is optional |
| **PartRevision** | `part_revision_id`, part ID, CL1 token, optional CL2 token, scheme/version, display rev, parent revision, state, related change, concurrency version | Unique `(part_id, revision_scheme, CL1, CL2)` with well-defined null handling; released content never updated |
| **BOMRevision** | `bom_revision_id`, parent PartRevision ID, view `EBOM/MBOM`, variant scope, status, source change | A particular parent revision owns an engineering structure; the released BOM is immutable |
| **BOMLine** | `bom_line_id`, BOMRevision ID, stable `usage_key`, child PartMaster ID, exact child PartRevision or approved bounded selection rule, decimal quantity, unit, reference designators, option/alternate, effectivity, provenance | Unique usage key within a BOMRevision; line cannot silently resolve to "latest"; unchanged usage keys support meaningful revision diffs |
| **ModelBinding** | `binding_id`, model note UID, optional model feature/usage reference, part ID, optional part revision ID, scope `concept/usage`, valid range | Many-to-many; binds *administrative configuration identity*, does not create a native SysML edge by itself |
| **Artifact** | `artifact_id`, role, original name, system, external immutable file/version ID, native revision label, URI, size, SHA-256, capture UTC | Original bytes and source provenance; two files with same name are not assumed identical |
| **RevisionArtifact** | `link_id`, part revision ID, artifact ID, role, mandatory flag | Pins the exact drawing/CAD/schematic/wirelist version for that revision |
| **ChangeRecord** | `change_id`, type `ECR/ECO/deviation`, reason, requester, owner, status, baseline, affected records | Change is distinct from authorized release; deviations never rewrite the baseline |
| **ImpactDisposition** | `impact_id`, change ID, affected parent PartRevision, variant/effectivity, all where-used paths, fit/form/function/manufacturing rationale, CL1/CL2/no-revision decision, reviewer, state | Every impacted parent/configuration is reviewed; child class never auto-assigns parent class |
| **Approval** | `approval_id`, actor identity, role, decision, UTC timestamp, exact candidate digest, authentication evidence, policy version | Authenticated, authorized, immutable record; distinct reviewer rules enforced by policy |
| **Release** | `release_id`, top-level PartRevision, product/variant/market, effectivity, immutable manifest URI/hash, approving change, lifecycle event, publication status | One approved release identity points to exact frozen content and approval set |
| **ReleaseEvent** | `event_id`, subject, event kind, before/after digest, actor, UTC time, correlation/idempotency key, result | Append-only independently protected audit trail; no silent deletion or status rewriting |
| **SourceRecord** | `source_record_id`, source system/object/revision, file ID/path, hash, acquired UTC, source baseline, import disposition, coverage | Idempotent crosswalk from original records; not necessarily a model note |
| **AuthorityTransfer** | `transfer_id`, part/source scope, old issuer, MDSE issuer, final legacy release, effective cutoff, reviewer approvals, verified legacy snapshot | Signed/approved, non-overlapping scopes and cutoffs; never dual-author a revision |

**Data contract detail:** IDs may be represented as UUID strings in JSON. `canonical_pn` is a string (never a number); preserve leading zeros. Quantity is a decimal with explicit unit and validation. CL1/CL2 and document/PDM file revision are separate typed fields, **not** an inferred suffix split. Date/time is UTC with explicit time-zone rendering; effectivity may also be by serial, lot, market and variant.

### Cardinality / ownership

- PartMaster 1 → N PartRevision; PartRevision 0 → 1 parent Revision and 0 → 1 BOMRevision for the EBOM view; candidate and released BOM revisions remain independently identified.
- BOMRevision 1 → N BOMLine; BOMLine 1 → 1 child PartMaster, then 1 exact PartRevision **or** an approved, explicit configuration selection policy. Approved alternates are distinct eligible choices with applicability.
- Model note UID 0 → N ModelBinding; PartMaster 0 → N ModelBinding. A usage binding may carry a revision constraint while the reusable definition remains unpinned.
- PartRevision 0 → N RevisionArtifact (CAD, drawing, schematic, software and evidence are independent lifecycle objects).
- Release 1 → 1 immutable release manifest, N required Approvals, and a ChangeRecord (or documented initial-release authorization policy).
- SourceRecord may point to a PartMaster, PartRevision, Artifact, imported BOM snapshot or no modeled record; import disposition states which.

## 3. Number and revision rules

**Part allocation:** a centralized `reservePartNumber(series, requester, idempotencyKey)` operation locks/atomically increments its sequence and inserts a permanent NumberAllocation. `assignPartNumber(allocationId, partId)` is a separate operation. Expired/abandoned reservations become `void`, **never available again**. Unique constraints on all namespaces ensure no collision with legacy, other series, or another concurrent request. Part numbers must not encode taxonomy or revisions unless required by approved external integration.

**Revision scheme:** `RevisionScheme` policy is versioned/configurable per product family or record origin. Store CL1 and CL2 as exact source/approved tokens with an explicit ordering/conformance rule; do not assume letter+integer across all historical PDM data. For legacy convention `5913495D` / `5913495E`, retain literal source PN+CL1 display while recording master `5913495` and CL1 `D` or `E`. The mapping must be validated, not guessed from filenames.

**Drafts and baselines:** draft edits are version-controlled and can be revised under precondition checks. Approved/released revisions are immutable. An engineering change creates a new revision/candidate and references its predecessor rather than mutating a released record. Part lifecycle (current/obsolete) is independent from revision and approval state; obsolescence is an event and must not erase previous release applicability.

**Model-note naming compatibility:** existing BOM convention may use a note name `PN+CL1` with YAML `partNumber: PN`. Preserve that convention where a modeled part note is warranted. The registry's `part_id` and `part_revision_id` provide durable administrative links; never require one SysML note per part or one note per revision. Identifiers `uid` and authoritative native SysML statements remain separate from administrative registry bindings.

## 4. Release construction and transactional integrity

A release candidate MUST contain a **deterministic, canonical manifest**, including:
- exact top PartRevision, BOMRevision and recursively resolved BOMLine child PartRevision choices, quantity/unit, variant, approved alternates, effectivity and applicable markets;
- source model vault/repo commit, note UIDs and content hashes for any model assertion relied upon;
- exact PDM CAD/drawing native file ID + file version + PDM revision/state and independently verified SHA-256 digest (or explicit independently auditable equivalent when exact file bytes are inaccessible);
- exact firmware/software build IDs and content hashes, specifications, controlled work/test instructions and any required source evidence;
- G4 verification/validation applicability and open issues/approved waivers, ECO and parent impact dispositions;
- target approval policy ID/version, immutable candidate digest, approvals referring to that digest, authorized release event and publication/effectivity.

**Publish protocol (not one ACID transaction across Git, PDM and files):**
1. **Prepare:** read model at a pinned Git commit, snapshot registry drafts, obtain exact PDM metadata/bytes, verify referenced versions, stage content-addressed artifacts and compute candidate manifest digest.
2. **Preflight:** validate identities/quantities/revisions, complete recursive where-used/legacy coverage, CAD version/states, evidence, approvals and role separation. A missing or changed PDM source is a blocking unresolved condition.
3. **Approve:** each authorized person approves the exact candidate digest. Any content change invalidates approval and requires a fresh candidate/digest.
4. **Commit:** one atomic registry operation records the approved release and required events, locks the immutable manifest identity and consumes the idempotency key. No partial release is ever represented as complete.
5. **Publish:** deliver the frozen manifest to controlled document/ERP/manufacturing consumers with acknowledgments. A failed delivery leaves an approved but **not acknowledged/published** release; retry idempotently, with no manufactured authorization.
6. **Verify:** retrieve the released manifest and all referenced evidence again, audit hash parity and document downstream receipt. Recover/reconcile interrupted steps from a durable job journal.

A PDM connection loss, stale CAD file version, stale note hash, changed BOM, uncovered impacted parent, missing G4 evidence or unmet approval **fails closed** for a production release. Offline engineers may edit drafts, but cannot reserve numbers, approve releases or issue new released revisions without the authoritative registry.

### Lifecycle states

- PartRevision: `Draft → In Review → Approved → Released`; rejection returns to an explicitly reworked draft candidate. Once released, prior versions remain immutable; `Superseded/Retired` is a separate status event with effectivity.
- ChangeRecord: `Opened → Impact Reviewed → Approved → Implemented → Closed`, with documented rejected/withdrawn branches.
- Release publication: `Candidate → Approved → Published → Downstream Acknowledged`; unsuccessful downstream publication is visible and retryable, never silently collapsed to `Released`.
- Deviations/redlines are separate time-/lot-/serial-limited overlays and do not edit the frozen base revision.

## 5. Legacy preservation and partial migration

| Tier | Meaning | Minimum indexed data | Model notes? |
|---|---|---|---|
| **L1 — Preserve and discover** | Historical, unchanged source | Original source system ID, exact released revision/document bytes, checksums, approval and lookup metadata | No |
| **L2 — Configuration indexed** | Active products and any possible where-used affected scope | Queryable recursive EBOM/parents/revision pins, controlled configuration, effectivity, source and confidence/coverage | Optional |
| **L3 — Actively managed** | Item/assembly undergoing change or new development | Promoted PartMaster/PartRevision/BOM with reviewed source crosswalk and MDSE authority cutoff, model only what needs semantics | Only when useful |

Every imported source row is accounted for and an unchanged reimport must be idempotent. Preserve source identity, original bytes and disposition. A missing parent mapping is **unknown coverage**, not evidence of no usage. If affected legacy coverage is incomplete, block release or require an explicit reviewed exception with defined remaining risk and responsibility.

**Transfer rule:** for an individual legacy PN, freeze and hash its final PDM authoritative revision and approved BOM, record last permitted PDM issuance, get designated owners' approval, then begin MDSE authority for subsequent revision issuance at the cutoff. Original PDM releases remain immutable historical evidence. Never allow simultaneous PDM+MDSE issue of revisions of the same item.

## 6. Security and audit

- Use corporate identity, roles and least privilege. Separate number allocation, edit, change-impact disposition, release approval and registry administration as required by policy.
- Protect immutable release manifests and append-only audit outside user-editable Git working trees; store hashes, source IDs, before/after values, request IDs and clock records. Control service accounts and secrets.
- Enforce optimistic concurrency for draft BOM and note edits; validate PDM file version again immediately before final release commit.
- Audit periodic restore drills, data export/reconstruction, failed releases, privilege changes and integration health.
- Keep real product/CAD/quality data in private controlled repositories and storage, not in public MDSE_v2 tool-source or MDSE_v2_live tool-definition fixtures.

## 7. Acceptance tests (candidate requirements)

| ID | Required test result |
|---|---|
| CFG-01 | Parallel allocations with retries yield no duplicate PN; void/reserved numbers are never reused |
| CFG-02 | Existing legacy PN+CL1+CL2 labels are mapped by an explicit approved scheme, not filename heuristic |
| CFG-03 | One model UID can bind many parts, and one part can appear in many owned usages; no automatic semantic SysML link from registry binding |
| CFG-04 | Revision B release has stable BOM/document hashes after revision C is drafted and later released |
| CFG-05 | No released BOM resolves a child by implicit "latest"; alternate policy and effectivity resolve reproducibly |
| CFG-06 | Missing legacy recursive parent or unverified source flags impact coverage, never reports "no usage" |
| CFG-07 | Both CL1 and CL2 child changes trigger per-parent fit/form/function review, without automatic parent CL1/CL2 |
| CFG-08 | Changed PDM CAD version, failed digest, stale model commit or changed registry draft invalidates candidate approval and blocks release |
| CFG-09 | Reviewer identity, permissions, digest/approval role and G4/G5 evidence prevent unauthorized release |
| CFG-10 | Crash between registry commit and downstream publication yields a retryable unpublished release, not two releases or false acknowledgment |
| CFG-11 | A legacy PN transfers issuance to MDSE only once with signed cutoff and immutable last PDM release |
| CFG-12 | Published manifest reconstructs the exact approved assembly and associated source evidence without active PDM query |
| CFG-13 | Global catalog search finds an unconnected part, but the Structure workflow remains selected-assembly-scoped |
| CFG-14 | Original CAD version remains managed by PDM and its native references survive check-in/check-out while MDSE versions the engineering release |
| CFG-15 | A completed staging restore reproduces registry, audit records, immutable release manifests, source crosswalk and number-allocation history |

## 8. Implementation increments, not release claims

1. **Registry skeleton:** private transactional store; identity, number series, part masters, CL1/CL2 revision schemes, read-only legacy index; test concurrency and reconciliation.
2. **Structure editing:** selected-assembly Draft EBOM, owned usage keys, PDM CAD document references, preview/diff, stale guards and source provenance.
3. **Change + release:** ECR/ECO, recursive where-used/impact, approval policy, immutable signed-or-hashed manifest, transactional registry commit and recovery.
4. **Legacy promotion:** source ledger, complete current-product BOM index and source→registry crosswalk; authority transfer by PN and explicit cutoff.
5. **Manufacturing handoff + CAD migration (later):** receipt acknowledgments, change integration and a separately qualified native CAD authority transition.

**Open policies requiring company decisions:** exact new PN series; approved CL1/CL2 semantics and ordering; G5/RACI approval matrix and identity authentication; backend host/backup/retention; required PDM API/source and CAD digest method; pilot product/revision/legacy authority cutoff; whether MBOM becomes authoritative within MDSE; ERP/MES acknowledgments. None are implied by this initial design.

**Current implementation gap:** the Workbench has partial part, lifecycle, clone, BOM and ECO helpers. There is **no demonstrated central number allocator, transactional registry, full release authorization service or controlled transfer of authority** in MDSE_v2 today. This specification is a future capability and must not be used as evidence of QMS approval or production readiness.
