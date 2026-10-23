---
type: Object
subtype: software
id: OBJ-00005
uid: 20261022025900004skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_OBJ_00005::MDSEBootstrap
---
# MDSE Bootstrap

## Existing component purpose

Obsidian startup and repair plugin for plugin integrity, governed settings, core plugin activation and author registration.

## Source code

- `tools/bootstrap/src/main.js`

## Related test definitions

- `tools/bootstrap/test/bootstrap.test.mjs`

## Candidate function relevance

- BEH-00007

## Significant gap or conflict

Bootstrap is JavaScript despite TypeScript governance; simulated tests exist, but real first-open testing and staged startup acceptance are unverified.

## Verification and review

Code and test definitions were inspected in GitHub. Dedicated suites were not executed for this baseline; runtime/engineering acceptance and native SysML connections remain unverified.

## Modeled software decomposition — draft

Bootstrap's integrity verification, repair and author-registration responsibilities are separate software parts. No knowledge-base function is incorrectly assigned as a substitute for these release/startup functions.

Original sources: [[GOV-012]], [[BOO-001]]. These are native part usages and candidate performed-action allocations, **not** evidence of completed testing. Where a child role lacks a reusable definition, it is an untyped initial software usage pending further decomposition.

## SysML v2

> Draft model definition only; independent parser and semantic trace checking have not been run.

```sysml
package MDSE_OBJ_00005 {
    part def MDSEBootstrap {
        doc /* Obsidian startup and repair plugin for plugin integrity, governed settings, core plugin activation and author registration. */
        part runtimeIntegrityCheck : MDSE_OBJ_00016::RuntimeIntegrityCheck;
        part activationRepair : MDSE_OBJ_00017::ActivationRepair;
        part authorRegistration : MDSE_OBJ_00018::AuthorRegistration;
    }
}
```
