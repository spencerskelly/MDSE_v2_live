---
type: Object
subtype: software
id: OBJ-00004
uid: 20261022025900003skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00004::MDSEBaseVault
---
# MDSE Base Vault

## Existing component purpose

Deterministic assembly of a preconfigured Obsidian vault, released schemas/templates and pinned plugin payload.

## Source code

- `tools/base-vault/src/base_vault.ts`

## Related test definitions

- `tools/bootstrap/test/bootstrap.test.mjs`
- `tools/importer/test/vault_update.test.ts`

## Candidate function relevance

- BEH-00002
- BEH-00005
- BEH-00006

## Significant gap or conflict

Plugin payload and hashes have tests, but Base Vault README contains contradictory not-built language; real first-open acceptance remains unverified.

## Verification and review

Code and test definitions were inspected in GitHub. Dedicated suites were not executed for this baseline; runtime/engineering acceptance and native SysML connections remain unverified.

## Modeled software decomposition — draft

The Base Vault separates governed configuration generation from the pinned plugin runtime payload. These are build/release responsibilities, not automatically the same as a knowledge-base logical function.

Original sources: [[GOV-012]], [[BAS-001]], [[BOO-001]]. These are native part usages and candidate performed-action allocations, **not** evidence of completed testing. Where a child role lacks a reusable definition, it is an untyped initial software usage pending further decomposition.

## SysML v2

> Draft model definition only; independent parser and semantic trace checking have not been run.

```sysml
package MDSE_OBJ_00004 {
    part def MDSEBaseVault {
        doc /* Deterministic assembly of a preconfigured Obsidian vault, released schemas/templates and pinned plugin payload. */
        part governedConfiguration;
        part pinnedPluginPayload;
    }
}
```
