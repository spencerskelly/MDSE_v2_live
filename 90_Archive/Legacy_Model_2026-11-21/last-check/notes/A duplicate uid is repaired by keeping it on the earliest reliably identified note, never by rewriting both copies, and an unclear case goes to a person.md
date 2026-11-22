---
type: Requirement
subtype: engineering
id: REQ-98059
uid: 20261021212000079skellyspencer
status: Draft
tags: [last-check]
---
# A duplicate uid is repaired by keeping it on the earliest reliably identified note, never by rewriting both copies, and an unclear case goes to a person

## Definition

Two notes with the same uid are invalid. The repair keeps the uid on the note that can be shown to be the original, using the version history and any creation record, and gives the later copy a new uid. The repair never rewrites both notes, and never guesses: if the original cannot be identified reliably, nothing is changed and the case goes to a named approver. Every automatic repair is written to a log that records the old uid, the new uid, the note and the evidence used. A template never carries a fixed uid, and a note made from a template receives a new uid at creation.

## Notes

- Carried from `Ampure_Data` at `21c60ba` and rewritten: `Ampure_Data 90_System/Decision Log.md`; `Ampure_Data Rules/Git and Vault Architecture.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Ampure_Data 90_System/Decision Log.md (UID Repair), Rules/Git and Vault Architecture.md (Duplicate UID Repair) and the IT Review Guide. The same source assigns a uid to every user-created note, including scratch notes, because a note that looks temporary can become a linked or modeled element later, and it keeps the uid when an ordinary note is promoted to a modeled element.
- Compared with MDSE_v2 at d35af12: MOD-004 moves a new uid forward one millisecond on a clash, REQ-98013 covers the template, and the format oracle checks uniqueness. I found no rule for what to do when a copied note already carries a duplicate uid. A search of RULESET.md for duplicate uid found nothing.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ADuplicateUidIsRepairedByKeepingItOnTheEarliestReliablyIdentifiedNoteNeverByRewritingBothCopiesAndAnUnclearCaseGoesToAPerson {
        doc /* A duplicate uid keeps the original and is never guessed. */
    }
}
```
