---
type: Requirement
subtype: engineering
id: REQ-98019
uid: 20261021212000038skellyspencer
status: Draft
tags: [last-check]
---
# Placement under an owner does not repeat a specialization

## Definition

When EA places a child element inside its parent and the child is also a specialization (a kind-of, a Generalization) of that parent, the import writes the specialization and does not also write the placement as ownership. Writing both would say that a relay owns a relay variant that is also a kind of relay. The rule removes the placement link for every pair where the child is a specialization of the element that owns it. No case in the EA8647 source has the owner as the specialization of the child.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workspace Decision Log.md (W-178)`.
- Compared with MDSE_v2 at `d35af12`.
- Size in V1: 799 placement links, 781 generic child links and 18 part links, across Function 507, Design 159, Use Case 110, Object 18 and Actor 5 (W-178). The V1 rule is carried only inside a retired 'consistency pass' row (REG-363). v2 writes specializations in `run.ts` (`specializes`) and nests owned usages; nothing checked in the importer says that a nested definition which also specializes its owner is written once.
- In SysML v2 terms the choice is between a nested definition and a `:>` specialization; the same pair should not appear as both.

> [!flagNote] Not verified against the v2 importer output. Check a sample of owner/child pairs where the child specializes the owner.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def PlacementUnderAnOwnerDoesNotRepeatASpecialization {
        doc /* An element placed under its owner and specializing it is written as a specialization only. */
    }
}
```
