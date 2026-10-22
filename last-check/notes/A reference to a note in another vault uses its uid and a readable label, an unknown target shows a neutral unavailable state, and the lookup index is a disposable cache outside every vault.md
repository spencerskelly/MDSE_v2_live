---
type: Requirement
subtype: engineering
id: REQ-98061
uid: 20261021212000081skellyspencer
status: Draft
tags: [last-check]
---
# A reference to a note in another vault uses its uid and a readable label, an unknown target shows a neutral unavailable state, and the lookup index is a disposable cache outside every vault

## Definition

This applies to the later multi-vault phase. A reference to a note in another vault is stored as the target's uid with a readable label, and the vault and path are the current location only and are not part of the identity. A reference to a section adds a heading anchor after the uid, and a changed heading may break the anchor but never the note reference. A link is resolved from the vaults installed and accessible on the machine, and the lookup index from uid to vault and path is a cache outside every vault that is rebuilt by scanning. An unknown target shows a neutral unavailable state, and the tool does not search remote repositories for it. A target in a vault that was known but is not installed offers to open or install that vault. The restricted vault names and paths are never shown to a person without access. Each vault has a permanent identity in a root file, separate from its display name, so renaming never changes it. A summary view that points at another vault points at its index or base file and does not import its notes.

## Notes

- Carried from `Ampure_Data` at `21c60ba` and rewritten: `Ampure_Data Rules/Git and Vault Architecture.md`; `Ampure_Data Rules/Vault Architecture and Cross-Vault Rules.md`; `Ampure_Data 90_System/Open Decisions.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Ampure_Data Rules/Git and Vault Architecture.md, Rules/Vault Architecture and Cross-Vault Rules.md, Rules/25_Organizational Vault Standard.md (cross-vault navigation), 90_System/Open Decisions.md and 90_System/Vault Registry.md (planned vaults: a common engineering vault plus product-line vaults). The source marks 'uid alone is the durable cross-vault identity' as provisional, and leaves open what happens when a note moves between vaults and how AI reads a cross-vault reference.
- Compared with MDSE_v2 at d35af12: GOV-017 says one vault in phase 1 with no cross-vault links, BOO-002 archives the cross-vault plugins, and MDSE_DEFINITION.md lists cross-vault as Later. The archived resolver plugin is in Test_Vault_ (reviewed in the 66_Cross-Vault ledger). This note records the design so it is not lost, and is not a request to build it now.

> [!flagNote] Draft, later phase. Deliberately deferred in MDSE_v2 (GOV-017). The source's own open decisions still apply.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AReferenceToANoteInAnotherVaultUsesItsUidAndAReadableLabelAnUnknownTargetShowsANeutralUnavailableStateAndTheLookupIndexIsADisposableCacheOutsideEveryVault {
        doc /* A cross-vault reference is a uid and a label; location is a rebuildable cache. */
    }
}
```
