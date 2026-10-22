---
type: Requirement
subtype: stakeholder
id: STK-98006
uid: 20261021212000005skellyspencer
status: Draft
tags: [last-check]
---
# Engineering documents are generated from the model

## Definition

Readers outside the vault need documents generated from the model rather than written by hand: traceability matrices, interface control documents, requirement specifications, FMEA tables, and compliance coverage reports. Each is derived and rebuildable, and never a competing source of truth.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (After golden)`.
- Compared with MDSE_v2 at `d35af12`.
- MDSE_Definition lists third-party documentation output as Later (data tables, requirements lists, block diagrams). The source adds interface control documents, FMEA tables, traceability matrices and compliance coverage.
- REG-286 and its MDSE_v2 successor already state that derived outputs are rebuildable.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def EngineeringDocumentsAreGeneratedFromTheModel {
        doc /* Traceability, interface, requirement, FMEA and compliance documents are generated from the model. */
    }
}
```
