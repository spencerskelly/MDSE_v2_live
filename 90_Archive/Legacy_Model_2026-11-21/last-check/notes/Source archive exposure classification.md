---
type: Requirement
subtype: engineering
id: REQ-98006
uid: 20261021212000011skellyspencer
status: Draft
tags: [last-check]
---
# Source archive exposure classification

## Definition

Before a source model archive (an EA file or its ZIP) is committed to a repository, or while it remains in one that others can reach, an authorized owner records one disposition: approved for public release, restricted remediation required, or pending review. The record names the reviewer, date, approved source version and digest, and a remediation ticket, and is kept in a controlled private system. It is never written to a public repository.

If the disposition is restricted, the response covers public branch history, forks and caches, not only removal from the main branch or branch tip. If real secrets are found, incident procedure applies (revoke and rotate); a history rewrite alone is not enough. File size, suffix and visibility do not establish confidentiality; only inspection by the data owner does. Repository metadata (path, size, commit) may be checked without opening the archive.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Consolidation Step 05 - Public QEAX Metadata and Local Clone Audit 2026-10-10.md`.
- Compared with MDSE_v2 at `d35af12`.
- MDSE_v2 DAT-002 and DAT rules keep real data out of repositories; REG-052 and REG-053 say the same. They do not state the classification record or the exposure response.
- Local clones need a read-only audit on every machine (dirty or untracked work, branches with no upstream, stashes, worktrees) before any repository is archived or its history changed. The source preserved two audit scripts (POSIX shell, PowerShell) on an unmerged branch.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def SourceArchiveExposureClassification {
        doc /* A source archive is classified by an authorized owner, with the record kept privately, before it is published. */
    }
}
```
