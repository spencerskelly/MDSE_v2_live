---
type: Object
subtype: software
id: OBJ-00003
uid: 20261022025900002skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00003::MDSEWorkbench
---
# MDSE Workbench

## Existing component purpose

Engineer-facing Obsidian plugin and offline viewer with model indexing, relationship views, review queue, canvases and selected editing actions.

## Source code

- `tools/workbench/src/index.ts`
- `tools/workbench/src/views.ts`
- `tools/workbench/src/plugin.ts`

## Related test definitions

- `tools/workbench/test/workbench.test.ts`
- `tools/workbench/test/edit.test.ts`
- `tools/workbench/test/merge.test.ts`

## Candidate function relevance

- BEH-00003
- BEH-00004
- BEH-00005
- BEH-00006
- BEH-00007

## Significant gap or conflict

Primary search does not index aliases or scoped SysML text; no confirmed multi-seed shared-connection query; real Obsidian acceptance unverified.

## Verification and review

Code and test definitions were inspected in GitHub. Dedicated suites were not executed for this baseline; runtime/engineering acceptance and native SysML connections remain unverified.

## Modeled software decomposition — draft

The Workbench owns four typed software parts for discovery, typed relationship traversal, viewpoint projection, and model editing. Each part usage **performs** an existing logical action definition; the definitions remain in `30_Functions`.

Original sources: [[GOV-012]], [[WKB-008]], [[WKB-012]], [[WKB-016]], [[WKB-020]]. These are native part usages and candidate performed-action allocations, **not** evidence of completed testing. Where a child role lacks a reusable definition, it is an untyped initial software usage pending further decomposition.

## SysML v2

> Draft model definition only; independent parser and semantic trace checking have not been run.

```sysml
package MDSE_OBJ_00003 {
    part def MDSEWorkbench {
        doc /* Engineer-facing Obsidian plugin and offline viewer with model indexing, relationship views, review queue, canvases and selected editing actions. */
        part modelDiscovery : MDSE_OBJ_00008::ModelDiscoveryIndex {
            perform action discover : MDSE_BEH_00003::DiscoverModelElements;
        }
        part relationshipTraversal : MDSE_OBJ_00009::RelationshipQueryEngine {
            perform action traverse : MDSE_BEH_00004::TraverseModelRelationships;
        }
        part viewpointProjection : MDSE_OBJ_00010::ViewpointProjectionEngine {
            perform action generate : MDSE_BEH_00005::GenerateModelViewpoints;
        }
        part modelEditing : MDSE_OBJ_00011::ModelEditingService {
            perform action maintain : MDSE_BEH_00007::MaintainModelKnowledge;
        }
    }
}
```
