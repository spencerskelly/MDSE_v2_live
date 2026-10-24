// MDSE self-model structural gate. Not an independent SysML v2 parser.
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const files = new Map(readdirSync('30_Functions').filter(f => f.endsWith('.md') && !f.startsWith('_')).map(f => [f, readFileSync(join('30_Functions',f),'utf8')]));
const field = (s,n) => s.match(new RegExp('^' + n + ':\\s*(.+)$','m'))?.[1]?.trim();
const body = s => s.match(/\x60{3}sysml\s*\n([\s\S]*?)\n\x60{3}/)?.[1] ?? '';
function audit(notes) {
  const errors=[], ids=new Set(), uids=new Set(), defs=new Map(), refs=[];
  const fail=s=>errors.push(s);
  for(const [filename, source] of notes) {
    const id=field(source,'id'),uid=field(source,'uid'),symbol=field(source,'primarySymbol'),sysml=body(source);
    if(!/^BEH-\d{5}$/.test(id??'')) {fail(filename+': invalid ID');continue}
    if(ids.has(id)) fail(id+': duplicate ID'); ids.add(id);
    if(!/^\d{17}[a-z-]{13}$/.test(uid??'')) fail(id+': invalid UID');
    if(uids.has(uid)) fail(id+': duplicate UID'); uids.add(uid);
    if(field(source,'type')!=='Behavior'||field(source,'subtype')!=='function') fail(id+': expected Behavior/function');
    const decl=[...sysml.matchAll(/\baction\s+def\s+([A-Za-z]\w*)\s*\{/g)];
    const pkg=sysml.match(/\bpackage\s+(MDSE_BEH_\d{5})\s*\{/);
    if(decl.length!==1) fail(id+': expected exactly one action def');
    const expected=decl.length===1&&pkg?pkg[1]+'::'+decl[0][1]:'';
    if(!symbol||symbol!==expected||!symbol.startsWith('MDSE_'+id.replace('-','_')+'::')) fail(id+': primarySymbol mismatch');
    if(defs.has(symbol)) fail(id+': duplicated symbol'); defs.set(symbol,id);
    const names=new Set();
    for(const m of sysml.matchAll(/^\s*action\s+([A-Za-z]\w*)\s*:\s*(MDSE_BEH_\d{5}::[A-Za-z]\w*)\s*;/gm)) {
      if(names.has(m[1])) fail(id+': duplicate action usage '+m[1]);names.add(m[1]);
      refs.push({parent:id,symbol:m[2]});
    }
  }
  const owners=new Map();
  for(const x of refs) {
    const child=defs.get(x.symbol);
    if(!child) {fail(x.parent+': missing target '+x.symbol);continue}
    if(child===x.parent) fail(child+': self-decomposition');
    owners.set(child,[...(owners.get(child)||[]),x.parent]);
  }
  for(let n=8;n<=21;n++) {
    const id='BEH-'+String(n).padStart(5,'0'), parents=owners.get(id)||[];
    if(!ids.has(id)) fail(id+': missing subfunction');
    if(parents.length!==1) fail(id+': expected one parent usage, got '+parents.length);
  }
  for(const [parent,from,to] of [['BEH-00005',13,17],['BEH-00006',18,21]]) {
    for(let n=from;n<=to;n++) {
      const id='BEH-'+String(n).padStart(5,'0');
      if(!(owners.get(id)||[]).includes(parent)) fail(id+': wrong parent; expected '+parent);
    }
  }
  const parentOf=new Map([...owners].map(([id,p])=>[id,p[0]]));
  for(const id of ids) {
    const seen=new Set([id]);let p=parentOf.get(id);
    while(p) {if(seen.has(p)){fail(id+': cyclic composition');break}seen.add(p);p=parentOf.get(p)}
  }
  return {errors,functions:ids.size,typedChildUsages:refs.length,childDefinitions:14};
}
const result=audit(files);
const example=[...files.keys()][0];
assert(example,'Expected function notes');
const bad=new Map(files);
bad.set(example,files.get(example).replace(/^id: BEH-\d{5}$/m,'id: BEH-xxxxx'));
assert(audit(bad).errors.some(e=>e.includes('invalid ID')),'Bad-ID control not detected');
const parent='Compose and Exchange Engineering Knowledge.md',s=files.get(parent);
assert(s?.includes('action prepareExport : MDSE_BEH_00021::PrepareGovernedEngineeringExport;'),'Expected parent fixture absent');
const orphan=new Map(files);
orphan.set(parent,s.replace(/^\s*action prepareExport : MDSE_BEH_00021::PrepareGovernedEngineeringExport;\n/m,''));
assert(audit(orphan).errors.some(e=>e.includes('BEH-00021: expected one parent usage')),'Orphan control not detected');
if(result.errors.length){console.error(result.errors.join('\n'));process.exitCode=1}
else console.log('PASS function-model structural gate:',JSON.stringify({functions:result.functions,typedChildUsages:result.typedChildUsages,subfunctions:result.childDefinitions,scope:'source graph; NOT independent SysML parser or functional execution'}));
