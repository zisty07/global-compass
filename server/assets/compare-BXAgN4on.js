import { W as jsxRuntimeExports, r as reactExports } from "./server-BwRcFVCS.js";
import { S as SearchInput } from "./SearchInput-Bhha1PNK.js";
import { D as DataBadge, L as LoadingSpinner, E as ErrorMessage } from "./router-BTYIQEhE.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./generateCategoricalChart-Dk4_CZTB.js";
import { B as BarChart, C as CartesianGrid } from "./BarChart-xBCqP34V.js";
import { s as searchCountryByName } from "./countriesApi-DVV8MQii.js";
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
function CountryComparisonChart({ data, aName, bName }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeOpacity: 0.1, vertical: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "label", stroke: "oklch(0.7 0.03 240)", fontSize: 11 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.7 0.03 240)", fontSize: 11 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "oklch(0.21 0.03 250)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "a", name: aName, fill: "var(--color-chart-1)", radius: [4, 4, 0, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "b", name: bName, fill: "var(--color-chart-2)", radius: [4, 4, 0, 0] })
  ] }) }) });
}
function ComparePage() {
  const [aName, setAName] = reactExports.useState("Romania");
  const [bName, setBName] = reactExports.useState("Germany");
  const [a, setA] = reactExports.useState(null);
  const [b, setB] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  async function run() {
    setLoading(true);
    setError(null);
    try {
      const [ra, rb] = await Promise.all([searchCountryByName(aName), searchCountryByName(bName)]);
      if (!ra.length || !rb.length) {
        setError("One of the countries was not found.");
        return;
      }
      setA(ra[0]);
      setB(rb[0]);
    } catch (e) {
      setError(e.message ?? "Failed");
    } finally {
      setLoading(false);
    }
  }
  const insight = (() => {
    if (!a || !b) return null;
    const popDiff = (a.population ?? 0) - (b.population ?? 0);
    const densA = (a.population ?? 0) / Math.max(a.area ?? 1, 1);
    const densB = (b.population ?? 0) / Math.max(b.area ?? 1, 1);
    const larger = popDiff > 0 ? a.name.common : b.name.common;
    const denser = densA > densB ? a.name.common : b.name.common;
    return `${larger} has a larger population, while ${denser} has a higher population density.`;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Compare Countries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Side-by-side data and charts" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "source", children: "REST Countries API" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { value: aName, onChange: setAName, placeholder: "Country A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { value: bName, onChange: setBName, placeholder: "Country B" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: run, className: "rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-xs text-primary", children: "Compare" }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, { message: error }),
    a && b && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: [a, b].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          c.flags?.svg && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.flags.svg, alt: "", className: "h-10 w-14 rounded object-cover border border-border/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: c.name.common }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              c.capital?.[0] ?? "—",
              " · ",
              c.region
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Population", v: c.population?.toLocaleString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Area", v: c.area ? `${c.area.toLocaleString()} km²` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Density", v: c.area && c.population ? `${(c.population / c.area).toFixed(1)} / km²` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Languages", v: c.languages ? Object.values(c.languages).join(", ") : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Currencies", v: c.currencies ? Object.values(c.currencies).map((x) => x.name).join(", ") : "—" })
        ] })
      ] }, c.name.common)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-wider text-muted-foreground", children: "Visual comparison" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountryComparisonChart, { aName: a.name.common, bName: b.name.common, data: [{
          label: "Population (M)",
          a: Math.round((a.population ?? 0) / 1e6),
          b: Math.round((b.population ?? 0) / 1e6)
        }, {
          label: "Area (k km²)",
          a: Math.round((a.area ?? 0) / 1e3),
          b: Math.round((b.area ?? 0) / 1e3)
        }, {
          label: "Density",
          a: Math.round((a.population ?? 0) / Math.max(a.area ?? 1, 1)),
          b: Math.round((b.population ?? 0) / Math.max(b.area ?? 1, 1))
        }] })
      ] }),
      insight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-4 text-sm text-foreground/90", children: insight })
    ] })
  ] });
}
function Cell({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/20 px-2.5 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5", children: v ?? "—" })
  ] });
}
export {
  ComparePage as component
};
