---
type: Use Case
subtype: what
id: UC-98003
uid: 20261021212000023skellyspencer
status: Draft
tags: [last-check]
---
# Engineer restructures an assembly in a staged transaction

## Definition

An engineer moves or reconnects structure in one reviewed transaction. The edit is staged as Review, then Apply or Cancel. A temporarily invalid intermediate state is allowed but cannot be committed until valid, and Apply is blocked on required integrity failures. Impact is shown before Apply. Undo restores the exact previous model. After a refresh or rebuild of the view, semantic changes do not destroy a curated presentation layout.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (B5 to B9)`; `55_Workspace/MDSE Plan - Path to a Golden Model.md (W3, W5)`.
- Compared with MDSE_v2 at `d35af12`.
- Existing rules: WKB-009 (preview, atomic, undo), TST-003 (Canvas geometry is presentation only). Not carried: staging with temporary invalidity, the Apply block on integrity failure, and curated layout surviving refresh.
- Source items: B5 to B8 of the minimum editor sequence. V1 terms (Local Model occurrence, endpoint) read as SysML usage, port and connection.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerRestructuresAnAssemblyInAStagedTransaction {
        doc /* A structural edit is staged, reviewed, applied or cancelled as one transaction with exact undo. */
    }
}
```
