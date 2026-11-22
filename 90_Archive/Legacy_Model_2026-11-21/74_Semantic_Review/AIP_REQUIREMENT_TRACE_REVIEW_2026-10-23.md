# AIP requirement trace review — first folder

Scope: **AIP only** (`72_Derived_Requirements/AIP`), seven requirement notes, four source rules, four verification cases. Source is `70_Rule_References/AIP`; each requirement already points to its analysis and source rule.

| Requirement | Governing source | Verification | Disposition |
|---|---|---|---|
| REQ-31321 | AIP-001 | VER-31153 | Written instructions and unique process ID; test intent |
| REQ-31322 | AIP-001 | VER-31153 | Process index in AI_INSTRUCTIONS; test intent |
| REQ-31323 | AIP-002 | VER-31154 | Model write restrictions and note-creation exception; test intent |
| REQ-31324 | AIP-002 | VER-31154 | Changelog review report-only; test intent |
| REQ-31325 | AIP-003 | VER-31155 | No AI-created or split vault; test intent |
| REQ-31326 | AIP-003 | VER-31155 | Permission to recommend split; no mandatory `verify` objective |
| REQ-31327 | AIP-004 | VER-31156 | No fabricated source facts; test intent |

## Trace closure

- **7/7** source policy notes and source analyses already exist and are linked from each requirement.
- **7/7** corresponding verification notes exist; expanded acceptance interpretation added to each.
- **7/7** typed requirement usages added within the existing model integration context [[MDSE Toolset Composition]] (without duplicate definitions).
- **6** objective-level native `verify` usages across the **4** existing case definitions; one permission case intentionally excluded from mandatory test verdict.
- Existing authoritative artifacts are `99_System/02_AI/AI_INSTRUCTIONS.md` and `99_System/02_AI/processes/AI-CR-01_Changelog_Review.md`. Because they already exist, no substitute Info note was created.
- **0** inferred tool allocations, satisfaction claims, or executed test claims.

## Remaining gates

1. Independently parse assembled SysML v2. Local Workbench recognition is not formal language conformance.
2. Verify the process registry and index entries; carry out permitted/forbidden action tests against actual AI automation interfaces.
3. Owner-review whether permission-only REQ-31326 should remain a `Requirement` or be reclassified as process policy.
4. Source policy's R-2.x exception must be checked against current approved governance before asserting the exception behavior.

**Folder exit:** navigation, typed usages and preliminary verification mapping complete. Acceptance, real execution and parser certification open. Next derived requirement family is BAS or BOM depending requested folder ordering.
