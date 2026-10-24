---
type: Behavior
subtype: function
id: BEH-00017
uid: 20261024073600017skellyspencer
status: Draft
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00017::NavigateViewpointModelSources
---
# Navigate Viewpoint Model Sources

## Purpose

Navigate from a projected element to its authoritative owning note, exposing missing or ambiguous targets.

## Parent

[[Generate Engineering Model Viewpoints]]

## Verification candidate

Compare projected content with canonical identities and typed graph edges; check non-mutation and explicit missing-reference handling. Test not yet executed.

## SysML v2

```sysml
package MDSE_BEH_00017 {
    action def NavigateViewpointModelSources {
        doc /* Navigate from a projected element to its authoritative owning note, exposing missing or ambiguous targets. */
    }
}
```
