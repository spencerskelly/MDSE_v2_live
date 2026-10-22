---
type: Requirement
subtype: engineering
id: REQ-98014
uid: 20261021212000033skellyspencer
status: Draft
tags: [last-check]
---
# Requirement subtype follows the EA package path

## Definition

A requirement's subtype is set from the EA package it sits in, first match wins, under the top-level package `03 Product Requirement` and its neighbours. `Regulatory Requirements` gives `standard`. `Engineering Requirements` gives `engineering` for every element in it, whatever its stereotype, because being filed under function or design in EA does not make a requirement functional or design. `Design Guides` and `05 Product Design` give `design`. `04 Product Function` gives `functional`. Any other package gives `stakeholder`. Outside Engineering Requirements the stereotypes `functionalRequirement` (functional) and `designConstraint` (design) override the package. InformationItem elements in `03 Product Requirement / Regulatory Requirements` (2,383) are imported as requirements with subtype `standard`; their EA type stays visible as the evidence value. When no rule applies the subtype is left blank and the ledger names the element, so a person can find every defaulted case.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Workspace Decision Log.md (W-115, W-116, W-238)`; `99_System/03_Schemas/ea-element-mapping.yaml`.
- Compared with MDSE_v2 at `d35af12`.
- MOD-057 states the rule in one sentence. The importer's `classify()` in `tools/importer/src/ea_mapping.ts` matches package names with provisional keywords (`standard|regulat`, `stakeholder|customer`, `functional`, `design`) and defaults to `engineering`, and tests every segment of the path, so it differs from the V1 table in three ways: `04 Product Function` does not match `functional` and falls to the default `engineering` where V1 gives `functional`; any other package gives `engineering` where V1 gives `stakeholder`; and a package named like `design` or `standard` below Engineering Requirements overrides `engineering`, where V1 keeps every element there `engineering`. Stereotypes never override the package.
- Counts recorded in V1 for the EA8647 source: standard 10,918 (8,535 Requirement elements plus 2,383 InformationItems), engineering 2,469, stakeholder 1,744, design 742, functional 498.
- The exact package names are in V1 `ea-element-mapping.yaml` (`subtypeRule`) and in W-115 and W-116; they are not in the v2 mapping JSON.

> [!flagNote] Gap: replace the keyword classifier with the named package paths, or record a decision that keywords are intended. 16 elements fall to stakeholder only because no rule names their folder; review them.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def RequirementSubtypeFollowsTheEAPackagePath {
        doc /* Requirement subtype is derived from the EA package path by a fixed ordered table. */
    }
}
```
