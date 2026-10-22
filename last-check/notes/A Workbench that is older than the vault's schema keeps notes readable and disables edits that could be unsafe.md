---
type: Requirement
subtype: engineering
id: REQ-98045
uid: 20261021212000065skellyspencer
status: Draft
tags: [last-check]
---
# A Workbench that is older than the vault's schema keeps notes readable and disables edits that could be unsafe

## Definition

The vault declares the schema versions it needs. When the Workbench is older than that, it still reads and displays every note, and it switches off the actions that write the model, with a message that names the version it needs. The same applies in the other direction: a newer Workbench on an old vault says which edits it will not make.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/docs/Definition/02 - Workbench Decision Log.md (WB-069, WB-081, WB-090)`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 Workbench decision WB-069 (settled) and WB-101, where Edit was disabled for a schema older than 1.25. Compared with MDSE_v2 at d35af12: GOV-011 pins compatible versions in a release manifest and WKB-002 binds the cache to schema versions, but I found no Workbench rule that disables edits on a mismatch. I searched RULESET and tools/workbench/src for 'schema' and version checks and saw none for this purpose.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search, not from a full read of the Workbench source.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AWorkbenchThatIsOlderThanTheVaultSSchemaKeepsNotesReadableAndDisablesEditsThatCouldBeUnsafe {
        doc /* A schema mismatch disables risky Workbench edits and keeps notes readable. */
    }
}
```
