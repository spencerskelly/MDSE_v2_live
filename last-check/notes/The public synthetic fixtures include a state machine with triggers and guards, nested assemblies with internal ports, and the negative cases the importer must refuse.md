---
type: Requirement
subtype: engineering
id: REQ-98055
uid: 20261021212000075skellyspencer
status: Draft
tags: [last-check]
---
# The public synthetic fixtures include a state machine with triggers and guards, nested assemblies with internal ports, and the negative cases the importer must refuse

## Definition

The synthetic public fixture set covers: a state machine with an initial state, named transitions, triggers and an optional guard; assemblies that own internal parts, ports and connections; and a list of negative cases. The negative cases are duplicate names, nested context, proxy and full ports, subtype and redefinition, negative endpoints, ambiguity, an unresolved reference, a moved or deleted source, a stale hash, an import conflict, effectivity and revision, and an interrupted update with rollback. Each fixture is invented, carries no real names, and is accepted or rejected by the parser gate.

## Notes

- Carried from `v2_test` at `f43f231` and rewritten: `v2_test 40_Functions/Instrument Operation State Machine.md`; `v2_test 99_System/Coverage Register.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: v2_test 40_Functions (Instrument Operation: 5 states and 8 transitions; Gateway Communications: 5 states, 12 transitions and 8 event types), 10_Structure (four expanded assemblies: 17 parts, 35 internal ports, 14 internal connections), and 99_System/Coverage Register.md ('Unresolved and negative fixtures still required').
- Compared with MDSE_v2 at d35af12: testing/fixtures holds golden-charger, charger-connections, charger-merge, charger-ports, sample-instrument and synthetic-ea. A search of those files for state and transition syntax found none, so the state-machine fixtures are not in v2. I did not check whether the negative cases listed are all covered by the existing charger-* and synthetic-ea fixtures. The v2_test source is unvalidated by an official parser (its own notes say so), so it is a starting point and not a passing fixture.

> [!flagNote] Draft. Partial gap against MDSE_v2 at d35af12.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ThePublicSyntheticFixturesIncludeAStateMachineWithTriggersAndGuardsNestedAssembliesWithInternalPortsAndTheNegativeCasesTheImporterMustRefuse {
        doc /* Public fixtures cover state machines, nested internal structure and listed negative cases. */
    }
}
```
