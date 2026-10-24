# DAT derived requirement trace review — folder 5

**Scope:** 6 existing Draft requirements (REQ-31031…31036), 2 Active data-governance rules DAT-001/002, and existing cases VER-31013/014.

All six are linked to their source rule, `71_Rule_Analysis`, [[Protect Engineering Data]], supporting [[Import an Engineering Model]], existing importer/core architecture, and case definitions. Six typed usages were added to [[MDSE Toolset Composition]]. Five retain objective-level native `verify` intent and independent acceptance wording; REQ-31036 is **held**.

| Requirement | Source | Case | Disposition |
|---|---|---|---|
| REQ-31031 | DAT-001 | VER-31013 | Private source and imported real content excluded from public repo |
| REQ-31032 | DAT-001 | VER-31013 | No false independent native parser certification |
| REQ-31033 | DAT-002 | VER-31014 | Synthetic-only public content |
| REQ-31034 | DAT-002 | VER-31014 | No public real product/customer/drawing/source records |
| REQ-31035 | DAT-002 | VER-31014 | Private/local real imports; scans are backstops |
| REQ-31036 | DAT-002 | VER-31014 | Historical Test_Vault_ authority conflicts with current MDSE_v2 tool authority; **not a positive verify target** |

**No new model definitions required:** stakeholder, import use case, architecture and both cases already exist. The source line is deliberately preserved verbatim as provenance; change of binding authority requires governance updates rather than silently rewriting the source reference.

**Open gates:** actual privacy/policy fixture executions, release publication review, source-vs-published model scans, independent assembled SysML v2 parser validation, and engineer approval. Requirements remain Draft, cases remain not-run. This establishes traceability, not guaranteed confidentiality.

**Next:** GOV folder, one folder at a time.

## Step 03 reconciliation addendum — 2026-10-24

The governing source was updated by [D-0066](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/DECISIONS.md): GOV-006 and GOV-018 are retired; GOV-017, DAT-001 and DAT-002 are rewritten. Earlier candidate counts, original extracted statements, verification-intent exclusions and pinned source references above remain valid **as historical snapshots**, not a list of present-tense binding requirements. None is promoted. The live model's Info/analysis and Draft candidate note dispositions are in [[STEP_03_ACTIVE_GOVERNANCE_RECONCILIATION_2026-10-24]].
