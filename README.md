# MDSE vault

Markdown Systems Engineering vault (release 0.9.0). SysML v2 text in the last `## SysML v2` block of a note is authoritative; everything else is YAML and Markdown.

- AI tools: start at `99_System/02_AI/AI_INSTRUCTIONS.md`.
- Schemas: `99_System/03_Schemas`.
- Imports: `99_System/11_Import`.
- SysML v2 language reference: [55_Language](55_Language/README.md).
- Open language completeness and validation findings: [SysML v2 language coverage review](74_Semantic_Review/SYSML_V2_LANGUAGE_COVERAGE_REVIEW.md).
- Software model composition: [MDSE Toolset Composition](50_Architecture/MDSE%20Toolset%20Composition.md).
- Rule-backed modeled relationships: [trace review](74_Semantic_Review/MODELED_RELATIONSHIP_TRACE_REVIEW.md).
- New import-change and edit-eligibility traces: [requirement linking pass 2](74_Semantic_Review/REQUIREMENT_LINKING_PASS_02_2026-10-23.md).

## Open modeled relationships in Obsidian Canvas

- [Stakeholder needs, use cases and functions](20_Use_Cases/MDSE%20Knowledge%20Base%20-%20Modeled%20Dependencies.canvas) — 62 semantically differentiated links (32 typed actions, 26 need refinements, 4 supporting dependencies), with 16 unconnected stakeholder needs visible as gaps.
- [Tool composition and software functions](50_Architecture/MDSE%20Software%20Architecture%20-%20Modeled%20Relationships.canvas) — 24 part/performance/behavior edges.
- [Original rules, requirements, allocations and verification](74_Semantic_Review/MDSE%20Rule%20to%20Requirement%20-%20Allocation%20and%20Verification.canvas) — 11 labeled connections, with sourceRule provenance explicitly distinguished from native SysML.

These are saved **views**, not independent semantic authorities. The last `## SysML v2` block in each model note remains authoritative. Changing the notes requires regeneration of saved views; the Workbench plugin can generate fresh preview canvases after its release is synchronized.

- [Native semantic disposition of existing use-case links](74_Semantic_Review/USE_CASE_SEMANTIC_REVIEW_2026-10-23.md) — 16 reviewed notes, original associations, reasons for deferred connections and validation limits.
