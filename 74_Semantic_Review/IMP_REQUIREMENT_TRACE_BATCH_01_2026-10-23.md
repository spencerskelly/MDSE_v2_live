# IMP trace linking — batch 1 of 5

**Scope:** REQ-31135…31154 (20 of 98) under `72_Derived_Requirements/IMP`, derived from 12 Active source rules IMP-074, 075, 076, 078–086.

Each of the 20 now links to its source rule, analysis, existing [[Import an Engineering Model]] use case, [[Ingest and Reconcile Engineering Sources]] function, [[MDSE Importer]], [[Source Reconciliation Engine]], [[Managed Vault Update]], and corresponding reusable verification case.

**Native integration:** 20 `requirement` usages of existing definitions in [[MDSE Toolset Composition]], plus 12 case usages with 20 draft `verify` objectives. The original per-note SysML blocks, identities and Draft statuses are preserved.

**Review issues:** IMP-074 forbids semantic interpretation by the importer; IMP-075 changelog requirements should be reconciled with IMP-076 exact-input rerun/no-op behavior; IMP-081 pre-approval vs post-run review must avoid silently overwriting engineer edits; IMP-083 conflicts must remain unapplied while retaining their flag, source and provenance. The original statements are not necessarily atomic; requirements and verification still need test fixtures and engineer review.

**Not complete:** 78 remaining derived requirements, corresponding case analysis, and independent parser acceptance. No implementation satisfaction, executed test, or full folder closure claim. Continue with REQ-31155 onward, without modifying unrelated families.
