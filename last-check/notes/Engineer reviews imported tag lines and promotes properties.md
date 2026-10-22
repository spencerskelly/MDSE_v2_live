---
type: Use Case
subtype: what
id: UC-98009
uid: 20261021212000029skellyspencer
status: Draft
tags: [last-check]
---
# Engineer reviews imported tag lines and promotes properties

## Definition

After import, EA tags appear as body lines under their EA tag name. The engineer reviews them and decides which become properties (the candidates are ratings, signal type and the failure analysis scores severity, occurrence and detection) and their final names. The engineer also: decides whether a heading value is needed to fold headings into document notes; decides whether a discontinued requirement should be retired; and checks values that look inconsistent with the part they describe, malformed ratios, priority legends written as data, and unexplained style or quantity fields. Group decisions are logged and the rules for the next import are changed.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `55_Workspace/Post-Import Tasks.md (Task 5)`.
- Compared with MDSE_v2 at `d35af12`.
- Related open decision in MDSE_v2: which EA body lines become frontmatter or SysML attributes (Rules Register REG-308, recommendation: promote the identity group).
- Real values are not recorded here; the source examples came from the production model.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    use case def EngineerReviewsImportedTagLinesAndPromotesProperties {
        doc /* The engineer promotes selected tag lines to properties and checks suspicious values. */
    }
}
```
