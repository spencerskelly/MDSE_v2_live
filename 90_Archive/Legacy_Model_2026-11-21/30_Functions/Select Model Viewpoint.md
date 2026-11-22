---
type: Behavior
subtype: function
id: BEH-00013
uid: 20261024073600013skellyspencer
status: Draft
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00013::SelectModelViewpoint
---
# Select Model Viewpoint

## Purpose

Choose a model scope, viewpoint and filters without changing canonical relationships.

## Parent

[[Generate Engineering Model Viewpoints]]

## Verification candidate

Confirm projection and presentation changes do not modify the authoritative SysML relationships. No executed evidence exists.

## SysML v2

```sysml
package MDSE_BEH_00013 {
    action def SelectModelViewpoint {
        doc /* Choose a model scope, viewpoint and filters without changing canonical relationships. */
    }
}
```
