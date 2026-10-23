# Requirement linking pass 2 — 2026-10-23

**Status:** Draft model updates directly to live main. This is an authored trace proposal, not owner acceptance, independent SysML parser certification, executed verification, or implementation signoff.

## Scope

Expanded existing source-backed model relationships for **IMP-075**, **IMP-076**, and **WKB-008** using only existing definition notes. Current normative source is [MDSE_v2 governance](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md). Rule-reference notes retain origin/status but do not supersede it.

| Owning model context | New native SysML | Reason and limit |
|---|---|---|
| [[Import an Engineering Model]] | 3 `dependency` links to REQ-31137, REQ-31138, REQ-31139 | Import needs changelog creation, per-entry information, and identical-input idempotence; dependency does not claim satisfaction |
| [[Add Engineering Knowledge]]; [[Correct or Complete Knowledge]] | 1 `dependency` link in each UC to REQ-31279 | Edit contexts require eligible relation kinds and targets; does not assert Workbench implemented it |
| [[REQ-31137 - IMP-075 Statement 1]]; [[REQ-31138 - IMP-075 Statement 2]] | 1 `#refinement dependency` per requirement to STK-00010 | Both detail reviewable import change records |
| [[REQ-31139 - IMP-076 Statement 1]] | 1 `#refinement dependency` to STK-00004 | Only the exact repeat-input no-op safeguard; other re-import cases remain open |
| [[MDSE Toolset Composition]] | Typed usage of REQ-31138; 1 `allocate` to importer; 1 additional `verify` in IMP-075 case objective | The existing VER-31071 case already lists both IMP-075 clauses; no duplicate verification definition or claimed test result |
| [[VER-31137 - WKB-008 Rule Verification]] | No new SysML relation | Repaired a misplaced Markdown contextual section inside the clause 3 checklist; original test definition, status and executionStatus are unchanged |

## Preserved semantics

- All existing definition identities and SysML blocks remain; no new IDs, UIDs or duplicate definition notes.
- Prior tool usages, software performed actions, four original allocations and four original verify relationships are preserved.
- New links are owned in native SysML (not YAML); Markdown backlinks are guidance only.
- The new second IMP-075 objective reference shares **one** verification case and still needs its own acceptance assertion and fixture.
- `sourceRole: rule-derived-*-candidate`, `semanticReview: pending`, and `status: Draft` remain untouched. The governance rule may be Active while the derived model segmentation remains a candidate.

## Checks actually performed

- Anchored edits against current `main` file content; checked existing id, uid, status and primarySymbol stay unchanged.
- Verified one final fenced SysML block per edited model note and balanced bracket counts.
- Verified all new qualified requirement and stakeholder endpoints already have a matching `primarySymbol` in existing note files.
- The malformed WKB verification checklist was restored to one readable clause; the contextual native trace section was retained as a separate section.

## Not yet validated

1. **Independent parser:** aggregate all packages, resolve qualified names and parse the new requirement refinements, dependencies and dual-requirement verification objective using the pinned SysML v2 implementation.
2. **Runtime:** test that Workbench indexes the five new use-case dependencies, three refinements, fifth allocation and fifth verify edge, and correctly projects inbound/outbound links.
3. **Views:** saved canvases still reflect their prior validated snapshots; regenerate from authoritative SysML **after** validating parser and current release's relationship projection. Do not hand-edit a Canvas as if it were model authority.
4. **Execution:** tests remain unrun for these candidate cases; define explicit assertions for each clause and preserve separate test results.
5. **Remaining gaps:** IMP-075's second clause still needs clause-specific acceptance criteria; WKB-008 clauses 1 and 3 are not yet carried as toolset allocation/verification usages; review whether the stakeholder refinements should be approved or reclassified.

Do not treat this pass as evidence that all generated 332 requirements and 159 verifications were semantically reviewed.
