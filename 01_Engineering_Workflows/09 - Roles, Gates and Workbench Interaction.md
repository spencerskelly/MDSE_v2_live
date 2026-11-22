# Workflow 09 — Roles, Gates and Workbench Interaction

**Goal:** Make MDSE usable by a real engineering team. A person must be able to complete their work without navigating a taxonomy of hundreds of historical requirement notes, while reviewers retain traceable decisions and evidence.

This is a **proposed responsibility and design-gate model**, not a declaration of current QMS authority or a replacement for authorized approval systems.

## Roles and natural entry points

| Role | First question | Workbench entry | Typical output |
|---|---|---|---|
| Applications/Product | What customer use/problem matters, and what is promised? | Document → Define | Need/use context and scope |
| Systems/Technical lead | How do use cases, requirements, interfaces and variants relate? | Define / Structure / Verify | Architecture, trade and trace matrix |
| HW engineering | Which power, PCB, connector, thermal or mechanical design is impacted? | Structure / Define | Schematics, usage-specific design decisions, BOM candidates |
| Firmware/software | Which state, protocol, build and safety ownership apply? | Define / Structure | Behavior/interface/software design and version evidence |
| CAD/mechanical | Does the revision fit, mount, cool and assemble? | Structure / Document | Drawing and fit/form review |
| Verification/Test | How do we prove the specific configuration meets its criteria? | Verify / Document | Plan, test case and actual evidence |
| Quality/Regulatory | Are risks, approvals, conformance and exceptions controlled? | Verify / Document | Disposition and acceptance decisions |
| Manufacturing Engineering | Can we build/program/inspect/test this released version repeatedly? | Structure / Document | MBOM/routing, instructions and EOL readiness |
| Sourcing/Supplier Quality | Can the approved part or alternate be obtained and qualified? | Structure / Document | Qualified sourcing and PCN/AVL evidence |
| Service/Field | Which serial/configuration is affected and what corrective action is authorized? | Document / Structure | Incident, applicability and repair feedback |
| Engineering manager | What decisions and unresolved gates threaten delivery? | In-panel status/lens dashboard | Gate decision and owner assignment |

One person can occupy more than one role on a small team, but a cross-discipline critical decision must retain distinct required review and approval evidence.

## Workbench interaction pattern

1. **Choose work:** open a current product/program, issue, part, need, requirement or saved investigation. The Workbench establishes context without requiring the engineer to select a folder classification first.
2. **Investigate:** search and trace related notes/parts in the **same** panel; select relevant rows, expand members and inspect limitations.
3. **Open evidence:** note, Canvas, drawing or Base opens a distinct editor artifact tab; tool stays visible. Saved artifacts are independently revisitable.
4. **Develop:** create and edit controlled records with preview, required fields and eligible relationship type/direction; apply only after user confirmation.
5. **Review:** see explicit impacted items, missing evidence, unapproved decisions, owner and deadlines; use external signoff authority where required.
6. **Hand off:** link the output and target version to the next responsible team member; preserve a stable permalink/UID and issue reference.
7. **Resume:** another engineer can open the same issue/product context, inspect the latest approved status and pick up the next action without recreating the investigation.

## Review-gate ownership matrix (proposal)

| Gate | Primary accountable owner | Required contributors | Mandatory output |
|---|---|---|---|
| G0 opportunity/intake | Product/Engineering lead | Applications, Systems, relevant source owner | Clear problem and intake scope |
| G1 requirements | Systems/Engineering lead | Product, HW/FW/SW, Test, Quality | Reviewed measurable requirements/acceptance |
| G2 architecture | System architect/Engineering lead | HW, FW, ME, Test, Quality, Manufacturing | Architecture decisions and safety/interface gaps |
| G3 design candidate | Design owner | HW/FW/SW/ME, CAD, Test, Sourcing | Pinned candidate configuration and validation plan |
| G4 verification closure | Test/Systems | Design owners, Quality/Regulatory | Actual test/validation evidence and exceptions |
| G5 production release | Authorized release owner / QMS | Manufacturing, Quality, Design, Test, Sourcing | Released documents, BOM/FW/config and process readiness |
| G6 engineering change closure | ECO/Change owner | Affected parent owners, Quality, Manufacturing | Effectivity, parent impact, released changes, closed redline |

**Owner fields and reviewer requirements must be adapted to the actual company's approval matrix before enforcement.** The tool should report which approval is missing, not invent one.

## Ownership of records and review state

- **Draft engineering assertion:** engineer working content; cannot satisfy release gate alone.
- **Modeled relationship:** native SysML owned by the relevant note, distinct from a user wiki link.
- **Proposed change:** preview, candidate or ECO request; not automatically released.
- **Accepted gate:** recorded decision, evidence, approver, actual timestamp and applicable configuration.
- **Released artifact:** immutable revision/identifier under the system that controls release.
- **Executed test:** raw evidence plus evaluated result and selected product revision, not just a test-case definition.
- **Archived historical evidence:** available to investigate, but excluded from current active modeling decisions by default.

## What the Workbench should show at each handoff

A single compact task context: selected item and product configuration; goal; relevant source and revision; status; unresolved issues/flags; affected relationships/parents; requested action; responsible owner; due/next gate; authoritative approval link. One-click open to underlying note/canvas/test artifacts in editor tabs. Switching between Document, Define, Structure and Verify never replaces a working note or multiplies tool views.

## Acceptance scenarios

- **TEAM-01:** Applications hands a need to Systems with source, version and scenario; Systems identifies missing acceptance criteria.
- **TEAM-02:** HW and FW inspect the same interface and disagree on safety ownership; both see the unresolved decision and rationale.
- **TEAM-03:** Test finds a failing case and creates an issue linked to the as-tested BOM/FW; design owner finds it without reconstructing context.
- **TEAM-04:** Manufacturing identifies a supplier substitution; Change workflow shows all parent assemblies/variants and required F/F/F reviewers.
- **TEAM-05:** A reviewer can distinguish provisional evidence and missing signoff from an approved released record.
- **TEAM-06:** New team member finds current tool and workflow guidance without wading through archived generated rule candidates.
- **TEAM-07:** All work area switches keep one persistent Workbench, with independent and reusable note/Canvas/Base editor tabs.
- **TEAM-08:** Same model concept can be used by multiple products while revision/effectivity decisions remain usage-specific.

## Implementation plan suggestion

Start with **Find and Investigate**, then **Change/Where Used**, then **Requirements and Verification**, followed by **Release package assembly**. These paths create immediate operational value while setting a foundation for full PLM/MES integration. For each workflow implement: context, read-only query, actionable review output, safe edit/transaction, test evidence and user-acceptance gates. Keep the actual tool behavior in MDSE_v2 and update the five specs in 00_Tool_Definitions when capabilities change.

**Related:** [[README|Workflow overview]], [[06 - Manage Change, Redlines and Impact]], [[07 - Release Design to Production]], and [[00_Tool_Definitions/06 - Tool Interfaces and Workflows|Toolset interfaces]].
