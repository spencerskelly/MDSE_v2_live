---
type: Requirement
subtype: engineering
id: REQ-98038
uid: 20261021212000057skellyspencer
status: Draft
tags: [last-check]
---
# A satisfaction or verification claim states the context it holds in

## Definition

A claim that a design satisfies a requirement, or that a test verifies it, states the context where it holds. The profile lists which of these a claim type needs: product, configuration, usage in the assembly, operating mode, lifecycle state (design baseline or installed unit), baseline, and assumptions. Not every link needs every field. A satisfy link with none of them is read as holding for the one product and the current baseline, and the Workbench says so. A test result is tied to the configuration it ran against, so a later configuration change makes it stale (see REQ-98031).

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 88_Reference/resolve.md (section 6)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 has variation and optional usages (the configurable-position note) and BOM revisions, but no statement of the context a satisfy or verify claim holds in.
- Source is a design discussion kept as a reference page (phrased 'I would ...'), not an owner decision.

> [!flagNote] Draft proposal. Owner decides whether context is SysML metadata, a flagNote or out of scope for the first release.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ASatisfactionOrVerificationClaimStatesTheContextItHoldsIn {
        doc /* A satisfy or verify claim states product, configuration, mode, baseline and assumptions where required. */
    }
}
```
