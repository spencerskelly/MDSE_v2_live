---
type: Requirement
subtype: functional
id: REQ-31278
uid: 20261022043100278skellyspencer
status: Draft
sourceRole: rule-derived-requirement-candidate
sourceRule: WKB-008
sourceRuleStatus: Active
sourceRuleClause: 1
sourceRevision: b78c453d7fe0d9c18d88c31ed54544e9873e8cb7
semanticReview: pending
primarySymbol: MDSE_REQ_31278::RuleREQ31278
---
# WKB-008 — Candidate Requirement 1

> [!warning] Unapproved model interpretation
> The source rule is **Active**, but this is a **Draft candidate statement**, not an independent approved requirement. Its segmentation, wording, duplication and applicability must be reviewed before promotion or new implementation work.

## Candidate obligation

The Edit lens adds relationships, elements and requirement text.

## Authoritative origin

- [[WKB-008]] — exact source rule and decision origins
- [[WKB-008 - Analysis]] — clause decomposition and current classification
- Source family: `WKB`; semantic role: User Interaction Requirement; source phase `P1`
- This is one of 3 initial segments. It may need further splitting, combining or deduplication.

## Use cases requiring this candidate

- [[Add Engineering Knowledge]]
- [[Correct or Complete Knowledge]]

## Logical functions supported

- [[Discover and Resolve Model Elements]]
- [[Maintain and Improve Model Knowledge]]

## Existing software architecture candidates

- [[MDSE Workbench]]
- [[MDSE Core]]

This is an analysis of responsibilities, **not an approved SysML allocation**.

## Verification relationship

- Proposed case: [[VER-31137 - WKB-008 Rule Verification]]
- Acceptance criteria: must be derived and reviewed individually from the candidate obligation
- Executed result: none established
- Rule conflict / supersession review: required before making this an enforceable acceptance criterion

## Contextual native trace — Draft

[[MDSE Toolset Composition]] now owns a typed usage `editLensCapabilities` of this requirement, allocated to its `workbench` usage and included in the existing [[VER-31137 - WKB-008 Rule Verification]] objective. [[Add Engineering Knowledge]] and [[Correct or Complete Knowledge]] own native dependencies to this requirement.

This candidate elaborates the contribution/editing aspect of [[Engineering Knowledge Base]], using the native refinement below. Clause 1 still groups element creation, relationship editing, and requirement-text editing: independent acceptance criteria and possible decomposition remain open. Neither allocation nor refinement establishes implementation satisfaction.
## Granular obligation candidates — not approved

This clause combines **three independently testable editing capabilities**, not one atomic outcome.

| Atomic review ID | Proposed obligation | Verification focus |
|---|---|---|
| WKB-008-A01 | Permit the user to add an eligible relationship through Edit lens | Persist one valid typed relationship |
| WKB-008-A02 | Permit the user to add an eligible model element | Inspect created note and model definition |
| WKB-008-A03 | Permit the user to change requirement text | Reload the note and compare authoritative wording |

These should become individually tracked requirements only after semantic review. No new UID, ID or SysML definition has been introduced in this pass.

## SysML v2

> Candidate SysML definition. Parser acceptance and full native relationship semantics have not been established for this pilot.

```sysml
package MDSE_REQ_31278 {
    private import ModelingMetadata::Refinement;
    requirement def RuleREQ31278 {
        doc /* The Edit lens adds relationships, elements and requirement text. */
        #refinement dependency from RuleREQ31278 to MDSE_STK_00013::EngineeringKnowledgeBase;
    }
}
```
