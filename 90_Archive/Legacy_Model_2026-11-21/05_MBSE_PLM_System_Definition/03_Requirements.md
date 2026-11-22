# Candidate system requirements — derived from stakeholder needs and use cases

**Status: Draft / not accepted.** Each is intentionally outcome-based and testable in principle; numeric targets, owners and verification criteria remain to be defined. This is NOT a replacement for `MDSE_v2/governance/RULESET.md`.

| ID | Candidate system obligation | Need | Use case | Candidate verification |
|---|---|---|---|---|
| REQ-P01 | The system shall maintain unique stable identities and typed relationships across product and lifecycle records. | P01 | UC-P04,P07 | Duplicate identity/edge round-trip |
| REQ-P02 | The system shall distinguish owner, source version, approval status and authoritative source for each governed information type. | P01,P08 | UC-P05,P10 | Origin/authority audit |
| REQ-P03 | The system shall support trace traversal from stakeholder needs through requirements, functions, objects, verification and configured product baselines where such links exist. | P02 | UC-P02,P03,P11 | Endpoint/path audit |
| REQ-P04 | The system shall report missing or invalid links without manufacturing inferred relationships. | P02,P07 | UC-P14 | Negative link fixture |
| REQ-P05 | The system shall support configurable, variant-specific, revisioned product and BOM structures with effectivity context. | P05,P06 | UC-P07,P08,P09 | Revision/variant fixtures |
| REQ-P06 | The system shall maintain reviewable proposed changes, approval decisions, affected item sets and resulting released revisions. | P04,P08 | UC-P06,P10 | Change lifecycle scenario |
| REQ-P07 | The system shall preserve accepted engineering edits and surface import conflicts with original-source provenance. | P08 | UC-P05,P10 | Re-import/conflict test |
| REQ-P08 | The system shall support requirement-linked verification definitions, execution results, deviations and evidence as distinct artifacts. | P07 | UC-P11 | Test/run association audit |
| REQ-P09 | The system shall identify the authoritative external system and version for externally managed CAD, ERP, QMS, MES and other records. | P01,P11 | UC-P05,P09,P12 | Broken/stale external link checks |
| REQ-P10 | The system shall provide role-controlled search, navigation, review, publishing and export of approved information. | P03,P11,P14 | UC-P04,P15,P16 | Role/access and export fixture |
| REQ-P11 | The system shall represent engineering-to-manufacturing and service product structure differences without conflating BOM quantity, SysML multiplicity or units. | P06 | UC-P09 | Structure transform scenario |
| REQ-P12 | The system shall permit change impact queries across requirements, models, parts, documents, tests and affected variants. | P04 | UC-P06 | Cross-domain impact scenario |
| REQ-P13 | The system shall associate as-built/as-maintained product instances with applicable approved configurations when provided by source systems. | P09 | UC-P13 | Serial/variant applicability check |
| REQ-P14 | The system shall produce auditable, reproducible baseline-specific reports and generated documents. | P10,P14 | UC-P14,P15 | Baseline report reproducibility |
| REQ-P15 | The system shall retain traceable links between field quality observations, root-cause investigations, corrective actions and affected releases. | P13 | UC-P12,P18 | CAPA/field scenario |
| REQ-P16 | The system shall preserve identity and traceability across tool/schema releases, identifying compatibility failures before applying updates. | P12 | UC-P17 | Upgrade/rollback compatibility test |

### Qualification
Need references in this note are **proposed derivation candidates**, not approved `derive requirement` or `satisfy` relations. Approval of a system requirement does not imply software implementation or test execution. Split compound requirements on review.
