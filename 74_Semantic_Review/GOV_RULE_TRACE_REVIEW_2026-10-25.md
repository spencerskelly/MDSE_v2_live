# Governance rule trace review — 2026-10-25

Scope: one rule at a time. User-approved modeling direction is distinguished from source governance, existing draft element definitions, authoring work and validated native SysML relationships. Do not infer satisfaction from navigation, provenance, or a proposed association.

## GOV-001 — Owner decision recorded

**Source:** MDSE_v2/governance/RULESET.md, GOV-001 / D-0005. Status in referenced snapshot: Active.

**Verbatim source rule:** Changes are pushed directly to `main`. Every push must leave CI green; a red `main` is fixed before any other work. (D-0005)

**Owner decision (2026-10-25):** Model the development workflow. Use **Manage software change** as the function, **Integrate an approved software change** as the use case, and **Adaptable tool** as the customer/stakeholder need.

**Existing source and derivation notes:**
- [[GOV-001]] (INFO-20001) — original rule reference; administrative provenance, not SysML model relationship.
- [[GOV-001 - Analysis]] (INFO-22001) — process/governance constraint; two segments.
- [[REQ-31001 - GOV-001 Statement 1]] — Draft requirement candidate: "Changes are pushed directly to `main`."
- [[REQ-31002 - GOV-001 Statement 2]] — Draft requirement candidate: "Every push must leave CI green; a red `main` is fixed before any other work."
- [[VER-31001 - GOV-001 Rule Verification]] — Draft verification case targeting the two candidates; executionStatus not-run.

**Approved intended trace concept (not yet implemented as new model notes):**
`Adaptable tool [stakeholder need] <- Integrate an approved software change [use case] <- Manage software change [function] <- GOV-001 governance obligations / REQ-31001 and REQ-31002`.

**Open engineering steps:** Search/reuse existing definition identities before creating three new notes; decompose process versus system-enforced behavior; define actor, trigger, scenarios and acceptance criteria; map actual responsible software objects only with evidence; place each native SysML relationship in its legitimate owning definition/usage; run parser/graph/Workbench checks. The user's modeling decision is approved direction, not an approval of unreviewed requirement statements, a claim that software implements enforcement, or a statement that test execution passed.

## GOV-002 — Awaiting owner review

**Verbatim source rule (Active):** Tools are written in TypeScript and share one core library. Python and Java are used only for CI oracles and the SysML v2 parser gate; users never run them. (D-0007)

- [[GOV-002]] (INFO-20002), [[GOV-002 - Analysis]] (INFO-22002).
- [[REQ-31003 - GOV-002 Statement 1]] — Draft: "Tools are written in TypeScript and share one core library."
- [[REQ-31004 - GOV-002 Statement 2]] — Draft: "Python and Java are used only for CI oracles and the SysML v2 parser gate; users never run them."
- [[VER-31002 - GOV-002 Rule Verification]] — Draft; not-run; checks both clauses.
- Proposed associations: [[Ingest and Reconcile Engineering Sources]] (BEH-00002), [[Maintain and Improve Model Knowledge]] (BEH-00007), [[Import an Engineering Model]] (UC-00001), [[Correct or Complete Knowledge]] (UC-00008), [[MDSE Core]], [[MDSE Base Vault]]. These are heuristic, not established as native requirement-to-function links.
- Existing UC-00001 uses BEH-00002 and refines [[Engineering Knowledge Base]] (STK-00013); existing UC-00008 uses BEH-00007 and refines the same need. **However, the TypeScript/core/CI technology constraint is not an established functional refinement of either scenario**. Keep all proposed GOV-002 links provisional until owner decides whether to model as development architecture / runtime distribution constraints or attach to these flows.
- Owner disposition: pending.

## Review discipline
Preserve original rule text, rule IDs, source authority and existing Draft status. Distinguish provenance, proposed navigation, valid native SysML semantics and executed evidence. Continue GOV-003 only after GOV-002 review.


## 2026-10-28 — Targeted semantic audit: GOV-002 through GOV-005

This review corrects the root matrix **as a traceability view**, without altering normative rules, pre-existing Draft requirement/verification notes or their last `## SysML v2` blocks. No proposed association is promoted to a new native model relationship. All 12 derived concept rows for these four rules have revised trace qualifications in `RULE_TO_MODEL_TRACEABILITY_MATRIX.md`.

| Rule | Actual source meaning | Derived requirements | Verification | Reviewed model-chain disposition |
|---|---|---|---|---|
| [[GOV-002]] | TypeScript/shared core; Python/Java confined to CI/parser, not end users | [[REQ-31003 - GOV-002 Statement 1]]; [[REQ-31004 - GOV-002 Statement 2]] | [[VER-31002 - GOV-002 Rule Verification]] | **Architecture/distribution constraint.** Previous heuristic BEH-00002/BEH-00007 and UC-00001/UC-00008 links do not logically establish this rule. [[MDSE Core]] is relevant design context, not proven allocation. Need/use case/function remains unresolved. |
| [[GOV-003]] | An Unreviewed rule is nonbinding; builds cannot rely on it until owner activates it | [[REQ-31005 - GOV-003 Statement 1]]; [[REQ-31006 - GOV-003 Statement 2]] | [[VER-31003 - GOV-003 Rule Verification]] | **Rule lifecycle approval constraint.** No existing modeled use case or behavior explicitly owns review/promotion of governing rules. No software allocation established. |
| [[GOV-004]] | Rules are authoritative in RULESET.md; decisions that modify them name the affected rule in DECISIONS.md | [[REQ-31007 - GOV-004 Statement 1]]; [[REQ-31008 - GOV-004 Statement 2]] | [[VER-31004 - GOV-004 Rule Verification]] | **Ruleset authority and decision record constraint.** UC-00008 Correct or Complete Knowledge and BEH-00007 Maintain and Improve Model Knowledge operate on engineering knowledge, not governance rules. Their previous provisional association is unsuitable as a demonstrated chain. |
| [[GOV-005]] | MDSE_v2 is authoritative source for tools/rules/schema; historical Test_Vault_ and MDSE_Workbench do not override it | [[REQ-31009 - GOV-005 Statement 1]]; [[REQ-31010 - GOV-005 Statement 2]] | [[VER-31005 - GOV-005 Rule Verification]] | **Repository authority boundary.** No existing need, use case or function is evidenced to enforce this rule. Core and Base Vault are technical elements, but not proved repository governance owners. |

All ten requirements and four verification cases above are **Draft** (one verification definition per rule, no executed case evidence from inspected notes). The matrix preserves the source rule and derivation, while removing misleading assertions of connected stakeholder need or active software ownership.

### Reusable modeling concepts for owner review, not yet created as notes

- **Governed Development Lifecycle** (candidate use-case domain): engineer reviews, approves and integrates changes under explicit repository policy.
- **Maintain Governance Rule Lifecycle** (candidate reusable function): identify, review, approve, retire and trace rule changes to decisions without turning Unreviewed suggestions into binding requirements.
- **Distribute Usable MDSE Tools** (candidate use-case/function domain): provide an accessible runtime without requiring end users to install or execute test/parser tooling.
- **Source Authority Integrity** (candidate need): engineers and maintainers can identify the authoritative current tool/rule/schema and distinguish archives from governing sources.

These are semantic candidates only. They may overlap the GOV-001 owner-approved *Adaptable Tool* workflow; avoid creating duplicate definitions until the owner chooses structure and existing model coverage is reviewed.

### Required acceptance to close a trace

1. Resolve whether the original governance constraint should remain process governance or become a behavior enforced by a modeled software object.
2. Verify the actual stakeholder and actor, then reuse a current Need/Use Case/Function if it genuinely captures that intent.
3. Record the unique derived requirement identity and independently meaningful acceptance criteria.
4. Place valid native SysML relationships in the owning SysML model definitions and validate assembled syntax, semantic endpoints and Workbench projection.
5. Link executed CI or manual test evidence separately from the verification definition. An indexed graph edge or source test file alone is insufficient.

**Status:** semantic trace view corrected; model creation/approval/parser/test execution not performed.
