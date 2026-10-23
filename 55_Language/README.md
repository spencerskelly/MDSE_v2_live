# SysML v2 language — MDSE live reference

This folder contains the vault's organized SysML v2 language reference, grouped into `Definition`, `Usage`, `Relationship`, `Structure`, `Statement`, and `Annotation` notes.

- **[SysML v2 Language index](SysML%20v2%20Language.md)** — the current 108-construct inventory and frequency tiers.
- **[2026-10-23 language coverage review](../74_Semantic_Review/SYSML_V2_LANGUAGE_COVERAGE_REVIEW.md)** — tracked gaps, documentation corrections, implementation-level limitations, and acceptance criteria. **Status: Draft; open review, not parser certification or an approved ruleset change.**
- **[Authoritative catalog and generator](https://github.com/spencerskelly/MDSE_v2/tree/main/governance/language)** — language definitions originate in `MDSE_v2`; do not fork the semantics by independently changing these copies.
- **[OMG SysML v2.0 normative specification](https://www.omg.org/spec/SysML/2.0)** — reference for the core language and published standard libraries.

The separately shipped system reference is `99_System/04_Language`. It should not be confused with this top-level engineering/reference organization. This README is a navigation aid, not a SysML model element and not a second source of authority.

For any new language or library concept, distinguish **documented**, **scanner-recognized**, **Workbench-represented**, **importer-writable**, **parser-validated**, and **tested in Obsidian** status. These are separate claims.
