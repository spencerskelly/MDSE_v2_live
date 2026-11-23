# Engineering Workflows — From Need to Production

This is the active **engineer-centered operating model** for MDSE. The subject is how a multidisciplinary engineering team works—not how files happen to be arranged. It describes the desired end-to-end workflow and the current toolset's support boundary. It is a **proposed process specification for engineering review**, not an approved quality-management procedure.

**Tool entry point:** [[00_Tool_Definitions/README|MDSE Tool Definitions]]. The Workbench remains one contextual right-side panel or optional pop-out across the four tool work areas: **Document, Define, Structure, Verify**. Actual notes, Canvases and Bases (where supported) occupy independent editor tabs. A workflow may use multiple work areas while staying in the same Workbench.

## Product delivery journey

| Stage | Primary engineer's question | Workflow definition | Main output / checkpoint |
|---|---|---|---|
| 0. Orient | What do we already know and what applies? | [[01 - Find and Investigate Engineering Information]] | Relevant prior art, versions, open issues and confidence |
| 1. Intake | Can existing evidence be reused reliably? | [[02 - Ingest and Qualify Existing Engineering Data]] | Controlled source provenance and reconciled notes |
| 2. Scope | What need, use and measurable result must we satisfy? | [[03 - Define Need, Requirements and Acceptance]] | Approved scope, requirement baseline and verification strategy |
| 3. Design | How shall the system work and be built? | [[04 - Develop Architecture and Detailed Design]] | Reviewed HW/FW/SW/mechanical architecture, interfaces and product structure |
| 4. Prove | Does the implemented design satisfy intended use? | [[05 - Verify and Validate the Design]] | Executed evidence, anomalies and closure decisions |
| 5. Change | What changes, who is affected and what is authorized? | [[06 - Manage Change, Redlines and Impact]] | Impacted configurations, parent decisions and approved ECO/deviation |
| 6. Release | Can manufacturing safely make, test and service it? | [[07 - Release Design to Production]] | Controlled product definition, documentation and manufacturing handoff |
| 7. Sustain | What do production, service and field results tell us? | [[08 - Sustain, Correct and Improve]] | Resolved nonconformances, revisions, product feedback and learning |
| Team execution | Who owns reviews, evidence and gates? | [[09 - Roles, Gates and Workbench Interaction]] | Responsibilities, decision record, acceptance checks |
| Structure work | How do I create or revise an assembly without losing a released baseline? | [[10 - Create and Change a Controlled Assembly]] | Numbered draft/part revision, exact usage changes, impact dispositions and governed release candidate |

**The sequence is not strictly linear.** Supplier shortages, thermal findings, test failures, production redlines or customer feedback may return a team to earlier stages. Every return must retain configuration/version, cause, decision and affected requirement/test lineage.

## Common record chain

**Customer/use need → planned use case → requirement → system architecture/function/interface → selected design implementation and usage → parts/BOM/drawings/FW/SW revisions → verification case/procedure → result/evidence → accepted release configuration.**

Not every record requires a separate model note. Reusable concepts, usages and actual released parts may link at the appropriate level; a product may have multiple architecture options and manufacturing variants. Keep user-owned documents intact while bringing their knowledge into the model. Record uncertainty, do not manufacture semantic links merely to fill an empty matrix.

## Workbench navigation rules across every workflow

1. **Enter through context:** selected note, search, recent work, open issue, part number, requirement or source document.
2. **Keep one Workbench:** change workflow, lens, filters, relationship query or chosen related item in the same tool panel/pop-out.
3. **Open an artifact when editing matters:** independent note, Canvas or Base tab; return without searching again. Reopen focuses an existing tab.
4. **Preview before changing authority:** editing a native relationship, BOM usage, requirement or approved note requires a diff, permission, stale-file recheck and explicit Apply.
5. **Separate data types:** a customer quote, supplier drawing, an engineering assertion, a draft model relation, a validation result and a released document are not equivalent facts.
6. **Record decisions:** reviewer, rationale, affected model/evidence, disposition, version/effectivity and next owner. Do not encode a signoff as a source-side status before approval.
7. **Make uncertainties visible:** unresolved links, failed checks, missing documents and non-approved revisions belong in a review queue and cannot be silently hidden in a normal view.

## Team roles and authoritative systems

Product/Applications provides use context and priorities; System Engineering owns cross-discipline requirements and architecture; HW, FW, SW, mechanical and test engineering own deliverables; Quality and Regulatory own compliance disposition; Manufacturing and Supply Chain own production readiness, process and sourcing input; service supports field feedback. A project engineer can perform multiple roles, but an approval still needs a recorded responsible person.

**MDSE is the engineering knowledge/workflow interface, not necessarily the record system for every released artifact.** PDM/PLM or drawing vault may own released CAD/drawings/BOM; Jira or the controlled ECO system may own approvals; manufacturing systems may own routing, work instructions and serial/lot effectivity. MDSE must link the *exact version* and record status instead of silently becoming a competing release database.

**Target authority transition (2026-11-22):** after the registry, controlled numbering, approvals, immutable release manifests and migration gates are built and qualified, **MDSE will issue new engineering part numbers and engineering releases**; SOLIDWORKS PDM continues to manage native CAD files during the first phase. The existing PDM/QMS remains authoritative for records not yet formally transferred. This is a proposed target, not a currently approved operating procedure. See [[00_Tool_Definitions/08 - Configuration Registry and Release Service]] and [[10 - Create and Change a Controlled Assembly]].

## Decision gates (proposed)

- **G0: Opportunity/intake accepted.** Bound the problem, intended product lines and source evidence.
- **G1: Need/requirement baseline approved.** Measurable acceptance criteria and responsible owner.
- **G2: Architecture baseline approved.** Interfaces, safety boundaries, variants and trade decisions.
- **G3: Design candidate frozen for verification.** Part/BOM, drawings, FW/SW configuration and test plan pinned.
- **G4: Verification/validation closure.** Test outcomes, exceptions, unresolved risks and approvals recorded.
- **G5: Production release authorized.** Controlled revisions, manufacturing process/test readiness and effectivity.
- **G6: Post-release change closure.** Temporary deviations closed, updated documents issued, configuration trace retained.

These gates require team approval to become process requirements. The linked workflow notes define the evidence expected at each gate.

## Implementation classification

- **Merged source capabilities:** persistent Workbench navigation; governed search; typed relationship views and structure; preview-based new note/relationship creation; partial ECO and part replacement; importer QEAX/BOM intake; controlled toolset maintenance.
- **Not demonstrated end-to-end:** standalone document/drawing import, product-specific 100k-note performance, full native SysML parser pass, actual live-vault acceptance, full BOM revision/change propagation, complete redline/effectivity/approval lifecycle, verification execution automation and manufacturing/PDM release integration.
- **Never assume:** a draft note is approved, a verification case is a pass, a Canvas shows all product configurations, or a source part revision is released because it is latest.

## Source and legacy boundary

Historical modeled requirements, language references, test candidates and review material are retained under the dated archive for provenance. **Archived means retained for investigation, not part of the new active definition baseline.** The active workflow specification must reference an archived model identity without claiming a new SysML allocation until approved.

Read [[00_Tool_Definitions/06 - Tool Interfaces and Workflows|Tool interfaces]], [[00_Tool_Definitions/03 - MDSE Workbench|Workbench]] and the archive manifest before promoting a proposed workflow into tool development. Reconcile each proposed capability into normative rules, a testable behavior and source implementation before calling it delivered.
