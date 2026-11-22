---
type: Use Case
subtype: what
id: UC-98004
uid: 20261021212000024skellyspencer
status: Draft
tags: [last-check]
---
# Engineer resolves a block-level flow connector

## Definition

A connector (a flow or information flow) was drawn on a block instead of on one of its ports, and no rule can choose the port. The import keeps it on the element where it was drawn and flags it. The engineer: opens both end notes and the connector's own text; decides which port on each block-level end carries the flow, or creates the port first; moves the connector to the ports, keeping its text on both ends; removes the flag; and records why that port was chosen. Done when no such flag remains and every connector is either moved or has a recorded reason.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 1)`.
- Compared with MDSE_v2 at `d35af12`.
- Review table columns in the source: connector id, type, name, category, and for each end the element, owner, assembly, resolved note and candidate ports. Categories: choose a port, create ports, single candidate per end, end missing from the export.
- In the real export the case covered 118 connectors. V2 equivalent is a flagLink on the connector with a review row (IMP flag rules); the V1 line 'REVIEW port needed' is not carried.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerResolvesABlockLevelFlowConnector {
        doc /* The engineer moves a flow connector from a block to the right ports and records the reason. */
    }
}
```
