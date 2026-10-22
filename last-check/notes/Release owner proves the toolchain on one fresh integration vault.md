---
type: Use Case
subtype: what
id: UC-98002
uid: 20261021212000022skellyspencer
status: Draft
tags: [last-check]
---
# Release owner proves the toolchain on one fresh integration vault

## Definition

The release owner proves importer, Workbench, Bootstrap and Base Vault together on the real model in one controlled run:
1. Build a fresh Base from controlled source and check it before initialising; never reuse an edited candidate vault.
2. Initialise the candidate once (vault identity, Git) and commit the clean baseline before importing.
3. On the Mac, pass Bootstrap first-open: enable and disable persistence, damaged plugin, settings drift, author registration.
4. Run the attachment decode-only check against its benchmark before any write.
5. Run the full real import once and keep the evidence package.
6. Rebuild the Workbench index and run the model checks; record findings, Review counts and index duration.
7. Repeat the engineer tasks on real imported assemblies.
8. Restart Obsidian and confirm edits, cache behaviour, views and Review state.
Then run the same source into a second fresh Base and require no semantic differences except permitted run metadata.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Impact-Focused Remaining Work - 2026-10-05.md (Phase D, C3, E2)`; `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 4)`.
- Compared with MDSE_v2 at `d35af12`.
- Expensive runs are saved for when the known importer corrections are done; a full integration vault is not needed for every importer edit.
- TST-004 G0 to G8 and TST-005 R1 to R7 hold the gates; this note holds the order and the single-run discipline. Sequence in the source: A to F, with D8 as the first milestone.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def ReleaseOwnerProvesTheToolchainOnOneFreshIntegrationVault {
        doc /* The release owner runs one fresh integrated import and the full acceptance sequence on it. */
    }
}
```
