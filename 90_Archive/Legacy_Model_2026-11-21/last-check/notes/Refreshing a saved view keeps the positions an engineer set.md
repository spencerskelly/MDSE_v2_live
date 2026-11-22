---
type: Requirement
subtype: engineering
id: REQ-98021
uid: 20261021212000040skellyspencer
status: Draft
tags: [last-check]
---
# Refreshing a saved view keeps the positions an engineer set

## Definition

When a saved view is refreshed from the model, every node that is still in the model keeps its position and size. A node that is new is placed by the layout rule. A node that left the model is removed. An edge drawn by hand, or a node moved or resized by hand, never creates or changes a relationship in the model. A change that adds or removes a part, endpoint, connection, flow or relationship is made on the note and not in the view. The refresh does not discard an engineer's layout silently; if a position cannot be kept, the refresh says which node moved.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 99_System/02_AI/AI_INSTRUCTIONS.md (Views and Canvas section)`; `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (B8)`; `Workspace Decision Log W-339, W-340`.
- Compared with MDSE_v2 at `d35af12`.
- `governance/ai/AI_INSTRUCTIONS.md` and TST-003 say Canvas geometry is presentation only. Nothing in v2 says that a refresh keeps surviving positions. The V1 text is in the AI instructions (W-340) and in the Impact-Focused Remaining Work step B8, 'semantic updates do not destroy manual presentation geometry'.
- In v2 a view in `22_Views` is temporary and a saved view in `23_Saved_Views` is a copy (`tools/workbench/src/canvas.ts`). The requirement applies where a saved view is regenerated or merged with new model content; the current code has no refresh of a saved view, so this describes intended behavior.

> [!flagNote] Confirm that saved views are ever regenerated. If they are copies only, this requirement does not apply and can be retired.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def RefreshingASavedViewKeepsThePositionsAnEngineerSet {
        doc /* A refresh of a saved view keeps the position of each surviving node. */
    }
}
```
