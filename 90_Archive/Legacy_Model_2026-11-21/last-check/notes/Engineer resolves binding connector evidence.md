---
type: Use Case
subtype: what
id: UC-98006
uid: 20261021212000026skellyspencer
status: Draft
tags: [last-check]
---
# Engineer resolves binding connector evidence

## Definition

An EA binding connector says two interface endpoints are bound, but does not prove what that means in the model. The import never converts it to exposure merely because containment suggests an outer and inner end. The engineer opens the owning assembly and both endpoint definitions and decides: boundary exposure (the outer interface exposes the inner); a peer connection; or still unclear, which stays unresolved and visible rather than guessed. The decision is recorded against the source connector. Done when every source binding connector has a reviewed outcome.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 8)`.
- Compared with MDSE_v2 at `d35af12`.
- V1 counts: 249 connectors; 185 with a one-level containment candidate, 60 with a multi-level candidate needing a spot-check, 4 with no containment path.
- MDSE_v2 IMP rules state Binding only for compatible equal features, otherwise flagLink. The review procedure and the outer/inner candidate evidence in the review table are not carried.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerResolvesBindingConnectorEvidence {
        doc /* The engineer classifies each binding connector as exposure, peer connection or unresolved. */
    }
}
```
