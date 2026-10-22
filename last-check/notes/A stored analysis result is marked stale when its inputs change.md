---
type: Requirement
subtype: engineering
id: REQ-98031
uid: 20261021212000050skellyspencer
status: Draft
tags: [last-check]
---
# A stored analysis result is marked stale when its inputs change

## Definition

An analysis or trade-study result is kept with the revision of every input it used: the alternatives, the BOM revision, the quantities and units, the criteria and the assumptions. When any of those inputs changes, the result is marked stale and is not overwritten. The person can run the study again, which makes a new result and keeps the old one with its inputs. Choosing an alternative in a study does not create a variant, a satisfaction, a verification or an allocation. A study is not inferred from dependencies, generalizations, product-family variants, BOM alternatives or part properties. A calculated value is not evidence that a requirement is satisfied.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 24_Workbench/docs/SYSML_V2_ANALYSIS_TRADE_STUDIES_APPROVED.md (BOM translator, Validation 4 to 7, Known normative caution)`.
- Compared with MDSE_v2 at `d35af12`.
- The v2 language notes cover analysis case and calculation constructs. RULESET has no rule on how a stored result relates to its inputs. MOD-139 and IMP-068 give the same stale idea for the parser-check report, which is marked stale when a SysML block changes; this extends it to results.
- The source adds that the Analysis Domain Library syntax must be pinned and that the OMG issue SYSML21-318 (an objective redefinition inheritance problem in TradeStudy) is open; the project targets released SysML v2.0 and records workarounds. Both are future work and no importer rule depends on them.
- Source validation points 4 and 6: choosing an alternative does not create variant, satisfaction, verification or allocation; a changed BOM revision marks results stale and does not overwrite them.

> [!flagNote] Draft. No analysis feature exists in v2 yet; the owner decides when this rule is needed.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AStoredAnalysisResultIsMarkedStaleWhenItsInputsChange {
        doc /* An analysis result records its inputs and is marked stale when they change. */
    }
}
```
