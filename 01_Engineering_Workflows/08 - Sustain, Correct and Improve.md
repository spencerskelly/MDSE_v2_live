# Workflow 08 — Sustain, Correct and Improve

**Engineer goal:** Keep released products effective and safe while using production/field evidence to improve the design, sourcing, tests and service procedures.

**Workbench:** Start in Document or Structure from a serial number, failure report, supplier change or product PN. Navigate in one Workbench to Define and Verify as needed; use a separate artifact tab to record findings.

## Typical triggers

Production EOL failure, intermittent field fault, supplier shortage/PCN/obsolete component, quality escape, regulatory update, software security issue, serviceability concern, yield loss, new customer operating conditions or continuous cost improvement.

## Engineer sequence

| Step | Action | Cross-functional review | Output |
|---|---|---|---|
| 1. Capture the event | Record symptoms, location, user, failed unit, serial/lot, dates and evidence | Quality/Service/Manufacturing | Immutable source incident |
| 2. Identify exact configuration | Reconstruct as-built installed hardware, FW/SW, calibration, harness and approved deviations | Manufacturing, Service, Systems | As-built version list |
| 3. Contain risk | Determine severity, safety, affected inventory/field units and immediate restrictions | Quality, Safety, Operations | Containment decision |
| 4. Investigate | Reproduce failure, search related knowledge, compare similar/earlier variants | HW, FW, Test | Root-cause hypotheses |
| 5. Verify root cause | Link measurements, design assumptions, exact components, source reports and false hypotheses | Discipline leads | Supported causal finding |
| 6. Find population | Trace part revision where-used, product/serial effectivity and service application | Systems, Manufacturing, Sourcing | Impacted population and unknowns |
| 7. Select remedy | Compare repair, firmware update, redline, supplier change, design revision, test-limit change or no action | Engineering/Quality | Documented technical disposition |
| 8. Implement approved change | Open ECO/deviation and review all affected parents and tests | Responsible design owners | Controlled modification |
| 9. Confirm effectiveness | Run focused and regression verification, monitor yields/field rates and investigate residual failures | Test, Quality, Service | Objective effectiveness evidence |
| 10. Feed back knowledge | Update requirements, known failure patterns, instructions and future design lessons | Product, Systems, Eng Lead | Reusable lessons and closed issue |

## Example: repeated EOL solenoid or spare-output failure

An EOL test intermittently fails at a connector. Find the **actual installed harness and controller revision** rather than the latest generic part. Compare EOL voltage/load procedure, field unit logs, output-driver design and firmware control states. Check safety/reliability implications and every product using the harness before selecting a new part or changing the test threshold. A test-limit change without product review can conceal a hardware defect.

## Knowledge reuse and feedback

Every completed investigation should connect: originating event → exact configuration → root-cause evidence → affected requirement/interface/part usage → change/disposition → applicable test → effectiveness evidence → updated engineering knowledge.

Do not use **similar term** or shared drawing number as proof of common root cause. Keep negative evidence and uncertainty. Fixes affecting one variant must not automatically be applied to another variant without fit/form/function and test applicability review.

## Production and field controls

- Maintain serial/lot and market effectivity for instructions, hardware and FW versions.
- Keep as-built history even if the current BOM revision changes.
- Distinguish *supplier approved alternate* from *engineering approved design replacement*.
- A temporary deviation has expiration/closure; if it becomes permanent it must enter controlled design release.
- Updated customer/supplier/service material must link the governing released version.
- The service procedure must not permit unauthorized safety bypass.

## Acceptance

- **SUS-01:** Incident ties to exact serial/lot/as-built configuration and source artifacts.
- **SUS-02:** Search and where-used identify every potentially affected model and unknown applicability.
- **SUS-03:** Containment, temporary authorization and permanent fix remain separate records.
- **SUS-04:** Root cause has actual technical evidence, not just an assigned label.
- **SUS-05:** Approved fix triggers parent F/F/F, requirement and verification impact checks.
- **SUS-06:** Effectiveness has post-change objective evidence before closure.
- **SUS-07:** Prior as-built revisions and service applicability remain accessible.
- **SUS-08:** Lessons learned feed into future requirements and design review.

**Current support:** model search, structure, draft ECO and review notes; full MES/field incident data ingestion, serial effectivity and closed-loop corrective action are **not yet demonstrated**.

**Next:** [[01 - Find and Investigate Engineering Information]] for another investigation, [[03 - Define Need, Requirements and Acceptance]] for a future product, or [[06 - Manage Change, Redlines and Impact]] for a controlled revision.
