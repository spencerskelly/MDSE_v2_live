---
type: Requirement
subtype: engineering
id: REQ-98036
uid: 20261021212000055skellyspencer
status: Draft
tags: [last-check]
---
# A missing link is reported with a coverage state, not as an error

## Definition

What a note must be linked to depends on its class and maturity. A released requirement has a subject, rationale, applicability and a verification approach. A released interface names its participants, exchanged content and limits. A technician procedure names the configurations it applies to and the architecture it describes. A gap is recorded with one of five states: not yet modeled; not applicable, with a reason; external dependency; unresolved; intentionally omitted at this level of abstraction. A report that counts gaps shows the five states apart, so incompleteness is not confused with irrelevance, and a draft is not held to the released standard.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 88_Reference/resolve.md (section 9)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 has no per-class coverage expectation. TST-009 lists handoff checks (Functions have performers where applicable) but not states for an accepted gap.
- Source is a design discussion kept as a reference page (phrased 'I would ...'), not an owner decision.

> [!flagNote] Draft proposal. Owner decides the per-class coverage table and whether the five states are a frontmatter field or a flagNote.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AMissingLinkIsReportedWithACoverageStateNotAsAnError {
        doc /* Missing links are reported with one of five coverage states by class and maturity. */
    }
}
```
