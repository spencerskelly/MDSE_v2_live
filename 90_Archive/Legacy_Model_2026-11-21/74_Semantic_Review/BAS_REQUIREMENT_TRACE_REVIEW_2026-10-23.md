# BAS requirement trace review — folder 2

**Scope:** 11 candidate requirement definitions under `72_Derived_Requirements/BAS`; five Active source rules BAS-001, 002, 003, 004, 012 and five matching existing case notes. BAS-005 through BAS-011 are Unreviewed and intentionally not promoted.

| Source | Requirements | Existing case | Disposition |
|---|---|---|---|
| BAS-001 | REQ-31260 | VER-31129 | Native draft verify |
| BAS-002 | REQ-31261 | VER-31130 | Native draft verify |
| BAS-003 | REQ-31262 through 31265 | VER-31131 | Verify only REQ-31262; 31263/64 are incomplete fragments and 31265 a historical conflict |
| BAS-004 | REQ-31266 | VER-31132 | Permission to pin pre-release candidate, not mandatory result |
| BAS-012 | REQ-31267 through 31270 | VER-31133 | Four draft verify targets |

**Trace completed:** all 11 notes now link to existing source rule, semantic analysis, Base Vault architecture and verification case. Eleven typed requirement usages added to [[MDSE Toolset Composition]] without duplicating definitions. Seven independently interpretable obligations are referenced in native `verify` objectives under four of the five existing verification cases. No allocation is inferred for mixed process/release responsibilities.

**Open semantic issues:** reunite BAS-003 Dataview replacement condition from fragmented REQ-31263/31264; disposition obsolete-document conflict REQ-31265; decide if permission-only REQ-31266 should remain a requirement definition; reconcile BAS-012 core-plugin V1 settings with live current policy and source authority. Retain full provenance/UID/status, no invented approved links.

**Acceptance not claimed:** source-note and Workbench graph recognition only; independent SysML v2 parser, actual manifest consistency, plugin payload integrity, cross-platform installation and first-open UI verification are outstanding. All requirement notes are Draft, verification cases not-run.

**Next folder:** BOM after verifying CI.
