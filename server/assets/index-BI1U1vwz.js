import { W as jsxRuntimeExports, r as reactExports } from "./server-BwRcFVCS.js";
import { c as createLucideIcon, D as DataBadge, R as RefreshCw, l as Link, C as Activity, S as SectionHeader, B as Button, h as Radio, m as ExternalLink, k as Bookmark, J as IntelligenceDetailsModal, i as isSupabaseConfigured, t as toast, s as supabaseService, T as TriangleAlert, y as magnitudeSeverity, K as LayoutGrid, j as Earth, N as Newspaper, v as getEarthquakes, w as fetchIntelligence, g as getSupabaseViteEnvSummary, G as buildCountryRiskIndex, x as useViewMode, M as Flag, O as RiskScoreCard, f as Sparkles, F as FileText } from "./router-BTYIQEhE.js";
import { E as EarthquakeMagnitudeChart } from "./EarthquakeMagnitudeChart-n1oHgYd9.js";
import { E as Eye, M as Maximize2 } from "./maximize-2-C3-A946-.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, p as Cell } from "./generateCategoricalChart-Dk4_CZTB.js";
import { B as BarChart } from "./BarChart-xBCqP34V.js";
import { g as getAllCountries } from "./countriesApi-DVV8MQii.js";
import { h as hasWeatherKey } from "./weatherApi-DgAGVtTp.js";
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
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
const __iconNode = [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
];
const TvMinimal = createLucideIcon("tv-minimal", __iconNode);
const accentMap = {
  cyan: "from-cyan-glow/20 to-transparent text-cyan-glow",
  emerald: "from-emerald-glow/20 to-transparent text-emerald-glow",
  amber: "from-amber-glow/20 to-transparent text-amber-glow",
  rose: "from-rose-glow/20 to-transparent text-rose-glow"
};
function StatCard({ label: label2, value, hint, icon, accent = "cyan" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card relative overflow-hidden p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accentMap[accent]} blur-2xl opacity-60` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: label2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-semibold tabular-nums", children: value }),
        hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: hint })
      ] }),
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-md border border-border/60 p-2 ${accentMap[accent].split(" ").pop()}`, children: icon })
    ] })
  ] });
}
function variant$1(s) {
  if (s === "live") return "live";
  if (s === "cached") return "neutral";
  if (s === "rate_limited" || s === "error") return "error";
  return "demo";
}
function label$1(s) {
  switch (s) {
    case "live":
      return "LIVE";
    case "cached":
      return "CACHED";
    case "rate_limited":
      return "RATE LIMITED";
    case "error":
      return "API ERROR";
    case "demo":
      return "DEMO";
  }
}
function DashboardStatusBar({ status, updated, loading, cooldownLeft = 0, onRefresh }) {
  const disabled = loading || cooldownLeft > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card panel-grid relative overflow-hidden p-5 lg:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-glow/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: variant$1(status), children: label$1(status) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "source", children: "Global Pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl font-semibold tracking-tight lg:text-4xl", children: "World Monitoring Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Real-time insights about our planet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[11px] uppercase tracking-wider text-muted-foreground", children: [
          "Last updated · ",
          updated.toLocaleTimeString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onRefresh,
            disabled,
            title: cooldownLeft > 0 ? `Wait ${cooldownLeft}s` : "Refresh all dashboard data",
            className: "inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs text-primary disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }),
              cooldownLeft > 0 ? `Wait ${cooldownLeft}s` : "Refresh"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#api-health", className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-2 text-xs hover:text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 text-rose-glow" }),
          " API Health"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/map", className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-2 text-xs hover:text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5" }),
          " Map"
        ] })
      ] })
    ] })
  ] });
}
function variant(s) {
  if (s === "live") return "live";
  if (s === "cached") return "neutral";
  if (s === "rate_limited" || s === "error") return "error";
  return "demo";
}
function label(s) {
  if (s === "live") return "Live";
  if (s === "cached") return "Cached live data";
  if (s === "rate_limited") return "Rate limited";
  if (s === "error") return "API error";
  return "Demo";
}
const SEV_RANK = { critical: 0, high: 1, medium: 2, low: 3 };
function prioritizeForPreview(items, n) {
  return [...items].sort((a, b) => {
    const da = SEV_RANK[a.severity] ?? 9;
    const db = SEV_RANK[b.severity] ?? 9;
    if (da !== db) return da - db;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  }).slice(0, n);
}
const PREVIEW_COUNT = 12;
function LiveIntelligencePanel({ items, status, loading, onRefresh, cooldownLeft = 0 }) {
  const [active, setActive] = reactExports.useState(null);
  const preview = reactExports.useMemo(
    () => prioritizeForPreview(items ?? [], PREVIEW_COUNT),
    [items]
  );
  async function save(i) {
    if (!isSupabaseConfigured()) {
      toast.error("Supabase is not configured.");
      return;
    }
    try {
      await supabaseService.saveIntelligence(i);
      toast.success("Event saved");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    }
  }
  const disabled = loading || cooldownLeft > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex min-h-[320px] flex-col p-4 lg:min-h-[380px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Live Intelligence Feed",
        subtitle: `Up to ${PREVIEW_COUNT} priority headlines · ${items?.length ?? 0} loaded`,
        right: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: variant(status), children: label(status) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onRefresh,
              disabled,
              title: cooldownLeft > 0 ? `Wait ${cooldownLeft}s` : "Refresh",
              className: "inline-flex items-center gap-1 rounded-md border border-border/60 px-2 py-1 text-[10px] hover:text-primary disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }),
                " Refresh"
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "default", size: "sm", className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/intelligence", children: "View Full Intelligence Feed" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/intelligence", className: "text-[11px] text-muted-foreground hover:text-primary hover:underline", children: "Open monitoring workspace →" })
    ] }),
    !items ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3", children: Array.from({ length: PREVIEW_COUNT }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 animate-pulse rounded-lg border border-border/40 bg-secondary/30" }, i)) }) : preview.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center justify-center rounded-lg border border-dashed border-border/50 p-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "mr-2 h-5 w-5 shrink-0" }),
      " No headlines available right now."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3", children: preview.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col gap-1.5 rounded-lg border border-border/50 bg-secondary/15 p-3 transition-colors hover:border-primary/40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-rose-glow/30 bg-rose-glow/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase text-rose-glow", children: i.severity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/50 px-1.5 py-0.5 text-[9px] uppercase text-muted-foreground", children: i.category }),
            i.country ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground", children: [
              "· ",
              i.country
            ] }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[9px] text-muted-foreground", children: new Date(i.publishedAt).toLocaleTimeString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActive(i), className: "text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-3 text-[12px] font-medium leading-snug hover:text-primary", children: i.title }) }),
          i.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-[10px] text-muted-foreground", children: i.description }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between gap-1 border-t border-border/30 pt-2 text-[10px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-muted-foreground", children: i.source }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActive(i),
                  title: "Details",
                  className: "rounded border border-border/50 p-1 hover:text-primary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" })
                }
              ),
              i.url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: i.url,
                  target: "_blank",
                  rel: "noreferrer",
                  title: "Open source",
                  className: "rounded border border-border/50 p-1 hover:text-primary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                }
              ) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => save(i),
                  title: "Save",
                  className: "rounded border border-primary/40 bg-primary/10 p-1 text-primary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3 w-3" })
                }
              )
            ] })
          ] })
        ]
      },
      i.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntelligenceDetailsModal, { item: active, onClose: () => setActive(null), onSave: save })
  ] });
}
const SEV_COLOR = {
  critical: "border-rose-glow/40 text-rose-glow",
  high: "border-amber-glow/40 text-amber-glow",
  Critical: "border-rose-glow/40 text-rose-glow",
  High: "border-amber-glow/40 text-amber-glow"
};
function CriticalSignalsPanel({ intel, quakes, saved }) {
  const [active, setActive] = reactExports.useState(null);
  const signals = reactExports.useMemo(() => {
    const list = [];
    for (const i of intel) {
      if (i.severity === "critical" || i.severity === "high") {
        list.push({ kind: "intel", item: i, time: new Date(i.publishedAt).getTime() });
      }
    }
    for (const q of quakes) {
      if (q.magnitude >= 5) list.push({ kind: "quake", quake: q, time: q.time });
    }
    for (const a of saved) {
      if (a.severity === "Critical") list.push({ kind: "alert", alert: a, time: a.created_at ? new Date(a.created_at).getTime() : Date.now() });
    }
    return list.sort((a, b) => b.time - a.time).slice(0, 8);
  }, [intel, quakes, saved]);
  async function save(i) {
    if (!isSupabaseConfigured()) {
      toast.error("Supabase is not configured.");
      return;
    }
    try {
      await supabaseService.saveIntelligence(i);
      toast.success("Saved.");
    } catch (e) {
      toast.error(e?.message ?? "Save failed");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Critical Signals",
        subtitle: "Most urgent live events right now",
        right: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-rose-glow" })
      }
    ),
    signals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-dashed border-border/50 p-6 text-center text-xs text-muted-foreground", children: "No critical or high signals detected." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-[420px] overflow-auto pr-1", children: signals.map((s, idx) => {
      if (s.kind === "intel") {
        const i = s.item;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-md border border-border/40 bg-secondary/20 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${SEV_COLOR[i.severity]}`, children: i.severity }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(i), className: "line-clamp-2 text-left text-xs font-medium hover:text-primary", children: i.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
              i.source,
              " · ",
              i.category,
              i.country ? ` · ${i.country}` : "",
              " · ",
              new Date(i.publishedAt).toLocaleTimeString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(i), title: "Details", className: "rounded border border-border/50 p-1 hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }) }),
            i.url && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: i.url, target: "_blank", rel: "noreferrer", title: "Open", className: "rounded border border-border/50 p-1 hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => save(i), title: "Save", className: "rounded border border-primary/40 bg-primary/10 p-1 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3 w-3" }) })
          ] })
        ] }, `i-${i.id}-${idx}`);
      }
      if (s.kind === "quake") {
        const q = s.quake;
        const sev = magnitudeSeverity(q.magnitude);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-md border border-border/40 bg-secondary/20 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${SEV_COLOR[sev]}`, children: sev }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "line-clamp-2 text-xs font-medium", children: [
              "M",
              q.magnitude.toFixed(1),
              " — ",
              q.place
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
              "USGS · earthquake · depth ",
              q.depth.toFixed(1),
              " km · ",
              new Date(q.time).toLocaleTimeString()
            ] })
          ] }),
          q.url && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: q.url, target: "_blank", rel: "noreferrer", title: "Open USGS", className: "rounded border border-border/50 p-1 hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }) })
        ] }, `q-${q.id}`);
      }
      const a = s.alert;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-md border border-border/40 bg-secondary/20 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${SEV_COLOR[a.severity] ?? "border-border/60 text-muted-foreground"}`, children: a.severity }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-2 text-xs font-medium", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
            a.type,
            " · ",
            a.source ?? "saved",
            a.location ? ` · ${a.location}` : ""
          ] })
        ] })
      ] }, `a-${a.id}`);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntelligenceDetailsModal, { item: active, onClose: () => setActive(null), onSave: save })
  ] });
}
const COLORS = [
  "#22d3ee",
  "#f59e0b",
  "#34d399",
  "#a78bfa",
  "#fb7185",
  "#38bdf8",
  "#fbbf24",
  "#facc15",
  "#f472b6",
  "#94a3b8"
];
function CategoryDistributionChart({ items }) {
  const data = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    for (const i of items) m.set(i.category, (m.get(i.category) ?? 0) + 1);
    return Array.from(m.entries()).map(([category, count]) => ({ category, count })).sort((a, b) => b.count - a.count);
  }, [items]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Category Distribution",
        subtitle: "Live intelligence items grouped by category",
        right: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-4 w-4 text-cyan-glow" })
      }
    ),
    data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-dashed border-border/50 p-6 text-center text-xs text-muted-foreground", children: "No data yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data, margin: { top: 8, right: 8, left: -16, bottom: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "category", tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { allowDecimals: false, tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tooltip,
        {
          contentStyle: { background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 },
          cursor: { fill: "hsl(var(--muted) / 0.2)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", radius: [4, 4, 0, 0], children: data.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[i % COLORS.length] }, i)) })
    ] }) }) })
  ] });
}
function WorldActivityTimeline({ intel, quakes, saved }) {
  const rows = reactExports.useMemo(() => {
    const list = [];
    for (const i of intel.slice(0, 30)) list.push({
      id: `i-${i.id}`,
      title: i.title,
      sub: `${i.source} · ${i.category}${i.country ? ` · ${i.country}` : ""}`,
      time: new Date(i.publishedAt).getTime(),
      kind: "intel",
      sev: i.severity
    });
    for (const q of quakes.slice(0, 30)) list.push({
      id: `q-${q.id}`,
      title: `M${q.magnitude.toFixed(1)} — ${q.place}`,
      sub: `USGS · depth ${q.depth.toFixed(1)} km`,
      time: q.time,
      kind: "quake",
      sev: q.magnitude >= 6 ? "critical" : q.magnitude >= 5 ? "high" : q.magnitude >= 4 ? "medium" : "low"
    });
    for (const a of saved.slice(0, 20)) list.push({
      id: `a-${a.id}`,
      title: a.title,
      sub: `${a.type} · ${a.source ?? "saved"}${a.location ? ` · ${a.location}` : ""}`,
      time: a.created_at ? new Date(a.created_at).getTime() : Date.now(),
      kind: "alert",
      sev: a.severity.toLowerCase()
    });
    return list.sort((a, b) => b.time - a.time).slice(0, 20);
  }, [intel, quakes, saved]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "World Activity Timeline",
        subtitle: "Combined live signals — newest first",
        right: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4 text-cyan-glow" })
      }
    ),
    rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-dashed border-border/50 p-6 text-center text-xs text-muted-foreground", children: "No activity yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-[400px] overflow-auto pr-1", children: rows.map((r) => {
      const Icon = r.kind === "intel" ? Newspaper : r.kind === "quake" ? Activity : TriangleAlert;
      const dotColor = r.sev === "critical" ? "bg-rose-glow" : r.sev === "high" ? "bg-amber-glow" : r.sev === "medium" ? "bg-cyan-glow" : "bg-emerald-glow";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-md border border-border/40 bg-secondary/20 px-2.5 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${dotColor}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-2 text-xs font-medium", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[10px] text-muted-foreground", children: r.sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] tabular-nums text-muted-foreground", children: new Date(r.time).toLocaleTimeString() })
      ] }, r.id);
    }) })
  ] });
}
function MapPreview({ earthquakeCount, intelCount, alertCount }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/map", className: "glass-card group relative flex h-full flex-col overflow-hidden p-4 transition-colors hover:border-primary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Global Activity Map",
        subtitle: "Live geo-located events",
        right: /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "Live" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-1 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-40", style: {
        backgroundImage: "radial-gradient(circle at 30% 35%, rgba(34,211,238,0.25), transparent 35%), radial-gradient(circle at 70% 60%, rgba(245,158,11,0.18), transparent 35%), radial-gradient(circle at 50% 80%, rgba(251,113,133,0.18), transparent 35%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "relative h-24 w-24 text-primary/70 transition-transform group-hover:scale-110" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-3 gap-2 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/20 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Quakes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold tabular-nums text-amber-glow", children: earthquakeCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/20 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Intel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold tabular-nums text-cyan-glow", children: intelCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/20 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Alerts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold tabular-nums text-rose-glow", children: alertCount })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-[11px] text-primary group-hover:underline", children: [
      "Open control center ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
    ] })
  ] });
}
const VARIANT = {
  online: "live",
  cached: "neutral",
  cached_live: "live",
  demo: "demo",
  rate_limited: "error",
  error: "error",
  not_configured: "neutral",
  invalid_key: "error",
  fallback: "source",
  checking: "neutral"
};
const LABEL = {
  online: "Online",
  cached: "Cached",
  cached_live: "Cached live data",
  demo: "Demo",
  rate_limited: "Rate limited",
  error: "Error",
  not_configured: "Not configured",
  invalid_key: "Invalid key",
  fallback: "Fallback",
  checking: "Checking…"
};
function ApiHealthPanel() {
  const [rows, setRows] = reactExports.useState([
    { name: "REST Countries", status: "checking" },
    { name: "USGS Earthquake", status: "checking" },
    { name: "GNews Proxy", status: "checking" },
    { name: "OpenWeather", status: "checking" },
    { name: "Supabase", status: "checking" },
    { name: "Mapbox", status: "checking" }
  ]);
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const runChecks = reactExports.useCallback(async () => {
    setRefreshing(true);
    const next = [];
    try {
      const c = await getAllCountries();
      next.push({ name: "REST Countries", status: c.length > 0 ? "online" : "error", lastOk: Date.now(), detail: `${c.length} countries` });
    } catch (e) {
      next.push({ name: "REST Countries", status: "error", detail: e?.message });
    }
    try {
      const q = await getEarthquakes("day");
      next.push({ name: "USGS Earthquake", status: "online", lastOk: Date.now(), detail: `${q.length} events` });
    } catch (e) {
      next.push({ name: "USGS Earthquake", status: "error", detail: e?.message });
    }
    try {
      const r = await fetchIntelligence({ max: 10, probe: true });
      const map = {
        live: "online",
        cached: "cached_live",
        demo: "demo",
        rate_limited: "rate_limited",
        error: "error"
      };
      next.push({
        name: "GNews Proxy",
        status: map[r.status],
        lastOk: r.cachedAt,
        detail: r.status === "cached" ? `Serving cached live data · ${r.items.length} items` : r.message ?? `${r.items.length} items via /api/public/gnews-proxy`
      });
    } catch (e) {
      next.push({ name: "GNews Proxy", status: "error", detail: e?.message });
    }
    if (!hasWeatherKey()) {
      next.push({ name: "OpenWeather", status: "not_configured", detail: "Add VITE_OPENWEATHER_API_KEY to enable live weather. Demo fallback in use." });
    } else {
      try {
        const apiKey = "d74e5be6ef27ba3a1e7c2d1cea7ada47";
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`);
        if (res.status === 401) next.push({ name: "OpenWeather", status: "invalid_key", detail: "API key rejected (401). Demo weather in use." });
        else if (res.status === 429) next.push({ name: "OpenWeather", status: "rate_limited" });
        else if (!res.ok) next.push({ name: "OpenWeather", status: "error", detail: `HTTP ${res.status}` });
        else next.push({ name: "OpenWeather", status: "online", lastOk: Date.now() });
      } catch (e) {
        next.push({ name: "OpenWeather", status: "error", detail: e?.message });
      }
    }
    if (!isSupabaseConfigured()) {
      next.push({
        name: "Supabase",
        status: "not_configured",
        detail: "Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY, then restart `npm run dev`."
      });
    } else {
      try {
        const meta = getSupabaseViteEnvSummary();
        const probe = await supabaseService.testSavedDataConnection();
        const rowSummary = probe.rows.map((r) => r.error ? `${r.table}: ${r.error}` : `${r.table}=${r.count}`).join(" · ");
        next.push({
          name: "Supabase",
          status: probe.ok ? "online" : "error",
          lastOk: Date.now(),
          detail: probe.ok ? `ONLINE · ref ${meta.projectRef ?? "?"} · ${rowSummary}` : `ref ${meta.projectRef ?? "?"} — ${probe.message}`
        });
      } catch (e) {
        next.push({ name: "Supabase", status: "error", detail: e?.message });
      }
    }
    const hasMapbox = Boolean("pk.eyJ1IjoibHVjYXBvY28iLCJhIjoiY21wMWsycTE1MDRiejJxcjFoN3d0Nmt5NyJ9.MQ-Nu5ZbYdCdBagfpinCKQ");
    next.push({
      name: "Mapbox",
      status: hasMapbox ? "online" : "not_configured",
      lastOk: hasMapbox ? Date.now() : void 0,
      detail: hasMapbox ? "Token configured — Mapbox GL globe active" : "Add VITE_MAPBOX_TOKEN to render the map. Clustering and custom styles require your own token."
    });
    setRows(next);
    setRefreshing(false);
  }, []);
  reactExports.useEffect(() => {
    runChecks();
  }, [runChecks]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "API Health",
        subtitle: "Live status of all integrated data sources",
        right: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => runChecks(),
              disabled: refreshing,
              title: "Re-check all data sources",
              className: "inline-flex items-center gap-1 rounded-md border border-border/60 px-2 py-1 text-[10px] hover:text-primary disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3 w-3 ${refreshing ? "animate-spin" : ""}` }),
                " Refresh"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-rose-glow" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-md border border-border/40 bg-secondary/20 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", children: r.name }),
          r.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[10px] text-muted-foreground", children: r.detail })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tabular-nums text-muted-foreground", children: r.lastOk ? new Date(r.lastOk).toLocaleTimeString() : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: VARIANT[r.status], children: LABEL[r.status] })
      ] })
    ] }, r.name)) })
  ] });
}
const VIDEO_SOURCES = [
  {
    id: "iss-hd",
    title: "NASA · ISS Live HD Earth View",
    description: "Live high-definition view of Earth from the International Space Station.",
    category: "space",
    region: "Low Earth Orbit",
    provider: "NASA",
    embedUrl: "https://www.youtube.com/embed/H999s0P1Er0?autoplay=1&mute=1",
    sourceUrl: "https://www.youtube.com/@NASA",
    isLive: true
  },
  {
    id: "skynews",
    title: "Sky News · Live World News",
    description: "Continuous breaking news coverage from Sky News.",
    category: "news",
    region: "United Kingdom",
    provider: "Sky News",
    embedUrl: "https://www.youtube.com/embed/YDvsBbKfLPA?autoplay=1&mute=1",
    sourceUrl: "https://www.youtube.com/@SkyNews",
    isLive: true
  },
  {
    id: "dwnews",
    title: "DW News · Live",
    description: "Deutsche Welle English live international news.",
    category: "news",
    region: "Germany",
    provider: "DW News",
    embedUrl: "https://www.youtube.com/embed/pP6kJVZAA0o?autoplay=1&mute=1",
    sourceUrl: "https://www.youtube.com/@dwnews",
    isLive: true
  },
  {
    id: "alj",
    title: "Al Jazeera English · Live",
    description: "Live international news from Al Jazeera English.",
    category: "news",
    region: "Qatar",
    provider: "Al Jazeera",
    embedUrl: "https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1&mute=1",
    sourceUrl: "https://www.youtube.com/@aljazeeraenglish",
    isLive: true
  },
  {
    id: "noaa-goes",
    title: "NOAA · GOES-East Weather Loop",
    description: "Latest geostationary satellite imagery of the Western Hemisphere.",
    category: "weather",
    region: "Americas",
    provider: "NOAA",
    embedUrl: "https://www.youtube.com/embed/kGmd5pKE3kE?autoplay=1&mute=1",
    sourceUrl: "https://www.star.nesdis.noaa.gov/GOES/",
    isLive: false
  },
  {
    id: "times-square",
    title: "EarthCam · Times Square",
    description: "24/7 city camera at the Crossroads of the World.",
    category: "city",
    region: "New York, USA",
    provider: "EarthCam",
    embedUrl: "https://www.youtube.com/embed/AdUw5RdyZxI?autoplay=1&mute=1",
    sourceUrl: "https://www.earthcam.com/usa/newyork/timessquare/",
    isLive: true
  },
  {
    id: "shibuya",
    title: "Shibuya Crossing · Live",
    description: "Live view of Tokyo's famous Shibuya scramble crossing.",
    category: "city",
    region: "Tokyo, Japan",
    provider: "ANN News",
    embedUrl: "https://www.youtube.com/embed/3kPH7kTphnE?autoplay=1&mute=1",
    sourceUrl: "https://www.youtube.com/@ANNnewsCH",
    isLive: true
  },
  {
    id: "volcano-iceland",
    title: "Iceland Volcano Watch",
    description: "Live monitoring feed of Reykjanes peninsula volcanic activity.",
    category: "disaster",
    region: "Iceland",
    provider: "RÚV",
    embedUrl: "https://www.youtube.com/embed/nVKjLZEYRrU?autoplay=1&mute=1",
    sourceUrl: "https://www.ruv.is/",
    isLive: true
  }
];
const CATEGORIES = [
  { k: "all", label: "All" },
  { k: "news", label: "News" },
  { k: "space", label: "Space" },
  { k: "weather", label: "Weather" },
  { k: "city", label: "Cities" },
  { k: "disaster", label: "Disaster" },
  { k: "education", label: "Education" }
];
function LiveVideoPanel() {
  const [selectedId, setSelectedId] = reactExports.useState(VIDEO_SOURCES[0]?.id ?? "");
  const [cat, setCat] = reactExports.useState("all");
  const [iframeLoaded, setIframeLoaded] = reactExports.useState(false);
  const [iframeError, setIframeError] = reactExports.useState(false);
  const sources = reactExports.useMemo(
    () => cat === "all" ? VIDEO_SOURCES : VIDEO_SOURCES.filter((s) => s.category === cat),
    [cat]
  );
  const selected = VIDEO_SOURCES.find((s) => s.id === selectedId) ?? sources[0];
  function pick(s) {
    if (s.id === selectedId) return;
    setSelectedId(s.id);
    setIframeLoaded(false);
    setIframeError(false);
  }
  function openFullscreen() {
    if (!selected) return;
    window.open(selected.sourceUrl, "_blank", "noopener,noreferrer");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Live Video Monitor",
        subtitle: "Public situational awareness feeds — only the selected stream loads",
        right: /* @__PURE__ */ jsxRuntimeExports.jsx(TvMinimal, { className: "h-4 w-4 text-cyan-glow" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex flex-wrap gap-1.5", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCat(c.k),
        className: `rounded-md border px-2 py-1 text-[10px] uppercase tracking-wider transition-colors ${cat === c.k ? "border-primary/40 bg-primary/10 text-primary" : "border-border/60 text-muted-foreground hover:text-foreground"}`,
        children: c.label
      },
      c.k
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-black", children: selected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          !iframeLoaded && !iframeError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex animate-pulse items-center justify-center text-xs text-muted-foreground", children: [
            "Loading ",
            selected.provider,
            "…"
          ] }),
          iframeError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Embed blocked by provider." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: selected.sourceUrl,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
                  " Open in new tab"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              src: selected.embedUrl,
              title: selected.title,
              loading: "lazy",
              onLoad: () => setIframeLoaded(true),
              onError: () => setIframeError(true),
              allow: "accelerometer; encrypted-media; picture-in-picture",
              allowFullScreen: true,
              className: "h-full w-full"
            },
            selected.id
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-xs text-muted-foreground", children: "No source selected" }) }),
        selected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              selected.isLive && /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "Live" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "source", children: selected.provider }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate text-[11px] text-muted-foreground", children: [
                selected.region,
                " · ",
                selected.category
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 truncate text-sm font-medium", children: selected.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-[11px] text-muted-foreground", children: selected.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: openFullscreen,
                title: "Open in new tab",
                className: "inline-flex items-center gap-1 rounded-md border border-border/60 px-2 py-1.5 text-[11px] hover:text-primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3.5 w-3.5" }),
                  " Fullscreen"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: selected.sourceUrl,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/10 px-2 py-1.5 text-[11px] text-primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
                  " Open source"
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[420px] space-y-1.5 overflow-auto pr-1", children: [
        sources.map((s) => {
          const active = s.id === selected?.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => pick(s),
              className: `group w-full rounded-md border p-2 text-left transition-colors ${active ? "border-primary/50 bg-primary/10" : "border-border/50 bg-secondary/20 hover:border-primary/30"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: `h-3.5 w-3.5 shrink-0 ${active ? "text-primary" : "text-muted-foreground"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs font-medium", children: s.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-[10px] text-muted-foreground", children: [
                    s.region,
                    " · ",
                    s.provider
                  ] })
                ] }),
                s.isLive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded-full bg-emerald-glow/20 px-1.5 py-0.5 text-[9px] font-semibold uppercase text-emerald-glow", children: "Live" })
              ] })
            },
            s.id
          );
        }),
        sources.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-dashed border-border/50 p-3 text-center text-[11px] text-muted-foreground", children: "No sources in this category." })
      ] })
    ] }),
    false
  ] });
}
let cached = null;
let inFlight = null;
const TTL = 6e4;
async function getDashboardSnapshot(force = false) {
  if (!force && cached && Date.now() - cached.fetchedAt < TTL) return cached;
  if (inFlight) return inFlight;
  inFlight = (async () => {
    const [news, quakes, countries, savedAlerts, savedCountries] = await Promise.all([
      /** Load up to 30 for risk / charts; LiveIntelligencePanel shows top 12. */
      fetchIntelligence({ limit: 30, force }),
      getEarthquakes("day").catch(() => []),
      getAllCountries().then((c) => c.length).catch(() => null),
      isSupabaseConfigured() ? supabaseService.listSavedAlerts().catch(() => []) : Promise.resolve([]),
      isSupabaseConfigured() ? supabaseService.listSavedCountries().then((c) => c.length).catch(() => null) : Promise.resolve(null)
    ]);
    const risks = buildCountryRiskIndex({ intel: news.items, quakes, saved: savedAlerts });
    const snap = {
      news,
      newsStatus: news.status,
      quakes,
      intel: news.items,
      countryCount: countries,
      savedAlerts,
      savedCountriesCount: savedCountries,
      risks,
      fetchedAt: Date.now()
    };
    cached = snap;
    return snap;
  })();
  try {
    return await inFlight;
  } finally {
    inFlight = null;
  }
}
function invalidateDashboardCache() {
  cached = null;
}
const REFRESH_COOLDOWN_MS = 6e4;
function DashboardPage() {
  const {
    isSimple
  } = useViewMode();
  const [snap, setSnap] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [updated, setUpdated] = reactExports.useState(/* @__PURE__ */ new Date());
  const [cooldownUntil, setCooldownUntil] = reactExports.useState(0);
  const [now, setNow] = reactExports.useState(Date.now());
  reactExports.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(t);
  }, []);
  async function load(force = false) {
    setLoading(true);
    try {
      if (force) invalidateDashboardCache();
      const s = await getDashboardSnapshot(force);
      setSnap(s);
      setUpdated(/* @__PURE__ */ new Date());
    } catch (e) {
      toast.error(e?.message ?? "Failed to refresh");
    } finally {
      setLoading(false);
    }
  }
  reactExports.useEffect(() => {
    load();
  }, []);
  function onRefresh() {
    if (loading) return;
    if (now < cooldownUntil) {
      toast.message("Please wait before refreshing again.");
      return;
    }
    setCooldownUntil(Date.now() + REFRESH_COOLDOWN_MS);
    load(true);
  }
  const cooldownLeft = Math.max(0, Math.ceil((cooldownUntil - now) / 1e3));
  const quakes = snap?.quakes ?? [];
  const intel = snap?.intel ?? [];
  const saved = snap?.savedAlerts ?? [];
  const today = quakes.length;
  const maxMag = quakes.length ? Math.max(...quakes.map((q) => q.magnitude)) : 0;
  const intelCounts = intel.reduce((r, i) => {
    r[i.severity]++;
    return r;
  }, {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardStatusBar, { status: snap?.newsStatus ?? "demo", updated, loading, cooldownLeft, onRefresh }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Countries monitored", value: snap?.countryCount ?? "—", hint: "REST Countries API", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-4 w-4" }), accent: "cyan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Earthquakes today", value: snap ? today : "—", hint: "USGS feed", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }), accent: "amber" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Highest magnitude", value: snap ? maxMag.toFixed(1) : "—", hint: "USGS feed", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }), accent: "rose" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Intel critical+high", value: snap ? intelCounts.critical + intelCounts.high : "—", hint: snap?.newsStatus === "live" ? "GNews · Live" : (snap?.newsStatus ?? "—").toString(), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-4 w-4" }), accent: "rose" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Saved countries", value: snap?.savedCountriesCount ?? "—", hint: "Backend", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4" }), accent: "emerald" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Active alerts", value: saved.length, hint: "Saved", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }), accent: "amber" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 xl:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPreview, { earthquakeCount: today, intelCount: intel.length, alertCount: saved.length }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveIntelligencePanel, { items: snap ? intel : null, status: snap?.newsStatus ?? "demo", loading, cooldownLeft, onRefresh }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 xl:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Country Risk", subtitle: "Top 5 by combined risk", right: /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "neutral", children: "0–100" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: !snap ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 animate-pulse rounded bg-secondary/40" }) : snap.risks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Computing risk index…" }) : snap.risks.slice(0, 5).map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(RiskScoreCard, { rank: idx + 1, risk: r }, r.country)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/intelligence", className: "mt-2 inline-block text-[11px] text-primary hover:underline", children: "See full index →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LiveVideoPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CriticalSignalsPanel, { intel, quakes, saved })
    ] }),
    !isSimple && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Earthquake magnitudes — last 24h", subtitle: "Distribution by Richter bucket", right: /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "source", children: "USGS" }) }),
        snap ? /* @__PURE__ */ jsxRuntimeExports.jsx(EarthquakeMagnitudeChart, { data: quakes }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 animate-pulse rounded bg-secondary/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryDistributionChart, { items: intel })
    ] }),
    !isSimple && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "api-health", className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ApiHealthPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorldActivityTimeline, { intel, quakes, saved })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6", children: [{
      to: "/ai-news",
      label: "Ask Global Pulse AI",
      icon: Sparkles
    }, {
      to: "/reports",
      label: "Generate Report",
      icon: FileText
    }, {
      to: "/intelligence",
      label: "Intelligence Feed",
      icon: Newspaper
    }, {
      to: "/map",
      label: "Live World Map",
      icon: Earth
    }, {
      to: "/countries",
      label: "Countries",
      icon: Flag
    }, {
      to: "/earthquakes",
      label: "Earthquakes",
      icon: Activity
    }, {
      to: "/alerts",
      label: "Global Alerts",
      icon: TriangleAlert
    }].map((q) => {
      const I = q.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: q.to, className: "glass-card group flex items-center justify-between p-4 hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: q.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary" })
      ] }, q.to);
    }) })
  ] });
}
export {
  DashboardPage as component
};
