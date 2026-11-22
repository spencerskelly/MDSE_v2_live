# Use-case relationship semantics review — 2026-10-23

**Status: Draft authored SysML v2; semantic classification reviewed from the current 16 use-case narratives.** A generated canvas is a view, not an authority. No requirement satisfaction, executed test, or independent SysML v2 parser success is claimed.

## Decision basis

- A function **actually used within a use-case scenario** is an owned typed `action` usage (`action query : MDSE_BEH_...::ActionDef;`). This reuses the function definition; it does **not** assert a concrete performer, execution order or simulation.
- A use-case definition that **elaborates the intent of a stakeholder need** has a native `#refinement dependency from UseCase to Requirement;`. This is a standard refinement-annotated dependency under [MOD-169](https://github.com/spencerskelly/MDSE_v2/blob/main/governance/RULESET.md); it is not a declaration that the requirement is satisfied.
- `dependency from UseCase to Need;` is retained only where the use-case activity **depends on an enabling condition/quality** without refining that need.
- A mere Markdown association, engineering discipline supported by a generic authoring tool, or a separate software responsibility is **not automatically a SysML relationship**. Such cases are deferred instead of fabricating a link.
- Each software performer is separately assigned by `perform action` within the owning software part; requirement allocations and verification objectives remain in [[MDSE Toolset Composition]]. Never duplicate a part/function/requirement definition to create a view.

## Individual use-case disposition

| Use case | Owned typed actions (BEH IDs) | Refines STK IDs | Supporting dependency STK IDs | Deferred previous links |
|---|---|---|---|---|
| [[Import an Engineering Model]] UC-00001 | BEH-00002 | STK-00013, STK-00003 | STK-00004 | BEH-00007; importing is not Workbench manual editing |
| [[Search for a Part, Function or Design]] UC-00002 | BEH-00003, BEH-00005 | STK-00013, STK-00001 | — | — |
| [[Explore Element Relationships]] UC-00003 | BEH-00004, BEH-00005 | STK-00013, STK-00007 | — | — |
| [[Review Requirements for a Design]] UC-00004 | BEH-00004, BEH-00005 | STK-00013, STK-00015 | — | — |
| [[Explore Complete Product Context]] UC-00005 | BEH-00004, BEH-00005 | STK-00013 | STK-00019 | Viewing architecture requires available architecture information; it does not define architecture |
| [[View and Export Engineering Information]] UC-00006 | BEH-00005, BEH-00006 | STK-00013, STK-00001 | — | — |
| [[Add Engineering Knowledge]] UC-00007 | BEH-00003, BEH-00007 | STK-00013 | — | STK-00005, 00015, 00017, 00018, 00019, 00020: discipline use is not refinement of a complete discipline capability |
| [[Correct or Complete Knowledge]] UC-00008 | BEH-00004, BEH-00007 | STK-00013 | STK-00004 | Correcting a note depends on change protection; this is not proof of durable merge protection |
| [[Review and Resolve Flagged Model Items]] UC-00009 | BEH-00004, BEH-00005, BEH-00007 | STK-00013 | STK-00010 | Review/disposition uses decision history but does not implement all change-decision management |
| [[Visualize Relationships by Viewpoint]] UC-00010 | BEH-00004, BEH-00005 | STK-00013, STK-00007 | — | — |
| [[Display Linked Elements in Document Viewpoints]] UC-00011 | BEH-00004, BEH-00005, BEH-00006 | STK-00013, STK-00007 | — | — |
| [[Explore Multiple Relationship Hops]] UC-00012 | BEH-00004, BEH-00005 | STK-00013, STK-00007 | — | — |
| [[Compare Shared Connections Across Elements]] UC-00013 | BEH-00004, BEH-00005 | STK-00013, STK-00007 | — | — |
| [[Search SysML Syntax and Model Properties]] UC-00014 | BEH-00003 | STK-00013, STK-00001 | — | — |
| [[Compose Documentation from Embedded Notes]] UC-00015 | BEH-00003, BEH-00006 | STK-00013 | — | Embedded Markdown does not imply SysML ownership of source elements |
| [[Display Flagged Model Data]] UC-00016 | BEH-00003, BEH-00005 | STK-00013 | — | BEH-00007: read-only display does not correct/disposition issues |

Totals in authoritative use-case SysML blocks: **32** typed `action` usages, **26** native `#refinement` dependencies, **4** general supporting dependencies, **8** previously proposed edges intentionally withheld. Existing unrelated original source-rule links, component `perform` relationships, allocations and verification objectives are unchanged.

## Source trace and rules

The native constructs follow the existing decisions in [[GOV-012]] (tool boundaries), [[MOD-169]] (native refinement and derivation), [[IMP-117]] (object performs action; requirement allocation is not satisfaction), and the source-rule notes in `70_Rule_References`. For this use-case pass, current requirement and implementation evidence remain the existing Draft notes: `40_System_Requirements`, `72_Derived_Requirements`, `60_Verification`, and `73_Derived_Verification`.

The [function/use-case matrix](../30_Functions/FUNCTION_USECASE_MATRIX.csv) preserves 34 reviewed source associations as **32 modeled action usages and 2 deferred links**; the earlier six discipline-wide stakeholder associations from UC-00007 are documented here and intentionally not promoted. The saved [Canvas](../20_Use_Cases/MDSE%20Knowledge%20Base%20-%20Modeled%20Dependencies.canvas) contains **62 semantic edges** and explicitly shows **16 unlinked stakeholder-need notes**.

## Syntax and acceptance boundary

The SysML text must be assembled into a namespace-consistent model and checked by the **independent pinned SysML v2 parser**, not merely the Workbench scanner. `action` usage does not establish ordering, actor participation, conditional guards, or actual satisfaction. Those should be added only when their particular use-case narratives justify the extra semantics.

Workbench view categories should distinguish `hasAction`, `refines`, `dependsOn`, `performs`, `allocatedTo`, and `verifies`. Canvas edge labels must be regenerated from the authoritative notes after any future changes.

## Completed consistency checks

- **16/16 use-case notes**: the last and sole SysML v2 block is preserved; all 32 typed `action` usages, 26 `#refinement` relationships, and 4 general dependencies are reflected in the current Canvas (62/62 modeled edges).
- **3/3 saved Canvas files**: valid file-backed node paths and no dangling Canvas edge endpoint IDs; current Knowledge Base canvas has 48 cards (24 needs, 16 use cases, 6 functions, plus 2 annotations), 62 edges.
- **Workbench regression**: the newly added `MDSE_v2` test distinguishes `hasAction`, `refines` and `dependsOn` in the index and preview Canvas. The [live plugin build and test workflow](https://github.com/spencerskelly/MDSE_v2_live/actions/runs/40031206186) passed after this change, including `npm run test:workbench` and `npm run build:workbench`. The latest built plugin is synchronized in the vault.
- These results validate **static syntax recognition and generated projection consistency**, not independent SysML grammar/semantic acceptance, human-in-the-loop Obsidian use, or executed engineering verification.

## Acceptance checklist

- [ ] Independent parser accepts compiled, fully qualified definitions and action usages with refinement metadata.
- [ ] Workbench model index resolves all 62 use-case relationships without ghosts and projects correct canvas edge kinds.
- [ ] Owner approves need-to-use-case refinements individually; requirement satisfaction remains an independent engineering decision.
- [ ] Add real test/verification cases and executed evidence where needed; do not promote a Draft semantic association into a passed verification.
