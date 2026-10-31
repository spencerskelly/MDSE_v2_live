# MBSE + PLM — Organization-Wide System Definition

**Draft, 2026-10-31.** This folder defines the future organization-wide system from stakeholder needs downward. It does not replace the normative `MDSE_v2/governance/RULESET.md` for current tools. Review the current tool repository and decisions at each chat start.

## Definition sequence

1. [Mission and authority boundaries](00_Mission_and_Boundaries.md)
2. [Stakeholder needs](01_Stakeholder_Needs.md)
3. [Use cases](02_Use_Cases.md)
4. [Candidate requirements](03_Requirements.md)
5. [Reusable functions](04_Functions.md)
6. [Objects and enterprise interfaces](05_Objects_and_Interfaces.md)
7. [End-to-end traceability](06_Traceability_Matrix.md)
8. [Existing-rule reconciliation](07_Rules_Reconciliation.md)
9. [Industry research](08_Industry_Research.md)

## Governing principles

- Reuse existing modeled definitions; no duplicate concepts solely to populate folders.
- Explicitly separate need, use case, requirement, function, object, procedure, architecture constraint, and verification evidence.
- Planning IDs in these files are **not** allocated native IDs or SysML definitions. Approve and reuse existing notes before promotion.
- SysML v2 text owns native semantics; YAML-readable projections are views, not independent authority (D-0108).
- Treat process authority and system-record authority independently. MDSE may federate PDM, CAD, ERP, QMS, MES and other systems rather than replace them.
- Capture version, provenance, scope, owner review, configuration, change impact and test-run evidence; don't invent missing relationships.

## First architectural decision

Decide whether MDSE is initially a **federated engineering knowledge and lifecycle trace layer** or an **authoritative enterprise PLM system of record** for parts, BOMs, change and release. The former is recommended as the first practical release, leaving future ownership decisions explicit.

## Status

Initial baseline: 14 candidate needs, 18 use cases, 16 requirements, 13 functions, 11 logical objects, eight candidate trace slices, research and reconciliation guides. All remain Draft until reviewed.
