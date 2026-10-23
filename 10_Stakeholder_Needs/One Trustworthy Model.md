---
type: Requirement
subtype: stakeholder
id: STK-00002
uid: 20261021163400002skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00002::StakeholderNeed02
---
# One Trustworthy Model

**Status:** Proposed model element; not an approved new governance rule.

**Statement:** Engineers need one coherent, linked source of engineering meaning, with no conflicting authoritative copies.

**Stakeholder:** Engineering team and model owner

**Existing basis:** MDSE_DEFINITION.md Principles; D-0003

## Proposed trace links

- Draft incoming refinement: [[REQ-31280 - WKB-008 Statement 3]] (authoritative SysML write location). No dedicated directly refining use case has yet been established.

These are provisional navigational links. Formal native SysML relationships, endpoint typing, and independent parser acceptance remain to be verified. Do not treat a link or verification declaration as passed evidence.

## Modeling coverage and next trace

**Open modeling gap.** None of the sixteen currently defined Engineering Knowledge Base use cases directly depends on this stakeholder need in native SysML. The need remains a reusable Draft requirement, **not** an automatically satisfied capability.

Source-note candidate context: No dedicated use-case definition has yet been established for this stakeholder need. The clause-3 requirement definition now owns a draft `#refinement dependency` to this need; a requirement-level refinement does not close the missing use-case or implementation trace.

[[REQ-31306 - WKB-020 Statement 1]] now carries a Draft native `#refinement dependency` to this need: duplicate YAML/SysML representations must resolve to one semantic link. This is a narrower requirement-level refinement, not an approved solution or a directly refining use case.

The correct follow-up is still to review this need and create or reuse a suitable use-case definition and logical function before claiming complete use-case coverage. No connection has been fabricated solely to make a canvas visually complete. See [[MDSE Knowledge Base - Modeled Dependencies]] for relationships that are actually present.

## SysML v2

> Draft definition, not yet parser-certified. Keep this SysML section last.

```sysml
package MDSE_STK_00002 {
    requirement def StakeholderNeed02 {
        doc /* Engineers need one coherent, linked source of engineering meaning, with no conflicting authoritative copies. */
    }
}
```
