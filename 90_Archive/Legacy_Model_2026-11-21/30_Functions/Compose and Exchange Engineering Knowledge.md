---
type: Behavior
subtype: function
id: BEH-00006
uid: 20261021195900005skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_BEH_00006::ComposeEngineeringKnowledge
---
# Compose and Exchange Engineering Knowledge

## Purpose

Assemble existing notes and sections into documents or presentations with native Obsidian ![[...]] transclusion and produce governed exports.

## Inputs

Authoritative notes, sections and views; intended audience; output constraints.

## Outputs

Composed notes, rendered documents or presentations; source links; warnings.

## Functional decomposition candidates

- Select reusable model content and intended audience
- Compose transclusions or derived viewpoints without copying semantic authority
- Resolve embedded references and reveal missing/cyclic transclusions
- Produce an inspected document or export where supported

## Function boundary

Transclusion is presentation reuse, not SysML part ownership. Customer/supplier publication controls remain separate.

## Use cases depending on this function

- [[View and Export Engineering Information]]
- [[Display Linked Elements in Document Viewpoints]]
- [[Compose Documentation from Embedded Notes]]

## Candidate verification outcome

A composed document embeds a source without changing it; missing embeds are discoverable; exports retain provenance.

## Existing implementation evidence — not certification

Partial: native Obsidian embed support and Workbench table/CSV exports; full composition/export workflow unverified.

## Proposed subfunctions

- Note and section transclusion
- composition
- export

## Trace status

- [[Engineering Knowledge Base]]
- Derived system requirements, component allocations, verification cases and run results: pending
- Native relationship declarations exist in their owning notes; independent SysML parser certification and runtime canvas acceptance remain open.

## Modeled incoming relationships

Relevant use cases now own draft dependencies to this function. **No software-object `perform action` has yet been justified** for end-to-end publication; Obsidian transclusion is not equivalent to a complete publishing subsystem.

Function definitions remain reusable in this note; relationships are authored as native SysML usages or dependencies **in their owning notes**, not duplicated here. See [[MDSE Toolset Composition]] and [[Engineering Knowledge Base]] for navigation. All of these links remain Draft pending independent parser and runtime acceptance.

## SysML v2

> Draft standalone action definition; parser acceptance and typed relationship declarations remain to be verified.

```sysml
package MDSE_BEH_00006 {
    action def ComposeEngineeringKnowledge {
        action selectSources : MDSE_BEH_00018::SelectDocumentationSources;
        action composeEmbeds : MDSE_BEH_00019::ComposeEmbeddedEngineeringContent;
        action resolveEmbeds : MDSE_BEH_00020::ResolveDocumentEmbeds;
        action prepareExport : MDSE_BEH_00021::PrepareGovernedEngineeringExport;
        doc /* Assemble existing notes and sections into documents or presentations with native Obsidian ![[...]] transclusion and produce governed exports. */
    }
}
```
