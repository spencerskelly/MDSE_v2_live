---
type: Requirement
subtype: engineering
id: REQ-98035
uid: 20261021212000054skellyspencer
status: Draft
tags: [last-check]
---
# A change names the claims it may invalidate and why

## Definition

When authoritative content changes, the review list is built from what the change means, not from which notes link to it. Each item states its reason in one sentence, for example: review required because this verification result depends on the timeout criterion that changed. A changed acceptance criterion points to its satisfaction links, verification cases and results. A changed shared port contract points to the usages, connections, consumers and tests that apply it. A changed definition points to its usages. A description typo points to documentation review only. A connection alone does not carry a change or a failure across it. Automatic analysis proposes reviews; it does not approve anything.

Issue for: 
[[Understand Decisions and Changes]]
[[Correct or Complete Knowledge]]


## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 88_Reference/resolve.md (section 8)`; `Test_Vault_ 88_Reference/SysML v2 integration.md (section 12)`.
- Compared with MDSE_v2 at `d35af12`.
- v2 has where-used and merge-reference listing (WKB-019, REQ-98029) but no change-impact rule. REQ-98031 covers stored analysis results only. OD-02 (a read-only relationship index for Rovo) is the data this rule would read.
- Source is a design discussion kept as a reference page (phrased 'I would ...'), not an owner decision.

> [!flagNote] Draft proposal. Depends on OD-02 (relationship index). Owner decides whether impact review is built in the Workbench or left to the Rovo agent.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AChangeNamesTheClaimsItMayInvalidateAndWhy {
        doc /* A change lists the claims it may invalidate with a stated reason, by relationship meaning. */
    }
}
```
