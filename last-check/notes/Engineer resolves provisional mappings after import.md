---
type: Use Case
subtype: what
id: UC-98007
uid: 20261021212000027skellyspencer
status: Draft
tags: [last-check]
---
# Engineer resolves provisional mappings after import

## Definition

Stage 1 is mechanical, so some mappings are provisional and visible. In stage 2 the engineer decides them in groups, using the EA type and package as evidence, logs each group decision, and changes the rule for the next import. Groups:
1. Holding notes of unmapped EA types: decide the class for each group.
2. Blank or mechanical class and subtype calls (for example Class to Object, State to Design or State, Function with no stereotype, test case to Verification or Procedure).
3. Temporary typing links: turn each into a copy, part, specialization or other link, then remove the pair.
4. Hierarchy written from placement: keep or replace with a more precise link.
5. Nesting connectors written as hierarchy: check direction against the connector's row in the review table.
6. Specializations between notes of different classes: real kind-of, another link, or remove.
7. Shared aggregations: shared parts or membership.
8. Links that fit no rule (satisfy, derive, refine, trace, verify, dependency, allocate, association, usage, realization): decide the right link per group.
9. Very long inverse lists: decide whether any should be one-way.
10. Use case include written as ownership: owned or shared.
11. Initial and final nodes of state machines: write them on the state machine and retire the node notes.
Done when nothing is left in a holding class, no temporary typing link remains, and each group has a log entry.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 7)`.
- Compared with MDSE_v2 at `d35af12`.
- This is the stage-2 backlog. MOD-061, IMP-040 and IMP-027 mention stage 2 but not the groups. Many groups are V1-specific (hasClassifier, includes, inverse lists); under D-0003 the SysML-defined ones become SysML text or flagLink and the remainder stay MDSE-only.
- V1 scale: about 1,620 typing links, about 19,600 placement hierarchy links (70 percent requirement under requirement), 252 nesting direction lines, 666 holding notes. Rule-level decisions made before a keep run avoid thousands of per-note judgements.

> [!flagNote] Regroup against the V2 flag types (flagLink, flagNote) once the first V2 import exists.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerResolvesProvisionalMappingsAfterImport {
        doc /* The engineer settles provisional mappings by group, logs each decision and updates the rule. */
    }
}
```
