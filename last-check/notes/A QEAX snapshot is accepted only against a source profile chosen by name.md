---
type: Requirement
subtype: engineering
id: REQ-98032
uid: 20261021212000051skellyspencer
status: Draft
tags: [last-check]
---
# A QEAX snapshot is accepted only against a source profile chosen by name

## Definition

Each EA snapshot the importer accepts has its own source profile. The profile records the table counts, the element and connector kinds with counts, and the SHA-256 of the file. The importer is told which profile to use. It does not detect one, and it has no fallback when the chosen profile does not fit. A snapshot with different counts needs a new profile; the existing profile is not changed and its count checks are not turned off. The table policy is checked on its own: every table in the file has a stated disposition, and a non-empty table that the policy says must be empty stops the run. A snapshot passes the table policy and still fails the count check when its size differs from the profile; both results are reported separately. A report written for a failed check is not placed inside the repository.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 29_SysMLv2_Translator_Workbench/Passes/PASS04_QEAX_SOURCE_PROFILES_2026-10-17.md`; `Test_Vault_ 29_SysMLv2_Translator_Workbench/Passes/PASS04_ACCEPTANCE_STATUS_2026-10-17.md`; `Test_Vault_ 29_SysMLv2_Translator_Workbench/FIRST_RUN_FAST_TRACK_DEPENDENCY_RULES_DOC_AUDIT_2026-10-17.md (IMP-01)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 has one profile, EA8647-2026-09-06-v1 (35,969 elements, 21,822 connectors, 100 table dispositions: 12 imported, 34 ignored non-empty approved, 54 must be empty), in `governance/schemas/ea-source-profile.json`, and IMP-056 and IMP-063 stop on a source/profile/hash mismatch. `tools/importer/SPEC.md` says expected table counts per snapshot were not carried. The v2 test fixture is the reduced 2026-10-15 file (11,447 elements, 14,688 connectors, 1,389 packages, 2,208 diagrams), so it cannot match that profile.
- The source ran two profiles side by side: the September full model, unchanged, and a reduced October snapshot kept as a local file with its own hash. Checking the 100 tables of the reduced file against the September policy gave 45 non-empty, 55 empty, no unexpected table and no non-empty table that must be empty. Counts of the two snapshots are in PASS04_QEAX_SOURCE_PROFILES.
- The source also found that profile selection by explicit option, not by guessing, was the reason a wrong-profile run could not write any output.

> [!flagNote] Draft. The reduced file's hash and counts are model data; only the rule is recorded here. The owner decides whether the reduced snapshot gets a profile in governance/schemas.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AQEAXSnapshotIsAcceptedOnlyAgainstASourceProfileChosenByName {
        doc /* A QEAX snapshot is checked against a profile chosen by name; no detection or fallback. */
    }
}
```
