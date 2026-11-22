# BOO requirements trace review — folder 4

**Coverage:** BOO-001, BOO-007 and BOO-008 are Active; together they yield seven derived requirement definitions (REQ-31271…31277). Their existing verification definitions are VER-31134, VER-31135 and VER-31136. The other five rules BOO-002…006 remain Unreviewed and are **not** promoted.

## Completion

- All seven requirements have direct links to existing rule references, semantic analysis, [[MDSE Bootstrap]], [[MDSE Base Vault]], relevant supporting software components, and their existing verification case.
- All seven are typed into [[MDSE Toolset Composition]] (definition remains in the individual note). Three native verification-case usages own seven objective-level `verify` references. No satisfaction/allocation assertion to a component was added without established implementation ownership.
- Each verification note now has requirement-specific test assertions with positive/negative handling. All cases remain Draft and `executionStatus: not-run`.
- No new model definition note was required; relevant Bootstrap, Runtime Integrity Check, Activation Repair and Author Registration notes are present.

## Review issues

- REQ-31271 is governance/dependency classification, not automatically measurable software runtime behavior; verify the release and lock manifest rather than claim implementation.
- REQ-31272 includes a roughly two-second startup claim; acceptance needs tolerances and actual Obsidian environment evidence, not a synthetic fixed-time assertion.
- REQ-31273 contains several independent obligations (hash verification, plugin enablement, data.json preservation, core-plugin policies and reporting); trace is complete but atomization remains pending.
- REQ-31276 bundles name prompt, author-code derivation, persistence and person-note creation; separate execution assertions are needed.
- Obsidian trust is external to the vault; source note REQ-31277 must not imply that the tool can set trust.
- Independent assembled SysML v2 parser acceptance and actual Obsidian activation tests remain open.

**Next family:** DAT, after checking final CI status.
