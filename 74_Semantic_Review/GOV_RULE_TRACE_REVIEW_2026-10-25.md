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
