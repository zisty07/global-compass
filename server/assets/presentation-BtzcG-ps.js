import { W as jsxRuntimeExports, r as reactExports } from "./server-BwRcFVCS.js";
import { c as createLucideIcon, h as Radio, N as Newspaper, j as Earth, f as Sparkles, F as FileText, k as Bookmark, S as SectionHeader, D as DataBadge, P as Presentation, l as Link, B as Button, m as ExternalLink } from "./router-BTYIQEhE.js";
import { L as Layers } from "./layers-BPWxmL7f.js";
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
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function PresentationPreviewCard({ step }) {
  const Icon = step.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br ${step.previewAccent} p-5`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: step.previewTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: step.previewBullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-xs leading-relaxed text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
            ] }, b)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-4 grid grid-cols-3 gap-2 opacity-60", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 rounded-md border border-border/40 bg-secondary/30" }, n)) })
      ]
    }
  );
}
const PRESENTATION_STEPS = [
  {
    id: "intro",
    title: "Introduction to Global Pulse",
    explanation: "Global Pulse is an educational planetary monitoring dashboard for InfoEducație. It aggregates public intelligence, seismic, weather, and country data into one dark, analyst-style interface — with clear LIVE, CACHED, and DEMO labels so users always know what they are looking at.",
    featureTo: "/",
    featureLabel: "Open Dashboard",
    icon: Radio,
    previewTitle: "Mission control overview",
    previewBullets: [
      "Live KPI cards: earthquakes, alerts, intelligence count",
      "Critical signals and API health at a glance",
      "Quick actions to every major feature"
    ],
    previewAccent: "from-primary/25 via-primary/5 to-background"
  },
  {
    id: "intelligence",
    title: "Live Intelligence Feed",
    explanation: "Headlines from GNews flow through a same-origin proxy with caching and demo fallback. Filter by category, severity, and region; open details for source links and context. Nothing is invented — status badges show whether data is live or cached.",
    featureTo: "/intelligence",
    featureLabel: "Open Intelligence Feed",
    icon: Newspaper,
    previewTitle: "Curated headline stream",
    previewBullets: [
      "Categories: geopolitics, economy, cyber, military, disasters",
      "Severity chips and search filters",
      "Map integration for geolocated events"
    ],
    previewAccent: "from-amber-500/20 via-background to-background"
  },
  {
    id: "map",
    title: "Globe Map Control Center",
    explanation: "A professional dark MapLibre world map layers earthquakes, intelligence markers, and country context. Pan, zoom, filter by category, and inspect events in the side panel — the spatial heart of situational awareness.",
    featureTo: "/map",
    featureLabel: "Open Live World Map",
    icon: Earth,
    previewTitle: "Geospatial command view",
    previewBullets: [
      "Interactive globe with category filters",
      "Earthquake and intelligence markers",
      "Country focus and event side panel"
    ],
    previewAccent: "from-cyan-500/15 via-background to-background"
  },
  {
    id: "ai",
    title: "Global Pulse AI",
    explanation: "Ask questions about breaking news, the map, and country risk. The server uses Google Gemini when configured, with retries, fallback models, and a local rule-based fallback — always grounded in data already loaded in the app.",
    featureTo: "/ai-news",
    featureLabel: "Open Global Pulse AI",
    icon: Sparkles,
    previewTitle: "Grounded AI analyst",
    previewBullets: [
      "Chat powered by in-app context payload",
      "GEMINI LIVE / LOCAL FALLBACK status badges",
      "Suggested prompts for jury demos"
    ],
    previewAccent: "from-violet-500/20 via-background to-background"
  },
  {
    id: "reports",
    title: "Intelligence Reports",
    explanation: "Generate Country Reports, Event Reports, and Global Briefings from live, cached, or demo data. Optional Gemini polish; structured local fallback when AI is busy. Save to Supabase, view history, and print export.",
    featureTo: "/reports",
    featureLabel: "Open Intelligence Reports",
    icon: FileText,
    previewTitle: "Structured briefings",
    previewBullets: [
      "Country, event, and global briefing types",
      "Risk scores, earthquakes, saved items",
      "Save, delete, and print-friendly export"
    ],
    previewAccent: "from-emerald-500/15 via-background to-background"
  },
  {
    id: "saved",
    title: "Supabase Saved Data",
    explanation: "Persist bookmarks across sessions: saved countries, alerts, intelligence items, and generated reports. Row-level security with demo policies; project_logs audit trail for educational transparency.",
    featureTo: "/saved",
    featureLabel: "Open Saved Data",
    icon: Bookmark,
    previewTitle: "Cloud persistence layer",
    previewBullets: [
      "saved_countries, saved_alerts, saved_intelligence",
      "generated_reports from Intelligence Reports",
      "Debug panel shows Supabase connection status"
    ],
    previewAccent: "from-rose-500/15 via-background to-background"
  },
  {
    id: "architecture",
    title: "Architecture and data sources",
    explanation: "React 19 + TanStack Router on Cloudflare Workers, MapLibre for maps, Recharts for analytics. Public APIs: GNews (proxy), USGS, REST Countries, OpenWeather; Supabase for storage; Gemini for optional AI — all with explicit limitation labels.",
    featureTo: "/about",
    featureLabel: "Open About & Sources",
    icon: Layers,
    previewTitle: "Stack and ethics",
    previewBullets: [
      "TanStack Start · Vite · Tailwind · TypeScript",
      "Server routes for AI and GNews proxy",
      "Educational use only — not operational intelligence"
    ],
    previewAccent: "from-slate-500/20 via-background to-background"
  }
];
function PresentationPage() {
  const [index, setIndex] = reactExports.useState(0);
  const step = PRESENTATION_STEPS[index];
  const Icon = step.icon;
  const isFirst = index === 0;
  const isLast = index === PRESENTATION_STEPS.length - 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-5 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          title: "Presentation Mode",
          subtitle: "Guided demo flow for InfoEducație jury — step through each capability, then open the live feature",
          right: /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: "live", children: "Jury demo" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Presentation, { className: "h-4 w-4 text-primary" }),
        "Step ",
        index + 1,
        " of ",
        PRESENTATION_STEPS.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: PRESENTATION_STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIndex(i),
        className: `rounded-full px-2.5 py-1 text-[11px] transition-colors ${i === index ? "bg-primary/15 text-primary border border-primary/30" : "border border-border/50 text-muted-foreground hover:text-foreground"}`,
        "aria-current": i === index ? "step" : void 0,
        children: [
          i + 1,
          ". ",
          s.title.split(" ").slice(0, 2).join(" ")
        ]
      },
      s.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[1fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card space-y-4 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold tracking-tight", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "InfoEducație · Global Pulse" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: step.explanation }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: step.featureTo, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", className: "w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
          step.featureLabel
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PresentationPreviewCard, { step })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          disabled: isFirst,
          onClick: () => setIndex((i) => Math.max(0, i - 1)),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "mr-1 h-4 w-4" }),
            "Previous"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
        index + 1,
        " / ",
        PRESENTATION_STEPS.length
      ] }),
      isLast ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", children: [
        "Finish demo",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 h-4 w-4" })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: () => setIndex((i) => Math.min(PRESENTATION_STEPS.length - 1, i + 1)), children: [
        "Next",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 h-4 w-4" })
      ] })
    ] })
  ] });
}
const SplitComponent = PresentationPage;
export {
  SplitComponent as component
};
