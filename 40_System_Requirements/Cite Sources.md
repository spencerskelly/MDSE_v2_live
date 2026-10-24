---
type: Requirement
subtype: engineering
id: REQ-00002
uid: 20261021212000087skellyspencer
status: Draft
tags:
  - last-check
primarySymbol: LastCheck::AClaimTakenFromAnOutsideSourceLinksToASourceRecordWithItsIdentityRevisionAccessDateAndExtractionStatusAndSourcesThatConflictAreBothKept
---
# A claim taken from an outside source links to a source record with its identity, revision, access date and extraction status, and sources that conflict are both kept

## Definition

A note that states a claim from an outside document links to a source record. The source record has the original address, the document identity or revision, the date it was accessed, why it matters, what was extracted, and what was left out. A downloaded file is first kept as an acquired artifact, then described by a source record, then used by claims; a missing source record is reported and never invented, and the downloaded file is deleted only after the record is captured and a person approves. A relationship that needs support links the record, uses supports or contradicts and not a plain reference, and keeps its own maturity (asserted, inferred, supported, validated, disputed) separate from the note's status. An inferred relationship states its rationale in the body. When two sources conflict, both stay and the conflict is visible in the note, and no document is given a single truth value.

## Notes

- Carried from `PosiBattery` at `ca67e06` and rewritten: `PosiBattery 99_System/10_Docs/Common Element Metadata Standard 0.1.md`; `PosiBattery 99_System/10_Docs/Relationship Vocabulary Usage Guide 0.1.md`; `PosiBattery 99_System/10_Docs/Schema Reconciliation Plan 0.1.md`; `PosiBattery 99_System/10_Docs/Schema Reconciliation Matrix 0.1.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: PosiBattery Common Element Metadata Standard 0.1.md (evidence block, source record fields, relationship metadata), Relationship Vocabulary Usage Guide 0.1.md (evidence and contradiction rules), Schema Reconciliation Plan 0.1.md (phase 5, downloaded sources deleted only after provenance capture) and Matrix 0.1.md (REL-004 references versus supports, REL-006 claim-level targets, DEC-007).
- Compared with MDSE_v2 at d35af12: The EA provenance rules (MOD-018, MOD-124, IMP-063) cover where an imported element came from. I found no rule for claims from documents, web pages or standards. A search for access date, source URL and curated source found nothing in governance or the base vault.
- The source itself leaves the claim-level target open (claim ids, conflict notes, or note-level support only). The owner should decide that before this becomes a rule.
- Priority is lower for a first release that models an internal system from EA; it matters when research or standards feed requirements.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from a search. Open point: how a claim is addressed.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def AClaimTakenFromAnOutsideSourceLinksToASourceRecordWithItsIdentityRevisionAccessDateAndExtractionStatusAndSourcesThatConflictAreBothKept {
        doc /* An outside claim links to a source record; conflicting sources are both kept. */
    }
}
```
