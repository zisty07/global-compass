import { W as jsxRuntimeExports } from "./server-BwRcFVCS.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./generateCategoricalChart-Dk4_CZTB.js";
import { B as BarChart, C as CartesianGrid } from "./BarChart-xBCqP34V.js";
function EarthquakeMagnitudeChart({ data }) {
  const buckets = [0, 1, 2, 3, 4, 5, 6, 7].map((m) => ({
    range: `${m}-${m + 1}`,
    count: data.filter((d) => d.magnitude >= m && d.magnitude < m + 1).length
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: buckets, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeOpacity: 0.1, vertical: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "range", stroke: "oklch(0.7 0.03 240)", fontSize: 11 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.7 0.03 240)", fontSize: 11 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "oklch(0.21 0.03 250)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", fill: "var(--color-chart-1)", radius: [4, 4, 0, 0] })
  ] }) }) });
}
export {
  EarthquakeMagnitudeChart as E
};
