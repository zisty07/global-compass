import { r as reactExports, W as jsxRuntimeExports } from "./server-BwRcFVCS.js";
import { v as getEarthquakes, D as DataBadge, E as ErrorMessage, L as LoadingSpinner, y as magnitudeSeverity, d as SeverityBadge, k as Bookmark, m as ExternalLink, i as isSupabaseConfigured, t as toast, s as supabaseService } from "./router-BTYIQEhE.js";
import { E as EarthquakeMagnitudeChart } from "./EarthquakeMagnitudeChart-n1oHgYd9.js";
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
import "./generateCategoricalChart-Dk4_CZTB.js";
import "./BarChart-xBCqP34V.js";
function EarthquakesPage() {
  const [range, setRange] = reactExports.useState("day");
  const [data, setData] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [minMag, setMinMag] = reactExports.useState(0);
  const [sort, setSort] = reactExports.useState("new");
  const [highOnly, setHighOnly] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setData(null);
    setError(null);
    getEarthquakes(range).then(setData).catch((e) => setError(e.message ?? "Failed"));
  }, [range]);
  const filtered = reactExports.useMemo(() => {
    if (!data) return [];
    let arr = data.filter((q) => q.magnitude >= minMag);
    if (highOnly) arr = arr.filter((q) => q.magnitude >= 5);
    arr = arr.sort((a, b) => sort === "new" ? b.time - a.time : b.magnitude - a.magnitude);
    return arr;
  }, [data, minMag, sort, highOnly]);
  async function saveAsAlert(q) {
    if (!isSupabaseConfigured()) {
      toast.error("Connect Supabase to save alerts.");
      return;
    }
    try {
      await supabaseService.saveAlert({
        title: `M${q.magnitude.toFixed(1)} — ${q.place}`,
        type: "earthquake",
        severity: magnitudeSeverity(q.magnitude),
        location: `${q.latitude.toFixed(3)},${q.longitude.toFixed(3)}`,
        description: `Depth ${q.depth.toFixed(1)} km · ${new Date(q.time).toLocaleString()}`,
        source: "USGS"
      });
      toast.success("Saved to alerts.");
    } catch (e) {
      toast.error(e.message ?? "Save failed");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Earthquakes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Live seismic data from USGS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "source", children: "USGS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-wrap items-center gap-2 p-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-md border border-border/60 p-0.5", children: ["day", "week"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setRange(r), className: `rounded px-3 py-1 ${range === r ? "bg-primary/10 text-primary" : "text-muted-foreground"}`, children: [
        "Last ",
        r
      ] }, r)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2", children: [
        "Min magnitude",
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "0.5", value: minMag, onChange: (e) => setMinMag(parseFloat(e.target.value) || 0), className: "w-16 rounded border border-border/60 bg-background/60 px-2 py-1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSort("new"), className: `rounded-md border px-3 py-1 ${sort === "new" ? "border-primary/40 text-primary" : "border-border/60 text-muted-foreground"}`, children: "Newest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSort("mag"), className: `rounded-md border px-3 py-1 ${sort === "mag" ? "border-primary/40 text-primary" : "border-border/60 text-muted-foreground"}`, children: "Highest magnitude" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHighOnly((v) => !v), className: `rounded-md border px-3 py-1 ${highOnly ? "border-amber-glow/40 text-amber-glow" : "border-border/60 text-muted-foreground"}`, children: "High severity only" })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, { message: error }),
    !data && !error && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}),
    data && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-wider text-muted-foreground", children: "Magnitude distribution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EarthquakeMagnitudeChart, { data: filtered })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        filtered.slice(0, 60).map((q) => {
          const sev = magnitudeSeverity(q.magnitude);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-wrap items-center justify-between gap-3 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold tabular-nums text-amber-glow", children: [
                  "M",
                  q.magnitude.toFixed(1)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: sev }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-sm", children: q.place })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[11px] text-muted-foreground", children: [
                new Date(q.time).toLocaleString(),
                " · depth ",
                q.depth.toFixed(1),
                " km · ",
                q.latitude.toFixed(2),
                ", ",
                q.longitude.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => saveAsAlert(q), className: "inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3 w-3" }),
                " Save alert"
              ] }),
              q.url && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: q.url, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 px-2.5 py-1 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                " USGS"
              ] })
            ] })
          ] }, q.id);
        }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No earthquakes match your filters." })
      ] })
    ] })
  ] });
}
export {
  EarthquakesPage as component
};
