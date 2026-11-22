# Workflow 06 — Manage Change, Redlines and Impact

**Engineer goal:** Safely change an existing design, particularly a **released part/assembly**, and identify every affected product and parent revision before approving temporary production use or updating controlled drawings.

**Workbench:** Start in Structure (part revision, where-used), stay in that same Workbench while switching to Define/Verify/Document for requirements, risk, test impact and marked-up drawings. ECO authorization remains a controlled process, not an implicit model edit.

## Separate change types

- **Design development change:** modifies a candidate that has not been released; still requires scope, trace and test review.
- **ECR/ECO:** requested/approved controlled design change and eventual release of affected part/BOM/drawing configurations.
- **Redline/temporary deviation:** explicitly approved, time- or lot-limited exception to an **existing released** part/drawing until permanent correction is published. It does **not** rewrite the released baseline as if approval had already happened.
- **Nonconformance/rework:** addresses manufactured material that differs from approved requirements; disposition may authorize use-as-is/rework or lead to ECO, but is not by itself a released revision.
- **Replacement part proposal:** new distinct part identity with explicit supersedes relation; does not silently change installed products or parent BOMs.

## Engineer and reviewer sequence

| Step | Engineer action | Evidence/decision required | Result |
|---|---|---|---|
| 1. Select baseline | Search released PN and **exact** current revision/effectivity | Confirm part vs drawing vs assembly revision; source of released truth | Target item/version |
| 2. State change | Describe reason, physical/software change, affected specs, urgency and risk | Source defect/test/supplier issue/customer request | Change request |
| 3. Start controlled record | Create ECR/ECO or temporary redline candidate | Requester, owner, approvers, issue/date, original and proposed condition | Traceable change |
| 4. Find every use | Query complete direct and recursive where-used across product families | Include all parent configurations, pinned usages, alternates, variants and route paths | Impact register |
| 5. Analyze F/F/F per parent | For **every affected parent**, evaluate fit, form and function; see below | Mechanical, electrical, firmware/software, safety, manufacturing and qualification effects | Parent review and owner |
| 6. Decide class and scope | Engineer determines **CL1**, **CL2** or documented **no revision required** for each parent/configuration | Rationale, current drawing/BOM and effectivity; don't auto-cascade | Parent decision table |
| 7. Recurse to ancestors | Continue upward for changed/affected parent configurations, retaining all product paths | Do not stop after a CL2 assessment or assume a CL1 parent revision | Full impact chain |
| 8. Establish containment | For temporary production change, specify authorization and manufacturing control | Start/end date, lot/serial, location, quantity, allowed rework, inspect/test, expiry | Approved deviation or production hold |
| 9. Plan implementation | Identify revised drawings, BOM usage pins, firmware, work instructions, supplier notices, tests | Owners, review roles, schedule and dependencies | ECO release plan |
| 10. Execute verification | Evaluate change-specific and regression tests | Confirm no newly introduced F/F/F, safety or compliance failure | Actual evidence |
| 11. Release permanent revision | PDM/PLM issues actual new released rev and effectivity | Approval and manufacturing readiness, linked ECO | Updated controlled baseline |
| 12. Close redline | Reconcile open inventory/serial lots and retire temporary authorization | New drawing released or explicit withdrawal; no orphan waivers | Closed deviation with trace |

## The parent fit/form/function rule

A component **CL1 change always triggers parent impact evaluation**, not an automatic parent CL1 revision. A component **CL2 change also triggers evaluation** even when the parent usually needs no change. Depending on actual BOM pin update, integration, interface, tolerances, labels or assembly effects, a parent may require CL1, CL2 or justified no revision.

Evaluate each impacted parent and then the higher assemblies that use it. Preserve all where-used routes and configuration applicability; deduplicate the same parent *review record* only when revision, product configuration, effectivity and rationale truly match. Do not deduplicate distinct product or lot consequences.

| Parent review field | Required content |
|---|---|
| Parent PN and current released revision | Exact released configuration |
| Impact path | Original changed item → intermediate assemblies → product family |
| Applicable usage | Child revision pin, quantity, variant and effectiveness |
| Fit | Dimensions, clearances, connector fit, mounting and packaging |
| Form | Physical envelope, pinout, appearance, material and markings |
| Function | Electrical/control behavior, timing, performance, safety and firmware compatibility |
| Manufacturing | Assembly process, fixtures, inspection, EOL test and service impact |
| Result | CL1 / CL2 / no revision, with rationale and reviewer |
| Required actions | Drawing/BOM revision, qualification, work instruction, supplier change |
| Effectivity and closure | Target rev, date/lot/serial range, accountable owner |

## Example: changed charger connector or PCBA component

A supplier changes connector keying while a wire harness still mates by part number. The engineer starts with the released connector PN/revision, finds every harness using it and every charger/variant containing those harnesses, then evaluates mechanical fit, pinout, CAN/pilot electrical behavior, EMC, serviceability and test fixtures at **each parent**. One product may need a harness CL1 and charger CL2; another may require a charger CL1 because mounting or function changes. The tool must never assume uniform classification across all product lines.

## Record linkage

Original part and released drawing; ECO/ECR/redline; affected parent usage and decisions; change requirement; risk/FFF assessment; approval; applicable serial/lot effectivity; modified documents/BOM/FW; verification evidence; new released revision and redline closure. The redline overlay remains distinct from an approved baseline.

## Tool implementation gap

Merged Workbench source provides a limited ECO planner, where-used traversal, part lifecycle and clone/supersession helpers. **It does not yet implement this entire redline, parent-decision, time/lot effectivity and drawing-release workflow.** These are proposed product requirements until decomposed, built and accepted.

## Acceptance

- **CHG-01:** Select **released revision**, not latest draft, and show all variant-specific where-used paths.
- **CHG-02:** Every direct and recursively affected parent has an explicit F/F/F review or a visible open disposition.
- **CHG-03:** Both CL1 and CL2 component changes trigger reviews; the tool does not assign parent class automatically.
- **CHG-04:** CL1/CL2/no revision disposition includes rationale, approver and affected configuration.
- **CHG-05:** Temporary deviation has explicit start/end effectivity, authorized scope, conditions and expiration.
- **CHG-06:** Redline does not mutate the released design until a governed release transaction.
- **CHG-07:** Required requalification and EOL/manufacturing updates remain traceable across affected products.
- **CHG-08:** Closing ECO links old/new drawings, BOMs, actual released revisions and deviation disposition.
- **CHG-09:** The Workbench retains selected part and impact table while related notes/canvases open in tabs.

**Next:** [[05 - Verify and Validate the Design]] for change verification and [[07 - Release Design to Production]] for issued configuration and temporary-deviation closure.
