import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, c as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { b as adminToggleRole, c as adminListUsers } from "./admin.functions-BoQ4w4bd.mjs";
import { B as Button } from "./router-Dl0oPtZv.mjs";
import { t as toast } from "../_libs/sonner.mjs";

import "../_libs/seroval.mjs";

import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "./auth-middleware-Cn61DVxk.mjs";
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
import "./createMiddleware-BvN2ghIY.mjs";
import "./server-CGdutTFm.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




import "../_libs/zod.mjs";
import "./client-BbevmGls.mjs";
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
import "../_libs/lucide-react.mjs";
const ROLES = ["admin", "editor", "author", "reader"];
function AdminUsers() {
  const fn = useServerFn(adminListUsers);
  const tog = useServerFn(adminToggleRole);
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin-users"],
    queryFn: () => fn()
  });
  const m = useMutation({
    mutationFn: (p) => tog({
      data: p
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["admin-users"]
      });
      toast.success("Updated");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl mb-4", children: "Users" }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/50", children: "Loading..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border rounded-2xl divide-y", children: (data ?? []).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex items-center gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-stone-200 overflow-hidden shrink-0", children: u.avatar_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: u.avatar_url, alt: "", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate", children: u.display_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ink/50", children: [
          "@",
          u.username
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 flex-wrap", children: ROLES.map((r) => {
        const has = u.roles.includes(r);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: has ? "default" : "outline", className: "text-xs h-7", onClick: () => m.mutate({
          user_id: u.id,
          role: r
        }), children: [
          r,
          has ? " ✓" : ""
        ] }, r);
      }) })
    ] }, u.id)) })
  ] });
}
export {
  AdminUsers as component
};
