---
type: Requirement
subtype: engineering
id: REQ-98042
uid: 20261021212000061skellyspencer
status: Draft
tags: [last-check]
---
# A linked document is unwrapped from its EA container before it is written, and every document gets exactly one outcome

## Definition

The binary content of an EA linked document is checked for the EA ZIP container before the file is written. A container that holds one entry is unwrapped, using the sizes and checksum in the ZIP directory, and the entry is checked: a text document is kept as rich text and an image is kept as its image type. A container with several entries is used only when exactly one entry decodes as a known type, and otherwise the document is reported as ambiguous. Encrypted, 64-bit or unsupported compression entries fail with a named reason. Every document ends in exactly one outcome row with a named class (written, no content, container error, unsupported type, image error, path error, owner error, skipped), so one bad document cannot hide the others. A check that decodes every document without writing a vault is available, and it compares the totals with a benchmark that is supplied, not built in.

## Notes

- Carried from `Test_Vault_` at `4a2b154` and rewritten: `Test_Vault_ 100_Archive/V1/11_Importer/History/Importer Revisions/EA_to_MDSE_Native_Importer/v0.8.4 and v0.8.5 READMEs; Testing/v0.8.19/FULL_IMPORT_EXECUTION_STATUS.md`.
- Compared with MDSE_v2 at `d35af12`.
- Source: V1 importer v0.8.4 and v0.8.5. The first whole-model run in V1 wrote notes correctly but failed on all 376 approved linked documents (also seen in the 261002083 run manifest and attachment reconciliation: 247 ModelDocument rows reported not recognizable RTF, 129 ExtDoc rows reported not a recognized image format, 21 rows out of scope), because the content in t_document was a ZIP container and not the raw RTF or image. After the ZIP step, the final run wrote 376 documents as 390 files with no failures and no residual (benchmark: 247 ModelDocument rows and 129 ExtDoc rows). v0.8.5 added a decode-only check that needs only the source file and takes seconds, where verifying the fix before it needed a full run of about 30,000 notes.
- Compared with MDSE_v2 at d35af12: tools/importer/src/ea_source.ts copies BinContent as bytes and run.ts names the file from magic bytes. The magic table includes the ZIP signature (50 4B 03 04) and labels it `.zip`, and the only inflate code in tools/ is in the BOM spreadsheet reader. A ZIP-wrapped linked document would therefore be written as a `.zip` file, not as its RTF or image. This was not tested against a real source, and the V1 container shape may not match every EA version.
- Existing v2 rules: IMP-025 (linked documents are attachments named '<note> asset <n>'; RTF documents attached unchanged), MOD-099, ATTACHMENT_BYTES_NOT_FOUND and ATTACHMENT_TOO_LARGE in TRANSLATION.md. Related note: REQ-98027 (who owns an attachment). This note is about reading the content, not about who owns it.
- The benchmark shape: totals only, so a wrong split between documents with the right total is not caught. The V1 README says so, and the per-document CSV is what catches it.

> [!flagNote] Draft. Gap against MDSE_v2 at d35af12 from reading the code. Needs a test with a synthetic ZIP-wrapped document before it is a requirement.
> Source: last-check/README.md.

## Aliases

## Former ids

## SysML v2

> **Authoritative SysML v2 text.** Write your notes above this section. Parser check pending for this block.

```sysml
package LastCheck {
    requirement def ALinkedDocumentIsUnwrappedFromItsEAContainerBeforeItIsWrittenAndEveryDocumentGetsExactlyOneOutcome {
        doc /* An EA linked document is unwrapped before writing, and each document ends in one named outcome. */
    }
}
```
