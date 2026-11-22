# Workflow 03 — Define Need, Requirements and Acceptance

**Engineer goal:** Convert a commercial/customer/field request into a reviewable engineering problem with measurable acceptance evidence—before the team selects a part or starts detailed design.

**Primary Workbench area:** **Define**, with Document for original need/reference records and Verify for acceptance planning. Model notes open in distinct editor tabs; Workbench remains in one panel.

## Entry triggers

Customer specification, sales/application request, field-reliability improvement, cost/sourcing problem, regulatory change, performance limitation, new market/product variant or safety concern.

## Engineer sequence

| Step | Activity | Key question | Deliverable |
|---|---|---|---|
| 1. Capture the original request | Attach exact customer, commercial and technical evidence | Who needs what, when, and under which use conditions? | Stakeholder need with source |
| 2. Define operating context | Identify geography, users, loads/batteries, power, environment, maintenance and interfaces | What does the product experience in real operation? | Context/use-case scenarios |
| 3. Analyze existing product fit | Search prior designs, variants, warranty/field issues and available parts | Can an existing released design meet this? | Reuse/modify/new comparison |
| 4. Separate need from solution | Describe desired behavior without prematurely choosing a component | Is this a requirement, use case, design choice or evidence? | Cleanly typed concept set |
| 5. Establish boundaries | Identify system, external systems, excluded scenarios, variants and safety-owned interfaces | Which discipline/system is responsible for each behavior? | Scope and interfaces |
| 6. Decompose requirements | Write uniquely identifiable, verifiable statements with units, tolerances and modes | How will pass/fail be measured? | Baseline candidate requirements |
| 7. Assign verification intent | Select analysis, inspection, demonstration or test for each | Is acceptance possible with current lab/evidence? | Requirement-to-verification matrix |
| 8. Trade risk and feasibility | Engage HW/FW/SW/Test/Quality/Manufacturing/Sourcing | Are cost, lead time, performance, compliance and schedule feasible? | Options, assumptions, risk register |
| 9. Review and approve baseline | Engineering lead and stakeholders resolve conflicts and open items | Are all critical scenarios covered and signed? | G1 baseline/decision record |

## Example: next-generation industrial charger

Application engineering identifies new regional environmental limits, required battery chemistry interface, CAN behavior, serviceability and charger power. System Engineering captures both normal charging and fault/shutdown cases. HW owns protection and electrical isolation; FW owns safe actuation requests, communication recovery and fault-state handling; mechanical owns ingress protection and heat; regulatory/test define compliance and durability evidence; manufacturing addresses assembly and EOL feasibility.

A solution such as “use an ESP sidecar” is a **design proposal**, not a replacement for requirements such as communication recovery time or preventing an unauthorized contactor closure.

## Requirements quality checks

Each requirement should have exactly one primary obligation, a clear subject, measurable outcome, known mode/condition, units/range if applicable, rationale/source and verification owner. A decomposition may create multiple requirements without creating a note per trivial sentence. Where requirements govern one usage or product configuration, link that usage precisely; do not create a new reusable definition for every product line.

**Safety and compliance:** identify hazards and safety-owned actions separately from noncritical user experience, document applicable regulatory markets and keep assumptions visible. Do not equate prototype passing tests with a completed safety assessment.

## Team handoff

- Product/Applications: intended outcome, urgency, user scenario and acceptance priority.
- Systems: system boundary, requirement quality, model relationships and trace coverage.
- HW/FW/SW/ME: feasibility and allocation proposals, not premature unreviewed satisfaction claims.
- Test/Quality/Regulatory: verifiability, hazards, regulatory evidence and objective acceptance.
- Manufacturing/Sourcing/Service: production/maintenance constraints and supply risks.
- Engineering decision owner: approves G1 or returns requirements for correction.

## Tool needs and acceptance

- Search by need/alias/context, inspect similar solutions and unresolved gaps.
- Guided templates for needs, use cases, requirements and rationale.
- Valid **native** derive/refine/satisfy/verify where governing semantics allow them; no invented relationships.
- Interactive trace table showing missing verifications, contradictory requirements and unassigned owners.
- Review status and version approval distinct from model file existence.

**Acceptance:** **REQF-01** requirement has source/rationale; **REQF-02** use scenarios include nominal/failure/maintenance; **REQF-03** acceptance is measurable; **REQF-04** every critical requirement has a planned verification and owner; **REQF-05** G1 version is preserved; **REQF-06** model relationship changes require preview/Apply; **REQF-07** gaps remain visible.

**Current capability:** governed note creation/trace views and relationship editing exist in merged Workbench source. Complete configurable requirement approval, hazard/market standards coverage and formal gate execution remain proposed.

**Next:** [[04 - Develop Architecture and Detailed Design]].
