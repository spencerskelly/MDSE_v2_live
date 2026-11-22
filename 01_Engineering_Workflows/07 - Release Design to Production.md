# Workflow 07 — Release Design to Production

**Engineer goal:** Transfer a validated, approved product configuration into repeatable, traceable manufacturing, test and service. The product must be buildable with known parts, controlled documents and agreed tests—without engineering assumptions being filled in on the shop floor.

**Workbench:** Structure for released configurations and BOM usage; Document for released instructions/drawings and signoffs; Verify for closure/test readiness; Define for unchanged requirements and permitted deviations. All modes remain in one contextual panel/pop-out.

## Entry and release package

This flow starts only after a reviewed design candidate and verification/validation outcome. If G4 is incomplete, the package may proceed as an **explicitly conditional pilot** with documented restrictions, not a full production release.

The release unit is a **product/variant/effectivity configuration**: top PN and revision, exact child assembly and component revision pins, drawing/schematic/harness revisions, FW/SW version, configuration parameters, approved alternates and applicable market/serial/lot. A generic name “new charger” is not a released configuration.

## Engineer journey

| Step | Activity | Participants | Required evidence |
|---|---|---|---|
| 1. Confirm technical baseline | Select approved design, as-tested configuration and unresolved exceptions | Systems and discipline leads | Frozen configuration/revision manifest |
| 2. Validate EBOM and drawings | Compare released drawing, PCBA BOM, harness/wire list and assembly BOM | HW, ME, CAD, PDM | Exact PN, usage revision, quantity, unit and alternates |
| 3. Align manufacturing definition | Review EBOM vs approved manufacturing structure/MBOM and routing | Mfg Eng, Quality, Sourcing | Documented transformations, kits, packaging, substitutions |
| 4. Supplier readiness | Check approved sources, lead times, qualification, sample revisions and traceability | Sourcing, SQE, HW | AVL/AML, supplier evidence and material constraints |
| 5. Production process readiness | Create assembly, torque, wiring, programming, inspection and EOL work instructions | Mfg Eng, Operations, Test | Reviewed process and equipment records |
| 6. Firmware/software release | Pin build, bootloader, libraries, parameter files and programming/OTA procedure | FW/SW, Mfg | Reproducible signed version/configuration |
| 7. Validate test readiness | Compare EOL and production tests against critical requirements and field failures | Test Eng, Quality | Limits, fixture revision, calibration, trace and sample report |
| 8. Regulatory and safety signoff | Verify region, labels, documentation, certification and required product safety evidence | Quality, Regulatory, Systems | Applicable-market compliance disposition |
| 9. Controlled release | Approve and publish drawings, BOM, software, instructions and ECO disposition | Responsible authorities | PDM/PLM approval, released effectivity, release identifier |
| 10. First article/pilot | Build representative units, record actual deviations/yields and run EOL/validation | Manufacturing, Test, Engineering | First article, pilot findings and correction actions |
| 11. Production handoff | Confirm trained operators, spares, service manual, revision trace and ownership | Ops, Quality, Service | G5 acceptance and open-issue list |
| 12. Post-release monitoring | Track initial yield, returns, service and supplier changes | Ops, Quality, Field | Production-performance baseline |

## Example: charger and BMID production release

For a GSE charger, match the installed power module revisions to its thermal/electrical safety validation, controller firmware build, contactor/connector harness revision and region-specific approvals. For a BMID PCBA, tie component substitutions, test limits and programming record to the exact board revision. Do not assume one EOL procedure covers every voltage class, firmware build, market or variant.

If an approved temporary redline permits altered hardware on limited serial units, manufacturing must see the **authorization, effectivity and disposition** while the released baseline stays intact. At permanent release, reconcile any already-built inventory to the new issued drawing and close the deviation explicitly.

## Product information that must be traceable

| Information | Authoritative record | MDSE should display/link |
|---|---|---|
| Released drawings, schematics, CAD | Controlled document/PDM system | Exact file/revision and approval |
| EBOM / variant usage | PLM/ERP/PDM as applicable | PN+CL1, CL2/history and usage-level pins |
| Manufacturing instructions/MBOM | Manufacturing system/QMS | Version, work center and variance rationale |
| FW/SW build and configuration | Released build/version repository | Hash/version, programmed target/configuration |
| Verification/validation evidence | Test/QMS evidence store | Case → actual execution → acceptance |
| Approval/ECO/deviation | QMS/ECO/Jira as governed | Decision, approver/date, applicability and closure |
| Serialized build history | MES/build records | Installed configuration and test outcome |

A model relationship or note status alone is never an ERP inventory release.

## Workbench flow and handoff

The engineer selects the top product, filters its structure to the release candidate and reviews the configuration-specific tree. Opening a drawing opens its actual file in a separate tab. The same Workbench switches to Verify for unresolved tests and then Document for the handoff package; no new Workbench views/tabs are created. A reviewer sees the **same pinned release** rather than whatever part revision was most recently imported.

**Proposed output:** a controlled release package that points to immutable source identifiers and selected evidence. A release button in MDSE, if developed, must require the external approval result before marking any record released.

## Gate G5 checklist

- All required product variants and markets have a complete released configuration.
- No high-severity safety/compliance defect is unapproved or hidden.
- All required requirements have applicable evidence; gaps and waiver disposition reviewed.
- Suppliers, tooling, fixtures, work instructions, programming and end-of-line tests are ready.
- Controlled revisions match what prototype and pilot testing actually used, or differences have accepted requalification.
- ECO/redline links and effectivity are recorded; restricted builds are labeled.
- Manufacturing, Quality, Design and Test acceptance authority is recorded with dates and release ID.

## Acceptance

**REL-01:** Generate a complete pinned release configuration across parent/child BOM levels.  
**REL-02:** Link to each released drawing and software artifact at an exact revision/hash.  
**REL-03:** Detect unsupported alternate, missing drawing, unapproved BOM update and mismatch between design/test/manufacturing versions.  
**REL-04:** Show the applicability of every test result to released configurations.  
**REL-05:** Do not release a model merely by setting a YAML status without required PDM/QMS authorization.  
**REL-06:** Manufacturing EOL fixture/procedure limits trace to controlled requirements and safety actions.  
**REL-07:** First-article evidence and open nonconformances remain visible.  
**REL-08:** Distinguish released production configuration from as-built serial/lot history.

**Implementation status:** MDSE source supports partial product structure, source documents, test traces and ECO planning. Complete PDM/MES release control and manufacturing readiness automation are **future** work.

**Next:** [[08 - Sustain, Correct and Improve]], or [[06 - Manage Change, Redlines and Impact]] when production has a deviation.
