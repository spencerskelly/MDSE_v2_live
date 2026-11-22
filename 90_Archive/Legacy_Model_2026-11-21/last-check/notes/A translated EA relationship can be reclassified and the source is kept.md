---
type: Requirement
subtype: engineering
id: REQ-98024
uid: 20261021212000043skellyspencer
status: Draft
tags: [last-check]
---
# A translated EA relationship can be reclassified and the source is kept

## Definition

The default translation of an EA relationship is a starting point and an engineer can change it. EA Object is a reusable `part def`; EA Generalization is a specialization; neither is claimed to be right in every case. The engineer can change a translated Generalization to a subsetting, a redefinition, a usage typing or a containment, and can change an Object to a usage, when the endpoints support it. Each change is validated, shown as a before and after preview with the views it affects, written to the owning note, and can be undone. The EA connector GUID, endpoints, type and stereotype stay as read-only provenance; the engineer edits only the target relationship. The record of a change has the author, the date and the reason. An edge that cannot be a valid specialization (for example a State to an Activity) is shown as an unresolved finding with the default intent kept, and an export is not called compliant while one is open. The Workbench can filter translated relationships by status (default, changed, unresolved), reclassify a reviewed batch, and report source count, converted count and exceptions.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 99System/10_EA Native Translator/sysml-v2-decisions (35 decision files, 2026-10-16 and 2026-10-17): object-generalization-import-rule-approved, ea-generalization-import-audit-pending, generalization-specialization-redefinition-future-approved, sysml-v2-relationship-usage-guide`.
- Compared with MDSE_v2 at `d35af12`.
- In the real QEAX audit of 2026-10-16 there were 3,735 Generalizations (3,974 in EA_TO_V2_PATHS.md): 46 join different object types, 45 link an Object to a Class (software versions and cable or transformer occurrences that look like typing), and one links a State to an Activity.
- `tools/workbench/README.md` says the Relationships tab can edit the target, dependency kind, name and quantity (D-0030, D-0031). Changing a specialization to a subsetting or redefinition, a batch change, and the stored reason are not described. Dependency kind has its own edit; the Generalization case does not.
- Subsetting and redefinition are supported by the language notes and are never inferred from EA (IMP-060).

> [!flagNote] Gap in the Workbench. Decide whether reclassification is an edit of the SysML text only (then it is already possible by hand) or a guided action with a recorded reason.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ATranslatedEARelationshipCanBeReclassifiedAndTheSourceIsKept {
        doc /* A translated relationship can be reclassified; the EA source stays unchanged. */
    }
}
```
