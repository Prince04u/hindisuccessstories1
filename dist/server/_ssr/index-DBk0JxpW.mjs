import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteHeader, a as SiteFooter, h as homeQO, b as subscribeNewsletter } from "./router-Dl0oPtZv.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { A as ArticleCard } from "./article-card-jFnIUfY-.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { t as toast } from "../_libs/sonner.mjs";

import "../_libs/seroval.mjs";

import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "./client-BbevmGls.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/unenv.mjs";


import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-avatar.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "./server-CGdutTFm.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




import "../_libs/isbot.mjs";
import "./auth-middleware-Cn61DVxk.mjs";
import "./createMiddleware-BvN2ghIY.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
import "../_libs/date-fns.mjs";
function NewsletterCard() {
  const subscribe = useServerFn(subscribeNewsletter);
  const [email, setEmail] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink text-paper p-8 rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-2xl mb-3 text-white", children: "The Success Brief" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mb-5", children: "Weekly insights on growth, grit and ground realities of Indian success stories." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        className: "space-y-3",
        onSubmit: async (e) => {
          e.preventDefault();
          if (!email) return;
          setBusy(true);
          try {
            await subscribe({ data: { email } });
            toast.success("Subscribed!");
            setEmail("");
          } catch (err) {
            toast.error(err?.message ?? "Failed");
          } finally {
            setBusy(false);
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Email address",
              className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: busy, className: "w-full bg-accent text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50", children: busy ? "Subscribing..." : "Subscribe" })
        ]
      }
    )
  ] });
}
function Home() {
  const {
    data
  } = useSuspenseQuery(homeQO);
  const featured = data.featured;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-paper text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-7xl mx-auto px-6 w-full flex-1", children: [
      featured ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-ink/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider rounded-sm", children: "Featured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-ink/40 text-xs", children: [
              featured.reading_time ?? 1,
              " min read",
              featured.category && ` • ${featured.category.name}`
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/article/$slug", params: {
            slug: featured.slug
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl leading-[1.05] mb-8 hover:text-accent transition-colors text-balance", children: featured.title }) }),
          featured.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-ink/70 leading-relaxed mb-8 max-w-xl", children: featured.excerpt }),
          featured.author && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/author/$username", params: {
            username: featured.author.username
          }, className: "flex items-center gap-4 group/a", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-stone-200 outline-1 -outline-offset-1 outline-black/5 overflow-hidden", children: featured.author.avatar_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.author.avatar_url, alt: "", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium group-hover/a:text-accent", children: featured.author.display_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ink/40", children: [
                "@",
                featured.author.username
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/article/$slug", params: {
          slug: featured.slug
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 outline-1 -outline-offset-1 outline-black/5", children: featured.cover_image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.cover_image_url, alt: featured.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full grid place-items-center font-serif text-7xl text-ink/10", children: "HSS" }) }) }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 text-center border-b border-ink/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl leading-tight mb-6", children: [
          "Where ideas find their ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "voice" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-ink/60 max-w-2xl mx-auto mb-8", children: "A premium space for Hindi and English writers to share profound narratives." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "inline-block bg-ink text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-accent transition-colors", children: "Start writing" })
      ] }),
      data.trending.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ink/30", children: "Trending on HSS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 mx-8 bg-ink/5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12", children: data.trending.slice(0, 6).map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/article/$slug", params: {
          slug: a.slug
        }, className: "flex gap-6 group cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-serif text-ink/10 group-hover:text-accent/30 transition-colors", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl leading-tight mb-3 group-hover:text-accent transition-colors text-balance", children: a.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-ink/40 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.author?.display_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                a.reading_time ?? 1,
                " min"
              ] })
            ] })
          ] })
        ] }, a.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-ink/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-serif italic mb-8 border-b border-ink/5 pb-4", children: "Latest Narratives" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: data.latest.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ink/50", children: [
            "No articles published yet. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "text-accent underline", children: "Be the first to write" }),
            "."
          ] }) : data.latest.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { a }, a.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-28 space-y-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-widest mb-6 text-ink/40", children: "Top Contributors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: data.topAuthors.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/author/$username", params: {
              username: p.username
            }, className: "flex items-center gap-3 group/a", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-stone-200 overflow-hidden", children: p.avatar_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.avatar_url, alt: "", className: "w-full h-full object-cover" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold group-hover/a:text-accent", children: p.display_name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-ink/40", children: p.bio?.slice(0, 40) || "Writer" })
              ] })
            ] }, p.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-widest mb-4 text-ink/40", children: "Discover More" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: data.categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: {
              slug: c.slug
            }, className: "px-3 py-1.5 bg-ink/5 text-[11px] font-medium rounded-full hover:bg-ink/10 transition-colors", children: c.name }, c.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterCard, {})
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Home as component
};
