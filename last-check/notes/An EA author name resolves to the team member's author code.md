---
type: Requirement
subtype: engineering
id: REQ-98020
uid: 20261021212000039skellyspencer
status: Draft
tags: [last-check]
---
# An EA author name resolves to the team member's author code

## Definition

An EA `Author` value on an imported element resolves to that person's 13-character author code through the `eaNames` list in their person note, not through a code derived from the EA name. Matching is case-insensitive. A value that matches no person note falls back to a derived code only when it is a full name, and otherwise to the run's fallback code (MOD-018). The mapping known from the EA8647 source is: `brassb` to brassbenjamin; `legaspic` and `ChescaLegaspi` to legaspichesca; `Florian Koerfer` and `koerfefl` to koerferfloria; `nishiokag` to nishiokagavin; `montanoh` and `HermanMontano` to montanoherman; `JesseRivera` to riverajesse--; `follmank` to follmannkarin; `rvirzi` to virziray-----; `kirchnes` to kirchnersilke; `SpencerSkelly` and `skellys` to skellyspencer. The same person appears under more than one EA name, so an element's author is not stable unless the list is applied.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 99_System/04_People (10 person notes, HEAD 4a2b154)`; `99_System/08_Scripts/02_Snippets/Snippet - uid.md`; `Workspace Decision Log W-12, W-25, W-316`.
- Compared with MDSE_v2 at `d35af12`.
- `tools/importer/src/identity.ts` accepts an `authorMap`, but the importer page (`importer.template.html`, line 307) and the test harness pass `authorMap: {}`. Every EA username such as `koerfefl` is therefore treated as unmapped: `deriveAuthorCode` turns a single token into a code of the form `koerfefl-----`, which is not a team member's code.
- MOD-003 and MOD-010 state that person notes carry `eaNames` and `previousCodes`, and `authors.yaml` points to them. The v2 repository holds no person data, so the mapping exists only in the V1 Test_Vault_. IMP-099 creates a person note for the runner with `eaNames: []`.
- Person notes also record `timezone` (empty in all ten), which MOD-004 uses for the uid time. No timezone value is lost.

> [!flagNote] Gap. Decide where the table lives (person notes in the target vault, or a file the importer page reads) and pass it as `authorMap`. Until then uids carry derived codes.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AnEAAuthorNameResolvesToTheTeamMemberSAuthorCode {
        doc /* An EA author name is mapped to an author code through the person's eaNames list. */
    }
}
```
