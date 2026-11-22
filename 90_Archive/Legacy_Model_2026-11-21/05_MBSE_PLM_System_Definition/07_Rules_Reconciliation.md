# Migration of existing MDSE governance/tool rules into the top-down enterprise model

**Do not automatically turn the old RULESET into system requirements.** The current `MDSE_v2/governance/RULESET.md` and `DECISIONS.md` continue to govern the *current tools*. This new top-down model defines the desired enterprise MBSE/PLM system. The two will be reconciled through explicit decisions, not by silently editing history.

## Classification workflow

For each existing rule and clause:
1. Identify the original authoritative source revision and current Active/Proposed/Check/Unreviewed status. Include retirement/supersession.
2. Classify: stakeholder need; use case; system requirement; engineering/design constraint; reusable function; object/interface responsibility; implementation rule; process/procedure; verification criterion; legacy-only; out-of-scope.
3. Compare against already-modeled enterprise concept; **reuse by identity** if semantically equivalent rather than creating a duplicate.
4. Add source evidence and trace to the existing or new concept; mark candidate/approved/validated separately.
5. Review scope and authority: future enterprise objective versus today's toolchain implementation.
6. Promote only approved concepts to native SysML v2 notes with governed UID/ID and correct relationship ownership, then parser-test.
7. Document retired or deferred rules without deleting historical evidence.

## Reconciliation register format

| Source rule | Version/status | Source text or clause | Proposed concept | Target existing note or planning ID | Disposition | Owner decision | Model/parsing evidence |
|---|---|---|---|---|---|---|---|
| GOV-001 | Active in earlier reviewed baseline; verify current | Direct-to-main and green CI | Tool change/release governance | UC-P17 / FN-P13 / NEED-P12 | Review and map | GOV-001 owner direction: Adaptable Tool / Integrate an Approved Software Change / Manage Software Change | Not promoted |
| GOV-002 | Verify current | TypeScript/shared core + parser runtime boundary | Technical architecture/deployment constraint | REQ-P16 and architecture review | Candidate design decision | Pending | Not promoted |
| GOV-003 | Verify current | Unreviewed rule not binding until Active | Rule approval process | FN-P13 or governance workflow candidate | Pending | Pending | Not promoted |

## Source matrices
- [Original tool-rule trace matrix](../RULE_TO_MODEL_TRACEABILITY_MATRIX.md) — original derived concepts and source IDs.
- [Previous governance trace review](../74_Semantic_Review/GOV_RULE_TRACE_REVIEW_2026-10-25.md) — prior owner decisions.
- [Current ruleset](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md).

## Prevent scope confusion
A process instruction to push directly to main is not the same as an enterprise need for controlled product changes. Tool TypeScript implementation policy is not a customer requirement for PLM product data integrity. Keep both where applicable, with distinct scope/owners.
