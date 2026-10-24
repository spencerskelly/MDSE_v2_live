/** Active MDSE vault link/identity/view audit. Diagnostic; not a SysML parser. */
import {readdirSync,readFileSync,existsSync} from 'node:fs';
import {join,posix} from 'node:path';
const roots=['10_Stakeholder_Needs','20_Use_Cases','30_Functions','40_System_Requirements','50_Architecture','55_Language','60_Verification','70_Rule_References','71_Rule_Analysis','72_Derived_Requirements','73_Derived_Verification','74_Semantic_Review','80_Issues','99_System/04_Language'];
const rootNotes=['README.md','README 1.md','NEEDS_BASELINE.md','AS_BUILT_CAPABILITY_BASELINE.md','SEMANTIC_REVIEW_FINDINGS.md','LIVE_BASELINE.md'];
const base=process.cwd(), records=[], all=new Set(), issues=new Map();
function add(kind,file,detail){if(!issues.has(kind))issues.set(kind,[]);issues.get(kind).push({file,detail});}
function scan(dir,collect=false){
 if(!existsSync(dir))return;
 for(const v of readdirSync(dir,{withFileTypes:true})){
  if(['.git','node_modules','_tool_source'].includes(v.name))continue;
  const abs=join(dir,v.name),rel=abs.slice(base.length+1).replaceAll('\\','/');
  if(v.isDirectory())scan(abs,collect);
  else if(v.isFile()){
   all.add(rel);
   if(collect && /\.(md|canvas)$/.test(rel))records.push({path:rel,body:readFileSync(abs,'utf8')});
  }
 }
}
scan(base,false);
for(const r of roots)scan(join(base,r),true);
for(const n of rootNotes)if(all.has(n))records.push({path:n,body:readFileSync(join(base,n),'utf8')});
const notes=records.filter(r=>r.path.endsWith('.md')),canvases=records.filter(r=>r.path.endsWith('.canvas'));
const byStem=new Map();
for(const r of notes){const stem=posix.basename(r.path,'.md');byStem.set(stem,[...(byStem.get(stem)||[]),r.path]);}
function field(s,k){const f=s.match(/^---\r?\n([\s\S]*?)\r?\n---/);if(!f)return '';const v=f[1].match(new RegExp('^'+k+':\\s*(.*?)\\s*$','m'));return v?v[1].trim().replace(/^['"]|['"]$/g,''):'';}
function resolve(file,text,wiki){
 let t=text.trim();
 if(wiki)t=t.split('|')[0].split('#')[0].trim();
 else {t=t.replace(/^<|>$/g,'').split('#')[0].split('?')[0];try{t=decodeURIComponent(t)}catch{}}
 if(!t || t.startsWith('#')||/^(https?:|mailto:|obsidian:|data:)/i.test(t)||/[<>{}]/.test(t))return'ignored';
 t=t.replace(/^\/+/,'');
 const options=[t,...(posix.extname(t)?[]:[t+'.md',t+'.canvas'])];
 if(wiki){
  if(options.some(p=>all.has(p)||all.has(posix.normalize(posix.join(posix.dirname(file),p)))))return'ok';
  const matches=byStem.get(posix.basename(t,'.md'))||[];
  if(matches.length===1)return'ok';
  if(matches.length>1)return'ambiguous';
  const tail=notes.filter(n=>options.some(p=>n.path.endsWith('/'+p))).length;
  return tail===1?'ok':tail>1?'ambiguous':'missing';
 }
 if(options.some(p=>all.has(posix.normalize(posix.join(posix.dirname(file),p)))))return'ok';
 if(options.some(p=>all.has(p)))return'root-fallback';
 return'missing';
}
const seen={id:new Map(),uid:new Map(),primarySymbol:new Map()};
let wikiLinks=0,markdownLinks=0,governed=0;
for(const note of notes){
 const model=/^(10_|20_|30_|40_|50_|60_|70_|71_|72_|73_|80_)/.test(note.path);
 if(model && field(note.body,'id'))governed++;
 if(model)for(const key of Object.keys(seen)){
  const val=field(note.body,key);if(!val)continue;
  if(seen[key].has(val))add('DUPLICATE_'+key.toUpperCase(),note.path,val+' also '+seen[key].get(val));
  else seen[key].set(val,note.path);
 }
 const prose=note.body.replace(new RegExp('^[ \\t]*\\x60{3,}[^\\n]*\\n[\\s\\S]*?^[ \\t]*\\x60{3,}[ \\t]*$','gm'),'');
 for(const m of prose.matchAll(/!?\[\[([^\]\n]+)\]\]/g)){
  wikiLinks++;const result=resolve(note.path,m[1],true);
  if(result==='missing')add('WIKI_UNRESOLVED',note.path,m[1]);
  if(result==='ambiguous')add('WIKI_AMBIGUOUS',note.path,m[1]);
 }
 for(const m of prose.matchAll(/(?<!!)\[[^\]\n]+\]\(([^)\n]+)\)/g)){
  markdownLinks++;const result=resolve(note.path,m[1],false);
  if(result==='missing')add('MARKDOWN_UNRESOLVED',note.path,m[1]);
  if(result==='root-fallback')add('MARKDOWN_ROOT_FALLBACK',note.path,m[1]);
 }
}
for(const c of canvases){
 let data;try{data=JSON.parse(c.body)}catch{add('CANVAS_INVALID_JSON',c.path,'invalid JSON');continue;}
 const ids=new Set((data.nodes||[]).map(n=>n.id));
 for(const n of data.nodes||[])if(n.type==='file'&&n.file&&!all.has(n.file))add('CANVAS_MISSING_FILE',c.path,n.file);
 for(const e of data.edges||[])if(!ids.has(e.fromNode)||!ids.has(e.toNode))add('CANVAS_BROKEN_EDGE',c.path,e.id||'unnamed');
}
const groups=Object.fromEntries([...issues].sort(([a],[b])=>a.localeCompare(b)).map(([k,rows])=>[k,{count:rows.length,samples:rows.slice(0,30)}]));
const report={status:issues.size?'FINDINGS_FOR_REVIEW':'NO_STATIC_FINDINGS',scope:'Active model, governance-reference, derived, language and view files (historical last-check excluded)',examined:{markdown:notes.length,governed,canvases:canvases.length,wikilinks:wikiLinks,markdownLinks},groups,limitations:['Static link heuristics are not Obsidian navigation or independent SysML validation','Historical/documentation links may be intentional and require disposition','Semantic holds are not repaired by inventing SysML edges']};
console.log(JSON.stringify(report,null,2));
if(process.env.MDSE_MODEL_AUDIT_STRICT==='1'&&[...issues.keys()].some(k=>k.startsWith('DUPLICATE_')||k==='CANVAS_INVALID_JSON'||k==='CANVAS_BROKEN_EDGE'))process.exitCode=1;
