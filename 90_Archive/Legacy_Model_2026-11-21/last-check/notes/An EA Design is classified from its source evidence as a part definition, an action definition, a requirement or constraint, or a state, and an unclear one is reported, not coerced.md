---
type: Requirement
subtype: engineering
id: REQ-98054
uid: 20261021212000074skellyspencer
status: Draft
tags: [last-check]
---
# An EA Design is classified from its source evidence as a part definition, an action definition, a requirement or constraint, or a state, and an unclear one is reported, not coerced

## Definition

An EA element called Design means a reusable engineering solution that several products can use. It is not a state and it is not a part by name. The importer decides from the EA type, stereotypes, package ancestry, owner and the types of the elements it connects to: a solution that is structurally realizable becomes a part definition; a solution that is mainly behavior or software becomes an action definition; design intent, a constraint or a document becomes a requirement, constraint or documentation after its real meaning is established; a state definition is used only when the source describes state-dependent operating behavior. An element whose kind cannot be decided is kept with its source and reported as unresolved. A connector from an object to a design that was made as an allocation is reviewed by default, because allocation alone does not prove typing, composition or specialization. A requirement with the designConstraint stereotype is never made a design solution because of the word design.

## Notes

- Carried from `v2_test` at `f43f231` and rewritten: `v2_test 99_System/EA Design Concept and SysML v2 Mapping Decision.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: v2_test 99_System/EA Design Concept and SysML v2 Mapping Decision.md (the owner chose A: a Design is a reusable engineering solution) and the Native Mapping Review Queue. The source left one question open: whether an allocation from an object to a design usually means 'implements this design' or 'contains this design as a part'. It recommends the first, with composition stated separately.
- Compared with MDSE_v2 at d35af12: MOD-067 removes Design as a class, and element-types.yaml keeps `design` as a Condition subtype. I could not find how the importer treats an EA Design element, or a rule that answers the allocation question. I searched RULESET.md, DECISIONS.md and translation.ts for Design, DESIGN_KIND and hasDesign and found no match for them. The family mapping has Requirement:designConstraint only.

> [!flagNote] Draft. May be moot if v2's family mapping already decides every Design case; I did not trace it through run.ts.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AnEADesignIsClassifiedFromItsSourceEvidenceAsAPartDefinitionAnActionDefinitionARequirementOrConstraintOrAStateAndAnUnclearOneIsReportedNotCoerced {
        doc /* An EA Design is classified from evidence; an unresolved one is reported and kept. */
    }
}
```
