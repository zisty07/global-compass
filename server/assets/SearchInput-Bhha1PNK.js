import { W as jsxRuntimeExports } from "./server-BwRcFVCS.js";
import { q as Search } from "./router-BTYIQEhE.js";
function SearchInput({ value, onChange, onSubmit, placeholder }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit?.();
      },
      className: "flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-2 focus-within:border-primary/60",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground",
            value,
            onChange: (e) => onChange(e.target.value),
            placeholder: placeholder ?? "Search…"
          }
        )
      ]
    }
  );
}
export {
  SearchInput as S
};
