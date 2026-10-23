---
type: Behavior
subtype: function
id: BEH-00007
uid: 20261021195900006skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00007::MaintainModelKnowledge
---
# Maintain and Improve Model Knowledge

## Purpose

Create and correct engineering knowledge, review flags and conflicting changes, and preserve identity, approval, provenance and model integrity.

## Inputs

Engineer input, model state, source changes, flags and permissions.

## Outputs

New or corrected model notes, review evidence, conflict dispositions and residual issues.

## Functional decomposition candidates

- Find or reuse an existing concept before adding a new one
- Preview added/changed model meaning and potential linked impacts
- Validate/apply allowed changes or retain conflicts for review
- Display, investigate and disposition flags with evidence
- Preserve accepted engineer changes during re-import

## Function boundary

Flag visibility is separate from review authority; deleting a callout alone is not proof of correctness.

## Use cases depending on this function

- [[Import an Engineering Model]]
- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]
- [[Review and Resolve Flagged Model Items]]
- [[Display Flagged Model Data]]

## Candidate verification outcome

A correction preserves UID; unapproved source changes do not overwrite engineer edits; flags remain visible until disposition.

## Existing implementation evidence — not certification

Partial: tools/workbench/src/edit.ts and edit_rel.ts; tools/importer/src/merge.ts. Core mergeNote behavior conflicts with newer approval policy.

## Proposed subfunctions

- Creation/reuse
- controlled edits
- flag review
- integrity

## Trace status

- [[Engineering Knowledge Base]]
- Derived system requirements, component allocations, verification cases and run results: pending
- Native relationship declarations exist in their owning notes; independent SysML parser certification and runtime canvas acceptance remain open.

## Modeled incoming relationships

[[Model Editing Service]] (within [[MDSE Workbench]]) carries the typed `perform action` usage. Import reconciliation also supports controlled changes, but an additional perform relationship is not asserted without defined responsibility.

Function definitions remain reusable in this note; relationships are authored as native SysML usages or dependencies **in their owning notes**, not duplicated here. See [[MDSE Toolset Composition]] and [[Engineering Knowledge Base]] for navigation. All of these links remain Draft pending independent parser and runtime acceptance.

## SysML v2

> Draft standalone action definition; parser acceptance and typed relationship declarations remain to be verified.

```sysml
package MDSE_BEH_00007 {
    action def MaintainModelKnowledge {
        doc /* Create and correct engineering knowledge, review flags and conflicting changes, and preserve identity, approval, provenance and model integrity. */
    }
}
```
