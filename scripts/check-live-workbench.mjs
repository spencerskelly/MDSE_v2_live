/**
 * Live MDSE relationship smoke test using the Workbench indexer from an
 * exact, separately checked-out MDSE_v2 commit.
 *
 * Scope: real-vault graph index + synthetic duplicate-link regression.
 * NOT: independent SysML v2 parser, Obsidian runtime, or verification pass.
 */
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const roots = [
  '10_Stakeholder_Needs', '20_Use_Cases', '30_Functions',
  '40_System_Requirements', '50_Architecture', '55_Language',
  '60_Verification', '70_Rule_References', '71_Rule_Analysis',
  '72_Derived_Requirements', '73_Derived_Verification',
  '74_Semantic_Review', '80_Issues'
];
const repo = process.cwd();
const toolRoot = resolve(process.env.MDSE_TOOLS_ROOT || '_tool_source');
const { buildIndex } = await import(pathToFileURL(join(toolRoot, 'tools/workbench/src/index.ts')).href);
const V = await import(pathToFileURL(join(toolRoot, 'tools/workbench/src/views.ts')).href);

function collect(root, dir, acc) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collect(root, full, acc);
    else if (entry.isFile() && entry.name.endsWith('.md')) {
      const rel = full.slice(root.length + 1).split('\\').join('/');
      acc.set(rel, readFileSync(full, 'utf8'));
    }
  }
}
const files = new Map();
for (const dir of roots) collect(repo, join(repo, dir), files);
const ix = buildIndex(files);
const errors = [];
const ok = (condition, message) => { if (!condition) errors.push(message); };
const p = (id) => {
  const got = ix.byId.get(id);
  if (!got) errors.push('Missing indexed note: ' + id);
  return got;
};
const hasEdge = (source, kind, dest) => {
  const a = p(source), b = p(dest);
  if (!a || !b) return;
  const matches = ix.edges.filter(e => e.from === a && e.to === b && e.kind === kind && e.via === 'sysml');
  ok(matches.length === 1, source + ' --' + kind + '--> ' + dest + ' has ' + matches.length + ' native edge(s), expected 1');
};
const clauses = {
  'WKB-012': { ids: [31286, 31287, 31288], verification: 'VER-31141' },
  'WKB-016': { ids: [31296, 31297, 31298], verification: 'VER-31145' },
  'WKB-020': { ids: [31306], verification: 'VER-31149' },
  'WKB-008': { ids: [31278, 31279, 31280], verification: 'VER-31137' },
  'IMP-075': { ids: [31137, 31138], verification: 'VER-31071' },
  'IMP-076': { ids: [31139], verification: 'VER-31072' }
};
const ucEdges = {
  'UC-00001': [31137, 31138, 31139],
  'UC-00003': [31306],
  'UC-00005': [31296, 31306],
  'UC-00007': [31278, 31279, 31280],
  'UC-00008': [31278, 31279, 31280, 31286, 31287, 31288, 31297, 31298],
  'UC-00010': [31306],
  'UC-00011': [31306]
};
let checks = 0;
for (const [uc, ids] of Object.entries(ucEdges)) for (const id of ids) {
  hasEdge(uc, 'dependsOn', 'REQ-' + id); checks++;
}
for (const group of Object.values(clauses)) for (const id of group.ids) {
  hasEdge('REQ-' + id, 'allocatedTo', 'OBJ-00003');
  hasEdge(group.verification, 'verifies', 'REQ-' + id);
  checks += 2;
}
const refinements = [
  ['REQ-00001', 'STK-00003'],
  ['REQ-31137', 'STK-00010'], ['REQ-31138', 'STK-00010'],
  ['REQ-31139', 'STK-00004'],
  ['REQ-31278', 'STK-00013'], ['REQ-31280', 'STK-00002'],
  ['REQ-31306', 'STK-00002']
];
for (const [a,b] of refinements) { hasEdge(a, 'refines', b); checks++; }
const toolset = p('OBJ-00006');
for (const [groupName, group] of Object.entries(clauses)) for (const id of group.ids) {
  const sym = 'MDSE_REQ_' + id + '::RuleREQ' + id;
  ok(!!ix.notes.get(toolset)?.def?.usages.some(u => u.kind === 'requirement' && u.type === sym),
    'Typed requirement usage not found for ' + groupName + ' / REQ-' + id);
  checks++;
}
ok(!ix.edges.some(e => e.from === p('REQ-31307') && (e.kind === 'allocatedTo' || e.kind === 'verifies')),
  'Historical double-counting defect REQ-31307 must not be a positively allocated requirement');
checks++;
const critical = ['OBJ-00006','UC-00001','UC-00003','UC-00005','UC-00007','UC-00008','UC-00010','UC-00011',
  ...Object.values(clauses).flatMap(g => g.ids.map(id => 'REQ-' + id)),
  ...Object.values(clauses).map(g => g.verification)];
for (const id of critical) {
  const path = p(id); if (!path) continue;
  const warnings = ix.notes.get(path)?.warnings ?? [];
  ok(warnings.length === 0, id + ' Workbench scanner warnings: ' + warnings.join(' | '));
}
const noBrokenNative = critical.flatMap(id => {
  const path = p(id);
  return path ? ix.edges.filter(e => (e.from === path || (e.ref?.owner === path)) && e.via === 'sysml' && !e.to) : [];
});
ok(noBrokenNative.length === 0, 'Critical model references unresolved: ' + noBrokenNative.map(e=> e.from + ':' + e.kind + ':' + e.toSymbol).join(', '));

const front = (name, id, symbol, line = '') => `---
type: Object
subtype: software
id: ${id}
uid: 20261023000000000skellyspencer
status: Draft
primarySymbol: ${symbol}
${line}---
# ${name}

## SysML v2

\`\`\`sysml
package Demo {
  part def ${name} {
    ${name === 'Parent' ? 'part child : Demo::Child;' : 'doc /* Synthetic child. */'}
  }
}
\`\`\`
`;
const synth = new Map([
  ['Synthetic/Parent.md', front('Parent','OBJ-88881','Demo::Parent','hasPart: "[[Child]]"\n')],
  ['Synthetic/Child.md', front('Child','OBJ-88882','Demo::Child')]
]);
const synthetic = buildIndex(synth);
const nativeAndYaml = synthetic.edges.filter(e=>e.kind === 'hasPart' && e.from === 'Synthetic/Parent.md' && e.to === 'Synthetic/Child.md');
ok(nativeAndYaml.length === 1, 'Duplicate YAML/SysML part link indexed ' + nativeAndYaml.length + ' times (expected one)');
const rollup = V.bom(synthetic, 'Synthetic/Parent.md');
ok(rollup.filter(x=>x.title==='Child').reduce((n,x)=>n+x.qty,0)===1,
  'Duplicate YAML/SysML link inflated synthetic BOM rollup');
checks += 2;

console.log(JSON.stringify({
  status: errors.length ? 'FAIL' : 'PASS',
  tested: 'Workbench actual-live-model relationship index and synthetic deduplication',
  noteFiles: files.size, indexedNotes: ix.notes.size,
  nativeEdges: ix.edges.filter(e=>e.via==='sysml').length,
  parser: ix.parser, assertions: checks,
  missingCriticalNativeEndpoints: noBrokenNative.length,
  errors
}, null, 2));
if (errors.length) process.exitCode = 1;
