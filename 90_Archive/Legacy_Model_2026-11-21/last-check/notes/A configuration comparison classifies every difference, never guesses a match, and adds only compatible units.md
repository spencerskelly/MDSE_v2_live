---
type: Requirement
subtype: engineering
id: REQ-98043
uid: 20261021212000063skellyspencer
status: Draft
tags: [last-check]
---
# A configuration comparison classifies every difference, never guesses a match, and adds only compatible units

## Definition

A comparison of two configurations gives the same result for the same input. It classifies each difference as added, removed, count changed, quantity changed, unit changed, revision changed, substituted by an alternate, or uncertain. It does not treat two assemblies as one family because their names are alike, and it never writes a specialization link as a result. It adds quantities only when their units are compatible and reports the others separately. A cycle in either configuration stops the comparison with a named reason. A pair it cannot classify is reported as uncertain, not as unchanged.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/docs/bom (A-10 variant comparison contract, fixtures VC-01 to VC-16)`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 BOM A-10 and its fixtures VC-01 to VC-16 (not read one by one; I read the contract text). The statement follows the contract's rules: classification, determinism, no implicit family match, no automatic subtypeOf, sum compatible units only, cycle blocking.
- Compared with MDSE_v2 at d35af12: WKB-021 already keeps units apart in the rolled-up list, and BOM-016 covers the same idea for one assembly. The comparison itself is not in v2.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AConfigurationComparisonClassifiesEveryDifferenceNeverGuessesAMatchAndAddsOnlyCompatibleUnits {
        doc /* A configuration comparison is deterministic, classified, and adds only compatible units. */
    }
}
```
