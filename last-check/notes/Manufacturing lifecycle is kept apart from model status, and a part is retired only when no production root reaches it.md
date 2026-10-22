---
type: Requirement
subtype: engineering
id: REQ-98044
uid: 20261021212000064skellyspencer
status: Draft
tags: [last-check]
---
# Manufacturing lifecycle is kept apart from model status, and a part is retired only when no production root reaches it

## Definition

The lifecycle state of a manufactured part, such as released, obsolete or retired, is stored on its own and is never the same field as the note's model `status`. A part is marked Retired only after a check shows that no production root assembly still reaches it. A part that is obsolete but still reachable keeps its state and is reported. The check is repeatable and lists the root that keeps the part in use.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/docs/bom (A-02 and A-12, section 17.6)`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 BOM A-02 and A-12 section 17.6. Compared with MDSE_v2 at d35af12: the BOM importer keeps the latest revision only and stores `lifecycleState`, so the separation exists. The reachability rule for Retired does not appear in BOM-001 to BOM-017.

> [!flagNote] Draft. The separation is carried in v2; only the reachability rule is a gap.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ManufacturingLifecycleIsKeptApartFromModelStatusAndAPartIsRetiredOnlyWhenNoProductionRootReachesIt {
        doc /* Lifecycle state is separate from status, and Retired requires that no production root reaches the part. */
    }
}
```
