import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, c as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { d as adminUpdateSubmission, e as adminListSubmissions } from "./admin.functions-BoQ4w4bd.mjs";
import { B as Badge } from "./badge-CO81L5sP.mjs";
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
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./client-BbevmGls.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
function AdminSubmissions() {
  const fn = useServerFn(adminListSubmissions);
  const upd = useServerFn(adminUpdateSubmission);
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin-subs"],
    queryFn: () => fn()
  });
  const m = useMutation({
    mutationFn: (p) => upd({
      data: p
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["admin-subs"]
      });
      toast.success("Updated");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl mb-4", children: "Guest post submissions" }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/50", children: "Loading..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: (data ?? []).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer flex items-center gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: s.tier }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: s.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.proposed_title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-ink/50", children: [
          "— ",
          s.name,
          " (",
          s.email,
          ") — $",
          s.price_cents / 100
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        s.website_url && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Website:" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.website_url, target: "_blank", rel: "noopener", className: "text-accent hover:underline", children: s.website_url })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pitch:" }),
          " ",
          s.pitch
        ] }),
        s.draft_content && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "whitespace-pre-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Draft:" }),
          "\n",
          s.draft_content
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => m.mutate({
            id: s.id,
            status: "approved"
          }), children: "Approve" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => m.mutate({
            id: s.id,
            status: "paid_pending_review"
          }), children: "Mark paid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => m.mutate({
            id: s.id,
            status: "published"
          }), children: "Mark published" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => m.mutate({
            id: s.id,
            status: "rejected"
          }), children: "Reject" })
        ] })
      ] })
    ] }, s.id)) })
  ] });
}
export {
  AdminSubmissions as component
};
