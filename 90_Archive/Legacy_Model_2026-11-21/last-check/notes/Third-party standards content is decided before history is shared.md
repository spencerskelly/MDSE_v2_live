---
type: Requirement
subtype: engineering
id: REQ-98007
uid: 20261021212000012skellyspencer
status: Draft
tags: [last-check]
---
# Third-party standards content is decided before history is shared

## Definition

Whether the vault may hold third-party standards content (figures, tables and clauses from external standards, held as attachments or text) is decided before the vault is pushed or shared. Each linked document is classified as the owner's own work or third-party content, and kept or removed with a recorded reason. Removal after a push leaves the content in git history, and a history rewrite after the team has cloned is disruptive.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 2)`; `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 6, D5)`.
- Compared with MDSE_v2 at `d35af12`.
- Open decision in the Rules Register: REG-307 (OPEN-06), standards content in the vault. This note adds the timing constraint and the per-document classification.
- The source counted 376 linked documents, of which 235 were document artifacts holding picture or text content and 129 were images of the owner's own circuits. Counts are from one export and will change.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ThirdPartyStandardsContentIsDecidedBeforeHistoryIsShared {
        doc /* Third-party standards content is classified and kept or removed before the vault is first pushed or shared. */
    }
}
```
