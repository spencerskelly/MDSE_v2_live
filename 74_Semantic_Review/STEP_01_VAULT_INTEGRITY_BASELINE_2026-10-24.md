# STEP-01 — Active Vault Integrity Baseline (2026-10-24)

**Disposition: COMPLETE as an audit, WITH OPEN NAVIGATION FINDINGS.** No engineering relationship, requirement identity or status was changed. This is Step 1 of the model-improvement plan; it is not Step 2 SysML parser acceptance.

## Reproducible execution evidence

- **Inspected repository:** `spencerskelly/MDSE_v2_live`, `main`.
- **Final independent static-audit CI run:** [40116026790](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40116026790) at commit `a021de97b46907bbcd59c428b86568d1da7f7d65`: **SUCCESS**.
- **Download full machine-readable findings:** [mdse-live-integrity-reports.zip](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40116026790/artifacts/12568636379); includes `lineage-audit.json` and `model-integrity-audit.json` with every finding and source path.
- **Prior validated graph-index run:** [40108612054](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40108612054) at commit `10c925a5`: **SUCCESS**, with 82 selected native-edge assertions passing. That run reported 837 indexed native SysML-derived edges and zero unresolved **critical** endpoints; independent parser `not-run`.
- **Commands:** `node scripts/audit-derived-lineage.mjs` and `node scripts/audit-model-integrity.mjs`. Automated via `.github/workflows/audit-vault-integrity.yml`. The original `validate-live-model-links.yml` also includes the checks, but its most recent full Workbench run had **not** been confirmed complete at this audit closing point.

## Scope and findings

| Scope / finding | Measured value | Disposition |
|---|---:|---|
| Original rule references | 386 | All resolved in lineage audit |
| Rule analyses | 386 | All resolved in lineage audit |
| Derived requirements | 341 | 332 original Draft candidates plus 9 newer Draft atomic definitions |
| Verification case definitions | 159 | Source-linked; execution status is separate |
| Source lineage findings / cautions | **0 / 0** | PASS under static lineage checks |
| Active Markdown files inspected | 1,649 | Includes documentation, rule reference, derived and canonical language notes |
| Governed identities inspected | 1,356 | **0 duplicate IDs, UIDs or primarySymbols found** |
| Canvas files | 3 | **0 invalid JSON, broken Canvas node edges or missing Canvas file references** |
| Obsidian-style wikilink occurrences | 17,178 | Subject to navigation heuristics |
| Markdown link occurrences | 1,023 | Subject to relative-path checks |
| Markdown links only resolving from vault root | **138** | Relative-path portability defects, concentrated in generated 70–73 folder indexes |
| Unresolved relative Markdown links | **15** | Actual path defects: 12 root need links and 3 references to the as-built evidence CSV |
| Wiki references using bare `REQ-xxxxx` instead of a note name | **42** | Intended requirement note identified uniquely by ID; navigation likely broken without corresponding Obsidian alias |
| Other unmatched wiki tokens | **24** | 22 literal/example/historical text tokens and 2 actionable references requiring correction |

## Human triage of the 24 unmatched wiki tokens

**22 are non-navigational examples**, mostly literal bracketed text preserved verbatim in source-rule and analysis notes (e.g., `[[other end]]`, `[[Removed]]`, `[[File name]]`, `[[…]]`), or explanatory text such as `[[wikilinks]]`. They are not evidence that a modeled engineering endpoint is missing; keep original source text unchanged. The scanner intentionally reports them rather than silently editing governance provenance.

**Two need action:**
1. `50_Architecture/MDSE Toolset Composition.md` links to `[[AIP Requirement Trace Review]]`; the corresponding file is named `74_Semantic_Review/AIP_REQUIREMENT_TRACE_REVIEW_2026-10-23.md`. Correct the navigational spelling/path after verifying the intended target.
2. `74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md` links to `[[MOD-169]]`. This is a current native-refinement governance rule in `MDSE_v2/governance/RULESET.md`, but it is **not** represented as a matching local generated reference note in the older 386-rule snapshot. Link to the normative rule, or refresh the reference library through a governed source-synchronization pass; **do not invent a SysML requirement** to satisfy the link.

**42 ID-only requirement links** appear mainly in use-case and verification notes. The requirement elements exist and have stable IDs, but their file basenames contain fuller titles. Use explicit full-note paths or governed aliases; do not equate YAML `id` with native Obsidian link resolution without checking the actual plugin.

## Boundary between navigation and SysML semantics

- None of the navigation findings justifies adding `dependency`, `#derivation`, `#refinement`, `allocate` or `verify` links. Such native relationships require engineering evidence and independent syntax verification.
- Draft requirements and intentionally held MOD/IMP legacy semantics are **not defects in link resolution**. They stay Draft and flagged until engineering review.
- The audit is an evidence-based static inspection. It does **not** certify full OMG SysML v2 grammar, model semantics, user-visible Obsidian behavior, source freshness or actual verification execution.
- There are no known duplicated governed identities or missing Canvas file cards in the inspected scope. Reported unresolved wiki examples must not be added as model notes.

## Work completed for Step 1

1. Re-ran and read the existing CI lineage/index logs; recorded actual scope and pass numbers instead of relying on prior statements.
2. Added `scripts/audit-model-integrity.mjs` to check active note identities, relative and wiki navigation, and Canvas files.
3. Corrected scanner performance and classification for Canvas wiki references, directories and bare ID-only note names.
4. Added a separate fast `audit-vault-integrity.yml` CI job, with downloadable JSON evidence. It runs in report mode so navigation debt is visible without declaring semantically correct links invalid.
5. Classified every remaining unmatched wiki token and grouped repairs without changing model element definitions.

## Forward backlog (not performed in Step 1)

- **Step 2:** assemble and independently parse SysML v2 model namespaces; parser is currently unpinned/unexecuted for this vault.
- **Step 3:** reconcile superseded governing rules and incorrect vault/bootstrap baseline configuration.
- **Navigation remediation:** correct the 15 unresolved Markdown paths, 138 root-relative portability references, 42 bare-ID wiki links and two genuine unmatched wiki targets. Track through the later navigation/consistency phase or a separately controlled link-only PR.
- **Semantic reviews:** address intentional holds and compound requirements without mechanically manufacturing graph completeness.

**Handoff instruction:** In a fresh chat, continue the agreed model-improvement plan at **Step 2 — Independent SysML v2 model validation**, referring to this report and its exact CI run. Do not rerun Step 1 or assume unresolved navigation references have already been repaired.
