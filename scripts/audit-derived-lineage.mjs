/**
 * MDSE live derived-note lineage audit (diagnostic until strict gate is approved).
 * Checks source-note navigation and SysML definition ownership; it does NOT
 * infer requirement derivations or certify language grammar.
 * Run: node scripts/audit-derived-lineage.mjs
 * Strict: MDSE_STRICT_DERIVED_AUDIT=1 node scripts/audit-derived-lineage.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const issues = [];
const caution = [];
const fsroot = process.cwd();
const report = (msg) => issues.push(msg);
const roots = ['70_Rule_References','71_Rule_Analysis','72_Derived_Requirements','73_Derived_Verification'];
function walk(dir, out=[]) {
  if (!existsSync(dir)) { report('Missing directory: '+dir); return out; }
  for (const item of readdirSync(dir,{withFileTypes:true})) {
    const path=join(dir,item.name);
    if (item.isDirectory()) walk(path,out);
    else if(item.isFile() && path.endsWith('.md') && !/^_?README(?: [0-9]+)?.md$/i.test(item.name))
      out.push({path,stem:basename(path,'.md'),body:readFileSync(path,'utf8')});
  }
  return out;
}
function field(body,key) {
  const front=body.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if(!front) return '';
  const line=front[1].split('\n').find(s=>s.startsWith(key+':'));
  return line ? line.slice(key.length+1).trim().replace(/^["']|["']$/g,'') : '';
}
const stemIndex=new Map();
const noteLists=new Map(roots.map(r=>[r,walk(join(fsroot,r))]));
for(const [role,notes] of noteLists) for(const note of notes) {
  note.role=role;
  if(stemIndex.has(note.stem)) caution.push('Repeated basename: '+note.stem);
  else stemIndex.set(note.stem,note);
}
const idIndex=(role,key)=>{
  const map=new Map();
  for(const note of noteLists.get(role)) {
    const id=field(note.body,key);
    if(!id) continue;
    if(map.has(id)) report('Duplicate '+key+' '+id+' in '+role);
    map.set(id,note);
  }
  return map;
};
const rules=idIndex('70_Rule_References','ruleId');
const analysis=idIndex('71_Rule_Analysis','ruleId');
const requirements=idIndex('72_Derived_Requirements','id');
const cases=idIndex('73_Derived_Verification','id');
function csv(path) {
  const raw=readFileSync(join(fsroot,path),'utf8');
  const lines=[]; let cur=[],val='',quoted=false;
  for(let i=0;i<raw.length;i++){
    const c=raw[i];
    if(c==='"') {if(quoted&&raw[i+1]==='"'){val+='"';i++;}else quoted=!quoted;}
    else if(c===','&&!quoted){cur.push(val);val='';}
    else if((c==='\r'||c==='\n')&&!quoted) {
      if(c==='\r'&&raw[i+1]==='\n')i++;
      cur.push(val);val='';
      if(cur.some(Boolean)) lines.push(cur);
      cur=[];
    } else val+=c;
  }
  if(val||cur.length){cur.push(val);lines.push(cur);}
  const keys=lines.shift();
  return lines.map(v=>Object.fromEntries(keys.map((k,i)=>[k,v[i]??''])));
}
const reqRows=new Map(csv('72_Derived_Requirements/REQUIREMENT_CANDIDATES.csv').map(x=>[x.requirement_id,x]));
const caseRows=new Map(csv('73_Derived_Verification/VERIFICATION_CANDIDATES.csv').map(x=>[x.verification_id,x]));
const wiki=(body,stem)=>body.includes('[['+stem+']]')||body.includes('[['+stem+'|');
function trace(note,rule) {
  if(!rule) {report(note.path+': missing source rule');return;}
  if(!rules.has(rule)) report(note.path+': missing original rule note '+rule);
  if(!analysis.has(rule)) report(note.path+': missing analysis note '+rule);
  if(!wiki(note.body,rule)) report(note.path+': missing original-rule wikilink '+rule);
  if(!wiki(note.body,rule+' - Analysis')) report(note.path+': missing analysis wikilink '+rule);
}
const fence=String.fromCharCode(96).repeat(3);
const symbols=new Set();
function definition(note,kind) {
  const symbol=field(note.body,'primarySymbol');
  const parts=symbol.split('::');
  const fences=note.body.split(fence+'sysml').length-1;
  if(fences!==1) report(note.path+': expected one SysML fence, saw '+fences);
  const headings=[...note.body.matchAll(/^## (.+)$/gm)].map(x=>x[1].trim());
  if(headings.at(-1)!=='SysML v2') report(note.path+': last H2 not SysML v2');
  if(parts.length!==2) {report(note.path+': missing/invalid primarySymbol');return;}
  if(symbols.has(symbol)) report(note.path+': duplicate primarySymbol '+symbol);
  symbols.add(symbol);
  const block=note.body.slice(note.body.indexOf(fence+'sysml')+8);
  if(!block.includes('package '+parts[0]+' {')) report(note.path+': package differs from primarySymbol');
  if(!block.includes(kind+' def '+parts[1]+' {')) report(note.path+': definition differs from primarySymbol');
  if(!block.includes(fence)) report(note.path+': unclosed SysML fence');
}
for(const [id,note] of rules){
  if(field(note.body,'type')!=='Info') report(note.path+': governance rule reference is not Info');
  if(note.body.includes(fence+'sysml')) report(note.path+': governance source must not become a SysML relationship');
  if(field(note.body,'sourcePath')!=='governance/RULESET.md') report(note.path+': normative source path missing');
  if(!analysis.has(id)) report(note.path+': no corresponding analysis note');
}
for(const [id,note] of analysis){
  if(!rules.has(id)) report(note.path+': no original rule');
  if(!wiki(note.body,id)) report(note.path+': no explicit original-rule link');
}
let baseline=0,extra=0;
for(const [id,note] of requirements){
  if(!/^REQ-[0-9]{5}$/.test(id))continue;
  const origin=field(note.body,'sourceRule');
  trace(note,origin);
  definition(note,'requirement');
  const row=reqRows.get(id);
  if(row) {
    baseline++;
    if(row.source_rule_id!==origin) report(note.path+': sourceRule disagrees with candidate register');
    if(!cases.has(row.verification_case)) report(note.path+': missing verification case '+row.verification_case);
    if(!note.body.includes('[['+row.verification_case+' ')) report(note.path+': no verification navigational link '+row.verification_case);
  } else {
    extra++;
    if(!field(note.body,'sourceRuleClause')) caution.push(note.path+': new requirement without sourceRuleClause');
  }
}
for(const [id,note] of cases){
  if(!/^VER-[0-9]{5}$/.test(id))continue;
  const origin=field(note.body,'sourceRule'), row=caseRows.get(id);
  trace(note,origin);
  definition(note,'verification');
  if(!row) report(note.path+': verification absent from candidate register');
  else {
    if(row.source_rule_id!==origin) report(note.path+': sourceRule disagrees with verification register');
    for(const req of row.candidate_requirement_ids.split(';').filter(Boolean)) {
      if(!requirements.has(req)) report(note.path+': missing requirement note '+req);
      if(!note.body.includes('[['+req+' ')) report(note.path+': no explicit requirement link '+req);
    }
  }
  if(!field(note.body,'executionStatus')) report(note.path+': missing execution status');
}
for(const id of reqRows.keys()) if(!requirements.has(id)) report('Missing original requirement candidate '+id);
for(const id of caseRows.keys()) if(!cases.has(id)) report('Missing verification candidate '+id);
// Catch repeated named requirement/verification usages in the one toolset
// composition context. A past edit split two case objectives into duplicate
// named usages; native SysML requires one usage with all verify targets.
const compositionPath=join(fsroot,'50_Architecture/MDSE Toolset Composition.md');
if(existsSync(compositionPath)) {
  const composition=readFileSync(compositionPath,'utf8');
  const block=composition.split(fence+'sysml')[1]?.split(fence)[0] ?? '';
  for(const kind of ['verification','requirement']){
    const seen=new Map();
    const rx=new RegExp('^\\s*'+kind+'\\s+([A-Za-z_]\\w*)\\s*:', 'gm');
    for(const match of block.matchAll(rx)){
      const name=match[1];
      if(seen.has(name)) report('MDSE Toolset Composition: duplicate named '+kind+' usage '+name);
      else seen.set(name,true);
    }
  }
} else report('Missing MDSE Toolset Composition note');
const summary={
  status:issues.length?'FINDINGS':'PASS',
  scope:'Provenance, Obsidian link presence, candidate-register integrity, native definition shape (NOT SysML parser certification)',
  originalRuleReferences:rules.size,ruleAnalyses:analysis.size,
  derivedRequirements:requirements.size, originalRequirementCandidates:baseline,
  additionalRequirements:extra,verificationCases:cases.size,
  issues:issues.length,cautions:caution.length,
  findings:issues,cautionDetails:caution
};
console.log(JSON.stringify(summary,null,2));
if(issues.length && process.env.MDSE_STRICT_DERIVED_AUDIT==='1') process.exitCode=1;
