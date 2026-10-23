# Requirement linking pass 4 — Workbench relationship preservation

**Date:** 2026-10-23. **Status:** Draft model trace, committed to live main. Neither parser acceptance nor runtime Workbench execution is claimed.

## Source and relationship choices

Reviewed the active MDSE_v2 rules WKB-012, WKB-016 and WKB-020 against their preserved candidate requirement and verification definitions. Native relationships authored in the existing SysML blocks:

| Source rule | Reused candidate requirements | Existing verification | Proposed owner |
|---|---|---|---|
| WKB-012 | REQ-31286, REQ-31287, REQ-31288 | VER-31141 | Workbench |
| WKB-016 | REQ-31296, REQ-31297, REQ-31298 | VER-31145 | Workbench |
| WKB-020 | REQ-31306 only | VER-31149 | Workbench |

- **7** typed requirement usages and **7** `allocate` relationships are owned by [[MDSE Toolset Composition]].
- **3** verification case usages reuse existing `verification def` notes, with **7** objective-level `verify` relationships. Test executions have not occurred.
- **10** use-case-to-requirement `dependency` links: five in UC-00008, two in UC-00005, and one each in UC-00003, UC-00010 and UC-00011.
- **1** `#refinement dependency` REQ-31306 → STK-00002 addresses the one-trustworthy-model need. Refinement is not satisfaction.
- The WKB-020 clause 2 generated candidate REQ-31307 is flagged as a **historical defect statement**; it is deliberately **not** allocated or verified as desired software behavior.

The current source remains [MDSE_v2 RULESET](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md). Original rule statuses remain unchanged. Candidate requirements retain `Draft` and `semanticReview: pending`.

## Static evidence and limits

Checked existing requirement and verification identifiers against named source files, preserved YAML identities and statuses, checked single final SysML fences and balanced braces, and checked every new native declaration once per owning block. These are **structural checks only**; no SysML v2 parser or real Obsidian Workbench run was performed. Native allocations represent proposed responsibility, not `satisfy`; verification cases represent future work, not results.

## Next validation

1. Independently compile/parse fully qualified SysML namespaces and relationship usages.
2. Exercise WKB-012 relationship property and safe-rename editing fixtures.
3. Exercise WKB-016 port variants, modifier round-trip and apply/undo index-refresh fixtures.
4. Exercise a BOM quantity rollup where YAML and SysML describe the same link; require one semantic relationship and undoubled quantity.
5. Regenerate saved canvases from authoritative note text and check linked endpoints, direction and relationship kinds.
6. Review candidate atomicity and disposition of WKB-020 clause 2 before promoting engineering requirements.

The saved canvases are not modified here and may not yet depict these newly authored relationships.
