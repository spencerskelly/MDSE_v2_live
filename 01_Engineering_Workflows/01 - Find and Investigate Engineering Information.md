# Workflow 01 — Find and Investigate Engineering Information

**Engineer goal:** Find the correct existing engineering knowledge before designing, ordering, testing or changing anything. Answer *what is this, where is it used, which version is relevant, and how much can we trust it?*

**Work areas:** Workbench **Document** for source material and notes; **Structure** for part, product and interface context; **Define** for requirement/functional relationships; **Verify** for evidence. All transitions stay in one Workbench.

## Starting contexts

A field complaint, an engineering change request, a part number (with or without revision), an obsolete supplier component, a requirement, a CAD/drawing filename, an interface name (CAN, contactor, harness), a system or a product family. The engineer may only know a former alias or customer terminology. Do not require a note path.

## Engineer journey

| Step | Engineer action in the Workbench | Tool assistance | Result/decision |
|---|---|---|---|
| 1. State the investigation | Enter issue/question, intended product family, variant and approximate lifecycle state | Preserve question and selected context while navigating | Scoped search |
| 2. Locate the item | Search exact PN, alias, name, ID, symbol and relevant properties | Rank matching **governed** notes, show type, status, title, PN/revision and provenance | Confirm one intended record or ambiguous matches |
| 3. Verify authoritative version | Inspect controlled source, effectivity, lifecycle status, source date and note revision | Distinguish latest from **released/installed**, old from current, proposed from approved | Chosen configuration/version with explanation |
| 4. Expand context | Show directly connected parts, parent usages, system applications and alternate products | Structure, where-used and filtered multi-hop typed relationships; retain all paths | Affected systems, harnesses, PCBAs and assemblies |
| 5. Inspect details | Open the actual note/drawing/manual as editor artifact; inspect ports, cable/connector endpoints, firmware signal behavior | In-panel member inspector, explicit connections/flows, saved Canvas option | Design/electrical/software meaning grounded in source |
| 6. Compare alternatives | Compare revisions/variants/possible replacements | Differing properties, usages, interfaces, evidence and unresolved data | Explicit gaps/compatibility assumptions |
| 7. Inspect proof | Follow relevant requirements and verification cases/results | Trace view distinguishes case intent from executed result | Confidence and outstanding safety/compliance checks |
| 8. Close investigation | Record the finding, path of evidence, date, owner, confidence and needed follow-up | Open a new investigation note in a separate tab while Workbench stays in place | Actionable handoff to Define/Structure/Verify or change process |

## Team usage example

A GSE engineer investigates an intermittent output fault. Search by charger model or output assembly, identify the installed revision, open the wiring diagram and related test report, trace the controller output and associated harness to the field interface, and check other product lines using that assembly. HW reviews pin/current implications, FW checks control logic, test engineering retrieves actual EOL and validation evidence, and manufacturing confirms as-built configurations. The finding is **not** that all similar products are affected unless version-specific where-used proves that.

## Functions required

- Name/alias/part/symbol/property search with clear exact and fuzzy matches.
- Stable note opening/focusing; no new Workbench tool tabs.
- Search-result checkboxes and **+ Canvas** add-one/add-many into the named open Canvas; **Pick notes** offers the same existing-Canvas action separately from New canvas. Selections can survive query refinements.
- One-hop and multi-hop relationship traversal with profile, direction, depth and product-line filters.
- Part where-used with pinned child revision and alternate BOM membership.
- Explicit port, interface, connection, bind/flow and signal inspector.
- Revision/variant comparison, saved investigation view, complete CSV export and traceable source links.
- Accessible unresolved flag and provenance display, without inferred semantic edges.

## Handoff and completion criteria

The engineer can identify **one configuration-specific answer or an explicit uncertainty**, cite the original documents, list affected products/parents, name the reviewer and state whether to reuse, redesign, test, request data or open an ECO. A note/Canvas can be revisited after switching Workbench functions.

## Acceptance tests

- **INV-01:** Search using exact PN, alias and former name yields intended note, not only filename matches.
- **INV-02:** Current and obsolete revisions are clearly distinct; the query never silently promotes latest to released.
- **INV-03:** A shared part used by three product families shows three separate usage paths, including revision pins.
- **INV-04:** A selected port displays only source-declared connections, direction and unresolved endpoints.
- **INV-05:** Switch Workbench lenses and open two notes/two canvases; every artifact remains independently accessible.
- **INV-06:** Export includes all relevant where-used rows rather than only the visible sidebar page.
- **INV-07:** Source absence or ambiguous revision is shown as a blocker, not an invented answer.
- **INV-08:** From global Search, select individual and multiple notes across successive queries, add to an existing saved Canvas and verify no new Canvas, card duplicates, moved cards or inferred relationships.
- **INV-09:** In Pick notes, **Add selected to current Canvas** modifies only the named open Canvas; **New canvas** creates a separate artifact tab.
- **INV-10:** Switch between two Canvas tabs before or during addition. The Workbench updates the destination label, and an outdated target refuses the write. No Canvas open disables addition.

**Current support:** source has governed search, some aliases, traversals, structure, comparison, port/member views and Canvas. Production-specific revision/effectivity integrity and real vault runtime acceptance are still required. **Owner:** System Engineering / engineer investigating; data custodians validate source-specific claims.

**Next:** [[02 - Ingest and Qualify Existing Engineering Data]] if evidence is missing, [[03 - Define Need, Requirements and Acceptance]] if need changes, or [[06 - Manage Change, Redlines and Impact]] if an existing released item must change.
