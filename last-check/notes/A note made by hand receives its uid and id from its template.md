---
type: Requirement
subtype: engineering
id: REQ-98013
uid: 20261021212000032skellyspencer
status: Draft
tags: [last-check]
---
# A note made by hand receives its uid and id from its template

## Definition

A person who creates a note from a class template in the vault gets a `uid` and a human-readable `id` filled in automatically, without typing either. The `uid` is the creator's local clock (`yyyyMMddHHmmssSSS`) followed by the creator's 13-character author code; if that `uid` already exists the time moves forward one millisecond until it is unique. The `id` is the class prefix plus the highest number already used for that prefix plus one, five digits, and the highest number counts retired notes and the ids listed under `## Former ids`, so an `id` is never reused. The author code is created the first time a person applies a template: a prompt asks first and last name, derives the code (last name then first name, lowercase letters only, accents removed, `ß` as `ss`, cut to 13 characters, padded with hyphens on the right), and saves it in a git-ignored local file. A scratch template that is meant to hold only a quick note stamps nothing. An AI that creates a note without a person's direct instruction uses its own author code; under direct instruction it uses the directing person's code.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workspace Decision Log.md (W-06, W-09, W-10, W-13, W-20, W-21, W-22, W-23, W-24, W-259)`; `99_System/08_Scripts/02_Snippets/Snippet - id.md`; `99_System/08_Scripts/02_Snippets/Snippet - uid.md`.
- Compared with MDSE_v2 at `d35af12`.
- MOD-001 and WKB-010 carry the id and uid rule, and AI_INSTRUCTIONS carries the AI author codes. The v2 base vault templates (`tools/base-vault/src/base_vault.ts`) write a blank `id:` and a blank `uid:`, and nothing in v2 fills them for a person working in Obsidian outside the Workbench Edit lens. The V1 vault did this with two Templater snippets that were tested only against mock objects, never inside Obsidian.
- Author-code derivation (W-10, W-24) and the code for unknown EA authors (W-12) are carried in `authors.yaml` and `tools/importer/src/identity.ts`; the first-use prompt that creates the code on a person's machine is not.
- The V1 snippets read the highest number from the metadata cache and read the `Former ids` bullets only from notes that have that heading.

> [!flagNote] Open: whether the v2 templates should call a Templater snippet, or whether the Workbench is the only supported way to create a note. The V1 snippets were never run inside Obsidian.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ANoteMadeByHandReceivesItsUidAndIdFromItsTemplate {
        doc /* A template-created note receives a unique uid and the next unused id for its class prefix. */
    }
}
```
