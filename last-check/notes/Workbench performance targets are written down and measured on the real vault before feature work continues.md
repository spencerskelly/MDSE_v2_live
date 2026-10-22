---
type: Requirement
subtype: engineering
id: REQ-98046
uid: 20261021212000066skellyspencer
status: Draft
tags: [last-check]
---
# Workbench performance targets are written down and measured on the real vault before feature work continues

## Definition

The Workbench has written targets for a vault of the size in use: cold index build, update after a note is saved, time to open a default Structure view, index memory, and whether Obsidian stays responsive. The targets are measured on the real translated vault at a gate before more features are built, and they are revised after the first measurement. A miss needs a recorded plan.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/docs/Definition/02 - Workbench Decision Log.md (WB-069, WB-081, WB-090)`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 WB-081 and the release gate WB-090. V1's placeholders were a vault of about 60,000 notes, a cold index under 60 s, a save update under 500 ms, a default Structure view in under 3 s and index memory under 300 MB.
- Compared with MDSE_v2 at d35af12: DECISIONS.md records a 10,000-note scale smoke, and TST-002 states that it is a completion and memory regression gate, 'not timing'. So v2 chose no timing targets. The owner should confirm that this was meant to be permanent.

> [!flagNote] Draft. v2 may have refused timing targets on purpose (TST-002).
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def WorkbenchPerformanceTargetsAreWrittenDownAndMeasuredOnTheRealVaultBeforeFeatureWorkContinues {
        doc /* Workbench performance targets are stated and measured on the real vault at a gate. */
    }
}
```
