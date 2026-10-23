# MDSE vault

Markdown Systems Engineering vault (release 0.9.0). SysML v2 text in the last `## SysML v2` block of a note is authoritative; everything else is YAML and Markdown.

- AI tools: start at `99_System/02_AI/AI_INSTRUCTIONS.md`.
- Schemas: `99_System/03_Schemas`.
- Imports: `99_System/11_Import`.
- SysML v2 language reference: [55_Language](55_Language/README.md).
- Open language completeness and validation findings: [SysML v2 language coverage review](74_Semantic_Review/SYSML_V2_LANGUAGE_COVERAGE_REVIEW.md).
- Software model composition: [MDSE Toolset Composition](50_Architecture/MDSE%20Toolset%20Composition.md).
- Rule-backed modeled relationships: [trace review](74_Semantic_Review/MODELED_RELATIONSHIP_TRACE_REVIEW.md).

## Open modeled relationships in Obsidian Canvas

- [Stakeholder needs, use cases and functions](20_Use_Cases/MDSE%20Knowledge%20Base%20-%20Modeled%20Dependencies.canvas) — 70 draft dependency lines drawn from the current SysML v2 notes, with the 12 unconnected stakeholder needs displayed separately as gaps.
- [Tool composition and software functions](50_Architecture/MDSE%20Software%20Architecture%20-%20Modeled%20Relationships.canvas) — 24 part/performance/behavior edges.
- [Original rules, requirements, allocations and verification](74_Semantic_Review/MDSE%20Rule%20to%20Requirement%20-%20Allocation%20and%20Verification.canvas) — 11 labeled connections, with sourceRule provenance explicitly distinguished from native SysML.

These are saved **views**, not independent semantic authorities. The last `## SysML v2` block in each model note remains authoritative. Changing the notes requires regeneration of saved views; the Workbench plugin can generate fresh preview canvases after its release is synchronized.
