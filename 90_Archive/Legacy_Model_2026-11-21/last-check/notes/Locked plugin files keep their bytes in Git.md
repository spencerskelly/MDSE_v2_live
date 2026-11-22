---
type: Requirement
subtype: engineering
id: REQ-98039
uid: 20261021212000058skellyspencer
status: Draft
tags: [last-check]
---
# Locked plugin files keep their bytes in Git

## Definition

Every file that Bootstrap checks against the plugin lock keeps its exact bytes through commit, clone and checkout on Windows, macOS and Linux. The vault's Git settings mark the plugin folder as not text, so line endings are never converted and a clone does not fail the SHA-256 check. The same applies to any plugin runtime folder the toolchain keeps in a repository. The rule that normalises generated Markdown to LF (IMP-057) does not apply to these files.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ (.gitattributes, .obsidian/plugin-lock.yaml)`.
- Compared with MDSE_v2 at `d35af12`.
- The source repository had this in `.gitattributes` (`.obsidian/plugins/** -text`, W-322) beside `* text=auto`. MDSE_v2's `.gitattributes` sets `* text=auto eol=lf` with no exception, and `tools/base-vault/src/base_vault.ts` writes no `.gitattributes` into a generated vault. The vendored plugins in v2 contain no CRLF today, but a Windows contributor's editor or a later plugin release with CRLF would be rewritten and fail the lock.
- Existing rules: BOO-005 (plugins pinned and hashed), BOO-007 (Bootstrap checks files against the lock), IMP-057 (generated Markdown is LF). None covers the Git setting.
- The source also kept `.obsidian/workspace.json`, `workspaces.json`, plugin `data.json` and `author-code.txt` out of Git; v2's root `.gitignore` covers the workspace files, and the vault `.gitignore` is written by base_vault.ts.

> [!flagNote] Gap confirmed against MDSE_v2 at d35af12: no -text exception for tools/base-vault/vendor or for generated vaults.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def LockedPluginFilesKeepTheirBytesInGit {
        doc /* Locked plugin files are marked not-text in Git so their hashes survive checkout. */
    }
}
```
