---
type: Requirement
subtype: engineering
id: REQ-98033
uid: 20261021212000052skellyspencer
status: Draft
tags: [last-check]
---
# A vault is scanned for SharePoint name and path limits before it is published

## Definition

Before the model vault is placed on SharePoint, a read-only scan lists every name or path that SharePoint or OneDrive sync would refuse, and the scan changes nothing. Blocking findings: a character in " * : < > ? / \ |; a leading or trailing space or a trailing period; a reserved name (.lock, CON, PRN, AUX, NUL, COM0-9, LPT0-9, desktop.ini); a name containing _vti_ or starting with ~$; a name longer than 255 characters; a folder named forms at the library root; two paths that differ only by case; a library path over 400 characters; and, when the sync-folder length of the user's machine is given, a sync-root length plus path over 520. Advisory findings: a path over the 256 characters of Windows Explorer, more than 5,000 items in one folder, and more than 300,000 files in total. The 5,000-item figure is advisory because its only source was a forum answer, not Microsoft documentation. The scan exits with failure when any blocking finding exists. It reports and never shortens or renames, so it does not conflict with IMP-103.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 25_Testing/check_sharepoint_safety.py`; `Test_Vault_ 25_Testing/test_check_sharepoint_safety.py`; `Test_Vault_ .github/workflows/v2-migration-executable-repair.yml (ran the scan on the Base Vault on every push)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 has the open question (OPEN_DECISIONS C-12, REG-268: reinstate a blocking path-length report for SharePoint, recommended 400 decoded characters plus a sync-root budget) and rules IMP-103, MOD-103, MOD-104, MOD-112 against shortening. It has no list of the other SharePoint name rules and no scan tool. The source tool (check_sharepoint_safety.py, with a unit test) is Python and is not carried, per D-0001; the rule set above is what is worth keeping.
- This note makes REG-268 answerable: the recommended 400 plus sync-root budget is what the source tool already implements.
- The two path numbers (400 library, 520 sync root) come from the source's reading of Microsoft guidance and are not re-checked here.

> [!flagNote] Draft. Limits are from the source's reading of Microsoft documentation and one forum answer; confirm against current Microsoft documentation before building. Decides OD C-12 / REG-268.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AVaultIsScannedForSharePointNameAndPathLimitsBeforeItIsPublished {
        doc /* A read-only scan reports SharePoint-refused names and paths before publishing and never renames. */
    }
}
```
