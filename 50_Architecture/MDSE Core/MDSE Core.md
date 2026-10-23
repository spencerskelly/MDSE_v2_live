---
type: Object
subtype: software
id: OBJ-00002
uid: 20261022025900001skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00002::MDSECore
---
# MDSE Core

## Existing component purpose

Shared note and SysML block parsing, note validation, serialization helpers and model identity lookups.

## Source code

- `tools/core/src/mdse_core.js`

## Related test definitions

- `tools/core/test/mdse_core.test.mjs`

## Candidate function relevance

- BEH-00002
- BEH-00003
- BEH-00004
- BEH-00007

## Significant gap or conflict

The currently retained core mergeNote refreshes existing SysML/source fields without approval, conflicting with importer merge policy.

## Verification and review

Code and test definitions were inspected in GitHub. Dedicated suites were not executed for this baseline; runtime/engineering acceptance and native SysML connections remain unverified.

## Modeled software decomposition — draft

The shared Core separates parsing/serialization from identity resolution. Both are supporting services; no duplicate BEH function is claimed until ownership of those activities is reviewed.

Original sources: [[GOV-012]], [[MOD-018]]. These are native part usages and candidate performed-action allocations, **not** evidence of completed testing. Where a child role lacks a reusable definition, it is an untyped initial software usage pending further decomposition.

## SysML v2

> Draft model definition only; independent parser and semantic trace checking have not been run.

```sysml
package MDSE_OBJ_00002 {
    part def MDSECore {
        doc /* Shared note and SysML block parsing, note validation, serialization helpers and model identity lookups. */
        part noteAndSysmlCodec;
        part modelIdentityLookup;
    }
}
```
