import { W as jsxRuntimeExports, r as reactExports } from "./server-BwRcFVCS.js";
import { c as createLucideIcon, t as toast, B as Button, k as Bookmark, e as LoaderCircle, i as isSupabaseConfigured, s as supabaseService, R as RefreshCw, D as DataBadge, N as Newspaper, A as ShieldAlert, C as Activity, f as Sparkles } from "./router-BTYIQEhE.js";
import { c as createMessage, b as buildNewsContext, W as WELCOME_MESSAGE, s as sendGlobalPulseAIChat, S as SUGGESTED_PROMPTS, f as fetchGeminiProviderStatus } from "./aiNewsAnalystService-CG1H91Vb.js";
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
const __iconNode$4 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$4);
const __iconNode$3 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function renderContent(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground", children: part.slice(2, -2) }, i);
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-muted-foreground not-italic", children: part.slice(1, -1) }, i);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, i);
  });
}
function statusBadge(status) {
  switch (status) {
    case "GEMINI LIVE":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-emerald-500/40 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400", children: "GEMINI LIVE" });
    case "GEMINI FALLBACK MODEL":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-cyan-500/40 bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-cyan-600 dark:text-cyan-400", children: "GEMINI FALLBACK MODEL" });
    case "GEMINI TEMPORARILY BUSY":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400", children: "GEMINI TEMPORARILY BUSY" });
    case "LOCAL FALLBACK":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400", children: "LOCAL FALLBACK" });
    case "GEMINI ERROR":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-rose-500/30 bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-rose-600/90 dark:text-rose-400/90", children: "GEMINI ERROR" });
    default:
      return null;
  }
}
function resolveStatus(message) {
  if (message.aiStatus) return message.aiStatus;
  if (message.localFallback) return "LOCAL FALLBACK";
  if (message.geminiLive) return "GEMINI LIVE";
  return void 0;
}
function AINewsMessageBubble({ message }) {
  const isUser = message.role === "user";
  const status = !isUser ? resolveStatus(message) : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${isUser ? "border-primary/40 bg-primary/15 text-primary" : "border-border/60 bg-secondary/40 text-muted-foreground"}`,
        children: isUser ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `max-w-[85%] rounded-xl border px-3 py-2.5 text-sm leading-relaxed ${isUser ? "border-primary/30 bg-primary/10 text-foreground" : "border-border/50 bg-secondary/20 text-foreground/90"}`,
        children: [
          status ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex flex-wrap items-center gap-1.5", children: [
            statusBadge(status),
            message.model && status !== "LOCAL FALLBACK" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: message.model }) : null
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap", children: renderContent(message.content) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1.5 text-[10px] ${isUser ? "text-primary/70" : "text-muted-foreground"}`, children: new Date(message.createdAt).toLocaleTimeString() })
        ]
      }
    )
  ] });
}
function SuggestedPromptButton({ label, onClick, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      disabled,
      className: "shrink-0 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary disabled:opacity-50",
      children: label
    }
  );
}
function AINewsChat({ context, onContextRefresh, contextLoading }) {
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [thinking, setThinking] = reactExports.useState(false);
  const [lastPair, setLastPair] = reactExports.useState(null);
  const [lastFailedQuestion, setLastFailedQuestion] = reactExports.useState(null);
  const bottomRef = reactExports.useRef(null);
  const ctxRef = reactExports.useRef(context);
  const welcomedRef = reactExports.useRef(false);
  ctxRef.current = context;
  reactExports.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);
  reactExports.useEffect(() => {
    if (welcomedRef.current) return;
    welcomedRef.current = true;
    setMessages([createMessage("assistant", WELCOME_MESSAGE)]);
  }, []);
  const sendQuestion = reactExports.useCallback(
    async (question, isRetry = false) => {
      const q = question.trim();
      if (!q || thinking) return;
      let ctx = ctxRef.current;
      if (!ctx) {
        try {
          ctx = await buildNewsContext();
          await onContextRefresh();
        } catch {
          toast.error("Could not load analyst context.");
          return;
        }
      }
      if (!isRetry) {
        setMessages((prev) => [...prev, createMessage("user", q)]);
      }
      setInput("");
      setThinking(true);
      setLastFailedQuestion(null);
      const history = messages.filter((m) => m.role === "user" || m.role === "assistant").filter((m) => !(m.role === "assistant" && m.content === WELCOME_MESSAGE)).slice(-12).map((m) => ({ role: m.role, content: m.content }));
      try {
        const result = await sendGlobalPulseAIChat(history, q, ctx);
        setMessages((prev) => [
          ...prev,
          createMessage("assistant", result.answer, {
            aiStatus: result.status,
            localFallback: result.localFallback,
            geminiLive: result.geminiLive,
            model: result.model,
            retryCount: result.retryCount
          })
        ]);
        setLastPair({ question: q, answer: result.answer });
        if (result.status === "LOCAL FALLBACK") {
          toast.message("Using local analyst — Gemini is temporarily busy or unavailable.");
        } else if (result.status === "GEMINI FALLBACK MODEL") {
          toast.message("Primary model busy — answered with fallback Gemini model.");
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Global Pulse AI failed to respond.";
        toast.error(msg);
        setLastFailedQuestion(q);
        setMessages((prev) => [
          ...prev,
          createMessage("assistant", `I couldn't process that request: ${msg}`, {
            localFallback: true,
            aiStatus: "GEMINI ERROR"
          })
        ]);
      } finally {
        setThinking(false);
      }
    },
    [thinking, messages, onContextRefresh]
  );
  async function saveBriefing() {
    if (!lastPair) {
      toast.message("Ask a question first to save a briefing.");
      return;
    }
    if (!isSupabaseConfigured()) {
      toast.error("Supabase is not configured.");
      return;
    }
    try {
      await supabaseService.saveAIBriefing({
        question: lastPair.question,
        answer: lastPair.answer,
        data_status: context?.dataStatus.news ?? "UNKNOWN"
      });
      toast.success("Briefing saved");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Save failed";
      if (/ai_briefings|does not exist|relation/i.test(msg)) {
        toast.error("Briefing save table not configured yet.");
      } else {
        toast.error(msg);
      }
    }
  }
  function clearChat() {
    setMessages([createMessage("assistant", WELCOME_MESSAGE)]);
    setLastPair(null);
    setLastFailedQuestion(null);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex min-h-[480px] flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 overflow-hidden p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Global Pulse AI · Google Gemini when configured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          lastFailedQuestion ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              className: "h-8 text-xs",
              onClick: () => void sendQuestion(lastFailedQuestion, true),
              disabled: thinking,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-1 h-3.5 w-3.5" }),
                " Retry"
              ]
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              className: "h-8 text-xs",
              onClick: () => void saveBriefing(),
              disabled: !lastPair,
              title: !lastPair ? "Ask a question first" : "Save last Q&A to Supabase",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "mr-1 h-3.5 w-3.5" }),
                " Save briefing"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", size: "sm", className: "h-8 text-xs", onClick: clearChat, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-1 h-3.5 w-3.5" }),
            " Clear chat"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1", children: SUGGESTED_PROMPTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SuggestedPromptButton,
        {
          label: p,
          onClick: () => void sendQuestion(p),
          disabled: thinking || contextLoading
        },
        p
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4 overflow-y-auto pr-1 min-h-[240px] max-h-[50vh] lg:max-h-[calc(100vh-22rem)]", children: [
        messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(AINewsMessageBubble, { message: m }, m.id)),
        thinking ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" }),
          "Global Pulse AI is thinking…"
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "form",
      {
        className: "sticky bottom-0 border-t border-border/40 bg-card/80 p-3 backdrop-blur-sm",
        onSubmit: (e) => {
          e.preventDefault();
          void sendQuestion(input);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: input,
              onChange: (e) => setInput(e.target.value),
              placeholder: "Ask Global Pulse AI about news, the map, or the platform…",
              disabled: thinking,
              className: "flex-1 rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: thinking || !input.trim(), className: "shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Send" })
          ] })
        ] })
      }
    )
  ] });
}
function statusVariant(ctx) {
  if (ctx.newsStatus === "live") return "live";
  if (ctx.newsStatus === "cached") return "neutral";
  if (ctx.newsStatus === "demo") return "demo";
  return "error";
}
function HeadlineRow({ e }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/15 px-2.5 py-2 text-[11px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-2 font-medium leading-snug", children: e.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-1.5 text-[10px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase text-rose-glow/90", children: e.severity }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "· ",
        e.category
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "· ",
        e.source
      ] })
    ] })
  ] });
}
function geminiStatusVariant(status) {
  if (status === "GEMINI LIVE" || status === "GEMINI FALLBACK MODEL") return "live";
  if (status === "LOCAL FALLBACK" || status === "GEMINI TEMPORARILY BUSY") return "neutral";
  if (status === "GEMINI ERROR") return "error";
  return "demo";
}
function AINewsContextPanel({
  context,
  loading,
  onRefresh,
  geminiStatus = "GEMINI NOT CONFIGURED",
  geminiModel = "gemini-2.5-flash-lite"
}) {
  if (!context) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex h-full min-h-[280px] flex-col gap-3 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-32 animate-pulse rounded bg-secondary/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 animate-pulse rounded-md bg-secondary/40" }, i)) })
    ] });
  }
  const topHeadlines = [...context.intelligenceItems].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 3);
  const topRisks = (context.countryRisks ?? []).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex flex-col gap-4 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold", children: "Live context" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Signals feeding this analyst" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", className: "h-8 shrink-0 text-xs", onClick: onRefresh, disabled: loading, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `mr-1 h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }),
        "Refresh"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DataBadge, { variant: statusVariant(context), children: [
      context.dataStatus.news,
      " DATA"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/10 px-2.5 py-2 text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: "Google Gemini" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-muted-foreground", children: geminiModel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: geminiStatusVariant(geminiStatus), children: geminiStatus }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/15 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "mx-auto h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-semibold tabular-nums", children: context.intelligenceItems.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Headlines" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/15 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "mx-auto h-4 w-4 text-rose-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-semibold tabular-nums", children: context.criticalAlerts.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Critical / high" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/15 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "mx-auto h-4 w-4 text-amber-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-semibold tabular-nums", children: context.earthquakes.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Earthquakes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/15 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "mx-auto h-4 w-4 text-cyan-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-semibold tabular-nums", children: context.savedIntelligence?.length ?? 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Saved intel" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-3.5 w-3.5" }),
        " Sources"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/10 px-2 py-1.5", children: [
        "News: ",
        context.dataStatus.news,
        " · ",
        context.newsSource
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/10 px-2 py-1.5", children: [
        "USGS: ",
        context.dataStatus.earthquakes
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/40 bg-secondary/10 px-2 py-1.5", children: [
        "Supabase: ",
        context.dataStatus.supabase
      ] }),
      context.lastUpdated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
        "Updated ",
        new Date(context.lastUpdated).toLocaleString()
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: "Top headlines" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: topHeadlines.length ? topHeadlines.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(HeadlineRow, { e }, e.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "No headlines loaded." }) })
    ] }),
    topRisks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: "Country risk" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: topRisks.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between rounded-md border border-border/40 px-2 py-1.5 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.country }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums text-amber-glow", children: r.score })
      ] }, r.country)) })
    ] })
  ] });
}
function pageStatusLabel(status) {
  switch (status) {
    case "live":
      return "LIVE DATA";
    case "cached":
      return "CACHED DATA";
    case "demo":
      return "DEMO DATA";
    case "rate_limited":
      return "RATE LIMITED";
    case "error":
      return "API ERROR";
    default:
      return "LOADING";
  }
}
function pageStatusVariant(status) {
  if (status === "live") return "live";
  if (status === "cached") return "neutral";
  if (status === "demo") return "demo";
  return "error";
}
function AINewsPage() {
  const [context, setContext] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [geminiStatus, setGeminiStatus] = reactExports.useState("GEMINI NOT CONFIGURED");
  const [geminiModel, setGeminiModel] = reactExports.useState("gemini-2.5-flash-lite");
  const loadContext = reactExports.useCallback(async (force = false) => {
    setLoading(true);
    try {
      const ctx = await buildNewsContext({
        force
      });
      setContext(ctx);
    } catch {
      setContext(null);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    void loadContext(false);
  }, [loadContext]);
  reactExports.useEffect(() => {
    void fetchGeminiProviderStatus().then((s) => {
      setGeminiStatus(s.status);
      setGeminiModel(s.model);
    });
  }, []);
  const status = context?.newsStatus ?? "demo";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-5 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "flex items-center gap-2 text-2xl font-semibold tracking-tight md:text-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-7 w-7 text-primary" }),
            "Global Pulse AI"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Ask about headlines, earthquakes, risk scores, the map, and how to use Global Pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataBadge, { variant: pageStatusVariant(status), children: pageStatusLabel(status) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 max-w-3xl text-xs text-muted-foreground", children: [
        "Answers use data already loaded in the app (GNews proxy, USGS, Supabase bookmarks, country risk). When",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-muted px-1 py-0.5", children: "GEMINI_API_KEY" }),
        " is set server-side, responses use Google Gemini (",
        geminiModel,
        "); otherwise a local rule-based fallback applies. The assistant does not invent headlines."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[1fr_320px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AINewsChat, { context, contextLoading: loading, onContextRefresh: async () => {
        await loadContext(false);
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AINewsContextPanel, { context, loading, geminiStatus, geminiModel, onRefresh: () => void loadContext(false) })
    ] })
  ] });
}
export {
  AINewsPage as component
};
