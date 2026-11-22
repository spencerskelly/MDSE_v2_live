# Workflow 05 — Verify and Validate the Design

**Engineer goal:** Prove that a specific **configuration** meets its engineering requirements and is suitable for intended use, then make failures and coverage gaps actionable before release.

**Workbench:** Verify for trace/coverage and case review; Structure for unit and usage under test; Document for procedures and evidence; Define for requirement clarification. The Workbench remains in one panel/pop-out.


**Workflow scope:** Requirements and functional/verification trace views show only records related to the selected modeled element. No "all requirements in vault" workflow option is allowed. When an unlinked verification case, requirement, design, or source is needed, locate it with Search and explicitly add it to the active Canvas for investigation; model satisfaction/verification remains a separate reviewed native SysML edit.

## Verification versus validation

**Verification:** Does the design meet its defined technical requirements?  
**Validation:** Does the delivered solution work for the intended user and real operating scenario?

An existing verification-case note is a **plan**, not a passing result. A preliminary test, an uncalibrated fixture, a substituted part, or an old firmware build cannot silently be treated as release evidence for the final configuration.

## Preparation and execution

| Step | Engineer activity | Review detail | Outcome |
|---|---|---|---|
| 1. Establish test article | Select serial/prototype, BOM revision pins, FW/SW builds, calibration and configuration | Exact as-tested identity and deviations | Configuration baseline |
| 2. Derive verification coverage | Identify requirements and their verify objectives; select test/inspection/analysis/demo | Units, tolerance, applicable markets and worst-case | Verification matrix |
| 3. Plan campaigns | Group by product, region, revision, project milestone and laboratory resources | Test plan, legs, cases, activities, environment, fixture | Approved test plan |
| 4. Prepare equipment | Check batteries, simulator loads, probes, insulation, safety controls, logger and operator qualification | Hazards, calibration, power availability, shutdown strategy | Safe setup |
| 5. Execute tests | Record procedure version, preconditions, actual steps, measured values and exceptions | Engineer/date, operating point, raw file, photos | Per-case execution record |
| 6. Evaluate results | Compare measured outcomes to objective pass/fail limit, account for uncertainty | Pass / fail / blocked / not run / conditionally accepted | Reviewed disposition |
| 7. Resolve anomalies | Create defect/issue and link reproducible configuration, cause and repair | Does repair change another requirement or product? | Fix, ECO or controlled deviation |
| 8. Regression | Re-run affected tests after HW/FW/SW/BOM change | Which evidence remains valid under changed configuration? | Updated coverage |
| 9. Validate use | Representative operators/applications, field and environmental scenarios | Usability, maintainability, adverse conditions | Validation assessment |
| 10. Review closure | Review safety/compliance gaps, test escapes and approved exceptions | Evidence complete enough to support release? | G4 closure or explicit hold |

## Example: charger verification

Cover charge power/efficiency, output-voltage regulation, overtemperature control and shutdown, contactor safety authority, CAN protocol faults, insulation, EMC, communications retry/rollback, field service, environmental stress and relevant jurisdictional approvals. Different MHE/GSE/BMID variants may need different subsets and evidence, but every release configuration must identify which results apply.

One engineer may run a test, but design, test and Quality reviewers should preserve distinct approval roles on safety-critical or regulatory evidence. A failing high-temperature shutdown case must not be closed by merely changing the expected result.

## Records and data ownership

Requirement and verification case: native modeled intent.  
Procedure and test configuration: controlled work instructions, versions and planned setup.  
Execution record: measured data, environment, unit serial/lot, firmware, equipment and operator.  
Evidence: raw logs, photos, waveforms, lab reports and certifications with immutable references.  
Disposition: reviewer decision, open anomaly, retest plan, waiver or production restriction.

MDSE provides relationships and review context; it need not duplicate all raw time-series data. A link to the exact evidence file/revision is enough if content integrity and access are assured.

## Workbench behavior

Selecting a requirement opens planned verification and evidence coverage inside the current panel. Clicking a result opens its note/evidence in a separate tab. A structure filter can show only the as-tested parts/firmware. Creating a test case requires preview/Apply; attaching a result must not silently satisfy or mark a requirement passed. A failed case navigates to the same issue/ECO process without recreating context.

## Test automation boundary

The current Workbench provides model trace and review views, but **full automatic test execution, result ingestion, and regulated approval workflow are not established**. The workflow defines required outcomes for future implementation.

## Acceptance

- **VERF-01:** Every critical requirement has a planned verification method and clear acceptance criteria.
- **VERF-02:** Every result points to exact test article, drawing/BOM/FW version, procedure revision and measurements.
- **VERF-03:** Pass/fail/blocked/not-run values remain distinguishable.
- **VERF-04:** Result is not inherited automatically by a changed variant without applicability review.
- **VERF-05:** A defect generates assigned corrective action and targeted regression coverage.
- **VERF-06:** Verification and user validation are separately traceable.
- **VERF-07:** G4 review lists every open safety/compliance issue and justification.
- **VERF-08:** Changing a tool view never marks a case passed or changes authoritative model text.

**Next:** [[07 - Release Design to Production]] when G4 succeeds; [[06 - Manage Change, Redlines and Impact]] if implementation or test evidence must change.
