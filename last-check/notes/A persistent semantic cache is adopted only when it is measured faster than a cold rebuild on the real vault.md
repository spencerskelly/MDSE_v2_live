---
type: Requirement
subtype: engineering
id: REQ-98047
uid: 20261021212000067skellyspencer
status: Draft
tags: [last-check]
---
# A persistent semantic cache is adopted only when it is measured faster than a cold rebuild on the real vault

## Definition

The Workbench keeps a disposable index cache between sessions only if a paired measurement on the same vault state shows that restoring it is faster than a cold rebuild, or if it avoids work that a cold rebuild cannot avoid, such as reading and parsing note bodies. The measurement uses one fixed state, checks that both paths give the same note and link counts, and is repeated whenever the cache format changes. A cache that is slower stays off by default.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/14_Workbench/README.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: Test_Vault_ 100_Archive/V1/14_Workbench/README.md, section 'Paired cold/warm core-startup measurement'. On 2026-10-04 a synthetic vault of 60,000 notes and 59,999 links gave a cold core rebuild of 168.2 ms and a warm restore with fingerprint check of 538.0 ms, about 3.2 times slower. The README states that this does not include Obsidian's own frontmatter work, and that the benefit of the cache has to be proven in an integrated vault start. In the same README, the pure index for 60,000 notes took 0.7 s with about 80 MB of memory; reading and parsing frontmatter took 9.8 s, which Obsidian's own cache does in the app.
- Compared with MDSE_v2 at d35af12: WKB-002 and WKB-004 adopt a persistent cache with A/B commit slots, ctime+mtime+size fingerprints and path-hash buckets. TST-002 is a 10,000-note smoke that is 'not timing'. I found no v2 rule or test that compares cache restore with a cold rebuild. The V1 result may not carry over, since v2's index covers SysML blocks and not Local Model records. It is a reason to measure before keeping the cache complexity.

> [!flagNote] Draft. Questions a decision already in v2 (WKB-002). The V1 numbers are from a synthetic vault and from Node, not from Obsidian.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def APersistentSemanticCacheIsAdoptedOnlyWhenItIsMeasuredFasterThanAColdRebuildOnTheRealVault {
        doc /* A persistent cache is kept only if measured faster than a cold rebuild. */
    }
}
```
