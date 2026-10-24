---
type: Behavior
subtype: function
id: BEH-00014
uid: 20261024073600014skellyspencer
status: Draft
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00014::RenderVisualRelationshipView
---
# Render Visual Relationship View

## Purpose

Project selected native model elements and links into a navigable visual view without changing their semantics.

## Parent

[[Generate Engineering Model Viewpoints]]

## Verification candidate

Confirm projection and presentation changes do not modify the authoritative SysML relationships. No executed evidence exists.

## SysML v2

```sysml
package MDSE_BEH_00014 {
    action def RenderVisualRelationshipView {
        doc /* Project selected native model elements and links into a navigable visual view without changing their semantics. */
    }
}
```
