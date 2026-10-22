---
type: Requirement
subtype: engineering
id: REQ-98056
uid: 20261021212000076skellyspencer
status: Draft
tags: [last-check]
---
# A derived-subsystem failure is shown as unavailable and never as zero findings, and one safe command clears only derived state

## Definition

When a derived subsystem such as the assurance scan, the Local Model reader, the semantic cache or the index fails or has not run, the Workbench reports that subsystem as unavailable, with the reason. It never shows an empty result such as zero findings, because an empty result reads as a pass. A failure in one derived subsystem leaves ordinary Markdown editing, navigation and the other subsystems working, and a core-index failure leaves an explicit recovery command available without disabling the plugin. One command clears only derived Workbench state (cache, indexes, scratch views) and never touches model content or the user zone. A bad or missing cache causes a fall-back or a rebuild, and no model file is rewritten because cache data was bad.

## Notes

- Carried from `261002083` at `6f6a3de` and rewritten: `261002083 README_RUNTIME_ACCEPTANCE.md`; `261002083 TEMP_WORKBENCH_PERFORMANCE_STABILITY_PRIORITY.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: 261002083 README_RUNTIME_ACCEPTANCE.md case K (a global assurance failure is shown as 'assurance unavailable', never as zero findings; only one cache write, assurance scan or full index owns its subsystem at a time) and TEMP_WORKBENCH_PERFORMANCE_STABILITY_PRIORITY.md steps 61 to 70 (all still TODO there).
- Compared with MDSE_v2 at d35af12: WKB-004 says subsystems fail independently with separate health evidence, WKB-002 says a read failure is a scoped finding and never poisons the cache, and MOD-137 says derived state is rebuildable. I found no rule that an unavailable check must not display as zero findings, and no rule for a single command that clears only derived state. A search of tools/workbench/src for 'unavailable' found nothing.

> [!flagNote] Draft. Partial gap against MDSE_v2 at d35af12 from a search; I did not run the Workbench to see what it shows when a check fails.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ADerivedSubsystemFailureIsShownAsUnavailableAndNeverAsZeroFindingsAndOneSafeCommandClearsOnlyDerivedState {
        doc /* An unavailable derived check is never displayed as zero findings. */
    }
}
```
