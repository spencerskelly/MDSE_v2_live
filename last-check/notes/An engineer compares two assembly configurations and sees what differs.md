---
type: Use Case
subtype: what
id: UC-98011
uid: 20261021212000062skellyspencer
status: Draft
tags: [last-check]
---
# An engineer compares two assembly configurations and sees what differs

## Definition

An engineer picks two assemblies, such as two revisions or two variants of one product, and asks what is different between them. The Workbench lists the differences in classes: part added, part removed, count changed, quantity or unit changed, revision changed, a part substituted by an alternate, and a difference it cannot classify. The engineer uses the result to review a change, to prepare a variant, or to check an import.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/docs/bom (A-10 variant comparison contract, fixtures VC-01 to VC-16)`.
- Compared with MDSE_v2 at `d35af12`.
- Source: the V1 BOM A-10 contract, with 16 fixtures (VC-01 to VC-16). Compared with MDSE_v2 at d35af12: BOM-001 to BOM-017 and WKB-020/021 cover reading the BOM, alternates, pinned child revisions and the rolled-up parts list. None of them compares two configurations, and BOM-005 only proposes variantOf. Related: REQ in this set on the comparison contract.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12. May be deferred on purpose until variantOf is decided.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def AnEngineerComparesTwoAssemblyConfigurationsAndSeesWhatDiffers {
        doc /* An engineer compares two assembly configurations and sees the classified differences. */
    }
}
```
