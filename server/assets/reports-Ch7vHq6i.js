import { W as jsxRuntimeExports, r as reactExports } from "./server-BwRcFVCS.js";
import { c as createLucideIcon, i as isSupabaseConfigured, s as supabaseService, B as Button, D as DataBadge, t as toast, e as LoaderCircle, f as Sparkles, F as FileText, S as SectionHeader, b as EmptyState, R as RefreshCw, L as LoadingSpinner, I as Info } from "./router-BTYIQEhE.js";
import { b as buildNewsContext, a as buildLLMContextPayload } from "./aiNewsAnalystService-CG1H91Vb.js";
import { s as searchCountryByName } from "./countriesApi-DVV8MQii.js";
import { T as Trash2 } from "./trash-2-BsEuhwkc.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./worker-entry-8UhLlpnT.js";
import "node:events";
import "fs";
import "path";
import "os";
import "crypto";
import "node:fs";
import "node:path";
import "node:url";
const __iconNode = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode);
function overallDataStatus(ctx) {
  if (ctx.isDemo || ctx.newsStatus === "demo") return "DEMO";
  if (ctx.newsStatus === "cached") return "CACHED LIVE DATA";
  if (ctx.newsStatus === "live") return "LIVE";
  return ctx.dataStatus.news;
}
function dataFooter(ctx) {
  const status = overallDataStatus(ctx);
  return `

---
**Data status:** ${status} · News: ${ctx.dataStatus.news} (${ctx.newsSource}) · USGS: ${ctx.dataStatus.earthquakes} · Supabase: ${ctx.dataStatus.supabase}
**Generated:** ${(/* @__PURE__ */ new Date()).toISOString()}`;
}
function limitationsBlock(ctx) {
  const status = overallDataStatus(ctx);
  return `## Limitations
- This report uses only data loaded in Global Pulse at generation time.
- News/intelligence is **${status}** — do not treat demo or cached items as confirmed breaking news.
- No open-internet browsing; gaps mean "insufficient data in app," not "nothing happened."
- Risk scores are heuristic composites, not official government assessments.`;
}
function matchCountry(name, hay) {
  if (!hay) return false;
  return hay.toLowerCase().includes(name.toLowerCase());
}
function filterByCountry(items, country) {
  return items.filter((e) => matchCountry(country, e.country) || matchCountry(country, e.location) || matchCountry(country, e.title));
}
function formatEventLine(e, i) {
  const label = e.isDemo ? "DEMO" : e.isLive ? "LIVE" : "CACHED";
  return `${i + 1}. **${e.title}** (${e.severity}/${e.category}, ${label}) — ${e.source}${e.country ? ` · ${e.country}` : ""}
   ${(e.description ?? "").slice(0, 200)}`;
}
function categoryHighlights(ctx, categories, limit = 4) {
  const items = ctx.intelligenceItems.filter((e) => categories.includes(e.category)).slice(0, limit);
  if (!items.length) return "_No matching headlines in current feed._";
  return items.map((e, i) => formatEventLine(e, i)).join("\n");
}
function generateCountryReportLocal(ctx, country, meta, savedAlerts = []) {
  const intel = filterByCountry(ctx.intelligenceItems, country).slice(0, 8);
  const quakes = filterByCountry(ctx.earthquakes, country).slice(0, 5);
  const risk = ctx.countryRisks?.find((r) => matchCountry(country, r.country));
  const savedIntel = ctx.savedIntelligence?.filter((s) => matchCountry(country, s.country ?? "") || matchCountry(country, s.title)) ?? [];
  const countrySavedAlerts = savedAlerts.filter(
    (a) => matchCountry(country, a.country ?? "") || matchCountry(country, a.title)
  );
  const pop = meta?.population ? `Population ~${meta.population.toLocaleString()}` : "";
  const region = meta?.region ? `Region: ${meta.region}` : "";
  let body = `# Country Report: ${country}

`;
  body += `## Executive summary
`;
  body += `- Monitoring focus: **${country}** using in-app intelligence, USGS, risk index, and saved bookmarks.
`;
  body += `- Headlines in feed: **${intel.length}** · Earthquakes (filtered): **${quakes.length}**`;
  if (risk) body += ` · Risk score: **${risk.score}** (${risk.label})`;
  body += `.
`;
  body += `
## Latest intelligence / news
`;
  body += intel.length ? intel.map((e, i) => formatEventLine(e, i)).join("\n") : "_No headlines matched this country in the current feed._";
  body += `

## Risk score
`;
  if (risk) {
    body += `- Score: **${risk.score}/100** (${risk.label})
- Factors: ${risk.factors.join("; ")}
`;
  } else {
    body += `_No country risk entry for ${country} in the current index._
`;
  }
  body += `
## Recent earthquakes / disasters
`;
  body += quakes.length ? quakes.map((e, i) => formatEventLine(e, i)).join("\n") : "_No recent USGS events matched this country in the loaded window._";
  body += `

## Saved alerts & intelligence
`;
  const savedLines = [
    ...savedIntel.slice(0, 5).map((s, i) => `${i + 1}. [Saved intel] ${s.title}`),
    ...countrySavedAlerts.slice(0, 5).map((s, i) => `${i + 1}. [Saved alert] ${s.title}`)
  ];
  body += savedLines.length ? savedLines.join("\n") : "_No saved items matched this country._";
  if (pop || region) {
    body += `

## Country reference (REST Countries)
${[pop, region].filter(Boolean).join(" · ")}
`;
  }
  body += `

${limitationsBlock(ctx)}`;
  body += dataFooter(ctx);
  return body;
}
function generateEventReportLocal(ctx, eventId) {
  const event = ctx.intelligenceItems.find((e) => e.id === eventId) ?? ctx.criticalAlerts.find((e) => e.id === eventId) ?? ctx.earthquakes.find((e) => e.id === eventId);
  if (!event) {
    return `# Event Report

_Event ID \`${eventId}\` was not found in the current loaded dataset._${dataFooter(ctx)}`;
  }
  const related = ctx.intelligenceItems.filter(
    (e) => e.id !== event.id && (e.category === event.category || event.country && e.country === event.country || e.severity === event.severity)
  ).slice(0, 6);
  const label = event.isDemo ? "DEMO" : event.isLive ? "LIVE" : "CACHED";
  let body = `# Event Report

`;
  body += `## ${event.title}

`;
  body += `- **Category:** ${event.category}
`;
  body += `- **Severity:** ${event.severity}
`;
  body += `- **Source:** ${event.source}
`;
  body += `- **Location / country:** ${event.location ?? event.country ?? "—"}
`;
  body += `- **Published:** ${new Date(event.publishedAt).toLocaleString()}
`;
  body += `- **Data label:** ${label}
`;
  body += `
## Timeline / context
${event.description ?? "_No extended description in feed._"}
`;
  body += `
## Why it matters
`;
  body += `- Severity **${event.severity}** in category **${event.category}**.
`;
  if (event.severity === "critical" || event.severity === "high") {
    body += `- Flagged as elevated priority in the intelligence pipeline.
`;
  } else {
    body += `- Monitor for escalation; corroborate with map and country risk views.
`;
  }
  body += `
## Related events
`;
  body += related.length ? related.map((e, i) => formatEventLine(e, i)).join("\n") : "_No closely related items in current feed._";
  body += `
## Recommended follow-up
`;
  body += `- Open **Live World Map** and filter by ${event.country ?? "region"}.
`;
  body += `- Check **Country Risk** and **Intelligence Feed** for updates.
`;
  body += `- Save to Supabase bookmarks if Supabase is configured.
`;
  body += `

${limitationsBlock(ctx)}`;
  body += dataFooter(ctx);
  return body;
}
function generateGlobalBriefingLocal(ctx) {
  const topCritical = [...ctx.criticalAlerts].slice(0, 8);
  const topRisks = (ctx.countryRisks ?? []).slice(0, 6);
  const quakes = ctx.earthquakes.slice(0, 6);
  let body = `# Global Intelligence Briefing

`;
  body += `## Executive summary
`;
  body += `- Intelligence items loaded: **${ctx.intelligenceItems.length}** (critical/high: **${ctx.criticalAlerts.length}**).
`;
  body += `- Earthquakes (USGS window): **${ctx.earthquakes.length}**.
`;
  body += `- Overall data mode: **${overallDataStatus(ctx)}**.
`;
  body += `
## Top critical / high events
`;
  body += topCritical.length ? topCritical.map((e, i) => formatEventLine(e, i)).join("\n") : "_None in current feed._";
  body += `

## Top risk countries
`;
  body += topRisks.length ? topRisks.map((r, i) => `${i + 1}. **${r.country}** — score ${r.score} (${r.label})`).join("\n") : "_Risk index unavailable._";
  body += `

## Latest earthquakes
`;
  body += quakes.length ? quakes.map((e, i) => formatEventLine(e, i)).join("\n") : "_No earthquakes loaded._";
  body += `

## Cyber highlights
${categoryHighlights(ctx, ["cyber"])}
`;
  body += `
## Economy / energy highlights
${categoryHighlights(ctx, ["economy", "energy"])}
`;
  body += `
## Military / geopolitics highlights
${categoryHighlights(ctx, ["military", "geopolitics"])}
`;
  body += `

## Data source status
`;
  body += `- GNews intelligence: ${ctx.dataStatus.news} (${ctx.newsSource})
`;
  body += `- USGS earthquakes: ${ctx.dataStatus.earthquakes}
`;
  body += `- Supabase saved data: ${ctx.dataStatus.supabase}
`;
  body += `

${limitationsBlock(ctx)}`;
  body += dataFooter(ctx);
  return body;
}
function reportTitle(type, country, event) {
  const ts = (/* @__PURE__ */ new Date()).toLocaleString();
  if (type === "country" && country) return `Country Report — ${country} (${ts})`;
  if (type === "event" && event) return `Event Report — ${event.title.slice(0, 60)} (${ts})`;
  return `Global Briefing (${ts})`;
}
async function enhanceWithGemini(draft, type, ctx, meta) {
  const payload = buildLLMContextPayload(ctx);
  const instruction = type === "country" ? `Produce a polished Country Report for ${meta.country}. Use ONLY facts from the draft and JSON context. Keep all sections. Do not invent events.` : type === "event" ? `Produce a polished Event Report for event id ${meta.eventId}. Use ONLY facts from the draft and JSON context.` : `Produce a polished Global Intelligence Briefing. Use ONLY facts from the draft and JSON context.`;
  try {
    const res = await fetch("/api/generate-report", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        country: meta.country,
        eventId: meta.eventId,
        draft,
        context: payload,
        instruction
      })
    });
    const data = await res.json();
    if (res.ok && data.content) {
      const status = data.status === "GEMINI FALLBACK MODEL" ? "GEMINI FALLBACK MODEL" : "GEMINI LIVE";
      return { content: data.content, aiStatus: status, model: data.model };
    }
  } catch {
  }
  return null;
}
async function generateReport(params) {
  const ctx = await buildNewsContext({ force: true });
  const dataStatus = overallDataStatus(ctx);
  const generatedAt = (/* @__PURE__ */ new Date()).toISOString();
  let content;
  let title;
  let country;
  let eventId;
  let event;
  if (params.type === "country") {
    country = params.country.trim();
    let meta = null;
    let savedAlerts = [];
    try {
      const found = await searchCountryByName(country);
      meta = found[0] ?? null;
      if (meta?.name?.common && !country) country = meta.name.common;
    } catch {
    }
    if (isSupabaseConfigured()) {
      try {
        savedAlerts = await supabaseService.listSavedAlerts();
      } catch {
      }
    }
    content = generateCountryReportLocal(ctx, country, meta, savedAlerts);
    title = reportTitle("country", country);
  } else if (params.type === "event") {
    eventId = params.eventId;
    event = ctx.intelligenceItems.find((e) => e.id === eventId) ?? ctx.criticalAlerts.find((e) => e.id === eventId) ?? ctx.earthquakes.find((e) => e.id === eventId);
    content = generateEventReportLocal(ctx, eventId);
    title = reportTitle("event", void 0, event);
  } else {
    content = generateGlobalBriefingLocal(ctx);
    title = reportTitle("global_briefing");
  }
  const enhanced = await enhanceWithGemini(content, params.type, ctx, { country, eventId });
  if (enhanced) {
    return {
      title,
      type: params.type,
      country,
      eventId,
      content: enhanced.content,
      dataStatus,
      aiStatus: enhanced.aiStatus,
      model: enhanced.model,
      generatedAt
    };
  }
  return {
    title,
    type: params.type,
    country,
    eventId,
    content,
    dataStatus,
    aiStatus: "LOCAL FALLBACK",
    model: "local-analyst",
    generatedAt
  };
}
function reportTypeLabel(type) {
  switch (type) {
    case "country":
      return "Country Report";
    case "event":
      return "Event Report";
    default:
      return "Global Briefing";
  }
}
function ReportExportButton({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", className, onClick: () => window.print(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "mr-1.5 h-3.5 w-3.5" }),
    "Print / Export PDF"
  ] });
}
function statusBadge(status) {
  if (!status) return null;
  if (status === "GEMINI LIVE")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "GEMINI LIVE" });
  if (status === "GEMINI FALLBACK MODEL")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "GEMINI FALLBACK MODEL" });
  if (status === "LOCAL FALLBACK" || status === "GEMINI TEMPORARILY BUSY")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "neutral", children: status });
  if (status === "GEMINI ERROR") return /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "error", children: "GEMINI ERROR" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "neutral", children: status });
}
function renderMarkdownSimple(text) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("# ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-3 mt-4 text-xl font-semibold first:mt-0", children: line.slice(2) }, i);
    }
    if (line.startsWith("## ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-2 mt-4 text-base font-semibold text-foreground", children: line.slice(3) }, i);
    }
    if (line.startsWith("- ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4 list-disc text-sm leading-relaxed text-foreground/90", children: line.slice(2).replace(/\*\*([^*]+)\*\*/g, "$1") }, i);
    }
    if (line.trim() === "") return /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}, i);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/90", children: line.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/_([^_]+)_/g, "$1") }, i);
  });
}
function ReportDetails({ report, aiStatus, onSave, saving, showSave }) {
  const content = "content" in report ? report.content : "";
  const title = report.title;
  const dataStatus = "data_status" in report ? report.data_status : report.dataStatus;
  const type = report.type;
  const status = aiStatus ?? ("aiStatus" in report ? report.aiStatus : void 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          body * { visibility: hidden; }
          #report-print-root, #report-print-root * { visibility: visible; }
          #report-print-root { position: absolute; left: 0; top: 0; width: 100%; padding: 24px; background: white; color: black; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 no-print", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        statusBadge(status),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "neutral", children: dataStatus }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: reportTypeLabel(type) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReportExportButton, {}),
        showSave && onSave ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "inline-flex h-8 items-center rounded-md border border-border/60 bg-secondary/40 px-3 text-xs hover:bg-secondary/60 disabled:opacity-50",
            onClick: onSave,
            disabled: saving,
            children: saving ? "Saving…" : "Save to Supabase"
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "report-print-root",
        className: "glass-card max-h-[60vh] overflow-y-auto p-5 md:max-h-[70vh] print:max-h-none print:overflow-visible print:border-0 print:shadow-none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-4 text-lg font-semibold print:text-black", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-invert max-w-none space-y-1 print:text-black", children: renderMarkdownSimple(content) })
        ]
      }
    )
  ] });
}
const TYPES = [
  { id: "global_briefing", label: "Global Briefing", hint: "Planet-wide executive summary" },
  { id: "country", label: "Country Report", hint: "Focus on one country" },
  { id: "event", label: "Event Report", hint: "Deep dive on one headline" }
];
function ReportGenerator({ onGenerated }) {
  const [type, setType] = reactExports.useState("global_briefing");
  const [country, setCountry] = reactExports.useState("Ukraine");
  const [eventId, setEventId] = reactExports.useState("");
  const [events, setEvents] = reactExports.useState([]);
  const [loadingEvents, setLoadingEvents] = reactExports.useState(false);
  const [generating, setGenerating] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (type !== "event") return;
    let cancelled = false;
    (async () => {
      setLoadingEvents(true);
      try {
        const ctx = await buildNewsContext();
        if (cancelled) return;
        const list = ctx.intelligenceItems.slice(0, 40).map((e) => ({ id: e.id, title: e.title }));
        setEvents(list);
        if (list.length) setEventId((prev) => prev || list[0].id);
      } catch {
        if (!cancelled) toast.error("Could not load events for selection.");
      } finally {
        if (!cancelled) setLoadingEvents(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [type]);
  async function handleGenerate() {
    setGenerating(true);
    setResult(null);
    try {
      let generated;
      if (type === "country") {
        if (!country.trim()) {
          toast.error("Enter a country name.");
          setGenerating(false);
          return;
        }
        generated = await generateReport({ type: "country", country: country.trim() });
      } else if (type === "event") {
        if (!eventId) {
          toast.error("Select an event.");
          setGenerating(false);
          return;
        }
        generated = await generateReport({ type: "event", eventId });
      } else {
        generated = await generateReport({ type: "global_briefing" });
      }
      setResult(generated);
      onGenerated?.(generated);
      if (generated.aiStatus === "LOCAL FALLBACK") {
        toast.message("Report generated with local analyst (Gemini busy or unavailable).");
      } else if (generated.aiStatus === "GEMINI FALLBACK MODEL") {
        toast.message("Primary model busy â€” used fallback Gemini model.");
      } else {
        toast.success("Intelligence report generated.");
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Report generation failed.");
    } finally {
      setGenerating(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-3", children: TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setType(t.id),
        className: `rounded-lg border p-3 text-left transition-colors ${type === t.id ? "border-primary/50 bg-primary/10" : "border-border/50 bg-secondary/15 hover:border-primary/30"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[11px] text-muted-foreground", children: t.hint })
        ]
      },
      t.id
    )) }),
    type === "country" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Country name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: country,
          onChange: (e) => setCountry(e.target.value),
          className: "mt-1 w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm",
          placeholder: "e.g. Romania, Ukraine, United States"
        }
      )
    ] }) : null,
    type === "event" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Select headline" }),
      loadingEvents ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Loading events…" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: eventId,
          onChange: (e) => setEventId(e.target.value),
          className: "mt-1 w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm",
          children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: e.id, children: e.title.slice(0, 80) }, e.id))
        }
      )
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: () => void handleGenerate(), disabled: generating, className: "w-full sm:w-auto", children: generating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
      " Generating report…"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4" }),
      " Generate Intelligence Report"
    ] }) }),
    result ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReportDetails, { report: result, aiStatus: result.aiStatus, showSave: false }) : null
  ] });
}
function ReportCard({ report, onOpen, onDelete, deleting }) {
  const preview = report.content.replace(/^#+\s/gm, "").slice(0, 140);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-col gap-2 p-4 transition-colors hover:border-primary/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-sm font-semibold", children: report.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-muted-foreground", children: reportTypeLabel(report.type) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "neutral", children: report.data_status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "line-clamp-3 text-xs text-muted-foreground", children: [
      preview,
      "…"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "sm", variant: "secondary", className: "h-8 text-xs", onClick: onOpen, children: "View" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          variant: "ghost",
          className: "h-8 text-xs text-muted-foreground hover:text-destructive",
          onClick: onDelete,
          disabled: deleting,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-1 h-3.5 w-3.5" }),
            " Delete"
          ]
        }
      )
    ] }),
    report.created_at ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: new Date(report.created_at).toLocaleString() }) : null
  ] });
}
function ReportsPage() {
  const [tab, setTab] = reactExports.useState("generate");
  const [saved, setSaved] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState(null);
  const [draft, setDraft] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const configured = isSupabaseConfigured();
  const loadSaved = reactExports.useCallback(async () => {
    if (!configured) {
      setSaved([]);
      return;
    }
    setLoading(true);
    try {
      setSaved(await supabaseService.listGeneratedReports());
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed to load reports");
      setSaved([]);
    } finally {
      setLoading(false);
    }
  }, [configured]);
  reactExports.useEffect(() => {
    if (tab === "saved") void loadSaved();
  }, [tab, loadSaved]);
  async function saveDraft() {
    if (!draft) return;
    if (!configured) {
      toast.error("Supabase is not configured.");
      return;
    }
    setSaving(true);
    try {
      const row = await supabaseService.saveGeneratedReport({
        title: draft.title,
        type: draft.type,
        country: draft.country ?? null,
        event_id: draft.eventId ?? null,
        content: draft.content,
        data_status: draft.dataStatus
      });
      toast.success("Report saved.");
      setDraft(null);
      setSelected(row);
      setTab("saved");
      void loadSaved();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Save failed";
      if (/generated_reports|does not exist|relation/i.test(msg)) {
        toast.error("Run supabase-schema.sql to create generated_reports table.");
      } else {
        toast.error(msg);
      }
    } finally {
      setSaving(false);
    }
  }
  async function deleteReport(id, title) {
    setDeletingId(id);
    try {
      await supabaseService.deleteGeneratedReport(id, title);
      toast.success("Report deleted.");
      if (selected?.id === id) setSelected(null);
      void loadSaved();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setDeletingId(null);
    }
  }
  const tabs = [
    { id: "generate", label: "Generate" },
    { id: "saved", label: "Saved reports" },
    { id: "how", label: "How it works" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-5 md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Intelligence Reports",
        subtitle: "Generate structured briefings from live, cached, or demo data already in Global Pulse"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-border/40 pb-2", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          setTab(t.id);
          setSelected(null);
        },
        className: `rounded-md px-3 py-1.5 text-sm ${tab === t.id ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`,
        children: t.label
      },
      t.id
    )) }),
    tab === "generate" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReportGenerator,
        {
          onGenerated: (r) => {
            setDraft(r);
            setSelected(null);
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Preview", subtitle: "Save or export after generation" }),
        draft ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReportDetails, { report: draft, aiStatus: draft.aiStatus, showSave: true, onSave: () => void saveDraft(), saving }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8" }),
            title: "No report yet",
            description: "Choose a report type and click Generate."
          }
        )
      ] })
    ] }) : null,
    tab === "saved" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold", children: "Saved reports" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
              onClick: () => void loadSaved(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }),
                " Refresh"
              ]
            }
          )
        ] }),
        !configured ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Configure Supabase to save reports." }) : loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { label: "Loading reports…" }) : saved?.length ? saved.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReportCard,
          {
            report: r,
            onOpen: () => setSelected(r),
            onDelete: () => void deleteReport(r.id, r.title),
            deleting: deletingId === r.id
          },
          r.id
        )) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8" }), title: "No saved reports", description: "Generate and save a report first." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-4", children: selected ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReportDetails, { report: selected, showSave: false }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Select a report", description: "Open a saved report to view or print." }) })
    ] }) : null,
    tab === "how" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card space-y-4 p-5 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "How Intelligence Reports work" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-medium text-foreground", children: "Data used" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-inside list-disc space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "GNews intelligence headlines (via same-origin proxy)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "USGS earthquakes (last 24h)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Country Risk Index (heuristic)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Supabase saved alerts & saved intelligence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "REST Countries metadata (country reports)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "API health / data status labels (LIVE, CACHED, DEMO)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-medium text-foreground", children: "How reports are generated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Global Pulse builds a structured draft from in-app data, then optionally polishes it with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Global Pulse AI (Google Gemini)" }),
          " when configured. If Gemini is busy or unavailable, a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "local structured fallback" }),
          " is used — still based only on loaded data."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-medium text-foreground", children: "Limitations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-inside list-disc space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reports never invent headlines, magnitudes, or countries." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "DEMO data is clearly labeled and must not be treated as live breaking news." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "CACHED data reflects previously fetched live headlines, not the open internet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Risk scores are educational composites, not official assessments." })
        ] })
      ] })
    ] }) : null
  ] });
}
const SplitComponent = ReportsPage;
export {
  SplitComponent as component
};
