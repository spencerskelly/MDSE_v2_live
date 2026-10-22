---
type: Requirement
subtype: stakeholder
id: STK-98005
uid: 20261021212000004skellyspencer
status: Draft
tags: [last-check]
---
# The model is linked to engineering data in other systems

## Definition

Engineers need model elements to link to related data held elsewhere: issue and task tracking (Jira), documentation (Confluence), test results and BOM data. Shared libraries of definitions are reused across product lines instead of copied.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (After golden)`.
- Compared with MDSE_v2 at `d35af12`.
- Source phrasing: 'a digital thread to Jira, Confluence, test results and BOM data; shared libraries across' the product lines. Direction, not commitment.
- BOM data is already in scope for Phase 2 (BOM rules). The other systems are not covered by any MDSE_v2 rule. Atlassian Rovo is the stated consumer, which makes Jira and Confluence the natural first links.

> [!flagNote] Direction only. Scope and sequencing need an owner decision.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def TheModelIsLinkedToEngineeringDataInOtherSystems {
        doc /* Model elements link to related data in issue, documentation, test and BOM systems. */
    }
}
```
