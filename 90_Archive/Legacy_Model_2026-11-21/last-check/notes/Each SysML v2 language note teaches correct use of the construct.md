---
type: Requirement
subtype: engineering
id: REQ-98025
uid: 20261021212000044skellyspencer
status: Draft
tags: [last-check]
---
# Each SysML v2 language note teaches correct use of the construct

## Definition

Every note in the SysML v2 language catalog answers twelve questions so that an engineer who has not read the specification can use the construct correctly: its official name and whether it comes from KerML or SysML v2; what it means in one plain sentence and then in more detail; what it does not mean, compared with the constructs it is most often confused with; the valid ends, direction and owner; one example and one counterexample from an industrial charger; the exact SysML v2 syntax, the specification reference and whether a parser has checked it; its effect on identity, ownership, typing, reuse and multiplicity; how the Workbench shows it in the tree and in a view, marking proposed conventions apart from normative symbols; how to edit it in text, tree and view; whether the EA import maps it, supports it only, or leaves it open; the common mistakes with the diagnostics and fixes; and links to adjacent constructs with a short 'use when' test. The catalog is a guide to browse, not only a decision log.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 99System/10_EA Native Translator/sysml-v2-decisions (35 decision files, 2026-10-16 and 2026-10-17): relationship-documentation-standard-approved, sysml-v2-relationship-usage-guide, sysml-v2-first-relationship-review-protocol`.
- Compared with MDSE_v2 at `d35af12`.
- The v2 language notes under `governance/language/sysml-v2/` (109) carry: eligible from and to, what separates the construct from the nearest one, one example, and an 'In MDSE' block for importer and Workbench status. Missing in the note I read (Binding connector): a counterexample, parser status, common mistakes and a use-when criterion. Not every note was compared.
- The V1 usage guide (2026-10-16) lists 14 constructs side by side with 'use when' and 'do not use when'. Its table is a model for the missing column.

> [!flagNote] Check the other language notes against the twelve points before deciding whether this is a gap or only the Binding connector note.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def EachSysMLV2LanguageNoteTeachesCorrectUseOfTheConstruct {
        doc /* A language note covers twelve questions about one construct. */
    }
}
```
