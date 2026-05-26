import { r as reactExports, W as jsxRuntimeExports } from "./server-BwRcFVCS.js";
import { v as getEarthquakes, y as magnitudeSeverity, w as fetchIntelligence, i as isSupabaseConfigured, s as supabaseService, D as DataBadge, L as LoadingSpinner, d as SeverityBadge, k as Bookmark, t as toast } from "./router-BTYIQEhE.js";
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
const demoAlerts = [
  {
    id: "demo-1",
    title: "Heat advisory — Southern Europe",
    type: "weather",
    severity: "Medium",
    location: "Mediterranean basin",
    description: "Temperatures above seasonal norms (demo data).",
    source: "Demo"
  },
  {
    id: "demo-2",
    title: "Grid stress reported",
    type: "infrastructure",
    severity: "Low",
    location: "Texas, USA",
    description: "Sample infrastructure alert for presentation (demo data).",
    source: "Demo"
  }
];
const TYPES = ["all", "earthquake", "intelligence", "weather", "infrastructure", "saved"];
const intelToSeverity = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low"
};
function AlertsPage() {
  const [alerts, setAlerts] = reactExports.useState(null);
  const [saved, setSaved] = reactExports.useState([]);
  const [filter, setFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    (async () => {
      const list = [];
      try {
        const quakes = await getEarthquakes("day");
        for (const q of quakes.filter((q2) => q2.magnitude >= 4.5).slice(0, 30)) {
          list.push({
            id: q.id,
            title: `M${q.magnitude.toFixed(1)} — ${q.place}`,
            type: "earthquake",
            severity: magnitudeSeverity(q.magnitude),
            location: `${q.latitude.toFixed(2)}, ${q.longitude.toFixed(2)}`,
            description: `Depth ${q.depth.toFixed(1)} km`,
            source: "USGS",
            time: q.time
          });
        }
      } catch {
      }
      try {
        const news = await fetchIntelligence({
          max: 30
        });
        for (const n of news.items.filter((n2) => n2.severity === "high" || n2.severity === "critical")) {
          list.push({
            id: `intel-${n.id}`,
            title: n.title,
            type: "intelligence",
            severity: intelToSeverity[n.severity],
            location: n.country,
            description: n.description,
            source: n.isLive ? n.source : "Demo"
          });
        }
      } catch {
      }
      for (const d of demoAlerts) list.push(d);
      setAlerts(list);
      if (isSupabaseConfigured()) {
        try {
          setSaved(await supabaseService.listSavedAlerts());
        } catch {
        }
      }
    })();
  }, []);
  const filtered = reactExports.useMemo(() => {
    if (!alerts) return [];
    if (filter === "saved") return [];
    if (filter === "all") return alerts;
    return alerts.filter((a) => a.type === filter);
  }, [alerts, filter]);
  async function persist(a) {
    if (!isSupabaseConfigured()) {
      toast.error("Connect Supabase to save alerts.");
      return;
    }
    try {
      await supabaseService.saveAlert({
        title: a.title,
        type: a.type,
        severity: a.severity,
        location: a.location ?? null,
        description: a.description ?? null,
        source: a.source
      });
      toast.success("Saved to alerts.");
      setSaved(await supabaseService.listSavedAlerts());
    } catch (e) {
      toast.error(e.message ?? "Save failed");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Global Alerts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Significant earthquakes (M≥4.5), saved alerts and demo signals" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "source", children: "USGS · Supabase" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card flex flex-wrap gap-2 p-3 text-xs", children: TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(t), className: `rounded-md border px-3 py-1.5 capitalize ${filter === t ? "border-primary/40 bg-primary/10 text-primary" : "border-border/60 text-muted-foreground"}`, children: t }, t)) }),
    !alerts && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}),
    filter === "saved" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: saved.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No saved alerts." }) : saved.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-wrap items-center justify-between gap-2 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: s.severity }),
          " ",
          s.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
          s.type,
          " · ",
          s.source,
          " · ",
          s.location ?? "—"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "source", children: "Supabase" })
    ] }, s.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      filtered.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-wrap items-center justify-between gap-2 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: a.severity }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: a.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[11px] text-muted-foreground", children: [
            a.type,
            " · ",
            a.source,
            a.location ? ` · ${a.location}` : "",
            a.description ? ` · ${a.description}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: a.source === "Demo" ? "demo" : "source", children: a.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => persist(a), className: "inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3 w-3" }),
            " Save"
          ] })
        ] })
      ] }, a.id)),
      alerts && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No alerts for this filter." })
    ] })
  ] });
}
export {
  AlertsPage as component
};
