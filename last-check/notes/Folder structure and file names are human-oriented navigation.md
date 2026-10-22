---
type: Requirement
subtype: engineering
id: REQ-98018
uid: 20261021212000037skellyspencer
status: Draft
tags: [last-check]
---
# Folder structure and file names are human-oriented navigation

## Definition

Folders and file names help a person find a note and carry no semantics. Ordinary model content is aimed at about five to six meaningful folder levels, with deeper formal or source structure allowed. Folders are not split by file count and no overflow folder is made. A folder with one child is collapsed only when it has no note, no independent value and no sibling structure. A child folder does not repeat wording its parent already supplies. A folder that exists only to hold an identically named note takes the shortest unambiguous designator. The standard set of README, Base and Canvas files is generated only for the primary top-level domain folders; deeper artifacts are exception-based, and package notes are exception-based. Soft length targets are about 40 characters for a folder name and 80 for a file name, and they are targets, not cuts. The file name and the visible engineering title are separate. A source name that is a URL, a `$inet` value, a file path or other machine text is not used as a file name; a human alias is used when present, otherwise `<nearest meaningful context> - external reference`, and the exact source name is kept as provenance. The EA name is used by default and the alias only when the name is machine noise. Reserved prefixes (`Template -`, `Rule -`, `README_`, `BASE_`, `CANVAS_`) are checked against imported, system and user-authored content so a collision is reported before writing. Where an emitted element has emitted children, its note is written inside a folder with its own name (`Parent/Parent.md`, `Parent/Child.md`).

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workspace Decision Log.md (W-289, W-297, W-308, W-309, W-318, W-324, W-382, W-383)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 carries the collision markers (MOD-102, MOD-110), the regulatory folder collapse (MOD-101) and OS-junk handling. `tools/importer/src/naming.ts` handles identifiers and keywords. The depth target, the scaffolding limit, the soft length targets, machine-noise names, reserved prefixes and parent-folder placement are not stated in the RULESET or the DECISIONS.
- W-297 left the exact hard path limit open. W-324 and W-382 then removed length-driven cutting, and the 212-character limit of W-318 is retired in the register (REG-370 and related rows). A reader must treat the soft targets as navigation guidance only.
- W-289 fixed the Port file prefix (`i<owner> - <port>`); Ports are no longer notes (W-384), so that part does not carry.

> [!flagNote] Several parts are checkable by the importer (depth, one-child folders, machine-noise names) and none is tested in v2. Confirm each before turning it into a check.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def FolderStructureAndFileNamesAreHumanOrientedNavigation {
        doc /* File and folder names are navigation aids chosen for readability. */
    }
}
```
