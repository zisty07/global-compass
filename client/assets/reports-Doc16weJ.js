import{c as H,i as T,s as k,j as t,B as E,D as S,r as f,t as v,f as V,h as K,F as A,S as P,b as R,d as W,L as Y,I as J}from"./index-BcKKOEJt.js";import{b as q,a as z}from"./aiNewsAnalystService-DMo0WxJB.js";import{s as Q}from"./countriesApi-BGI4e6Fo.js";import{T as X}from"./trash-2-DzSAl53K.js";const Z=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],ee=H("printer",Z);function C(e){return e.isDemo||e.newsStatus==="demo"?"DEMO":e.newsStatus==="cached"?"CACHED LIVE DATA":e.newsStatus==="live"?"LIVE":e.dataStatus.news}function L(e){return`

---
**Data status:** ${C(e)} · News: ${e.dataStatus.news} (${e.newsSource}) · USGS: ${e.dataStatus.earthquakes} · Supabase: ${e.dataStatus.supabase}
**Generated:** ${new Date().toISOString()}`}function O(e){return`## Limitations
- This report uses only data loaded in Global Pulse at generation time.
- News/intelligence is **${C(e)}** — do not treat demo or cached items as confirmed breaking news.
- No open-internet browsing; gaps mean "insufficient data in app," not "nothing happened."
- Risk scores are heuristic composites, not official government assessments.`}function b(e,n){return n?n.toLowerCase().includes(e.toLowerCase()):!1}function F(e,n){return e.filter(s=>b(n,s.country)||b(n,s.location)||b(n,s.title))}function N(e,n){const s=e.isDemo?"DEMO":e.isLive?"LIVE":"CACHED";return`${n+1}. **${e.title}** (${e.severity}/${e.category}, ${s}) — ${e.source}${e.country?` · ${e.country}`:""}
   ${(e.description??"").slice(0,200)}`}function G(e,n,s=4){const o=e.intelligenceItems.filter(i=>n.includes(i.category)).slice(0,s);return o.length?o.map((i,a)=>N(i,a)).join(`
`):"_No matching headlines in current feed._"}function te(e,n,s,o=[]){const i=F(e.intelligenceItems,n).slice(0,8),a=F(e.earthquakes,n).slice(0,5),r=e.countryRisks?.find(m=>b(n,m.country)),d=e.savedIntelligence?.filter(m=>b(n,m.country??"")||b(n,m.title))??[],p=o.filter(m=>b(n,m.country??"")||b(n,m.title)),x=s?.population?`Population ~${s.population.toLocaleString()}`:"",h=s?.region?`Region: ${s.region}`:"";let u=`# Country Report: ${n}

`;u+=`## Executive summary
`,u+=`- Monitoring focus: **${n}** using in-app intelligence, USGS, risk index, and saved bookmarks.
`,u+=`- Headlines in feed: **${i.length}** · Earthquakes (filtered): **${a.length}**`,r&&(u+=` · Risk score: **${r.score}** (${r.label})`),u+=`.
`,u+=`
## Latest intelligence / news
`,u+=i.length?i.map((m,g)=>N(m,g)).join(`
`):"_No headlines matched this country in the current feed._",u+=`

## Risk score
`,r?u+=`- Score: **${r.score}/100** (${r.label})
- Factors: ${r.factors.join("; ")}
`:u+=`_No country risk entry for ${n} in the current index._
`,u+=`
## Recent earthquakes / disasters
`,u+=a.length?a.map((m,g)=>N(m,g)).join(`
`):"_No recent USGS events matched this country in the loaded window._",u+=`

## Saved alerts & intelligence
`;const y=[...d.slice(0,5).map((m,g)=>`${g+1}. [Saved intel] ${m.title}`),...p.slice(0,5).map((m,g)=>`${g+1}. [Saved alert] ${m.title}`)];return u+=y.length?y.join(`
`):"_No saved items matched this country._",(x||h)&&(u+=`

## Country reference (REST Countries)
${[x,h].filter(Boolean).join(" · ")}
`),u+=`

${O(e)}`,u+=L(e),u}function ne(e,n){const s=e.intelligenceItems.find(r=>r.id===n)??e.criticalAlerts.find(r=>r.id===n)??e.earthquakes.find(r=>r.id===n);if(!s)return`# Event Report

_Event ID \`${n}\` was not found in the current loaded dataset._${L(e)}`;const o=e.intelligenceItems.filter(r=>r.id!==s.id&&(r.category===s.category||s.country&&r.country===s.country||r.severity===s.severity)).slice(0,6),i=s.isDemo?"DEMO":s.isLive?"LIVE":"CACHED";let a=`# Event Report

`;return a+=`## ${s.title}

`,a+=`- **Category:** ${s.category}
`,a+=`- **Severity:** ${s.severity}
`,a+=`- **Source:** ${s.source}
`,a+=`- **Location / country:** ${s.location??s.country??"—"}
`,a+=`- **Published:** ${new Date(s.publishedAt).toLocaleString()}
`,a+=`- **Data label:** ${i}
`,a+=`
## Timeline / context
${s.description??"_No extended description in feed._"}
`,a+=`
## Why it matters
`,a+=`- Severity **${s.severity}** in category **${s.category}**.
`,s.severity==="critical"||s.severity==="high"?a+=`- Flagged as elevated priority in the intelligence pipeline.
`:a+=`- Monitor for escalation; corroborate with map and country risk views.
`,a+=`
## Related events
`,a+=o.length?o.map((r,d)=>N(r,d)).join(`
`):"_No closely related items in current feed._",a+=`
## Recommended follow-up
`,a+=`- Open **Live World Map** and filter by ${s.country??"region"}.
`,a+=`- Check **Country Risk** and **Intelligence Feed** for updates.
`,a+=`- Save to Supabase bookmarks if Supabase is configured.
`,a+=`

${O(e)}`,a+=L(e),a}function se(e){const n=[...e.criticalAlerts].slice(0,8),s=(e.countryRisks??[]).slice(0,6),o=e.earthquakes.slice(0,6);let i=`# Global Intelligence Briefing

`;return i+=`## Executive summary
`,i+=`- Intelligence items loaded: **${e.intelligenceItems.length}** (critical/high: **${e.criticalAlerts.length}**).
`,i+=`- Earthquakes (USGS window): **${e.earthquakes.length}**.
`,i+=`- Overall data mode: **${C(e)}**.
`,i+=`
## Top critical / high events
`,i+=n.length?n.map((a,r)=>N(a,r)).join(`
`):"_None in current feed._",i+=`

## Top risk countries
`,i+=s.length?s.map((a,r)=>`${r+1}. **${a.country}** — score ${a.score} (${a.label})`).join(`
`):"_Risk index unavailable._",i+=`

## Latest earthquakes
`,i+=o.length?o.map((a,r)=>N(a,r)).join(`
`):"_No earthquakes loaded._",i+=`

## Cyber highlights
${G(e,["cyber"])}
`,i+=`
## Economy / energy highlights
${G(e,["economy","energy"])}
`,i+=`
## Military / geopolitics highlights
${G(e,["military","geopolitics"])}
`,i+=`

## Data source status
`,i+=`- GNews intelligence: ${e.dataStatus.news} (${e.newsSource})
`,i+=`- USGS earthquakes: ${e.dataStatus.earthquakes}
`,i+=`- Supabase saved data: ${e.dataStatus.supabase}
`,i+=`

${O(e)}`,i+=L(e),i}function D(e,n,s){const o=new Date().toLocaleString();return e==="country"&&n?`Country Report — ${n} (${o})`:e==="event"&&s?`Event Report — ${s.title.slice(0,60)} (${o})`:`Global Briefing (${o})`}async function ae(e,n,s,o){const i=z(s),a=n==="country"?`Produce a polished Country Report for ${o.country}. Use ONLY facts from the draft and JSON context. Keep all sections. Do not invent events.`:n==="event"?`Produce a polished Event Report for event id ${o.eventId}. Use ONLY facts from the draft and JSON context.`:"Produce a polished Global Intelligence Briefing. Use ONLY facts from the draft and JSON context.";try{const r=await fetch("/api/generate-report",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({type:n,country:o.country,eventId:o.eventId,draft:e,context:i,instruction:a})}),d=await r.json();if(r.ok&&d.content){const p=d.status==="GEMINI FALLBACK MODEL"?"GEMINI FALLBACK MODEL":"GEMINI LIVE";return{content:d.content,aiStatus:p,model:d.model}}}catch{}return null}async function _(e){const n=await q({force:!0}),s=C(n),o=new Date().toISOString();let i,a,r,d,p;if(e.type==="country"){r=e.country.trim();let h=null,u=[];try{h=(await Q(r))[0]??null,h?.name?.common&&!r&&(r=h.name.common)}catch{}if(T())try{u=await k.listSavedAlerts()}catch{}i=te(n,r,h,u),a=D("country",r)}else e.type==="event"?(d=e.eventId,p=n.intelligenceItems.find(h=>h.id===d)??n.criticalAlerts.find(h=>h.id===d)??n.earthquakes.find(h=>h.id===d),i=ne(n,d),a=D("event",void 0,p)):(i=se(n),a=D("global_briefing"));const x=await ae(i,e.type,n,{country:r,eventId:d});return x?{title:a,type:e.type,country:r,eventId:d,content:x.content,dataStatus:s,aiStatus:x.aiStatus,model:x.model,generatedAt:o}:{title:a,type:e.type,country:r,eventId:d,content:i,dataStatus:s,aiStatus:"LOCAL FALLBACK",model:"local-analyst",generatedAt:o}}function U(e){switch(e){case"country":return"Country Report";case"event":return"Event Report";default:return"Global Briefing"}}function re({className:e}){return t.jsxs(E,{type:"button",variant:"outline",size:"sm",className:e,onClick:()=>window.print(),children:[t.jsx(ee,{className:"mr-1.5 h-3.5 w-3.5"}),"Print / Export PDF"]})}function ie(e){return e?e==="GEMINI LIVE"?t.jsx(S,{variant:"live",children:"GEMINI LIVE"}):e==="GEMINI FALLBACK MODEL"?t.jsx(S,{variant:"live",children:"GEMINI FALLBACK MODEL"}):e==="LOCAL FALLBACK"||e==="GEMINI TEMPORARILY BUSY"?t.jsx(S,{variant:"neutral",children:e}):e==="GEMINI ERROR"?t.jsx(S,{variant:"error",children:"GEMINI ERROR"}):t.jsx(S,{variant:"neutral",children:e}):null}function oe(e){return e.split(`
`).map((n,s)=>n.startsWith("# ")?t.jsx("h1",{className:"mb-3 mt-4 text-xl font-semibold first:mt-0",children:n.slice(2)},s):n.startsWith("## ")?t.jsx("h2",{className:"mb-2 mt-4 text-base font-semibold text-foreground",children:n.slice(3)},s):n.startsWith("- ")?t.jsx("li",{className:"ml-4 list-disc text-sm leading-relaxed text-foreground/90",children:n.slice(2).replace(/\*\*([^*]+)\*\*/g,"$1")},s):n.trim()===""?t.jsx("br",{},s):t.jsx("p",{className:"text-sm leading-relaxed text-foreground/90",children:n.replace(/\*\*([^*]+)\*\*/g,"$1").replace(/_([^_]+)_/g,"$1")},s))}function M({report:e,aiStatus:n,onSave:s,saving:o,showSave:i}){const a="content"in e?e.content:"",r=e.title,d="data_status"in e?e.data_status:e.dataStatus,p=e.type,x=n??("aiStatus"in e?e.aiStatus:void 0);return t.jsxs("div",{className:"space-y-4",children:[t.jsx("style",{children:`
        @media print {
          body * { visibility: hidden; }
          #report-print-root, #report-print-root * { visibility: visible; }
          #report-print-root { position: absolute; left: 0; top: 0; width: 100%; padding: 24px; background: white; color: black; }
        }
      `}),t.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 no-print",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[ie(x),t.jsx(S,{variant:"neutral",children:d}),t.jsx("span",{className:"text-xs text-muted-foreground",children:U(p)})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx(re,{}),i&&s?t.jsx("button",{type:"button",className:"inline-flex h-8 items-center rounded-md border border-border/60 bg-secondary/40 px-3 text-xs hover:bg-secondary/60 disabled:opacity-50",onClick:s,disabled:o,children:o?"Saving…":"Save to Supabase"}):null]})]}),t.jsxs("div",{id:"report-print-root",className:"glass-card max-h-[60vh] overflow-y-auto p-5 md:max-h-[70vh] print:max-h-none print:overflow-visible print:border-0 print:shadow-none",children:[t.jsx("h1",{className:"mb-4 text-lg font-semibold print:text-black",children:r}),t.jsx("div",{className:"prose prose-invert max-w-none space-y-1 print:text-black",children:oe(a)})]})]})}const le=[{id:"global_briefing",label:"Global Briefing",hint:"Planet-wide executive summary"},{id:"country",label:"Country Report",hint:"Focus on one country"},{id:"event",label:"Event Report",hint:"Deep dive on one headline"}];function ce({onGenerated:e}){const[n,s]=f.useState("global_briefing"),[o,i]=f.useState("Ukraine"),[a,r]=f.useState(""),[d,p]=f.useState([]),[x,h]=f.useState(!1),[u,y]=f.useState(!1),[m,g]=f.useState(null);f.useEffect(()=>{if(n!=="event")return;let l=!1;return(async()=>{h(!0);try{const I=await q();if(l)return;const w=I.intelligenceItems.slice(0,40).map(c=>({id:c.id,title:c.title}));p(w),w.length&&r(c=>c||w[0].id)}catch{l||v.error("Could not load events for selection.")}finally{l||h(!1)}})(),()=>{l=!0}},[n]);async function j(){y(!0),g(null);try{let l;if(n==="country"){if(!o.trim()){v.error("Enter a country name."),y(!1);return}l=await _({type:"country",country:o.trim()})}else if(n==="event"){if(!a){v.error("Select an event."),y(!1);return}l=await _({type:"event",eventId:a})}else l=await _({type:"global_briefing"});g(l),e?.(l),l.aiStatus==="LOCAL FALLBACK"?v.message("Report generated with local analyst (Gemini busy or unavailable)."):l.aiStatus==="GEMINI FALLBACK MODEL"?v.message("Primary model busy â€” used fallback Gemini model."):v.success("Intelligence report generated.")}catch(l){v.error(l instanceof Error?l.message:"Report generation failed.")}finally{y(!1)}}return t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"grid gap-2 sm:grid-cols-3",children:le.map(l=>t.jsxs("button",{type:"button",onClick:()=>s(l.id),className:`rounded-lg border p-3 text-left transition-colors ${n===l.id?"border-primary/50 bg-primary/10":"border-border/50 bg-secondary/15 hover:border-primary/30"}`,children:[t.jsx("div",{className:"text-sm font-medium",children:l.label}),t.jsx("p",{className:"mt-0.5 text-[11px] text-muted-foreground",children:l.hint})]},l.id))}),n==="country"?t.jsxs("div",{children:[t.jsx("label",{className:"text-xs text-muted-foreground",children:"Country name"}),t.jsx("input",{value:o,onChange:l=>i(l.target.value),className:"mt-1 w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm",placeholder:"e.g. Romania, Ukraine, United States"})]}):null,n==="event"?t.jsxs("div",{children:[t.jsx("label",{className:"text-xs text-muted-foreground",children:"Select headline"}),x?t.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Loading events…"}):t.jsx("select",{value:a,onChange:l=>r(l.target.value),className:"mt-1 w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm",children:d.map(l=>t.jsx("option",{value:l.id,children:l.title.slice(0,80)},l.id))})]}):null,t.jsx(E,{type:"button",onClick:()=>{j()},disabled:u,className:"w-full sm:w-auto",children:u?t.jsxs(t.Fragment,{children:[t.jsx(V,{className:"mr-2 h-4 w-4 animate-spin"})," Generating report…"]}):t.jsxs(t.Fragment,{children:[t.jsx(K,{className:"mr-2 h-4 w-4"})," Generate Intelligence Report"]})}),m?t.jsx(M,{report:m,aiStatus:m.aiStatus,showSave:!1}):null]})}function de({report:e,onOpen:n,onDelete:s,deleting:o}){const i=e.content.replace(/^#+\s/gm,"").slice(0,140);return t.jsxs("div",{className:"glass-card flex flex-col gap-2 p-4 transition-colors hover:border-primary/30",children:[t.jsxs("div",{className:"flex items-start justify-between gap-2",children:[t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(A,{className:"h-4 w-4 shrink-0 text-primary"}),t.jsx("h3",{className:"truncate text-sm font-semibold",children:e.title})]}),t.jsx("p",{className:"mt-1 text-[11px] text-muted-foreground",children:U(e.type)})]}),t.jsx(S,{variant:"neutral",children:e.data_status})]}),t.jsxs("p",{className:"line-clamp-3 text-xs text-muted-foreground",children:[i,"…"]}),t.jsxs("div",{className:"mt-1 flex flex-wrap gap-2",children:[t.jsx(E,{type:"button",size:"sm",variant:"secondary",className:"h-8 text-xs",onClick:n,children:"View"}),t.jsxs(E,{type:"button",size:"sm",variant:"ghost",className:"h-8 text-xs text-muted-foreground hover:text-destructive",onClick:s,disabled:o,children:[t.jsx(X,{className:"mr-1 h-3.5 w-3.5"})," Delete"]})]}),e.created_at?t.jsx("p",{className:"text-[10px] text-muted-foreground",children:new Date(e.created_at).toLocaleString()}):null]})}function ue(){const[e,n]=f.useState("generate"),[s,o]=f.useState(null),[i,a]=f.useState(!1),[r,d]=f.useState(null),[p,x]=f.useState(null),[h,u]=f.useState(!1),[y,m]=f.useState(null),g=T(),j=f.useCallback(async()=>{if(!g){o([]);return}a(!0);try{o(await k.listGeneratedReports())}catch(c){v.error(c instanceof Error?c.message:"Failed to load reports"),o([])}finally{a(!1)}},[g]);f.useEffect(()=>{e==="saved"&&j()},[e,j]);async function l(){if(p){if(!g){v.error("Supabase is not configured.");return}u(!0);try{const c=await k.saveGeneratedReport({title:p.title,type:p.type,country:p.country??null,event_id:p.eventId??null,content:p.content,data_status:p.dataStatus});v.success("Report saved."),x(null),d(c),n("saved"),j()}catch(c){const $=c instanceof Error?c.message:"Save failed";/generated_reports|does not exist|relation/i.test($)?v.error("Run supabase-schema.sql to create generated_reports table."):v.error($)}finally{u(!1)}}}async function I(c,$){m(c);try{await k.deleteGeneratedReport(c,$),v.success("Report deleted."),r?.id===c&&d(null),j()}catch(B){v.error(B instanceof Error?B.message:"Delete failed")}finally{m(null)}}const w=[{id:"generate",label:"Generate"},{id:"saved",label:"Saved reports"},{id:"how",label:"How it works"}];return t.jsxs("div",{className:"space-y-5",children:[t.jsx("div",{className:"relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-5 md:p-6",children:t.jsx(P,{title:"Intelligence Reports",subtitle:"Generate structured briefings from live, cached, or demo data already in Global Pulse"})}),t.jsx("div",{className:"flex flex-wrap gap-2 border-b border-border/40 pb-2",children:w.map(c=>t.jsx("button",{type:"button",onClick:()=>{n(c.id),d(null)},className:`rounded-md px-3 py-1.5 text-sm ${e===c.id?"bg-primary/15 text-primary":"text-muted-foreground hover:text-foreground"}`,children:c.label},c.id))}),e==="generate"?t.jsxs("div",{className:"grid gap-4 lg:grid-cols-2",children:[t.jsx("div",{className:"glass-card p-4",children:t.jsx(ce,{onGenerated:c=>{x(c),d(null)}})}),t.jsxs("div",{className:"glass-card p-4",children:[t.jsx(P,{title:"Preview",subtitle:"Save or export after generation"}),p?t.jsx(M,{report:p,aiStatus:p.aiStatus,showSave:!0,onSave:()=>{l()},saving:h}):t.jsx(R,{icon:t.jsx(A,{className:"h-8 w-8"}),title:"No report yet",description:"Choose a report type and click Generate."})]})]}):null,e==="saved"?t.jsxs("div",{className:"grid gap-4 lg:grid-cols-[1fr_1.2fr]",children:[t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"Saved reports"}),t.jsxs("button",{type:"button",className:"flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",onClick:()=>{j()},children:[t.jsx(W,{className:`h-3.5 w-3.5 ${i?"animate-spin":""}`})," Refresh"]})]}),g?i?t.jsx(Y,{label:"Loading reports…"}):s?.length?s.map(c=>t.jsx(de,{report:c,onOpen:()=>d(c),onDelete:()=>{I(c.id,c.title)},deleting:y===c.id},c.id)):t.jsx(R,{icon:t.jsx(A,{className:"h-8 w-8"}),title:"No saved reports",description:"Generate and save a report first."}):t.jsx("p",{className:"text-xs text-muted-foreground",children:"Configure Supabase to save reports."})]}),t.jsx("div",{className:"glass-card p-4",children:r?t.jsx(M,{report:r,showSave:!1}):t.jsx(R,{title:"Select a report",description:"Open a saved report to view or print."})})]}):null,e==="how"?t.jsxs("div",{className:"glass-card space-y-4 p-5 text-sm text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-2 text-foreground",children:[t.jsx(J,{className:"h-5 w-5 text-primary"}),t.jsx("h2",{className:"font-semibold",children:"How Intelligence Reports work"})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"mb-1 font-medium text-foreground",children:"Data used"}),t.jsxs("ul",{className:"list-inside list-disc space-y-1",children:[t.jsx("li",{children:"GNews intelligence headlines (via same-origin proxy)"}),t.jsx("li",{children:"USGS earthquakes (last 24h)"}),t.jsx("li",{children:"Country Risk Index (heuristic)"}),t.jsx("li",{children:"Supabase saved alerts & saved intelligence"}),t.jsx("li",{children:"REST Countries metadata (country reports)"}),t.jsx("li",{children:"API health / data status labels (LIVE, CACHED, DEMO)"})]})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"mb-1 font-medium text-foreground",children:"How reports are generated"}),t.jsxs("p",{children:["Global Pulse builds a structured draft from in-app data, then optionally polishes it with"," ",t.jsx("strong",{className:"text-foreground",children:"Global Pulse AI (Google Gemini)"})," when configured. If Gemini is busy or unavailable, a ",t.jsx("strong",{className:"text-foreground",children:"local structured fallback"})," is used — still based only on loaded data."]})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"mb-1 font-medium text-foreground",children:"Limitations"}),t.jsxs("ul",{className:"list-inside list-disc space-y-1",children:[t.jsx("li",{children:"Reports never invent headlines, magnitudes, or countries."}),t.jsx("li",{children:"DEMO data is clearly labeled and must not be treated as live breaking news."}),t.jsx("li",{children:"CACHED data reflects previously fetched live headlines, not the open internet."}),t.jsx("li",{children:"Risk scores are educational composites, not official assessments."})]})]})]}):null]})}const ge=ue;export{ge as component};
