---
type: Requirement
subtype: engineering
id: REQ-98063
uid: 20261021212000083skellyspencer
status: Draft
tags: [last-check]
---
# Every setup or recovery procedure states what it does, what must exist first, one action per step, the expected result, the likely failure with its diagnosis and recovery, and when to stop

## Definition

A procedure written for a person who is not an engineer has these parts: what it does and why; what must already be installed, how to check, and what to do if it is missing; the application to open, with how to open it on each operating system; one numbered action per step, with commands in a copyable block and anything to replace marked; the result expected after each meaningful step; for each step the most likely failure, its diagnosis, a safe recovery and a link to the troubleshooting note; the point at which the person must stop and ask; and how the person knows the procedure is finished. Failure modes are written when the procedure is written. A procedure never tells a person to delete files, reset the history or overwrite work without first saying what that costs and giving a safe way back. Terms such as repository or branch are defined at first use, and a screenshot is never the only instruction.

## Notes

- Carried from `Ampure_Data` at `21c60ba` and rewritten: `Ampure_Data Rules/User Procedure Standard.md`; `Ampure_Data Templates/Procedure.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Ampure_Data Rules/User Procedure Standard.md, Rules/Git Governance Rules.md (Process Documentation Standard) and Templates/Procedure.md. The same source says manual steps are acceptable while the process is unproven, if they follow this standard, and that repeated manual steps become candidates for automation.
- Compared with MDSE_v2 at d35af12: REQ-98022 gives Procedure a role as a model element, and AI_INSTRUCTIONS.md in Test_Vault_ covers how an AI writes notes. I found no standard for the user-facing setup and recovery documents that ship with the Base Vault (tools/base-vault README, Bootstrap README). This note is a documentation requirement, not a model requirement.

> [!flagNote] Draft. Documentation standard; fits the owner's goal that the vault is easy to use for engineers who do not use Git.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def EverySetupOrRecoveryProcedureStatesWhatItDoesWhatMustExistFirstOneActionPerStepTheExpectedResultTheLikelyFailureWithItsDiagnosisAndRecoveryAndWhenToStop {
        doc /* Procedures state expected results, failure modes, recovery and a stop point. */
    }
}
```
