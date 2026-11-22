---
type: Requirement
subtype: engineering
id: REQ-98023
uid: 20261021212000042skellyspencer
status: Draft
tags: [last-check]
---
# An EA Copy link makes one canonical definition and aliases for the other names

## Definition

In the owner's EA model the relationship named Copy means another name for the same model element. For each connected group of elements joined by Copy links, including chains, the import writes one definition note and one canonical SysML v2 definition. The other names become `alias <name> for <qualified name>;` in the namespace where they are used. Every relationship that was attached to any member of the group is rewritten to the canonical element with the same kind, direction, owner, roles and multiplicity. Two edges are merged only when kind, endpoints, context and roles are all the same. A rewrite that produces a self-reference, an ownership collision or a type disagreement is flagged and not dropped. Notes, documentation and properties of the members are merged into the canonical note and any conflict is listed for review. Distinct usages that share a type are not merged. Only the EA relationship called Copy counts; EA's Copy/Paste-As-New command, its Alias field, and equal names or types do not. After a clean consolidation the removed member notes and the Copy edges are not kept. Counts before and after are reported.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 99System/10_EA Native Translator/sysml-v2-decisions (35 decision files, 2026-10-16 and 2026-10-17): ea-copy-to-alias-membership-approved, ea-copy-alias-consolidation-approved`; `26_Definitions/V2_APPROVED_EXCEPTION_HANDLING_AUDIT_2026-10-18.md (EXC-06)`; `26_Definitions/V2_DATA_RETENTION_APPROVAL_HOLDS_2026-10-18.md (HOLD-01)`.
- Compared with MDSE_v2 at `d35af12`.
- RULESET IMP-060 says 'Copy becomes an alias only when identity equivalence is independently established'. The owner's approved decisions of 2026-10-16 (copy-to-alias-membership, copy-alias-consolidation) say a Copy link is itself the equivalence signal. The audit of 2026-10-18 (EXC-06) reads 'explicit source proof, collision checks, merged links and provenance, approval gate', and the retention hold of the same date keeps the destructive clauses (discarding the source records) open until the owner resolved them in STEP-00. IMP-060 and EXC-06 agree with each other; the open point is whether a Copy link is itself the proof. MOD-077 (`copyOf`/`hasCopy`) is Unreviewed and is likely affected by D-0003.
- The importer has no handling of a Copy connector: `ea_mapping.ts` and `ea-family-mapping.json` do not name it, and the 26 connector families in `EA_TO_V2_PATHS.md` (14,688 connectors) include no Copy type. If the real QEAX has none, the rule has no effect on the first import; if Copy is a stereotype of another family it is not recognized.
- Native SysML v2 alias membership is in `governance/language/sysml-v2/Alias.md`.

> [!flagConflict] IMP-060 and EXC-06 require independent proof of equivalence; the 2026-10-16 decisions treat the Copy link as the proof. The owner chooses; then check the real QEAX for Copy links.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AnEACopyLinkMakesOneCanonicalDefinitionAndAliasesForTheOtherNames {
        doc /* A group of EA Copy links is one canonical definition with aliases. */
    }
}
```
