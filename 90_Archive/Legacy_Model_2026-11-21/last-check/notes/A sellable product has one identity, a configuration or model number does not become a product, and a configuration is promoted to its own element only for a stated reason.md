---
type: Requirement
subtype: engineering
id: REQ-98058
uid: 20261021212000078skellyspencer
status: Draft
tags: [last-check]
---
# A sellable product has one identity, a configuration or model number does not become a product, and a configuration is promoted to its own element only for a stated reason

## Definition

A product is the stable base system that several functions sell, support or manage, and it has one identity that every function uses. A configuration option, a customer's choice of options or a model number that encodes a configuration does not create a new product. Each product documents its configurable portions and the allowed values of each, and these are product-specific and never assumed to be global. A configured form becomes its own element only when it needs at least one of: separate lifecycle management, certification or regulatory control, distinct service behavior, repeated reuse as a standard configuration, or independent approval or release. A model-number record is read from its source system and referenced, and is not copied into the model by default. The engineering structure under a product may use system, module, assembly or component without changing the product identity.

## Notes

- Carried from `Ampure_Data` at `21c60ba` and rewritten: `Ampure_Data Rules/MDSE/00_Core/01_Elements/Product.md`; `Ampure_Data Rules/MDSE/00_Core/01_Elements/Product Line.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Ampure_Data Rules/MDSE/00_Core/01_Elements/Product.md (configuration pattern, model numbers, promotion rule, cross-functional rule) and the Product Line note (two product lines with the same display name are different elements with different uids).
- Compared with MDSE_v2 at d35af12: REQ-98017 says a configurable position is modeled once as a variation or an optional usage, and REQ-98051 says a variant choice is a working state. Neither says when a configuration becomes its own element or that a model number is not a product. I searched RULESET.md for model number, configured form and product identity and found no rule. The source was written for a company-wide shared vault; the same test applies to the engineering model.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search. Check the promotion reasons against the real product families before accepting them.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ASellableProductHasOneIdentityAConfigurationOrModelNumberDoesNotBecomeAProductAndAConfigurationIsPromotedToItsOwnElementOnlyForAStatedReason {
        doc /* A configuration becomes its own element only for a stated promotion reason. */
    }
}
```
