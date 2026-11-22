# 05 — MDSE Bootstrap: Detailed Tool Definition

**Tool boundary:** Obsidian startup and maintenance plugin that verifies the controlled vault runtime, enables compatible tools and establishes the engineer's author identity. It does **not** translate model data, fix engineering mistakes or download unapproved releases.

**Authoritative model:** [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Bootstrap/MDSE Bootstrap|MDSE Bootstrap]] (OBJ-00005), with [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Bootstrap/Runtime Integrity Check|Runtime Integrity Check]], [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Bootstrap/Activation Repair|Activation Repair]] and [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Bootstrap/Author Registration|Author Registration]].

**Implementation:** [tools/bootstrap](https://github.com/spencerskelly/MDSE_v2/tree/main/tools/bootstrap) and [main.js](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/bootstrap/src/main.js). **Governance:** BOO, BAS and controlled author/identity rules. **State:** JavaScript plugin with tests against a simulated Obsidian interface; staged startup, full author registry and real first-open acceptance remain open in the source documentation.

## 1. Goal and user-visible outcome

Opening a valid released vault should not require an engineer to manually inspect plugin versions or configure a compatible toolset. The engineer should see a consistent environment, receive actionable diagnostics when it is not consistent, and register an author identity exactly once when necessary.

A safe result can be **ready**, **repair available** or **blocked because integrity cannot be proven**. Bootstrap must not quietly turn a damaged or unknown plugin into an enabled engineering editor.

## 2. Main responsibilities

### A. Runtime Integrity Check

Read the generated plugin lock; locate declared plugin files; calculate and compare hashes/version metadata; check required governed settings. Treat missing lock, missing file, mismatched hash and incompatible configuration as **diagnostic failures** with explicit remediation, not successful activation. Confirm which plugin version is actually installed, not just which release the source repository most recently built.

### B. Activation Repair

After Obsidian user trust and successful integrity checks, enable required community plugins, required core features and governed settings. Keep prohibited or invalid plugins disabled; preserve approved personal settings. The command “Check and repair this vault” permits a deliberate re-check.

The current source includes helpers for lock parsing, governed-setting merge and plugin checks. It cannot be assumed to manage downloads, network updates or changes to a release lock.

### C. Author Registration

Prompt for an author name when the vault has no registered author; derive the prescribed author code and create/update the person/author reference in the governed system location. Preserve existing author identity across restart. Registration is administrative authorship, not proof of engineering approval/signature. Historical documentation describes a planned authors.yaml-backed person record; verify the live implementation before claiming that full flow is complete.

## 3. Startup and recovery sequence

1. Obsidian loads the vault and its existing settings.
2. Bootstrap checks whether a generated, trusted and readable plugin lock exists.
3. Compare installed plugin payload hashes/settings with the locked release.
4. If a tool is missing or modified, do **not** automatically enable it; report which component requires recovery through the controlled importer/update.
5. If the payload is valid, enable the governed plugin stack and required core plugins, leaving personal settings intact where permitted.
6. If author identity is uninitialized, ask once for the author's name and record the resulting identity.
7. Allow a manual “Check and repair this vault” action. Failed verification should be repeatable and explainable.
8. On reload or unload, avoid duplicate prompts, duplicated author notes or repeated unsafe writes.

**Planned behavior:** BOO-006 staged startup with a quiet window, bounded delay, single-flight checks and safe unload/reload. The Bootstrap README explicitly reports this as unfinished; do not list it as certified.

## 4. Interfaces and data ownership

| Interface | Reads | Writes or actions |
|---|---|---|
| Base Vault release contract | .obsidian/plugin-lock.yaml; plugin manifests, hashed files and settings | Integrity results and governed repair |
| Obsidian runtime | Community/core plugin settings; plugin API and user trust state | Enable/disable eligible plugins; Notices/commands |
| Vault identity | .vault.yaml and author metadata | Initial author registration when allowed |
| Importer | Paired, controlled updated plugin payload | May request human-controlled importer maintenance; Bootstrap does not replace files by download |
| Workbench | Installed plugin existence and compatibility | Enables only verified Workbench; never modifies Workbench model content |
| Core | Author-code and note-format conventions | Consistent author identity representation |

## 5. Failure modes and guardrails

- **No lock:** inform user, do not pretend the release was verified.
- **Checksum/version mismatch:** do not auto-enable the affected plugin; report the exact reason.
- **Obsidian lacks required capability:** mark missing/blocked with corrective direction; do not silently skip the requirement.
- **Permission denied:** stop and preserve original files; never brute-force a repair.
- **Already registered author:** do not prompt again or create a second identity.
- **Untrusted third-party plugin:** never bypass Obsidian's trust dialog.
- **Old or incompatible user preference:** preserve non-governed keys where compatible, explicitly explain enforced changes.
- **Interrupted startup/reload:** do not reenter an edit transaction or leave two concurrent repair passes.

## 6. Explicit exclusions

Bootstrap is **not** the importer, plugin package builder, source-control client, SysML parser, engineering change approval system or source of current plugin binaries. It must not invent new model relationships, automatically modify product notes or treat a generated report as a completed verification test.

## 7. Acceptance cases

| ID | Required result |
|---|---|
| BOO-01 | Valid locked release passes every declared plugin hash and settings check |
| BOO-02 | Missing/mismatched plugin is left disabled and produces an actionable report |
| BOO-03 | Governed settings are repaired without erasing personal plugin preferences |
| BOO-04 | Required core plugins are enabled; prohibited overlapping plugins are disabled |
| BOO-05 | First-open author registration occurs once with deterministic code and expected person note |
| BOO-06 | Reload, restart and manual repair run produce stable configuration and no duplicate author note |
| BOO-07 | Invalid/missing lock cannot be bypassed merely to show a “healthy” status |
| BOO-08 | Real Obsidian on Windows and macOS passes first-open/repair after approved Importer release update |
| BOO-09 | Staged quiet-window startup stays responsive and single-flight once implemented |

**Existing automated evidence:** [bootstrap.test.mjs](https://github.com/spencerskelly/MDSE_v2/blob/main/tools/bootstrap/test/bootstrap.test.mjs). The code test suite is useful but does not prove the actual Obsidian first-open sequence.

## 8. Source/model reconciliation still needed

- Existing live-vault baseline recorded Bootstrap 0.1.0 installed but **disabled** pending proper release-lock and first-open acceptance. Verify current installed state rather than inferring it from main source.
- The source remains JavaScript despite TypeScript governance.
- The current README describes a future authors.yaml registration path and startup quiet-window that are not fully delivered.
- Release hash and user trust must be verified together with **Base Vault + Importer + Workbench**, not per tool in isolation.

**Model owner:** [[90_Archive/Legacy_Model_2026-11-21/50_Architecture/MDSE Bootstrap/MDSE Bootstrap]]. This page documents existing and planned responsibilities without declaring a second tool model.
