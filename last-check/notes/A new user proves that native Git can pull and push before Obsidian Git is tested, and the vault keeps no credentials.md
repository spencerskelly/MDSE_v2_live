---
type: Requirement
subtype: engineering
id: REQ-98062
uid: 20261021212000082skellyspencer
status: Draft
tags: [last-check]
---
# A new user proves that native Git can pull and push before Obsidian Git is tested, and the vault keeps no credentials

## Definition

Obsidian Git uses the Git installed on the machine, and a signed-in GitHub desktop application does not prove that this Git can reach a private repository. Onboarding therefore proves, in this order: the remote address is a plain address; the account and token scope reach the repository (a token limited to the named repositories, with read and write contents for a writer and read only for a reader); a pull succeeds; for a writer a push dry run succeeds; and only then Obsidian Git is tested. Pulls are fast-forward only, so a diverged history stops the user and is not merged silently. A shared configuration file that shows as changed is compared before it is discarded, because a difference in the end-of-file newline alone is not a setting change. No password, token, key or secret is ever written into a vault file.

## Notes

- Carried from `Ampure_Data` at `21c60ba` and rewritten: `Ampure_Data Setup/Current Manual Setup.md`; `Ampure_Data Troubleshooting/Current Manual Troubleshooting.md`; `Ampure_Data Rules/Security and Access.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Ampure_Data Setup/Current Manual Setup.md (steps 3 to 7), Troubleshooting/Current Manual Troubleshooting.md (403 with a working desktop client; the end-of-file difference in a shared configuration file seen on 2026-09-23; a remote address stored with Markdown link syntax), Rules/Security and Access.md and 90_System/Decision Log.md (Installation). The first failure in that setup had two causes at once, a malformed remote address and a token without the repository, so each is checked separately.
- Compared with MDSE_v2 at d35af12: BOO and BAS rules cover plugin hashes, author code and vault identity at first open. I found no rule or document on native Git credentials, fast-forward-only pulls or this onboarding order. A search of RULESET.md and the Bootstrap and Base Vault READMEs for credential, dry-run, pull.ff, 403 and token found nothing. REQ-98039 (locked plugin files keep their bytes) is the related end-of-line risk.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search. The source assumes GitHub Desktop and macOS; check it against how the team actually syncs.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ANewUserProvesThatNativeGitCanPullAndPushBeforeObsidianGitIsTestedAndTheVaultKeepsNoCredentials {
        doc /* Native Git is proved before Obsidian Git; no credentials in the vault. */
    }
}
```
