/**
 * Assemble authoritative SysML v2 fenced blocks from active MDSE live notes.
 *
 * This is a source-to-parser-input extraction and identity check only:
 * it is NOT a SysML language parser. Does not modify source files.
 *
 * Usage:
 *   node scripts/assemble-live-sysml.mjs --output /tmp/mdse-live.sysml --manifest /tmp/mdse-live-manifest.json
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const ROOTS = [
  '10_Stakeholder_Needs','20_Use_Cases','30_Functions',
  '40_System_Requirements','60_Verification',
  '72_Derived_Requirements','73_Derived_Verification',
  '50_Architecture',
];
const digest = text => createHash('sha256').update(text).digest('hex');
const root = process.cwd();
const flag = key => { const i=process.argv.indexOf(key); return i<0?null:process.argv[i+1]??null; };
const output = flag('--output'), manifestFile = flag('--manifest');
const checkOnly = process.argv.includes('--check');
if (!checkOnly && (!output || !manifestFile)) {
  console.error('Specify --output and --manifest (or --check for summary only).');
  process.exit(2);
}
function filesIn(dir) {
 if(!existsSync(dir)) throw Error('Missing active modeling root: '+relative(root,dir));
 const out=[];
 for(const f of readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
  const p=join(dir,f.name);
  if(f.isDirectory())out.push(...filesIn(p));
  else if(f.isFile() && f.name.toLowerCase().endsWith('.md'))out.push(p);
 }
 return out;
}
function frontmatter(text) {
 const match=text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
 if(!match)return {};
 const props={};
 for(const l of match[1].split(/\r?\n/)) {
  const m=l.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
  if(m) props[m[1]]=m[2].trim().replace(/^["']|["']$/g,'');
 }
 return props;
}
const sources=[], errors=[], warnings=[], identities=new Map();
let notesRead=0, notesWithoutSysml=0;
const tick=String.fromCharCode(96).repeat(3);
for(const folder of ROOTS){
 for(const abs of filesIn(join(root,folder))) {
  const path=relative(root,abs).split('\\').join('/');
  const text=readFileSync(abs,'utf8').replaceAll('\r\n','\n');
  notesRead++;
  // Ignore README / descriptive notes without native SysML fences.
  const starts=[...text.matchAll(new RegExp('^'+tick+'sysml\\s*$','gm'))];
  if(!starts.length){ notesWithoutSysml++; continue; }
  if(starts.length!==1){errors.push(path+': expected one sysml fence, saw '+starts.length);continue;}
  const head=text.slice(0,starts[0].index);
  const h2=[...head.matchAll(/^##\s+(.+)$/gm)].map(x=>x[1].trim());
  if(h2.at(-1)!=='SysML v2')errors.push(path+': SysML v2 not last H2');
  const endIndex=text.indexOf('\n'+tick,starts[0].index+tick.length+5);
  if(endIndex<0){errors.push(path+': unterminated sysml block');continue;}
  const closing=text.slice(endIndex+1).match(new RegExp('^'+tick+'\\s*(?:\\n|$)'));
  if(!closing){errors.push(path+': malformed closing fence');continue;}
  const rest=text.slice(endIndex+1+closing[0].length).trim();
  if(rest)errors.push(path+': trailing content after authoritative fence');
  const body=text.slice(starts[0].index+tick.length+5,endIndex).replace(/^\n/,'').trimEnd()+'\n';
  if(!/^\s*(?:package|library package)\s+/m.test(body)) errors.push(path+': no package declaration');
  const fm=frontmatter(text);
  if(!fm.primarySymbol){errors.push(path+': missing YAML primarySymbol');continue;}
  if(identities.has(fm.primarySymbol))errors.push(path+': duplicate primarySymbol '+fm.primarySymbol+' in '+identities.get(fm.primarySymbol));
  else identities.set(fm.primarySymbol,path);
  if(!body.includes(fm.primarySymbol.split('::')[0]))warnings.push(path+': primarySymbol package not found in native text');
  sources.push({path,id:fm.id||null,primarySymbol:fm.primarySymbol,body,sha256:digest(body)});
 }
}
if(sources.length<100)errors.push('Unexpectedly few native source notes: '+sources.length);
let assembled='', cursor=1;
for(const s of sources){
 const boundary='// MDSE source: '+s.path+'\n';
 const full=boundary+s.body+'\n';
 s.startLine=cursor+1;
 s.endLine=s.startLine+s.body.split('\n').length-2;
 cursor+=full.split('\n').length-1;
 assembled+=full;
 delete s.body;
}
const result={
 schema:'mdse-live-sysml-assembly/1',
 sourceCommit:process.env.GITHUB_SHA||'local-checkout',
 status:errors.length?'EXTRACTION_ERRORS':'ASSEMBLED_NOT_PARSED',
 notesRead,notesWithoutSysml,
 nativeSourceNotes:sources.length,modelBytes:Buffer.byteLength(assembled),
 modelSha256:digest(assembled),errors,warnings,
 sources
};
if(!checkOnly && output && manifestFile){
 for(const [p,bytes] of [[output,assembled],[manifestFile,JSON.stringify(result,null,2)+'\n']]){
  const abs=resolve(p);mkdirSync(dirname(abs),{recursive:true});writeFileSync(abs,bytes,'utf8');
 }
}
console.log(JSON.stringify({status:result.status,notesRead,nativeSourceNotes:sources.length,notesWithoutSysml,modelBytes:result.modelBytes,modelSha256:result.modelSha256,errors:errors.slice(0,25),errorCount:errors.length,warnings:warnings.slice(0,10),warningCount:warnings.length},null,2));
if(errors.length)process.exitCode=1;
