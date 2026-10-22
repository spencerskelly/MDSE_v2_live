---
type: Requirement
subtype: engineering
id: REQ-98041
uid: 20261021212000060skellyspencer
status: Draft
tags: [last-check]
---
# A named top-level package can decide what an allocation means before its EA type does

## Definition

When the source model puts the meaning of a connector in the package its source element sits in, the importer may read that package before it reads the element types. A rule of this kind names the top-level package, the connector family it overrides, the result, and the review trigger that applies when the source is not under that package. It is listed in the translation table beside the type-based rules, and it is reported in the ledger so a reviewer can see which rule decided each connector. A package rule is never inferred from a folder name that was not declared in the source profile. The package names belong to the source profile of one model, not to the importer's code.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/11_Importer/History/EA Native Translator/05_Translation Rules/Matrix Rules (Rules 072 to 079); 07_References/Imported Review Inputs/EA Import Changes From Original Translator.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Matrix Rules 072 and 073 (settled) and the change record NT-CHG-012 in the V1 EA Native Translator workspace. In the real model one top-level design package held 1,003 of the allocate connectors and one top-level function package held 1,410, out of 2,795 allocate connectors in total. A package rule decided about 86% of them. The remaining 382 fell to type-based rules or to review. The V1 record says the package rules must be applied 'through explicit precedence, not through best semantic interpretation', and that package-specific exceptions do not become global rules without explicit promotion.
- V1 also set an order for the rest: an Issue at either end gives 'affects'; an information item at either end gives 'describes'; a State gives a state link only after those; a requirement on one end with an Activity gives 'satisfies', with a class or artifact gives 'appliesTo'. That order is V1 YAML vocabulary and is refused (D-0003), but the idea of a stated precedence is not.
- Compared with MDSE_v2 at d35af12: Abstraction:allocate is decided by the kinds of the two definitions (TRANSLATION.md, ALLOCATE_ENDPOINT_KIND). The importer has no rule that reads the source package, and 'Requirement subtype follows the EA package path' is the only place where a package decides anything. The V1 v0.8.19 importer also treated an Activity under the function package as a Behavior function whatever its stereotype. That is a related but separate case, and I did not compare it with v2's Behavior mapping.
- Questions for the owner: whether v2 should keep package rules out on purpose, because SysML v2 text needs the allocation as a plain 'allocate' whichever package it came from; and whether the V1 split (performs for one package, design-of for the other) has a SysML v2 reading at all. Public notes must not carry the real package names (DAT-002).

> [!flagNote] Draft. May be refused on purpose: v2 allocation depends only on definition kinds. The owner decides whether any package rule is wanted.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ANamedTopLevelPackageCanDecideWhatAnAllocationMeansBeforeItsEATypeDoes {
        doc /* A declared package can override an allocation rule, and the ledger shows which rule decided each connector. */
    }
}
```
