import { r as reactExports, W as jsxRuntimeExports } from "./server-BwRcFVCS.js";
import { c as createLucideIcon, g as getSupabaseViteEnvSummary, s as supabaseService, t as toast, b as EmptyState, R as RefreshCw, D as DataBadge, S as SectionHeader, L as LoadingSpinner, d as SeverityBadge, i as isSupabaseConfigured } from "./router-BTYIQEhE.js";
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
    { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3", key: "1ub6xw" }
  ],
  ["path", { d: "m16 2 6 6", key: "1gw87d" }],
  ["path", { d: "M12 16H4", key: "1cjfip" }]
];
const TestTubeDiagonal = createLucideIcon("test-tube-diagonal", __iconNode);
function SavedPage() {
  const [countries, setCountries] = reactExports.useState(null);
  const [alerts, setAlerts] = reactExports.useState(null);
  const [intel, setIntel] = reactExports.useState(null);
  const [logs, setLogs] = reactExports.useState(null);
  const [listRefreshing, setListRefreshing] = reactExports.useState(false);
  const [testBusy, setTestBusy] = reactExports.useState(false);
  const [lastRefreshIso, setLastRefreshIso] = reactExports.useState(null);
  const [tableCounts, setTableCounts] = reactExports.useState(null);
  const configured = isSupabaseConfigured();
  const envMeta = getSupabaseViteEnvSummary();
  const refreshDebugCounts = reactExports.useCallback(async () => {
    return;
  }, [configured]);
  const refreshListsFromSupabase = reactExports.useCallback(async () => {
    if (!configured) return;
    setListRefreshing(true);
    try {
      const [c, a, i, l] = await Promise.all([supabaseService.listSavedCountries(), supabaseService.listSavedAlerts(), supabaseService.listSavedIntelligence(), supabaseService.listLogs()]);
      setCountries(c);
      setAlerts(a);
      setIntel(i);
      setLogs(l);
      setLastRefreshIso((/* @__PURE__ */ new Date()).toISOString());
      await refreshDebugCounts();
    } catch (e) {
      toast.error(e?.message ?? "Failed to load saved data from Supabase");
    } finally {
      setListRefreshing(false);
    }
  }, [configured, refreshDebugCounts]);
  reactExports.useEffect(() => {
    void refreshListsFromSupabase();
  }, [refreshListsFromSupabase]);
  async function testConnection() {
    setTestBusy(true);
    try {
      const r = await supabaseService.testSavedDataConnection();
      if (r.ok) toast.success(r.message);
      else toast.error(r.message);
      await refreshDebugCounts();
    } catch (e) {
      toast.error(e?.message ?? "Supabase test failed");
    } finally {
      setTestBusy(false);
    }
  }
  if (!configured) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Supabase is not configured yet", hint: "Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env, then restart the dev server (Ctrl+C → npm run dev) and hard-refresh." });
  }
  async function delCountry(c) {
    try {
      await supabaseService.deleteSavedCountry(c.id, c.country_name);
      toast.success("Removed.");
      await refreshListsFromSupabase();
    } catch (e) {
      toast.error(e.message ?? "Delete failed");
    }
  }
  async function delAlert(a) {
    try {
      await supabaseService.deleteSavedAlert(a.id, a.title);
      toast.success("Removed.");
      await refreshListsFromSupabase();
    } catch (e) {
      toast.error(e.message ?? "Delete failed");
    }
  }
  async function delIntel(i) {
    try {
      await supabaseService.deleteSavedIntelligence(i.id, i.title);
      toast.success("Removed.");
      await refreshListsFromSupabase();
    } catch (e) {
      toast.error(e.message ?? "Delete failed");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Saved Data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Loaded only from Supabase (no local mock).",
          " ",
          envMeta.projectRef ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground/80", children: [
            "ref ",
            envMeta.projectRef
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600", children: "URL host is not *.supabase.co — check VITE_SUPABASE_URL" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: listRefreshing, onClick: () => void refreshListsFromSupabase(), className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-3 py-1.5 text-[11px] hover:bg-secondary disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${listRefreshing ? "animate-spin" : ""}` }),
          "Refresh Supabase data"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: testBusy, onClick: () => void testConnection(), className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-3 py-1.5 text-[11px] hover:bg-secondary disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TestTubeDiagonal, { className: "h-3.5 w-3.5" }),
          "Test Supabase connection"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "Supabase" })
      ] })
    ] }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Saved Countries", subtitle: countries ? `${countries.length} entries` : "" }),
      !countries ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) : countries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No saved countries yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 md:grid-cols-2", children: countries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex items-center gap-3 p-3", children: [
        c.flag_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.flag_url, alt: "", className: "h-8 w-12 rounded border border-border/60 object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-sm font-medium", children: [
            c.country_name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              "(",
              c.country_code ?? "—",
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-[11px] text-muted-foreground", children: [
            c.capital ?? "—",
            " · ",
            c.region ?? "—",
            " · ",
            c.population?.toLocaleString() ?? "—"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: c.created_at && new Date(c.created_at).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => delCountry(c), className: "rounded-md border border-rose-glow/30 px-2 py-1 text-rose-glow hover:bg-rose-glow/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
      ] }, c.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Saved Alerts", subtitle: alerts ? `${alerts.length} entries` : "" }),
      !alerts ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) : alerts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No saved alerts yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-wrap items-center justify-between gap-2 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: a.severity }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: a.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            a.type,
            " · ",
            a.source ?? "—",
            " · ",
            a.location ?? "—",
            " ·",
            " ",
            a.created_at && new Date(a.created_at).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => delAlert(a), className: "rounded-md border border-rose-glow/30 px-2 py-1 text-rose-glow hover:bg-rose-glow/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
      ] }, a.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Saved Intelligence", subtitle: intel ? `${intel.length} entries` : "" }),
      !intel ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) : intel.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No saved intelligence yet", hint: "Open the Intelligence Feed and click Save on any item." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: intel.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-wrap items-center justify-between gap-2 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground", children: i.category ?? "general" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: (i.severity ?? "low").charAt(0).toUpperCase() + (i.severity ?? "low").slice(1) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: i.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-[11px] text-muted-foreground", children: [
            i.source ?? "—",
            " · ",
            i.country ?? "—",
            " ·",
            " ",
            i.published_at && new Date(i.published_at).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          i.url && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: i.url, target: "_blank", rel: "noreferrer", className: "rounded-md border border-border/60 px-2 py-1 text-[10px] text-muted-foreground hover:text-foreground", children: "Open" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => delIntel(i), className: "rounded-md border border-rose-glow/30 px-2 py-1 text-rose-glow hover:bg-rose-glow/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
        ] })
      ] }, i.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Project Logs", subtitle: "Recent activity audit trail" }),
      !logs ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) : logs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No activity yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card max-h-64 overflow-auto p-3 text-xs", children: logs.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 py-1.5 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
          l.action,
          " ",
          l.details ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "— ",
            l.details
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: l.created_at && new Date(l.created_at).toLocaleString() })
      ] }, l.id)) })
    ] })
  ] });
}
export {
  SavedPage as component
};
