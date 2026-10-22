---
type: Requirement
subtype: engineering
id: REQ-98022
uid: 20261021212000041skellyspencer
status: Draft
tags: [last-check]
---
# Verification, Procedure, Setup, Plan and Result each have one role

## Definition

A Verification defines reusable verification intent: what is checked and by what method (test, analysis, inspection or demonstration). A Procedure orders the activities. A Setup defines the capability needed to run it. A Plan selects the content of a verification campaign. A Result records the evidence from one execution. The five are separate notes. A Result is never edited to change the intent, and a Verification does not hold an execution record. `verifies` relates a Verification to the requirement it checks, and that link stays when no run has happened or a run fails. A link to a requirement states intent, never a pass.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 99_System/10_Docs/MDSE Modeling Ruleset 1.23.md section 8`.
- Compared with MDSE_v2 at `d35af12`.
- `governance/schemas/element-types.yaml` lists the classes and subtypes (Verification: test, analysis, inspection, demonstration; Procedure: eight subtypes) but gives no role for any of them. The V1 role sentences are in Ruleset 1.23 section 8 and nowhere in v2.
- Verification classes have no EA source in the EA8647 import; they are for new modeling. In SysML v2 terms a Verification is a verification case definition and a Result is the record of a verdict on a usage of it; the mapping is not yet decided.

> [!flagNote] Gap in definitions only. Confirm the roles still hold after D-0003 and decide the SysML v2 construct for each class.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def VerificationProcedureSetupPlanAndResultEachHaveOneRole {
        doc /* Verification, Procedure, Setup, Plan and Result are separate roles. */
    }
}
```
