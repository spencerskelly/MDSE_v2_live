---
type: Requirement
subtype: engineering
id: REQ-98029
uid: 20261021212000048skellyspencer
status: Draft
tags: [last-check]
---
# A note is merged or retired only after every reference to it is listed

## Definition

Before a note is merged into another, renamed, moved or retired, a read-only check lists every place that refers to it: Markdown links, wikilinks, frontmatter links, Canvas files, Bases, JSON and code or configuration files, and notes with identical content. Names that could mean more than one note are reported apart. The check changes nothing. An empty list does not allow a deletion: it cannot see dynamic references or other vaults. A note is merged only when no inbound reference is left unresolved, the successor keeps the uid and id history of the retired note, and the old path or a redirect still resolves. The old file is physically removed only under a retention rule the owner approved. Two notes with the same wording may serve different purposes and are not merged on that evidence alone. Where two sources disagree, the later approved one wins and the earlier one is kept and marked with its successor, with the date.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 26_Definitions/V2_REPOSITORY_STABILITY_AND_CONSOLIDATION_2026-10-18.md`; `Test_Vault_ 26_Definitions/MOC_REPOSITORY_NOTE_CENSUS_2026-10-18.md`; `Test_Vault_ 26_Definitions/tools/audit_note_backlinks.py`.
- Compared with MDSE_v2 at `d35af12`.
- RULESET has the never-delete and tombstone rules (MOD-136, IMP-070) for imports. It has no rule for hand-made notes in the vault. The open list from the 55_Workspace review asks which note keeps its id on a duplicate sweep; this rule is the precondition for answering it.
- The source ships a read-only preflight (`audit_note_backlinks.py`) that reports exact path references, basename or wikilink matches to review, and byte-identical duplicates. v2 does not carry it, because Python-era tooling is refused (D-0001); the behavior above is what a replacement needs.
- In Test_Vault_ only one byte-identical pair of Markdown notes was found among 917 (two copies of the Workbench User Guide), and both were kept.

> [!flagNote] Draft. The retention rule for physical removal is not set; the owner decides it.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ANoteIsMergedOrRetiredOnlyAfterEveryReferenceToItIsListed {
        doc /* A note is merged or retired only after its references are listed. */
    }
}
```
