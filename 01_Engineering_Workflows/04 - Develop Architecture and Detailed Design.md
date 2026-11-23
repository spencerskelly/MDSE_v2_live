# Workflow 04 — Develop Architecture and Detailed Design

**Engineer goal:** Establish a coherent system design and make controlled implementation choices across HW, FW, SW, electrical, mechanical and manufacturing interfaces. The team must see **which reusable concept is used where**, and how that usage connects to real part numbers and revisions.

**Workbench:** Define for function/interface decisions; Structure for architecture, BOM and connections; Document for design evidence; Verify for design constraints. All modes remain inside one panel or pop-out.


**Workflow scope:** Structure and related Define views must be rooted in the selected model element. "Full tree" follows real ownership/typing relationships; it is not an option to list the full vault. When the required concept is not connected, search by name/alias/ID/part number and deliberately add the result to the active Canvas. A visual card without a native relationship does not make it a modeled child or interface.

## Inputs

G1 approved needs/requirements and operating scenarios; previous architectures, released part/drawing revisions, supplier capabilities, cost and schedule constraints, safety/risk analysis and compliance markets.

## Activities and decisions

| Step | Engineering task | Participants | Reviewed outcome |
|---|---|---|---|
| 1. Reuse assessment | Investigate existing product and technology, identify adaptable modules | Systems, HW, FW, manufacturing | Reuse/change/new decision |
| 2. System architecture | Define subsystems, interfaces, part/port boundaries and behavioral allocation | Systems with discipline leads | Architecture candidate and viewpoints |
| 3. Trade studies | Compare power topology, MCU, sensor, communications, thermal, mechanical and servicing alternatives | HW, FW, Test, Sourcing | Option matrix, choice and rationale |
| 4. Safety strategy | Identify safe-state ownership, independent protections, fault responses and failure propagation | HW/FW, Quality, Safety | Hazard mitigation proposals and safety requirements |
| 5. Interface contract | Define power, CAN, discrete IO, physical pinout, network protocols and software APIs | HW/FW/SW/ME | Interface specs with direction, range, modes and errors |
| 6. Detailed electrical/mechanical design | Define schematics, PCBAs, component ratings, EMC/thermal, cables, enclosure and fit | HW, ME, CAD | Controlled CAD/drawing candidates and analysis |
| 7. Firmware/software design | Define state machines, control authority, communication, security, config and boot/recovery | FW/SW, Systems | Versioned FW/SW architecture/configuration |
| 8. Product structure | Reconcile architecture with real part numbers, CL1 revisions, alternates, quantity, make/buy and usage locations | HW, ME, Mfg, Sourcing | EBOM candidate with usage-level revision pins |
| 9. Review against requirements | Trace design elements and their actual usages to requirements and planned verification | Systems, Test, Quality | Design compliance gaps and open issues |
| 10. Freeze for prototype | Fix design evidence revisions, test configuration and risk disposition | Cross-functional reviewers | G2 architecture / G3 design candidate |

## Example: power electronics product

A charger comprises power stage, controller, contactors, battery/harness interfaces, communications sidecar, thermal management, enclosure and software. The MCU must own the safety-critical contactor decision even when a sidecar requests charging. A CAN interface definition captures physical/transceiver behavior and protocol separately from a specific harness pin allocation; the harness and variant usage determine actual pin ordering.

Use one reusable function or component concept when appropriate. Its occurrences in different charger products may have **different BOM PNs, revisions or allowed configurations**. A manufacturing harness may differ from a logical interface yet must trace to it. Do not assume a drawing revision and firmware version advance together.

## Core information model

- **Functional:** behaviors, states, error and safe-state transitions, use scenarios.
- **Logical/physical:** parts, ports, interfaces, flows, connectors, resource constraints.
- **Product configuration:** product line, variant, specific BOM occurrence, PN, CL1/CL2 revision pin, quantity and approved alternate.
- **Engineering artifacts:** CAD/schematic/drawing, spreadsheet, software build, wire list, risk record and test fixture, each with version/source.
- **Decision/evidence:** trade alternatives, assumptions, approval, verification plan and unresolved flags.

A native SysML specialization is not automatically an ECO/revision chain. A material part replacement may need an explicit dependency/supersession; an owned assembly usage must still be evaluated for the precise revision to install.

## Workbench interactions

Select system → Structure hierarchy → expand interfaces and part usages → open selected note/CAD in a separate tab → select related requirement with context switch inside Workbench → inspect unmet requirements → create or preview one governed design element → choose eligible relationship → Apply only after reviewing actual native text → save viewpoint Canvas if useful.

For 1,000+ components use filter, pagination, category grouping and nested inspection. Avoid generating one model note per trivial attribute if the source drawing or BOM already holds reliable information. Do not infer circuit topology solely from a BOM; a schematic/netlist and pin-connectivity evidence are required.

## Decision gate G2/G3

Architecture review accepts: subsystem boundaries, safety interface ownership, trade decision, open risks, product variants, hardware/firmware/software interface assumptions, trace coverage and test strategy. Design freeze pins candidate drawing/BOM/FW/SW revisions and configuration, not simply a timestamp on a diagram.

## Acceptance

- **DES-01:** Architecture distinguishes definition from usage and logical from manufacturing structure.
- **DES-02:** Every critical interface has complete endpoint, direction, operating range and fault response.
- **DES-03:** BOM usage pins released/proposed part revision explicitly, including alternate/effectivity.
- **DES-04:** One chosen trade option includes alternatives, rationale and owner.
- **DES-05:** Safety-related requirements and owner allocations are reviewable; no unsupported automatic satisfaction.
- **DES-06:** Open requirements/test gaps and unresolved connections are visible at design review.
- **DES-07:** Reviewers can return to a previous note/Canvas without losing workbench context.
- **DES-08:** G3 records configuration identity needed for repeatable verification.

**Proposed controlled Structure implementation:** [[10 - Create and Change a Controlled Assembly]] specifies new PN issuance through the MDSE registry, physical part vs conceptual model identity, revision-pinned EBOM, approved CAD references through existing PDM, and preview/impact/release gating. This is future work, not yet an active numbering or release function.

**Current source support:** Structure, interface/member scans, BOM views, part lifecycle, edit previews, comparison and Canvas. Full schematic/netlist and manufacturing-variant synthesis are not proven. **Next:** [[05 - Verify and Validate the Design]], or [[06 - Manage Change, Redlines and Impact]] for a design revision.
