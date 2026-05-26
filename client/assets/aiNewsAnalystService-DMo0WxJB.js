import{C as D,A as R,i as C,s as b,O as N,Q as M}from"./index-BcKKOEJt.js";const x=`Hi! I'm **Global Pulse AI**, the intelligent assistant of this platform. I can help you understand breaking news, global alerts, the world map, risk scores, and how to use the app.

Ask me about live headlines, earthquakes, country risk, or how any part of Global Pulse works. I only use data loaded in the app — I don't browse the open internet.`,O=["Explain how Global Pulse works","Give me a global briefing","What are the most important breaking news?","Show critical alerts","What is happening on the map?","Explain the Country Risk Index","What does LIVE/CACHED/DEMO mean?","What are the latest earthquakes?","Summarize cyber risks","What countries are highest risk?","How do I use Simple View?","How do I use Advanced View?","What data is saved in Supabase?"],I=new Set(["UK","United Kingdom","Germany","France","Italy","Spain","Romania","Poland","Ukraine","Russia","Greece","Sweden","Norway","Finland","Netherlands","Belgium","Switzerland","Austria","Portugal","Ireland","Denmark","Hungary","Czech","Bulgaria"]);function q(e){return e>=6?"critical":e>=5?"high":e>=4?"medium":"low"}function U(e,t){return{id:`intel-${e.id}`,title:e.title,description:e.description,category:e.category==="technology"?"technology":e.category,severity:e.severity,layer:"intelligence",source:e.source,url:e.url,country:e.country,location:e.country,latitude:e.latitude,longitude:e.longitude,publishedAt:e.publishedAt,isLive:e.isLive&&!t,isDemo:t||!e.isLive}}function T(e){return{id:`eq-${e.id}`,title:`M${e.magnitude.toFixed(1)} — ${e.place}`,description:`Depth ${e.depth.toFixed(1)} km`,category:"earthquake",severity:q(e.magnitude),layer:"earthquakes",source:"USGS",url:e.url,location:e.place,latitude:e.latitude,longitude:e.longitude,publishedAt:new Date(e.time).toISOString(),isLive:!0}}function P(e){switch(e){case"live":return"LIVE";case"cached":return"CACHED LIVE DATA";case"demo":return"DEMO";case"rate_limited":return"RATE LIMITED";case"error":return"API ERROR";default:return"UNKNOWN"}}function L(e){return[e.title,e.description??"",e.country??"",e.location??"",e.category,e.severity].join(" ")}function h(e){const t={critical:0,high:1,medium:2,low:3};return[...e].sort((a,n)=>{const r=t[a.severity]-t[n.severity];return r!==0?r:new Date(n.publishedAt).getTime()-new Date(a.publishedAt).getTime()})}function g(e,t=6){return e.length?e.slice(0,t).map((a,n)=>{const r=new Date(a.publishedAt).toLocaleString(),i=a.country??a.location??"—",c=a.isDemo?" · demo":"";return`${n+1}. **${a.title}** (${a.severity} · ${a.category}) — ${a.source} · ${i} · ${r}${c}`}).join(`
`):"_No matching events in the current dataset._"}function s(e){const t=e.lastUpdated?new Date(e.lastUpdated).toLocaleString():"unknown time",a=`News: ${e.dataStatus.news} (${e.newsSource})`,n=`Earthquakes: ${e.dataStatus.earthquakes}`,r=`Supabase: ${e.dataStatus.supabase}`;let i=`Based on ${e.dataStatus.news.toLowerCase()} intelligence`;return e.newsStatus==="cached"&&(i+=" from cache"),e.isDemo?i+=". **Demo fallback is active — this is not a live briefing.**":e.newsStatus==="live"?i+=" (live).":e.newsStatus==="rate_limited"&&(i+=". GNews rate limit reached — showing cached/demo data."),`
---
**Data status:** ${a} · ${n} · ${r}
${i} Last context update: ${t}.`}function F(e){return M(e)}function W(e,t){const a=t.toLowerCase();return e.filter(n=>L(n).toLowerCase().includes(a))}function H(e){return e.filter(t=>{if(t.country&&I.has(t.country))return!0;const a=L(t).toLowerCase();return[...I].some(n=>a.includes(n.toLowerCase()))})}function S(e,t){const a=new Set(t);return e.filter(n=>a.has(n.category))}function d(...e){return t=>e.some(a=>t.includes(a))}function B(e){const t=h(e.intelligenceItems).slice(0,5),a=h(e.earthquakes).slice(0,3),n=(e.countryRisks??[]).slice(0,5);let r=`**Summary:** Global situational snapshot from ${e.intelligenceItems.length} intelligence headline(s), ${e.criticalAlerts.length} high/critical alert(s), and ${e.earthquakes.length} earthquake(s) in the last 24h feed.

`;return r+=`**Key events (intelligence):**
${g(t,5)}

`,a.length?r+=`**Earthquakes:**
${g(a,3)}

`:r+=`**Earthquakes:** No significant events in the current USGS day feed.

`,n.length&&(r+=`**Highest country risk (computed index):**
`,r+=n.map((i,c)=>`${c+1}. ${i.country} — score ${i.score} (${i.label})`).join(`
`),r+=`

`),r+="**Why it matters:** Prioritize critical/high signals for map, alerts, and analyst review. Cross-check demo or cached labels before operational decisions.",r+s(e)}function _(e){const t=h(e.criticalAlerts);return t.length?`**Summary:** ${t.length} high or critical signal(s) in the current dataset.

**Key events:**
${g(t,8)}

**Why it matters:** These items are prioritized for dashboard, map, and Global Alerts views.${s(e)}`:`I don't have enough live data for critical/high alerts in the current feed.${s(e)}`}function j(e){const t=h(e.earthquakes);return t.length?`**Summary:** ${t.length} earthquake(s) from USGS (last 24h).

**Events:**
${g(t,8)}

**Why it matters:** Magnitude ≥5 events may warrant map focus and alert correlation.${s(e)}`:`No earthquakes are present in the current USGS day feed.${s(e)}`}function $(e,t,a){const n=h(a);return n.length?`**Summary:** ${n.length} ${t} item(s).

**Key events:**
${g(n,8)}

**Why it matters:** Filtered from normalized GNews/intelligence headlines — not invented.${s(e)}`:`I don't have enough live data for ${t} in the current feed.${s(e)}`}function K(e,t){const a=[...e.intelligenceItems,...e.earthquakes],n=h(W(a,t));return n.length?`**Summary:** ${n.length} event(s) referencing **${t}**.

**Key events:**
${g(n,8)}

**Why it matters:** Country match uses title, description, and location fields only.${s(e)}`:`I don't have enough live data mentioning **${t}** in the current feed.${s(e)}`}function V(e){const t=h(H([...e.intelligenceItems,...e.earthquakes]));return t.length?`**Summary:** ${t.length} Europe-related signal(s).

**Key events:**
${g(t,8)}

**Why it matters:** Matches known European country names in headline metadata.${s(e)}`:`I don't have enough live data for Europe in the current feed.${s(e)}`}function z(e){const t=e.countryRisks??[];return t.length?`**Summary:** Top countries by combined news + earthquake + saved alert weights.

**Rankings:**
${t.slice(0,10).map((n,r)=>`${r+1}. **${n.country}** — ${n.score}/100 (${n.label}) · ${n.factors.slice(0,3).join(", ")}`).join(`
`)}

**Why it matters:** Explainable index from existing app data — not a prediction model.${s(e)}`:`Country risk index is empty — need intelligence with country tags and/or earthquakes.${s(e)}`}function Y(e){const t=h(e.intelligenceItems).slice(0,10);return t.length?`**Summary:** Latest normalized headlines (${t.length} shown).

**Headlines:**
${g(t,10)}

**Why it matters:** Sorted by severity, then recency.${s(e)}`:`I don't have enough live data for headlines right now.${s(e)}`}function J(e){const t=e.savedIntelligence??[];if(!t.length)return`${C()?"No saved intelligence items in Supabase yet.":"Supabase is not configured — saved intelligence unavailable."}${s(e)}`;const a=t.slice(0,8).map((n,r)=>{const i=n.created_at?new Date(n.created_at).toLocaleString():"—";return`${r+1}. **${n.title}** (${n.severity??"—"} · ${n.category??"general"}) — saved ${i}`});return`**Summary:** ${t.length} item(s) in saved_intelligence.

**Saved items:**
${a.join(`
`)}

**Why it matters:** User-curated bookmarks from the intelligence feed.${s(e)}`}function E(e){return`I analyze **only** data already loaded in Global Pulse (GNews proxy, USGS, Supabase, risk index).

Try:
`+O.slice(0,5).map(t=>`• ${t}`).join(`
`)+s(e)}async function ee(e){let t="demo",a="Demo",n=null,r=!0,i=[],c=[],o,f=[],p=0,m=[];try{const u=await D({limit:30,force:e?.force});t=u.status,a=u.source,n=u.lastUpdated??(u.cachedAt?new Date(u.cachedAt).toISOString():null),r=u.status==="demo"||u.source==="Demo",i=u.items.map(l=>U(l,r))}catch{}let y="ERROR";try{m=await R("day"),c=m.map(T),y="LIVE"}catch{y="UNAVAILABLE"}let w="NOT CONFIGURED";if(C()){w="CONFIGURED";try{o=await b.listSavedIntelligence()}catch{w="ERROR"}try{f=await b.listSavedAlerts()}catch{}try{p=(await b.listSavedCountries()).length}catch{}}const G=h(i.filter(u=>u.severity==="critical"||u.severity==="high"));let v;try{const u=i.map(l=>({id:l.id,title:l.title,description:l.description??"",category:l.category==="earthquake"||l.category==="weather"?"general":l.category,severity:l.severity,country:l.country,source:l.source,url:l.url,publishedAt:l.publishedAt,isLive:l.isLive}));v=N({intel:u,quakes:m,saved:f})}catch{v=[]}return{intelligenceItems:i,criticalAlerts:G,earthquakes:c,savedIntelligence:o,countryRisks:v,dataStatus:{news:P(t),earthquakes:y,supabase:w},newsStatus:t,newsSource:a,lastUpdated:n,isDemo:r,savedAlertsCount:f.length,savedCountriesCount:p}}function Q(e,t){return e.isDemo||t.isDemo?"DEMO":t.newsStatus==="cached"?"CACHED":e.isLive&&t.newsStatus==="live"||e.layer==="earthquakes"?"LIVE":"CACHED"}function k(e,t){return{id:e.id,title:e.title,description:e.description?.slice(0,280),category:e.category,severity:e.severity,source:e.source,country:e.country,location:e.location,publishedAt:e.publishedAt,dataLabel:Q(e,t),url:e.url}}function X(e){const t=e.isDemo||e.newsStatus==="demo"?"DEMO":e.newsStatus==="cached"?"CACHED LIVE DATA":e.newsStatus==="live"?"LIVE":e.dataStatus.news;return{dataStatus:{news:e.dataStatus.news,earthquakes:e.dataStatus.earthquakes,supabase:e.dataStatus.supabase,overall:t},newsSource:e.newsSource,lastUpdated:e.lastUpdated,intelligenceItems:e.intelligenceItems.slice(0,30).map(a=>k(a,e)),criticalAlerts:e.criticalAlerts.slice(0,20).map(a=>k(a,e)),earthquakes:e.earthquakes.slice(0,10).map(a=>k(a,e)),countryRisks:(e.countryRisks??[]).slice(0,10).map(a=>({country:a.country,score:a.score,label:a.label,factors:a.factors.slice(0,4)})),savedDataSummary:{intelligenceCount:e.savedIntelligence?.length??0,alertsCount:e.savedAlertsCount??0,countriesCount:e.savedCountriesCount??0},apiHealth:{gnews:`${e.dataStatus.news} (${e.newsSource})`,usgs:e.dataStatus.earthquakes,supabase:e.dataStatus.supabase,openWeather:"key configured",map:"Mapbox token present"}}}async function te(){try{const t=await(await fetch("/api/ai-news-chat",{method:"GET",headers:{Accept:"application/json"}})).json();return t.configured?{status:t.status??"GEMINI LIVE",provider:t.provider,model:t.model,configured:!0}:{status:t.status??"GEMINI NOT CONFIGURED",provider:t.provider??"Google Gemini",model:t.model??"gemini-2.5-flash-lite",configured:!1}}catch{return{status:"GEMINI ERROR",provider:"Google Gemini",model:"gemini-2.5-flash-lite",configured:!1}}}async function ae(e,t,a){const n=t.trim();if(!n)return{answer:"Please enter a question.",localFallback:!0};const r=X(a),i=[...e,{role:"user",content:n}];try{const c=await fetch("/api/ai-news-chat",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({messages:i,context:r})}),o=await c.json();if(c.ok&&o.answer){const y=o.status==="GEMINI FALLBACK MODEL"?"GEMINI FALLBACK MODEL":"GEMINI LIVE";return{answer:`${y==="GEMINI FALLBACK MODEL"?`_Primary Gemini model was busy. Response generated with fallback Gemini model._

`:""}${o.answer}`,provider:"Google Gemini",model:o.model,status:y,localFallback:!1,geminiLive:!0,retryCount:o.retryCount}}const f=await A(n,a),p=o.status==="GEMINI TEMPORARILY BUSY"||o.errorCode==="HIGH_DEMAND"||o.errorCode==="RATE_LIMIT";let m;return o.configured===!1||o.status==="GEMINI NOT CONFIGURED"?m=`Gemini API is not configured. Using local analyst fallback based on loaded platform data.

`:p?m=`Gemini is temporarily busy. Global Pulse AI is using local fallback based on loaded platform data.

`:m=`Gemini is temporarily unavailable. Using local analyst fallback based on loaded platform data.

`,{answer:`${m}${f}`,provider:"Local Analyst",model:"local-analyst",status:"LOCAL FALLBACK",localFallback:!0,geminiLive:!1,retryCount:o.retryCount,errorMessage:o.errorMessage??o.error}}catch{return{answer:`Could not reach Gemini API. Using local analyst fallback based on loaded platform data.

${await A(n,a)}`,provider:"Local Analyst",model:"local-analyst",status:"LOCAL FALLBACK",localFallback:!0,geminiLive:!1}}}async function A(e,t){await new Promise(r=>setTimeout(r,280));const a=e.trim().toLowerCase();if(!a)return E(t);if(d("briefing","summary","overview","global briefing")(a))return B(t);if(d("saved intelligence","saved items","saved summary")(a))return J(t);if(d("earthquake","quake","magnitude","usgs")(a))return j(t);if(d("cyber","hack","ransomware","breach")(a))return $(t,"cyber",S(t.intelligenceItems,["cyber"]));if(d("economy","market","oil","inflation","trade")(a))return $(t,"economy/energy",S(t.intelligenceItems,["economy","energy"]));if(d("military","war","missile","troops","conflict","geopolitic")(a))return $(t,"military/geopolitics",S(t.intelligenceItems,["military","geopolitics"]));if(d("critical","urgent","breaking","important","alert")(a))return _(t);if(d("europe","european","eu ")(a))return V(t);if(d("highest risk","country risk","risky countries","risk index")(a))return z(t);if(d("headline","major news","latest news","breaking news")(a))return Y(t);const n=F(e);return n?K(t,n):E(t)}function ne(e,t,a){return{id:`${e}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,role:e,content:t,createdAt:new Date().toISOString(),...a}}export{O as S,x as W,X as a,ee as b,ne as c,te as f,ae as s};
