# Enterprise MBSE + PLM vertical traces — draft

The following are **candidate chains for review**, not existing native SysML v2 links or software implementation claims.

| Need | Use Case | Requirement | Function | Object | Acceptance demonstration |
|---|---|---|---|---|---|
| NEED-P02 | UC-P02, UC-P11 | REQ-P03, REQ-P08 | FN-P02, FN-P07 | OBJ-P02, OBJ-P09 | A specific requirement links to design, actual test result and release |
| NEED-P04 | UC-P06, UC-P10 | REQ-P06, REQ-P12 | FN-P06, FN-P03 | OBJ-P04, OBJ-P06 | Change impact includes BOM, software, test and variants |
| NEED-P05 | UC-P07 | REQ-P05, REQ-P14 | FN-P05, FN-P11 | OBJ-P03, OBJ-P11 | Reproduce approved BOM, software and document revisions |
| NEED-P06 | UC-P09 | REQ-P05, REQ-P11 | FN-P05, FN-P09 | OBJ-P03, OBJ-P10 | Compare controlled engineering and manufacturing BOMs |
| NEED-P07 | UC-P11, UC-P12 | REQ-P08, REQ-P15 | FN-P07, FN-P12 | OBJ-P09 | Separate verified requirement, executed evidence and deviation |
| NEED-P08 | UC-P05, UC-P10 | REQ-P02, REQ-P07 | FN-P04, FN-P06 | OBJ-P05, OBJ-P04 | Preserve human edits and review conflicts |
| NEED-P09 | UC-P13 | REQ-P13 | FN-P12, FN-P05 | OBJ-P09, OBJ-P03 | Match serial/as-maintained item to approved applicability |
| NEED-P12 | UC-P17 | REQ-P16 | FN-P13 | Current toolchain; OBJ-P07 | Version-aware upgrade and failure/rollback evidence |

## Validation gates
1. Stakeholder accepts intent and use-case scenario.
2. Requirement is atomic, measurable, and linked to source need.
3. Function is a reusable behavior, not a renamed rule.
4. Object has a justified behavioral performer/assignment.
5. External authoritative record boundaries and revision context are explicit.
6. SysML text validates with current parser and endpoint checks.
7. Verification cases and *actual execution evidence* remain distinct.
