---
type: Requirement
subtype: stakeholder
id: STK-00021
uid: 20261021181500009skellyspencer
status: Draft
tags: []
sourceRole: authoritative-model
primarySymbol: MDSE_STK_00021::CustomerDocumentationBuilder
---
# Customer Documentation Builder

## Need

Create customer-facing documentation from reviewed engineering knowledge, with audience-specific scope and controlled disclosure.

## Stakeholders (proposed)

Customer support; field applications; technical publications; customers

## Desired outcome (proposed)

Generate a consistent customer document that can be traced to approved model sources.

## Candidate use case

Publish customer engineering documentation

## Impact on toolset (preliminary)

Core; Workbench; future publishing capability

## Existing coverage (preliminary)

External documentation output is later scope in ROADMAP.md; not implemented as accepted builder.

## Candidate trace

- Use case, function, system requirements, architecture allocation and verification: not yet traced; fill after need review.

## Review questions

- Is this the intended stakeholder problem and desired outcome?
- Which outputs or decisions are in scope, and which are not?
- What existing functions, rules, implementations and tests should be reused?

## Modeling coverage and next trace

**Open modeling gap.** None of the sixteen currently defined Engineering Knowledge Base use cases directly depends on this stakeholder need in native SysML. The need remains a reusable Draft requirement, **not** an automatically satisfied capability.

Source-note candidate context: Publish customer engineering documentation

The correct follow-up is to review this need and create or reuse a suitable use-case definition and logical function before writing a native dependency or allocation. No connection has been fabricated solely to make a canvas visually complete. See [[MDSE Knowledge Base - Modeled Dependencies]] for relationships that are actually present.

## SysML v2

> Draft SysML definition, not parser-certified. Formal cross-element relationships will be added after native syntax/endpoint review; this note is not a release requirement.

```sysml
package MDSE_STK_00021 {
    requirement def CustomerDocumentationBuilder {
        doc /* Create customer-facing documentation from reviewed engineering knowledge, with audience-specific scope and controlled disclosure. */
    }
}
```
