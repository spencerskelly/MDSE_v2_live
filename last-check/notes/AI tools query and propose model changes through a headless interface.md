---
type: Requirement
subtype: stakeholder
id: STK-98004
uid: 20261021212000003skellyspencer
status: Draft
tags: [last-check]
---
# AI tools query and propose model changes through a headless interface

## Definition

AI tools (Claude, Rovo, others) need a way to query the model and propose changes without driving Obsidian. Proposals are reviewed by an engineer; the interface never applies an unreviewed change to an engineer-owned note. Typical queries are where-used, requirement trace, and the state of open flags.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/MDSE Plan - Path to a Golden Model.md (After golden)`.
- Compared with MDSE_v2 at `d35af12`.
- Source phrasing: 'a headless platform (CLI, MCP server) so AI tools query and propose changes'. It was direction after the golden model, not a commitment.
- Related open decisions in MDSE_v2: OD-02 (how Rovo reads relationships once they live only in SysML text) and the question whether Rovo indexes Markdown on SharePoint at all.
- Shares its core with the headless model validator note.

> [!flagNote] Direction only in the source. Needs an owner decision before any rule is written.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AIToolsQueryAndProposeModelChangesThroughAHeadlessInterface {
        doc /* AI tools query the model and propose changes through a headless interface, with engineer review. */
    }
}
```
