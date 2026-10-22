---
type: Use Case
subtype: who
id: UC-98001
uid: 20261021212000021skellyspencer
status: Draft
tags: [last-check]
---
# Engineers pilot the imported model

## Definition

Two or three engineers use the imported model for an agreed period and perform a small set of normal tasks end to end: navigate an assembly; tell context from definition; change a property; add and remove a relationship; reconnect structure; undo; restart Obsidian; confirm the result persisted. Failures in persistence or semantic identity block release. Friction, errors and missing affordances are collected, and they set the next feature list. Only issues that block safe daily use are closed before wider rollout; convenience features wait.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (C5, F3, F4)`; `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 8, S3)`.
- Compared with MDSE_v2 at `d35af12`.
- Phase 3 (editing) in the roadmap; the pilot is the evidence gate. Each engineer registers as an author through Bootstrap and a second author creates a note with the correct uid.
- Rollout steps that follow the pilot: first-open test on a team Windows machine at the agreed location; branch and review rules for model changes; EA made read-only.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineersPilotTheImportedModel {
        doc /* Engineers perform normal modelling tasks on the imported model and report friction. */
    }
}
```
