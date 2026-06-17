import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { a as adminDashboard } from "./admin.functions-BoQ4w4bd.mjs";
import "../_libs/sonner.mjs";

import "../_libs/seroval.mjs";
import { f as formatDistanceToNow } from "../_libs/date-fns.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./router-Dl0oPtZv.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
function AdminOverview() {
  const fn = useServerFn(adminDashboard);
  const {
    data,
    isLoading,
    error
  } = useQuery({
    queryKey: ["admin-dash"],
    queryFn: () => fn(),
    retry: false
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/50", children: "Loading..." });
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive", children: error.message });
  if (!data) return null;
  const s = data.stats;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [{
      label: "Users",
      value: s.users
    }, {
      label: "Published",
      value: s.articles
    }, {
      label: "Pending review",
      value: s.pending
    }, {
      label: "Submissions",
      value: s.submissions
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-ink/40 mb-2", children: c.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-4xl", children: c.value })
    ] }, c.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl mb-4", children: "Recent activity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border rounded-2xl divide-y", children: data.recent.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/articles", className: "flex items-center justify-between p-4 hover:bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ink/50", children: [
            a.author?.display_name,
            " · ",
            a.status
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-ink/40", children: formatDistanceToNow(new Date(a.created_at), {
          addSuffix: true
        }) })
      ] }, a.id)) })
    ] })
  ] });
}
export {
  AdminOverview as component
};
