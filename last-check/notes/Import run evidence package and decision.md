---
type: Requirement
subtype: engineering
id: REQ-98005
uid: 20261021212000010skellyspencer
status: Draft
tags: [last-check]
---
# Import run evidence package and decision

## Definition

Every real run produces an evidence package kept with the vault, and ends with one recorded decision: accept for review, restart with changed rules, or keep. The package holds: the run manifest (including the attachment benchmark line and link counts), attachment reconciliation, review tables, source-count reconciliation, a terminal summary of the ledger, diagram reconciliation, headless model-check findings, and the Workbench Review counts (provisional, broken references, identity collisions, off-rule). A run log row records date, tool, kind, result and decision.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (section 5, run log)`.
- Compared with MDSE_v2 at `d35af12`.
- Partly carried: IMP-041, IMP-043, IMP-054 (ledger, run manifest, fingerprint), BAS-010 (versions in manifest). Not carried: the single decision outcome per run and the run log.
- Real-data evidence is stored privately (MDSE_Definition: Issues are kept; DEC-3 asks where).

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ImportRunEvidencePackageAndDecision {
        doc /* Each real import run keeps an evidence package and records one decision. */
    }
}
```
