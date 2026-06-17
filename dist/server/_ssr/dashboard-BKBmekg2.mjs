import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQueryClient, c as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { m as listMyArticles, n as deleteMyArticle, S as SiteHeader, B as Button, a as SiteFooter } from "./router-Dl0oPtZv.mjs";
import { B as Badge } from "./badge-CO81L5sP.mjs";
import { t as toast } from "../_libs/sonner.mjs";

import "../_libs/seroval.mjs";
import { P as PenLine, E as Eye, H as Heart, M as MessageSquare, g as Pencil, T as Trash2 } from "../_libs/lucide-react.mjs";
import { f as formatDistanceToNow } from "../_libs/date-fns.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
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




import "./auth-middleware-Cn61DVxk.mjs";
import "./createMiddleware-BvN2ghIY.mjs";
import "../_libs/zod.mjs";
function Dashboard() {
  const fn = useServerFn(listMyArticles);
  const del = useServerFn(deleteMyArticle);
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["my-articles"],
    queryFn: () => fn()
  });
  const m = useMutation({
    mutationFn: (id) => del({
      data: {
        id
      }
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["my-articles"]
      });
      toast.success("Deleted");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-paper", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-6xl mx-auto px-6 py-10 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl", children: "Your stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/50 text-sm mt-1", children: "Drafts, submissions and published work." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "rounded-full bg-ink hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/write", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "size-3.5" }),
          "New story"
        ] }) })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/50", children: "Loading..." }) : !data?.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border border-dashed rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/50 mb-4", children: "You haven't written anything yet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "rounded-full bg-ink hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/write", children: "Start writing" }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border rounded-2xl divide-y", children: data.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: a.status === "published" ? "default" : a.status === "pending" ? "secondary" : "outline", children: a.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-ink/40", children: formatDistanceToNow(new Date(a.created_at), {
              addSuffix: true
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: a.title }),
          a.status === "published" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs text-ink/50 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3" }),
              " ",
              a.view_count
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-3" }),
              " ",
              a.like_count
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-3" }),
              " ",
              a.comment_count
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          a.status === "published" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/article/$slug", params: {
            slug: a.slug
          }, children: "View" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/write", search: {
            id: a.id
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "size-3" }),
            " Edit"
          ] }) }),
          (a.status === "draft" || a.status === "rejected") && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => confirm("Delete this draft?") && m.mutate(a.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-3 text-destructive" }) })
        ] })
      ] }, a.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Dashboard as component
};
