---
type: Behavior
subtype: function
id: BEH-00015
uid: 20261024073600015skellyspencer
status: Draft
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00015::RenderDocumentRelationshipView
---
# Render Document Relationship View

## Purpose

Render the same typed graph result as linked document sections or tables, preserving source identities.

## Parent

[[Generate Engineering Model Viewpoints]]

## Verification candidate

Compare projected content with canonical identities and typed graph edges; check non-mutation and explicit missing-reference handling. Test not yet executed.

## SysML v2

```sysml
package MDSE_BEH_00015 {
    action def RenderDocumentRelationshipView {
        doc /* Render the same typed graph result as linked document sections or tables, preserving source identities. */
    }
}
```
