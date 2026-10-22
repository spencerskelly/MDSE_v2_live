---
type: Requirement
subtype: engineering
id: REQ-98004
uid: 20261021212000009skellyspencer
status: Draft
tags: [last-check]
---
# Baseline protection for the accepted model

## Definition

When a model is accepted as golden: it is tagged in git as a baseline (proposed name model-v1.0.0) with a release note; the source EA file is archived read-only with its SHA-256 recorded; the main branch is protected; CI checks are on; and a normal branch and review workflow for model changes is defined, including who may merge. Later baselines are tags, and changes are reviewed as semantic diffs.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 7 item 10, section 8)`; `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (F5)`.
- Compared with MDSE_v2 at `d35af12`.
- MDSE_v2 GOV-001 (direct push to main, CI green) governs the toolchain repository. This requirement applies to the model vault, a different repository, so it does not conflict unless the owner wants the same rule for both.
- IMP-054 already fingerprints the source with SHA-256 on every run; this adds the long-term archive and the repository protections.

> [!flagNote] Confirm whether the model vault follows GOV-001 (direct push) or needs protected main with review.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def BaselineProtectionForTheAcceptedModel {
        doc /* An accepted model is tagged, its source is archived read-only with a checksum, and main is protected. */
    }
}
```
