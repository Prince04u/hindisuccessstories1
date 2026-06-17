import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as formatDistanceToNow } from "../_libs/date-fns.mjs";
function ArticleCard({ a, variant = "row" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group grid grid-cols-1 md:grid-cols-3 gap-6", children: [
    a.cover_image_url && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/article/$slug", params: { slug: a.slug }, className: "md:col-span-1 block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 outline-1 -outline-offset-1 outline-black/5 transition-transform group-hover:scale-[1.02]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.cover_image_url, alt: a.title, loading: "lazy", className: "w-full h-full object-cover" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${a.cover_image_url ? "md:col-span-2" : "md:col-span-3"} flex flex-col justify-center`, children: [
      a.category && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: a.category.slug }, className: "text-[10px] font-bold uppercase tracking-widest text-accent mb-2 hover:underline", children: a.category.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/article/$slug", params: { slug: a.slug }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-serif font-bold mb-2 leading-snug group-hover:underline underline-offset-4 decoration-accent/30 text-balance", children: a.title }) }),
      a.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/60 text-sm line-clamp-2 mb-3", children: a.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-ink/40", children: [
        a.author && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/author/$username", params: { username: a.author.username }, className: "hover:text-accent", children: a.author.display_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          a.reading_time ?? 1,
          " min read"
        ] }),
        (a.published_at || a.created_at) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("time", { children: formatDistanceToNow(new Date(a.published_at ?? a.created_at), { addSuffix: true }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticleCard as A
};
