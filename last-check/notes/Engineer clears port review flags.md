---
type: Use Case
subtype: what
id: UC-98005
uid: 20261021212000025skellyspencer
status: Draft
tags: [last-check]
---
# Engineer clears port review flags

## Definition

After import, four kinds of port are left for an engineer to check, each with a fixed flag in its note:
1. A redefinition link whose target port is on a block with no family link to this one, or on the same block: confirm, correct or remove.
2. A port added from an assembly because no port of the same name or recorded link exists on its block: merge it into an existing port, rename it, or keep it.
3. A port whose owner is a partition with no mapping yet: link it to its owner once that element is mapped.
4. A port whose owning part has no block or whose block is not in the export: find the block or accept the part as owner.
For each, fix the note, remove the flag and record why. Where a group behaves the same, fix by rule and log the rule.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 6)`.
- Compared with MDSE_v2 at `d35af12`.
- V1 counts for scale: 146, 617, 42 and 26 respectively. Port handling is changed in V2 (reusable interface classes become interface definitions, EA ports become usage endpoints): cases 1 and 4 map to flagLink on a specialization or typing, and case 2 maps to an untyped port usage flagged for review.
- Done when a search for each flag finds nothing and each fixed note has a recorded reason.

> [!flagNote] V1 port model differs from V2. Revalidate the four cases against the real V2 output before relying on them.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerClearsPortReviewFlags {
        doc /* The engineer resolves each class of port review flag and records the reason. */
    }
}
```
